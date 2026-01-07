import { AutoMode, Chat, ContactPhone, Email, Home, Leaderboard } from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Real Estate Software Development | CRM & Lead Automation | SoftwarePros",
  description:
    "Custom real estate software for agents and brokerages. Lead automation, CRM customization, AI chatbots for listings, and follow-up systems that convert more leads.",
  alternates: {
    canonical: "https://softwarepros.org/real-estate-software",
  },
  keywords: [
    "real estate automation software",
    "real estate CRM customization",
    "real estate lead automation",
    "real estate follow up system",
    "software for real estate agents",
  ],
  openGraph: {
    title: "Real Estate Software Development | SoftwarePros",
    description: "Custom software that helps real estate agents capture and convert more leads.",
    url: "https://softwarepros.org/real-estate-software",
  },
};

interface RealEstateService {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  result: string;
}

const services: RealEstateService[] = [
  {
    icon: AutoMode,
    title: "Lead Follow-Up Automation",
    description:
      "Automated follow-up sequences that nurture leads until they're ready to buy or sell.",
    features: ["Instant lead response", "Drip email campaigns", "SMS follow-ups", "Lead scoring"],
    result: "3x more leads converted",
  },
  {
    icon: ContactPhone,
    title: "Custom Real Estate CRM",
    description: "CRM systems designed specifically for how real estate agents and teams work.",
    features: [
      "Pipeline management",
      "Transaction tracking",
      "Commission calculator",
      "Team collaboration",
    ],
    result: "50% less admin work",
  },
  {
    icon: Chat,
    title: "AI Chatbots for Listings",
    description: "AI-powered chatbots that answer questions about your listings 24/7.",
    features: [
      "Listing-specific answers",
      "Appointment scheduling",
      "Lead qualification",
      "Multi-property support",
    ],
    result: "24/7 lead capture",
  },
  {
    icon: Email,
    title: "SMS & Email Automation",
    description: "Automated communication that keeps you top-of-mind with leads and past clients.",
    features: [
      "Birthday/anniversary emails",
      "Market updates",
      "Just listed alerts",
      "Review requests",
    ],
    result: "More repeat referrals",
  },
  {
    icon: Leaderboard,
    title: "Performance Dashboards",
    description:
      "Real-time insights into your lead sources, conversion rates, and team performance.",
    features: ["Lead source tracking", "Agent leaderboards", "ROI by channel", "Goal tracking"],
    result: "Data-driven decisions",
  },
  {
    icon: Home,
    title: "MLS & IDX Integration",
    description:
      "Seamless integration with MLS feeds for up-to-date listing data and property search.",
    features: [
      "Real-time MLS sync",
      "Property search widgets",
      "Saved searches",
      "Alert notifications",
    ],
    result: "Better user experience",
  },
];

export default function RealEstateSoftwarePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Home className="w-16 h-16 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Real Estate Software</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Never lose a lead again. Custom software that automates your follow-ups, manages your
            pipeline, and helps you close more deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Your Free Consultation
            </Link>
            <Link
              href="/real-estate-automation"
              className="inline-flex items-center px-8 py-4 border border-green-600 text-green-400 hover:bg-green-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              See Automation Options
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Real Estate Lead Problem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">78%</div>
              <p className="text-gray-400">
                of real estate leads go to the agent who responds first
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">5 min</div>
              <p className="text-gray-400">is the maximum time to respond before leads go cold</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400 mb-2">80%</div>
              <p className="text-gray-400">
                of sales require 5+ follow-ups, but most agents stop at 1
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Real Estate Solutions We Build</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            From solo agents to large brokerages, we build software that scales with your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-green-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-700">
                    <span className="text-green-400 font-semibold">Result: {service.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Convert More Leads?</h2>
          <p className="text-gray-400 mb-8">
            Get a free consultation and see how custom software can help you close more deals.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
