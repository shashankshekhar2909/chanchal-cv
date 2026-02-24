import SectionHeading from "@/components/SectionHeading";
import MetricChip from "@/components/MetricChip";
import CaseStudyCard from "@/components/CaseStudyCard";
import TrackLink from "@/components/TrackLink";
import { site } from "@/data/site";

const SHOW_TESTIMONIALS = false;

export default function HomePage() {
  return (
    <main className="portal-shell mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-4 py-12 sm:gap-20 sm:px-6 md:px-10 lg:px-0">
      <PortalHeader />
      <Hero />
      <ResultsSnapshot />
      <Skills />
      <Certifications />
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

function PortalHeader() {
  return (
    <header className="surface flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-copper-400">
          {site.name}
        </p>
        <p className="text-sm text-sand-200/80">{site.role}</p>
      </div>
      <nav className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-sand-100/80">
        <a href="#results" className="hover:text-copper-400">
          Results
        </a>
        <a href="#case-studies" className="hover:text-copper-400">
          Case Studies
        </a>
        <a href="#services" className="hover:text-copper-400">
          Services
        </a>
        <a href="#contact" className="hover:text-copper-400">
          Contact
        </a>
      </nav>
      <div className="flex flex-wrap gap-3">
        <TrackLink
          href={site.contact.mailtoInterview}
          target="_blank"
          rel="noreferrer"
          event="cta_header_email"
          className="inline-flex items-center justify-center rounded-full border border-white/25 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-copper-400"
        >
          Email
        </TrackLink>
        <TrackLink
          href={site.hero.ctas.resume}
          target="_blank"
          rel="noreferrer"
          event="cta_header_resume"
          className="inline-flex items-center justify-center rounded-full bg-copper-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-ink-900 hover:bg-copper-400"
        >
          Resume
        </TrackLink>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="decor-wrapper section-panel rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card sm:p-10">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-copper-400">
            {site.name} · Portfolio
          </p>
          <h1 className="font-display text-4xl text-sand-100 sm:text-5xl lg:text-6xl">
            {site.hero.headline}
          </h1>
          <h2 className="text-sm uppercase tracking-[0.25em] text-sand-200/80">
            {site.hero.subheading}
          </h2>
          <p className="max-w-2xl text-lg text-sand-200/90">
            {site.hero.valueProp}
          </p>
          <div className="flex flex-wrap gap-3">
            {site.hero.metricChips.map((chip) => (
              <MetricChip key={chip} label={chip} />
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <TrackLink
              href={site.hero.ctas.email}
              target="_blank"
              rel="noreferrer"
              event="cta_email_me"
              className="inline-flex items-center justify-center rounded-full bg-copper-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-ink-900 hover:bg-copper-400"
            >
              Email me
            </TrackLink>
            <a
              href={site.hero.ctas.caseStudies}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-copper-400"
            >
              View case studies
            </a>
            <TrackLink
              href={site.hero.ctas.resume}
              target="_blank"
              rel="noreferrer"
              event="cta_download_resume"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-jade-400"
            >
              Download resume
            </TrackLink>
          </div>
        </div>
        <div className="surface rounded-3xl p-6">
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
        title="Results Snapshot — Engagement Growth & Messaging Outcomes"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {site.resultsSnapshot.map((item) => (
          <div
            key={item.title}
            className="surface rounded-3xl p-6"
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

function Skills() {
  return (
    <section id="skills" className="space-y-8">
      <SectionHeading
        eyebrow="Skills"
        title="Core skills"
        subtitle="Copy, lifecycle messaging, social systems, and content operations."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {site.skills.map((skill) => (
          <span
            key={skill}
            className="portal-badge text-xs font-semibold uppercase tracking-[0.18em] text-sand-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="space-y-8">
      <SectionHeading
        eyebrow="Certifications"
        title="Verified credentials"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {site.certifications.map((cert) => (
          <div
            key={`${cert.title}-${cert.issuer}`}
            className="surface rounded-3xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-copper-400">
              {cert.issuer}
            </p>
            <h3 className="mt-3 font-display text-2xl text-sand-100">
              {cert.title}
            </h3>
            <p className="mt-2 text-sm text-sand-200/80">Issued {cert.issued}</p>
            {cert.credentialId ? (
              <p className="mt-2 text-xs text-sand-200/60">
                Credential ID: {cert.credentialId}
              </p>
            ) : null}
            {cert.credentialUrl !== undefined ? (
              <p className="mt-2 text-xs text-sand-200/60">
                Credential URL: {cert.credentialUrl || "Add credential link"}
              </p>
            ) : null}
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
        title="Case Studies — Content Strategy & Lifecycle Wins"
        subtitle="Selected projects and outcomes."
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
          className="surface rounded-3xl p-6"
        >
          <summary className="cursor-pointer list-none text-sm uppercase tracking-[0.3em] text-copper-400">
            {study.company} - {study.focus}
          </summary>
          <div className="mt-6 space-y-4">
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
                Actions
              </p>
              <ul className="mt-2 space-y-2 text-sm text-sand-200/80">
                {study.actions.map((item) => (
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
        title="Portfolio Proof — Push, Reels, SEO Samples"
        subtitle="Samples can be shared privately depending on brand permissions."
      />
      <div className="surface rounded-3xl p-6">
        <ul className="space-y-3 text-sm text-sand-200/80">
          <li>Push notification samples (retention + lifecycle).</li>
          <li>Reel scripts, VO directions, and caption frameworks.</li>
          <li>SEO blog snippets + product description systems.</li>
          <li>Social calendar samples and campaign briefs.</li>
        </ul>
        <div className="mt-6">
          <TrackLink
            href={site.contact.mailtoSamples}
            target="_blank"
            rel="noreferrer"
            event="cta_request_samples"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-copper-400"
          >
            Request samples
          </TrackLink>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="space-y-6">
      <SectionHeading
        eyebrow="About"
        title="About — Digital Content & Social Media Expert"
      />
      <div className="surface rounded-3xl p-6">
        <p className="mb-4 text-sm text-sand-200/80">
          I’m a copywriter and content strategist focused on retention and social storytelling.
        </p>
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
        title="Services — Lifecycle Messaging, Social Content, SEO Strategy"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {site.services.map((service) => (
          <div
            key={service}
            className="surface rounded-3xl p-5 text-sm text-sand-100"
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
        subtitle="Email is fastest. LinkedIn is also available."
      />
      <div className="surface rounded-3xl p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2 text-sm text-sand-200/80">
            <p className="text-xs uppercase tracking-[0.3em] text-copper-400">
              Email
            </p>
            <TrackLink
              href={site.contact.mailtoInterview}
              target="_blank"
              rel="noreferrer"
              event="cta_contact_email"
              className="text-lg text-sand-100 hover:text-copper-400"
            >
              {site.contact.email}
            </TrackLink>
          </div>
          <div className="space-y-2 text-sm text-sand-200/80">
            <p className="text-xs uppercase tracking-[0.3em] text-copper-400">
              Location
            </p>
            <p className="text-lg text-sand-100">{site.contact.location}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <TrackLink
            href={site.contact.mailtoInterview}
            target="_blank"
            rel="noreferrer"
            event="cta_hire_me"
            className="inline-flex items-center justify-center rounded-full bg-berry-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:bg-berry-600"
          >
            Hire me
          </TrackLink>
          <TrackLink
            href={site.contact.mailtoInterview}
            target="_blank"
            rel="noreferrer"
            event="cta_book_call"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-copper-400"
          >
            Book a call
          </TrackLink>
          <TrackLink
            href={site.contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            event="cta_linkedin"
            className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-sand-100 hover:border-jade-400"
          >
            LinkedIn
          </TrackLink>
        </div>
      </div>
    </section>
  );
}
