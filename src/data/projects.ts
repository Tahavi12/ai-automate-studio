import chatbotImg from "@/assets/project-chatbot.jpg";
import crmImg from "@/assets/project-crm.jpg";
import whatsappImg from "@/assets/project-whatsapp.jpg";
import emailImg from "@/assets/project-email.jpg";
import workflowImg from "@/assets/featured-workflow.jpg";

export type Project = {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
  tech: string[];
  results: string[];
  demoUrl: string;
  featured?: boolean;
};

/**
 * Portfolio data source. Add a new object here and it shows up in the gallery.
 */
export const projects: Project[] = [
  {
    id: "ai-appointment-booking-agent",
    title: "AI Appointment Booking Agent",
    description:
      "An AI-powered appointment booking system built with n8n, OpenAI and Microsoft Outlook Calendar.",
    details:
      "A conversational agent that handles the full booking lifecycle: it understands the request in natural language, checks live calendar availability, books the slot, generates a Teams meeting link, sends confirmation emails and hands off to a human when the intent is out of scope. Conversation memory keeps context across the whole chat.",
    image: workflowImg,
    tech: ["n8n", "OpenAI", "Outlook Calendar", "Microsoft Teams", "Webhooks"],
    results: [
      "Zero manual scheduling work",
      "24/7 booking coverage",
      "Under 30s average booking time",
    ],
    demoUrl: "https://www.fiverr.com",
    featured: true,
  },
  {
    id: "ai-support-chatbot",
    title: "AI Customer Support Chatbot",
    description:
      "A RAG-powered support assistant trained on company docs, deployed on the website and in Messenger.",
    details:
      "Documents are chunked and embedded into a vector store, then served through a retrieval agent with strict grounding rules. Unanswered questions are escalated to a human inbox with the full transcript attached.",
    image: chatbotImg,
    tech: ["OpenAI", "FastAPI", "Vector DB", "n8n", "React"],
    results: ["72% of tickets deflected", "Instant first response"],
    demoUrl: "https://www.fiverr.com",
  },
  {
    id: "crm-lead-automation",
    title: "CRM & Lead Generation Automation",
    description:
      "Automated lead capture, enrichment, scoring and CRM sync across every inbound channel.",
    details:
      "Leads from forms, ads and cold outreach are deduplicated, enriched with firmographic data, scored by an AI classifier and routed to the right sales owner with a personalised first-touch email drafted automatically.",
    image: crmImg,
    tech: ["Make.com", "HubSpot", "OpenAI", "Google Sheets", "REST APIs"],
    results: ["3x faster lead response", "100% CRM data accuracy"],
    demoUrl: "https://www.fiverr.com",
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Business Automation",
    description:
      "An AI agent on WhatsApp Cloud API handling orders, FAQs and follow-up reminders.",
    details:
      "Built on the WhatsApp Cloud API with an n8n orchestration layer. Handles catalogue browsing, order confirmation, payment links and automated re-engagement sequences, with a live handover to staff at any point.",
    image: whatsappImg,
    tech: ["WhatsApp Cloud API", "n8n", "OpenAI", "Supabase"],
    results: ["4x more qualified conversations", "Fully hands-off follow-ups"],
    demoUrl: "https://www.fiverr.com",
  },
  {
    id: "email-automation-engine",
    title: "Email Automation Engine",
    description:
      "Behaviour-triggered email sequences with AI-personalised copy and full analytics.",
    details:
      "Every subscriber action fires a webhook that recalculates their sequence branch. Subject lines and opening paragraphs are generated per recipient from CRM context, then tested against control variants.",
    image: emailImg,
    tech: ["n8n", "OpenAI", "Resend", "Postgres", "Webhooks"],
    results: ["41% open rate", "Hours of manual sending removed"],
    demoUrl: "https://www.fiverr.com",
  },
];

export const featuredProject = projects.find((p) => p.featured) ?? projects[0];