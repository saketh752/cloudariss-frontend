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
  Check,
  GitBranch,
  BookOpen,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
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
      icon: <Terminal className="w-4 h-4 text-[#00D2FF]" />,
    },
    {
      badge: 'Hackathons & Challenges',
      title: 'Technical Mentorship & Code Defense',
      desc: 'Guiding student teams through hackathons, architecture reviews, and real-time debugging challenges to build deployable prototypes under industry engineering standards.',
      icon: <GitBranch className="w-4 h-4 text-brand-orange" />,
    },
    {
      badge: 'Curriculum Bridging',
      title: 'Academic-to-Industry Alignment',
      desc: 'Collaborating with academic faculties to bridge university curricula with active enterprise engineering stacks, drawing direct inspiration from Vizag’s Rushikonda IT Park and VSEZ corridors.',
      icon: <BookOpen className="w-4 h-4 text-brand-blue" />,
    },
  ];

  // 7 Major Technology Areas with SVG Logos
  const techFocusAreas = [
    {
      name: 'Cloud Computing',
      tools: 'AWS (EC2, VPC, ALB, RDS, IAM)',
      desc: 'Scalable cloud infrastructure design, virtual networking, secure access control, and high-availability architecture.',
      icon: <Cloud className="w-4 h-4 text-brand-blue" />,
      logo: <AwsLogo className="w-4 h-4" />,
      category: 'cloud' as const,
    },
    {
      name: 'Data Engineering & SQL',
      tools: 'SQL, PostgreSQL, Relational Modeling',
      desc: 'Multi-table database querying, aggregations, window functions, and schema normalization for robust data operations.',
      icon: <Database className="w-4 h-4 text-brand-blue" />,
      logo: <SqlLogo className="w-4 h-4" />,
      category: 'data' as const,
    },
    {
      name: 'DevOps & CI/CD Pipelines',
      tools: 'Docker, Kubernetes, Jenkins, Linux',
      desc: 'Automated continuous integration and delivery pipelines, container orchestration, and server administration.',
      icon: <Wrench className="w-4 h-4 text-brand-blue" />,
      logo: <DockerLogo className="w-4 h-4" />,
      category: 'cloud' as const,
    },
    {
      name: 'Business Analytics & BI',
      tools: 'Power BI, DAX, Advanced Excel',
      desc: 'Interactive executive dashboards, KPI modeling, automated reporting, and quantitative decision-support frameworks.',
      icon: <LineChart className="w-4 h-4 text-brand-blue" />,
      logo: <PowerBiLogo className="w-4 h-4" />,
      category: 'data' as const,
    },
    {
      name: 'Generative AI & RAG',
      tools: 'LLMs, Prompt Engineering, RAG',
      desc: 'Context-augmented intelligence, semantic document retrieval, and enterprise AI assistant integrations.',
      icon: <Sparkles className="w-4 h-4 text-brand-blue" />,
      logo: <RagLogo className="w-4 h-4" />,
      category: 'ai' as const,
    },
    {
      name: 'Agentic AI Systems',
      tools: 'Multi-Tool Agents, LangChain, CrewAI',
      desc: 'Autonomous multi-agent analytical pipelines capable of planning, executing tools, evaluating findings, and reporting.',
      icon: <Bot className="w-4 h-4 text-brand-blue" />,
      logo: <AgenticAiLogo className="w-4 h-4" />,
      category: 'ai' as const,
    },
    {
      name: 'Enterprise IT Workflows',
      tools: 'ServiceNow ITSM, Workflow Automation',
      desc: 'Enterprise IT service management, incident handling, change approvals, and organizational service automation.',
      icon: <Building2 className="w-4 h-4 text-brand-blue" />,
      logo: <ServiceNowLogo className="w-4 h-4" />,
      category: 'cloud' as const,
    },
  ];

  return (
    <div className="relative space-y-12 sm:space-y-14 lg:space-y-16 pb-16 text-white">
      {/* 55% Black Shade Layer spanning the entire page */}
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-black/[0.55] pointer-events-none -z-10"
      />

      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO: THE PEOPLE BEHIND CLOUDARISS                           */}
      {/* ========================================================================= */}
      <TeamHeroSlider />

      {/* ========================================================================= */}
      {/* 2. OUR STORY & WHY WE STARTED (1-SCREEN BALANCED SECTION)                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 lg:min-h-[calc(100vh-6rem)] flex flex-col justify-center border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Left Column: Our Story */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
              Moving from Understanding Concepts to{' '}
              <span className="text-[#00D2FF]">Demonstrating Capability.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Cloudariss Technologies is an industry-focused technology learning and career development organization headquartered in Visakhapatnam. We help aspiring engineers and tech professionals bridge the critical divide between knowing a concept and demonstrating real-world competence.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
              Through mentor-led cohorts, guided hands-on terminal labs, and defended capstone architectures across Cloud &amp; DevOps, Data Engineering, and Agentic AI, learners build defensible proof of capability from day one.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-3.5 pt-1">
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
                className="border-white/20 hover:border-white/40 text-white"
              >
                Talk to Admissions
              </Button>
            </div>
          </div>

          {/* Right Column: Why We Started */}
          <div className="lg:col-span-5 space-y-4 lg:pl-2">
            <div className="border-l-2 border-[#00D2FF]/40 pl-5 space-y-3.5 py-1">
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading leading-snug">
                Traditional education teaches what tools are. We teach how to build and defend them.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Most students and aspiring developers are overwhelmed by endless video tutorials without ever touching a real terminal, deploying a live cloud service, or troubleshooting production errors.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                Cloudariss was built to replace passive lecture viewing with interactive virtual classrooms, direct terminal work, and real portfolio assets that prove engineering ability to recruiters and clients.
              </p>

              <div className="pt-1 flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-white font-semibold">Visakhapatnam HQ</span>
                <span className="text-white/30">&middot;</span>
                <span className="text-[#00D2FF]">100% Live Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Technology Movement Ribbon */}
      <div className="py-1">
        <TechMarqueeRibbon />
      </div>

      {/* ========================================================================= */}
      {/* 3. HOW WE APPROACH TECHNICAL LEARNING (1-SCREEN BALANCED SECTION)         */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 lg:min-h-[calc(100vh-6rem)] flex flex-col justify-center border-b border-white/[0.08]">
        <div className="space-y-2 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white font-heading tracking-tight">
            How We Approach Technical Learning
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
            Grounded in real engineering practice, Cloudariss transforms passive lecture consumption into active, defensible capability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Left Column: Roots & Attributes */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#00D2FF] tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>Visakhapatnam &middot; Global Virtual</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading tracking-tight leading-tight">
                Rooted in Andhra’s Coastal Tech Hub, Delivered Everywhere.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Headquartered in Visakhapatnam, Andhra Pradesh, Cloudariss draws inspiration from the region’s expanding technology corridor—connecting with the engineering energy around Rushikonda IT Park and the VSEZ zone.
              </p>

              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Through our structured, 100% live virtual cohorts, we eliminate geographic boundaries—delivering high-touch mentorship, collaborative coding sessions, and continuous feedback to learners across India and beyond.
              </p>
            </div>

            {/* 3 Core Grounding Attributes */}
            <div className="space-y-2.5 pt-2 border-t border-white/[0.08]">
              <div className="flex items-start gap-3">
                <Terminal className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                    Active Terminal &amp; Cloud Work
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                    No simulated slides. Learners deploy real AWS VPCs, configure Docker containers, and query live PostgreSQL databases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GitBranch className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                    Public Defensible Artifacts
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Every project is maintained in structured GitHub repositories with architecture diagrams and technical documentation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white font-heading">
                    Mentor-Led, Low-Ratio Cohorts
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                    Direct access to experienced technology mentors who conduct architecture reviews and unblock complex pipeline errors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: The 5 Tenets */}
          <div className="lg:col-span-7 space-y-2">
            <div className="divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
              {ourApproachValues.map((val) => (
                <div
                  key={val.number}
                  className="py-3 sm:py-3.5 group transition-colors hover:bg-white/[0.015]"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs sm:text-sm font-mono font-bold text-[#00D2FF]">
                        {val.number}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white font-heading group-hover:text-[#00D2FF] transition-colors">
                        {val.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 shrink-0 hidden sm:inline-block">
                      {val.focus}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-slate-300 mt-1 leading-relaxed font-normal pl-6">
                    {val.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNOLOGY DOMAINS & FOCUS AREAS (1-SCREEN BALANCED SECTION)           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 lg:min-h-[calc(100vh-6rem)] flex flex-col justify-center border-b border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 border-b border-white/[0.08] pb-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white font-heading tracking-tight">
              Our Focus Areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-normal leading-relaxed">
              Cloudariss focuses on the key technological building blocks that modern software and data organizations depend upon.
            </p>
          </div>

          {/* Interactive Domain Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            {[
              { id: 'all', label: 'All', count: 7 },
              { id: 'cloud', label: 'Cloud & DevOps', count: 3 },
              { id: 'data', label: 'Data & Analytics', count: 2 },
              { id: 'ai', label: 'AI & Agents', count: 2 },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedTechDomain(tab.id as 'all' | 'cloud' | 'data' | 'ai')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  selectedTechDomain === tab.id
                    ? 'bg-[#0878E8] text-white shadow-md shadow-blue-900/30'
                    : 'bg-white/[0.03] text-slate-300 hover:text-white border border-white/10 hover:border-[#19BCE8]/40'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1 py-0.2 rounded-full font-mono ${
                    selectedTechDomain === tab.id ? 'bg-white/20 text-white' : 'bg-white/10 text-slate-400'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Focus Areas Open Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-auto">
          {techFocusAreas
            .filter((area) => selectedTechDomain === 'all' || area.category === selectedTechDomain)
            .map((area, idx) => (
              <div
                key={idx}
                className="space-y-2.5 pb-4 border-b border-white/[0.08] flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00D2FF]">
                      {area.icon}
                    </div>
                    <div className="p-1 rounded-md bg-white/95 border border-white/80 shadow-xs">
                      {area.logo}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white font-heading">
                    {area.name}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-1 text-[11px] font-mono text-[#00D2FF]">
                  {area.tools}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. BALANCED FLAGSHIP PROGRAMS (1-SCREEN BALANCED SECTION)                 */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 lg:min-h-[calc(100vh-6rem)] flex flex-col justify-center border-b border-white/[0.08]">
        <div className="space-y-1 mb-5 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white font-heading tracking-tight">
            Two Specialized Pathways
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
            Explore the two flagship accelerators engineered and delivered live by Cloudariss Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch my-auto">
          {/* CRPC Showcase */}
          <div className="space-y-4 pb-4 border-b lg:border-b-0 lg:border-r border-white/[0.08] lg:pr-8 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/brand/banners/crpc-3d-hd.png"
                  alt="CRPC Cloud & DevOps 3D Preview"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-bold font-mono text-[#00D2FF]">CRPC &middot; Cloud &amp; DevOps</span>
                  <span className="font-mono text-slate-300">12 Weeks &middot; Live Online</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                  Cloud &amp; Data Career Accelerator
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Comprehensive 12-week curriculum spanning Python programming, AWS Cloud infrastructure, Docker containerization, Kubernetes orchestration, Jenkins CI/CD automation, and ServiceNow ITSM.
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Key Engineering Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Multi-tier AWS VPC &amp; EC2</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Docker &amp; Kubernetes Orchestration</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Automated Jenkins CI/CD Pipeline</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Verified GitHub Capstone</span>
                  </div>
                </div>
              </div>

              {/* Tech Logos */}
              <div className="flex flex-wrap gap-1.5 pt-1">
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
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/10 text-[11px]"
                  >
                    {tech.logo}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="text-xs font-mono text-[#00D2FF] hover:underline cursor-pointer"
              >
                View PDF Syllabus &rarr;
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

          {/* DAAP Showcase */}
          <div className="space-y-4 pb-4 lg:pl-4 flex flex-col justify-between">
            <div className="space-y-3.5">
              <div className="relative h-44 sm:h-52 rounded-xl overflow-hidden bg-slate-900">
                <img
                  src="/brand/banners/daap-3d-hd.png"
                  alt="DAAP Data & AI 3D Preview"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-bold font-mono text-brand-orange">DAAP &middot; Data &amp; Analytics</span>
                  <span className="font-mono text-slate-300">12 Weeks &middot; Live Online</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                  Data Analyst Accelerator Program
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Fast-paced 12-week sprint taking learners from advanced Excel formulas and complex SQL querying to Python EDA, executive Power BI dashboards, Generative AI (RAG), and autonomous Agentic AI workflows.
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Key Analytical Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Complex SQL Window Functions</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Executive Power BI Dashboards</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Enterprise RAG Retrieval Pipeline</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Autonomous Multi-Agent Workflow</span>
                  </div>
                </div>
              </div>

              {/* Tech Logos */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {[
                  { name: 'SQL', logo: <SqlLogo className="w-3.5 h-3.5" /> },
                  { name: 'Power BI', logo: <PowerBiLogo className="w-3.5 h-3.5" /> },
                  { name: 'Python', logo: <PythonLogo className="w-3.5 h-3.5" /> },
                  { name: 'Generative AI (RAG)', logo: <RagLogo className="w-3.5 h-3.5" /> },
                  { name: 'Agentic AI', logo: <AgenticAiLogo className="w-3.5 h-3.5" /> },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/10 text-[11px]"
                  >
                    {tech.logo}
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => openCurriculum('daap')}
                className="text-xs font-mono text-brand-orange hover:underline cursor-pointer"
              >
                View PDF Syllabus &rarr;
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
      {/* 6. COLLEGE & COMMUNITY WORK + GUIDING PRINCIPLE & FINAL CTA (1-SCREEN)    */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 lg:min-h-[calc(100vh-6rem)] flex flex-col justify-center space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white font-heading tracking-tight">
            College &amp; Institutional Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal leading-relaxed">
            Collaborating with academic faculties, engineering departments, and student communities to bring industry workflows directly onto campuses.
          </p>
        </div>

        {/* 3 Campus initiatives in compact row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityCollaborations.map((collab, idx) => (
            <div
              key={idx}
              className="space-y-2.5 pb-4 border-b md:border-b-0 md:border-r last:border-r-0 border-white/[0.08] md:pr-4"
            >
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                {collab.icon}
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#00D2FF] tracking-wider uppercase block">
                  {collab.badge}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                  {collab.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {collab.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Combined Guiding Principle & Final CTA Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-4 border-t border-white/[0.08]">
          <div className="lg:col-span-6 space-y-2 text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-heading tracking-tight">
              Learn the concepts. Build demonstrable capability.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {BRAND_DATA.positioning}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row items-start sm:items-center justify-start lg:justify-end gap-3.5">
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
              className="border-white/20 hover:border-white/40 text-white"
            >
              Partner With Cloudariss
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
