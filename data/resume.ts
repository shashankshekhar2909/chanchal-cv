export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type Education = {
  school: string;
  program: string;
  period: string;
};

export const resume = {
  name: "Chanchal Verma",
  title: "Copywriter · Social Media & Content Strategist",
  heroPunchline: "Transforming ideas into scroll-stopping brand stories.",
  profile:
    "Creative and performance-driven storyteller with a record of crafting multi-channel content strategies that spark engagement, retention, and growth for D2C and tech brands.",
  contact: [
    { label: "Phone", value: "+91 96456 97062", href: "tel:+919645697062" },
    { label: "Email", value: "being.chanchalv@gmail.com", href: "mailto:being.chanchalv@gmail.com" },
    { label: "Location", value: "Bengaluru, India" },
  ],
  skills: [
    "Content Strategy",
    "Copywriting",
    "Social Media Leadership",
    "Influencer Marketing",
    "SEO Blogs",
    "Trendspotting",
    "AI-powered Content",
    "Campaign Analytics",
  ],
  certifications: [
    "Digital Marketing – MyCaptain",
    "Marketing & Advertising – MyCaptain",
    "Creative Writing – MyCaptain",
    "Blogging & Content Writing – MyCaptain",
  ],
  experiences: [
    {
      company: "Nek by JAR",
      role: "Content Writer",
      period: "Jul 2024 – Mar 2025",
      summary:
        "Ideated multi-format social narratives for a premium lifestyle label, making every post feel like part of a cinematic story arc.",
      highlights: [
        "Developed reel-first storytelling frameworks, boosting engagement on hero launches.",
        "Scripted captions, VO lines, and WhatsApp/push stories tailored to each drop.",
        "Maintained a cohesive brand voice across grid posts, stories, and articles.",
      ],
      tags: ["Social", "Storyboarding", "Lifestyle"],
    },
    {
      company: "Snapmint",
      role: "Content Writer",
      period: "Oct 2023 – Jul 2024",
      summary:
        "Owned retention copy for a fintech app, turning push notifications into micro-narratives that nudged conversions.",
      highlights: [
        "Scaled push notification CTR from 0.7% to 2–3% through A/B testing hooks and send windows.",
        "Managed WhatsApp, SMS, Instagram, and LinkedIn calendars to nurture community trust.",
        "Shaped lifecycle messaging pillars focused on affordability, trust, and speed.",
      ],
      tags: ["Fintech", "Lifecycle", "Experimentation"],
    },
    {
      company: "Reshamandi",
      role: "Creative Content Writer",
      period: "Feb 2023 – Oct 2023",
      summary:
        "Fuelled India’s silk supply chain marketplace with SEO-forward catalogs and product storytelling.",
      highlights: [
        "Optimized product descriptions and blogs for long-tail discoverability.",
        "Maintained catalog voice consistency across 100+ SKUs per sprint.",
      ],
      tags: ["SEO", "Catalog", "D2C"],
    },
    {
      company: "GIVA",
      role: "Content Strategist",
      period: "Feb 2022 – Jan 2023",
      summary:
        "Built the always-on social and editorial engine for a fast-scaling jewelry startup.",
      highlights: [
        "Planned and shipped 90+ Instagram posts per month with trend-reactive hooks.",
        "Scripted videos, podcasts, and launch films; partnered with design on storyboards.",
        "Drafted Shopify product descriptions for weekly drops, balancing SEO + sentiment.",
      ],
      tags: ["Campaigns", "Video Scripts", "Jewelry"],
    },
    {
      company: "Synshell",
      role: "Influencer Manager & Strategist",
      period: "Jan 2021 – Oct 2021",
      summary:
        "Launched a boutique influencer program, marrying creator POVs with measurable briefs.",
      highlights: [
        "Set up content pillars and calendars for top creators across beauty & lifestyle.",
        "Provided copy direction plus blog assets to keep partnerships on-brand.",
      ],
      tags: ["Influencer", "Strategy", "Creator Ops"],
    },
  ],
  education: [
    {
      school: "National Institute of Fashion Technology, Mumbai",
      program: "Master of Fashion Management",
      period: "2019 – 2021",
    },
    {
      school: "National Institute of Fashion Technology, Kannur",
      program: "Bachelor of Design – Fashion Design",
      period: "2013 – 2017",
    },
  ],
};

export type ResumeData = typeof resume;
