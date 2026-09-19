import React, { useState } from 'react';
import {
  Code2,
  Layers,
  Cpu,
  Building2,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import {
  AwsLogo,
  KubernetesLogo,
  JenkinsLogo,
  SqlLogo,
  PowerBiLogo,
  LangChainLogo,
} from '@/components/icons/TechLogos';

interface WhyUsHeroFlywheelProps {
  onExploreCrpc?: () => void;
  onExploreDaap?: () => void;
}

export const WhyUsHeroFlywheel: React.FC<WhyUsHeroFlywheelProps> = ({
  onExploreCrpc,
  onExploreDaap,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      short: 'Practical',
      title: 'Practical Learning Over Theory',
      badge: 'Live Labs · Zero Decks',
      icon: <Code2 className="w-3.5 h-3.5" />,
      desc: 'Instead of watching pre-recorded slide decks, learners write code, deploy live cloud infrastructure, and query relational databases from day one.',
      points: [
        'Real-time coding with live mentor debugging',
        'Direct AWS console and Linux terminal labs',
        'Immediate architectural problem-solving',
      ],
      tags: ['Live Interactive', 'Hands-on CLI', 'Cloud Workstations'],
    },
    {
      num: '02',
      short: 'Projects',
      title: 'Verifiable Portfolio Artifacts',
      badge: 'GitHub Documented',
      icon: <Layers className="w-3.5 h-3.5" />,
      desc: 'Every project results in clean code, comprehensive documentation, and live deployments hosted on students’ personal GitHub profiles.',
      points: [
        'Multi-tier AWS VPC cloud architectures',
        'Automated multi-branch Jenkins CI/CD pipelines',
        'Executive Power BI dashboards with DAX models',
      ],
      tags: ['Personal GitHub', 'Production IaC', 'Portfolio Defense'],
    },
    {
      num: '03',
      short: 'Stacks',
      title: 'Current Enterprise Technology',
      badge: 'Zero Obsolete Stacks',
      icon: <Cpu className="w-3.5 h-3.5" />,
      desc: 'Instruction centers squarely on the tools powering modern teams: AWS, Docker, Kubernetes, Jenkins, PostgreSQL, Power BI, and Agentic AI.',
      points: [
        'Cloud & DevOps: AWS VPC, EC2, Docker, K8s, Jenkins',
        'Data & BI: SQL, PostgreSQL, Power BI, DAX, Excel',
        'AI Engineering: LangChain, RAG, Multi-Agent loops',
      ],
      tags: ['AWS Cloud', 'Kubernetes', 'Power BI', 'Agentic AI'],
    },
    {
      num: '04',
      short: 'Vizag IT',
      title: 'Regional IT Corridor Exposure',
      badge: 'Rushikonda / VSEZ',
      icon: <Building2 className="w-3.5 h-3.5" />,
      desc: 'Direct interaction with working software engineers and data practitioners from tech firms operating across Visakhapatnam IT corridors.',
      points: [
        'Practitioner walkthroughs & real architecture reviews',
        'Direct exposure to production team methodologies',
        'Top-5 cohort performers earn formal internship interview rounds',
      ],
      tags: ['Company Sessions', 'Practitioner Q&A', 'Internship Pathway'],
    },
    {
      num: '05',
      short: 'Career',
      title: 'Weekend Career Strategy Circuit',
      badge: 'Every Weekend',
      icon: <Briefcase className="w-3.5 h-3.5" />,
      desc: 'Career preparation runs in parallel with technical modules, ensuring students develop confidence and structured interview capability.',
      points: [
        'Saturdays: ATS resume optimization & LinkedIn targeting',
        'Sundays: Live technical whiteboards & behavioral HR drills',
        'Verifiable hiring defense decks for technical panels',
      ],
      tags: ['ATS Resume Tuning', 'Mock Whiteboards', 'HR Coaching'],
    },
  ];

  const current = steps[activeStep];

  return (
    <div className="relative rounded-3xl bg-gradient-to-b from-[#06143D] via-[#091E4E] to-[#06143D] border border-blue-500/30 shadow-2xl shadow-[#06143D]/40 p-5 sm:p-7 text-white overflow-hidden group transition-all duration-300 hover:border-blue-400/50">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#0878E8]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FF7A00]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header: Badge + Pedagogical Flywheel Tag */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-blue-400/20">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D3880] border border-blue-400/30 text-white shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
            <span className="text-[11px] font-black uppercase tracking-wider">The Cloudariss Advantage</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-cyan-300/90">
            5-Point Flywheel
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Proven Pedagogy</span>
        </div>
      </div>

      {/* Interactive 5-Step Stepper Bar */}
      <div className="relative z-10 grid grid-cols-5 gap-1 p-1 rounded-xl bg-[#07173E] border border-blue-400/20 my-4">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <button
              key={step.num}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-xs font-bold transition-all flex flex-col sm:flex-row items-center justify-center gap-1 cursor-pointer truncate ${
                isActive
                  ? 'bg-[#0878E8] text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="font-mono text-[9px] opacity-75">{step.num}</span>
              <span className="truncate">{step.short}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Canvas Display */}
      <div className="relative z-10 space-y-3.5 animate-in fade-in duration-200">
        <div className="p-4 rounded-2xl bg-[#071B4E]/80 border border-blue-400/20 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-1.5">
              {current.icon}
              {current.title}
            </span>
            <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
              {current.badge}
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            {current.desc}
          </p>

          {/* 3 Key Checkpoints */}
          <div className="space-y-1.5 pt-1">
            {current.points.map((pt, pIdx) => (
              <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{pt}</span>
              </div>
            ))}
          </div>

          {/* Tag Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {current.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-md bg-[#0A2563] text-[10px] font-semibold text-cyan-200 border border-cyan-400/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Quick Tech Logo Spotlight */}
        <div className="grid grid-cols-6 gap-1.5 text-center text-xs">
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <AwsLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">AWS</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <KubernetesLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">K8s</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <JenkinsLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">Jenkins</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <SqlLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">SQL</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <PowerBiLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">Power BI</span>
          </div>
          <div className="p-1.5 rounded-xl bg-[#091D4C]/60 border border-blue-400/15 flex flex-col items-center justify-center gap-1">
            <LangChainLogo className="w-3.5 h-3.5" />
            <span className="text-[8px] text-slate-300 font-bold truncate w-full">AI Agents</span>
          </div>
        </div>
      </div>

      {/* Footer Bar: Portfolio Deliverable Badge + Program links */}
      <div className="relative z-10 mt-4 pt-3.5 border-t border-blue-400/20 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
        <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
          <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Verified Engineering Outcomes</span>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="/courses/crpc"
            onClick={(e) => {
              if (onExploreCrpc) {
                e.preventDefault();
                onExploreCrpc();
              }
            }}
            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>CRPC Track</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <span className="text-slate-500">·</span>
          <a
            href="/courses/daap"
            onClick={(e) => {
              if (onExploreDaap) {
                e.preventDefault();
                onExploreDaap();
              }
            }}
            className="inline-flex items-center gap-1 text-xs font-bold text-orange-300 hover:text-white transition-colors cursor-pointer group"
          >
            <span>DAAP Track</span>
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

