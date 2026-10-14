import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import Link from "next/link";

const services = [
  {
    icon: "☁️",
    title: "Cloud Architecture",
    description:
      "End-to-end cloud strategy and implementation. We design scalable, secure, and cost-effective environments on AWS, Azure, and GCP using modern best practices.",
  },
  {
    icon: "🚀",
    title: "CI/CD Automation",
    description:
      "Eliminate manual deployments. We build robust pipelines using GitHub Actions, GitLab CI, and Jenkins to ensure your code moves from commit to production safely and fast.",
  },
  {
    icon: "☸️",
    title: "Containerization & Orchestration",
    description:
      "Scaling made simple. We implement Docker and Kubernetes to ensure your applications are portable, resilient, and capable of handling any traffic spike.",
  },
  {
    icon: "🛡️",
    title: "DevSecOps & Security",
    description:
      "Security isn't an afterthought. We integrate automated vulnerability scanning, identity management, and compliance checks directly into your development lifecycle.",
  },
  {
    icon: "📈",
    title: "SRE & Observability",
    description:
      "Stop guessing, start knowing. We implement full-stack monitoring with Prometheus, Grafana, and ELK stack to detect issues before your users do.",
  },
  {
    icon: "⚙️",
    title: "Infrastructure as Code",
    description:
      "Treat your infra like software. We use Terraform and Ansible to make your environment reproducible, version-controlled, and easy to recover.",
  },
];

const projects = [
  {
    name: "Chylux Marketplace Engine",
    tag: "Infrastructure Scale",
    description:
      "Architected a high-availability backbone for a multi-vendor marketplace. Implemented Redis caching and automated scaling to handle cross-border traffic surges.",
    liveUrl: "https://chylux.com",
    tags: ["AWS", "Kubernetes", "Redis", "Terraform"],
    color: "from-blue-600 to-cyan-500",
  },
  {
    name: "Uwadiale Logistics Core",
    tag: "Operational Automation",
    description:
      "Transformed manual logistics tracking into a fully automated pipeline. Integrated real-time event streaming and automated worker dispatch systems.",
    liveUrl: "http://logisticore.test",
    tags: ["Next.js", "Docker", "GitHub Actions", "MySQL"],
    color: "from-slate-700 to-slate-900",
  },
  {
    name: "Enterprise CMS Mesh",
    tag: "Cloud Migration",
    description:
      "Migrated a legacy content system to a headless, distributed architecture with edge caching, reducing global latency by 60%.",
    liveUrl: "#",
    tags: ["TypeScript", "Firebase", "Cloudflare", "Edge Runtime"],
    color: "from-indigo-600 to-blue-700",
  },
];

const stack = [
  "Terraform",
  "Kubernetes",
  "Docker",
  "AWS",
  "Azure",
  "GCP",
  "GitHub Actions",
  "Jenkins",
  "Prometheus",
  "Grafana",
  "Ansible",
  "Next.js",
  "TypeScript",
  "Python",
  "Go",
  "Linux",
];

