"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Business Automation & Internal Tools",
    description:
      "Eliminate manual work with custom automation software. Replace spreadsheets, streamline operations, and build internal dashboards that drive efficiency.",
    features: [
      "Workflow Automation",
      "Internal Dashboards",
      "Spreadsheet Replacement",
      "Operations Automation",
    ],
    color: "from-purple-600 to-blue-600",
  },
  {
    number: "02",
    title: "Real Estate Software & Automation",
    description:
      "Never lose a lead again. Custom CRM solutions, AI chatbots for listings, and automated follow-up systems built specifically for agents and brokerages.",
    features: [
      "Lead Follow-up Automation",
      "Custom Real Estate CRM",
      "AI Chatbots for Listings",
      "SMS & Email Automation",
    ],
    color: "from-blue-600 to-cyan-600",
  },
  {
    number: "03",
    title: "AI-Powered Business Tools",
    description:
      "Leverage AI to automate customer service, generate content, and build intelligent workflows that scale your operations.",
    features: [
      "AI Chatbots for Business",
      "Custom AI Workflows",
      "Internal AI Assistants",
      "AI Automation Tools",
    ],
    color: "from-cyan-600 to-teal-600",
  },
  {
    number: "04",
    title: "CRM Customization & Extensions",
    description:
      "Maximize your CRM investment with custom integrations, automated pipelines, and extensions that fit your exact workflow.",
    features: ["CRM Customization", "Custom Pipelines", "CRM Extensions", "HubSpot & Salesforce"],
    color: "from-teal-600 to-green-600",
  },
  {
    number: "05",
    title: "SaaS & MVP Development",
    description:
      "Launch your software product faster. We build SaaS MVPs, subscription platforms, and productized software for startups and entrepreneurs.",
    features: [
      "SaaS MVP Development",
      "Subscription Platforms",
      "Productized Software",
      "Startup Development",
    ],
    color: "from-green-600 to-emerald-600",
  },
  {
    number: "06",
    title: "Lead Generation & Sales Automation",
    description:
      "Capture more leads and convert them faster with custom lead capture systems, booking automation, and AI-powered responders.",
    features: [
      "Lead Capture Systems",
      "Booking Automation",
      "Conversion Tracking",
      "AI Lead Responders",
    ],
    color: "from-emerald-600 to-purple-600",
  },
  {
    number: "07",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. High-performance apps that provide a seamless user experience.",
    features: [
      "iOS & Android Apps",
      "React Native / Flutter",
      "App Store Optimization",
      "Mobile Strategy",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "08",
    title: "E-commerce & B2B Marketplaces",
    description:
      "Robust e-commerce platforms and multi-vendor marketplaces. Secure payment processing, inventory management, and personalized shopping experiences.",
    features: [
      "Custom Storefronts",
      "Multi-vendor Platforms",
      "Payment Gateway Integration",
      "Inventory Sync",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    number: "09",
    title: "Financial & Billing Platforms",
    description:
      "Secure financial software for invoicing, billing, and payment processing. Compliant with financial regulations and built for scale.",
    features: [
      "Automated Invoicing",
      "Payment Processing",
      "Financial Reporting",
      "Subscription Management",
    ],
    color: "from-rose-500 to-red-500",
  },
  {
    number: "10",
    title: "Field Service Management",
    description:
      "Software for managing field operations, scheduling, dispatching, and tracking. Keep your field team connected and efficient.",
    features: ["Job Scheduling", "GPS Tracking", "Mobile Field App", "Customer Notifications"],
    color: "from-red-500 to-orange-500",
  },
  {
    number: "11",
    title: "Logistics & Supply Chain Tools",
    description:
      "Optimize your supply chain with tracking, inventory management, and route optimization software. Reduce costs and improve delivery times.",
    features: [
      "Route Optimization",
      "Inventory Tracking",
      "Supplier Management",
      "Real-time Visibility",
    ],
    color: "from-orange-500 to-amber-500",
  },
  {
    number: "12",
    title: "Contractor Estimating Software",
    description:
      "Purpose-built software for contractors to generate accurate estimates, manage bids, and track project costs.",
    features: ["Cost Estimation", "Bid Management", "Material Takeoffs", "Proposal Generation"],
    color: "from-amber-500 to-yellow-500",
  },
  {
    number: "13",
    title: "Healthcare & Dental Management",
    description:
      "HIPAA-compliant practice management software for medical and dental offices. Scheduling, EHR, and patient communication.",
    features: [
      "Patient Scheduling",
      "EHR/EMR Integration",
      "HIPAA Compliance",
      "Telehealth Features",
    ],
    color: "from-blue-400 to-indigo-500",
  },
  {
    number: "14",
    title: "Customer Portal Development",
    description:
      "Self-service portals for your customers to manage accounts, view orders, and access support. Enhance customer satisfaction and reduce support load.",
    features: [
      "Self-service Dashboards",
      "Account Management",
      "Secure Login",
      "Ticket Submission",
    ],
    color: "from-indigo-500 to-violet-500",
  },
  {
    number: "15",
    title: "Inventory Management Systems",
    description:
      "Real-time inventory tracking and management systems. Prevent stockouts, manage warehouses, and automate reordering.",
    features: ["Barcode Scanning", "Multi-location Support", "Stock Alerts", "Order Fulfillment"],
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "16",
    title: "Legacy System Modernization",
    description:
      "Upgrade and migrate outdated software to modern technologies. Improve performance, security, and maintainability without losing data.",
    features: ["Cloud Migration", "Code Refactoring", "UI/UX Modernization", "Database Migration"],
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    number: "17",
    title: "Cloud Migration & DevOps",
    description:
      "Move your infrastructure to the cloud and automate your deployment pipelines. Scalable, secure, and cost-effective cloud solutions.",
    features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Infrastructure as Code", "High Availability"],
    color: "from-fuchsia-500 to-pink-600",
  },
  {
    number: "18",
    title: "API Integration & Development",
    description:
      "Connect your disparate systems with custom API development and integration. Ensure seamless data flow between all your business tools.",
    features: [
      "REST & GraphQL APIs",
      "Third-party Integrations",
      "API Gateways",
      "Data Synchronization",
    ],
    color: "from-pink-600 to-rose-600",
  },
  {
    number: "19",
    title: "Learning Management Systems (LMS)",
    description:
      "Custom platforms for employee training or educational courses. Deliver content, track progress, and certify learners.",
    features: ["Course Management", "Progress Tracking", "Quizzes & Assessments", "Video Hosting"],
    color: "from-rose-600 to-red-600",
  },
  {
    number: "20",
    title: "Project Management Solutions",
    description:
      "Custom project management tools tailored to your specific workflow. Track tasks, collaborate with teams, and meet deadlines.",
    features: ["Task Boards", "Resource Allocation", "Time Tracking", "Collaboration Tools"],
    color: "from-red-600 to-orange-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Why Choose SoftwarePros?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We deliver cutting-edge solutions that drive business growth and innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    number: string;
    title: string;
    description: string;
    features: string[];
    color: string;
  };
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
      />

      {/* Service Number */}
      <div
        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}
      >
        <span className="text-2xl font-bold text-white">{service.number}</span>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

        {/* Features */}
        <div className="space-y-3">
          {service.features.map((feature, featureIndex) => (
            <div
              key={feature}
              className={`flex items-center gap-3 transform transition-all duration-500 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200 + featureIndex * 100}ms` }}
            >
              <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
              <span className="text-gray-300 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </div>
  );
}
