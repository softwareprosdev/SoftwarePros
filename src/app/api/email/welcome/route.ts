import { generateWelcomeEmail } from "@/lib/email-templates/welcome-email";
import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const maxDuration = 60;

const welcomeEmailSchema = {
  clientName: "string",
  companyName: "string",
  projectType: "string",
  clientPortalUrl: "string",
  contactEmail: "string",
  contactPhone: "string",
  assignedManager: "string",
  estimatedTimeline: "string",
  nextSteps: "array",
};

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    // Validate required fields
    const requiredFields = [
      "clientName",
      "companyName",
      "projectType",
      "clientPortalUrl",
      "contactEmail",
      "contactPhone",
    ];
    for (const field of requiredFields) {
      if (!payload[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Check if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is required");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Generate email content
    const { html, text } = generateWelcomeEmail(payload);

    // Send welcome email
    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "noreply@email.softwarepros.org",
      to: [payload.contactEmail],
      subject: `Welcome to SoftwarePros - Let's Build Something Amazing! 🚀`,
      html,
      text,
      headers: {
        "X-Mailer": "SoftwarePros Welcome Email Service",
        "X-Application": "SoftwarePros Onboarding",
      },
    });

    if (result.error) {
      console.error("Welcome email error:", result.error);
      throw new Error(`Resend API error: ${result.error.message}`);
    }

    console.log("Welcome email sent successfully:", {
      messageId: result.data?.id,
      to: payload.contactEmail,
      clientName: payload.clientName,
      companyName: payload.companyName,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      messageId: result.data?.id,
      message: "Welcome email sent successfully",
    });
  } catch (error) {
    console.error("Welcome email sending failed:", error);

    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send welcome email",
        success: false,
      },
      { status: 500 },
    );
  }
}
