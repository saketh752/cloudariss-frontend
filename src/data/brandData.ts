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
  whatsappUrl: 'https://wa.me/916302680457',
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
        'Hands-on Labs & Real-World Capstone',
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
        '12 Weeks · 5+ Hands-on Mini Projects',
        '1 End-to-End Enterprise Capstone',
        'Generative AI & Agentic AI workflows built-in',
        'Saturday Resume & LinkedIn Optimization',
        'Sunday Technical & HR Mock Circuit',
        'Dedicated Job Assistance & Interview Prep',
      ],
    },
  ] as ProgramInfo[],
};

