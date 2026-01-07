import {
  AutoMode,
  Email,
  NotificationsActive,
  Schedule,
  Sms,
  TrendingUp,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Real Estate Automation | Lead Follow-Up & Workflow Automation | SoftwarePros",
  description:
    "Automate your real estate business with intelligent lead follow-ups, SMS sequences, email campaigns, and workflow automation built for agents and brokerages.",
  alternates: {
    canonical: "https://softwarepros.org/real-estate-automation",
  },
  keywords: [
    "real estate lead automation",
    "real estate follow up system",
    "real estate workflow automation",
    "automated lead nurturing real estate",
    "real estate drip campaigns",
  ],
  openGraph: {
    title: "Real Estate Automation | SoftwarePros",
    description: "Automate lead follow-ups and workflows for real estate professionals.",
    url: "https://softwarepros.org/real-estate-automation",
  },
};

interface AutomationType {
  icon: React.ElementType;
  title: string;
  description: string;
  automations: string[];
}

const automationTypes: AutomationType[] = [
  {
    icon: AutoMode,
    title: "Instant Lead Response",
    description: "Respond to leads within seconds, not hours. Be the first agent they hear from.",
    automations: [
      "Instant text message",
      "Personalized email",
      "Lead routing to agents",
      "CRM auto-entry",
    ],
  },
  {
    icon: Email,
    title: "Email Drip Campaigns",
    description:
      "Nurture leads over time with automated email sequences tailored to their interests.",
    automations: ["Welcome sequences", "Property alerts", "Market updates", "Anniversary emails"],
  },
  {
    icon: Sms,
    title: "SMS Follow-Up Sequences",
    description: "Text message automation that feels personal and gets responses.",
    automations: [
      "Appointment reminders",
      "Showing confirmations",
      "Price drop alerts",
      "Check-in messages",
    ],
  },
  {
    icon: Schedule,
    title: "Appointment Automation",
    description: "Automated scheduling, reminders, and follow-ups for showings and meetings.",
    automations: [
      "Calendar booking",
      "Reminder sequences",
      "Reschedule handling",
      "Post-showing follow-up",
    ],
  },
  {
    icon: NotificationsActive,
    title: "Alert Systems",
    description: "Keep leads engaged with automated alerts about new listings and price changes.",
    automations: [
      "New listing alerts",
      "Price reduction alerts",
      "Open house reminders",
      "Saved search alerts",
    ],
  },
  {
    icon: TrendingUp,
    title: "Pipeline Automation",
    description: "Automate your entire sales pipeline from lead to close.",
    automations: [
      "Stage progression",
      "Task creation",
      "Document requests",
      "Milestone notifications",
    ],
  },
];

export default function RealEstateAutomationPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AutoMode className="w-16 h-16 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Real Estate Automation</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Automate your lead follow-ups, nurture campaigns, and workflows so you can focus on
            closing deals instead of chasing leads.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Automate Your Follow-Ups
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Speed Wins in Real Estate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">391%</div>
              <p className="text-gray-400">higher conversion when responding within 1 minute</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">8x</div>
              <p className="text-gray-400">more likely to close when you follow up 6+ times</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
              <p className="text-gray-400">of leads go with the first agent who responds</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What We Automate</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Every touchpoint in your real estate workflow can be automated while maintaining a
            personal feel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationTypes.map((automation) => {
              const IconComponent = automation.icon;
              return (
                <div
                  key={automation.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-cyan-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-semibold">{automation.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{automation.description}</p>
                  <ul className="space-y-2">
                    {automation.automations.map((item) => (
                      <li key={item} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
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
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Real Estate Business?</h2>
          <p className="text-gray-400 mb-8">
            Get a free consultation and see how automation can help you convert more leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/real-estate-software"
              className="px-8 py-3 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Explore Real Estate Software
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
