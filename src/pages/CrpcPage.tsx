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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { CrpcHeroCard } from '@/components/curriculum/CrpcHeroCard';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import {
  AwsLogo,
  JenkinsLogo,
  PythonLogo,
  ServiceNowLogo,
} from '@/components/icons/TechLogos';

export const CrpcPage: React.FC = () => {
  const { openCurriculum } = useCurriculumModal();

  // Core Technology Areas
  const coreTechAreas = [
    {
      title: 'Python Scripting & Core OOP',
      icon: <Terminal className="w-5 h-5 text-brand-blue" />,
      logo: <PythonLogo className="w-5 h-5" />,
      desc: 'Master syntax, control structures, object-oriented design, and automation scripts that serve as the backbone for modern cloud tooling and data processing.',
    },
    {
      title: 'Data Science Essentials',
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
      logo: <PythonLogo className="w-5 h-5" />,
      desc: 'Data wrangling with NumPy and Pandas, exploratory visualization with Matplotlib and Seaborn, and baseline predictive models with scikit-learn.',
    },
    {
      title: 'AWS Cloud Architecture',
      icon: <Cloud className="w-5 h-5 text-brand-blue" />,
      logo: <AwsLogo className="w-6 h-4" />,
      desc: 'Provisioning multi-tier cloud infrastructure: EC2 compute, S3 storage, IAM security policies, VPC networking, RDS databases, and CloudWatch monitoring.',
    },
    {
      title: 'DevOps & CI/CD Automation',
      icon: <GitBranch className="w-5 h-5 text-brand-blue" />,
      logo: <JenkinsLogo className="w-5 h-5" />,
      desc: 'Linux administration, Git version control, Docker containerization, Kubernetes clusters, Jenkins automated build pipelines, and Grafana monitoring.',
    },
    {
      title: 'ServiceNow Platform Administration',
      icon: <Layers className="w-5 h-5 text-brand-blue" />,
      logo: <ServiceNowLogo className="w-5 h-5" />,
      desc: 'Enterprise ITSM fundamentals, Incident, Problem, and Change Management, Flow Designer workflow automation, and Service Catalog administration.',
    },
  ];

  return (
    <div className="space-y-10 lg:space-y-14 pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH LAYERED CLOUD ARCHITECTURE CANVAS */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-6 pb-10 md:pt-10 md:pb-14 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>All Programs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0878E8]/20 border border-[#19BCE8]/40 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-[#19BCE8] animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-[#19BCE8] uppercase font-heading">
                  FLAGSHIP ENGINEERING TRACK
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] font-heading">
                Cloud Ready Professional Curriculum{' '}
                <span className="text-gradient-tech block mt-1">(CRPC)</span>
              </h1>

              <p className="text-base sm:text-lg text-[#E5EAF3] font-normal leading-relaxed max-w-2xl">
                A structured 12-week career transformation journey spanning Python scripting, Data Science essentials, AWS Cloud architecture, Docker & Kubernetes containerization, and ServiceNow enterprise workflows.
              </p>

              {/* Badges strip */}
              <div className="flex flex-wrap gap-2.5 text-xs font-bold text-white">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/30 shadow-subtle">
                  <Clock className="w-4 h-4 text-[#19BCE8]" />
                  <span>12 Weeks (3 Months)</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/30 shadow-subtle">
                  <BookOpen className="w-4 h-4 text-[#19BCE8]" />
                  <span>6 Comprehensive Stages</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#05143A]/90 border border-[#19BCE8]/30 shadow-subtle">
                  <Laptop className="w-4 h-4 text-[#19BCE8]" />
                  <span>100% Online · Live Interactive</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openCurriculum('crpc')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-extrabold bg-[#0878E8] text-white hover:bg-[#0768ca] shadow-subtle transition-all duration-200 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Curriculum (PDF)</span>
                </button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  className="text-white border-[#19BCE8]/40 hover:bg-[#19BCE8]/20"
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* Right: Technical Cloud & Infrastructure Canvas */}
            <div className="lg:col-span-5">
              <CrpcHeroCard
                onOpenCurriculum={() => openCurriculum('crpc')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ribbon Movement */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 2. CORE TECHNOLOGY PILLARS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Curriculum Pillars"
          title="Five Core Disciplines of Modern Infrastructure"
          subtitle="Everything in CRPC is engineered to turn abstract system administration concepts into demonstrable cloud engineering competence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreTechAreas.map((area, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#081F54]/90 via-[#061540]/95 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/25 p-5 sm:p-5.5 shadow-xl hover:shadow-[0_16px_36px_rgba(8,120,232,0.25)] hover:border-[#19BCE8]/60 transition-all duration-300 space-y-3.5 flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0878E8]/20 flex items-center justify-center border border-[#19BCE8]/40 text-[#19BCE8]">
                    {area.icon}
                  </div>
                  <div className="p-1.5 rounded-lg bg-white/95 border border-white/80 shadow-sm">
                    {area.logo}
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-normal">
                  {area.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/10 text-[11px] font-bold text-[#19BCE8]">
                Verified Lab Exercises Included
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DOCUMENTED HANDS-ON PROJECTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <SectionHeading
          eyebrow="Demonstrated Capability"
          title="Documented Capstone & Advanced Flagship Projects"
          subtitle="Four advanced flagship projects spanning enterprise RAG knowledge agents, tool-using data agents, multi-agent workflows, and AI-assisted DevOps incident response."
        />

        <ProjectsVisual initialTab="crpc" />
      </section>

      {/* ========================================================================= */}
      {/* 5. VIRTUAL COMPANY SESSIONS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#081F54]/95 via-[#061540]/98 to-[#030E2B]/98 backdrop-blur-xl border border-[#19BCE8]/30 shadow-2xl p-5 sm:p-7 lg:p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0878E8]/20 border border-[#19BCE8]/40">
                <Users className="w-4 h-4 text-[#19BCE8]" />
                <span className="text-xs font-bold text-[#19BCE8] uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-heading">
                Virtual Company Sessions with Vizag Tech Corridor Practitioners
              </h2>

              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-normal">
                Direct exposure to how professional cloud infrastructure and DevOps teams function in enterprise settings. Students interact with practicing engineers from technology firms operating out of Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
              </p>

              <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#05143A]/90 to-[#030E28]/90 border border-[#19BCE8]/25 text-xs text-[#CBD5E1] leading-relaxed">
                <strong className="text-white font-bold">Top-5 Cohort Internship Pathway:</strong> Top 5 performing students in each cohort earn formal internship interview eligibility with participating regional technology teams.
              </div>
            </div>

            <div className="lg:col-span-4 bg-gradient-to-b from-[#0A2364]/92 via-[#061746]/92 to-[#040E2D]/92 rounded-2xl p-5 sm:p-6 border border-[#19BCE8]/35 text-center space-y-3.5 shadow-xl">
              <div className="w-12 h-12 rounded-2xl bg-[#0878E8] shadow-[0_0_20px_rgba(8,120,232,0.35)] flex items-center justify-center mx-auto text-white border border-[#19BCE8]/50">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white font-heading">
                  Weekend Career Strategy Circuits
                </h3>
                <p className="text-xs text-[#CBD5E1] leading-relaxed font-normal">
                  Saturday ATS resume audits and GitHub portfolio positioning, followed by Sunday live mock interviews with technical panels.
                </p>
              </div>
              <Button
                to="/contact"
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Apply for CRPC Cohort
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
