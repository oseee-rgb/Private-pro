import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saleha Afrose — Designer, Marketer & Fast-Learning Generalist" },
      { name: "description", content: "Portfolio of Saleha Afrose — a curious, fast-learning designer and marketer who adapts to any team, any tool, any audience. Empathy-led work across design, content, and consulting." },
      { property: "og:title", content: "Saleha Afrose — Portfolio" },
      { property: "og:description", content: "Design · Marketing · Consulting · Content. Adaptable, empathy-led, and ready to plug into any team \u2014 worldwide." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[Inter]">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

const display = "font-[Fraunces]";

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className={`${display} text-lg tracking-tight`}>
          Afrose<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#skills" className="hover:text-foreground transition">Skills</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition">
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <p className="uppercase tracking-[0.25em] text-xs text-primary mb-6">Portfolio · 2026</p>
          <h1 className={`${display} text-5xl md:text-7xl leading-[0.95] tracking-tight`}>
            Turning ideas into <em className="text-primary not-italic font-medium">impact</em> through <em className="italic text-primary">creativity</em>, strategy, and empathy.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I'm <span className="text-foreground font-medium text-nowrap">Saleha Afrose</span> — a curious learner, creative thinker, and people-focused problem solver. Whether creating digital experiences, coordinating projects, or supporting community initiatives, I'm driven by a desire to turn ideas into meaningful impact and create value that matters.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-full bg-foreground text-background text-sm hover:opacity-90 transition">
              View experience →
            </a>
            <a href="mailto:Afrozbithyy02@gmail.com" className="px-5 py-3 rounded-full border border-border text-sm hover:bg-secondary transition">
              Afrozbithyy02@gmail.com
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/40 rounded-[2rem] rotate-3" aria-hidden />
            <img
              src={portrait}
              alt="Saleha Afrose"
              width={896}
              height={1152}
              className="relative rounded-[2rem] w-full object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 bg-background border border-border rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-medium">Project Executive @ Chalkboard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: "1,500+", label: "students counselled on study-abroad & scholarships" },
    { value: "313M", label: "monthly content views generated" },
    { value: "112K", label: "followers grown in one month" },
    { value: "25+", label: "NGO partners coordinated with UNFPA" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p className={`${display} text-4xl md:text-5xl text-primary`}>{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-12 gap-10">
      <div className="md:col-span-4">
        <p className="uppercase tracking-[0.25em] text-xs text-primary">About</p>
        <h2 className={`${display} text-4xl md:text-5xl mt-3 leading-tight`}>
          Cross-sector, by design.
        </h2>
      </div>
      <div className="md:col-span-8 text-lg leading-relaxed text-muted-foreground space-y-5">
        <p>
          My journey spans marketing, project coordination, human resources, community engagement, and emerging UX design. From supporting youth-focused initiatives at UNFPA to managing HR operations, creating digital content, and exploring user-centered design, I've built a diverse skill set grounded in adaptability and continuous learning. I enjoy connecting ideas, people, and strategy to create meaningful outcomes. What I bring today is a strong eye for detail, human-centered thinking, and the curiosity to learn, contribute, and grow across different environments.
        </p>
      </div>
    </section>
  );
}

