import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import MetricChip from "@/components/MetricChip";
import CaseStudyCard from "@/components/CaseStudyCard";
import { site } from "@/data/site";

const SHOW_TESTIMONIALS = false;

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-4 py-12 sm:gap-20 sm:px-6 md:px-10 lg:px-0">
      <Hero />
      <ResultsSnapshot />
      <div className="gradient-divider" />
      <CaseStudies />
      <CaseStudyDetails />
      <ProofGallery />
      <About />
      <Services />
      {SHOW_TESTIMONIALS ? <Testimonials /> : null}
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="decor-wrapper rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card sm:p-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-copper-400">
            {site.name} · Portfolio
          </p>
          <p className="font-display text-3xl text-sand-100 sm:text-4xl">
            {site.name}
          </p>
          <h1 className="font-display text-4xl text-sand-100 sm:text-5xl lg:text-6xl">
            {site.hero.headline}
          </h1>
          <p className="max-w-2xl text-lg text-sand-200/90">
            {site.hero.valueProp}
          </p>
          <p className="max-w-2xl text-base text-sand-200/70">
            {site.hero.subline}
          </p>
          <div className="flex flex-wrap gap-3">
            {site.hero.metricChips.map((chip) => (
              <MetricChip key={chip} label={chip} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={site.hero.ctas.email}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-copper-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink-900 hover:bg-copper-400"
            >
              Email me
            </a>
            <a
              href={site.hero.ctas.caseStudies}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-copper-400"
            >
              View case studies
            </a>
            <a
              href={site.hero.ctas.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-jade-400"
            >
              Download resume
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-ink-800/60 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-berry-500">
            Quick context
          </p>
          <div className="mt-4 space-y-4 text-sm text-sand-200/80">
            <p>{site.name}</p>
            <p>{site.role}</p>
            <p>{site.location}</p>
            <p>
              Specialties: retention copy, social content systems, influencer
              coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResultsSnapshot() {
  return (
    <section id="results" className="space-y-8">
      <SectionHeading
        eyebrow="Results Snapshot"
        title="Proof-heavy highlights recruiters can scan fast"
        subtitle="Only verified metrics are listed. Everything else is clearly marked as available on request."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.resultsSnapshot.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card"
          >
            <h3 className="font-display text-2xl text-sand-100">{item.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-sand-200/80">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-copper-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="space-y-8">
      <SectionHeading
        eyebrow="Case Studies"
        title="Problem -> Action -> Outcome"
        subtitle="Each case links to a quick detail block with proof placeholders for screenshots."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {site.caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}

function CaseStudyDetails() {
  return (
    <section className="space-y-6">
      {site.caseStudies.map((study) => (
        <details
          key={study.slug}
          id={`case-${study.slug}`}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.3em] text-copper-400">
            {study.company} - {study.focus}
          </summary>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm text-sand-200/70">
                {study.role} | {study.period}
              </p>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-berry-500">
                  Problem
                </p>
                <p className="mt-2 text-base text-sand-100">{study.problem}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-berry-500">
                  What I did
                </p>
                <ul className="mt-2 space-y-2 text-sm text-sand-200/80">
                  {study.whatIDid.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-copper-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-berry-500">
                  Outcome
                </p>
                <p className="mt-2 text-base text-sand-100">{study.outcome}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-white/25 bg-ink-800/60 p-6 text-sm text-sand-200/70">
              {study.proof}
            </div>
          </div>
        </details>
      ))}
    </section>
  );
}

function ProofGallery() {
  return (
    <section id="portfolio" className="space-y-8">
      <SectionHeading
        eyebrow="Portfolio Proof"
        title="Sample formats (proof available on request)"
        subtitle="Current blocks are labeled placeholders until real samples are added."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {site.gallery.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={item.image}
                alt={item.title}
                width={640}
                height={400}
                className="h-48 w-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-display text-2xl text-sand-100">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-sand-200/80">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="space-y-6">
      <SectionHeading
        eyebrow="About"
        title="Short, skimmable, recruiter-friendly"
      />
      <div className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card">
        <ul className="grid gap-3 text-sm text-sand-200/80 md:grid-cols-2">
          {site.about.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-jade-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="space-y-6">
      <SectionHeading
        eyebrow="Services"
        title="Ways I plug into teams"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {site.services.map((service) => (
          <div
            key={service}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-sand-100"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="space-y-6">
      <SectionHeading
        eyebrow="Testimonials"
        title="Hidden for now"
        subtitle="Enable SHOW_TESTIMONIALS once references are ready."
      />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <SectionHeading
        eyebrow="Contact"
        title="Hire me or book an interview call"
        subtitle="Email is fastest. LinkedIn button is ready once you add the URL."
      />
      <div className="rounded-3xl border border-white/10 bg-ink-800/70 p-6 shadow-card">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 text-sm text-sand-200/80">
            <p className="text-xs uppercase tracking-[0.3em] text-copper-400">
              Email
            </p>
            <a
              href={`mailto:${site.contact.email}?subject=Interview%20Call`}
              target="_blank"
              rel="noreferrer"
              className="text-lg text-sand-100 hover:text-copper-400"
            >
              {site.contact.email}
            </a>
          </div>
          <div className="space-y-2 text-sm text-sand-200/80">
            <p className="text-xs uppercase tracking-[0.3em] text-copper-400">
              Location
            </p>
            <p className="text-lg text-sand-100">{site.contact.location}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.contact.email}?subject=Hiring%20Inquiry`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-berry-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:bg-berry-600"
          >
            Hire me
          </a>
          <a
            href={`mailto:${site.contact.email}?subject=Interview%20Call`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-copper-400"
          >
            Book a call
          </a>
          {site.contact.linkedinUrl ? (
            <a
              href={site.contact.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-jade-400"
            >
              LinkedIn
            </a>
          ) : (
            <span className="inline-flex items-center justify-center rounded-full border border-dashed border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100/60">
              {site.contact.linkedinLabel}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
