import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { AmbientBackground } from "@/components/AmbientBackground";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Footer } from "@/components/sections/Footer";

const title = "Md Tahavi Shahriar — AI Automation Developer";
const description =
  "AI automation developer building chatbots, n8n workflows, API integrations and custom AI agents that save businesses time and money.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Md Tahavi Shahriar",
          jobTitle: "AI Automation Developer",
          description,
          knowsAbout: [
            "AI Automation",
            "n8n",
            "OpenAI",
            "Chatbots",
            "API Integration",
            "Make.com",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen overflow-x-clip"
    >
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <FeaturedProject />
      </main>
      <Footer />
    </motion.div>
  );
}
