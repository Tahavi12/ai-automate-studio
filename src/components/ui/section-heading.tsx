import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-1.5 text-xs font-medium tracking-widest text-muted-foreground uppercase">
        <span className="size-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold text-balance sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base text-pretty text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}