type Role = {
  year: string;
  title: string;
  org: string;
  meta: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    year: "2026 — Present",
    title: "Project Executive",
    org: "Chalkboard Communications Ltd.",
    meta: "Digital agency & online learning platform",
    bullets: [
      "Coordinate end-to-end delivery of digital campaigns and creative pipelines.",
      "Oversee social media management, visual design, and operational workflows against client KPIs.",
      "Collaborate across design, content, and operations to ship on quality and on time.",
    ],
  },
  {
    year: "2025 — 2026",
    title: "Executive Admin & HR Officer",
    org: "Edumax Consultancy & IELTS Center",
    meta: "International education consultancy · Noakhali",
    bullets: [
      "Counselled 1,500+ students on international admissions, scholarships, and IELTS prep.",
      "Managed full-cycle HR — recruitment, onboarding, compliance, and staff coordination.",
      "Designed digital and offline marketing campaigns driving measurable enrolment growth.",
    ],
  },
  {
    year: "2024 — 2025",
    title: "Social Media Manager (Freelance)",
    org: "Somoy TV Football Journalist",
    meta: "Facebook page · freelance digital role",
    bullets: [
      "Grew the page to 112,000 followers within a single month.",
      "Generated 313M monthly views; single-post peak of 8M views.",
      "Owned the full content lifecycle — creation, scheduling, engagement, analytics.",
    ],
  },
  {
    year: "2023 — 2024",
    title: "District Coordinator — Youth Programs",
    org: "UNFPA Youth Forum",
    meta: "United Nations Population Fund · Noakhali",
    bullets: [
      "Directed district-level programs on SRHR, GBV prevention, and climate justice.",
      "Coordinated 25+ NGO members and volunteers across Noakhali.",
      "Delivered workshops and outreach reaching hundreds of young beneficiaries.",
    ],
  },
  {
    year: "2023",
    title: "Youth Representative — SGBV Advocacy",
    org: "FPAB & IPPF",
    meta: "International Planned Parenthood Federation",
    bullets: [
      "Represented Bangladeshi youth at IPPF's global 16 Days of Activism.",
      "Delivered a public address on youth-led SGBV prevention initiatives.",
      "Produced video content for International Youth Day.",
    ],
  },
  {
    year: "Feb 2025",
    title: "Research Assistant",
    org: "Helios Consultancy",
    meta: "Short-term contract",
    bullets: [
      "Conducted qualitative data collection and field interviews.",
      "Contributed to analytical research report preparation.",
    ],
  },
];

