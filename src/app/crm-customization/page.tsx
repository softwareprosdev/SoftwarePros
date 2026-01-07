import { AccountTree, Api, AutoMode, Dashboard, Extension, SyncAlt } from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "CRM Customization Services | HubSpot, Salesforce & Custom CRM | SoftwarePros",
  description:
    "Expert CRM customization for HubSpot, Salesforce, and custom CRM development. Custom pipelines, integrations, automation, and extensions that fit your workflow.",
  alternates: {
    canonical: "https://softwarepros.org/crm-customization",
  },
  keywords: [
    "CRM customization services",
    "custom CRM development",
    "CRM workflow automation",
    "CRM integration services",
    "HubSpot customization",
    "Salesforce customization",
  ],
  openGraph: {
    title: "CRM Customization Services | SoftwarePros",
    description: "Expert CRM customization that maximizes your CRM investment.",
    url: "https://softwarepros.org/crm-customization",
  },
};

interface CRMService {
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
}

const crmServices: CRMService[] = [
  {
    icon: AccountTree,
    title: "Custom Pipelines",
    description:
      "Design pipelines that match exactly how your sales team works, not how the CRM thinks you should work.",
    deliverables: [
      "Custom deal stages",
      "Automated stage transitions",
      "Required fields per stage",
      "Pipeline reporting",
    ],
  },
  {
    icon: AutoMode,
    title: "CRM Automation",
    description:
      "Automate data entry, follow-ups, and workflows so your team spends time selling, not typing.",
    deliverables: [
      "Lead assignment rules",
      "Follow-up sequences",
      "Task automation",
      "Notification triggers",
    ],
  },
  {
    icon: Extension,
    title: "Custom Extensions",
    description: "Extend your CRM with custom features that don't exist out of the box.",
    deliverables: [
      "Custom modules",
      "Advanced reporting",
      "Specialized calculators",
      "Custom views",
    ],
  },
  {
    icon: SyncAlt,
    title: "CRM Integrations",
    description: "Connect your CRM to all your other business tools for a single source of truth.",
    deliverables: [
      "Two-way data sync",
      "Real-time updates",
      "Custom field mapping",
      "Error handling",
    ],
  },
  {
    icon: Dashboard,
    title: "Custom Dashboards",
    description: "Build dashboards that show the metrics your team actually needs to see.",
    deliverables: [
      "Sales performance",
      "Pipeline analytics",
      "Team leaderboards",
      "Revenue forecasting",
    ],
  },
  {
    icon: Api,
    title: "API Development",
    description: "Custom APIs that let you build on top of your CRM for advanced use cases.",
    deliverables: ["RESTful APIs", "Webhook handlers", "Batch operations", "Custom endpoints"],
  },
];

const platforms = [
  "HubSpot",
  "Salesforce",
  "Pipedrive",
  "Zoho CRM",
  "Monday.com",
  "Airtable",
  "Notion",
  "Custom CRMs",
];

export default function CRMCustomizationPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Extension className="w-16 h-16 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">CRM Customization</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Maximize your CRM investment with custom pipelines, automation, and integrations that
            fit your exact workflow.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get CRM Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platforms We Customize</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {platforms.map((platform) => (
              <div
                key={platform}
                className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors duration-300"
              >
                <span className="font-medium">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">CRM Services We Offer</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            From simple customizations to complete CRM overhauls, we make your CRM work for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crmServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-orange-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-orange-400 mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
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
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your CRM?</h2>
          <p className="text-gray-400 mb-8">
            Get a free CRM audit and discover how customization can improve your sales process.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get Free CRM Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
