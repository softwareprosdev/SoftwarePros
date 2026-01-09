"use client";

import { Business, Email, Phone, Send } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Option,
  Select,
  Sheet,
  Textarea,
  Typography,
} from "@mui/joy";
import { useState } from "react";

// Simplified service types for quick start
const quickStartServices = [
  "Custom Admin Panels",
  "AI & Automation Solutions",
  "Dental Office Management",
  "Field Service Management",
  "Real Estate Property Tech",
  "SaaS Product Development",
  "E-commerce Marketplaces",
  "Construction Management",
  "Financial / Fintech Tools",
  "Mobile Field Applications",
];

const budgetRanges = [
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+",
  "Let's discuss",
];

export default function GetStartedModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    budget: "",
    message: "",
    password: "",
    confirmPassword: "",
  });
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Validate required fields
      if (
        !formData.name ||
        !formData.email ||
        !formData.company ||
        !formData.serviceType ||
        !formData.budget
      ) {
        throw new Error("Please fill in all required fields");
      }

      // Validate password if creating account
      if (showCreateAccount) {
        if (!formData.password || formData.password.length < 8) {
          throw new Error("Password must be at least 8 characters");
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Passwords do not match");
        }
      }

      const submitData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        serviceType: formData.serviceType,
        budget: formData.budget,
        message: formData.message,
        subject: `Quick Start Request - ${formData.company}`,
        bestTimeToReach: "ASAP",
        contactMethod: "Email",
        consent: true,
      };

      let response: Response;

      if (showCreateAccount) {
        // Create account first, then send contact email
        response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        });

        // Then create account
        const registerResponse = await fetch("/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            companyName: formData.company,
            phone: formData.phone,
            industry: formData.serviceType,
            companySize: "startup",
            projectType: "web",
            projectDescription: formData.message || "Project inquiry from quick start form",
            budget: formData.budget,
            timeline: "1-3 months",
            termsAccepted: true,
            privacyAccepted: true,
            marketingOptIn: false,
          }),
        });

        if (!registerResponse.ok) {
          const registerError = await registerResponse.json().catch(() => ({}));
          throw new Error(`Account creation failed: ${registerError.message || "Unknown error"}`);
        }
      } else {
        // Just send contact email
        response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submitData),
        });
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit request");
      }

      setSubmitSuccess(true);
      const successMessage = showCreateAccount
        ? "Account created successfully! Check your email for next steps."
        : "Your request has been sent! We'll contact you soon.";

      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          budget: "",
          message: "",
          password: "",
          confirmPassword: "",
        });
        setShowCreateAccount(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Quick start submission error:", error);
      setSubmitError(
        error instanceof Error ? error.message : "Submission failed. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        size="lg"
        variant="outlined"
        sx={{
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <ModalClose />
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Business sx={{ fontSize: 48, color: "primary.500", mb: 2 }} />
            <Typography level="h3" sx={{ mb: 1 }}>
              Start Your Project
            </Typography>
            <Typography level="body-md" sx={{ color: "text.secondary" }}>
              Tell us about your project and we'll get back to you within 24 hours
            </Typography>
          </Box>

          {submitSuccess && (
            <Alert color="success" sx={{ mb: 3 }}>
              ✅{" "}
              {showCreateAccount
                ? "Account created successfully! Check your email for next steps."
                : "Your request has been sent! We'll contact you soon."}
            </Alert>
          )}

          {submitError && (
            <Alert color="danger" sx={{ mb: 3 }}>
              {submitError}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "grid", gap: 2, mb: 3 }}>
              <Box
                sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}
              >
                <FormControl required>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="John Smith"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                  />
                </FormControl>
              </Box>

              <Box
                sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}
              >
                <FormControl required>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    disabled={isSubmitting}
                    startDecorator={<Phone />}
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Company</FormLabel>
                  <Input
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your Company Inc."
                    disabled={isSubmitting}
                  />
                </FormControl>
              </Box>

              <Box
                sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}
              >
                <FormControl required>
                  <FormLabel>Service Type</FormLabel>
                  <Select
                    value={formData.serviceType}
                    onChange={(_, value) => handleInputChange("serviceType", value || "")}
                    placeholder="Select service"
                    disabled={isSubmitting}
                  >
                    {quickStartServices.map((service) => (
                      <Option key={service} value={service}>
                        {service}
                      </Option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl required>
                  <FormLabel>Budget Range</FormLabel>
                  <Select
                    value={formData.budget}
                    onChange={(_, value) => handleInputChange("budget", value || "")}
                    placeholder="Select budget"
                    disabled={isSubmitting}
                  >
                    {budgetRanges.map((range) => (
                      <Option key={range} value={range}>
                        {range}
                      </Option>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              <FormControl>
                <FormLabel>Project Details (Optional)</FormLabel>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your project goals and requirements..."
                  minRows={3}
                  disabled={isSubmitting}
                />
              </FormControl>

              {showCreateAccount && (
                <Box sx={{ mt: 3, p: 2, bgcolor: "background.level1", borderRadius: "sm" }}>
                  <Typography level="title-md" sx={{ mb: 2, color: "primary.500" }}>
                    Create Your Account
                  </Typography>
                  <Typography level="body-sm" sx={{ mb: 2, color: "text.secondary" }}>
                    Save your information and track your project progress
                  </Typography>

                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                      gap: 2,
                      mb: 2,
                    }}
                  >
                    <FormControl>
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        placeholder="Create a password"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Confirm Password</FormLabel>
                      <Input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        placeholder="Confirm password"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                  </Box>
                </Box>
              )}

              {!showCreateAccount && (
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Button
                    variant="outlined"
                    size="sm"
                    onClick={() => setShowCreateAccount(true)}
                    disabled={isSubmitting}
                    sx={{ mb: 2 }}
                  >
                    + Create Account to Save Progress
                  </Button>
                </Box>
              )}
            </Box>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button
                type="submit"
                loading={isSubmitting}
                loadingPosition="start"
                startDecorator={<Send />}
                size="lg"
                sx={{
                  background: "linear-gradient(45deg, #0066CC, #004499)",
                  "&:hover": {
                    background: "linear-gradient(45deg, #004499, #002266)",
                  },
                }}
              >
                {isSubmitting ? "Submitting..." : "Send Request"}
              </Button>
              <Button variant="outlined" onClick={onClose} disabled={isSubmitting} size="lg">
                Cancel
              </Button>
            </Box>
          </form>

          <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid", borderColor: "divider" }}>
            <Typography level="body-sm" sx={{ textAlign: "center", color: "text.secondary" }}>
              💡 <strong>Prefer to talk directly?</strong> Call us at{" "}
              <a href="tel:9564980309" style={{ color: "#0066CC", textDecoration: "none" }}>
                (956) 498-0309
              </a>{" "}
              or email{" "}
              <a
                href="mailto:info@email.softwarepros.org"
                style={{ color: "#0066CC", textDecoration: "none" }}
              >
                info@email.softwarepros.org
              </a>
            </Typography>
          </Box>
        </CardContent>
      </ModalDialog>
    </Modal>
  );
}
