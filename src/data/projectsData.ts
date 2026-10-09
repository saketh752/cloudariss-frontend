/**
 * Cloudariss Technologies — Official Project Portfolio Data
 * Grounded in Cloudariss Project Route Map (DAAP, CRPC & FDE AI)
 * Total Projects: Exactly 10 (5 DAAP + 4 CRPC + 1 FDE AI)
 */

export interface ProjectData {
  id: string;
  tag: string;
  title: string;
  course: 'daap' | 'crpc' | 'fde';
  levelStage: string;
  routePath: string;
  category: string;
  objective: string;
  productionFocus: string;
  description: string;
  deliverables: string[];
  coreTools: string[];
  websiteOutput: string;
}

export const DAAP_PROJECTS: ProjectData[] = [
  {
    id: 'daap-01',
    tag: '01',
    title: 'Sales Dashboard in Excel',
    course: 'daap',
    levelStage: 'Mini Project · Week 3',
    routePath: 'DAAP → Data Analytics → Excel Route',
    category: 'Spreadsheets & Business Analytics',
    objective: 'Build an interactive sales dashboard using pivot tables, pivot charts and slicers.',
    productionFocus: 'Data cleaning, consistent KPI definitions, validation of dashboard calculations and presentation-ready reporting.',
    description: 'Interactive commercial sales dashboard featuring dynamic data cleaning, consistent KPI logic, multi-dimensional pivot summarization, and executive-ready slicers.',
    deliverables: [
      'Dynamic Pivot Tables & Slicers',
      'What-If Commercial Scenarios',
      'Presentation-Ready KPI Deck',
    ],
    coreTools: ['Excel', 'Dynamic Formulas', 'Pivot Tables & Charts', 'Slicers', 'What-If Analysis'],
    websiteOutput: 'Website card → Excel Business Analytics → Dashboard → Demo + screenshots',
  },
  {
    id: 'daap-02',
    tag: '02',
    title: 'SQL Database Analysis',
    course: 'daap',
    levelStage: 'Mini Project · Week 6',
    routePath: 'DAAP → Data Analytics → SQL Route',
    category: 'Relational Database Engineering',
    objective: 'Analyze a real relational dataset and answer business questions with end-to-end SQL.',
    productionFocus: 'Query correctness, performance awareness, reusable SQL and business interpretation of results.',
    description: 'Comprehensive multi-table relational schema analysis executing complex business queries, Common Table Expressions (CTEs), window functions, and query plan optimization.',
    deliverables: [
      'PostgreSQL / MySQL Relational Schema',
      'Window Functions & CTE Queries',
      'Query Optimization & Indexing',
    ],
    coreTools: ['PostgreSQL / MySQL', 'Joins & Subqueries', 'CTEs', 'Window Functions', 'Query Optimization'],
    websiteOutput: 'Website card → SQL Analytics → Business Questions → Query case study',
  },
  {
    id: 'daap-03',
    tag: '03',
    title: 'Retail Dataset EDA & Insight Report',
    course: 'daap',
    levelStage: 'Mini Project · Week 9',
    routePath: 'DAAP → Data Analytics → Python Route',
    category: 'Python & Exploratory Data Analysis',
    objective: 'Perform complete exploratory data analysis on a retail dataset and communicate patterns visually.',
    productionFocus: 'Missing-value handling, outlier awareness, reproducible analysis and clear data storytelling.',
    description: 'End-to-end exploratory data analysis on real-world retail transactions, featuring missing-value treatment, statistical outlier isolation, and high-impact visual storytelling.',
    deliverables: [
      'Jupyter EDA Notebook Artifact',
      'Missing-Value & Outlier Treatment',
      'Matplotlib & Seaborn Visual Story',
    ],
    coreTools: ['Python', 'Pandas & NumPy', 'Matplotlib & Seaborn', 'Descriptive Statistics', 'EDA Notebooks'],
    websiteOutput: 'Website card → Python Data Analysis → EDA → Notebook + visual story',
  },
  {
    id: 'daap-04',
    tag: '04',
    title: 'HR / Sales Power BI Intelligence Dashboard',
    course: 'daap',
    levelStage: 'Mini Project · Week 11',
    routePath: 'DAAP → Business Intelligence → Power BI Route',
    category: 'Business Intelligence & Modeling',
    objective: 'Create an interactive business dashboard with data modeling, DAX and decision-oriented KPIs.',
    productionFocus: 'Model quality, KPI consistency, refresh-ready data preparation and executive-friendly visualization.',
    description: 'Production-grade enterprise business intelligence dashboard built on a star schema, automated Power Query ETL pipelines, custom DAX measures, and drill-through analytics.',
    deliverables: [
      'Star Schema & Relationships Model',
      'Custom DAX KPI Measures Library',
      'Executive Canvas & Drill-Throughs',
    ],
    coreTools: ['Power BI Desktop', 'Power Query ETL', 'Star Schema Modeling', 'DAX Measures', 'Interactive Slicers'],
    websiteOutput: 'Website card → Power BI → Business Intelligence → Dashboard demo',
  },
  {
    id: 'daap-05',
    tag: '05',
    title: 'End-to-End Data Analytics Capstone',
    course: 'daap',
    levelStage: 'Capstone · Week 12',
    routePath: 'DAAP → Data Analytics → Capstone Route',
    category: 'Full-Stack Analytics Capstone',
    objective: 'Take raw data through cleaning, SQL analysis, Python EDA and a final Power BI dashboard, then present findings.',
    productionFocus: 'End-to-end reproducibility, data quality, cross-tool consistency and presentation of actionable findings.',
    description: 'The definitive portfolio capstone: raw enterprise ingestion → SQL relational extraction → Python EDA & statistical modeling → interactive Power BI executive reporting.',
    deliverables: [
      'End-to-End Pipeline & Cleaning',
      'Relational SQL & Python EDA Analysis',
      'Power BI Executive Dashboard & Defense',
    ],
    coreTools: ['Excel / Power Query', 'PostgreSQL / SQL', 'Python / Pandas', 'Power BI', 'Executive Presentation'],
    websiteOutput: 'Website card → DAAP Capstone → Full analytics case study → Portfolio-ready output',
  },
];

