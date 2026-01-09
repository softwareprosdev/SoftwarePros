import { GppGood, Lock, Policy, Security, Storage, VerifiedUser } from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "HIPAA Compliant Software Development - SoftwarePros",
  description:
    "Expert development of HIPAA-compliant healthcare software. Ensure PHI security, regulatory compliance, and audit readiness with our certified solutions.",
  alternates: {
    canonical: "https://softwarepros.org/services/hipaa-compliant-software",
  },
  openGraph: {
    title: "HIPAA Compliant Software Development - SoftwarePros",
    description: "Secure, compliant, and audit-ready software solutions for healthcare.",
    url: "https://softwarepros.org/services/hipaa-compliant-software",
  },
};

export default function HIPAACompliantSoftwarePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-emerald-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <GppGood className="w-16 h-16 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            HIPAA Compliant Software Development
          </h1>
          <p className="text-xl text-emerald-200 max-w-3xl mx-auto mb-8">
            Build with confidence. We deliver healthcare software solutions that strictly adhere to
            HIPAA regulations, ensuring the utmost security for Protected Health Information (PHI).
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Start Your Secure Project
          </Link>
        </div>
      </section>

      {/* Core Compliance Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Security & Compliance Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Lock className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">End-to-End Encryption</h3>
              <p className="text-gray-600">
                AES-256 encryption for data at rest and TLS 1.3 for data in transit, ensuring PHI
                remains unreadable to unauthorized parties.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <VerifiedUser className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Access Controls</h3>
              <p className="text-gray-600">
                Role-based access control (RBAC), multi-factor authentication (MFA), and strict
                session management to limit data exposure.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Policy className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Audit Trails</h3>
              <p className="text-gray-600">
                Comprehensive logging of all user activities and data access events to maintain
                accountability and audit readiness.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Storage className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Secure Backup & Recovery</h3>
              <p className="text-gray-600">
                Encrypted backup solutions with disaster recovery planning to ensure business
                continuity and data integrity.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <Security className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Vulnerability Management</h3>
              <p className="text-gray-600">
                Regular security scans, penetration testing, and patch management to identify and
                mitigate potential threats.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <GppGood className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Business Associate Agreements</h3>
              <p className="text-gray-600">
                Guidance on BAA management with vendors and cloud providers to ensure a fully
                compliant ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Secure Technology Stack</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            We utilize proven technologies configured specifically for HIPAA compliance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "AWS (HIPAA Eligible Services)",
              "PostgreSQL (Encrypted)",
              "Next.js (Secure Headers)",
              "Node.js",
              "Docker Containers",
              "Kubernetes",
              "Terraform (IaC)",
              "Auth0 / Cognito",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white p-4 rounded shadow-sm text-center font-medium text-gray-700"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ensure Your Software is HIPAA Compliant</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Don't risk fines or data breaches. Partner with experts who understand the complexities
            of healthcare regulations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get a Compliance Audit
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-semibold rounded-lg transition-colors duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
