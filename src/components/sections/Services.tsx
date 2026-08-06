import { motion } from "framer-motion";
import {
  Bot,
  Workflow,
  CalendarClock,
  Users,
  Target,
  Mail,
  MessageCircle,
  MessagesSquare,
  Plug,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Workflow,
  CalendarClock,
  Users,
  Target,
  Mail,
  MessageCircle,
  MessagesSquare,
  Plug,
  Sparkles,
};

export function Services() {
  return (
    <section id="services" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Services"
          title="What I can automate for you"
          subtitle="From a single workflow to a complete AI operations layer across your business."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="glass-card group relative h-full overflow-hidden p-7"
                >
                  <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-[image:var(--gradient-primary)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />
                  <span className="relative grid size-11 place-items-center rounded-xl border border-glass-border bg-glass text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:text-accent">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="relative mt-5 text-base font-semibold">
                    {service.title}
                  </h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}