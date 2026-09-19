import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  BookOpen,
  Laptop,
  CheckCircle2,
  Cloud,
  Terminal,
  Cpu,
  GitBranch,
  Layers,
  Users,
  Tag,
  Check,
  Copy,
  PhoneCall,
  FileText,
  Download,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import { CrpcCurriculumJourney } from '@/components/curriculum/CrpcCurriculumJourney';
import { ProjectsVisual } from '@/components/home/ProjectsVisual';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
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
      icon: <Terminal className="w-6 h-6 text-brand-blue" />,
      logo: <PythonLogo className="w-5 h-5" />,
      desc: 'Master fundamentals, data structures, object-oriented design, and automation scripts that serve as the backbone for modern cloud tooling and data processing.',
    },
    {
      title: 'Data Science Essentials',
      icon: <Cpu className="w-6 h-6 text-brand-blue" />,
      logo: <PythonLogo className="w-5 h-5" />,
      desc: 'Data wrangling with NumPy and Pandas, exploratory visualization with Matplotlib and Seaborn, and baseline predictive models with scikit-learn.',
    },
    {
      title: 'AWS Cloud Architecture',
      icon: <Cloud className="w-6 h-6 text-brand-blue" />,
      logo: <AwsLogo className="w-6 h-4" />,
      desc: 'Provisioning multi-tier cloud infrastructure: EC2 compute, S3 storage, IAM security policies, VPC networking, RDS databases, and CloudWatch.',
    },
    {
      title: 'DevOps & CI/CD Automation',
      icon: <GitBranch className="w-6 h-6 text-brand-blue" />,
      logo: <JenkinsLogo className="w-5 h-5" />,
      desc: 'Linux administration, Git version control, Docker containerization, Kubernetes clusters, Jenkins automated build pipelines, and Grafana monitoring.',
    },
    {
      title: 'ServiceNow Platform Administration',
      icon: <Layers className="w-6 h-6 text-brand-blue" />,
      logo: <ServiceNowLogo className="w-5 h-5" />,
      desc: 'Enterprise ITSM fundamentals, Incident, Problem, and Change Management, Flow Designer workflow automation, Service Catalog design, and REST APIs.',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION WITH RICH BROCHURE VISUALS */}
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
                A complete 4-month career transformation journey spanning Python scripting, Data Science essentials, AWS Cloud architecture, Docker & Kubernetes containerization, and ServiceNow enterprise workflows.
              </p>

              {/* Badges strip */}
              <div className="flex flex-wrap gap-4 text-xs font-bold text-brand-navy">
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

              {/* Technology logos strip */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-brand-border/80 shadow-subtle overflow-x-auto">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0">
                  Stack:
                </span>
                <div className="flex items-center gap-4 shrink-0">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                    <AwsLogo className="w-5 h-3" /> AWS
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                    <DockerLogo className="w-4 h-4" /> Docker
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                    <KubernetesLogo className="w-4 h-4" /> Kubernetes
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                    <JenkinsLogo className="w-4 h-4" /> Jenkins
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                    <PythonLogo className="w-4 h-4" /> Python
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-brand-navy">
                    <ServiceNowLogo className="w-4 h-4" /> ServiceNow
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => openCurriculum('crpc')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold bg-brand-blue text-white hover:bg-brand-blue-hover shadow-subtle transition-all duration-200 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Curriculum (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={handleScrollToCurriculum}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-white text-slate-700 hover:text-brand-navy hover:bg-slate-50 border border-brand-border transition-colors cursor-pointer"
                >
                  <span>Interactive Path</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Enroll Now
                </Button>
              </div>
            </div>

            {/* Right Visual Panel with Authentic Brochure Graphic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-card border-2 border-brand-border/80 bg-brand-navy group">
                <img
                  src="/brand/brochures/crpc-brochure.jpg"
                  alt="CRPC Course Reference Banner"
                  className="w-full h-[440px] sm:h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent" />

                {/* Floating highlight pills */}
                <div className="absolute bottom-6 left-6 right-6 space-y-3 z-10">
                  <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-card space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-brand-blue">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
                        Virtual Company Sessions
                      </span>
                      <span className="text-slate-500">Vizag IT Park Model</span>
                    </div>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">
                      Learners participate in simulated company sprint standups, code reviews, and enterprise incident response drills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE TECHNOLOGY PILLARS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Technical Curriculum"
          title="Five Core Technology Pillars"
          subtitle="A carefully sequenced learning path balancing programming depth, cloud infrastructure, container automation, and enterprise operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTechAreas.map((area, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-brand-border shadow-subtle hover:shadow-card transition-all duration-200 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-surface-blue text-brand-blue flex items-center justify-center border border-brand-blue/20">
                  {area.icon}
                </div>
                <div className="p-2 rounded-lg bg-slate-50 border border-brand-border/60">
                  {area.logo}
                </div>
              </div>

              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-blue">
                  Pillar 0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-brand-navy font-heading mt-0.5">
                  {area.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE VISUAL CURRICULUM JOURNEY */}
      {/* ========================================================================= */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-24">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Interactive Roadmap"
            title="CRPC Visual Curriculum Journey"
            subtitle="Explore the 6 connected phases of CRPC. Click any stage to inspect the specific skills and learning outcomes."
          />

          <button
            type="button"
            onClick={() => openCurriculum('crpc')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-brand-surface-blue text-brand-blue hover:bg-brand-blue hover:text-white border border-brand-blue/30 shadow-subtle transition-all duration-200 shrink-0 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download Official PDF</span>
          </button>
        </div>

        <CrpcCurriculumJourney />
      </section>

      {/* ========================================================================= */}
      {/* 4. VISUAL PROJECT SHOWCASE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Portfolio Artifacts"
          title="Documented Production Projects"
          subtitle="Every project is built, containerized, deployed, and documented on personal GitHub repositories."
        />

        <ProjectsVisual initialTab="crpc" />
      </section>

      {/* ========================================================================= */}
      {/* 5. VIRTUAL COMPANY SESSIONS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-brand-border shadow-card relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface-blue text-brand-blue text-xs font-extrabold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Industry Exposure</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy font-heading">
                Virtual Company Sessions: Rushikonda IT Park Exposure
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
                Bridge the gap between academic theory and day-to-day enterprise operations. During CRPC, learners participate in live virtual company environments modeled after technology firms in Visakhapatnam’s Rushikonda IT Park and VSEZ corridors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Daily standup simulation drills',
                  'Git branch code reviews',
                  'Cloud infrastructure cost auditing',
                  'Incident triage & post-mortems',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-navy">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <img
                src="/brand/brochures/aws-devops.jpg"
                alt="AWS DevOps Engineer in Office"
                className="w-full h-80 rounded-2xl object-cover object-top shadow-subtle border border-brand-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OFFER CALLOUT SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-dark-section border-2 border-brand-orange/40 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase border border-brand-orange/40">
            <Tag className="w-3.5 h-3.5" />
            <span>CRPC Cohort Intake</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Vinayaka Chavithi Special Offer
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Lock in limited-time promotional pricing for the upcoming CRPC live cohort. All-inclusive access to live instruction, labs, projects, and career circuit.
          </p>

          <div className="flex items-center justify-center gap-4 py-2">
            <span className="text-2xl sm:text-3xl text-slate-400 line-through font-semibold">
              {BRAND_DATA.offer.originalPrice}
            </span>
            <span className="text-xl sm:text-2xl text-brand-orange font-bold">→</span>
            <span className="text-4xl sm:text-5xl font-extrabold text-white">
              {BRAND_DATA.offer.offerPrice}
            </span>
          </div>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-brand-dark-surface p-3 sm:px-6 rounded-xl border border-brand-orange/40 shadow-inner">
            <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">
              Coupon Code:
            </span>
            <code className="text-lg font-mono font-extrabold text-brand-cyan tracking-wider">
              {BRAND_DATA.offer.couponCode}
            </code>
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-blue/40 hover:bg-brand-blue/60 text-xs font-semibold text-white transition-colors cursor-pointer"
              title="Copy coupon code"
            >
              {copiedCoupon ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Enroll in CRPC
            </Button>
            <Button
              href={BRAND_DATA.phone1Tel}
              variant="outline"
              size="lg"
              leftIcon={<PhoneCall className="w-4 h-4" />}
              className="text-white border-white/40 hover:bg-white/10"
            >
              Talk to Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
