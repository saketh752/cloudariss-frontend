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
  FolderGit2,
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

interface ProjectTile {
  title: string;
  category: string;
  tag: string;
  icon: React.ReactNode;
  logos: React.ReactNode[];
  description: string;
  deliverables: string[];
  gradient: string;
}

export const ProjectsVisual: React.FC<{ initialTab?: 'daap' | 'crpc' }> = ({ initialTab = 'daap' }) => {
  const [activeTab, setActiveTab] = useState<'daap' | 'crpc'>(initialTab);

  const daapProjects: ProjectTile[] = [
    {
      title: 'AI-Assisted Sales Dashboard',
      category: 'Spreadsheet & GenAI',
      tag: 'Project 01',
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      logos: [<ChatGptLogo key="c" className="w-4 h-4" />],
      description: 'Interactive commercial sales dashboard comparing human-calculated KPIs with AI-synthesized narrative insights.',
      deliverables: ['Excel Dynamic Arrays', 'Pivot KPI Deck', 'AI Executive Summary'],
      gradient: 'from-emerald-500/10 to-transparent',
    },
    {
      title: 'SQL Database Analysis',
      category: 'Relational Database',
      tag: 'Project 02',
      icon: <Database className="w-5 h-5 text-[#19BCE8]" />,
      logos: [<SqlLogo key="s" className="w-4 h-4" />],
      description: 'Multi-table relational schema analysis with complex business queries, aggregations, and query optimization.',
      deliverables: ['PostgreSQL Schemas', 'Window Functions & CTEs', 'Query Optimization Report'],
      gradient: 'from-brand-blue/10 to-transparent',
    },
    {
      title: 'Python EDA & Customer Segmentation',
      category: 'Exploratory Analytics',
      tag: 'Project 03',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
      logos: [<PythonLogo key="p" className="w-4 h-4" />],
      description: 'Comprehensive statistical distribution, feature correlation, outlier treatment, and demographic clustering.',
      deliverables: ['Jupyter Notebook Artifact', 'Seaborn/Plotly Visual Deck', 'Statistical Summary Memo'],
      gradient: 'from-cyan-500/10 to-transparent',
    },
    {
      title: 'Executive BI Dashboard',
      category: 'Business Intelligence',
      tag: 'Project 04',
      icon: <LineChart className="w-5 h-5 text-[#EAA600]" />,
      logos: [<PowerBiLogo key="pb" className="w-4 h-4" />],
      description: 'Production Power BI dashboard with star schema architecture, time-intelligence DAX measures, and drill-throughs.',
      deliverables: ['Star Schema Data Model', 'DAX Measure Library', 'Executive KPI Canvas'],
      gradient: 'from-amber-500/10 to-transparent',
    },
    {
      title: 'RAG Document Intelligence App',
      category: 'Generative AI',
      tag: 'Project 05',
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      logos: [<RagLogo key="r" className="w-4 h-4" />],
      description: 'Retrieval-Augmented Generation application for semantic document querying with chunking strategies and citation synthesis.',
      deliverables: ['Vector Store Embeddings', 'Context Retrieval Pipeline', 'Interactive Streamlit UI'],
      gradient: 'from-purple-500/10 to-transparent',
    },
    {
      title: 'Autonomous Data Agent',
      category: 'Agentic AI Capstone',
      tag: 'Capstone 06',
      icon: <Layers className="w-5 h-5 text-brand-orange" />,
      logos: [
        <AgenticAiLogo key="a" className="w-4 h-4" />,
        <PythonLogo key="p2" className="w-4 h-4" />,
      ],
      description: 'Comprehensive portfolio capstone: automated planning -> tool execution -> data analysis -> verification -> executive reporting.',
      deliverables: ['Multi-Agent Architecture', 'SQL & Python Tool Suite', 'Autonomous Analytical Briefing'],
      gradient: 'from-brand-orange/15 to-transparent',
    },
  ];

  const crpcProjects: ProjectTile[] = [
    {
      title: 'Data / EDA Project',
      category: 'Python & Data Engineering',
      tag: 'Project 01',
      icon: <Terminal className="w-5 h-5 text-[#19BCE8]" />,
      logos: [<PythonLogo key="p" className="w-4 h-4" />],
      description: 'End-to-end exploratory data analysis and baseline machine learning workflow covering data preprocessing and evaluation.',
      deliverables: ['Data Preprocessing Pipelines', 'Scikit-Learn Baseline Model', 'Model Validation Metrics'],
      gradient: 'from-brand-blue/10 to-transparent',
    },
    {
      title: 'AWS Application Deployment',
      category: 'Cloud Architecture',
      tag: 'Project 02',
      icon: <Cloud className="w-5 h-5 text-[#FF9900]" />,
      logos: [<AwsLogo key="a" className="w-5 h-3" />],
      description: 'Three-tier web application deployed across public and private subnets behind an Application Load Balancer with secure database access.',
      deliverables: ['Multi-AZ VPC & Routing', 'EC2 Auto Scaling Groups', 'RDS MySQL Isolation'],
      gradient: 'from-[#FF9900]/10 to-transparent',
    },
    {
      title: 'DevOps CI/CD Project',
      category: 'Automation & Containers',
      tag: 'Project 03',
      icon: <Wrench className="w-5 h-5 text-brand-orange" />,
      logos: [
        <DockerLogo key="d" className="w-4 h-4" />,
        <JenkinsLogo key="j" className="w-4 h-4" />,
      ],
      description: 'Automated continuous integration and deployment pipeline triggered from repository pushes to containerized EC2 hosting.',
      deliverables: ['Docker Image Build Pipeline', 'Jenkins Declarative Jenkinsfile', 'Zero-Downtime Container Pull'],
      gradient: 'from-brand-orange/10 to-transparent',
    },
    {
      title: 'Enterprise Integration Capstone',
      category: 'Full-Stack Infrastructure',
      tag: 'Capstone 04',
      icon: <Layers className="w-5 h-5 text-[#19BCE8]" />,
      logos: [
        <AwsLogo key="aw" className="w-5 h-3" />,
        <DockerLogo key="do" className="w-4 h-4" />,
      ],
      description: 'Production-style infrastructure setup with centralized monitoring via Prometheus & Grafana, incident response, and demo-ready presentation.',
      deliverables: ['Prometheus/Grafana Dashboards', 'ServiceNow Incident Bridge', 'Complete Architectural Walkthrough'],
      gradient: 'from-brand-blue/15 to-transparent',
    },
  ];

  const projects = activeTab === 'daap' ? daapProjects : crpcProjects;

  return (
    <div className="space-y-8">
      {/* Program Selector Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#06143A]/90 backdrop-blur-md border border-[#19BCE8]/30 shadow-xl">
          <button
            onClick={() => setActiveTab('daap')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold font-heading transition-all duration-200 cursor-pointer ${
              activeTab === 'daap'
                ? 'bg-[#0878E8] text-white shadow-md ring-1 ring-[#19BCE8]'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            DAAP Projects ({daapProjects.length})
          </button>
          <button
            onClick={() => setActiveTab('crpc')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold font-heading transition-all duration-200 cursor-pointer ${
              activeTab === 'crpc'
                ? 'bg-[#0878E8] text-white shadow-md ring-1 ring-[#19BCE8]'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            CRPC Projects ({crpcProjects.length})
          </button>
        </div>
      </div>

      {/* Visual Project Tiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className={`group relative p-6 rounded-2xl bg-[#081F54]/88 backdrop-blur-xl border border-[#19BCE8]/30 hover:border-[#19BCE8]/60 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden text-white bg-gradient-to-b ${proj.gradient}`}
          >
            <div>
              {/* Tile Top: Badge & Icon */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 shadow-xs border border-[#19BCE8]/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  {proj.icon}
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-extrabold tracking-wider text-[#19BCE8] uppercase bg-[#05143A] px-2 py-0.5 rounded-md border border-[#19BCE8]/30">
                    {proj.tag}
                  </span>
                </div>
              </div>

              {/* Title & Category */}
              <div className="mb-2">
                <span className="text-[11px] font-semibold text-[#19BCE8] uppercase tracking-wider block mb-0.5">
                  {proj.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white font-heading group-hover:text-cyan-200 transition-colors leading-snug">
                  {proj.title}
                </h4>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                {proj.description}
              </p>
            </div>

            {/* Deliverables Checklist & Logos Footer */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="space-y-1.5">
                {proj.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-200 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#19BCE8] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-dashed border-white/10">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                  <FolderGit2 className="w-3 h-3 text-[#19BCE8]" /> Tech Stack
                </span>
                <div className="flex items-center gap-1.5">
                  {proj.logos.map((logo, lIdx) => (
                    <span key={lIdx} className="scale-90 inline-block bg-white/10 p-1 rounded-md">
                      {logo}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
