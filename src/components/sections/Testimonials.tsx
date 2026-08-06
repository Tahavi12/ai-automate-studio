import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  const loop = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden px-4 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          subtitle="Feedback from founders and operators whose day-to-day now runs on autopilot."
        />
      </div>

      <div className="group relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <motion.figure
              key={`${t.name}-${i}`}
              whileHover={{ y: -6 }}
              className="glass-card w-[330px] shrink-0 p-7 sm:w-[380px]"
            >
              <Quote className="size-6 text-primary/70" />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 flex items-center justify-between border-t border-glass-border pt-5">
                <figcaption>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}