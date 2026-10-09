export interface ProgramInfo {
  id: string;
  slug: string;
  code: string;
  name: string;
  tagline: string;
  duration: string;
  modulesCount: string;
  format: string;
  description: string;
  primaryTools: string[];
  features: string[];
}

export const BRAND_DATA = {
  name: 'Cloudariss Technologies',
  shortName: 'Cloudariss',
  tagline: 'Learn. Build. Get Hired.',
  positioning: 'Empowering Careers with Cloud, Data & Automation Skills.',
  location: 'Visakhapatnam (Vizag) & 100% Online Live',
  phone1: '+91 90593 34622',
  phone1Tel: 'tel:+919059334622',
  whatsappPhone: '+91 63026 80457',
  whatsappUrl: 'https://wa.me/916302680457?text=Hi%20Cloudariss%20team%2C%20I%20am%20interested%20in%20learning%20more%20about%20your%20technology%20programs.%20Please%20share%20the%20upcoming%20batch%20schedule%20and%20details.',
  instagram: {
    handle: '@cloudariss.tech',
    url: 'https://www.instagram.com/cloudariss.tech/?hl=en',
  },
  linkedin: {
    name: 'Cloudariss Technologies',
    url: 'https://www.linkedin.com/company/cloudariss-technologies/posts/?feedView=all',
  },
  domain: 'cloudariss.com',
  offer: {
    title: 'Vinayaka Chavithi Special Offer',
    originalPrice: '₹45,000',
    offerPrice: '₹17,000',
    couponCode: 'CAT@AKHI',
    note: 'Limited time cohort pricing. Apply coupon at enrollment.',
  },
  programs: [
    {
      id: 'crpc',
      slug: 'crpc',
      code: 'CRPC',
      name: 'Cloud & Data Career Accelerator',
      tagline: 'Skills for Today. Opportunities for Tomorrow.',
      duration: '12 Weeks (3 Months)',
      modulesCount: '8 Modules',
      format: '100% Online · Live Instructor-Led',
      description: 'Comprehensive curriculum spanning Python foundations, Data Science essentials, AWS Cloud architecture, DevOps CI/CD pipelines, and ServiceNow enterprise administration.',
      primaryTools: [
        'Python',
        'Data Science',
        'AWS Cloud',
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Grafana',
        'ServiceNow',
        'GitHub',
        'VS Code',
      ],
      features: [
        '12 Weeks · 8 Deep-dive Modules',
        '4 Advanced Flagship Projects (GenAI, Agents & AIOps)',
        'Virtual Company Sessions (Vizag IT Park exposure)',
        'Saturday Career Strategy & Resume Workshops',
        'Sunday Group Discussions & Mock Interviews',
        'Top 5 Student Internship Selection Pathway',
      ],
    },
    {
      id: 'daap',
      slug: 'daap',
      code: 'DAAP',
      name: 'Data Analyst Accelerator Program',
      tagline: 'From Data to Opportunities · AI & Agentic Analytics',
      duration: '12 Weeks (3 Months)',
      modulesCount: '12-Week Sprint',
      format: '100% Online · Live Instructor-Led',
      description: 'Go from Excel and SQL fundamentals to Python, Power BI dashboards, Generative AI (RAG), and autonomous Agentic AI analytics workflows.',
      primaryTools: [
        'Microsoft Excel',
        'SQL (PostgreSQL/MySQL)',
        'Python & Pandas',
        'Power BI & DAX',
        'Generative AI & RAG',
        'Agentic AI Frameworks',
        'LangChain & CrewAI',
        'Claude & ChatGPT',
      ],
      features: [
        '12 Weeks · 4 Hands-on Projects + 1 Capstone (5 Projects)',
        'End-to-End Analytics Pipeline & BI Executive Deck',
        'Generative AI & Agentic AI workflows built-in',
        'Saturday Resume & LinkedIn Optimization',
        'Sunday Technical & HR Mock Circuit',
        'Dedicated Job Assistance & Interview Prep',
      ],
    },
    {
      id: 'fde',
      slug: 'fde',
      code: 'FDE',
      name: 'FDE AI Engineer',
      tagline: 'Forward Deployed Engineer · Enterprise AI Implementation',
      duration: '6 Months',
      modulesCount: '10 Core Disciplines',
      format: '100% Online · Live Instructor-Led',
      description: 'A premium track combining software engineering, Generative AI, autonomous agents, cloud architecture, model deployment, system evaluation, security controls, and enterprise customer problem-solving.',
      primaryTools: [
        'Python',
        'FastAPI',
        'PostgreSQL',
        'LLMs & GenAI',
        'RAG & Vector DBs',
        'AI Agents & MCP',
        'Docker',
        'Kubernetes',
        'CI/CD Pipelines',
        'AWS / Cloud',
        'Observability',
        'Security & Guardrails',
      ],
      features: [
        '6 Months · Enterprise AI Engineering Track',
        '1 Cross-Stack Flagship Project (Secure AI Platform)',
        '100% Placement Assistance Included',
        'Production AI System Architecture & RAG Pipelines',
        'Autonomous Agents, Function Calling & MCP Frameworks',
        'Docker, Kubernetes, CI/CD & Cloud Model Serving',
      ],
    },
  ] as ProgramInfo[],
};