export const CRPC_PROJECTS: ProjectData[] = [
  {
    id: 'crpc-01',
    tag: '01',
    title: 'Enterprise RAG Knowledge Agent',
    course: 'crpc',
    levelStage: 'Advanced Flagship · Phase 1',
    routePath: 'CRPC → GenAI & Agentic AI → RAG Route',
    category: 'Enterprise Generative AI',
    objective: 'Turn document Q&A into an enterprise knowledge assistant with retrieval, citations, controlled access and evaluation.',
    productionFocus: 'Hallucination control, stale documents, retrieval quality, prompt injection, data leakage, access control and evaluation.',
    description: 'Enterprise knowledge assistant integrating vector semantic search, document chunking pipelines, citation synthesis, prompt injection protection, and rigorous evaluation benchmarks.',
    deliverables: [
      'Vector Store Embeddings (FAISS/Chroma)',
      'Context Retrieval & Citation Defense Pipeline',
      'RAG Evaluation & Hallucination Benchmark',
    ],
    coreTools: ['LLM APIs', 'FAISS / Chroma', 'LangChain / LlamaIndex', 'Python', 'RAG Evaluation'],
    websiteOutput: 'Website card → Enterprise RAG → Architecture → Live demo → Evaluation report',
  },
  {
    id: 'crpc-02',
    tag: '02',
    title: 'Tool-Using Business Data Agent',
    course: 'crpc',
    levelStage: 'Advanced Flagship · Phase 1',
    routePath: 'CRPC → Agentic AI → Data + API Route',
    category: 'Autonomous Agent Engineering',
    objective: 'Build an agent that selects approved tools, queries business data and combines database/API evidence into an answer.',
    productionFocus: 'Tool authorization, unsafe queries, SQL injection, retries, timeouts, idempotency, audit logs and human approval.',
    description: 'Autonomous decision-making agent that autonomously selects authorized database tools, safely executes SQL queries over business databases, enforces idempotency, and maintains full audit logging.',
    deliverables: [
      'Tool-Calling Agent Execution Loop',
      'FastAPI & Secure SQL Query Bridge',
      'Audit Trail, Idempotency & Human Approval Gate',
    ],
    coreTools: ['Python', 'SQL & Databases', 'FastAPI', 'Function / Tool Calling', 'LangChain / LangGraph'],
    websiteOutput: 'Website card → AI Data Agent → Tool flow → SQL/API demo → Audit trail',
  },
  {
    id: 'crpc-03',
    tag: '03',
    title: 'Multi-Agent Enterprise Workflow',
    course: 'crpc',
    levelStage: 'Advanced Flagship · Phase 1',
    routePath: 'CRPC → Agentic AI → Multi-Agent Route',
    category: 'Multi-Agent Orchestration',
    objective: 'Coordinate specialist agents to complete a business task with planning, execution, review and controlled handoff.',
    productionFocus: 'Agent loops, conflicting outputs, state management, tool failures, cost/latency control and approval gates.',
    description: 'Collaborative multi-agent orchestration pattern utilizing specialized planner, executor, and reviewer agents with persistent state management, conflict resolution, and human review gates.',
    deliverables: [
      'Planner-Executor-Reviewer Coordination',
      'State Management & Memory Persistence',
      'Approval Gates & Latency/Cost Guardrails',
    ],
    coreTools: ['CrewAI / LangGraph', 'Autonomous Agents', 'Shared Memory / State', 'Python', 'Structured Outputs'],
    websiteOutput: 'Website card → Multi-Agent Systems → Workflow diagram → Demo → Evaluation',
  },
  {
    id: 'crpc-04',
    tag: '04',
    title: 'AI-Assisted DevOps Incident Response Agent',
    course: 'crpc',
    levelStage: 'Advanced Flagship · Phase 2',
    routePath: 'CRPC → Cloud/DevOps → AI-Assisted DevOps Route',
    category: 'AIOps & Cloud Incident Automation',
    objective: 'Assist engineers with alert triage, log analysis and runbook selection while keeping risky actions under human control.',
    productionFocus: 'Alert storms, false positives, incomplete logs, unsafe remediation, credentials, rollback, observability and auditability.',
    description: 'Production cloud incident response system monitoring Prometheus & Grafana alerts, performing root-cause log diagnostics via LLM reasoning, and generating validated runbook actions with rollback safeguards.',
    deliverables: [
      'Alert Triage & Log Analysis Pipeline',
      'Prometheus & Grafana Telemetry Bridge',
      'Automated Runbook Remediation with Rollback',
    ],
    coreTools: ['AWS & Linux', 'Docker & Kubernetes', 'Prometheus & Grafana', 'CloudWatch & Logs', 'LLM Runbook Automation'],
    websiteOutput: 'Website card → AIOps / DevOps Agent → Incident scenario → Architecture → AWS deployment',
  },
];

