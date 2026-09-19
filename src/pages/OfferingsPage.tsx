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
  Sparkles,
  Download,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { TechEcosystemVisual } from '@/components/home/TechEcosystemVisual';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
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
    <div className="space-y-20 lg:space-y-32 pb-20">
      {/* ========================================================================= */}
      {/* HERO SECTION WITH AUTHENTIC BROCHURE PHOTO */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

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

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
                Learn With Purpose.{' '}
                <span className="text-gradient-tech">Build With Practice.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
                Cloudariss combines structured technical learning, hands-on projects, modern technologies, and career preparation into a practical, outcome-driven learning ecosystem.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
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

              {/* Trust Micro-Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border/60">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-navy font-mono">12 Wks</div>
                  <div className="text-xs text-slate-500 font-medium">Cohort Immersion</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-blue font-mono">10+</div>
                  <div className="text-xs text-slate-500 font-medium">Documented Capstones</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-brand-orange font-mono">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Live Instructor Labs</div>
                </div>
              </div>
            </div>

            {/* Right Visual Brochure Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-brand-blue/20 shadow-2xl bg-white group">
                <img
                  src="/brand/brochures/college-workshops.jpg"
                  alt="Cloudariss Practical Learning Workshops"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-section/90 via-brand-dark-section/30 to-transparent" />
                
                {/* Visual Badges Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-extrabold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Real Classroom Energy</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow">
                    Practical Technology Workshops & Direct Lab Execution
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-2">
                    Bridging foundational computer science concepts with production-ready cloud architectures and data operations.
                  </p>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-3.5 rounded-xl bg-white border border-brand-border shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue border border-brand-border/60">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-brand-navy">Weekend Career Drills</div>
                  <div className="text-[11px] text-slate-500">Saturday Prep · Sunday Mocks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4 MAJOR OFFERING AREAS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <SectionHeading
          eyebrow="Core Pillars"
          title="Four Foundations of the Cloudariss Ecosystem"
          subtitle="Everything we deliver is designed around practical capability, engineering depth, and structured career readiness."
        />

        {/* ------------------------------------------------------------------- */}
        {/* 01 — TECHNICAL LEARNING (Pictorial Split + Cards) */}
        {/* ------------------------------------------------------------------- */}
        <div className="space-y-8">
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-brand-border shadow-lg">
              <img
                src="/brand/brochures/certifications-training.jpg"
                alt="Cloudariss Certification Training & Structured Pedagogy"
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
                  Verified Syllabi Standards
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Structured Pedagogy with Certified Competencies
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Replaces superficial overviews with live instructor-led coursework that grounds fundamental concepts before building into enterprise systems.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {technicalDomains.map((domain, idx) => (
                <Card
                  key={idx}
                  variant="white"
                  padding="md"
                  hoverEffect
                  borderAccent="blue"
                  className="space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-lg bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                      {domain.icon}
                    </div>
                    <span className="text-[10px] font-bold text-brand-blue uppercase tracking-wider bg-brand-surface-blue px-2 py-0.5 rounded">
                      {domain.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-brand-navy">
                    {domain.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {domain.desc}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 02 — HANDS-ON PROJECTS (Interactive Visual Showcase) */}
        {/* ------------------------------------------------------------------- */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center justify-between border-b border-brand-border/60 pb-3 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-orange font-mono font-bold text-sm">
                02
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  Practical Application
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Hands-on Projects & Capstone Deliverables
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-surface-blue text-brand-navy text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-brand-blue" />
                <span>CRPC Projects PDF</span>
              </button>
              <button
                type="button"
                onClick={() => openCurriculum('daap')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-brand-orange/10 text-brand-navy text-xs font-bold hover:bg-brand-orange hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-brand-orange" />
                <span>DAAP Projects PDF</span>
              </button>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Learning through practical projects and direct implementation. Each project results in demonstrable code, comprehensive documentation, and live systems hosted on students' personal GitHub repositories.
          </p>

          {/* Interactive Projects Visual Showcase */}
          <ProjectsVisual initialTab="daap" />
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 03 — MODERN TECHNOLOGIES (Interactive Logo-Driven Ecosystem) */}
        {/* ------------------------------------------------------------------- */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center gap-3 border-b border-brand-border/60 pb-3">
            <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-[#0a6680] font-mono font-bold text-sm">
              03
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-cyan">
                Industry Alignment
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Modern Technologies & Tools Ecosystem
              </h2>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
            Our curricula focus directly on the technology ecosystem currently powering enterprise infrastructure, modern analytics teams, and automated cloud workflows. Hover over any technology to view its engineering role.
          </p>

          {/* Full Interactive Tech Ecosystem Visual */}
          <TechEcosystemVisual />
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* 04 — CAREER PREPARATION & FIVE STAGE METHODOLOGY */}
        {/* ------------------------------------------------------------------- */}
        <div className="space-y-8 pt-6">
          <div className="flex items-center gap-3 border-b border-brand-border/60 pb-3">
            <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center text-brand-blue font-mono font-bold text-sm">
              04
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                Professional Readiness
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Career Preparation & Seven Support Pillars
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
                className="border border-brand-border/80 space-y-2.5 hover:border-brand-blue transition-colors"
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
      {/* LEARNING EXPERIENCE JOURNEY (Interactive 5 Stages) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The Cloudariss Learning Experience"
          subtitle="A five-stage structured continuum turning foundational knowledge into deployment-grade career readiness."
        />

        {/* Interactive 5-Stage Visual Component */}
        <FiveStageVisualJourney />
      </section>

      {/* ========================================================================= */}
      {/* INDUSTRY / COMPANY SESSIONS (With authentic Vizag IT photography) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          variant="white"
          padding="lg"
          borderAccent="blue"
          className="border border-brand-border shadow-card overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30">
                <Building2 className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                Virtual Company Sessions & Regional Tech Corridor Exposure
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

            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-brand-border shadow-md">
              <img
                src="/brand/brochures/forward-deployed.jpg"
                alt="Cloudariss Forward Deployed Engineering Mentorship"
                className="w-full h-72 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent p-5 flex flex-col justify-end text-white space-y-2">
                <div className="text-xs font-bold text-brand-cyan uppercase tracking-wider">
                  Direct Practitioner Mentorship
                </div>
                <div className="text-base font-bold text-white leading-tight">
                  Connect classroom problem solving with real-world enterprise engineering workflows.
                </div>
                <div className="pt-2">
                  <Button
                    to="/courses"
                    variant="primary"
                    size="sm"
                    fullWidth
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    View Program Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* ========================================================================= */}
      {/* QUICK SYLLABI VIEWER BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-dark-surface p-8 border border-brand-blue/30 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Official Syllabi Downloads</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white">
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
      {/* FESTIVE ADMISSIONS CAMPAIGN */}
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
