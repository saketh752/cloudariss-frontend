import React, { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Tag,
  Check,
  Copy,
  Building2,
  Users,
  Code2,
  Database,
  Cloud,
  LineChart,
  Bot,
  Wrench,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BRAND_DATA } from '@/data/brandData';

export const OfferingsPage: React.FC = () => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(BRAND_DATA.offer.couponCode);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2200);
  };

  // 01: Technical Learning Domains
  const technicalDomains = [
    {
      name: 'Cloud Computing',
      desc: 'Architecture, distributed computing, virtual networks (VPC), EC2, IAM policies, and high-availability design.',
      icon: <Cloud className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Data Engineering',
      desc: 'Relational data modeling, advanced SQL queries, data pipelines, schema design, and ETL workflows.',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'DevOps & CI/CD',
      desc: 'Containerization with Docker, Kubernetes cluster orchestration, Jenkins automated build pipelines, and Linux administration.',
      icon: <Wrench className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Business Analytics',
      desc: 'Interactive dashboards in Power BI, data analysis expressions (DAX), multi-table modeling, and KPI tracking.',
      icon: <LineChart className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Artificial Intelligence',
      desc: 'Generative AI applications, Retrieval-Augmented Generation (RAG), and autonomous multi-agent analytics workflows.',
      icon: <Bot className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Enterprise Technology',
      desc: 'ServiceNow ITSM workflows, incident and change management, system administration, and enterprise service automation.',
      icon: <Building2 className="w-5 h-5 text-brand-blue" />,
    },
  ];

  // 02: Documented Hands-on Projects
  const documentedProjects = [
    {
      title: 'AWS Three-Tier Application Deployment',
      domain: 'Cloud Infrastructure',
      tools: ['AWS EC2', 'RDS MySQL', 'ALB', 'VPC'],
      desc: 'Production deployment with public web tier, private application layer, and secure managed database behind an Application Load Balancer.',
    },
    {
      title: 'Automated CI/CD DevOps Pipeline',
      domain: 'DevOps Automation',
      tools: ['Docker', 'Jenkins', 'GitHub Webhooks', 'Linux'],
      desc: 'End-to-end continuous integration and deployment pipeline that builds, tests, and auto-deploys containerized code on EC2 hosts.',
    },
    {
      title: 'Relational Schema & SQL Business Analysis',
      domain: 'Data Analytics',
      tools: ['PostgreSQL', 'CTEs', 'Window Functions'],
      desc: 'Comprehensive multi-table database querying, cohort retention modeling, revenue aggregations, and query optimization.',
    },
    {
      title: 'Enterprise Power BI Executive Dashboard',
      domain: 'Business Intelligence',
      tools: ['Power BI', 'DAX', 'Power Query'],
      desc: 'Production-ready operational reporting dashboard tracking cross-functional KPIs, row-level security, and trend forecasts.',
    },
    {
      title: 'Agentic AI Autonomous Analytics System',
      domain: 'Generative & Agentic AI',
      tools: ['LangChain/CrewAI', 'Vector Embeddings', 'RAG'],
      desc: 'Autonomous multi-agent analytical pipeline that plans queries, retrieves data, validates hypotheses, and synthesizes executive insights.',
    },
  ];

  // 03: Modern Technology Ecosystem
  const modernTechCategories = [
    {
      category: 'Cloud & Infrastructure',
      items: [
        { name: 'AWS Cloud', detail: 'Infrastructure & Managed Services' },
        { name: 'Docker', detail: 'Containerization & Image Build' },
        { name: 'Kubernetes', detail: 'Orchestration & Cluster Scaling' },
      ],
    },
    {
      category: 'Programming & Databases',
      items: [
        { name: 'Python', detail: 'Data Analysis, Scripting & Automation' },
        { name: 'SQL', detail: 'Relational Querying & Schema Design' },
        { name: 'PostgreSQL / MySQL', detail: 'Database Administration' },
      ],
    },
    {
      category: 'Enterprise & Analytics',
      items: [
        { name: 'Power BI', detail: 'DAX Modeling & Executive Reports' },
        { name: 'ServiceNow', detail: 'ITSM Workflows & Administration' },
        { name: 'Linux / Bash', detail: 'Shell Automation & Server Management' },
      ],
    },
    {
      category: 'Generative & Agentic AI',
      items: [
        { name: 'Generative AI & RAG', detail: 'Context-Augmented Intelligence' },
        { name: 'Agentic AI', detail: 'Autonomous Multi-Tool Workflows' },
        { name: 'LangChain / CrewAI', detail: 'Orchestration Frameworks' },
      ],
    },
  ];

  // 04: Documented Career Preparation Areas
  const careerSupportPillars = [
    {
      title: 'Resume Optimization',
      desc: 'ATS-tailored structuring, quantifiable impact metrics, GitHub project links, and direct keyword alignment with modern job descriptions.',
    },
    {
      title: 'LinkedIn Profile Building',
      desc: 'Technical headline positioning, project showcases, social proofing, SSI score optimization, and proactive recruiter outreach.',
    },
    {
      title: 'Job Search Strategy',
      desc: 'Mastery of Boolean search filters, multi-channel job discovery, active application tracking, and customized outreach templates.',
    },
    {
      title: 'Mock Interviews',
      desc: 'Live technical Q&A drills, architecture whiteboard walkthroughs, coding rounds, and behavioral HR interview simulations.',
    },
    {
      title: 'Career Guidance',
      desc: 'One-on-one direction on role selection, salary benchmarking, offer evaluation, and structured 30-60-90 day job hunt execution.',
    },
    {
      title: 'Placement Assistance',
      desc: 'Curated job opportunity alerts, referral network orientation, and step-by-step interview feedback loops.',
    },
    {
      title: 'Industry & Company Sessions',
      desc: 'Virtual company sessions with tech practitioners from regional IT corridors like Rushikonda IT Park / VSEZ for direct engineering exposure.',
    },
  ];

  // Learning Experience Stages
  const learningStages = [
    {
      num: '01',
      stage: 'LEARN',
      headline: 'Structured Knowledge',
      desc: 'Live instructor-led foundational classes breaking down complex cloud, data, and system architectures into clear conceptual models.',
      color: 'blue',
    },
    {
      num: '02',
      stage: 'PRACTICE',
      headline: 'Hands-on Labs',
      desc: 'Daily practical sandbox environments where learners write code, debug errors, configure servers, and execute SQL queries.',
      color: 'blue',
    },
    {
      num: '03',
      stage: 'BUILD',
      headline: 'Production Artifacts',
      desc: 'Developing documented, portfolio-grade capstones and multi-tier architectures hosted on personal GitHub repositories.',
      color: 'cyan',
    },
    {
      num: '04',
      stage: 'PREPARE',
      headline: 'Career Readiness',
      desc: 'Structured Saturday career workshops and Sunday mock interview circuits focused on communication and technical problem solving.',
      color: 'orange',
    },
    {
      num: '05',
      stage: 'GET HIRED',
      headline: 'Career Opportunities',
      desc: 'Equipped with verifiable projects, optimized profiles, and interview confidence to pursue competitive technology opportunities.',
      color: 'orange',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-32 pb-20">
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                WHAT WE OFFER
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Learn With Purpose.{' '}
              <span className="text-gradient-tech">Build With Practice.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Cloudariss combines structured technical learning, hands-on projects, modern technologies, and career preparation into a practical learning experience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                to="/courses"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Programs
              </Button>
              <Button
                to="/contact"
                variant="outline"
                size="lg"
              >
                Talk to Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4 MAJOR OFFERING AREAS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Core Pillars"
          title="Four Foundations of the Cloudariss Ecosystem"
          subtitle="Everything we deliver is designed around practical capability, engineering depth, and structured career readiness."
        />

        {/* 01 — TECHNICAL LEARNING */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-brand-border/60 pb-3">
            <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue font-mono font-bold text-sm">
              01
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Structured Knowledge
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Technical Learning
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Structured instruction across modern technology domains. We replace shallow overviews with rigorous, live instructor-led coursework that grounds fundamental concepts before building into enterprise architectures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {technicalDomains.map((domain, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="md"
                hoverEffect
                borderAccent="blue"
                className="space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                  {domain.icon}
                </div>
                <h3 className="text-base font-bold text-brand-navy">
                  {domain.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {domain.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* 02 — HANDS-ON PROJECTS */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-brand-border/60 pb-3">
            <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-orange font-mono font-bold text-sm">
              02
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                Practical Application
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Hands-on Projects
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Learning through practical projects and direct implementation. Projects allow learners to apply concepts to realistic business constraints rather than relying only on theoretical lectures. Each project results in demonstrable code, documentation, and live systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {documentedProjects.map((proj, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="md"
                hoverEffect
                borderAccent="orange"
                className="flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-brand-orange">
                      PROJECT 0{idx + 1}
                    </span>
                    <Badge variant="subtle" size="sm">
                      {proj.domain}
                    </Badge>
                  </div>

                  <h3 className="text-base font-bold text-brand-navy">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-border/60">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Implemented With
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 03 — MODERN TECHNOLOGIES */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-brand-border/60 pb-3">
            <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-[#0a6680] font-mono font-bold text-sm">
              03
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                Industry Alignment
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Modern Technologies
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Our curricula focus directly on the technology ecosystem currently powering enterprise infrastructure, modern analytics teams, and automated cloud workflows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {modernTechCategories.map((group, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="lg"
                className="border border-brand-border shadow-card space-y-4"
              >
                <div className="flex items-center justify-between border-b border-brand-border/60 pb-2.5">
                  <h3 className="text-base font-bold text-brand-navy">
                    {group.category}
                  </h3>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {group.items.length} Tech Stack Areas
                  </span>
                </div>

                <div className="space-y-2.5">
                  {group.items.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-3 rounded-lg bg-brand-surface-blue/50 border border-brand-border/80 flex items-center justify-between gap-3"
                    >
                      <span className="text-sm font-extrabold text-brand-navy">
                        {tech.name}
                      </span>
                      <span className="text-xs text-slate-500 text-right">
                        {tech.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 04 — CAREER PREPARATION */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-brand-border/60 pb-3">
            <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue font-mono font-bold text-sm">
              04
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Professional Readiness
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Career Preparation
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Career strategy is integrated throughout the learning cycle, not tacked on at the end. We prepare learners to communicate their technical reasoning clearly and navigate job applications methodically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {careerSupportPillars.map((pillar, idx) => (
              <Card
                key={idx}
                variant="surface"
                padding="md"
                className="border border-brand-border/80 space-y-2.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <h3 className="text-base font-bold text-brand-navy">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </Card>
            ))}
          </div>

          <p className="text-xs text-slate-400 italic">
            * Note: Cloudariss provides structured interview coaching, portfolio reviews, and career assistance. We focus on cultivating genuine technical capability; we do not make guaranteed-placement or guaranteed-job claims.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LEARNING EXPERIENCE JOURNEY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The Cloudariss Learning Experience"
          subtitle="A five-stage structured continuum turning foundational knowledge into deployment-grade career readiness."
        />

        <div className="relative">
          {/* Connecting line on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange -translate-y-6 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {learningStages.map((st) => (
              <div
                key={st.num}
                className="p-5 rounded-xl bg-white border border-brand-border shadow-card hover:border-brand-blue transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-2xl font-extrabold font-mono ${
                      st.color === 'orange'
                        ? 'text-brand-orange'
                        : st.color === 'cyan'
                        ? 'text-[#0a6680]'
                        : 'text-brand-blue'
                    }`}
                  >
                    {st.num}
                  </span>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      st.color === 'orange'
                        ? 'bg-brand-orange'
                        : st.color === 'cyan'
                        ? 'bg-brand-cyan'
                        : 'bg-brand-blue'
                    }`}
                  />
                </div>

                <h3 className="text-base font-bold text-brand-navy uppercase tracking-wider">
                  {st.stage}
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {st.headline}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INDUSTRY / COMPANY SESSIONS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          variant="white"
          padding="lg"
          borderAccent="blue"
          className="border border-brand-border shadow-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30">
                <Building2 className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Virtual Company Sessions
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                As part of the Cloudariss learning experience, students participate in virtual company sessions. These interactive sessions provide direct exposure to how professional engineering and analytics teams function in real enterprise environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-lg bg-slate-50 border border-brand-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Users className="w-4 h-4 text-brand-blue" />
                    <span>Practitioner Walkthroughs</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Interactive technical discussions with practitioners from technology firms operating out of Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-50 border border-brand-border/70 space-y-1.5">
                  <div className="flex items-center gap-2 text-brand-navy font-bold text-sm">
                    <Code2 className="w-4 h-4 text-brand-orange" />
                    <span>Internship Selection Pathway</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The top 5 performing students in each cohort earn eligibility for formal internship interview rounds with participating regional technology teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-surface-blue/70 rounded-xl p-6 border border-brand-border space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mx-auto text-brand-blue border border-brand-border">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-brand-navy">
                Practical Exposure from Day One
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect classroom problem solving with true software development and data operations workflows.
              </p>
              <Button
                to="/courses"
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Program Details
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* ========================================================================= */}
      {/* OFFER CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border-2 border-brand-orange/50 p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase border border-brand-orange/40">
              <Tag className="w-3.5 h-3.5" />
              <span>Admissions Campaign</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {BRAND_DATA.offer.title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Join the upcoming 12-week cohort in Cloud & Data (CRPC) or Data Analytics & AI (DAAP) with complete live mentoring, lab reviews, and full career preparation at our special festive tuition.
            </p>

            {/* Pricing Callout */}
            <div className="flex items-center justify-center gap-4 py-2">
              <span className="text-2xl sm:text-3xl text-slate-400 line-through font-semibold">
                {BRAND_DATA.offer.originalPrice}
              </span>
              <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                {BRAND_DATA.offer.offerPrice}
              </span>
              <span className="text-xs text-brand-cyan font-bold bg-brand-cyan/20 px-2.5 py-1 rounded-md border border-brand-cyan/30">
                All-Inclusive Cohort Fee
              </span>
            </div>

            {/* Coupon Box */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-brand-dark-surface/90 border border-brand-orange/40 rounded-xl p-3 sm:px-6 sm:py-3 shadow-lg">
              <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
                Coupon Code:
              </span>
              <div className="flex items-center gap-2 bg-brand-dark-section px-3.5 py-1.5 rounded-lg border border-brand-orange/30">
                <code className="text-lg font-mono font-extrabold text-brand-orange tracking-wider">
                  {BRAND_DATA.offer.couponCode}
                </code>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-white/10 transition-colors"
                  title="Copy coupon code"
                  aria-label="Copy coupon code"
                >
                  {copiedCoupon ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <Button
                to="/courses"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
