export type CaseStudy = {
  slug: string;
  company: string;
  role: string;
  period: string;
  focus: string;
  problem: string;
  actions: string[];
  outcome: string;
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-copper-400">
          {study.company}
        </p>
        <h3 className="font-display text-2xl text-sand-100">{study.focus}</h3>
        <p className="text-sm text-sand-200/80">
          {study.role} | {study.period}
        </p>
        <p className="text-base text-sand-200/90">{study.problem}</p>
        <p className="text-sm text-sand-200/80">
          Outcome: {study.outcome}
        </p>
      </div>
      <a
        href={`#case-${study.slug}`}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sand-100 hover:border-copper-400"
      >
        View case study
      </a>
    </article>
  );
}