const caseStudies = [
  {
    title: "Chylux Marketplace Scale",
    problem: "A West African marketplace struggled with fragmented deployments and frequent downtime during peak sales events, leading to lost revenue.",
    solution: "Implemented a full Kubernetes-based orchestration layer with automated horizontal pod autoscaling and a multi-region CDN strategy to ensure 99.9% availability.",
    result: "Zero downtime during peak sales and a 40% reduction in infrastructure costs.",
    tags: ["Scaling", "K8s", "Cloud-Native"],
  },
  {
    title: "Uwadiale Logistics Automation",
    problem: "Manual parcel tracking and gig worker coordination were causing significant operational delays and data inaccuracies.",
    solution: "Built a real-time event-driven architecture using a message broker to sync parcel status across web and mobile interfaces instantly.",
    result: "Reduced delivery coordination time by 50% and eliminated manual data entry errors.",
    tags: ["Automation", "Event-Driven", "Logistics"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <ServicesSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" duration={1}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm font-medium text-indigo-500">DevOps & Infrastructure Studio</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.8} delay={0.1}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            We architect,
            <br />
            <span className="gradient-text">automate, and scale</span>
            <br />
            infrastructure
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.8} delay={0.2}>
          <p className="text-xl md:text-2xl text-[var(--muted-foreground)] max-w-3xl mx-auto mb-10 text-balance">
            Enterprise-grade DevOps solutions. We ensure your digital backbone is bulletproof,
            automated, and ready to scale from ten to ten million users.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" duration={0.8} delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-200 glow"
            >
              View Our Work
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--foreground)] bg-[var(--secondary)] rounded-xl hover:bg-[var(--muted)] transition-all duration-200 border border-[var(--border)]"
            >
              Get in Touch
            </a>
          </div>
        </ScrollReveal>

        {/* Scroll indicator */}
        <ScrollReveal direction="up" duration={0.8} delay={0.5}>
          <div className="mt-20 flex flex-col items-center gap-2 text-[var(--muted-foreground)]">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What we <span className="gradient-text">do</span>
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-16 max-w-2xl text-balance">
            From building new websites from scratch to fixing broken ones and modernizing outdated
            platforms — we handle it all.
          </p>
        </ScrollReveal>

        <StaggerContainer>
          {services.map((service, i) => (
            <StaggerItem key={i} delay={i * 0.08}>
              <div className="group relative p-8 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-[var(--muted-foreground)]">{service.description}</p>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  return (
    <section id="work" className="py-32 bg-[var(--secondary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Case <span className="gradient-text">studies</span>
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-16 max-w-2xl text-balance">
            Real projects, real results. Here&apos;s how we&apos;ve helped businesses establish and
            improve their online presence.
          </p>
        </ScrollReveal>

        <div className="space-y-24">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-sm font-medium mb-4">
                    {study.tags.join(" · ")}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{study.title}</h3>
                  <div className="space-y-4 text-[var(--muted-foreground)]">
                    <div>
                      <span className="font-semibold text-[var(--foreground)]">The problem:</span>{" "}
                      {study.problem}
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--foreground)]">The solution:</span>{" "}
                      {study.solution}
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--foreground)]">The result:</span>{" "}
                      {study.result}
                    </div>
                  </div>
                </div>
                <div
                  className={`aspect-video rounded-2xl overflow-hidden bg-gradient-to-br ${
                    i === 0
                      ? "from-indigo-500/20 to-purple-600/20"
                      : "from-emerald-500/20 to-teal-600/20"
                  } border border-[var(--border)] relative group`}
                >
                  <img
                    src={i === 0 ? "/chylux_home.png" : "/uwadiale_home.png"}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">work</span>
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-16 max-w-2xl text-balance">
            Projects we&apos;ve built and shipped. Each one solves a real business problem.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div
                className={`group relative h-full p-6 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="mb-4">
                  <span className="text-sm font-medium text-indigo-500">{project.tag}</span>
                  <h3 className="text-xl font-bold mt-1">{project.name}</h3>
                </div>
                <p className="text-[var(--muted-foreground)] mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-[var(--secondary)] text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-indigo-500 hover:text-indigo-600 transition-colors"
                >
                  View Live Site
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section id="stack" className="py-32 bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Tech <span className="gradient-text">stack</span>
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-16 text-center max-w-2xl mx-auto text-balance">
            Modern tools and frameworks we use to build fast, scalable, and maintainable web
            applications.
          </p>
        </ScrollReveal>

        <StaggerContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {stack.map((tech, i) => (
              <StaggerItem key={tech} delay={i * 0.05}>
                <div className="px-6 py-3 rounded-full bg-[var(--card)] border border-[var(--border)] text-base font-medium hover:border-indigo-500/30 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200 cursor-default">
                  {tech}
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 via-purple-600/5 to-pink-600/5" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to build something{" "}
            <span className="gradient-text">great</span>?
          </h2>
          <p className="text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto text-balance">
            Whether you need a new website, a fix for an existing one, or a modernization of an
            outdated platform — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:devsopsolutions@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-200 glow"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Send us an email
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[var(--foreground)] bg-[var(--card)] rounded-xl hover:bg-[var(--secondary)] transition-all duration-200 border border-[var(--border)]"
            >
              See more work
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}