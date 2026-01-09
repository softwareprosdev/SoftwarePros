import { Resend } from "resend";
import { RateLimiter } from "./rate-limiter";

export type ContactEmailData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
  subject?: string;
  budget?: string;
  timeline?: string;
  contactMethod?: string;
  bestTimeToReach?: string;
  website?: string;
  hearAboutUs?: string;
};

// Security configuration
const SECURITY_CONFIG = {
  // Rate limiting: max 10 emails per hour per IP
  RATE_LIMIT: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 10,
  },
  // Email validation patterns
  EMAIL_PATTERNS: {
    // Basic email validation regex
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    // Block suspicious patterns
    suspicious: /(spam|test|example|fake|invalid)/i,
  },
  // Content security
  CONTENT_LIMITS: {
    maxSubjectLength: 200,
    maxMessageLength: 10000,
    maxNameLength: 100,
    maxCompanyLength: 100,
  },
};

// Rate limiter instance
const emailRateLimiter = new RateLimiter(
  SECURITY_CONFIG.RATE_LIMIT.windowMs,
  SECURITY_CONFIG.RATE_LIMIT.max,
  process.env.NODE_ENV === "production",
);

// Input validation and sanitization functions
function validateEmailInput(data: ContactEmailData): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields validation
  if (!data.name?.trim()) errors.push("Name is required");
  if (!data.email?.trim()) errors.push("Email is required");
  if (!data.message?.trim()) errors.push("Message is required");

  // Length limits
  if (data.name && data.name.length > SECURITY_CONFIG.CONTENT_LIMITS.maxNameLength) {
    errors.push(`Name too long (max ${SECURITY_CONFIG.CONTENT_LIMITS.maxNameLength} characters)`);
  }
  if (data.company && data.company.length > SECURITY_CONFIG.CONTENT_LIMITS.maxCompanyLength) {
    errors.push(
      `Company name too long (max ${SECURITY_CONFIG.CONTENT_LIMITS.maxCompanyLength} characters)`,
    );
  }
  if (data.subject && data.subject.length > SECURITY_CONFIG.CONTENT_LIMITS.maxSubjectLength) {
    errors.push(
      `Subject too long (max ${SECURITY_CONFIG.CONTENT_LIMITS.maxSubjectLength} characters)`,
    );
  }
  if (data.message && data.message.length > SECURITY_CONFIG.CONTENT_LIMITS.maxMessageLength) {
    errors.push(
      `Message too long (max ${SECURITY_CONFIG.CONTENT_LIMITS.maxMessageLength} characters)`,
    );
  }

  // Email format validation
  if (data.email && !SECURITY_CONFIG.EMAIL_PATTERNS.email.test(data.email)) {
    errors.push("Invalid email format");
  }

  // Suspicious content detection (relaxed in development)
  if (process.env.NODE_ENV === "production") {
    if (data.name && SECURITY_CONFIG.EMAIL_PATTERNS.suspicious.test(data.name)) {
      errors.push("Name contains suspicious content");
    }
    if (data.company && SECURITY_CONFIG.EMAIL_PATTERNS.suspicious.test(data.company)) {
      errors.push("Company name contains suspicious content");
    }
    if (data.message && SECURITY_CONFIG.EMAIL_PATTERNS.suspicious.test(data.message)) {
      errors.push("Message contains suspicious content");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

function sanitizeEmailInput(data: ContactEmailData): ContactEmailData {
  const sanitizeString = (str: string): string => {
    return str
      .trim()
      .replace(/[<>]/g, "") // Remove potential HTML tags
      .replace(/javascript:/gi, "") // Remove javascript: URLs
      .replace(/on\w+\s*=/gi, "") // Remove event handlers
      .substring(0, 1000); // Limit length
  };

  return {
    ...data,
    name: data.name ? sanitizeString(data.name) : "",
    email: data.email ? data.email.toLowerCase().trim() : "",
    phone: data.phone ? sanitizeString(data.phone) : "",
    company: data.company ? sanitizeString(data.company) : "",
    serviceType: data.serviceType ? sanitizeString(data.serviceType) : "",
    message: data.message ? sanitizeString(data.message) : "",
    subject: data.subject ? sanitizeString(data.subject) : "",
    budget: data.budget ? sanitizeString(data.budget) : "",
    timeline: data.timeline ? sanitizeString(data.timeline) : "",
    contactMethod: data.contactMethod ? sanitizeString(data.contactMethod) : "",
    bestTimeToReach: data.bestTimeToReach ? sanitizeString(data.bestTimeToReach) : "",
    website: data.website ? sanitizeString(data.website) : "",
    hearAboutUs: data.hearAboutUs ? sanitizeString(data.hearAboutUs) : "",
  };
}

function buildHtmlEmail(data: ContactEmailData) {
  const lines: string[] = [];
  lines.push("<h2>New Contact Form Submission</h2>");
  lines.push('<table cellspacing="0" cellpadding="6" style="border-collapse:collapse">');
  const addRow = (label: string, value?: string) => {
    if (!value) return;
    lines.push(
      `<tr><td style="font-weight:600;border-bottom:1px solid #eee">${label}</td><td style="border-bottom:1px solid #eee">${value}</td></tr>`,
    );
  };
  addRow("Name", data.name);
  addRow("Email", data.email);
  addRow("Phone", data.phone);
  addRow("Company", data.company);
  addRow("Website", data.website);
  addRow("Service Type", data.serviceType);
  addRow("Project Subject", data.subject);
  addRow("Budget", data.budget);
  addRow("Timeline", data.timeline);
  addRow("Preferred Contact Method", data.contactMethod);
  addRow("Best Time to Reach", data.bestTimeToReach);
  addRow("Heard About Us", data.hearAboutUs);
  addRow("Message", data.message);
  lines.push("</table>");
  return lines.join("");
}

function buildTextEmail(data: ContactEmailData) {
  const fields: Array<[string, string | undefined]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Company", data.company],
    ["Website", data.website],
    ["Service Type", data.serviceType],
    ["Project Subject", data.subject],
    ["Budget", data.budget],
    ["Timeline", data.timeline],
    ["Preferred Contact Method", data.contactMethod],
    ["Best Time to Reach", data.bestTimeToReach],
    ["Heard About Us", data.hearAboutUs],
    ["Message", data.message],
  ];
  return fields
    .filter(([, v]) => !!v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}

export async function sendContactEmail(data: ContactEmailData, clientIP?: string) {
  try {
    console.log("Starting Resend contact email process...");

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is required");
    }

    // Step 1: Input validation
    console.log("Validating email input...");
    const validation = validateEmailInput(data);
    if (!validation.isValid) {
      console.error("Email validation failed:", validation.errors);
      throw new Error(`Validation failed: ${validation.errors.join(", ")}`);
    }

    // Step 2: Rate limiting check
    const identifier = clientIP || data.email || "unknown";
    console.log(`Checking rate limit for identifier: ${identifier}`);

    if (!(await emailRateLimiter.canMakeRequest(identifier))) {
      const remainingTime = await emailRateLimiter.getTimeUntilNextRequest(identifier);
      const remainingRequests = await emailRateLimiter.getRemainingRequests(identifier);

      console.error(
        `Rate limit exceeded for ${identifier}. Remaining requests: ${remainingRequests}, Time until reset: ${Math.ceil(remainingTime / 1000)}s`,
      );

      throw new Error(
        `Rate limit exceeded. You can send ${remainingRequests} more emails. Please try again later.`,
      );
    }

    // Step 3: Sanitize input
    console.log("Sanitizing email input...");
    const sanitizedData = sanitizeEmailInput(data);

    // Step 4: Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Step 5: Build email content
    const subjectBase = sanitizedData.subject?.trim() || "New Contact Message";
    const subject = `${subjectBase} - ${sanitizedData.name} (${sanitizedData.serviceType || "General"})`;

    const recipientEmail = process.env.CONTACT_EMAIL || "info@email.softwarepros.org";

    // Support multiple recipients (comma-separated)
    const recipients = recipientEmail
      .split(",")
      .map((email) => email.trim())
      .filter((email) => email);
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "noreply@mail.softwarepros.org";

    // Step 6: Send email using Resend
    console.log("Sending email via Resend...");
    const result = await resend.emails.send({
      from: fromEmail,
      to: recipients,
      replyTo: sanitizedData.email,
      subject,
      html: buildHtmlEmail(sanitizedData),
      text: buildTextEmail(sanitizedData),
      headers: {
        "X-Contact-Email": sanitizedData.email,
        "X-Mailer": "SoftwarePros Resend Email Service",
        "X-Application": "SoftwarePros Contact Form",
        "X-Client-IP": clientIP || "unknown",
      },
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      throw new Error(`Resend API error: ${result.error.message}`);
    }

    console.log("Email sent successfully via Resend:", {
      messageId: result.data?.id,
      to: recipientEmail,
      from: fromEmail,
      subject: subject,
      timestamp: new Date().toISOString(),
    });

    return {
      messageId: result.data?.id,
      securityInfo: {
        rateLimitPassed: true,
        inputValidated: true,
        inputSanitized: true,
        secureTransport: true,
      },
    };
  } catch (error) {
    console.error("Resend email sending failed:", error);

    // Enhanced error logging for security monitoring
    const errorDetails = {
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
      clientIP: clientIP || "unknown",
      email: data.email || "unknown",
      name: data.name || "unknown",
    };

    console.error("Security error details:", errorDetails);

    throw error;
  }
}
