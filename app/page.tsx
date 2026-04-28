import SectionHeading from "@/components/SectionHeading";
import CaseStudyCard from "@/components/CaseStudyCard";
import TrackLink from "@/components/TrackLink";
import HeroCanvas from "@/components/HeroCanvas";
import Link from "next/link";
import { site } from "@/data/site";

const SHOW_TESTIMONIALS = false;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            paddingLeft: "clamp(1.25rem, 5vw, 2.5rem)",
            paddingRight: "clamp(1.25rem, 5vw, 2.5rem)",
          }}
        >
          <SkillsMarquee />
          <Certifications />
          <CaseStudies />
          <CaseStudyDetails />
          <ProofGallery />
          <About />
          <Services />
          <Faq />
          {SHOW_TESTIMONIALS ? <Testimonials /> : null}
        </div>
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

/* ── Site Header ──────────────────────────────────────────── */
function SiteHeader() {
  return (
    <header className="site-header">
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          paddingLeft: "clamp(1.25rem, 5vw, 2.5rem)",
          paddingRight: "clamp(1.25rem, 5vw, 2.5rem)",
          paddingTop: "0.875rem",
          paddingBottom: "0.875rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            className="font-display"
            style={{ fontSize: "1.05rem", fontWeight: 500, letterSpacing: "-0.01em", color: "var(--night)" }}
          >
            {site.name}
          </p>
          <p
            style={{
              fontSize: "0.58rem",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginTop: "0.05rem",
            }}
          >
            Content Strategist
          </p>
        </div>

        <nav
          style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.5rem" }}
          aria-label="Main navigation"
        >
          {[
            ["Work", "#case-studies"],
            ["Services", "#services"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
          <TrackLink href={site.contact.mailtoInterview} target="_blank" rel="noreferrer"
            event="cta_header_email" className="btn-secondary"
            style={{ padding: "0.45rem 1.1rem", fontSize: "0.6625rem" }}>
            Email
          </TrackLink>
          <TrackLink href={site.hero.ctas.resume} target="_blank" rel="noreferrer"
            event="cta_header_resume" className="btn-accent"
            style={{ padding: "0.45rem 1.1rem", fontSize: "0.6625rem" }}>
            Resume ↗
          </TrackLink>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
function Hero() {
  const rolePills = ["Lifecycle Messaging", "Social Strategy", "Retention Copy", "SEO Content"];

  return (
    <section
      className="hero-section"
      style={{
        borderBottom: "1px solid var(--border)",
        paddingTop: "clamp(3rem, 7vw, 5.5rem)",
        paddingBottom: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Three.js canvas */}
      <HeroCanvas />

      {/* Parallax blobs */}
      <div className="parallax-blob" style={{ width: "500px", height: "500px", background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 70%)", top: "-120px", right: "-100px" }} />
      <div className="parallax-blob" style={{ width: "360px", height: "360px", background: "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)", bottom: "-60px", left: "-80px" }} />

      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          paddingLeft: "clamp(1.25rem, 5vw, 2.5rem)",
          paddingRight: "clamp(1.25rem, 5vw, 2.5rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Main grid: left text / right bento ── */}
        <div
          style={{
            display: "grid",
            gap: "3rem",
            alignItems: "start",
          }}
          className="lg:grid-cols-[1fr_380px]"
        >
          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <div
              className="hero-animate-1"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.875rem",
                borderRadius: "9999px",
                border: "1px solid var(--violet-muted)",
                background: "var(--violet-pale)",
                marginBottom: "1.5rem",
                opacity: 0,
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--cyan)",
                  display: "inline-block",
                  boxShadow: "0 0 6px var(--cyan)",
                }}
              />
              <span style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--violet)" }}>
                Open to new roles · Bengaluru
              </span>
            </div>

            {/* Name + Headline */}
            <h1
              className="font-display hero-animate-1"
              style={{
                fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                fontWeight: 400,
                color: "var(--night)",
                marginBottom: "0.5rem",
                opacity: 0,
              }}
            >
              Chanchal
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, var(--violet) 0%, var(--cyan) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Verma.
              </span>
            </h1>

            {/* Role pills */}
            <div
              className="hero-animate-2"
              style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.25rem", marginBottom: "1.5rem", opacity: 0 }}
            >
              {rolePills.map((p) => (
                <span
                  key={p}
                  style={{
                    padding: "0.3rem 0.875rem",
                    borderRadius: "9999px",
                    border: "1px solid var(--border)",
                    background: "var(--surface-card)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "var(--text-soft)",
                    letterSpacing: "0.02em",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Value prop */}
            <p
              className="hero-animate-2"
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "var(--text-soft)",
                maxWidth: "50ch",
                marginBottom: "2rem",
                opacity: 0,
              }}
            >
              {site.hero.valueProp}
            </p>

            {/* CTAs */}
            <div
              style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "3rem" }}
            >
              <TrackLink href={site.hero.ctas.email} target="_blank" rel="noreferrer"
                event="cta_email_me" className="btn-accent btn-magnet hero-animate-cta"
                style={{ opacity: 0 }}>
                Email me
              </TrackLink>
              <a href={site.hero.ctas.caseStudies} className="btn-secondary btn-magnet hero-animate-cta"
                style={{ opacity: 0 }}>
                View work
              </a>
              <TrackLink href={site.hero.ctas.resume} target="_blank" rel="noreferrer"
                event="cta_download_resume" className="btn-secondary hero-animate-cta"
                style={{ opacity: 0 }}>
                Resume ↗
              </TrackLink>
            </div>

            <div
              className="hero-animate-cta"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginTop: "-1.75rem", marginBottom: "2.5rem", opacity: 0 }}
            >
              <span style={{ fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 700 }}>
                Find me on
              </span>
              <TrackLink href={site.contact.linkedin} target="_blank" rel="noreferrer" event="cta_hero_linkedin" className="nav-link">
                LinkedIn
              </TrackLink>
              <TrackLink href={site.contact.pinterest} target="_blank" rel="noreferrer" event="cta_hero_pinterest" className="nav-link">
                Pinterest
              </TrackLink>
            </div>
          </div>

          {/* RIGHT: bento impact grid */}
          <div className="hero-bento" style={{ display: "flex", flexDirection: "column", gap: "0.875rem", paddingBottom: "2rem" }}>

            {/* Big metric card */}
            <div
              className="bento-card card-3d"
              style={{
                background: "linear-gradient(135deg, var(--violet-deep) 0%, #3730A3 100%)",
                borderRadius: "1.25rem",
                padding: "1.75rem",
                position: "relative",
                overflow: "hidden",
                opacity: 0,
              }}
            >
              <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "120px", height: "120px", background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "0.625rem" }}>
                Retention System Result
              </p>
              <p className="font-display" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)", fontWeight: 400, color: "#fff", lineHeight: 1, letterSpacing: "-0.02em" }}>
                0.7% → 2–3%
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "0.5rem" }}>
                Through iterative A/B testing of hooks, timing & tone
              </p>
            </div>

            {/* Two small cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }}>
              <div
                className="bento-card card card-3d"
                style={{ padding: "1.25rem", opacity: 0 }}
              >
                <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  Posts / Month
                </p>
                <p className="font-display" style={{ fontSize: "2.25rem", fontWeight: 400, color: "var(--night)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  90+
                </p>
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>monthly content outputs</p>
              </div>

              <div
                className="bento-card card-surface card-3d"
                style={{ padding: "1.25rem", border: "1px solid var(--border)", borderRadius: "1.25rem", opacity: 0 }}
              >
                <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.5rem" }}>
                  Channels
                </p>
                {["Push", "WhatsApp", "SMS"].map((c) => (
                  <span
                    key={c}
                    style={{
                      display: "inline-block",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "4px",
                      background: "var(--violet-pale)",
                      color: "var(--violet)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      margin: "0.15rem 0.15rem 0 0",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Verticals bar */}
            <div
              className="bento-card"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "1rem 1.25rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "1.25rem",
                opacity: 0,
              }}
            >
              <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                Focus Areas
              </p>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {["Lifecycle", "Social", "SEO"].map((v) => (
                  <span key={v} style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--night)", padding: "0.25rem 0.625rem", borderRadius: "9999px", border: "1px solid var(--border)", background: "var(--surface-card)" }}>
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip inside hero ── */}
        <div
          id="results"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            borderTop: "1px solid var(--border)",
            marginTop: "0",
          }}
        >
          {[
            { label: "Push CTR",     value: "0.7% → 2–3%",          sub: "A/B tested" },
            { label: "Posts / Mo",   value: "90+",                   sub: "High-output planning" },
            { label: "Channels",     value: "Push · WA · SMS",       sub: "Lifecycle owned" },
            { label: "Coverage",     value: "Lifecycle · Social · SEO", sub: "Full-funnel content" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`stat-block reveal reveal-delay-${i + 1}`}
              style={{
                padding: "1.5rem 1rem",
                borderRight: i < 3 ? "1px solid var(--border)" : "none",
              }}
            >
              <p className="eyebrow" style={{ marginBottom: "0.35rem" }}>{s.label}</p>
              <p className="font-display" style={{ fontSize: "1.2rem", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.01em", color: "var(--night)" }}>
                {s.value}
              </p>
              <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Skills Marquee ───────────────────────────────────────── */
function SkillsMarquee() {
  const skills = [...site.skills, ...site.skills]; // duplicate for seamless loop
  return (
    <section
      className="reveal"
      style={{
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      <div
        className="marquee-track"
        style={{ display: "flex", gap: "0.75rem", width: "max-content" }}
      >
        {skills.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            style={{
              padding: "0.5rem 1.25rem",
              borderRadius: "9999px",
              border: "1px solid var(--border)",
              background: "var(--surface-card)",
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--text-soft)",
              whiteSpace: "nowrap",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ── Certifications ───────────────────────────────────────── */
function Certifications() {
  return (
    <section
      id="certifications"
      className="reveal"
      data-stagger=".cert-card"
      style={{ paddingTop: "3.5rem", paddingBottom: "2.5rem", borderBottom: "1px solid var(--border)" }}
    >
      <SectionHeading eyebrow="Credentials" title="Verified Certifications" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "0.875rem",
          marginTop: "2rem",
        }}
      >
        {site.certifications.map((cert) => (
          <div
            key={`${cert.title}-${cert.issued}`}
            className="card card-3d cert-card"
            style={{ padding: "1.25rem" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.18rem 0.55rem",
                borderRadius: "9999px",
                background: "var(--amber-pale)",
                border: "1px solid var(--amber-muted)",
                fontSize: "0.58rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#92400E",
                marginBottom: "0.75rem",
              }}
            >
              Certificate
            </span>
            <h3 style={{ fontSize: "0.875rem", fontWeight: 500, lineHeight: 1.35, color: "var(--night)" }}>
              {cert.title}
            </h3>
            <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: "0.375rem" }}>
              Issued {cert.issued}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Case Studies ─────────────────────────────────────────── */
function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="reveal"
      style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}
    >
      <SectionHeading
        eyebrow="Case Studies"
        title="Work That Moved the Needle"
        subtitle="Selected projects across lifecycle, social, and content operations."
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {site.caseStudies.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ── Case Study Details ───────────────────────────────────── */
function CaseStudyDetails() {
  return (
    <section style={{ paddingBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {site.caseStudies.map((study, i) => (
        <details
          key={study.slug}
          id={`case-${study.slug}`}
          className="card"
          style={{ padding: "1.5rem" }}
        >
          <summary style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", cursor: "pointer", listStyle: "none" }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: "0.3rem" }}>
                Case Study {String(i + 1).padStart(2, "0")}
              </p>
              <p className="font-display" style={{ fontSize: "1.05rem", fontWeight: 400, color: "var(--night)" }}>
                {study.focus} — {study.project}
              </p>
            </div>
            <svg className="summary-arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" style={{ flexShrink: 0, color: "var(--text-muted)" }}>
              <path d="M6 3L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>

          <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              {study.role} &nbsp;·&nbsp; {study.period}
            </p>

            <div>
              <p className="eyebrow" style={{ marginBottom: "0.375rem" }}>The Problem</p>
              <p style={{ color: "var(--night)", lineHeight: 1.65 }}>{study.problem}</p>
            </div>

            <div>
              <p className="eyebrow" style={{ marginBottom: "0.625rem" }}>What I Did</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                {study.actions.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-soft)", lineHeight: 1.55 }}>
                    <span style={{ marginTop: "0.45rem", width: "5px", height: "5px", borderRadius: "50%", background: "var(--violet)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: "var(--violet-pale)", border: "1px solid var(--violet-muted)", borderRadius: "0.75rem", padding: "1.1rem" }}>
              <p className="eyebrow" style={{ marginBottom: "0.3rem" }}>Outcome</p>
              <p className="font-display" style={{ fontSize: "1.05rem", fontWeight: 400, color: "var(--night)" }}>
                {study.outcome}
              </p>
            </div>
          </div>
        </details>
      ))}
    </section>
  );
}

/* ── Proof Gallery ────────────────────────────────────────── */
function ProofGallery() {
  const proofItems = [
    { title: "Push Notification Samples", desc: "Retention + lifecycle sequences with hook, timing, and urgency variations." },
    { title: "Reel Scripts & VO Directions", desc: "Hook-first structures, creative arcs, and caption frameworks for short-form video." },
    { title: "SEO Blog & Product Copy", desc: "Search-intent aligned blogs and catalog copy with conversion focus." },
    { title: "Campaign Briefs & Calendars", desc: "Social calendar samples and campaign strategy documents." },
  ];

  return (
    <section
      id="portfolio"
      className="reveal"
      style={{ paddingTop: "3rem", paddingBottom: "2.5rem", borderTop: "1px solid var(--border)" }}
    >
      <SectionHeading eyebrow="Portfolio Proof" title="Writing Samples" subtitle="Samples shared privately depending on brand permissions." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "0.875rem", marginTop: "1.75rem" }}>
        {proofItems.map((item) => (
          <div key={item.title} className="card-surface card-3d" style={{ padding: "1.25rem", border: "1px solid var(--border)", borderRadius: "1.25rem" }}>
            <div className="rule-violet" style={{ marginBottom: "0.75rem" }} />
            <h3 style={{ fontSize: "0.875rem", fontWeight: 500, marginBottom: "0.4rem", color: "var(--night)" }}>{item.title}</h3>
            <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.5 }}>{item.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <TrackLink href={site.contact.mailtoSamples} target="_blank" rel="noreferrer"
          event="cta_request_samples" className="btn-secondary">
          Request samples
        </TrackLink>
      </div>
    </section>
  );
}

/* ── About ────────────────────────────────────────────────── */
function About() {
  return (
    <section
      id="about"
      className="reveal"
      style={{ paddingTop: "3rem", paddingBottom: "2.5rem", borderTop: "1px solid var(--border)" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem", alignItems: "start" }} className="md:grid-cols-[2fr_1fr]">
        <div>
          <SectionHeading eyebrow="About" title="The Strategist Behind the Copy" />
          <p style={{ fontSize: "1rem", color: "var(--text-soft)", lineHeight: 1.75, marginTop: "1.25rem", maxWidth: "58ch" }}>
            I&apos;m a copywriter and content strategist focused on retention and social storytelling.
            My work sits at the intersection of data and narrative — I use performance signals
            to refine messages, and creative instinct to make them resonate.
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "1.5rem" }}>
            {site.about.map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-soft)" }}>
                <span style={{ marginTop: "0.5rem", width: "5px", height: "5px", borderRadius: "50%", background: "var(--cyan)", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-cyan card-3d" style={{ padding: "1.5rem" }}>
          <p className="eyebrow eyebrow-cyan" style={{ marginBottom: "0.875rem" }}>Working principles</p>
          {[
            "Hypothesis → test → iterate",
            "Data informs. Story persuades.",
            "Every message earns attention.",
            "Systems over one-offs.",
          ].map((p) => (
            <p key={p} style={{ fontSize: "0.825rem", color: "var(--text-soft)", lineHeight: 1.5, paddingBottom: "0.625rem", marginBottom: "0.625rem", borderBottom: "1px solid var(--cyan-muted)" }}>
              &ldquo;{p}&rdquo;
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Services ─────────────────────────────────────────────── */
function Services() {
  const icons = ["✦", "◈", "▲", "◉"];
  const serviceLinks = [
    {
      href: "/content-strategist-bengaluru",
      label: "View content strategy service page",
    },
    {
      href: "/lifecycle-messaging-specialist",
      label: "View lifecycle messaging service page",
    },
    {
      href: "/content-strategist-bengaluru#social-media-content-strategy",
      label: "View social media strategy section",
    },
    {
      href: "/seo-copywriter-india",
      label: "View SEO copywriting service page",
    },
  ];

  return (
    <section
      id="services"
      className="reveal"
      style={{ paddingTop: "3rem", paddingBottom: "4rem", borderTop: "1px solid var(--border)" }}
    >
      <SectionHeading eyebrow="Services" title="What I Can Do For You" subtitle="Focused offerings for brands that take content seriously." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1rem", marginTop: "2rem" }}>
        {site.services.map((service, i) => (
          <div key={service} className="service-card">
            <p style={{ fontSize: "0.75rem", color: "var(--violet)", marginBottom: "0.75rem", marginTop: "1.5rem" }}>
              {icons[i % icons.length]}
            </p>
            <p style={{ fontSize: "0.9rem", fontWeight: 500, lineHeight: 1.4, color: "var(--night)" }}>
              {service}
            </p>
            <Link
              href={serviceLinks[i]?.href ?? "#contact"}
              style={{
                display: "inline-block",
                marginTop: "0.85rem",
                fontSize: "0.72rem",
                color: "var(--violet)",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              }}
            >
              {serviceLinks[i]?.label ?? "Contact for details"}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Who is Chanchal Verma?",
      a: "Chanchal Verma is a content strategist and copywriter based in Bengaluru, focused on lifecycle messaging, social strategy, SEO content, and conversion-focused copy systems.",
    },
    {
      q: "What services does Chanchal Verma offer?",
      a: "Services include push notification copy, WhatsApp and SMS campaign messaging, social media content strategy, reels scripting, SEO content writing, and catalog copy optimization.",
    },
    {
      q: "Does Chanchal Verma work on retention and lifecycle campaigns?",
      a: "Yes. Chanchal builds lifecycle content systems across push, WhatsApp, and SMS, and improves engagement with testing across hooks, timing, and message structure.",
    },
    {
      q: "How can I hire Chanchal Verma for content strategy work?",
      a: "Use the contact section to send an email for full-time, freelance, or consulting opportunities.",
    },
  ];

  return (
    <section
      id="faq"
      className="reveal"
      style={{ paddingTop: "2.5rem", paddingBottom: "3.5rem", borderTop: "1px solid var(--border)" }}
    >
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Quick answers for hiring and service fit."
      />
      <div style={{ marginTop: "1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {faqs.map((item) => (
          <details key={item.q} className="card" style={{ padding: "1rem 1.15rem" }}>
            <summary style={{ cursor: "pointer", fontSize: "0.92rem", fontWeight: 600, color: "var(--night)" }}>
              {item.q}
            </summary>
            <p style={{ marginTop: "0.7rem", fontSize: "0.88rem", lineHeight: 1.65, color: "var(--text-soft)" }}>
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ── Testimonials (hidden) ────────────────────────────────── */
function Testimonials() {
  return (
    <section id="testimonials" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <SectionHeading eyebrow="Testimonials" title="Coming soon" subtitle="Enable SHOW_TESTIMONIALS once references are ready." />
    </section>
  );
}

/* ── Contact ──────────────────────────────────────────────── */
function Contact() {
  return (
    <section
      id="contact"
      className="contact-band"
      style={{ padding: "clamp(3rem, 7vw, 5.5rem) clamp(1.25rem, 5vw, 2.5rem)" }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", alignItems: "start" }} className="lg:grid-cols-2">
          <div>
            <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--violet-bright)", marginBottom: "1rem" }}>
              Let&apos;s work together
            </p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em", color: "#FAFBFF", marginBottom: "1rem" }}>
              Ready to hire or book an interview call?
            </h2>
            <p style={{ fontSize: "0.975rem", color: "rgba(250,251,255,0.6)", lineHeight: 1.65, maxWidth: "44ch" }}>
              Email is fastest. I&apos;m open to full-time roles, freelance projects, and consulting engagements.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            <div>
              <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,251,255,0.38)", marginBottom: "0.35rem" }}>Email</p>
              <TrackLink href={site.contact.mailtoInterview} target="_blank" rel="noreferrer"
                event="cta_contact_email" className="contact-email-link">
                {site.contact.email}
              </TrackLink>
            </div>
            <div>
              <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,251,255,0.38)", marginBottom: "0.35rem" }}>Location</p>
              <p style={{ fontSize: "1rem", color: "#FAFBFF" }}>{site.contact.location}</p>
            </div>
            <div>
              <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(250,251,255,0.38)", marginBottom: "0.35rem" }}>Social</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <TrackLink href={site.contact.linkedin} target="_blank" rel="noreferrer" event="cta_contact_linkedin" className="nav-link">
                  LinkedIn
                </TrackLink>
                <TrackLink href={site.contact.pinterest} target="_blank" rel="noreferrer" event="cta_contact_pinterest" className="nav-link">
                  Pinterest
                </TrackLink>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
              <TrackLink href={site.contact.mailtoInterview} target="_blank" rel="noreferrer"
                event="cta_hire_me" className="btn-accent btn-magnet">
                Hire me
              </TrackLink>
              <TrackLink href={site.contact.mailtoInterview} target="_blank" rel="noreferrer"
                event="cta_book_call"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1.5rem", borderRadius: "9999px", border: "1.5px solid rgba(250,251,255,0.28)", color: "#FAFBFF", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "border-color 0.2s" }}>
                Book a call
              </TrackLink>
              <TrackLink href={site.contact.mailtoSamples} target="_blank" rel="noreferrer"
                event="cta_request_private_samples"
                style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.75rem 1.5rem", borderRadius: "9999px", border: "1.5px solid rgba(250,251,255,0.28)", color: "#FAFBFF", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", transition: "border-color 0.2s" }}>
                Private samples
              </TrackLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */
function SiteFooter() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "1.5rem clamp(1.25rem, 5vw, 2.5rem)", background: "var(--bg)" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        <p style={{ fontSize: "0.72rem", color: "var(--text-subtle)", letterSpacing: "0.04em" }}>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <TrackLink href={site.contact.mailtoInterview} target="_blank" rel="noreferrer" event="cta_footer_email" className="nav-link">Email</TrackLink>
          <TrackLink href={site.contact.linkedin} target="_blank" rel="noreferrer" event="cta_footer_linkedin" className="nav-link">LinkedIn</TrackLink>
          <TrackLink href={site.contact.pinterest} target="_blank" rel="noreferrer" event="cta_footer_pinterest" className="nav-link">Pinterest</TrackLink>
          <TrackLink href={site.contact.mailtoSamples} target="_blank" rel="noreferrer" event="cta_footer_samples" className="nav-link">Samples</TrackLink>
          <TrackLink href={site.hero.ctas.resume} target="_blank" rel="noreferrer" event="cta_footer_resume" className="nav-link">Resume</TrackLink>
        </div>
      </div>
    </footer>
  );
}
