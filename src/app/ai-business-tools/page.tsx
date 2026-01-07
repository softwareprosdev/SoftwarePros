import {
  AutoAwesome,
  Chat,
  Description,
  Psychology,
  Search,
  SmartToy,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "AI Business Tools | Custom AI Software Development | SoftwarePros",
  description:
    "Custom AI solutions for businesses. We build AI chatbots, automation tools, internal AI assistants, and custom AI workflows that scale your operations.",
  alternates: {
    canonical: "https://softwarepros.org/ai-business-tools",
  },
  keywords: [
    "AI business tools",
    "custom AI software development",
    "AI automation for business",
    "AI workflow automation",
    "build AI chatbot for business",
  ],
  openGraph: {
    title: "AI Business Tools | SoftwarePros",
    description: "Custom AI solutions that automate and scale your business operations.",
    url: "https://softwarepros.org/ai-business-tools",
  },
};

interface AIService {
  icon: React.ElementType;
  title: string;
  description: string;
  capabilities: string[];
  useCases: string[];
}

const aiServices: AIService[] = [
  {
    icon: Chat,
    title: "AI Chatbots",
    description:
      "Customer-facing chatbots that handle inquiries, qualify leads, and book appointments 24/7.",
    capabilities: [
      "Natural conversations",
      "Multi-language support",
      "Context awareness",
      "Human handoff",
    ],
    useCases: ["Customer support", "Lead qualification", "Appointment booking", "FAQ handling"],
  },
  {
    icon: SmartToy,
    title: "Internal AI Assistants",
    description:
      "AI assistants that help your team work faster by automating research and data tasks.",
    capabilities: [
      "Document search",
      "Data analysis",
      "Report generation",
      "Knowledge base queries",
    ],
    useCases: ["Employee onboarding", "Sales enablement", "Operations support", "HR assistance"],
  },
  {
    icon: AutoAwesome,
    title: "AI Automation",
    description:
      "Intelligent automation that goes beyond simple rules to make smart decisions.",
    capabilities: [
      "Pattern recognition",
      "Anomaly detection",
      "Predictive actions",
      "Self-optimization",
    ],
    useCases: ["Lead scoring", "Content moderation", "Fraud detection", "Demand forecasting"],
  },
  {
    icon: Description,
    title: "Content Generation",
    description:
      "AI-powered content creation for marketing, documentation, and communications.",
    capabilities: [
      "Blog generation",
      "Email writing",
      "Product descriptions",
      "Report summaries",
    ],
    useCases: ["Marketing content", "Sales emails", "Documentation", "Social media"],
  },
  {
    icon: Search,
    title: "Intelligent Search",
    description:
      "AI-powered search that understands intent and finds relevant information instantly.",
    capabilities: [
      "Semantic search",
      "Natural language queries",
      "Result ranking",
      "Auto-suggestions",
    ],
    useCases: ["Knowledge bases", "Product catalogs", "Document libraries", "Customer support"],
  },
  {
    icon: Psychology,
    title: "Custom AI Workflows",
    description:
      "End-to-end AI workflows that combine multiple AI capabilities for complex tasks.",
    capabilities: [
      "Multi-step processing",
      "Cross-system integration",
      "Human-in-the-loop",
      "Continuous learning",
    ],
    useCases: ["Document processing", "Customer onboarding", "Data enrichment", "Quality control"],
  },
];

export default function AIBusinessToolsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Psychology className="w-16 h-16 text-violet-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Business Tools
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Leverage AI to automate customer service, generate content, and build
            intelligent workflows that scale your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Build Your AI Solution
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              See AI Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI is Transforming Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">40%</div>
              <p className="text-gray-400">
                of business tasks can be automated with AI
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">70%</div>
              <p className="text-gray-400">
                reduction in customer response time with AI chatbots
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-400 mb-2">3x</div>
              <p className="text-gray-400">
                productivity increase with AI-assisted workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            AI Solutions We Build
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            From simple chatbots to complex AI workflows, we build solutions that
            deliver real business value.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-violet-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-violet-400 mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Capabilities:
                    </h4>
                    <ul className="space-y-1">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-violet-400 rounded-full mr-3" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Use Cases:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-2 py-1 bg-violet-600/20 text-violet-300 text-xs rounded-full"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Add AI to Your Business?
          </h2>
          <p className="text-gray-400 mb-8">
            Get a free consultation to explore how AI can transform your operations.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Schedule AI Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
