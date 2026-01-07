import {
  AccountTree,
  AutoMode,
  Email,
  Notifications,
  Schedule,
  Sync,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Workflow Automation Software | Automate Business Processes | SoftwarePros",
  description:
    "Custom workflow automation that eliminates manual processes. Automate lead follow-ups, approvals, notifications, and multi-step business workflows.",
  alternates: {
    canonical: "https://softwarepros.org/workflow-automation",
  },
  keywords: [
    "workflow automation",
    "automate business processes",
    "automate manual workflows",
    "process automation software",
    "workflow management system",
  ],
  openGraph: {
    title: "Workflow Automation Software | SoftwarePros",
    description: "Custom workflow automation that eliminates manual processes.",
    url: "https://softwarepros.org/workflow-automation",
  },
};

interface WorkflowType {
  icon: React.ElementType;
  title: string;
  description: string;
  triggers: string[];
  actions: string[];
}

const workflowTypes: WorkflowType[] = [
  {
    icon: Email,
    title: "Lead Follow-Up Automation",
    description:
      "Never miss a lead again with automated follow-up sequences that nurture prospects.",
    triggers: ["Form submission", "Email opened", "No response", "Time-based"],
    actions: [
      "Send emails",
      "SMS notifications",
      "CRM updates",
      "Task creation",
    ],
  },
  {
    icon: AccountTree,
    title: "Approval Workflows",
    description:
      "Streamline approvals with automated routing, escalations, and notifications.",
    triggers: ["Request submitted", "Document uploaded", "Threshold exceeded"],
    actions: [
      "Route to approver",
      "Send reminders",
      "Escalate if delayed",
      "Update status",
    ],
  },
  {
    icon: Notifications,
    title: "Notification Systems",
    description:
      "Keep your team informed with intelligent notifications based on business events.",
    triggers: ["New order", "Status change", "SLA warning", "Customer action"],
    actions: [
      "Email alerts",
      "Slack messages",
      "SMS notifications",
      "In-app alerts",
    ],
  },
  {
    icon: Sync,
    title: "Data Sync Workflows",
    description:
      "Keep your systems in sync with automated data flows between platforms.",
    triggers: ["Record created", "Field updated", "Scheduled sync", "API webhook"],
    actions: [
      "Update CRM",
      "Sync inventory",
      "Update accounting",
      "Log activity",
    ],
  },
  {
    icon: Schedule,
    title: "Scheduled Automations",
    description:
      "Run recurring tasks automatically on a schedule without manual intervention.",
    triggers: ["Daily", "Weekly", "Monthly", "Custom schedule"],
    actions: [
      "Generate reports",
      "Send summaries",
      "Clean up data",
      "Backup data",
    ],
  },
  {
    icon: AutoMode,
    title: "Multi-Step Workflows",
    description:
      "Complex business processes with conditional logic, branches, and parallel paths.",
    triggers: ["Process initiated", "Condition met", "External event"],
    actions: [
      "Conditional logic",
      "Parallel processing",
      "Wait for input",
      "Loop until done",
    ],
  },
];

export default function WorkflowAutomationPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AccountTree className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Workflow Automation
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Automate your business processes end-to-end. From simple task automation
            to complex multi-step workflows with conditional logic.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Automate Your Workflows
          </Link>
        </div>
      </section>

      {/* Workflow Types Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Types of Workflows We Build
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Every business has unique processes. We build custom workflows that match
            exactly how your team works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowTypes.map((workflow) => {
              const IconComponent = workflow.icon;
              return (
                <div
                  key={workflow.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-blue-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold">{workflow.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{workflow.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Triggers:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {workflow.triggers.map((trigger) => (
                        <span
                          key={trigger}
                          className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full"
                        >
                          {trigger}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">
                      Actions:
                    </h4>
                    <ul className="space-y-1">
                      {workflow.actions.map((action) => (
                        <li
                          key={action}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Integrations We Support
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "HubSpot",
              "Salesforce",
              "Slack",
              "Gmail",
              "QuickBooks",
              "Stripe",
              "Twilio",
              "Zapier",
              "Airtable",
              "Google Sheets",
              "Mailchimp",
              "Calendly",
            ].map((integration) => (
              <div
                key={integration}
                className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors duration-300"
              >
                <span className="text-sm font-medium">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Automate Your Workflows?
          </h2>
          <p className="text-gray-400 mb-8">
            Tell us about your manual processes and we'll show you how to automate
            them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/business-automation"
              className="px-8 py-3 border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Explore Business Automation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
