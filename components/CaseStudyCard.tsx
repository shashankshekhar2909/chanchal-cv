export type CaseStudy = {
  slug: string;
  project: string;
  role: string;
  period: string;
  focus: string;
  problem: string;
  actions: string[];
  outcome: string;
};

export default function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index?: number;
}) {
  const num = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <article className="card card-3d flex h-full flex-col justify-between p-7 group">
      <div className="space-y-4">
        {/* Top row: index + project */}
        <div className="flex items-start justify-between gap-4">
          {num && (
            <span className="index-num font-display select-none">{num}</span>
          )}
          <span
            className="eyebrow mt-1 text-right leading-snug"
            style={{ color: "var(--text-muted)", maxWidth: "16rem" }}
          >
            {study.project}
          </span>
        </div>

        <div className="rule" />

        {/* Focus / title */}
        <h3
          className="font-display"
          style={{
            fontSize: "1.3rem",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            color: "var(--night)",
          }}
        >
          {study.focus}
        </h3>

        {/* Meta */}
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {study.role} &nbsp;·&nbsp; {study.period}
        </p>

        {/* Problem */}
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>
          {study.problem}
        </p>

        {/* Outcome pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.375rem 0.875rem",
            borderRadius: "9999px",
            background: "var(--violet-pale)",
            border: "1px solid var(--violet-muted)",
            fontSize: "0.6875rem",
            fontWeight: 600,
            color: "var(--violet)",
            letterSpacing: "0.04em",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1 8.5L5 2.5L9 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {study.outcome}
        </div>
      </div>

      {/* CTA */}
      <a
        href={`#case-${study.slug}`}
        className="case-study-cta mt-6 inline-flex items-center gap-2 text-sm font-medium"
      >
        Read case study
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </article>
  );
}
