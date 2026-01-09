const baseUrl = process.env.CONTACT_TEST_BASE_URL ?? "http://localhost:3000";

const payload = {
  name: "Test User",
  email: "test@example.com",
  phone: "5551234567",
  company: "Test Company",
  serviceType: "AI & Automation Solutions",
  subject: "Test Contact Form",
  budget: "$25,000 - $50,000",
  timeline: "1-3 months",
  contactMethod: "Email",
  bestTimeToReach: "Morning",
  website: "",
  hearAboutUs: "Google Search",
  consent: true,
  message: "This is a test message to verify the contact form endpoint works.",
};

async function main() {
  const url = new URL("/api/contact", baseUrl).toString();

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const contentType = res.headers.get("content-type") ?? "";
  const text = await res.text();

  console.log("POST", url);
  console.log("Status:", res.status, res.statusText);
  console.log("Content-Type:", contentType);

  if (contentType.includes("application/json")) {
    try {
      console.log("Body:", JSON.parse(text));
    } catch {
      console.log("Body (invalid JSON):", text);
    }
  } else {
    console.log("Body:", text);
  }

  if (!res.ok) process.exitCode = 1;
}

main().catch((err) => {
  console.error("Test failed:", err);
  process.exitCode = 1;
});
