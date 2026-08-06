import { motion } from "framer-motion";
import { Bot, Workflow, MessagesSquare, Plug, Compass } from "lucide-react";
import { roles } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";

const icons = [Bot, Workflow, MessagesSquare, Plug, Compass];

export function About() {
  return (
    <section id="about" className="relative px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About me"
          title="Automation that pays for itself"
          subtitle="I help businesses replace manual, repetitive operations with AI systems that run reliably in the background — designed, built and documented end to end."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={role.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="glass-card group h-full p-7 transition-shadow duration-500 hover:shadow-[var(--shadow-glow)]"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{role.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </motion.article>
              </Reveal>
            );
          })}

          <Reveal delay={0.4}>
            <div className="glass-card flex h-full flex-col justify-center bg-[image:var(--gradient-primary)] p-7">
              <p className="font-display text-3xl font-bold">100%</p>
              <p className="mt-2 text-sm text-foreground/85">
                of delivered automations shipped with documentation, monitoring
                and a handover walkthrough.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}