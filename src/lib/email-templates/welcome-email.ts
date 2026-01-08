/**
 * Welcome Email Template for New Clients
 * Professional onboarding email with next steps and contact information
 */

export interface WelcomeEmailData {
  clientName: string;
  companyName: string;
  projectType: string;
  clientPortalUrl: string;
  contactEmail: string;
  contactPhone: string;
  assignedManager?: string;
  estimatedTimeline?: string;
  nextSteps?: string[];
}

export function generateWelcomeEmail(data: WelcomeEmailData): {
  html: string;
  text: string;
} {
  const {
    clientName,
    companyName,
    projectType,
    clientPortalUrl,
    contactEmail,
    contactPhone,
    assignedManager,
    estimatedTimeline,
    nextSteps = [
      "Review your project details in the client portal",
      "Schedule your kickoff meeting",
      "Provide any additional requirements",
      "Review and approve the project timeline",
    ],
  } = data;

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to SoftwarePros - Let's Build Something Amazing</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f4f4f4;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #0066CC 0%, #004499 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .logo img {
            width: 40px;
            height: 40px;
            border-radius: 8px;
        }
        
        .logo-text {
            font-size: 24px;
            font-weight: bold;
            color: white;
        }
        
        .welcome-title {
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        
        .welcome-subtitle {
            font-size: 16px;
            opacity: 0.9;
            line-height: 1.4;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .section {
            margin-bottom: 35px;
        }
        
        .section-title {
            font-size: 20px;
            font-weight: 600;
            color: #0066CC;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .project-info {
            background-color: #f8f9fa;
            border-left: 4px solid #0066CC;
            padding: 20px;
            border-radius: 4px;
            margin: 20px 0;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            padding: 8px 0;
            border-bottom: 1px solid #e9ecef;
        }
        
        .info-row:last-child {
            border-bottom: none;
        }
        
        .info-label {
            font-weight: 600;
            color: #666666;
        }
        
        .info-value {
            font-weight: 500;
            color: #333333;
        }
        
        .steps-list {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .step-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 12px 0;
            border-bottom: 1px solid #e9ecef;
        }
        
        .step-item:last-child {
            border-bottom: none;
        }
        
        .step-number {
            background-color: #0066CC;
            color: white;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .step-content {
            flex: 1;
        }
        
        .step-title {
            font-weight: 600;
            margin-bottom: 4px;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #0066CC 0%, #004499 100%);
            color: white;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 6px;
            font-weight: 600;
            text-align: center;
            margin: 25px 0;
            transition: transform 0.2s ease;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-top: 20px;
        }
        
        .contact-card {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 6px;
            text-align: center;
        }
        
        .contact-icon {
            color: #0066CC;
            font-size: 20px;
            margin-bottom: 10px;
        }
        
        .contact-label {
            font-weight: 600;
            color: #666666;
            margin-bottom: 5px;
        }
        
        .contact-value {
            color: #333333;
            word-break: break-word;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e9ecef;
        }
        
        .footer-text {
            color: #666666;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .signature {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
        }
        
        .signature-title {
            font-weight: 600;
            color: #333333;
        }
        
        .signature-subtitle {
            color: #666666;
            font-size: 14px;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 0 10px;
                border-radius: 0;
            }
            
            .header {
                padding: 30px 20px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .contact-grid {
                grid-template-columns: 1fr;
            }
            
            .welcome-title {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo">
                <img src="https://softwarepros.org/images/softwarepros-logo.png" alt="SoftwarePros Logo" onerror="this.style.display='none'">
                <div class="logo-text">SoftwarePros</div>
            </div>
            <h1 class="welcome-title">Welcome to SoftwarePros!</h1>
            <p class="welcome-subtitle">We're excited to partner with ${companyName} on your ${projectType} project</p>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Welcome Message -->
            <div class="section">
                <p>Dear <strong>${clientName}</strong>,</p>
                <p>On behalf of the entire SoftwarePros team, I want to extend a warm welcome and thank you for choosing us as your technology partner. We're thrilled to begin working with ${companyName} and are confident that our expertise in ${projectType} will help you achieve your business goals.</p>
            </div>

            <!-- Project Information -->
            <div class="section">
                <h2 class="section-title">📋 Your Project Details</h2>
                <div class="project-info">
                    <div class="info-row">
                        <span class="info-label">Company:</span>
                        <span class="info-value">${companyName}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Project Type:</span>
                        <span class="info-value">${projectType}</span>
                    </div>
                    ${
                      assignedManager
                        ? `
                    <div class="info-row">
                        <span class="info-label">Project Manager:</span>
                        <span class="info-value">${assignedManager}</span>
                    </div>
                    `
                        : ""
                    }
                    ${
                      estimatedTimeline
                        ? `
                    <div class="info-row">
                        <span class="info-label">Estimated Timeline:</span>
                        <span class="info-value">${estimatedTimeline}</span>
                    </div>
                    `
                        : ""
                    }
                </div>
            </div>

            <!-- Next Steps -->
            <div class="section">
                <h2 class="section-title">🚀 Your Next Steps</h2>
                <ul class="steps-list">
                    ${nextSteps
                      .map(
                        (step, index) => `
                    <li class="step-item">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <div class="step-title">${step}</div>
                        </div>
                    </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>

            <!-- CTA Button -->
            <div class="section" style="text-align: center;">
                <a href="${clientPortalUrl}" class="cta-button">Access Your Client Portal</a>
                <p style="color: #666666; font-size: 14px; margin-top: 15px;">
                    Your portal contains all project details, timelines, and communication history
                </p>
            </div>

            <!-- Contact Information -->
            <div class="section">
                <h2 class="section-title">💬 Get In Touch</h2>
                <p>We're here to support you every step of the way. Feel free to reach out with any questions or concerns.</p>
                
                <div class="contact-grid">
                    <div class="contact-card">
                        <div class="contact-icon">📧</div>
                        <div class="contact-label">Email</div>
                        <div class="contact-value">${contactEmail}</div>
                    </div>
                    <div class="contact-card">
                        <div class="contact-icon">📞</div>
                        <div class="contact-label">Phone</div>
                        <div class="contact-value">${contactPhone}</div>
                    </div>
                </div>
            </div>

            <!-- Support Hours -->
            <div class="section">
                <h2 class="section-title">🕐 Support Hours</h2>
                <div class="project-info">
                    <div class="info-row">
                        <span class="info-label">Monday - Friday:</span>
                        <span class="info-value">8:00 AM - 6:00 PM CST</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Saturday:</span>
                        <span class="info-value">9:00 AM - 2:00 PM CST</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Sunday:</span>
                        <span class="info-value">Closed</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="signature">
                <div class="signature-title">The SoftwarePros Team</div>
                <div class="signature-subtitle">Enterprise Software Development | Financial Services & Blockchain Experts</div>
            </div>
            <div class="footer-text">
                <p>Thank you for choosing SoftwarePros. We look forward to a successful partnership!</p>
                <p style="margin-top: 10px;">
                    <strong>Location:</strong> 950 E. Van Buren St., Brownsville, TX 78520<br>
                    <strong>Website:</strong> <a href="https://softwarepros.org" style="color: #0066CC; text-decoration: none;">softwarepros.org</a>
                </p>
            </div>
        </div>
    </div>
</body>
</html>
  `;

  const text = `
Welcome to SoftwarePros!

Dear ${clientName},

On behalf of the entire SoftwarePros team, I want to extend a warm welcome and thank you for choosing us as your technology partner. We're thrilled to begin working with ${companyName} and are confident that our expertise in ${projectType} will help you achieve your business goals.

YOUR PROJECT DETAILS
==================
Company: ${companyName}
Project Type: ${projectType}
${assignedManager ? `Project Manager: ${assignedManager}` : ""}
${estimatedTimeline ? `Estimated Timeline: ${estimatedTimeline}` : ""}

YOUR NEXT STEPS
================
${nextSteps.map((step, index) => `${index + 1}. ${step}`).join("\n")}

CLIENT PORTAL
==============
Access your client portal for all project details, timelines, and communication:
${clientPortalUrl}

GET IN TOUCH
=============
Email: ${contactEmail}
Phone: ${contactPhone}

SUPPORT HOURS
==============
Monday - Friday: 8:00 AM - 6:00 PM CST
Saturday: 9:00 AM - 2:00 PM CST
Sunday: Closed

Thank you for choosing SoftwarePros. We look forward to a successful partnership!

The SoftwarePros Team
Enterprise Software Development | Financial Services & Blockchain Experts

Location: 950 E. Van Buren St., Brownsville, TX 78520
Website: softwarepros.org
  `;

  return { html, text };
}
