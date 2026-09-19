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
  FileText,
  Download,
  Terminal,
  Layers,
  Cpu,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { TechEcosystemVisual } from '@/components/home/TechEcosystemVisual';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
import { DomainTickerRibbon } from '@/components/ui/TechMarqueeRibbon';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';

export const OfferingsPage: React.FC = () => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const { openCurriculum } = useCurriculumModal();

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
      tag: 'AWS · Cloud Infrastructure',
    },
    {
      name: 'Data Engineering',
      desc: 'Relational data modeling, advanced SQL queries, data pipelines, schema design, and ETL workflows.',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      tag: 'PostgreSQL · SQL Modeling',
    },
    {
      name: 'DevOps & CI/CD',
      desc: 'Containerization with Docker, Kubernetes cluster orchestration, Jenkins automated build pipelines, and Linux administration.',
      icon: <Wrench className="w-5 h-5 text-brand-blue" />,
      tag: 'Docker · Jenkins · K8s',
    },
    {
      name: 'Business Analytics',
      desc: 'Interactive dashboards in Power BI, data analysis expressions (DAX), multi-table modeling, and KPI tracking.',
      icon: <LineChart className="w-5 h-5 text-brand-blue" />,
      tag: 'Power BI · DAX · Excel',
    },
    {
      name: 'Artificial Intelligence',
      desc: 'Generative AI applications, Retrieval-Augmented Generation (RAG), and autonomous multi-agent analytics workflows.',
      icon: <Bot className="w-5 h-5 text-brand-blue" />,
      tag: 'RAG · Agentic AI · LLMs',
    },
    {
      name: 'Enterprise Technology',
      desc: 'ServiceNow ITSM workflows, incident and change management, system administration, and enterprise service automation.',
      icon: <Building2 className="w-5 h-5 text-brand-blue" />,
      tag: 'ServiceNow · ITSM Automation',
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

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: EDITORIAL + VALUE ENABLEMENT CANVAS */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-18 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                  WHAT WE OFFER
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15] font-heading">
                Learn With Purpose.{' '}
                <span className="text-gradient-tech">Build With Practice.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
                Cloudariss combines structured technical learning, hands-on projects, modern technologies, and career preparation into an integrated, outcome-driven learning ecosystem.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
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
                <button
                  type="button"
                  onClick={() => openCurriculum('crpc')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy hover:text-brand-blue text-sm font-bold shadow-sm hover:shadow transition-all"
                >
                  <FileText className="w-4 h-4 text-brand-blue" />
                  <span>View CRPC PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => openCurriculum('daap')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-white border border-brand-border text-brand-navy hover:text-brand-orange text-sm font-bold shadow-sm hover:shadow transition-all"
                >
                  <FileText className="w-4 h-4 text-brand-orange" />
                  <span>View DAAP PDF</span>
                </button>
              </div>
            </div>

            {/* Right: What Cloudariss Enables Blueprint */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-brand-border shadow-card p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-brand-border/70 pb-3">
                  <span className="text-xs font-mono font-bold text-brand-navy uppercase tracking-wider">
                    The Cloudariss Enablement Framework
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-surface-blue text-brand-blue font-bold">
                    4 Foundations
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="p-3 rounded-xl bg-brand-surface-blue/50 border border-brand-border/80 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-white border border-brand-border text-brand-blue shrink-0 mt-0.5">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-brand-navy">1. Structured Technical Learning</div>
                      <div className="text-[11px] text-slate-500">Rigorous instructor-led modules grounding system architecture.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-surface-orange/40 border border-brand-orange/20 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-white border border-brand-border text-brand-orange shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-brand-navy">2. Hands-on Project Implementation</div>
                      <div className="text-[11px] text-slate-500">Live cloud infrastructure and production database schemas.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-brand-border/80 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-white border border-brand-border text-emerald-600 shrink-0 mt-0.5">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-brand-navy">3. Modern Technology Stacks</div>
                      <div className="text-[11px] text-slate-500">AWS, Docker, K8s, Python, SQL, Power BI & Agentic AI.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-brand-surface-blue/50 border border-brand-border/80 flex items-start gap-3">
                    <div className="p-1.5 rounded-lg bg-white border border-brand-border text-brand-blue shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-extrabold text-brand-navy">4. Weekend Career Readiness</div>
                      <div className="text-[11px] text-slate-500">Saturday ATS resume tuning and Sunday live mock interviews.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-brand-border/60 text-center">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Zero Passive Video Watching · 100% Active Building
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rhythm Ribbon */}
      <DomainTickerRibbon />

      {/* ========================================================================= */}
      {/* 2. FOUR FOUNDATIONS OF THE ECOSYSTEM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <SectionHeading
          eyebrow="Core Foundations"
          title="What Cloudariss Actually Enables"
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                Technical Learning Across Enterprise Domains
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed font-medium">
            Structured instruction across modern technology domains. We replace superficial overviews with rigorous, live instructor-led coursework that grounds fundamental concepts before building into enterprise architectures.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {technicalDomains.map((domain, idx) => (
              <Card
                key={idx}
                variant="white"
                padding="md"
                hoverEffect
                borderAccent="blue"
                className="space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                    {domain.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-surface-blue text-brand-blue">
                    {domain.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-brand-navy">
                  {domain.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {domain.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* 02 — HANDS-ON PROJECTS */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-orange font-mono font-bold text-sm">
                02
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Practical Application
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                  Hands-on Capstone Projects
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-surface-blue text-brand-blue text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CRPC Projects</span>
              </button>
              <button
                type="button"
                onClick={() => openCurriculum('daap')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-orange/10 text-brand-orange text-xs font-bold hover:bg-brand-orange hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>DAAP Projects</span>
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed font-medium">
            Learning through practical projects and direct implementation. Each project results in demonstrable code, comprehensive documentation, and live systems hosted on students' personal GitHub repositories.
          </p>

          <ProjectsVisual initialTab="daap" />
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                Modern Technologies & Engineering Ecosystem
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed font-medium">
            Our curricula focus directly on the technology ecosystem currently powering enterprise infrastructure, modern analytics teams, and automated cloud workflows. Hover over any technology to inspect its role.
          </p>

          <TechEcosystemVisual />
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
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                Career Preparation & Seven Support Pillars
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed font-medium">
            Career strategy is integrated throughout the learning cycle, not tacked on at the end. We prepare learners to communicate their technical reasoning clearly and navigate job applications methodically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {careerSupportPillars.map((pillar, idx) => (
              <Card
                key={idx}
                variant="surface"
                padding="md"
                className="border border-brand-border/80 space-y-2.5 hover:border-brand-blue transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                  <h3 className="text-base font-bold text-brand-navy">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </Card>
            ))}
          </div>

          <p className="text-xs text-slate-400 italic">
            * Note: Cloudariss provides structured interview coaching, portfolio reviews, and career assistance. We focus on cultivating genuine technical capability; we do not make guaranteed-placement claims.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FIVE-STAGE LEARNING EXPERIENCE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The Cloudariss Learning Experience"
          subtitle="A five-stage structured continuum turning foundational knowledge into deployment-grade career readiness."
        />

        <FiveStageVisualJourney />
      </section>

      {/* ========================================================================= */}
      {/* 4. VIRTUAL COMPANY SESSIONS */}
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

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                Virtual Company Sessions & Regional IT Corridor Exposure
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
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

            <div className="lg:col-span-4 bg-brand-surface-blue/50 rounded-2xl p-6 border border-brand-border text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto text-brand-blue border border-brand-border">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-brand-navy font-heading">
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
      {/* 5. SYLLABI QUICK TRIGGER BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-dark-surface p-8 border border-brand-blue/30 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Official Syllabi Downloads</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white font-heading">
              Want the Full Week-by-Week Breakdown?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Inspect the exact schedule, module milestones, lab configurations, and project timelines for both programs inside our interactive curriculum viewer.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => openCurriculum('crpc')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white font-bold text-sm shadow-md transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>CRPC 3-Month Schedule (PDF)</span>
            </button>
            <button
              type="button"
              onClick={() => openCurriculum('daap')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DAAP GenAI Structure (PDF)</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ADMISSIONS CAMPAIGN CARD */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-dark-section border border-brand-orange/40 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-extrabold uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            <span>Admissions Campaign</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            {BRAND_DATA.offer.title}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Enroll in CRPC or DAAP with complete live mentoring, lab workstations, and placement assistance at our special festive tuition.
          </p>

          <div className="flex items-center justify-center gap-4">
            <span className="text-slate-400 text-xl line-through font-semibold">
              {BRAND_DATA.offer.originalPrice}
            </span>
            <span className="text-4xl font-extrabold text-white font-heading">
              {BRAND_DATA.offer.offerPrice}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 bg-brand-dark-surface px-4 py-2 rounded-xl border border-brand-orange/40">
            <code className="text-base font-mono font-extrabold text-brand-orange">
              {BRAND_DATA.offer.couponCode}
            </code>
            <button
              type="button"
              onClick={handleCopyCode}
              className="p-1 text-slate-300 hover:text-white rounded transition-colors"
              title="Copy code"
            >
              {copiedCoupon ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
