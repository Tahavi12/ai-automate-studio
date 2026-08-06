import { motion } from "framer-motion";
import { Check, ExternalLink } from "lucide-react";
import { featuredProject } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";

const features = [
  "AI Chatbot",
  "Calendar Availability",
  "Appointment Booking",
  "Email Notification",
  "Memory",
  "Teams Meeting",
  "Human Handoff",
];

export function FeaturedProject() {
  return (
    <section className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass-card relative overflow-hidden p-6 sm:p-10">
            <div className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-primary/20 blur-[120px]" />

            <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium tracking-widest text-accent uppercase">
                  Featured project
                </span>
                <h2 className="mt-5 text-3xl font-bold text-balance sm:text-4xl">
                  {featuredProject.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {featuredProject.description}
                </p>

                <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                  {features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.06 }}
                      className="flex items-center gap-2.5 text-sm"
                    >
                      <span className="grid size-5 place-items-center rounded-full bg-accent/15 text-accent">
                        <Check className="size-3" />
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <a
                  href={featuredProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
                >
                  See it live <ExternalLink className="size-4" />
                </a>
              </div>

              <motion.div
                whileHover={{ rotateX: 2, rotateY: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative rounded-2xl border border-glass-border bg-card/60 p-2 shadow-[var(--shadow-soft)] [transform-style:preserve-3d]"
              >
                <img
                  src={featuredProject.image}
                  alt="AI appointment booking workflow built in n8n"
                  loading="lazy"
                  width={1600}
                  height={912}
                  className="w-full rounded-xl object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10" />
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}