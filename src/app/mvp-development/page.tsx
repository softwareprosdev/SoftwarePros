import { BarChart, Build, Loop, RocketLaunch, Speed, Verified } from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "MVP Development Agency | Launch Your Product Fast | SoftwarePros",
  description:
    "MVP development for startups and entrepreneurs. Validate your idea, launch fast, and iterate based on real user feedback. From concept to product.",
  alternates: {
    canonical: "https://softwarepros.org/mvp-development",
  },
  keywords: [
    "MVP development agency",
    "startup software development",
    "MVP development services",
    "build MVP product",
    "rapid product development",
  ],
  openGraph: {
    title: "MVP Development Agency | SoftwarePros",
    description: "Launch your product fast with MVP development that validates your idea.",
    url: "https://softwarepros.org/mvp-development",
  },
};

interface MVPPhase {
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
}

const mvpPhases: MVPPhase[] = [
  {
    icon: RocketLaunch,
    title: "Discovery & Planning",
    description:
      "Define your core value proposition and identify the minimum features needed to validate your idea.",
    deliverables: [
      "User research summary",
      "Feature prioritization",
      "Technical architecture",
      "Development roadmap",
    ],
  },
  {
    icon: Build,
    title: "Rapid Development",
    description: "Build your MVP fast using proven technologies and agile development practices.",
    deliverables: [
      "Core features",
      "User authentication",
      "Admin dashboard",
      "Analytics integration",
    ],
  },
  {
    icon: Speed,
    title: "Launch & Learn",
    description: "Deploy your MVP to real users and start collecting feedback and usage data.",
    deliverables: [
      "Production deployment",
      "User onboarding",
      "Feedback collection",
      "Usage analytics",
    ],
  },
  {
    icon: Loop,
    title: "Iterate & Improve",
    description: "Use real user data to prioritize features and continuously improve your product.",
    deliverables: [
      "Feature iterations",
      "Performance optimization",
      "A/B testing",
      "Roadmap updates",
    ],
  },
  {
    icon: Verified,
    title: "Validation & Scale",
    description: "Validate product-market fit and prepare for scaling to more users.",
    deliverables: [
      "Conversion metrics",
      "Retention analysis",
      "Scale planning",
      "Investor-ready metrics",
    ],
  },
  {
    icon: BarChart,
    title: "Growth Features",
    description: "Add features that drive growth, engagement, and monetization.",
    deliverables: [
      "Referral systems",
      "Premium features",
      "API for integrations",
      "White-label options",
    ],
  },
];

export default function MVPDevelopmentPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <RocketLaunch className="w-16 h-16 text-pink-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">MVP Development</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Launch your product in weeks, not months. We help startups validate ideas fast with
            minimum viable products that real users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Start Your MVP
            </Link>
            <Link
              href="/saas-development"
              className="inline-flex items-center px-8 py-4 border border-pink-600 text-pink-400 hover:bg-pink-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Scale to Full SaaS
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Start with an MVP?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">42%</div>
              <p className="text-gray-400">of startups fail due to no market need</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">10x</div>
              <p className="text-gray-400">cheaper to iterate on an MVP than a full product</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">70%</div>
              <p className="text-gray-400">faster time to market with MVP approach</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Our MVP Development Process</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            A proven approach to building products that users want.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mvpPhases.map((phase) => {
              const IconComponent = phase.icon;
              return (
                <div
                  key={phase.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-pink-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-pink-400 mr-3" />
                    <h3 className="text-xl font-semibold">{phase.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.deliverables.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-pink-400 rounded-full mr-3" />
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
          <h2 className="text-3xl font-bold mb-6">Have an Idea? Let's Validate It.</h2>
          <p className="text-gray-400 mb-8">
            Get a free consultation to discuss your product idea and MVP strategy.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Book Free Strategy Call
          </Link>
        </div>
      </section>
    </div>
  );
}