function Experience() {
  return (
    <section id="work" className="bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-primary">Selected Work</p>
            <h2 className={`${display} text-4xl md:text-5xl mt-3`}>Experience</h2>
          </div>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
            Six roles across marketing, HR, UX, and UN-affiliated youth development.
          </p>
        </div>

        <div className="space-y-px">
          {roles.map((r, i) => (
            <article
              key={i}
              className="group grid md:grid-cols-12 gap-6 py-8 border-t border-border first:border-t-0 hover:bg-background/60 transition px-2 -mx-2 rounded-lg"
            >
              <div className="md:col-span-3 text-sm text-muted-foreground">{r.year}</div>
              <div className="md:col-span-4">
                <h3 className={`${display} text-2xl leading-tight`}>{r.title}</h3>
                <p className="text-primary text-sm mt-1">{r.org}</p>
                <p className="text-xs text-muted-foreground mt-1">{r.meta}</p>
              </div>
              <ul className="md:col-span-5 space-y-2 text-muted-foreground">
                {r.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-primary mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const objectives = [
    "Encourage sustainable, eco-friendly daily habits",
    "Make climate science approachable and actionable",
    "Empower users to set and track personal sustainability goals",
    "Foster informed decision-making through gentle nudges",
  ];
  const skills = [
    "Design Thinking",
    "User-Centered Design",
    "Empathy Mapping",
    "Persona Development",
    "Problem Solving",
    "UX Research Fundamentals",
  ];
  const roles = [
    "Problem Definition",
    "User-Centered Ideation",
    "UX Research Fundamentals",
    "Concept Development",
  ];
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="flex items-end justify-between mb-14">
        <div>
          <p className="uppercase tracking-[0.25em] text-xs text-primary">Case Study</p>
          <h2 className={`${display} text-4xl md:text-5xl mt-3`}>Featured project</h2>
        </div>
        <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">
          A concept project exploring how design can drive real-world climate action.
        </p>
      </div>

      <article className="relative overflow-hidden rounded-3xl border border-border bg-card">
        <div className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />

        <div className="relative grid md:grid-cols-12 gap-10 p-8 md:p-12">
          <div className="md:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground">
                UX Concept Project
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                Google UX Design Certificate
              </span>
              <span className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                In progress
              </span>
            </div>

            <h3 className={`${display} text-3xl md:text-5xl leading-tight`}>
              Climate Awareness <em className="text-primary not-italic">Mobile App</em>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              A UX design challenge focused on encouraging <span className="text-foreground">sustainable behavior</span> and increasing <span className="text-foreground">climate awareness</span>. The concept explores how a mobile app can help users learn about environmental issues, track eco-friendly habits, set sustainability goals, and make informed choices in their daily lives.
            </p>

            <div>
              <p className="uppercase tracking-[0.2em] text-[11px] text-primary mb-3">Why this project</p>
              <p className="text-muted-foreground leading-relaxed">
                As someone drawn to <span className="text-foreground">sustainability</span>, <span className="text-foreground">youth engagement</span>, and <span className="text-foreground">social impact</span>, I wanted to explore how digital products can encourage positive environmental action — turning awareness into everyday habit.
              </p>
            </div>

            <div>
              <p className="uppercase tracking-[0.2em] text-[11px] text-primary mb-3">Objectives</p>
              <ul className="space-y-2 text-muted-foreground">
                {objectives.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="mt-2 size-1.5 rounded-full bg-primary shrink-0" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="md:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="uppercase tracking-[0.2em] text-[11px] text-primary mb-3">My role</p>
              <ul className="space-y-2 text-sm">
                {roles.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="uppercase tracking-[0.2em] text-[11px] text-primary mb-3">Skills applied</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-6">
              <p className="uppercase tracking-[0.2em] text-[11px] text-primary mb-2">What's next</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently being expanded into a full UX case study with <span className="text-foreground">wireframes</span>, <span className="text-foreground">user flows</span>, and an interactive <span className="text-foreground">prototype</span>.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

const skillGroups = [
  {
    title: "UX & Design",
    items: ["UX Design", "Design Thinking", "Empathy Mapping", "User Research", "Canva", "Adobe Lightroom", "CapCut", "Visual Communication"],
  },
  {
    title: "Digital Marketing & Content",
    items: ["Social Media Marketing", "Content Strategy", "Digital Storytelling", "Brand Communication", "Community Management", "Audience Growth", "Social Media Analytics"],
  },
  {
    title: "Professional & Administrative",
    items: ["HR Administration", "Project Coordination", "Student Counselling", "Education Advising", "Event Management", "Stakeholder Engagement", "Public Speaking"],
  },
  {
    title: "Languages",
    items: ["Bangla (Native)", "English (Fluent)", "Hindi (Conversational)"],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <p className="uppercase tracking-[0.25em] text-xs text-primary">Toolkit</p>
      <h2 className={`${display} text-4xl md:text-5xl mt-3 mb-14`}>Skills & capabilities</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((g) => (
          <div key={g.title} className="border border-border rounded-2xl p-7 bg-card">
            <h3 className={`${display} text-xl mb-4`}>{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  const items = [
    {
      title: "BBA — Marketing",
      org: "Noakhali Government College",
      year: "2021 — 2026 (expected)",
    },
    {
      title: "Start the UX Design Process: Empathize, Define & Ideate",
      org: "Google · Coursera — part of the Google UX Design Certificate (in progress)",
      year: "2026",
    },
    {
      title: "Diploma in Basic Office Programming",
      org: "Bangladesh Technical Education Board · A+ Grade",
      year: "6-month program",
    },
    {
      title: "UNFPA National Capacity-Building Program",
      org: "UNFPA Bangladesh",
      year: "2023 — 2024",
    },
    {
      title: "HSC — Business Studies",
      org: "Noakhali Government Women's College · Cumilla Board",
      year: "2020",
    },
  ];
  return (
    <section className="bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="uppercase tracking-[0.25em] text-xs text-primary">Credentials</p>
        <h2 className={`${display} text-4xl md:text-5xl mt-3 mb-14`}>Education & certifications</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div key={it.title} className="bg-background border border-border rounded-2xl p-6 flex flex-col">
              <p className="text-xs text-muted-foreground">{it.year}</p>
              <h3 className={`${display} text-xl mt-2 leading-snug`}>{it.title}</h3>
              <p className="text-sm text-primary mt-1">{it.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-8">
          <p className="uppercase tracking-[0.25em] text-xs text-primary">Let's talk</p>
          <h2 className={`${display} text-5xl md:text-7xl mt-4 leading-[0.95]`}>
            Open to <em className="text-primary">UX design, marketing, and consulting</em> opportunities — with agencies, startups, and remote teams worldwide.
          </h2>
        </div>
        <div className="md:col-span-4 space-y-3 text-sm">
          <a href="mailto:Afrozbithyy02@gmail.com" className="block px-5 py-4 rounded-2xl bg-foreground text-background hover:opacity-90 transition">
            <span className="block text-xs opacity-60">Email</span>
            Afrozbithyy02@gmail.com
          </a>
          <div className="px-5 py-4 rounded-2xl border border-border">
            <span className="block text-xs text-muted-foreground">Phone</span>
            +880 1706 293460
          </div>
          <div className="px-5 py-4 rounded-2xl border border-border">
            <span className="block text-xs text-muted-foreground">Based in</span>
            &nbsp;Bangladesh . Available for remote collaboration worldwide
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Saleha Afrose. All rights reserved.</p>
      </div>
    </footer>
  );
}
