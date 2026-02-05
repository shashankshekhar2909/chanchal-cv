export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 space-y-2">
      <p className="text-sm uppercase tracking-[0.3em] text-accent-peach/80">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      {subtitle && <p className="text-base text-slate-300 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
