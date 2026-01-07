import {
  AutoMode,
  Dashboard,
  IntegrationInstructions,
  Inventory,
  Speed,
  TableChart,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Business Automation Software | Custom Workflow Automation | SoftwarePros",
  description:
    "Eliminate manual work with custom business automation software. We build workflow automation, internal dashboards, and operations software that reduces costs and scales your business.",
  alternates: {
    canonical: "https://softwarepros.org/business-automation",
  },
  keywords: [
    "business automation software",
    "workflow automation for small business",
    "custom internal tools",
    "automate business processes",
    "operations automation software",
    "replace spreadsheets with software",
  ],
  openGraph: {
    title: "Business Automation Software | SoftwarePros",
    description:
      "Custom automation software that eliminates manual work and scales your operations.",
    url: "https://softwarepros.org/business-automation",
  },
};

interface AutomationService {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  useCases: string[];
}

const automationServices: AutomationService[] = [
  {
    icon: AutoMode,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and multi-step processes that currently require manual intervention.",
    benefits: [
      "Reduce manual work by 80%",
      "Eliminate human errors",
      "24/7 automated operations",
      "Instant task completion",
    ],
    useCases: [
      "Lead follow-up sequences",
      "Invoice processing",
      "Report generation",
      "Data entry automation",
    ],
  },
  {
    icon: Dashboard,
    title: "Internal Dashboards",
    description:
      "Real-time dashboards that give you complete visibility into your business operations.",
    benefits: [
      "Real-time data insights",
      "Custom KPI tracking",
      "Role-based access",
      "Automated reporting",
    ],
    useCases: [
      "Sales performance",
      "Operations metrics",
      "Team productivity",
      "Financial dashboards",
    ],
  },
  {
    icon: TableChart,
    title: "Spreadsheet Replacement",
    description:
      "Replace fragile spreadsheets with robust, scalable software that grows with your business.",
    benefits: [
      "No more broken formulas",
      "Multi-user collaboration",
      "Data validation",
      "Audit trails",
    ],
    useCases: [
      "Inventory management",
      "Project tracking",
      "Client databases",
      "Commission calculators",
    ],
  },
  {
    icon: Inventory,
    title: "Operations Automation",
    description:
      "Streamline your entire operations with end-to-end automation from intake to delivery.",
    benefits: [
      "Faster turnaround times",
      "Consistent quality",
      "Reduced overhead",
      "Scalable processes",
    ],
    useCases: [
      "Order fulfillment",
      "Onboarding workflows",
      "Approval processes",
      "Service delivery",
    ],
  },
  {
    icon: IntegrationInstructions,
    title: "System Integrations",
    description: "Connect all your business tools so data flows automatically between systems.",
    benefits: [
      "Single source of truth",
      "No duplicate entry",
      "Real-time sync",
      "API-first design",
    ],
    useCases: ["CRM integrations", "Accounting sync", "Email automation", "Inventory sync"],
  },
  {
    icon: Speed,
    title: "Admin Panel Development",
    description: "Custom admin panels that give your team the tools they need to work efficiently.",
    benefits: [
      "Tailored to your workflow",
      "User-friendly interface",
      "Powerful search & filters",
      "Bulk actions",
    ],
    useCases: [
      "Customer management",
      "Order processing",
      "Content management",
      "Team coordination",
    ],
  },
];

const results = [
  { metric: "80%", label: "Reduction in Manual Work" },
  { metric: "10x", label: "Faster Task Completion" },
  { metric: "95%", label: "Error Reduction" },
  { metric: "24/7", label: "Automated Operations" },
];

export default function BusinessAutomationPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AutoMode className="w-16 h-16 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Business Automation Software</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Stop wasting time on manual tasks. We build custom automation software that eliminates
            repetitive work, reduces errors, and lets your team focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Free Automation Audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {result.metric}
                </div>
                <div className="text-gray-400">{result.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What We Automate</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            From simple task automation to complex multi-system workflows, we build solutions
            tailored to your business processes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-purple-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-3" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full"
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

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "We analyze your current workflows and identify automation opportunities.",
              },
              {
                step: "2",
                title: "Design",
                description: "We design a custom solution that fits your exact business processes.",
              },
              {
                step: "3",
                title: "Build",
                description: "We develop and test your automation with continuous feedback loops.",
              },
              {
                step: "4",
                title: "Deploy",
                description: "We launch, train your team, and provide ongoing support.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Business?</h2>
          <p className="text-gray-400 mb-8">
            Get a free automation audit and discover how much time and money you could save with
            custom business automation software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Free Automation Audit
            </Link>
            <Link
              href="/workflow-automation"
              className="px-8 py-3 border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Learn About Workflow Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
