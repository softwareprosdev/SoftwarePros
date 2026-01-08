import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  try {
    // Test if Resend is configured
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "RESEND_API_KEY environment variable is not set",
          configured: false,
        },
        { status: 400 },
      );
    }

    // Simple email test (without actually sending)
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Check if domain is verified in Resend
    try {
      const domains = await resend.domains.list();
      const domainData = domains.data ? domains.data.data : [];
      const isDomainVerified =
        Array.isArray(domainData) &&
        domainData.some(
          (domain: any) => domain.name === "softwarepros.org" && domain.status === "verified",
        );

      return NextResponse.json({
        success: true,
        configured: true,
        resendConfigured: true,
        domainVerified: isDomainVerified,
        message: isDomainVerified
          ? "Resend is properly configured and domain is verified"
          : "Resend API key is configured but domain verification is needed",
        domains: domainData,
      });
    } catch (domainError) {
      return NextResponse.json({
        success: true,
        configured: true,
        resendConfigured: true,
        domainVerified: false,
        error: domainError instanceof Error ? domainError.message : "Domain check failed",
      });
    }
  } catch (error) {
    console.error("Resend configuration check failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        configured: false,
      },
      { status: 500 },
    );
  }
}
