import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Tag,
  Check,
  Copy,
  Cloud,
  BarChart3,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { TechChip } from '@/components/ui/TechChip';
import { BRAND_DATA } from '@/data/brandData';

export const CoursesPage: React.FC = () => {
  const [copiedCoupon, setCopiedCoupon] = useState(false);

  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(BRAND_DATA.offer.couponCode);
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2200);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                CAREER ACCELERATOR PROGRAMS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Build Skills. Build Projects.{' '}
              <span className="text-gradient-tech">Build Your Career.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Explore Cloudariss programs designed around practical technology skills, hands-on projects, and career preparation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                to="/courses/crpc"
                variant="secondary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore CRPC
              </Button>
              <Button
                to="/courses/daap"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore DAAP
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROGRAM COMPARISON / DISCOVERY SECTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Choose Your Path"
          title="Two Specialized Accelerators. One Standard of Depth."
          subtitle="Both programs feature 12 weeks of live instruction, hands-on project artifacts, and integrated weekend career development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Card */}
          <Card
            variant="white"
            padding="lg"
            hoverEffect
            borderAccent="blue"
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Badge variant="blue" size="md">
                  {crpc.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  Cloud · Data · DevOps · Enterprise Technology
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Cloud & Data Career Accelerator
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Engineered for learners targeting infrastructure engineering, cloud operations, data engineering pipelines, and enterprise ITSM automation.
                </p>
              </div>

              {/* Core Technologies */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Data Science', 'AWS', 'DevOps', 'ServiceNow'].map((tech) => (
                    <TechChip key={tech} label={tech} />
                  ))}
                </div>
              </div>

              {/* Program Details Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">12 Weeks</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Curriculum</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">8 Modules</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Engineering</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">Real Projects</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Exposure</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">Virtual Company</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block line-through">
                  {BRAND_DATA.offer.originalPrice}
                </span>
                <span className="text-2xl font-extrabold text-brand-navy">
                  {BRAND_DATA.offer.offerPrice}
                </span>
              </div>
              <Button
                to="/courses/crpc"
                variant="secondary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Curriculum
              </Button>
            </div>
          </Card>

          {/* DAAP Card */}
          <Card
            variant="white"
            padding="lg"
            hoverEffect
            borderAccent="orange"
            className="flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <Badge variant="orange" size="md">
                  {daap.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  Data Analytics · BI · Generative AI · Agentic AI
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
                  Data Analyst Accelerator Program
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Engineered for aspiring data analysts, analytics engineers, and consultants seeking mastery over relational databases, modern BI, and AI-connected workflows.
                </p>
              </div>

              {/* Core Technologies */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Excel', 'SQL', 'Python', 'Power BI', 'Generative AI', 'Agentic AI'].map((tech) => (
                    <TechChip key={tech} label={tech} />
                  ))}
                </div>
              </div>

              {/* Program Details Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-center">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Duration</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">12 Weeks</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Practice</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">5+ Projects</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Capstone</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">1 Capstone</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-brand-border/60">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Readiness</div>
                  <div className="text-xs font-extrabold text-brand-navy mt-0.5">Career Support</div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-border flex items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block line-through">
                  {BRAND_DATA.offer.originalPrice}
                </span>
                <span className="text-2xl font-extrabold text-brand-navy">
                  {BRAND_DATA.offer.offerPrice}
                </span>
              </div>
              <Button
                to="/courses/daap"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Curriculum
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROGRAM DIFFERENTIATION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Program Differentiation"
          title="Finding the Right Technical Alignment"
          subtitle="Both programs deliver intensive, deployment-tested training tailored to distinct career pathways in technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* CRPC Focus Card */}
          <Card variant="surface" padding="lg" className="border border-brand-border space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                  CRPC Pathway
                </span>
                <h3 className="text-xl font-bold text-brand-navy">
                  Cloud, Data & Infrastructure
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Focuses on how technology runs, scales, and automates at the platform layer. You will learn to provision cloud infrastructure on AWS, build continuous integration pipelines, containerize applications, and manage enterprise workflows.
            </p>

            <div className="space-y-2 pt-2 border-t border-brand-border/60">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ideal For Learners Who Want To:
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Work with cloud servers, networks, and storage (AWS EC2, VPC, S3)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Automate deployments using Docker, Jenkins, and Linux scripts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>Manage enterprise IT services with ServiceNow platform workflows</span>
                </li>
              </ul>
            </div>
          </Card>

          {/* DAAP Focus Card */}
          <Card variant="surface" padding="lg" className="border border-brand-border space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  DAAP Pathway
                </span>
                <h3 className="text-xl font-bold text-brand-navy">
                  Data Analytics & AI
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Focuses on how business intelligence is extracted from raw data and augmented by artificial intelligence. You will learn to model relational datasets, design interactive visual dashboards, and deploy autonomous analytics agents.
            </p>

            <div className="space-y-2 pt-2 border-t border-brand-border/60">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ideal For Learners Who Want To:
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Query complex relational databases with SQL (joins, CTEs, window functions)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Build executive reporting dashboards using Power BI and DAX modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                  <span>Harness Generative AI, RAG systems, and autonomous agentic workflows</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LEARNING APPROACH */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Methodology"
          title="The Common Cloudariss Learning Journey"
          subtitle="Regardless of your specialization, every Cloudariss program follows a five-stage progressive architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'LEARN', sub: 'Structured knowledge', desc: 'Live foundational instruction breaking down concepts into accessible mental models.' },
            { step: '02', title: 'PRACTICE', sub: 'Hands-on experience', desc: 'Daily lab exercises, code walkthroughs, and sandbox environment troubleshooting.' },
            { step: '03', title: 'BUILD', sub: 'Real-world projects', desc: 'Constructing documented, portfolio-grade technical artifacts hosted on personal GitHub profiles.' },
            { step: '04', title: 'PREPARE', sub: 'Career readiness', desc: 'Compounding Saturday resume and LinkedIn audits with Sunday mock interview circuits.' },
            { step: '05', title: 'GET HIRED', sub: 'Career opportunities', desc: 'Strategic application roadmaps, virtual company sessions, and internship interview rounds.' },
          ].map((item) => (
            <Card key={item.step} variant="white" padding="md" className="border border-brand-border shadow-card space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xl font-extrabold font-mono text-brand-blue">{item.step}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
              </div>
              <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider">{item.title}</h4>
              <div className="text-xs font-semibold text-brand-blue">{item.sub}</div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CAREER SUPPORT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Integrated Support"
          title="Documented Career Support Framework"
          subtitle="Career skills compound alongside technical weeks to ensure learners articulate their knowledge with clarity and confidence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Resume Optimization', desc: 'ATS-compliant templates, action-verb quantification, and mock recruiter screenings.' },
            { title: 'LinkedIn Profile Building', desc: 'Strategic headline positioning, technical endorsements, and SSI score improvement.' },
            { title: 'Job Search Strategy', desc: 'Boolean search strings across portals, application tracking, and cold-outreach templates.' },
            { title: 'Mock Interviews', desc: 'Live technical drills, problem-solving explanations, and HR behavioral simulations.' },
            { title: 'Career Guidance', desc: 'Personalized 30-60-90 day job search plans, offer reading, and career ladder roadmaps.' },
            { title: 'Industry & Company Sessions', desc: 'Interactive live sessions with practitioners operating out of Rushikonda IT Park and VSEZ.' },
            { title: 'Placement Assistance', desc: 'Job referral playbooks, resume circulation, and formal interview rounds for top performers.' },
          ].map((item, i) => (
            <Card key={i} variant="surface" padding="md" className="border border-brand-border/80 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                <h3 className="text-base font-bold text-brand-navy">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OFFER CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border-2 border-brand-orange/40 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase border border-brand-orange/40">
            <Tag className="w-3.5 h-3.5" />
            <span>Admissions Campaign</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Vinayaka Chavithi Special Offer
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Enroll in either CRPC or DAAP during our festive intake with all-inclusive access to live classes, labs, and career support.
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
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Talk to Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
