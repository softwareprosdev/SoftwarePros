import {
  AdminPanelSettings,
  Dashboard,
  Inventory2,
  PeopleAlt,
  Security,
  TableChart,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Custom Internal Tools Development | Admin Panels & Dashboards | SoftwarePros",
  description:
    "Build custom internal tools that fit your exact workflow. Admin panels, internal dashboards, data management tools, and operations software tailored to your team.",
  alternates: {
    canonical: "https://softwarepros.org/internal-tools",
  },
  keywords: [
    "custom internal tools",
    "internal business dashboard",
    "custom admin panel development",
    "internal software development",
    "business operations tools",
  ],
  openGraph: {
    title: "Custom Internal Tools Development | SoftwarePros",
    description: "Build custom internal tools that fit your exact workflow.",
    url: "https://softwarepros.org/internal-tools",
  },
};

interface ToolType {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

const toolTypes: ToolType[] = [
  {
    icon: AdminPanelSettings,
    title: "Custom Admin Panels",
    description:
      "Powerful admin interfaces that give your team complete control over your business data.",
    features: [
      "Role-based access control",
      "Custom data views",
      "Bulk operations",
      "Audit logging",
      "Advanced search & filters",
    ],
  },
  {
    icon: Dashboard,
    title: "Operations Dashboards",
    description:
      "Real-time dashboards that give you visibility into every aspect of your operations.",
    features: [
      "Live data updates",
      "Custom KPI widgets",
      "Drill-down reports",
      "Export capabilities",
      "Mobile-friendly",
    ],
  },
  {
    icon: TableChart,
    title: "Data Management Tools",
    description:
      "Replace spreadsheets with proper data management tools that scale with your business.",
    features: [
      "Data validation",
      "Import/export",
      "Version history",
      "Relationships",
      "Calculated fields",
    ],
  },
  {
    icon: Inventory2,
    title: "Inventory Systems",
    description:
      "Track inventory, assets, or any resources with custom inventory management tools.",
    features: [
      "Stock tracking",
      "Low stock alerts",
      "Barcode scanning",
      "Location management",
      "Order integration",
    ],
  },
  {
    icon: PeopleAlt,
    title: "Team Management Tools",
    description:
      "Coordinate your team with custom tools for scheduling, task management, and collaboration.",
    features: [
      "Task assignment",
      "Progress tracking",
      "Time tracking",
      "Team calendars",
      "Performance metrics",
    ],
  },
  {
    icon: Security,
    title: "Compliance & Audit Tools",
    description:
      "Maintain compliance with tools that track, document, and report on your processes.",
    features: [
      "Audit trails",
      "Document management",
      "Approval workflows",
      "Compliance reporting",
      "Access logs",
    ],
  },
];

export default function InternalToolsPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AdminPanelSettings className="w-16 h-16 text-teal-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Custom Internal Tools
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Stop forcing your team to use tools that don't fit your workflow. We build
            custom internal tools that work exactly how your business operates.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Build Your Custom Tool
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Custom Internal Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">73%</div>
              <p className="text-gray-400">
                of businesses use spreadsheets for critical operations
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">40%</div>
              <p className="text-gray-400">
                of employee time is spent on manual data entry
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">88%</div>
              <p className="text-gray-400">
                of spreadsheets contain significant errors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Internal Tools We Build
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            From simple data entry forms to complex operations management systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolTypes.map((tool) => {
              const IconComponent = tool.icon;
              return (
                <div
                  key={tool.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-teal-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-teal-400 mr-3" />
                    <h3 className="text-xl font-semibold">{tool.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{tool.description}</p>
                  <ul className="space-y-2">
                    {tool.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-teal-400 rounded-full mr-3" />
                        {feature}
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
            Ready to Replace Your Spreadsheets?
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us about your current workflow and we'll design a custom tool that
            makes your team more productive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/business-automation"
              className="px-8 py-3 border border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Explore Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
