"use client";

import {
  ArrowForward,
  AutoMode,
  Chat,
  Extension,
  Home,
  Leaderboard,
  RocketLaunch,
  TrendingUp,
} from "@mui/icons-material";
import { Box, Button, Card, CardContent, Chip, Container, Grid, Typography } from "@mui/joy";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

// Force dynamic rendering to prevent framer-motion SSG issues
export const dynamic = "force-dynamic";

const services = [
  {
    id: "business-automation",
    icon: AutoMode,
    title: "Business Automation",
    subtitle: "Eliminate Manual Work",
    url: "/business-automation",
    description:
      "Custom automation software that eliminates repetitive tasks, streamlines operations, and lets your team focus on what matters most.",
    features: [
      "Workflow Automation",
      "Internal Dashboards",
      "Spreadsheet Replacement",
      "Operations Automation",
      "System Integrations",
      "Admin Panels",
    ],
    color: "#9333EA",
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate Software",
    subtitle: "Never Lose a Lead Again",
    url: "/real-estate-software",
    description:
      "Custom CRM solutions, AI chatbots for listings, and automated follow-up systems built specifically for agents and brokerages.",
    features: [
      "Lead Follow-Up Automation",
      "Custom Real Estate CRM",
      "AI Chatbots for Listings",
      "SMS & Email Automation",
      "MLS Integration",
      "Performance Dashboards",
    ],
    color: "#22C55E",
  },
  {
    id: "ai-tools",
    icon: Chat,
    title: "AI Business Tools",
    subtitle: "Leverage AI to Scale",
    url: "/ai-business-tools",
    description:
      "AI chatbots, automation tools, and intelligent workflows that handle customer service, generate content, and scale your operations.",
    features: [
      "AI Chatbots",
      "Internal AI Assistants",
      "AI Automation",
      "Content Generation",
      "Intelligent Search",
      "Custom AI Workflows",
    ],
    color: "#8B5CF6",
  },
  {
    id: "crm",
    icon: Extension,
    title: "CRM Customization",
    subtitle: "Maximize Your CRM Investment",
    url: "/crm-customization",
    description:
      "Expert customization for HubSpot, Salesforce, and custom CRM development. Pipelines, automation, and integrations that fit your workflow.",
    features: [
      "Custom Pipelines",
      "CRM Automation",
      "Custom Extensions",
      "System Integrations",
      "Custom Dashboards",
      "API Development",
    ],
    color: "#F97316",
  },
  {
    id: "saas",
    icon: RocketLaunch,
    title: "SaaS & MVP Development",
    subtitle: "Launch Your Product Fast",
    url: "/saas-development",
    description:
      "Build SaaS platforms and MVPs with subscription billing, multi-tenancy, and everything you need to validate and scale your product.",
    features: [
      "Multi-Tenant Architecture",
      "Subscription Billing",
      "User Authentication",
      "Analytics & Metrics",
      "Cloud Infrastructure",
      "Rapid MVP Development",
    ],
    color: "#6366F1",
  },
  {
    id: "lead-sales",
    icon: TrendingUp,
    title: "Lead & Sales Automation",
    subtitle: "Capture & Convert More Leads",
    url: "/lead-automation",
    description:
      "Custom lead capture, scoring, and nurturing systems that convert more prospects into customers automatically.",
    features: [
      "Lead Capture Systems",
      "Lead Scoring",
      "Automated Follow-Up",
      "Pipeline Automation",
      "Sales Analytics",
      "Booking Automation",
    ],
    color: "#10B981",
  },
];

const whoWeHelp = [
  {
    title: "Real Estate Agents & Brokerages",
    description: "Automate lead follow-ups and close more deals",
    icon: Home,
  },
  {
    title: "Service Businesses",
    description: "Streamline operations and reduce manual work",
    icon: AutoMode,
  },
  {
    title: "SaaS Founders",
    description: "Launch and scale your software product",
    icon: RocketLaunch,
  },
  {
    title: "Sales Teams",
    description: "Capture more leads and automate outreach",
    icon: Leaderboard,
  },
];

