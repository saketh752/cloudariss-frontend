import React, { useState } from 'react';
import {
  BarChart3,
  Database,
  Bot,
  Terminal,
  LineChart,
  Layers,
  Cloud,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import {
  PythonLogo,
  SqlLogo,
  PowerBiLogo,
  AwsLogo,
  DockerLogo,
  JenkinsLogo,
  RagLogo,
  AgenticAiLogo,
  ChatGptLogo,
} from '@/components/icons/TechLogos';

/* ========================================================================= */
/* PROJECTS VISUAL — OPEN ENGINEERING CASE STUDIES                           */
/* Replaces boxed 3-column card grid with open editorial case-study ledger   */
/* No card walls, no pill chip wrappers around logos, clear number anchors    */
/* ========================================================================= */

interface ProjectTile {
  title: string;
  category: string;
  tag: string;
  icon: React.ReactNode;
  logos: React.ReactNode[];
  description: string;
  deliverables: string[];
}

export const ProjectsVisual: React.FC<{ initialTab?: 'daap' | 'crpc' }> = ({ initialTab = 'daap' }) => {
  const [activeTab, setActiveTab] = useState<'daap' | 'crpc'>(initialTab);

  const daapProjects: ProjectTile[] = [
    {
      title: 'AI-Assisted Sales Dashboard',
      category: 'Spreadsheet & GenAI',
      tag: '01',
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      logos: [<ChatGptLogo key="c" className="w-5 h-5" />],
      description: 'Interactive commercial sales dashboard comparing human-calculated KPIs with AI-synthesized narrative insights.',
      deliverables: ['Excel Dynamic Arrays', 'Pivot KPI Deck', 'AI Executive Summary'],
    },
    {
      title: 'SQL Database Analysis',
      category: 'Relational Database',
      tag: '02',
      icon: <Database className="w-5 h-5 text-[#19BCE8]" />,
      logos: [<SqlLogo key="s" className="w-5 h-5" />],
      description: 'Multi-table relational schema analysis with complex business queries, aggregations, and query optimization.',
      deliverables: ['PostgreSQL Schemas', 'Window Functions & CTEs', 'Query Optimization Report'],
    },
    {
      title: 'Python EDA & Customer Segmentation',
      category: 'Exploratory Analytics',
      tag: '03',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      logos: [<PythonLogo key="p" className="w-5 h-5" />],
      description: 'Comprehensive statistical distribution, feature correlation, outlier treatment, and demographic clustering.',
      deliverables: ['Jupyter Notebook Artifact', 'Seaborn & Plotly Deck', 'Statistical Summary Memo'],
    },
    {
      title: 'Executive BI Dashboard',
      category: 'Business Intelligence',
      tag: '04',
      icon: <LineChart className="w-5 h-5 text-[#EAA600]" />,
      logos: [<PowerBiLogo key="pb" className="w-5 h-5" />],
      description: 'Production Power BI dashboard with star schema architecture, time-intelligence DAX measures, and drill-throughs.',
      deliverables: ['Star Schema Data Model', 'DAX Measure Library', 'Executive KPI Canvas'],
    },
    {
      title: 'RAG Document Intelligence App',
      category: 'Generative AI',
      tag: '05',
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      logos: [<RagLogo key="r" className="w-5 h-5" />],
      description: 'Retrieval-Augmented Generation application for semantic document querying with chunking strategies and citation synthesis.',
      deliverables: ['Vector Store Embeddings', 'Context Retrieval Pipeline', 'Interactive Streamlit UI'],
    },
    {
      title: 'Autonomous Data Agent',
      category: 'Agentic AI Capstone',
      tag: '06',
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
      logos: [
        <AgenticAiLogo key="a" className="w-5 h-5" />,
        <PythonLogo key="p2" className="w-5 h-5" />,
      ],
      description: 'Comprehensive portfolio capstone: automated planning → tool execution → data analysis → verification → executive reporting.',
      deliverables: ['Multi-Agent Architecture', 'SQL & Python Tool Suite', 'Autonomous Analytical Briefing'],
    },
  ];

  const crpcProjects: ProjectTile[] = [
    {
      title: 'Data / EDA Project',
      category: 'Python & Data Engineering',
      tag: '01',
      icon: <Terminal className="w-5 h-5 text-[#19BCE8]" />,
      logos: [<PythonLogo key="p" className="w-5 h-5" />],
      description: 'End-to-end exploratory data analysis and baseline machine learning workflow covering data preprocessing and evaluation.',
      deliverables: ['Data Preprocessing Pipelines', 'Scikit-Learn Baseline Model', 'Model Validation Metrics'],
    },
    {
      title: 'AWS Application Deployment',
      category: 'Cloud Architecture',
      tag: '02',
      icon: <Cloud className="w-5 h-5 text-[#FF9900]" />,
      logos: [<AwsLogo key="a" className="w-6 h-4" />],
      description: 'Three-tier web application deployed across public and private subnets behind an Application Load Balancer with secure database access.',
      deliverables: ['Multi-AZ VPC & Routing', 'EC2 Auto Scaling Groups', 'RDS MySQL Isolation'],
    },
    {
      title: 'DevOps CI/CD Project',
      category: 'Automation & Containers',
      tag: '03',
      icon: <Wrench className="w-5 h-5 text-brand-orange" />,
      logos: [
        <DockerLogo key="d" className="w-5 h-5" />,
        <JenkinsLogo key="j" className="w-5 h-5" />,
      ],
      description: 'Automated continuous integration and deployment pipeline triggered from repository pushes to containerized EC2 hosting.',
      deliverables: ['Docker Image Build Pipeline', 'Jenkins Declarative Jenkinsfile', 'Zero-Downtime Container Pull'],
    },
    {
      title: 'Enterprise Integration Capstone',
      category: 'Full-Stack Infrastructure',
      tag: '04',
      icon: <Layers className="w-5 h-5 text-[#19BCE8]" />,
      logos: [
        <AwsLogo key="aw" className="w-6 h-4" />,
        <DockerLogo key="do" className="w-5 h-5" />,
      ],
      description: 'Production-style infrastructure setup with centralized monitoring via Prometheus & Grafana, incident response, and demo-ready presentation.',
      deliverables: ['Prometheus/Grafana Dashboards', 'ServiceNow Incident Bridge', 'Architectural Walkthrough'],
    },
  ];

  const projects = activeTab === 'daap' ? daapProjects : crpcProjects;

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Program Selector Tabs — Clean Editorial Tab Bar */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('daap')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold font-heading transition-all duration-200 cursor-pointer ${
              activeTab === 'daap'
                ? 'bg-[#0878E8] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            DAAP Projects ({daapProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('crpc')}
            className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold font-heading transition-all duration-200 cursor-pointer ${
              activeTab === 'crpc'
                ? 'bg-[#0878E8] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CRPC Projects ({crpcProjects.length})
          </button>
        </div>
      </div>

      {/* Open Engineering Case Studies Layout (No Card Boxes, No Thick Borders) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="group relative border-t border-white/10 pt-8 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Meta Row: Case Number + Category + Standalone Floating Tech Logos */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xl sm:text-2xl font-black text-white/20 group-hover:text-[#00D2FF]/50 transition-colors">
                    {proj.tag}
                  </span>
                  <div className="h-3 w-px bg-white/20" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#00D2FF] uppercase">
                    {proj.category}
                  </span>
                </div>

                {/* Floating Tech Logos (No Pill Boxes) */}
                <div className="flex items-center gap-3">
                  {proj.logos.map((logo, lIdx) => (
                    <span key={lIdx} className="hover:scale-110 transition-transform">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>

              {/* Case Study Title */}
              <h4 className="text-xl sm:text-2xl font-black text-white font-heading tracking-tight leading-snug group-hover:text-[#00D2FF] transition-colors">
                {proj.title}
              </h4>

              {/* Narrative Description */}
              <p className="text-sm text-[#DCE5F2]/85 leading-relaxed font-normal">
                {proj.description}
              </p>
            </div>

            {/* Deliverables Checklist (Clean Editorial Ledger) */}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                Verified Deliverables
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-medium">
                {proj.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
