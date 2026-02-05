import SectionHeading from "@/components/SectionHeading";
import { resume } from "@/data/resume";

const accentGradient =
  "from-accent-peach/80 via-accent-blush/70 to-accent-mint/80";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-14 px-4 py-14 sm:gap-20 sm:px-6 md:px-10 lg:px-0">
      <Hero />
      <ContactAndProfile />
      <div className="gradient-divider" />
      <ExperienceTimeline />
      <SkillsAndCerts />
      <Education />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="decor-wrapper rounded-3xl bg-slate-900/40 p-6 shadow-card ring-1 ring-white/5 backdrop-blur sm:p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-accent-mint text-center sm:text-left">Portfolio Spotlight</p>
      <h1 className="mt-4 text-center font-display text-4xl leading-tight text-white md:text-left md:text-5xl lg:text-6xl">
        {resume.name}
      </h1>
      <p className="mt-3 text-center text-xl text-accent-peach md:text-left">{resume.title}</p>
      <p className="mt-6 text-center text-lg text-slate-200 md:max-w-3xl md:text-left">{resume.profile}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
        <a
          href="mailto:being.chanchalv@gmail.com"
          className="rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          style={{
            backgroundImage: "linear-gradient(120deg,#f97316,#f43f5e,#8b5cf6)",
          }}
        >
          Collaborate with Chanchal
        </a>
        <a
          href="#experience"
          className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur hover:border-accent-peach"
        >
          Browse Experience
        </a>
      </div>
    </section>
  );
}

function ContactAndProfile() {
  return (
    <section id="contact" className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-card sm:p-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build your next signature story"
          subtitle="Open to brand-side roles, creative studios, and collaborative freelance pods."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resume.contact.map((item) => (
            <div
              key={item.label}
              className="min-w-0 rounded-2xl border border-white/10 bg-slate-900/40 p-4"
            >
              <p className="text-xs uppercase tracking-widest text-white/60">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-2 block text-lg font-medium text-white break-words hover:text-accent-mint"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-2 text-lg font-medium text-white break-words">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-card sm:p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-accent-peach">Profile</p>
        <p className="mt-4 text-lg text-slate-100">{resume.heroPunchline}</p>
        <ul className="mt-6 space-y-3 text-sm text-slate-300">
          <li>• Social-first storylines grounded in data.</li>
          <li>• Comfortable owning full calendars: ideation → scripting → publish.</li>
          <li>• Builds playbooks for lifecycle messaging, reels, and influencer pods.</li>
        </ul>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="space-y-10">
      <SectionHeading
        eyebrow="Experience"
        title="Brand chapters written so far"
        subtitle="In-house and agency-side roles across lifestyle, D2C, fintech, and creator ecosystems."
      />
      <div className="timeline relative space-y-10">
        {resume.experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="timeline-item rounded-3xl border border-white/10 bg-slate-900/40 p-5 shadow-card sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 text-sm uppercase tracking-widest text-white/60">
              <span>{experience.company}</span>
              <span>{experience.period}</span>
            </div>
            <h3 className="mt-4 font-display text-2xl text-white">{experience.role}</h3>
            <p className="mt-3 text-base text-slate-300">{experience.summary}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              {experience.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-accent-peach to-accent-mint" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsAndCerts() {
  return (
    <section className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-6 shadow-card sm:p-8">
        <SectionHeading
          eyebrow="Strengths"
          title="Creative toolkit"
          subtitle="A mix of strategy, craft, and experimentation." />
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {resume.skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4 text-sm font-medium text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-accent-peach/10 via-transparent to-accent-mint/10 p-6 shadow-card sm:p-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Always in learning mode"
        />
        <ul className="mt-6 space-y-4 text-base text-slate-100">
          {resume.certifications.map((cert) => (
            <li key={cert} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent-peach" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section>
      <SectionHeading eyebrow="Education" title="Fashion-rooted storytelling" />
      <div className="grid gap-5 md:grid-cols-2">
        {resume.education.map((edu) => (
          <div key={edu.school} className="rounded-3xl border border-white/15 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-accent-mint">
              {edu.period}
            </p>
            <h3 className="mt-3 font-display text-2xl text-white">{edu.program}</h3>
            <p className="mt-1 text-slate-300">{edu.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-accent-peach/20 via-accent-blush/20 to-accent-mint/20 p-10 text-center shadow-card">
      <p className="text-sm uppercase tracking-[0.3em] text-white/80">Next collaboration</p>
      <h2 className="mt-4 font-display text-4xl text-white">Ready to give your brand a new voice?</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base text-white/80">
        Whether it’s retention copy, high-velocity social calendars, or influencer launch pods, Chanchal can plug in and ship polished content systems.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="mailto:being.chanchalv@gmail.com"
          className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
        >
          Email Chanchal
        </a>
        <a
          href="tel:+919645697062"
          className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-white"
        >
          Call / WhatsApp
        </a>
      </div>
    </section>
  );
}