export default function ServicesPage() {
  const router = useRouter();
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                level="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  fontWeight: "bold",
                  mb: 3,
                  background: "linear-gradient(45deg, #9333EA, #6366F1)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Business Automation & Custom Software
              </Typography>
              <Typography
                level="h4"
                sx={{
                  color: "neutral.400",
                  maxWidth: "800px",
                  mx: "auto",
                  lineHeight: 1.6,
                }}
              >
                We build revenue-driving, automation-focused software for businesses that want more
                leads, less manual work, and predictable growth.
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Who We Help */}
      <Box sx={{ py: 6, backgroundColor: "#111827" }}>
        <Container maxWidth="lg">
          <Typography level="h3" sx={{ textAlign: "center", mb: 4, color: "white" }}>
            Who We Help
          </Typography>
          <Grid container spacing={3}>
            {whoWeHelp.map((item, index) => (
              <Grid key={item.title} xs={12} sm={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      textAlign: "center",
                      p: 3,
                    }}
                  >
                    <item.icon sx={{ fontSize: 40, color: "#9333EA", mb: 2 }} />
                    <Typography level="title-lg" sx={{ color: "white", mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography level="body-sm" sx={{ color: "#9CA3AF" }}>
                      {item.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box sx={{ py: 8, backgroundColor: "#0F172A" }}>
        <Container maxWidth="lg">
          <Typography level="h2" sx={{ textAlign: "center", mb: 2, color: "white" }}>
            What We Build
          </Typography>
          <Typography
            level="body-lg"
            sx={{ textAlign: "center", mb: 6, color: "#9CA3AF", maxWidth: 600, mx: "auto" }}
          >
            Custom software solutions that help you capture more leads, reduce manual work, and
            scale faster.
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid key={service.id} xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    variant="outlined"
                    sx={{
                      p: 3,
                      backgroundColor: "#1E293B",
                      border: "1px solid #334155",
                      height: "100%",
                      "&:hover": {
                        boxShadow: `0 0 30px ${service.color}30`,
                        borderColor: service.color,
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: "flex", alignItems: "flex-start", mb: 3 }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: "12px",
                            backgroundColor: `${service.color}20`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mr: 3,
                            flexShrink: 0,
                          }}
                        >
                          <service.icon sx={{ fontSize: 30, color: service.color }} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            level="h4"
                            sx={{ fontWeight: "bold", mb: 0.5, color: "white" }}
                          >
                            {service.title}
                          </Typography>
                          <Typography
                            level="body-sm"
                            sx={{ color: service.color, fontWeight: "medium" }}
                          >
                            {service.subtitle}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography level="body-md" sx={{ color: "#9CA3AF", lineHeight: 1.6, mb: 3 }}>
                        {service.description}
                      </Typography>

                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                        {service.features.map((feature) => (
                          <Chip
                            key={feature}
                            variant="soft"
                            size="sm"
                            sx={{
                              backgroundColor: `${service.color}15`,
                              color: service.color,
                              fontWeight: "medium",
                            }}
                          >
                            {feature}
                          </Chip>
                        ))}
                      </Box>

                      <Button
                        variant="outlined"
                        endDecorator={<ArrowForward />}
                        onClick={() => router.push(service.url)}
                        sx={{
                          borderColor: service.color,
                          color: service.color,
                          "&:hover": {
                            backgroundColor: `${service.color}20`,
                            borderColor: service.color,
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 8,
          background: "linear-gradient(135deg, #9333EA 0%, #6366F1 100%)",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" }}>
            <Typography level="h2" sx={{ fontWeight: "bold", mb: 3, color: "white" }}>
              Ready to Automate Your Business?
            </Typography>
            <Typography level="body-lg" sx={{ mb: 4, opacity: 0.9, maxWidth: "600px", mx: "auto" }}>
              Get a free automation audit and discover how custom software can help you capture more
              leads, reduce manual work, and scale faster.
            </Typography>
            <Button
              component="a"
              href="/contact"
              variant="solid"
              size="lg"
              endDecorator={<ArrowForward />}
              sx={{
                backgroundColor: "white",
                color: "#9333EA",
                "&:hover": { backgroundColor: "#f8fafc" },
              }}
            >
              Get Free Automation Audit
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}
