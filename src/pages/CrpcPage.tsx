import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  Laptop,
  Cloud,
  Terminal,
  Cpu,
  GitBranch,
  Layers,
  Users,
  FileText,
  Briefcase,
  CheckCircle2,
  BadgeCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { CRPC_PROJECTS } from '@/data/projectsData';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  ServiceNowLogo,
  PythonLogo,
  GitHubLogo,
  GrafanaLogo,
} from '@/components/icons/TechLogos';

export const CrpcPage: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  // 5 Progressive Engineering Disciplines
  const curriculumStages = [
    {
      num: '01',
      title: 'Python Scripting & Core OOP',
      focus: 'Foundational Automation',
      icon: <Terminal className="w-5 h-5 text-[#0878E8]" />,
      logo: <PythonLogo className="w-5 h-5" />,
      desc: 'Master clean syntax, modular structures, object-oriented design, and automation scripts that serve as the backbone for modern cloud tooling and data processing.',
      tools: ['Python 3.11', 'OOP Architecture', 'Script Automation', 'File I/O'],
    },
    {
      num: '02',
      title: 'Data Science Essentials',
      focus: 'Applied Analytics',
      icon: <Cpu className="w-5 h-5 text-[#0878E8]" />,
      logo: <PythonLogo className="w-5 h-5" />,
      desc: 'Perform data wrangling with NumPy and Pandas, exploratory visualization with Matplotlib and Seaborn, and baseline predictive workflows with scikit-learn.',
      tools: ['NumPy', 'Pandas', 'Matplotlib & Seaborn', 'EDA Workflows'],
    },
    {
      num: '03',
      title: 'AWS Cloud Architecture',
      focus: 'Enterprise Infrastructure',
      icon: <Cloud className="w-5 h-5 text-[#00D2FF]" />,
      logo: <AwsLogo className="w-6 h-4" />,
      desc: 'Provisioning multi-tier cloud infrastructure: EC2 compute, S3 object storage, IAM security policies, VPC networking, RDS databases, and CloudWatch telemetry.',
      tools: ['VPC & Subnets', 'EC2 & Auto Scaling', 'RDS Multi-AZ', 'S3 & IAM'],
    },
    {
      num: '04',
      title: 'DevOps & CI/CD Automation',
      focus: 'Container Orchestration',
      icon: <GitBranch className="w-5 h-5 text-[#00D2FF]" />,
      logo: <JenkinsLogo className="w-5 h-5" />,
      desc: 'Linux administration, Git version control, Docker containerization, Kubernetes cluster orchestration, Jenkins automated build pipelines, and Grafana monitoring.',
      tools: ['Docker', 'Kubernetes', 'Jenkins CI/CD', 'Linux & Git'],
    },
    {
      num: '05',
      title: 'ServiceNow Platform Administration',
      focus: 'ITSM Workflows',
      icon: <Layers className="w-5 h-5 text-[#19BCE8]" />,
      logo: <ServiceNowLogo className="w-5 h-5" />,
      desc: 'Enterprise ITSM fundamentals, Incident, Problem, and Change Management, Flow Designer workflow automation, and Service Catalog administration.',
      tools: ['ITSM Fundamentals', 'Flow Designer', 'Incident Management', 'Service Catalog'],
    },
  ];

  // Cloud & DevOps Tech Stack
  const techStack = [
    { name: 'AWS Cloud', category: 'Infrastructure', logo: <AwsLogo className="w-5 h-5" /> },
    { name: 'Docker', category: 'Containers', logo: <DockerLogo className="w-5 h-5" /> },
    { name: 'Kubernetes', category: 'Orchestration', logo: <KubernetesLogo className="w-5 h-5" /> },
    { name: 'Jenkins', category: 'CI/CD Pipelines', logo: <JenkinsLogo className="w-5 h-5" /> },
    { name: 'Python', category: 'Core Scripting', logo: <PythonLogo className="w-5 h-5" /> },
    { name: 'ServiceNow', category: 'Enterprise ITSM', logo: <ServiceNowLogo className="w-5 h-5" /> },
    { name: 'GitHub', category: 'Version Control', logo: <GitHubLogo className="w-5 h-5" /> },
    { name: 'Grafana', category: 'Observability', logo: <GrafanaLogo className="w-5 h-5" /> },
  ];

  return (
    <div className="pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION — EDITORIAL INTEGRATED ATMOSPHERE                         */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-5 pb-8 sm:pt-10 sm:pb-14 lg:pt-16 lg:pb-20 bg-gradient-atmospheric">
        {/* Continuous Full-Bleed Atmospheric Artwork Layer (Desktop & Tablet) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
        >
          {/* Ambient color glow matching course theme */}
          <div
            className="absolute top-1/4 right-[15%] w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none opacity-20"
            style={{ backgroundColor: '#00D2FF' }}
          />

          {/* Continuous background image spanning across the hero */}
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-[position:82%_center] opacity-95 transition-transform duration-1000 ease-out"
            style={{
              backgroundImage: 'url(/brand/hero/banner_crpc_v4.jpg)',
            }}
          />

          {/* Seamless natural edge blending across the entire section into #020817 */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#020817] via-[#020817]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#020817]/60 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-[#00D2FF] transition-colors mb-2.5 sm:mb-4 group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>All Programs</span>
          </Link>

          <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl space-y-3 sm:space-y-4 relative">
            {/* Transparent graduated black fade behind content — Strict max 40% opacity (#000000) */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-8 sm:-inset-x-12 lg:-inset-x-16 -inset-y-6 sm:-inset-y-10 pointer-events-none select-none -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 120% 100% at 28% 42%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.15) 75%, transparent 100%)',
              }}
            />

            {/* Typographic Eyebrow */}
            <div className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.18em] text-slate-400">
              Flagship Cloud Engineering Track
            </div>

            {/* Course Title — Clear starting point */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-[1.14] font-heading drop-shadow-sm">
              Cloud Ready Professional Curriculum{' '}
              <span className="text-gradient-tech block sm:inline mt-0.5 sm:mt-0">(CRPC)</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-base text-slate-200 font-normal leading-relaxed drop-shadow-xs max-w-2xl">
              A structured 12-week career transformation journey across Python scripting, AWS Cloud architecture, Docker &amp; Kubernetes containerization, and ServiceNow enterprise workflows.
            </p>

            {/* Mobile Integrated Visual — Shorter cinematic crop feathered naturally into canvas */}
            <div className="lg:hidden relative w-full my-2.5 sm:my-3 overflow-hidden pointer-events-none rounded-xl">
              <div className="relative w-full h-28 sm:h-36">
                <img
                  src="/brand/hero/banner_crpc_v4.jpg"
                  alt="Cloud Ready Professional Curriculum Infrastructure"
                  className="w-full h-full object-cover object-[85%_35%]"
                  style={{
                    maskImage:
                      'radial-gradient(ellipse 95% 85% at 50% 50%, black 65%, transparent 100%)',
                    WebkitMaskImage:
                      'radial-gradient(ellipse 95% 85% at 50% 50%, black 65%, transparent 100%)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35 pointer-events-none" />
              </div>
            </div>

            {/* Essential Program Facts — Natural, low-chrome integrated layout */}
            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 text-xs sm:text-sm text-slate-300 py-1">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>12 Weeks · Live Online</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>5 Core Disciplines</span>
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-3.5 h-3.5 text-[#00E599] shrink-0" />
                <span className="text-slate-100 font-semibold">100% Placement Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <Laptop className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                <span>Weekend &amp; Evening Sessions</span>
              </div>
            </div>

            {/* Primary Action Row — Side by side on mobile & desktop */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3 pt-1.5 sm:pt-2">
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-[#0878E8] hover:bg-[#0768ca] text-white shadow-md shadow-blue-500/20 transition-all duration-200 cursor-pointer min-h-[40px] sm:min-h-[44px]"
              >
                <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">View Curriculum</span>
              </button>

              <Button
                to="/contact"
                variant="outline"
                size="md"
                className="text-white border-[#19BCE8]/40 hover:bg-[#19BCE8]/15 min-h-[40px] sm:min-h-[44px] justify-center text-xs sm:text-sm px-3 sm:px-5"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Movement — soft floating ribbon without hard edges */}
      <div
        className="relative w-full overflow-hidden py-3.5 sm:py-5 [mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_20%,black_80%,transparent_100%)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none -z-10"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(7, 26, 70, 0.35) 0%, transparent 100%)',
          }}
        />
        <TechMarqueeRibbon />
      </div>

      {/* Main Editorial Content Flow */}
      <div className="mt-8 sm:mt-12 lg:mt-16 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* ========================================================================= */}
        {/* 2. CURRICULUM PROGRESSION — OPEN EDITORIAL LEARNING TIMELINE               */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-8 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(2, 6, 23, 0.38) 0%, rgba(2, 6, 23, 0.16) 60%, transparent 100%)',
          }}
        />

        {/* Natural Editorial Heading */}
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
            Five Core Disciplines of Modern Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            A systematic learning journey engineered to turn foundational scripting and system administration into demonstrable cloud engineering capability.
          </p>
        </div>

        {/* Connected Vertical Timeline */}
        <div className="relative pl-7 sm:pl-10 space-y-8 sm:space-y-10">
          {/* Continuous vertical timeline guideline */}
          <div
            aria-hidden="true"
            className="absolute left-[13px] sm:left-[17px] top-3 bottom-6 w-px bg-gradient-to-b from-[#00D2FF]/60 via-[#0878E8]/30 via-60% to-transparent pointer-events-none"
          />

          {curriculumStages.map((stage) => (
            <div key={stage.num} className="group relative">
              {/* Connected Timeline Marker */}
              <div className="absolute -left-[28px] sm:-left-[40px] top-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#020817] border border-[#00D2FF]/40 group-hover:border-[#00D2FF] group-hover:scale-110 flex items-center justify-center font-mono text-xs font-bold text-[#00D2FF] shadow-sm shadow-[#00D2FF]/20 transition-all duration-300 z-10">
                {stage.num}
              </div>

              {/* Stage Body — Open editorial presentation directly on canvas */}
              <div className="space-y-2 pb-6 sm:pb-8 border-b border-white/[0.06] last:border-b-0 last:pb-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-xs font-black text-[#00D2FF] tracking-wider">
                    PHASE {stage.num}
                  </span>
                  <span className="text-slate-600 select-none">·</span>
                  <span className="text-xs font-mono text-slate-400">
                    {stage.focus}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors font-heading">
                  {stage.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-3xl">
                  {stage.desc}
                </p>

                {/* Inline Lightweight Technology Tags */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2">
                  {stage.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] sm:text-xs font-mono px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CAPSTONE & ADVANCED FLAGSHIP PROJECTS                                  */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-8 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 85% 75% at 50% 50%, rgba(2, 6, 23, 0.45) 0%, rgba(2, 6, 23, 0.18) 60%, transparent 100%)',
          }}
        />

        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
            Four Documented Flagship Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Engineered to provide defensible engineering artifacts for technical interviews and professional positioning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CRPC_PROJECTS.map((p) => (
            <div
              key={p.id}
              className="pt-5 border-t border-white/[0.08] flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-semibold text-[#00D2FF]">
                    {p.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    Project {p.tag}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00D2FF] transition-colors font-heading">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {p.description}
                </p>
                <div className="space-y-1.5 pt-1.5">
                  <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                    Verified Deliverables:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {p.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599] shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2.5 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                {p.coreTools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNOLOGY ECOSYSTEM                                                   */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5 sm:space-y-6 relative">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
            Enterprise Tools &amp; Cloud Platforms
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Built on industry-standard platforms used across global enterprise engineering teams.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-[#00D2FF]/30 transition-all flex items-center gap-3 group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 p-1.5 sm:p-2">
                {tech.logo}
              </div>
              <div className="min-w-0">
                <div className="text-xs sm:text-sm font-bold text-white truncate font-heading group-hover:text-[#00D2FF] transition-colors">
                  {tech.name}
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">
                  {tech.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. VIRTUAL COMPANY SESSIONS & CAREER PREPARATION                          */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-2 sm:pt-4">
        {/* Atmospheric soft readability fade — gradual transition with no hard edges */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -inset-y-10 pointer-events-none -z-10"
          style={{
            background:
              'radial-gradient(ellipse 90% 75% at 50% 50%, rgba(2, 6, 23, 0.45) 0%, rgba(2, 6, 23, 0.15) 70%, transparent 100%)',
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Editorial Column: Direct Industry Exposure & Top-5 Pathway */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#00D2FF]" />
              <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                Direct Industry Integration
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight leading-snug">
              Virtual Company Sessions with Vizag Tech Corridor Practitioners
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Direct exposure to how professional cloud infrastructure and DevOps teams operate in enterprise environments. Students interact with practicing engineers from technology firms operating out of Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
            </p>

            {/* Top-5 Internship Pathway: Restrained divider-led detail (no nested box) */}
            <div className="pt-2 sm:pt-3 border-l-2 border-[#00D2FF]/60 pl-4 sm:pl-5 space-y-1">
              <div className="text-xs font-mono font-bold text-white tracking-wide uppercase">
                Top-5 Internship Pathway
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Top 5 performing students in each program group earn formal internship interview eligibility with participating regional technology teams.
              </p>
            </div>
          </div>

          {/* Right Editorial Column: Career Strategy Circuits & Program Actions */}
          <div className="lg:col-span-5 space-y-5 pt-2 lg:pt-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>Career Support Circuit</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                Weekend Career Strategy Circuits
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Saturday ATS resume audits and GitHub portfolio positioning, followed by Sunday live mock interviews with technical panels.
              </p>
            </div>

            {/* Seamless Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-3 pt-1">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="justify-center min-h-[42px] sm:min-h-[44px]"
              >
                Apply for the Program
              </Button>
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer min-h-[42px] sm:min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>Download Syllabus (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
