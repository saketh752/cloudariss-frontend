import React, { useState } from 'react';
import {
  ArrowRight,
  MapPin,
  Cloud,
  Database,
  Wrench,
  LineChart,
  Bot,
  Sparkles,
  Building2,
  Terminal,
  Layers,
  Check,
  GitBranch,
  BookOpen,
  Users,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BRAND_DATA } from '@/data/brandData';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { AboutHeroCanvas } from '@/components/curriculum/AboutHeroCanvas';
import { TeamHeroSlider } from '@/components/about/TeamHeroSlider';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  ServiceNowLogo,
  SqlLogo,
  PowerBiLogo,
  RagLogo,
  AgenticAiLogo,
  PythonLogo,
} from '@/components/icons/TechLogos';

export const AboutPage: React.FC = () => {
  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;
  const { openCurriculum } = useCurriculumModal();
  const [selectedTechDomain, setSelectedTechDomain] = useState<'all' | 'cloud' | 'data' | 'ai'>('all');

  // 5 Core Approach Values directly from Cloudariss Plan PDF
  const ourApproachValues = [
    {
      number: '01',
      title: 'Practical Learning',
      summary:
        'Moving beyond passive video lectures into active terminal execution, cloud resource provisioning, and real code authoring from day one.',
      focus: 'Terminal & Cloud Consoles',
    },
    {
      number: '02',
      title: 'Guided Practice',
      summary:
        'Regular mentor check-ins, architectural debugging sessions, and immediate corrective guidance when code or infrastructure configurations fail.',
      focus: 'Live Error Resolution',
    },
    {
      number: '03',
      title: 'Build Real Projects',
      summary:
        'Designing multi-tier cloud architectures, live automated CI/CD pipelines, and analytical data systems built to simulate enterprise standards.',
      focus: 'Enterprise Architectures',
    },
    {
      number: '04',
      title: 'Learn in Public',
      summary:
        'Documenting architectural decisions, committing to structured GitHub repositories, and publishing defensible technical portfolio artifacts.',
      focus: 'Public Proof & GitHub',
    },
    {
      number: '05',
      title: 'Keep Growing',
      summary:
        'Continually expanding capabilities across modern infrastructure, distributed data engineering, business intelligence, and autonomous agentic AI.',
      focus: 'Continuous Skill Expansion',
    },
  ];

  // College & Community Work directly from Cloudariss Plan PDF
  const communityCollaborations = [
    {
      badge: 'Campus Workshops',
      title: 'Hands-On Engineering Bootcamps',
      desc: 'Conducting intensive technical workshops on Cloud Computing, Docker, Git, and SQL across engineering colleges in Andhra Pradesh and beyond, giving students direct experience with industry workflows.',
      icon: <Terminal className="w-5 h-5 text-[#00D2FF]" />,
    },
    {
      badge: 'Hackathons & Challenges',
      title: 'Technical Mentorship & Code Defense',
      desc: 'Guiding student teams through hackathons, architecture reviews, and real-time debugging challenges to build deployable prototypes under industry engineering standards.',
      icon: <GitBranch className="w-5 h-5 text-brand-orange" />,
    },
    {
      badge: 'Curriculum Bridging',
      title: 'Academic-to-Industry Alignment',
      desc: 'Collaborating with academic faculties to bridge university curricula with active enterprise engineering stacks, drawing direct inspiration from Vizag’s Rushikonda IT Park and VSEZ corridors.',
      icon: <BookOpen className="w-5 h-5 text-brand-blue" />,
    },
  ];

  // 7 Major Technology Areas with SVG Logos
  const techFocusAreas = [
    {
      name: 'Cloud Computing',
      tools: 'AWS (EC2, VPC, ALB, RDS, IAM)',
      desc: 'Scalable cloud infrastructure design, virtual networking, secure access control, and high-availability architecture.',
      icon: <Cloud className="w-5 h-5 text-brand-blue" />,
      logo: <AwsLogo className="w-5 h-5" />,
      category: 'cloud' as const,
    },
    {
      name: 'Data Engineering & SQL',
      tools: 'SQL, PostgreSQL, Relational Modeling',
      desc: 'Multi-table database querying, aggregations, window functions, and schema normalization for robust data operations.',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      logo: <SqlLogo className="w-5 h-5" />,
      category: 'data' as const,
    },
    {
      name: 'DevOps & CI/CD Pipelines',
      tools: 'Docker, Kubernetes, Jenkins, Linux',
      desc: 'Automated continuous integration and delivery pipelines, container orchestration, and server administration.',
      icon: <Wrench className="w-5 h-5 text-brand-blue" />,
      logo: <DockerLogo className="w-5 h-5" />,
      category: 'cloud' as const,
    },
    {
      name: 'Business Analytics & BI',
      tools: 'Power BI, DAX, Advanced Excel',
      desc: 'Interactive executive dashboards, KPI modeling, automated reporting, and quantitative decision-support frameworks.',
      icon: <LineChart className="w-5 h-5 text-brand-blue" />,
      logo: <PowerBiLogo className="w-5 h-5" />,
      category: 'data' as const,
    },
    {
      name: 'Generative AI & RAG',
      tools: 'LLMs, Prompt Engineering, RAG',
      desc: 'Context-augmented intelligence, semantic document retrieval, and enterprise AI assistant integrations.',
      icon: <Sparkles className="w-5 h-5 text-brand-blue" />,
      logo: <RagLogo className="w-5 h-5" />,
      category: 'ai' as const,
    },
    {
      name: 'Agentic AI Systems',
      tools: 'Multi-Tool Agents, LangChain, CrewAI',
      desc: 'Autonomous multi-agent analytical pipelines capable of planning, executing tools, evaluating findings, and reporting.',
      icon: <Bot className="w-5 h-5 text-brand-blue" />,
      logo: <AgenticAiLogo className="w-5 h-5" />,
      category: 'ai' as const,
    },
    {
      name: 'Enterprise IT Workflows',
      tools: 'ServiceNow ITSM, Workflow Automation',
      desc: 'Enterprise IT service management, incident handling, change approvals, and organizational service automation.',
      icon: <Building2 className="w-5 h-5 text-brand-blue" />,
      logo: <ServiceNowLogo className="w-5 h-5" />,
      category: 'cloud' as const,
    },
  ];

  return (
    <div className="space-y-14 sm:space-y-16 lg:space-y-20 pb-20">
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO: THE PEOPLE BEHIND CLOUDARISS SLIDER                    */}
      {/* ========================================================================= */}
      <TeamHeroSlider />

      {/* ========================================================================= */}
      {/* 2. ABOUT CLOUDARISS: STORY & REGIONAL ENGINEERING IDENTITY               */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-2 pb-6 sm:pt-4 sm:pb-10 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0878E8]/15 border border-[#00D2FF]/30">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
                <span className="text-[11px] font-bold tracking-wider text-[#00D2FF] uppercase font-heading">
                  About Cloudariss Technologies
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                Bridging Theory with{' '}
                <span className="text-[#00D2FF]">Practical Implementation.</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl leading-relaxed">
                Cloudariss Technologies is an industry-focused technology learning and career development organization headquartered in Visakhapatnam. We help aspiring engineers and tech professionals bridge the gap between knowing a concept and demonstrating real-world competence.
              </p>

              <p className="text-sm sm:text-base text-slate-400 font-normal max-w-2xl leading-relaxed">
                Through mentor-led cohorts, guided hands-on labs, and defended capstone architectures across Cloud &amp; DevOps, Data Engineering, and Agentic AI, learners build defensible proof of capability from day one.
              </p>

              <div className="flex flex-wrap items-center justify-start gap-3.5 pt-2">
                <Button
                  to="/courses"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Programs
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  className="border-white/20 hover:border-white/35 text-white"
                >
                  Talk to an Advisor
                </Button>
              </div>
            </div>

            {/* Right: Interactive Organization & Regional Identity Canvas */}
            <div className="lg:col-span-5">
              <AboutHeroCanvas
                onExploreCrpc={() => {
                  window.location.href = '/courses/crpc';
                }}
                onExploreDaap={() => {
                  window.location.href = '/courses/daap';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Technology Movement Ribbon */}
      <div className="py-2">
        <TechMarqueeRibbon />
      </div>

      {/* ========================================================================= */}
      {/* 2. WHO WE ARE & OUR APPROACH                                              */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Pedagogy & Values"
          title="How We Approach Technical Learning"
          subtitle="Grounded in real engineering practice, Cloudariss transforms passive lecture consumption into active, defensible capability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Organization & Regional Roots Editorial Brief */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0878E8]/10 border border-[#00D2FF]/20 text-[11px] font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Visakhapatnam &middot; Global Virtual</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Rooted in Andhra’s Coastal Tech Hub, Delivered Everywhere.
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Headquartered in Visakhapatnam, Andhra Pradesh, Cloudariss draws inspiration from the region’s expanding technology corridor—connecting with the engineering energy around Rushikonda IT Park and the VSEZ zone.
              </p>

              <p className="text-sm text-slate-400 font-normal leading-relaxed">
                Through our structured, 100% live virtual cohorts, we eliminate geographic boundaries—delivering high-touch mentorship, collaborative coding sessions, and continuous feedback to learners across India and beyond.
              </p>
            </div>

            {/* 3 Core Grounding Attributes */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#0878E8]/15 border border-[#00D2FF]/25 flex items-center justify-center text-[#00D2FF] shrink-0 mt-0.5">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Active Terminal &amp; Cloud Work
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No simulated slides. Learners deploy real AWS VPCs, configure Docker containers, and query live PostgreSQL databases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#FF7A00]/15 border border-[#FF7A00]/30 flex items-center justify-center text-brand-orange shrink-0 mt-0.5">
                  <GitBranch className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Public Defensible Artifacts
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Every project is maintained in structured GitHub repositories with architecture diagrams and technical documentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#0878E8]/15 border border-[#00D2FF]/25 flex items-center justify-center text-[#00D2FF] shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">
                    Mentor-Led, Low-Ratio Cohorts
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct access to experienced technology mentors who conduct architecture reviews and unblock complex pipeline errors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The 5 Tenets of Applied Capability */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 pb-1">
              The 5 Pillars of Our Pedagogy
            </div>

            <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              {ourApproachValues.map((val) => (
                <div
                  key={val.number}
                  className="py-5 sm:py-6 group transition-colors hover:bg-white/[0.015]"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-mono font-bold text-[#00D2FF]">
                        {val.number}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-[#00D2FF] transition-colors">
                        {val.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/5 shrink-0 hidden sm:inline-block">
                      {val.focus}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed font-normal pl-7">
                    {val.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. TECHNOLOGY DOMAINS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          eyebrow="Technology Domains"
          title="Our Focus Areas"
          subtitle="Cloudariss focuses on the key technological building blocks that modern software and data organizations depend upon."
        />

        {/* Interactive Domain Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Focus Areas', count: 7 },
            { id: 'cloud', label: 'Cloud & DevOps', count: 3 },
            { id: 'data', label: 'Data & Analytics', count: 2 },
            { id: 'ai', label: 'AI & Agents', count: 2 },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedTechDomain(tab.id as 'all' | 'cloud' | 'data' | 'ai')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                selectedTechDomain === tab.id
                  ? 'bg-[#0878E8] text-white shadow-md shadow-blue-900/30'
                  : 'bg-[#05143A]/85 text-slate-300 hover:text-white border border-white/10 hover:border-[#19BCE8]/40'
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  selectedTechDomain === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techFocusAreas
            .filter((area) => selectedTechDomain === 'all' || area.category === selectedTechDomain)
            .map((area, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-gradient-to-b from-[#081F54]/75 via-[#061540]/80 to-[#030E2B]/85 backdrop-blur-md border border-[#19BCE8]/20 p-6 hover:border-[#19BCE8]/50 transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0878E8]/15 flex items-center justify-center border border-[#19BCE8]/30 text-[#19BCE8]">
                      {area.icon}
                    </div>
                    <div className="p-1.5 rounded-lg bg-white/95 border border-white/80 shadow-xs">
                      {area.logo}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white font-heading group-hover:text-cyan-200 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#CBD5E1] leading-relaxed font-normal">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <span className="text-[11px] font-mono text-[#19BCE8] font-semibold block">
                    {area.tools}
                  </span>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. BALANCED FLAGSHIP PROGRAMS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Programs"
          title="Two Specialized Pathways"
          subtitle="Explore the two flagship accelerators engineered and delivered live by Cloudariss Technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Showcase Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/30 shadow-2xl hover:border-[#19BCE8]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group text-white">
            <div className="space-y-5">
              {/* 3D Visual Header with Badges */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#06143D] to-[#0A255C]">
                <img
                  src="/brand/banners/crpc-3d-hd.png"
                  alt="CRPC Cloud & DevOps 3D Preview"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06143D]/90 via-[#06143D]/30 to-transparent" />

                {/* Floating Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <Badge variant="blue" size="md">
                    {crpc.code} · Cloud & DevOps
                  </Badge>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 text-xs font-mono font-bold border border-cyan-400/30 shadow-xs">
                    12 Weeks · Live Online
                  </span>
                </div>

                {/* Floating Bottom Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 z-10">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Layers className="w-4 h-4 text-brand-cyan" />
                    <span>Multi-Tier Infrastructure & Automation</span>
                  </div>
                  <span className="text-[11px] font-mono text-cyan-200 bg-white/10 px-2 py-0.5 rounded">
                    Batch: March 2026
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 sm:px-7 space-y-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    Cloud & Data Career Accelerator
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                    Comprehensive 12-week curriculum spanning Python programming, AWS Cloud infrastructure, Docker containerization, Kubernetes orchestration, Jenkins CI/CD automation, and ServiceNow ITSM.
                  </p>
                </div>

                {/* Enterprise Deliverables Checklist */}
                <div className="p-3.5 rounded-xl bg-[#05143A]/90 border border-white/10 space-y-2">
                  <div className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-brand-blue" />
                    <span>Key Engineering Deliverables</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#CBD5E1] font-normal">
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Multi-tier AWS VPC & EC2 Deployment</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Docker & Kubernetes Orchestration</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Automated Jenkins CI/CD Pipeline</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Verified GitHub Portfolio Capstone</span>
                    </div>
                  </div>
                </div>

                {/* Tech Logos Bar */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { name: 'AWS Cloud', logo: <AwsLogo className="w-3.5 h-3.5" /> },
                      { name: 'Docker', logo: <DockerLogo className="w-3.5 h-3.5" /> },
                      { name: 'Kubernetes', logo: <KubernetesLogo className="w-3.5 h-3.5" /> },
                      { name: 'Jenkins', logo: <JenkinsLogo className="w-3.5 h-3.5" /> },
                      { name: 'ServiceNow', logo: <ServiceNowLogo className="w-4 h-3.5" /> },
                      { name: 'Python', logo: <PythonLogo className="w-3.5 h-3.5" /> },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0878E8]/15 text-[#19BCE8] border border-[#19BCE8]/30 text-xs font-semibold hover:border-[#19BCE8]/60 transition-colors"
                      >
                        {tech.logo}
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="px-6 sm:px-7 py-5 mt-6 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap bg-[#030E2B]/90">
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="px-4 py-2 rounded-xl bg-[#0878E8]/20 text-[#19BCE8] hover:bg-[#0878E8]/30 hover:text-white text-xs font-bold border border-[#19BCE8]/40 shadow-xs transition-all cursor-pointer"
              >
                View PDF Syllabus
              </button>
              <Button
                to="/courses/crpc"
                variant="primary"
                size="sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore CRPC
              </Button>
            </div>
          </div>

          {/* DAAP Showcase Card */}
          <div className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 backdrop-blur-xl border border-brand-orange/40 shadow-2xl overflow-hidden hover:border-brand-orange/70 transition-all duration-300 flex flex-col justify-between group text-white">
            <div className="space-y-5">
              {/* 3D Visual Header with Badges */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-[#1F1103] to-[#3B1E05]">
                <img
                  src="/brand/banners/daap-3d-hd.png"
                  alt="DAAP Data & AI 3D Preview"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1103]/90 via-[#1F1103]/30 to-transparent" />

                {/* Floating Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <Badge variant="orange" size="md">
                    {daap.code} · Data & Analytics
                  </Badge>
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 text-xs font-mono font-bold border border-amber-400/30 shadow-xs">
                    12 Weeks · Live Online
                  </span>
                </div>

                {/* Floating Bottom Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 z-10">
                  <div className="flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-4 h-4 text-brand-orange" />
                    <span>Business BI & Agentic AI Systems</span>
                  </div>
                  <span className="text-[11px] font-mono text-amber-200 bg-white/10 px-2 py-0.5 rounded">
                    Batch: March 2026
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="px-6 sm:px-7 space-y-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-heading group-hover:text-brand-orange transition-colors">
                    Data Analyst Accelerator Program
                  </h3>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                    Fast-paced 12-week sprint taking learners from advanced Excel formulas and complex SQL querying to Python EDA, executive Power BI dashboards, Generative AI (RAG), and autonomous Agentic AI workflows.
                  </p>
                </div>

                {/* Enterprise Deliverables Checklist */}
                <div className="p-3.5 rounded-xl bg-[#05143A]/90 border border-white/10 space-y-2">
                  <div className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Key Analytical Deliverables</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#CBD5E1] font-normal">
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Complex SQL Window Functions & Aggregations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Executive Power BI Dashboards with DAX</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Contextual Enterprise RAG Retrieval Pipeline</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Autonomous Multi-Agent Analytical Workflow</span>
                    </div>
                  </div>
                </div>

                {/* Tech Logos Bar */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Technologies
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { name: 'SQL', logo: <SqlLogo className="w-3.5 h-3.5" /> },
                      { name: 'Power BI', logo: <PowerBiLogo className="w-3.5 h-3.5" /> },
                      { name: 'Python', logo: <PythonLogo className="w-3.5 h-3.5" /> },
                      { name: 'Generative AI (RAG)', logo: <RagLogo className="w-3.5 h-3.5" /> },
                      { name: 'Agentic AI', logo: <AgenticAiLogo className="w-3.5 h-3.5" /> },
                    ].map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand-orange/15 text-brand-orange border border-brand-orange/30 text-xs font-semibold hover:border-brand-orange/60 transition-colors"
                      >
                        {tech.logo}
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="px-6 sm:px-7 py-5 mt-6 border-t border-white/10 flex items-center justify-between gap-3 flex-wrap bg-[#030E2B]/90">
              <button
                type="button"
                onClick={() => openCurriculum('daap')}
                className="px-4 py-2 rounded-xl bg-brand-orange/20 text-brand-orange hover:bg-brand-orange/30 hover:text-white text-xs font-bold border border-brand-orange/40 shadow-xs transition-all cursor-pointer"
              >
                View PDF Syllabus
              </button>
              <Button
                to="/courses/daap"
                variant="primary"
                size="sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore DAAP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. COLLEGE & COMMUNITY WORK                                               */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          eyebrow="Community & Campus Outreach"
          title="College & Institutional Work"
          subtitle="Collaborating with academic faculties, engineering departments, and student communities to bring industry workflows directly onto campuses."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityCollaborations.map((collab, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-7 flex flex-col justify-between space-y-4 hover:border-white/25 transition-all group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0878E8]/15 border border-[#00D2FF]/25 flex items-center justify-center">
                    {collab.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#00D2FF] bg-[#0878E8]/10 px-2.5 py-0.5 rounded-full border border-[#00D2FF]/20 uppercase tracking-wider">
                    {collab.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00D2FF] transition-colors">
                  {collab.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {collab.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                <span>CAMPUS INITIATIVE 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. GUIDING BRAND PRINCIPLE                                                */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-10 border-t border-b border-white/[0.08] text-center space-y-3">
          <div className="text-[11px] font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
            Guiding Principle
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
            Learn the concepts. Build demonstrable capability.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {BRAND_DATA.positioning}
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. WANT TO LEARN WITH US OR COLLABORATE? (FINAL CTA)                      */}
      {/* ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-10 text-center space-y-4 text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0878E8]/15 border border-[#00D2FF]/30 text-xs font-mono font-bold text-[#00D2FF] uppercase tracking-wider">
            <span>Direct Admissions &amp; Campus Collaboration</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading tracking-tight">
            Ready to Move from Learning to Doing?
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed font-normal">
            Whether you are an aspiring engineer seeking hands-on cohort mentorship or an institution looking to bring practical bootcamps to campus, our team is ready to connect.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              to="/courses"
              variant="primary"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Programs
            </Button>
            <Button
              to="/contact"
              variant="outline"
              size="md"
              className="border-white/20 hover:border-white/35 text-white"
            >
              Partner With Cloudariss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
