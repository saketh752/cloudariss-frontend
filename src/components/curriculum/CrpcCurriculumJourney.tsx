import React, { useState } from 'react';
import {
  Terminal,
  Cpu,
  Cloud,
  Layers,
  Wrench,
  Briefcase,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import {
  PythonLogo,
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  ServiceNowLogo,
} from '@/components/icons/TechLogos';

interface Stage {
  num: string;
  label: string;
  subtitle: string;
  icon: React.ReactNode;
  logos: React.ReactNode[];
  summary: string;
  keySkills: string[];
  outcome: string;
  accent: 'blue' | 'cyan' | 'orange';
}

export const CrpcCurriculumJourney: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const stages: Stage[] = [
    {
      num: '01',
      label: 'PYTHON',
      subtitle: 'Core Programming & Scripting',
      icon: <Terminal className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<PythonLogo key="py" className="w-5 h-5" />],
      summary:
        'Establish core programming fluency. Master syntax, control structures, custom functions, object-oriented concepts, and automated system scripting.',
      keySkills: ['Core Data Structures', 'OOP & Modular Code', 'File I/O & Automation', 'Debugging & Linting'],
      outcome: 'Write clean, maintainable automation scripts for cloud and data tasks.',
      accent: 'blue',
    },
    {
      num: '02',
      label: 'DATA SCIENCE',
      subtitle: 'Analysis & Baseline ML',
      icon: <Cpu className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<PythonLogo key="py2" className="w-5 h-5" />],
      summary:
        'Manipulate datasets and engineer baseline predictive models. Perform data wrangling, cleaning, exploratory visualizations, and statistical evaluations.',
      keySkills: ['NumPy Numerical Arrays', 'Pandas DataFrame Wrangling', 'Matplotlib & Seaborn EDA', 'Scikit-Learn Baselines'],
      outcome: 'Transform raw, messy datasets into structured, validated feature tables.',
      accent: 'cyan',
    },
    {
      num: '03',
      label: 'AWS / CLOUD',
      subtitle: 'Enterprise Infrastructure',
      icon: <Cloud className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<AwsLogo key="aws" className="w-6 h-4" />],
      summary:
        'Architect high-availability cloud infrastructure on Amazon Web Services. Build isolated virtual networks, compute clusters, and secured storage.',
      keySkills: ['AWS EC2 & Auto Scaling', 'VPC, Subnets & Routing', 'S3 & IAM Role Security', 'RDS & Application Load Balancers'],
      outcome: 'Design and deploy multi-tier cloud applications behind secure firewalls.',
      accent: 'blue',
    },
    {
      num: '04',
      label: 'DEVOPS',
      subtitle: 'CI/CD & Containers',
      icon: <Layers className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [
        <DockerLogo key="dock" className="w-5 h-5" />,
        <KubernetesLogo key="k8s" className="w-5 h-5" />,
        <JenkinsLogo key="jenk" className="w-5 h-5" />,
      ],
      summary:
        'Automate the software delivery lifecycle with containerization and build pipelines. Package microservices and trigger continuous deployments.',
      keySkills: ['Docker Containerization', 'Kubernetes Cluster Basics', 'Jenkins Pipeline Automation', 'Linux Server Administration'],
      outcome: 'Deploy zero-downtime automated release pipelines from GitHub commits.',
      accent: 'orange',
    },
    {
      num: '05',
      label: 'SERVICENOW',
      subtitle: 'Enterprise IT Operations',
      icon: <Wrench className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<ServiceNowLogo key="snow" className="w-5 h-5" />],
      summary:
        'Gain operational enterprise IT exposure through ServiceNow administration, IT Service Management (ITSM), incident workflows, and service catalogs.',
      keySkills: ['ITSM Core Workflows', 'Incident & Change Management', 'Service Catalog Configuration', 'User & Role Administration'],
      outcome: 'Manage enterprise-grade IT systems with formal ticketing and audit standards.',
      accent: 'cyan',
    },
    {
      num: '06',
      label: 'CAREER PREP',
      subtitle: 'Placement Readiness Circuit',
      icon: <Briefcase className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />,
      logos: [<Sparkles key="sp" className="w-5 h-5 text-brand-orange" />],
      summary:
        'Turn technical proficiency into hiring success with structured weekend career labs: ATS resume tuning, portfolio review, mock interviews, and live defense.',
      keySkills: ['ATS-Optimized Resumes', 'LinkedIn Tech Presence', 'Live Technical Mocks', 'Behavioral & GD Drills'],
      outcome: 'Present documented projects with poise and interview with measurable confidence.',
      accent: 'blue',
    },
  ];

  const current = stages[selectedIdx];

  return (
    <div className="space-y-6">
      {/* Interactive Curriculum Progression Metric Bar */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-blue animate-pulse shadow-[0_0_6px_rgba(8,120,232,0.6)]" />
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
            Curriculum Flow:
          </span>
          <span className="text-xs sm:text-sm font-black text-brand-navy">
            Stage {current.num} of {stages.length} —{' '}
            <span className="text-brand-blue font-heading">{current.label}</span>
          </span>
          <span className="text-xs text-slate-500 hidden md:inline">({current.subtitle})</span>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="w-32 sm:w-48 h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
            <div
              className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange transition-all duration-500 ease-out shadow-xs"
              style={{ width: `${((selectedIdx + 1) / stages.length) * 100}%` }}
            />
          </div>
          <span className="text-xs font-mono font-extrabold text-brand-blue shrink-0">
            {Math.round(((selectedIdx + 1) / stages.length) * 100)}%
          </span>
        </div>
      </div>

      {/* Node Path Timeline */}
      <div className="relative pt-1 pb-2">
        {/* Base Inactive Track Line (Desktop) */}
        <div className="hidden lg:block absolute top-10 left-[8.33%] right-[8.33%] h-1.5 bg-slate-200/80 rounded-full z-0 pointer-events-none" />

        {/* Dynamic Active Filled Progress Line (Grows up to active stage) */}
        <div
          className="hidden lg:block absolute top-10 left-[8.33%] h-1.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange rounded-full z-0 transition-all duration-500 ease-out pointer-events-none shadow-[0_0_10px_rgba(8,120,232,0.5)]"
          style={{
            width: `${(selectedIdx / (stages.length - 1)) * 83.33}%`,
          }}
        />

        {/* Nodes Grid / Flex */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 relative z-10">
          {stages.map((stg, i) => {
            const isSelected = selectedIdx === i;
            const isPassed = i < selectedIdx;

            // Container styles highlighting logo when filling with color
            const iconContainerStyles = {
              blue: isSelected
                ? 'bg-brand-blue text-white border-brand-blue shadow-md shadow-blue-500/30 scale-105'
                : isPassed
                ? 'bg-[#EEF5FF] text-brand-blue border-brand-blue/30'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:shadow-sm',
              cyan: isSelected
                ? 'bg-[#0878E8] text-white border-[#0878E8] shadow-md shadow-blue-500/30 scale-105'
                : isPassed
                ? 'bg-[#F0F9FF] text-[#0878E8] border-cyan-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-[#0878E8] group-hover:text-white group-hover:border-[#0878E8] group-hover:shadow-sm',
              orange: isSelected
                ? 'bg-brand-orange text-white border-brand-orange shadow-md shadow-orange-500/30 scale-105'
                : isPassed
                ? 'bg-[#FFF7ED] text-brand-orange border-orange-300'
                : 'bg-slate-50 border-slate-200 text-slate-600 group-hover:bg-brand-orange group-hover:text-white group-hover:border-brand-orange group-hover:shadow-sm',
            }[stg.accent];

            // 100% Solid Opaque Card Styling (Zero bleed-through of background line)
            const buttonCardStyles = {
              blue: isSelected
                ? 'bg-[#EEF5FF] border-2 border-brand-blue shadow-lg shadow-blue-500/10 scale-[1.03] ring-4 ring-blue-500/10'
                : 'bg-white border-slate-200/90 hover:border-brand-blue/60 hover:bg-slate-50 shadow-xs',
              cyan: isSelected
                ? 'bg-[#F0F9FF] border-2 border-[#0878E8] shadow-lg shadow-blue-500/10 scale-[1.03] ring-4 ring-cyan-500/10'
                : 'bg-white border-slate-200/90 hover:border-cyan-400/60 hover:bg-slate-50 shadow-xs',
              orange: isSelected
                ? 'bg-[#FFF7ED] border-2 border-brand-orange shadow-lg shadow-orange-500/10 scale-[1.03] ring-4 ring-orange-500/10'
                : 'bg-white border-slate-200/90 hover:border-brand-orange/60 hover:bg-slate-50 shadow-xs',
            }[stg.accent];

            const topAccentBar = {
              blue: 'bg-brand-blue',
              cyan: 'bg-[#0878E8]',
              orange: 'bg-brand-orange',
            }[stg.accent];

            return (
              <button
                key={stg.num}
                onClick={() => setSelectedIdx(i)}
                className={`relative flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl transition-all duration-300 group text-left cursor-pointer overflow-hidden select-none ${buttonCardStyles}`}
              >
                {/* Top Accent Strip on Active Card */}
                {isSelected && (
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${topAccentBar}`} />
                )}

                {/* Node Number & Icon Container with clear logo highlight */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 border ${iconContainerStyles}`}
                >
                  {stg.icon}
                </div>

                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className={`text-[10px] font-mono font-black tracking-widest ${
                      isSelected
                        ? 'text-brand-blue'
                        : isPassed
                        ? 'text-emerald-600'
                        : 'text-slate-400'
                    }`}
                  >
                    STAGE {stg.num}
                  </span>
                  {isPassed && (
                    <span className="text-[10px] text-emerald-600 font-bold" title="Completed">✓</span>
                  )}
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-ping" />
                  )}
                </div>

                <h4 className="text-xs sm:text-sm font-extrabold text-brand-navy font-heading tracking-tight leading-snug">
                  {stg.label}
                </h4>

                <p className="text-[11px] text-slate-500 font-medium truncate w-full mt-0.5">
                  {stg.subtitle}
                </p>

                {/* Tech Logos Preview */}
                <div className="flex items-center gap-1 mt-2 pt-2 border-t border-slate-100 w-full justify-center">
                  {stg.logos.map((logo, lIdx) => (
                    <span key={lIdx} className="scale-75 inline-block opacity-80 group-hover:opacity-100">
                      {logo}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Compact Detail Panel */}
      <div className="p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-brand-border shadow-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-surface-blue to-transparent rounded-bl-full pointer-events-none opacity-60" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-brand-blue text-white tracking-widest uppercase">
                STAGE {current.num}
              </span>
              <span className="text-sm font-bold text-brand-navy font-heading">
                {current.label} • {current.subtitle}
              </span>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {current.summary}
            </p>

            {/* Key Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {current.keySkills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-1.5 p-2 rounded-lg bg-brand-surface-light border border-brand-border/60 text-xs font-semibold text-brand-navy"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome highlight box */}
          <div className="p-4 sm:p-5 rounded-xl bg-brand-surface-light border border-brand-border/80 lg:w-72 shrink-0 space-y-2">
            <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange" />
              Learning Outcome
            </span>
            <p className="text-xs sm:text-sm font-semibold text-brand-navy leading-snug">
              {current.outcome}
            </p>
            <div className="pt-2 flex items-center justify-between text-xs text-brand-blue font-bold">
              <span>Next Stage</span>
              <button
                onClick={() => setSelectedIdx((selectedIdx + 1) % stages.length)}
                className="inline-flex items-center gap-1 hover:underline cursor-pointer"
              >
                Continue <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

