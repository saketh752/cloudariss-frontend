import React, { useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
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
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { TechEcosystemVisual } from '@/components/home/TechEcosystemVisual';
import { DomainTickerRibbon } from '@/components/ui/TechMarqueeRibbon';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { OfferingsHeroCanvas } from '@/components/curriculum/OfferingsHeroCanvas';

export const OfferingsPage: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();
  const [activeDomainFilter, setActiveDomainFilter] = useState<'all' | 'cloud' | 'data' | 'ai'>('all');

  // 01: Technical Learning Domains
  const technicalDomains = [
    {
      name: 'Cloud Computing',
      category: 'cloud' as const,
      desc: 'Architecture, distributed computing, virtual networks (VPC), EC2, IAM policies, and high-availability design.',
      icon: <Cloud className="w-5 h-5 text-brand-blue" />,
      tag: 'AWS · Cloud Infrastructure',
    },
    {
      name: 'Data Engineering',
      category: 'data' as const,
      desc: 'Relational data modeling, advanced SQL queries, data pipelines, schema design, and ETL workflows.',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      tag: 'PostgreSQL · SQL Modeling',
    },
    {
      name: 'DevOps & CI/CD',
      category: 'cloud' as const,
      desc: 'Containerization with Docker, Kubernetes cluster orchestration, Jenkins automated build pipelines, and Linux administration.',
      icon: <Wrench className="w-5 h-5 text-brand-blue" />,
      tag: 'Docker · Jenkins · K8s',
    },
    {
      name: 'Business Analytics',
      category: 'data' as const,
      desc: 'Interactive dashboards in Power BI, data analysis expressions (DAX), multi-table modeling, and KPI tracking.',
      icon: <LineChart className="w-5 h-5 text-brand-blue" />,
      tag: 'Power BI · DAX · Excel',
    },
    {
      name: 'Artificial Intelligence',
      category: 'ai' as const,
      desc: 'Generative AI applications, Retrieval-Augmented Generation (RAG), and autonomous multi-agent analytics workflows.',
      icon: <Bot className="w-5 h-5 text-brand-blue" />,
      tag: 'RAG · Agentic AI · LLMs',
    },
    {
      name: 'Enterprise Technology',
      category: 'cloud' as const,
      desc: 'ServiceNow ITSM workflows, incident and change management, system administration, and enterprise service automation.',
      icon: <Building2 className="w-5 h-5 text-brand-blue" />,
      tag: 'ServiceNow · ITSM Automation',
    },
  ];

  const filteredDomains = technicalDomains.filter(
    (d) => activeDomainFilter === 'all' || d.category === activeDomainFilter
  );

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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#071B63]/80 border border-[#19BCE8]/40 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-[#19BCE8] animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-[#19BCE8] uppercase font-heading">
                  WHAT WE OFFER
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
                Learn With Purpose.{' '}
                <span className="text-gradient-tech">Build With Practice.</span>
              </h1>

              <p className="text-lg sm:text-xl text-[#DCE5F2] font-normal max-w-2xl leading-relaxed">
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
                  variant="dark"
                  size="lg"
                  className="bg-[#05143A]/90 hover:bg-[#082260] text-white font-bold border border-[#19BCE8]/40 hover:border-[#19BCE8] shadow-md"
                >
                  Talk to Us
                </Button>
                <button
                  type="button"
                  onClick={() => openCurriculum('crpc')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#071B63]/90 border border-[#19BCE8]/40 text-[#19BCE8] hover:text-white text-sm font-bold shadow-sm hover:shadow transition-all"
                >
                  <FileText className="w-4 h-4 text-[#19BCE8]" />
                  <span>View CRPC PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => openCurriculum('daap')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#071B63]/90 border border-brand-orange/40 text-brand-orange hover:text-white text-sm font-bold shadow-sm hover:shadow transition-all"
                >
                  <FileText className="w-4 h-4 text-brand-orange" />
                  <span>View DAAP PDF</span>
                </button>
              </div>
            </div>

            {/* Right: Interactive Enablement Flight Deck */}
            <div className="lg:col-span-5">
              <OfferingsHeroCanvas onOpenCurriculum={openCurriculum} />
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
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="w-10 h-10 rounded-lg bg-[#071B63]/80 border border-[#19BCE8]/40 flex items-center justify-center text-[#19BCE8] font-mono font-bold text-sm">
              01
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#19BCE8]">
                Structured Knowledge
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Technical Learning Across Enterprise Domains
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
            <p className="text-sm sm:text-base text-[#DCE5F2] max-w-2xl leading-relaxed font-normal">
              Structured instruction across modern technology domains. We replace superficial overviews with rigorous, live instructor-led coursework that grounds fundamental concepts before building into enterprise architectures.
            </p>

            {/* Interactive Domain Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveDomainFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeDomainFilter === 'all'
                    ? 'bg-[#0878E8] text-white shadow-sm'
                    : 'bg-[#071B63]/80 text-[#DCE5F2] hover:text-white border border-white/20'
                }`}
              >
                All (6)
              </button>
              <button
                type="button"
                onClick={() => setActiveDomainFilter('cloud')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeDomainFilter === 'cloud'
                    ? 'bg-[#0878E8] text-white shadow-sm'
                    : 'bg-[#071B63]/80 text-[#DCE5F2] hover:text-white border border-white/20'
                }`}
              >
                Cloud &amp; DevOps
              </button>
              <button
                type="button"
                onClick={() => setActiveDomainFilter('data')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeDomainFilter === 'data'
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'bg-[#071B63]/80 text-[#DCE5F2] hover:text-white border border-white/20'
                }`}
              >
                Data &amp; BI
              </button>
              <button
                type="button"
                onClick={() => setActiveDomainFilter('ai')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeDomainFilter === 'ai'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-[#071B63]/80 text-[#DCE5F2] hover:text-white border border-white/20'
                }`}
              >
                AI
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredDomains.map((domain, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-gradient-to-b from-[#081F54]/90 via-[#061540]/95 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/25 p-5 sm:p-6 shadow-xl hover:shadow-[0_16px_36px_rgba(8,120,232,0.25)] hover:border-[#19BCE8]/60 transition-all duration-300 space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0878E8]/20 flex items-center justify-center border border-[#19BCE8]/40 text-[#19BCE8]">
                      {domain.icon}
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-[#0878E8]/15 border border-[#19BCE8]/30 text-cyan-300">
                      {domain.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {domain.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed font-normal">
                    {domain.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 02 — HANDS-ON PROJECTS */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center text-brand-orange font-mono font-bold text-sm">
                02
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Practical Application
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                  Hands-on Capstone Projects
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#071B63]/90 border border-[#19BCE8]/40 text-[#19BCE8] text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>CRPC Projects</span>
              </button>
              <button
                type="button"
                onClick={() => openCurriculum('daap')}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#071B63]/90 border border-brand-orange/40 text-brand-orange text-xs font-bold hover:bg-brand-orange hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>DAAP Projects</span>
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#DCE5F2] max-w-3xl leading-relaxed font-normal">
            Learning through practical projects and direct implementation. Each project results in demonstrable code, comprehensive documentation, and live systems hosted on students' personal GitHub repositories.
          </p>

          <ProjectsVisual initialTab="daap" />
        </div>

        {/* 03 — MODERN TECHNOLOGIES */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="w-10 h-10 rounded-lg bg-[#071B63]/80 border border-[#19BCE8]/40 flex items-center justify-center text-[#19BCE8] font-mono font-bold text-sm">
              03
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#19BCE8]">
                Industry Alignment
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Modern Technologies &amp; Engineering Ecosystem
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#DCE5F2] max-w-3xl leading-relaxed font-normal">
            Our curricula focus directly on the technology ecosystem currently powering enterprise infrastructure, modern analytics teams, and automated cloud workflows. Hover over any technology to inspect its role.
          </p>

          <TechEcosystemVisual hideHeader={true} />
        </div>

        {/* 04 — CAREER PREPARATION */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-3">
            <div className="w-10 h-10 rounded-lg bg-[#071B63]/80 border border-[#19BCE8]/40 flex items-center justify-center text-[#19BCE8] font-mono font-bold text-sm">
              04
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#19BCE8]">
                Professional Readiness
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Career Preparation &amp; Seven Support Pillars
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#DCE5F2] max-w-3xl leading-relaxed font-normal">
            Career strategy is integrated throughout the learning cycle, not tacked on at the end. We prepare learners to communicate their technical reasoning clearly and navigate job applications methodically.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {careerSupportPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-gradient-to-b from-[#081F54]/90 via-[#061540]/95 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/25 p-5 sm:p-6 shadow-xl hover:shadow-[0_16px_36px_rgba(8,120,232,0.25)] hover:border-[#19BCE8]/60 transition-all duration-300 space-y-2.5 group"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#19BCE8] shrink-0" />
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#AFC0D8] italic">
            * Note: Cloudariss provides structured interview coaching, portfolio reviews, and career assistance. We focus on cultivating genuine technical capability; we do not make guaranteed-placement claims.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. VIRTUAL COMPANY SESSIONS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/30 shadow-2xl p-6 sm:p-10 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19BCE8]/10 border border-[#19BCE8]/30">
                <Building2 className="w-4 h-4 text-[#19BCE8]" />
                <span className="text-xs font-bold text-[#19BCE8] uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Virtual Company Sessions &amp; Regional IT Corridor Exposure
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                As part of the Cloudariss learning experience, students participate in virtual company sessions. These interactive sessions provide direct exposure to how professional engineering and analytics teams function in real enterprise environments.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#040C24]/80 border border-[#19BCE8]/20 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Users className="w-4 h-4 text-[#19BCE8]" />
                    <span>Practitioner Walkthroughs</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Interactive technical discussions with practitioners from technology firms operating out of Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#040C24]/80 border border-[#FF6B35]/25 space-y-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <Code2 className="w-4 h-4 text-[#FF6B35]" />
                    <span>Internship Selection Pathway</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    The top 5 performing students in each cohort earn eligibility for formal internship interview rounds with participating regional technology teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#040C24]/90 rounded-2xl p-6 border border-[#19BCE8]/30 text-center space-y-4 shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0878E8]/20 to-[#19BCE8]/30 shadow-inner flex items-center justify-center mx-auto text-[#19BCE8] border border-[#19BCE8]/40">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white font-heading">
                Practical Exposure from Day One
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
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
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SYLLABI QUICK TRIGGER BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-dark-surface p-8 border border-brand-blue/30 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#19BCE8] uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Official Syllabi Downloads</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white font-heading">
              Want the Full Week-by-Week Breakdown?
            </h3>
            <p className="text-sm text-[#DCE5F2] max-w-xl">
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
    </div>
  );
};
