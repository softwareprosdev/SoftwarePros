import {
  Cloud,
  CreditCard,
  People,
  Security,
  Speed,
  TrendingUp,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "SaaS Development Company | Build Your SaaS Product | SoftwarePros",
  description:
    "Expert SaaS development for startups and entrepreneurs. We build subscription platforms, multi-tenant applications, and productized software that scales.",
  alternates: {
    canonical: "https://softwarepros.org/saas-development",
  },
  keywords: [
    "SaaS development company",
    "build a SaaS product",
    "SaaS software development",
    "subscription software development",
    "SaaS platform development",
  ],
  openGraph: {
    title: "SaaS Development Company | SoftwarePros",
    description: "Build your SaaS product with a team that understands subscription business models.",
    url: "https://softwarepros.org/saas-development",
  },
};

interface SaaSFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  includes: string[];
}

const saasFeatures: SaaSFeature[] = [
  {
    icon: People,
    title: "Multi-Tenant Architecture",
    description:
      "Scalable architecture that serves multiple customers from a single codebase.",
    includes: [
      "Tenant isolation",
      "Shared infrastructure",
      "Custom branding per tenant",
      "Data segregation",
    ],
  },
  {
    icon: CreditCard,
    title: "Subscription Billing",
    description:
      "Complete billing system with plans, trials, upgrades, and payment processing.",
    includes: [
      "Stripe/PayPal integration",
      "Multiple pricing tiers",
      "Free trials",
      "Usage-based billing",
    ],
  },
  {
    icon: Security,
    title: "Authentication & Security",
    description:
      "Enterprise-grade security with SSO, 2FA, and role-based access control.",
    includes: [
      "OAuth/SSO integration",
      "Two-factor auth",
      "Role-based permissions",
      "Audit logging",
    ],
  },
  {
    icon: TrendingUp,
    title: "Analytics & Metrics",
    description:
      "Built-in analytics to track user engagement, churn, and revenue metrics.",
    includes: [
      "User activity tracking",
      "Churn prediction",
      "Revenue dashboards",
      "Feature usage",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud deployment that grows with your user base.",
    includes: [
      "Auto-scaling",
      "Global CDN",
      "99.9% uptime SLA",
      "Disaster recovery",
    ],
  },
  {
    icon: Speed,
    title: "Performance & Speed",
    description:
      "Optimized for fast load times and smooth user experience at scale.",
    includes: [
      "Edge caching",
      "Database optimization",
      "Lazy loading",
      "Real-time updates",
    ],
  },
];

export default function SaaSDevelopmentPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Cloud className="w-16 h-16 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SaaS Development
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Launch your software product faster. We build SaaS platforms with
            subscription billing, multi-tenancy, and everything you need to scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Start Your SaaS Project
            </Link>
            <Link
              href="/mvp-development"
              className="inline-flex items-center px-8 py-4 border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Learn About MVPs
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            SaaS by the Numbers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">$195B</div>
              <p className="text-gray-400">
                Global SaaS market size in 2025
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">18%</div>
              <p className="text-gray-400">
                Annual growth rate of SaaS industry
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-400 mb-2">85%</div>
              <p className="text-gray-400">
                of businesses use SaaS applications
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            What We Build Into Every SaaS
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Essential features that every successful SaaS needs, built right from
            the start.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saasFeatures.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-indigo-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-indigo-400 mr-3" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your SaaS?
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us about your product idea and we'll help you build it right.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Schedule SaaS Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
