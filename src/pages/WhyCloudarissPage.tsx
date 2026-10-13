import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MessageCircle,
  Award,
  ExternalLink,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TechMarqueeRibbon } from '@/components/ui/TechMarqueeRibbon';
import { RotatingBadges } from '@/components/credentials/RotatingBadges';
import { openWhatsApp, getGenericEnquiryMessage } from '@/utils/whatsapp';

export const WhyCloudarissPage: React.FC = () => {
  // Specific career support activities
  const careerActivities = [
    {
      title: 'Resume & ATS Optimization',
      desc: 'Restructuring projects with quantified business impact, clean technical vocabulary, ATS keyword tuning, and direct links to verifiable GitHub repositories.',
      badge: 'ATS Compliant',
    },
    {
      title: 'GitHub & Portfolio Presentation',
      desc: 'Auditing repository cleanliness, writing professional architectural READMEs, publishing deployment diagrams, and verifying live containerized demo endpoints.',
      badge: 'Proof of Code',
    },
    {
      title: 'Mock Interviews & Live Evaluations',
      desc: 'Simulated system design rounds, whiteboard architecture walkthroughs, timed coding questions, and behavioral HR drills with structured feedback loops.',
      badge: 'Rigorous Drills',
    },
    {
      title: 'Project Presentation & Defense',
      desc: 'Learning how to confidently explain engineering trade-offs, database normalization choices, CI/CD pipeline triggers, and cloud security boundaries to senior panelists.',
      badge: 'Interview Ready',
    },
  ];

  // Verifiable Portfolio Assets
  const portfolioAssets = [
    {
      domain: 'Cloud & Infrastructure',
      title: 'Multi-Tier Resilient AWS VPC',
      desc: 'Production cloud architecture featuring custom public/private subnets, EC2 auto-scaling groups, Application Load Balancers, and strict security groups.',
      deliverable: 'Terraform / AWS Console Architecture Blueprint',
    },
    {
      domain: 'DevOps & Automation',
      title: 'Automated Multi-Branch CI/CD',
      desc: 'Jenkins multi-stage pipeline automatically pulling GitHub commits, running unit tests, building Docker images, and deploying to a Kubernetes cluster.',
      deliverable: 'Jenkinsfile · Dockerfile · K8s Deployment YAMLs',
    },
    {
      domain: 'Data Analytics & BI',
      title: 'Executive BI Dashboard & DAX Model',
      desc: 'Relational PostgreSQL warehouse modeled into star schema, visualized through interactive Power BI executive dashboards with custom DAX calculations.',
      deliverable: 'SQL Schema · Power BI .pbix File · Executive Deck',
    },
    {
      domain: 'Production AI Systems',
      title: 'Enterprise RAG & Agentic Workflow',
      desc: 'Retrieval-Augmented Generation pipeline integrated with vector embeddings, PostgreSQL storage, and autonomous LangChain agent loops with human verification.',
      deliverable: 'Python Backend · API Endpoints · Vector Database',
    },
  ];

  // Official Credential Standards
  const credentialStandards = [
    {
      label: 'Unique Credential ID',
      desc: 'Every certificate is assigned a permanent alphanumeric verification code verifiable against Cloudariss graduation archives.',
    },
    {
      label: 'Curriculum Milestone Verification',
      desc: 'Confirms completed live lab hours, hands-on terminal milestones, and technical mentor project sign-offs.',
    },
    {
      label: 'LinkedIn One-Click Integration',
      desc: 'Directly embeddable to your LinkedIn profile under Licenses & Certifications with verifiable organizational issuer data.',
    },
    {
      label: 'Technical Portfolio Defense',
      desc: 'Accompanied by an architectural walkthrough summary that learners use to defend their work before technical hiring panels.',
    },
  ];

  return (
    <div className="pb-16 sm:pb-20">
      {/* ========================================================================= */}
      {/* SECTION A — EDITORIAL HERO (Art-Directed Single Atmospheric Composition)  */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-8 pb-10 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24 min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex flex-col justify-center">
        {/* Full-Bleed Atmospheric Background Layer (Zero Blur on Subject, Seamless Gradient Scrim) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden"
        >
          {/* Master Source Image — 100% Uncompressed, Crisp Hair and Workstation */}
          <div
            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-[position:75%_center] sm:bg-[position:70%_center] md:bg-[position:65%_center] lg:bg-[position:82%_center] transition-all duration-700 ease-out"
            style={{
              backgroundImage: 'url(/brand/hero/banner_brand_v3.jpg)',
            }}
          />

          {/* Gradual Natural Gradient Scrim — Seamlessly blends into #020817 canvas */}
          <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/85 via-45% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/90 via-55% to-transparent sm:hidden pointer-events-none" />

          {/* Top and Bottom Natural Edge Blending */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#020817] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#020817]/70 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-xl lg:max-w-xl xl:max-w-2xl space-y-4 sm:space-y-5 relative">
            {/* Subtle local black fade behind text — Strict max 35% opacity (#000000) */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 sm:-inset-x-8 -inset-y-6 sm:-inset-y-8 pointer-events-none select-none -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 110% 90% at 30% 45%, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.15) 60%, transparent 100%)',
              }}
            />

            {/* Headline — Balanced 2-line structure with restrained cyan accent */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.14] font-heading drop-shadow-sm">
              <span className="block text-white">Learn the concept.</span>
              <span className="block text-slate-200 mt-1 sm:mt-1.5 font-bold">
                Build the ability to <span className="text-[#00D2FF]">use it.</span>
              </span>
            </h1>

            {/* Concise Supporting Copy — Realistic, specific, applied engineering focus */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed">
              Most technology courses stop at passive lecture videos. At Cloudariss, learners build practical competence through mentor-led labs, guided terminal practice, and defensible capstone projects from week one.
            </p>

            {/* Prominent Supporting Benefit: 100% Placement Assistance */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200 pt-0.5 sm:pt-1">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                  100% <span className="text-[#00E599]">Placement Assistance</span>
                </span>
                <span className="text-slate-400 text-xs sm:text-sm">· Continuous interview prep &amp; referral network</span>
              </div>
            </div>

            {/* Distinct CTA Hierarchy: Primary Explore Programs, Secondary Talk to Advisor, Subtle WhatsApp */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 pt-2">
              <Button
                to="/courses"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="justify-center min-h-[44px]"
              >
                Explore Programs
              </Button>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  className="border-white/20 hover:border-white/35 text-white min-h-[44px] justify-center flex-1 sm:flex-initial"
                >
                  Talk to an Advisor
                </Button>

                <button
                  type="button"
                  onClick={() => openWhatsApp(getGenericEnquiryMessage())}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs text-slate-300 hover:text-[#00E599] bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer shrink-0 min-h-[44px]"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4 text-[#00E599]" />
                  <span className="font-medium">WhatsApp</span>
                </button>
              </div>
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

      {/* Main Editorial Content Flow — Rebalanced Spacing Without "How Learning Works" */}
      <div className="mt-8 sm:mt-12 lg:mt-16 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* ========================================================================= */}
        {/* SECTION B — 100% PLACEMENT ASSISTANCE (PRIMARY FEATURE HIGHLIGHT)          */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-4 sm:pt-6">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -inset-y-10 pointer-events-none -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 90% 75% at 50% 50%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.12) 70%, transparent 100%)',
              }}
            />

            {/* Primary Editorial Highlight Presentation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: The Placement Assistance Core Feature */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight leading-snug">
                  100% Placement Assistance Included With Every Flagship Track.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Career preparation is not an afterthought squeezed into the final week of class. Our dedicated Weekend Career Strategy Circuit runs in parallel with technical instruction, giving you the portfolio depth, technical communication skills, and mock interview practice required to interview effectively.
                </p>

                {/* The 4 Specific Career Support Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {careerActivities.map((act, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5 hover:border-[#00E599]/30 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-white font-heading">
                          {act.title}
                        </h3>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E599]/70 shrink-0" />
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {act.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Direct Industry Corridor Tie-in */}
                <div className="pt-2 border-l-2 border-[#00E599]/60 pl-4 space-y-1">
                  <div className="text-xs font-semibold text-white">
                    Regional IT Corridor Exposure
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    Direct interaction with practicing software engineers and data practitioners from technology firms operating out of Visakhapatnam, including the Rushikonda IT Park and VSEZ corridors.
                  </p>
                </div>
              </div>

              {/* Right Column: Honest Placement Clarification & Advisory Action Hub */}
              <div className="lg:col-span-5 space-y-5 pt-2 lg:pt-6 lg:border-l lg:border-white/[0.08] lg:pl-8">
                {/* Transparent Placement Assistance Disclaimer */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-[#00E599]/30 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#00E599]">
                    <ShieldCheck className="w-4 h-4 text-[#00E599] shrink-0" />
                    <span>Honest Professional Standard</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                    Assistance Availability, Not a Job Guarantee
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    The phrase <strong>"100% Placement Assistance"</strong> communicates the continuous availability of dedicated career coaching, profile auditing, mock interview panels, and curated referral opportunities throughout and after your program.
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Cloudariss does not make false or misleading claims of guaranteed jobs or automatic placement. Your consistent effort, code quality, and interview performance determine your career outcome.
                  </p>
                </div>

                {/* Fast Action Enrolment Connection */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-medium text-slate-300">
                    Speak With a Career Advisor
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-3">
                    <Button
                      to="/contact"
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      className="justify-center min-h-[42px] sm:min-h-[44px]"
                    >
                      Enquire for Next Batch
                    </Button>
                    <button
                      type="button"
                      onClick={() => openWhatsApp(getGenericEnquiryMessage())}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer min-h-[42px] sm:min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4 text-[#00E599]" />
                      <span>WhatsApp Career Desk</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION C — CERTIFIED CREDENTIALS & 360° ROTATING BADGES SHOWCASE         */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -inset-y-10 pointer-events-none -z-10"
            style={{
              background:
                'radial-gradient(ellipse 90% 70% at 50% 45%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.12) 65%, transparent 100%)',
            }}
          />

          {/* Section Heading & Framing */}
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
              Recognise Your Achievement
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Technical hiring managers value engineers who can demonstrate what they have built. Every Cloudariss graduate earns an official Certificate of Completion and shareable achievement badges backed by rigorous curriculum milestones and defended capstone architectures.
            </p>
          </div>

          {/* Feature 1: Certificate of Completion Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column (7 cols): High-Quality Certificate Image Presentation */}
            <div className="lg:col-span-7">
              <div className="relative group">
                {/* Subtle atmospheric ambient glow behind certificate */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 sm:-inset-4 rounded-2xl pointer-events-none -z-10"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(8, 120, 232, 0.20) 0%, rgba(0, 210, 255, 0.08) 50%, transparent 80%)',
                  }}
                />

                {/* Certificate Showcase Presentation */}
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 bg-[#06143D]/40 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  <img
                    src="/brand/credentials/cloudariss-certificate-of-completion.png"
                    alt="Official Cloudariss Certificate of Completion signed by Founder & CTO and Cofounder & CEO, MSME Registered"
                    className="w-full h-auto object-contain block transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                  {/* Subtle edge gradient overlay to integrate with dark page */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none rounded-xl sm:rounded-2xl ring-1 ring-inset ring-white/10"
                  />
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Credential Verification Standards & Actions */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00E599]">
                  <Award className="w-4 h-4 text-[#00E599] shrink-0" />
                  <span>Official Course Completion Credential</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  Verifiable Proof of Practical Competence
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Upon successfully defending all required capstone projects and completing mandatory lab hours, learners receive the official Cloudariss Certificate of Completion, registered under the Ministry of MSME (Govt. of India).
                </p>
              </div>

              {/* Four Standards */}
              <div className="space-y-3 pt-1">
                {credentialStandards.map((std, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white font-heading">
                        {std.label}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {std.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Certificate Verification Link */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D2FF] hover:text-white transition-colors"
                >
                  <span>Verify an Issued Certificate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-slate-600 text-xs">·</span>
                <span className="text-xs font-mono text-slate-400">
                  verify.cloudariss.com
                </span>
              </div>
            </div>
          </div>

          {/* Feature 2: 360-Degree Rotating LinkedIn Achievement Badges Showcase */}
          <div className="pt-6 sm:pt-10 border-t border-white/[0.08]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 cols): Achievement Story & LinkedIn Value */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF]">
                    <ShieldCheck className="w-4 h-4 text-[#00D2FF] shrink-0" />
                    <span>LinkedIn Profile Recognition</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                    Shareable Achievement Badges
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    In addition to graduation certificates, learners defending core curriculum milestones earn distinct Cloudariss achievement badges designed for public LinkedIn profile recognition.
                  </p>
                </div>

                {/* Badge Specifics */}
                <div className="space-y-3 pt-1">
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-heading">
                        Certified Cloud &amp; Platform Engineer
                      </span>
                      <span className="text-xs text-cyan-400 font-medium">
                        Level 1
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Awarded to learners demonstrating verified multi-tier AWS cloud architecture, containerized Docker deployments, and Jenkins CI/CD automation pipelines.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white font-heading">
                        Certified AI Engineer
                      </span>
                      <span className="text-xs text-emerald-400 font-medium">
                        Level 1
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      Awarded upon successful capstone defense of production Python data systems, relational SQL schemas, and enterprise RAG / generative AI workflows.
                    </p>
                  </div>
                </div>

                <div className="pt-1 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/company/cloudariss"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 rounded-lg transition-colors"
                  >
                    <span>Cloudariss on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                  <span className="text-xs text-slate-400">
                    Add directly to Licenses &amp; Certifications
                  </span>
                </div>
              </div>

              {/* Right Column (7 cols): The 360-Degree Orbital 3D Badge Experience */}
              <div className="lg:col-span-7 flex items-center justify-center badge-showcase-wrapper">
                <RotatingBadges />
              </div>
            </div>
          </div>

          {/* Feature 3: Verifiable Capstone Portfolio Deliverables */}
          <div className="pt-6 sm:pt-10 border-t border-white/[0.08] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-b border-white/[0.08] pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  Verifiable Portfolio Deliverables
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-normal">
                  All credentials and badges correspond directly to public GitHub-hosted capstone codebases.
                </p>
              </div>
              <span className="text-xs font-mono text-[#00D2FF] shrink-0">
                Public GitHub Repositories
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {portfolioAssets.map((asset, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 hover:border-[#00D2FF]/30 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="text-xs font-semibold text-[#00D2FF]">
                      {asset.domain}
                    </div>
                    <h4 className="text-sm font-bold text-white font-heading">
                      {asset.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {asset.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-mono text-slate-400 border-t border-white/[0.04]">
                    {asset.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION D — FINAL CTA (INVITATION TO EXPLORE PROGRAMS OR ENQUIRE)          */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative pt-8 sm:pt-10 border-t border-white/[0.08]">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -inset-y-10 pointer-events-none -z-10"
              style={{
                background:
                  'radial-gradient(ellipse 90% 75% at 50% 50%, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.12) 70%, transparent 100%)',
              }}
            />

            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-heading tracking-tight">
                Ready to Build Demonstrable Technical Capability?
              </h2>

              <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed font-normal max-w-xl mx-auto">
                Explore our flagship accelerator tracks in Cloud &amp; DevOps (CRPC), Data Analytics &amp; AI (DAAP), or Forward-Deployed AI Systems Engineering (FDE). Get hands-on from your very first session.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button
                  to="/courses"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto justify-center min-h-[42px] sm:min-h-[44px]"
                >
                  Explore All Programs
                </Button>

                <Button
                  to="/contact"
                  variant="outline"
                  size="md"
                  className="w-full sm:w-auto border-white/15 hover:border-white/30 text-white justify-center min-h-[42px] sm:min-h-[44px]"
                >
                  Speak With an Advisor
                </Button>

                <button
                  type="button"
                  onClick={() => openWhatsApp(getGenericEnquiryMessage())}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer min-h-[42px] sm:min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-[#00E599]" />
                  <span>WhatsApp Career Desk</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
