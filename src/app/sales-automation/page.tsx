import {
  Assignment,
  AttachMoney,
  AutoMode,
  CalendarMonth,
  Email,
  TrendingUp,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Sales Automation Software | Close More Deals Faster | SoftwarePros",
  description:
    "Custom sales automation that streamlines your entire sales process. Automated outreach, pipeline management, and booking automation that helps you close more deals.",
  alternates: {
    canonical: "https://softwarepros.org/sales-automation",
  },
  keywords: [
    "sales automation software",
    "sales workflow automation",
    "booking automation software",
    "sales pipeline automation",
    "automated sales outreach",
  ],
  openGraph: {
    title: "Sales Automation Software | SoftwarePros",
    description: "Close more deals with sales automation that works 24/7.",
    url: "https://softwarepros.org/sales-automation",
  },
};

interface SalesService {
  icon: React.ElementType;
  title: string;
  description: string;
  automations: string[];
  impact: string;
}

const salesServices: SalesService[] = [
  {
    icon: Email,
    title: "Outreach Automation",
    description: "Automated email and SMS sequences that warm up leads and book meetings.",
    automations: [
      "Cold email campaigns",
      "Follow-up sequences",
      "Personalization at scale",
      "A/B testing",
    ],
    impact: "3x more meetings booked",
  },
  {
    icon: CalendarMonth,
    title: "Booking Automation",
    description: "Let prospects book meetings directly without the back-and-forth.",
    automations: [
      "Calendar integration",
      "Automated reminders",
      "Reschedule handling",
      "No-show follow-up",
    ],
    impact: "50% less scheduling time",
  },
  {
    icon: AutoMode,
    title: "Pipeline Automation",
    description: "Automate your entire sales pipeline from lead to close.",
    automations: ["Stage automation", "Task creation", "Deal alerts", "Handoff workflows"],
    impact: "Faster deal velocity",
  },
  {
    icon: Assignment,
    title: "Proposal Automation",
    description: "Generate and send proposals automatically with e-signature integration.",
    automations: ["Template generation", "Dynamic pricing", "E-signature", "Follow-up on opens"],
    impact: "2x faster proposals",
  },
  {
    icon: AttachMoney,
    title: "Quote-to-Cash",
    description: "Automate from quote to payment collection for faster revenue.",
    automations: [
      "Quote generation",
      "Contract automation",
      "Invoice creation",
      "Payment collection",
    ],
    impact: "Reduce DSO by 30%",
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description: "Real-time visibility into sales performance and forecasting.",
    automations: [
      "Pipeline reporting",
      "Rep performance",
      "Win/loss analysis",
      "Revenue forecasting",
    ],
    impact: "Better decision making",
  },
];

export default function SalesAutomationPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <AttachMoney className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Sales Automation</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Close more deals by automating the repetitive parts of your sales process. More selling,
            less admin work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Automate Your Sales
            </Link>
            <Link
              href="/lead-automation"
              className="inline-flex items-center px-8 py-4 border border-yellow-600 text-yellow-400 hover:bg-yellow-600 hover:text-white font-semibold rounded-lg transition-colors duration-300"
            >
              See Lead Automation
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sales Reps Waste Time on Admin</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">66%</div>
              <p className="text-gray-400">of sales rep time is spent on non-selling activities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">21%</div>
              <p className="text-gray-400">of sales time is spent writing emails</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">17%</div>
              <p className="text-gray-400">of sales time is spent entering data</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Sales Automation Solutions</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Give your sales team superpowers with automation that handles the busywork.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-yellow-500"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-yellow-400 mr-3" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.automations.map((automation) => (
                      <li key={automation} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                        {automation}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-700">
                    <span className="text-yellow-400 font-semibold">Impact: {service.impact}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Sales Process?</h2>
          <p className="text-gray-400 mb-8">
            Get a free sales process audit and see how automation can help you close more deals.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Get Free Sales Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