export const FDE_PROJECTS: ProjectData[] = [
  {
    id: 'fde-01',
    tag: '01',
    title: 'Secure AI Application & Deployment Platform',
    course: 'fde',
    levelStage: 'Advanced Flagship · Cross-Phase',
    routePath: 'FDE AI Engineer → Enterprise AI Implementation → AI Engineering Route',
    category: 'Enterprise AI Implementation',
    objective: 'Build and deploy a production-style AI application with APIs, RAG/agents, containers, CI/CD, cloud infrastructure, evaluation and security controls.',
    productionFocus: 'Prompt injection, data leakage, rate limiting, caching, queues, secrets, model evaluation, monitoring and deployment reliability.',
    description: 'A production-style enterprise AI application unifying FastAPI endpoints, RAG semantic vector retrieval, autonomous multi-tool agent workflows, Docker containerization, automated GitHub CI/CD pipelines, cloud orchestration, model evaluation suites, and enterprise security guardrails.',
    deliverables: [
      'Secure FastAPI & Vector RAG Pipeline',
      'Autonomous Tool-Calling Agent Workflow',
      'Containerized CI/CD & Cloud Deployment with Guardrails',
    ],
    coreTools: [
      'Python',
      'FastAPI',
      'SQL / Databases',
      'LLMs & Embeddings',
      'RAG & Vector DBs',
      'AI Agents & MCP',
      'Docker & Kubernetes',
      'CI/CD & Cloud',
      'Observability & Evaluation',
      'Prompt Injection Defense',
    ],
    websiteOutput: 'Website card → FDE AI Engineer → Architecture → CI/CD → Cloud deployment → Security/evaluation report',
  },
];

export const ALL_PROJECTS = [...DAAP_PROJECTS, ...CRPC_PROJECTS, ...FDE_PROJECTS];

