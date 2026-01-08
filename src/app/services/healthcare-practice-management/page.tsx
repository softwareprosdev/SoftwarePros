import {
  AccessTime,
  CalendarMonth,
  CloudSync,
  Description,
  LocalHospital,
  Medication,
  People,
  Security,
} from "@mui/icons-material";
import type { Metadata } from "next";
import Link from "next/link";
import type { JSX } from "react";

export const metadata: Metadata = {
  title: "Healthcare Practice Management Software - SoftwarePros",
  description:
    "Custom healthcare practice management solutions including appointment scheduling, EMR/EHR integration, patient portals, and billing automation.",
  alternates: {
    canonical: "https://softwarepros.org/services/healthcare-practice-management",
  },
  openGraph: {
    title: "Healthcare Practice Management Software - SoftwarePros",
    description: "Streamline your medical practice with our custom management solutions.",
    url: "https://softwarepros.org/services/healthcare-practice-management",
  },
};

interface ServiceFeature {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
}

const services: ServiceFeature[] = [
  {
    icon: CalendarMonth,
    title: "Smart Scheduling Systems",
    description:
      "Intelligent appointment booking and management systems that reduce no-shows and optimize provider schedules.",
    benefits: [
      "Automated reminders (SMS/Email)",
      "Self-service patient booking",
      "Provider availability management",
      "Waitlist automation",
      "Multi-location support",
    ],
  },
  {
    icon: Description,
    title: "EMR/EHR Integration",
    description:
      "Seamless integration with electronic medical records to ensure data consistency and accessibility.",
    benefits: [
      "HL7/FHIR standards compliance",
      "Real-time data synchronization",
      "Secure document management",
      "Custom clinical workflows",
      "Lab result integration",
    ],
  },
  {
    icon: People,
    title: "Patient Portals",
    description: "Secure portals empowering patients to manage their health journey and communicate with providers.",
    benefits: [
      "Secure messaging",
      "Prescription refill requests",
      "Bill payment & history",
      "Telehealth integration",
      "Medical history access",
    ],
  },
  {
    icon: CloudSync,
    title: "Revenue Cycle Management",
    description: "Automated billing and claims processing tools to improve financial performance.",
    benefits: [
      "Automated claims scrubbing",
      "Insurance eligibility verification",
      "Patient statement generation",
      "Payment gateway integration",
      "Financial reporting",
    ],
  },
];

export default function HealthcarePracticeManagementPage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <LocalHospital className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Healthcare Practice Management</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            Modernize your medical practice with custom software solutions designed to improve patient care, streamline operations, and ensure compliance.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Consult with an Expert
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-10 h-10 text-blue-600 mr-4" />
                    <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>

                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                          {benefit}
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

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoftwarePros?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <Security className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">HIPAA Compliance</h3>
              <p className="text-gray-600">Built-in security and compliance measures to protect sensitive patient data.</p>
            </div>
            <div className="p-6">
              <AccessTime className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Efficiency First</h3>
              <p className="text-gray-600">Workflows optimized to reduce administrative burden and increase face-to-face time.</p>
            </div>
            <div className="p-6">
              <Medication className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">Architecture that grows with your practice, from single clinics to hospital networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Transform Your Practice Today</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join the leading healthcare providers who trust SoftwarePros to power their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Request a Demo
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-colors duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
