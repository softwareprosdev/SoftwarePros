import {
  AutoMode,
  Leaderboard,
  PersonAdd,
  Score,
  TrackChanges,
  TrendingUp,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Lead Automation Software | Capture & Convert More Leads | SoftwarePros",
  description:
    "Custom lead automation that captures, qualifies, and nurtures leads automatically. Lead scoring, automated follow-ups, and conversion tracking that scales your pipeline.",
  alternates: {
    canonical: "https://softwarepros.org/lead-automation",
  },
  keywords: [
    "lead automation software",
    "lead management system",
    "lead follow up automation",
    "automate lead follow up",
    "AI lead management",
  ],
  openGraph: {
    title: "Lead Automation Software | SoftwarePros",
    description: "Capture and convert more leads with intelligent automation.",
    url: "https://softwarepros.org/lead-automation",
  },
};

interface LeadService {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  result: string;
}

const leadServices: LeadService[] = [
  {
    icon: PersonAdd,
    title: "Lead Capture Systems",
    description:
      "Multi-channel lead capture that funnels prospects from every source into your pipeline.",
    features: [
      "Smart forms",
      "Landing pages",
      "Chat widgets",
      "API integrations",
    ],
    result: "2x more leads captured",
  },
  {
    icon: Score,
    title: "Lead Scoring",
    description:
      "AI-powered lead scoring that identifies your hottest prospects automatically.",
    features: [
      "Behavior scoring",
      "Demographic fit",
      "Engagement tracking",
      "Priority alerts",
    ],
    result: "Focus on best leads",
  },
  {
    icon: AutoMode,
    title: "Automated Follow-Up",
    description:
      "Never let a lead go cold with intelligent, personalized follow-up sequences.",
    features: [
      "Email sequences",
      "SMS automation",
      "Call reminders",
      "Multi-touch campaigns",
    ],
    result: "5x follow-up rate",
  },
  {
    icon: TrackChanges,
    title: "Lead Tracking",
    description:
      "Track every interaction and touchpoint across the entire customer journey.",
    features: [
      "Activity timeline",
      "Source attribution",
      "Page visit tracking",
      "Email opens/clicks",
    ],
    result: "Complete visibility",
  },
  {
    icon: Leaderboard,
    title: "Pipeline Analytics",
    description:
      "Real-time insights into your lead pipeline, conversion rates, and revenue forecast.",
    features: [
      "Conversion funnels",
      "Lead source ROI",
      "Team performance",
      "Revenue forecast",
    ],
    result: "Data-driven decisions",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description:
      "Continuously improve conversions with A/B testing and optimization tools.",
    features: [
      "Form optimization",
      "Landing page testing",
      "Sequence A/B tests",
      "Conversion tracking",
    ],
    result: "Higher conversion rates",
  },
];

export default function LeadAutomationPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <PersonAdd className="w-16 h-16 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lead Automation
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Capture more leads, qualify them automatically, and never let a hot
            prospect slip through the cracks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Automate Your Leads
            </Link>
            <Link
              href="/sales-automation"
              className="inline-flex items-center px-8 py-4 border border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              See Sales Automation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Cost of Manual Lead Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">71%</div>
              <p className="text-gray-400">
                of leads are never followed up with
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">5 min</div>
              <p className="text-gray-400">
                response time needed to qualify a lead
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">80%</div>
              <p className="text-gray-400">
                of sales require 5+ follow-ups to close
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Lead Automation Solutions
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Everything you need to capture, qualify, and convert more leads.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-emerald-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-emerald-400 mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-700">
                    <span className="text-emerald-400 font-semibold">
                      Result: {service.result}
                    </span>
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
            Ready to Capture More Leads?
          </h2>
          <p className="text-gray-400 mb-8">
            Get a free lead audit and see how automation can transform your
            pipeline.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get Free Lead Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
