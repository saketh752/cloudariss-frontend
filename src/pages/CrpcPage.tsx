import React, { useState } from 'react';
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
  Tag,
  Check,
  Copy,
  FileText,
  Download,
  ShieldCheck,
  Briefcase,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { CrpcCurriculumJourney } from '@/components/curriculum/CrpcCurriculumJourney';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import {
  AwsLogo,
  JenkinsLogo,
  PythonLogo,
  ServiceNowLogo,
} from '@/components/icons/TechLogos';

export const CrpcPage: React.FC = () => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const { openCurriculum } = useCurriculumModal();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(BRAND_DATA.offer.couponCode);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2200);
  };

  const handleScrollToCurriculum = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('curriculum');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH LAYERED CLOUD ARCHITECTURE CANVAS */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-20 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Back Link */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-500 hover:text-brand-blue transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>All Programs</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                  FLAGSHIP ENGINEERING TRACK
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15] font-heading">
                Cloud Ready Professional Curriculum{' '}
                <span className="text-gradient-tech block mt-1">(CRPC)</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                A structured 12-week career transformation journey spanning Python scripting, Data Science essentials, AWS Cloud architecture, Docker & Kubernetes containerization, and ServiceNow enterprise workflows.
              </p>

              {/* Badges strip */}
              <div className="flex flex-wrap gap-3 text-xs font-bold text-brand-navy">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-brand-border shadow-subtle">
                  <Clock className="w-4 h-4 text-brand-blue" />
                  <span>12 Weeks (3 Months)</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-brand-border shadow-subtle">
                  <BookOpen className="w-4 h-4 text-brand-blue" />
                  <span>6 Comprehensive Stages</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-brand-border shadow-subtle">
                  <Laptop className="w-4 h-4 text-brand-blue" />
                  <span>100% Online · Live Interactive</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openCurriculum('crpc')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold bg-brand-blue text-white hover:bg-brand-blue-hover shadow-subtle transition-all duration-200 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Curriculum (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToCurriculum}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white text-slate-700 hover:text-brand-navy hover:bg-slate-50 border border-brand-border transition-colors cursor-pointer"
                >
                  <span>Interactive Pathway</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* Right: Technical Cloud & Infrastructure Canvas */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white border border-brand-border shadow-card p-6 space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-brand-border/70 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-brand-navy uppercase">
                      CRPC Live Lab Environment
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-brand-blue px-2 py-0.5 rounded bg-brand-surface-blue border border-brand-blue/20">
                    AWS + K8s Stack
                  </span>
                </div>

                {/* Cloud Node 1 */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-border space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-navy">
                    <span className="flex items-center gap-1.5">
                      <Cloud className="w-4 h-4 text-brand-blue" />
                      AWS Multi-Tier VPC
                    </span>
                    <span className="text-[10px] text-emerald-600 font-mono">Status: 200 OK</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    Public ALB → EC2 Autoscaling (us-east-1) → RDS Multi-AZ
                  </div>
                </div>

                {/* Cloud Node 2: CI/CD Pipeline */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-border space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-navy">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-brand-orange" />
                      Jenkins Automated Pipeline
                    </span>
                    <span className="text-[10px] text-brand-blue font-mono">Build #48 Passed</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-600">
                    <span className="px-2 py-0.5 rounded bg-white border border-brand-border">Docker Build</span>
                    <span>→</span>
                    <span className="px-2 py-0.5 rounded bg-white border border-brand-border">K8s Rollout</span>
                    <span>→</span>
                    <span className="text-emerald-600 font-bold">Healthy</span>
                  </div>
                </div>

                {/* Cloud Node 3: ServiceNow ITSM */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-border space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-brand-navy">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-[#0a6680]" />
                      ServiceNow Platform Automation
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">CHG00201</span>
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    ITSM Incident Routing · Change Approval Workflow
                  </div>
                </div>

                {/* Footer Capstone Note */}
                <div className="pt-2 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 font-semibold text-brand-navy">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
                    Documented on GitHub
                  </span>
                  <button
                    type="button"
                    onClick={() => openCurriculum('crpc')}
                    className="text-brand-blue hover:underline font-bold"
                  >
                    Open Full PDF Schedule →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ribbon Movement */}
      <TechMarqueeRibbon />

      {/* ========================================================================= */}
      {/* 2. CORE TECHNOLOGY PILLARS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Curriculum Pillars"
          title="Five Core Disciplines of Modern Infrastructure"
          subtitle="Everything in CRPC is engineered to turn abstract system administration concepts into demonstrable cloud engineering competence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTechAreas.map((area, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white border border-brand-border/80 p-6 shadow-subtle hover:shadow-card hover:border-brand-blue/50 transition-all duration-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border text-brand-blue">
                    {area.icon}
                  </div>
                  <div className="p-1 rounded bg-slate-50 border border-brand-border/60">
                    {area.logo}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-brand-navy font-heading">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {area.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60 text-[11px] font-bold text-brand-blue">
                Verified Lab Exercises Included
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE 6-STAGE CURRICULUM JOURNEY */}
      {/* ========================================================================= */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Interactive Progression"
            title="Stage-by-Stage Learning Journey"
            subtitle="Click through each stage to inspect the specific skills, module topics, and practical outcomes."
          />
          <button
            type="button"
            onClick={() => openCurriculum('crpc')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-surface-blue text-brand-blue text-xs font-bold hover:bg-brand-blue hover:text-white border border-brand-blue/30 transition-colors shrink-0 cursor-pointer self-start md:self-auto"
          >
            <Download className="w-4 h-4" />
            <span>Download 3-Month PDF Schedule</span>
          </button>
        </div>

        <CrpcCurriculumJourney />
      </section>

      {/* ========================================================================= */}
      {/* 4. DOCUMENTED HANDS-ON PROJECTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Demonstrated Capability"
          title="Documented Capstone Projects"
          subtitle="Real cloud architectures and automated pipelines that demonstrate your technical capability to engineering hiring managers."
        />

        <ProjectsVisual initialTab="crpc" />
      </section>

      {/* ========================================================================= */}
      {/* 5. VIRTUAL COMPANY SESSIONS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white border border-brand-border shadow-card p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30">
                <Users className="w-4 h-4 text-brand-blue" />
                <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">
                  Direct Industry Integration
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-heading">
                Virtual Company Sessions with Vizag Tech Corridor Practitioners
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Direct exposure to how professional cloud infrastructure and DevOps teams function in enterprise settings. Students interact with practicing engineers from technology firms operating out of Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 text-xs text-slate-600 leading-relaxed">
                <strong className="text-brand-navy font-bold">Top-5 Cohort Internship Pathway:</strong> Top 5 performing students in each cohort earn formal internship interview eligibility with participating regional technology teams.
              </div>
            </div>

            <div className="lg:col-span-4 bg-brand-surface-blue/50 rounded-2xl p-6 border border-brand-border text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto text-brand-blue border border-brand-border">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-brand-navy font-heading">
                Weekend Career Strategy Circuits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Saturday ATS resume audits and GitHub portfolio positioning, followed by Sunday live mock interviews with technical panels.
              </p>
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
            Enroll in CRPC with full live instruction, cloud lab workstations, and placement coaching at ₹17,000 all-inclusive.
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
