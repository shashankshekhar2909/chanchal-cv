export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignClasses = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`space-y-2 ${alignClasses}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-copper-400">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl text-sand-100 md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-base text-sand-200/80">{subtitle}</p>}
    </div>
  );
}
