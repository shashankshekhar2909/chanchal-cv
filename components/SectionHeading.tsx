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
  const alignClasses =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="rule-violet" />
      <h2
        className="font-display text-night"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-base max-w-xl" style={{ color: "var(--text-muted)" }}>{subtitle}</p>
      )}
    </div>
  );
}
