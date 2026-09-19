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
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BRAND_DATA } from '@/data/brandData';

export const CrpcPage: React.FC = () => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

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
      desc: 'Master fundamentals, data structures, object-oriented design, and automation scripts that serve as the backbone for modern cloud tooling and data processing.',
    },
    {
      title: 'Data Science Essentials',
      icon: <Cpu className="w-6 h-6 text-brand-blue" />,
      desc: 'Data wrangling with NumPy and Pandas, exploratory visualization with Matplotlib and Seaborn, and baseline predictive models with scikit-learn.',
    },
    {
      title: 'AWS Cloud Architecture',
      icon: <Cloud className="w-6 h-6 text-brand-blue" />,
      desc: 'Provisioning multi-tier cloud infrastructure: EC2 compute, S3 storage, IAM security policies, VPC networking, RDS databases, Lambda serverless, and CloudWatch.',
    },
    {
      title: 'DevOps & CI/CD Automation',
      icon: <GitBranch className="w-6 h-6 text-brand-blue" />,
      desc: 'Linux administration, Git version control, Docker containerization, Jenkins automated build pipelines, and system monitoring via Prometheus & Grafana.',
    },
    {
      title: 'ServiceNow Platform Administration',
      icon: <Layers className="w-6 h-6 text-brand-blue" />,
      desc: 'Enterprise ITSM fundamentals, Incident, Problem, and Change Management, Flow Designer workflow automation, Service Catalog design, and REST APIs.',
    },
  ];

  // Learning Structure (Progression)
  const learningProgression = [
    {
      phase: '01',
      title: 'Foundation',
      desc: 'Program onboarding, VS Code environment setup, and fundamental Python programming constructs.',
    },
    {
      phase: '02',
      title: 'Practice',
      desc: 'Data structures, file operations, OOP inheritance, and daily hands-on coding exercises.',
    },
    {
      phase: '03',
      title: 'Projects',
      desc: 'NumPy array operations, Pandas DataFrames, data cleaning, and an end-to-end Exploratory Data Analysis project.',
    },
    {
      phase: '04',
      title: 'Cloud & DevOps',
      desc: 'AWS infrastructure provisioning, Linux shell scripting, Docker packaging, and automated Jenkins CI/CD pipelines.',
    },
    {
      phase: '05',
      title: 'Enterprise Technology',
      desc: 'ServiceNow ITSM configuration, business rules, automated workflows, and system observability with Grafana.',
    },
    {
      phase: '06',
      title: 'Career Preparation',
      desc: 'Final multi-tier capstone presentation, ATS resume refinement, and simulated technical interview circuits.',
    },
  ];

  // Documented CRPC Projects
  const crpcProjects = [
    {
      title: 'Data / EDA Project',
      technologies: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
      desc: 'End-to-end data processing workflow utilizing real datasets to clean, transform, visualize, and generate structured analytical reports.',
    },
    {
      title: 'AWS Application Deployment',
      technologies: ['AWS EC2', 'RDS MySQL', 'ALB', 'VPC', 'IAM'],
      desc: 'Deployment of a three-tier web application across public and private subnets, secured behind an Application Load Balancer with managed MySQL storage.',
    },
    {
      title: 'DevOps CI/CD Project',
      technologies: ['Docker', 'Jenkins', 'GitHub Webhooks', 'Linux'],
      desc: 'Automated continuous integration pipeline that pulls code from GitHub upon commit, triggers Jenkins builds, packages Docker containers, and deploys to EC2.',
    },
    {
      title: 'Enterprise Integration Capstone',
      technologies: ['AWS Cloud', 'ServiceNow', 'Prometheus', 'Grafana'],
      desc: 'Production-style infrastructure setup with centralized metrics monitoring, automated alert triggers, and ServiceNow incident workflow integration.',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-navy mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Programs</span>
          </Link>

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                CLOUD & DATA CAREER ACCELERATOR
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.12]">
              Build Your Foundation in{' '}
              <span className="text-gradient-tech">Cloud, Data & Enterprise Technology.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed">
              CRPC brings together practical learning across Python, Data Science, AWS, DevOps, and ServiceNow.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                leftIcon={<PhoneCall className="w-4 h-4" />}
              >
                Talk to Us
              </Button>
              <Button
                href="#curriculum"
                onClick={handleScrollToCurriculum}
                variant="outline"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROGRAM SNAPSHOT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card variant="surface" padding="md" className="border border-brand-border space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-blue/15 text-brand-blue flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Duration</div>
            <div className="text-xl font-extrabold text-brand-navy">12 Weeks</div>
            <div className="text-xs text-slate-500">3-Month structured cohort</div>
          </Card>

          <Card variant="surface" padding="md" className="border border-brand-border space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-blue/15 text-brand-blue flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Structure</div>
            <div className="text-xl font-extrabold text-brand-navy">8 Modules</div>
            <div className="text-xs text-slate-500">Progressive technical units</div>
          </Card>

          <Card variant="surface" padding="md" className="border border-brand-border space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-blue/15 text-brand-blue flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Applied Work</div>
            <div className="text-xl font-extrabold text-brand-navy">Real Projects</div>
            <div className="text-xs text-slate-500">Live infrastructure labs</div>
          </Card>

          <Card variant="surface" padding="md" className="border border-brand-border space-y-2">
            <div className="w-10 h-10 rounded-lg bg-brand-blue/15 text-brand-blue flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-xs uppercase font-bold text-slate-500 tracking-wider">Industry</div>
            <div className="text-xl font-extrabold text-brand-navy">Virtual Sessions</div>
            <div className="text-xs text-slate-500">Direct company exposure</div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CORE TECHNOLOGY AREAS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Core Technology Areas"
          title="Engineered for Platform Depth"
          subtitle="Five interconnected technical pillars structured to give you holistic competence across modern software systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreTechAreas.map((area, idx) => (
            <Card key={idx} variant="white" padding="lg" hoverEffect borderAccent="blue" className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                {area.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-navy">
                {area.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {area.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LEARNING STRUCTURE (PROGRESSION) */}
      {/* ========================================================================= */}
      <section id="curriculum" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <SectionHeading
          eyebrow="Learning Structure"
          title="A Structured 6-Stage Curriculum Roadmap"
          subtitle="Step-by-step technical progression taking complete beginners to deployment-ready systems engineers."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningProgression.map((item) => (
            <Card key={item.phase} variant="white" padding="md" className="border border-brand-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-brand-blue">{item.phase}</span>
                <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  Phase
                </span>
              </div>
              <h4 className="text-base font-bold text-brand-navy">
                {item.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. PROJECTS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Hands-On Projects"
          title="Documented Practical Project Builds"
          subtitle="Every project builds toward demonstrable competency in cloud provisioning, containerized pipelines, and enterprise automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {crpcProjects.map((project, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="lg"
              hoverEffect
              borderAccent="blue"
              className="flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-brand-blue">
                    PROJECT-0{idx + 1}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-xs font-semibold text-slate-500 uppercase">
                    CRPC Track
                  </span>
                </div>

                <h3 className="text-xl font-bold text-brand-navy">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Utilized
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-2.5 py-1 rounded bg-brand-surface-blue text-brand-navy border border-brand-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. VIRTUAL COMPANY SESSIONS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="surface" padding="lg" className="border border-brand-border">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold border border-brand-blue/20">
              <Users className="w-3.5 h-3.5" />
              <span>Industry Integration</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Virtual Company Sessions
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              Gain firsthand exposure to working software operations through live virtual sessions with practicing engineers from firms operating out of Rushikonda IT Park and VSEZ. Sessions include architecture walkthroughs, professional workflow observations, and an online evaluation pathway where top-performing students present capstones to partner company evaluators.
            </p>
          </div>
        </Card>
      </section>

      {/* ========================================================================= */}
      {/* 7. CAREER PREPARATION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Career Preparation"
          title="Structured Interview & Placement Assistance"
          subtitle="Systematic weekend sessions running alongside technical weeks to ensure learners present their technical competence with conviction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Resume Optimization', desc: 'DevOps and cloud-specific resume formatting, quantifiable metrics, and ATS score testing.' },
            { title: 'LinkedIn Profile Building', desc: 'Technical headline refinement, GitHub repository showcasing, and recruiter outreach strategy.' },
            { title: 'Job Search Strategy', desc: 'Boolean search strings across portals, application tracker setup, and cold-emailing playbooks.' },
            { title: 'Mock Interviews', desc: 'Live scenario-based architecture questions, Linux CLI troubleshooting, and peer technical reviews.' },
            { title: 'Career Guidance', desc: 'Salary negotiation fundamentals, IT career ladder roadmaps, and 30-60-90 day job search plans.' },
            { title: 'Industry & Company Sessions', desc: 'Observing enterprise IT operations and Q&A sessions with practicing engineers.' },
            { title: 'Placement Assistance', desc: 'Job referral playbooks and formal internship interview selection for top 5 qualifying students.' },
          ].map((item, i) => (
            <Card key={i} variant="white" padding="md" className="border border-brand-border space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <h4 className="text-base font-bold text-brand-navy">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. CRPC OFFER CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border-2 border-brand-blue/50 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase border border-brand-orange/40">
            <Tag className="w-3.5 h-3.5" />
            <span>Admissions Campaign</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vinayaka Chavithi Special Offer
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Enroll in the CRPC Cloud & Data Career Accelerator during our festive intake and receive full access to all 8 modules, labs, and career sessions.
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
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-brand-blue/40 hover:bg-brand-blue/60 text-xs font-semibold text-white transition-colors"
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

          <div className="pt-2">
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              leftIcon={<PhoneCall className="w-4 h-4" />}
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
