# Welcome Email Template Usage Examples

## API Usage

### Basic Welcome Email
```bash
curl -X POST https://softwarepros.org/api/email/welcome \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "John Smith",
    "companyName": "TechCorp Inc.",
    "projectType": "Financial Services Software",
    "clientPortalUrl": "https://softwarepros.org/portal/abc123",
    "contactEmail": "john.smith@techcorp.com",
    "contactPhone": "(956) 498-0309",
    "assignedManager": "Sarah Johnson",
    "estimatedTimeline": "3-4 months"
  }'
```

### Welcome Email with Custom Next Steps
```bash
curl -X POST https://softwarepros.org/api/email/welcome \
  -H "Content-Type: application/json" \
  -d '{
    "clientName": "Maria Garcia",
    "companyName": "RealEstate Pro",
    "projectType": "Real Estate Management Software",
    "clientPortalUrl": "https://softwarepros.org/portal/xyz789",
    "contactEmail": "maria@realestatepro.com",
    "contactPhone": "(956) 498-0309",
    "assignedManager": "Michael Chen",
    "estimatedTimeline": "2-3 months",
    "nextSteps": [
      "Schedule project kickoff meeting",
      "Review requirements documentation",
      "Set up development environment",
      "Approve initial mockups"
    ]
  }'
```

## Integration with Onboarding System

### Next.js API Route Example
```typescript
// pages/api/onboarding/[clientId]/welcome.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { clientId } = req.query;
    
    // Get client data from database
    const client = await getClientData(clientId);
    
    // Send welcome email
    const response = await fetch(`${process.env.NEXTAUTH_URL}/api/email/welcome`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientName: client.contactName,
        companyName: client.companyName,
        projectType: client.projectType,
        clientPortalUrl: `https://softwarepros.org/portal/${client.id}`,
        contactEmail: client.email,
        contactPhone: process.env.CONTACT_PHONE,
        assignedManager: client.assignedManager,
        estimatedTimeline: client.estimatedTimeline,
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      // Update client status
      await updateClientStatus(clientId, 'WELCOME_SENT');
      res.status(200).json(result);
    } else {
      res.status(500).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to send welcome email' });
  }
}
```

### Prisma Integration Example
```typescript
// lib/onboarding-service.ts
import { PrismaClient } from '@prisma/client';
import { generateWelcomeEmail } from './email-templates/welcome-email';
import { Resend } from 'resend';

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(clientId: string) {
  try {
    // Get client from database
    const client = await prisma.client.findUnique({
      where: { id: clientId },
      include: { project: true, teamMembers: true },
    });

    if (!client) {
      throw new Error('Client not found');
    }

    // Generate welcome email
    const { html, text } = generateWelcomeEmail({
      clientName: client.contactName,
      companyName: client.companyName,
      projectType: client.project.type,
      clientPortalUrl: `https://softwarepros.org/portal/${client.id}`,
      contactEmail: process.env.CONTACT_EMAIL!,
      contactPhone: process.env.CONTACT_PHONE!,
      assignedManager: client.project.assignedManager,
      estimatedTimeline: client.project.estimatedTimeline,
      nextSteps: [
        "Complete your profile information",
        "Schedule kickoff meeting", 
        "Review project timeline",
        "Set up communication preferences"
      ],
    });

    // Send email
    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: [client.email],
      subject: `Welcome to SoftwarePros - Let's Build Something Amazing! 🚀`,
      html,
      text,
    });

    // Update client status
    await prisma.client.update({
      where: { id: clientId },
      data: {
        status: 'WELCOME_SENT',
        updatedAt: new Date(),
      },
    });

    return result;
  } catch (error) {
    console.error('Welcome email failed:', error);
    throw error;
  }
}
```

## Email Template Features

### ✅ Professional Design
- Modern, responsive layout
- SoftwarePros branding
- Mobile-optimized
- Professional color scheme

### ✅ Content Sections
- Welcome message
- Project details display
- Next steps checklist
- Client portal CTA
- Contact information
- Support hours
- Company signature

### ✅ Personalization
- Client name and company
- Project-specific information
- Assigned project manager
- Custom timeline
- Configurable next steps

### ✅ Mobile Responsive
- Optimized for all devices
- Touch-friendly buttons
- Readable typography
- Proper email client compatibility

### ✅ Security & Deliverability
- HTML + Text versions
- Proper email headers
- Spam-safe content
- Resend deliverability optimization

## Environment Variables Required

Add these to your Coolify environment:

```bash
# Email Configuration
RESEND_API_KEY=re_your_resend_api_key_here
CONTACT_FROM_EMAIL=noreply@softwarepros.org
CONTACT_EMAIL=info@softwarepros.org

# Optional
CONTACT_PHONE=(956) 498-0309
```

## Testing the Template

1. **Local Testing**: Use curl commands above
2. **Browser Testing**: Visit `/api/email/welcome` with POST data
3. **Email Testing**: Use services like [Email on Acid](https://www.emailonacid.com/) or [Litmus](https://litmus.com/)
4. **Spam Testing**: Test with [Mail-Tester](https://www.mail-tester.com/)

The template is ready to use in your onboarding workflow! 🚀