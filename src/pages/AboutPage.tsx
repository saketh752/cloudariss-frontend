import React from 'react';
import {
  ArrowRight,
  MapPin,
  Cpu,
  GraduationCap,
  Globe2,
  Cloud,
  Database,
  Wrench,
  LineChart,
  Bot,
  Sparkles,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BRAND_DATA } from '@/data/brandData';

export const AboutPage: React.FC = () => {
  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;

  // Editorial Who We Are Pillars
  const whoWeArePillars = [
    {
      title: 'Vizag-Based',
      tag: 'Regional Identity',
      desc: 'Headquartered in Visakhapatnam, Andhra Pradesh. We draw inspiration from the city’s growing IT presence, maintaining close connections to technology clusters including the Rushikonda IT Park and VSEZ corridors.',
      icon: <MapPin className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Technology-Focused',
      tag: 'Core Engineering',
      desc: 'Our work centers purely on high-demand, modern technology disciplines: Cloud architecture, distributed data systems, automated CI/CD pipelines, business analytics, and artificial intelligence.',
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Learning-Oriented',
      tag: 'Methodical Pedagogy',
      desc: 'We are committed to structured, outcome-driven learning that prioritizes hands-on lab work, code authoring, real architectural debugging, and demonstrable portfolio artifacts over passive lecture viewing.',
      icon: <GraduationCap className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Accessible Through Virtual Learning',
      tag: '100% Online Delivery',
      desc: 'Our interactive live classrooms break geographic boundaries, connecting students with experienced instructors, live code walkthroughs, and collaborative peer learning from anywhere.',
      icon: <Globe2 className="w-5 h-5 text-[#0a6680]" />,
    },
  ];

  // 7 Major Technology Areas
  const techFocusAreas = [
    {
      name: 'Cloud Computing',
      tools: 'AWS (EC2, VPC, ALB, RDS, IAM)',
      desc: 'Scalable cloud infrastructure design, virtual networking, secure access control, and high-availability architecture.',
      icon: <Cloud className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Data Engineering & Querying',
      tools: 'SQL, PostgreSQL, Relational Modeling',
      desc: 'Multi-table database querying, aggregations, window functions, and schema normalization for robust data storage.',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'DevOps & Automation',
      tools: 'Docker, Kubernetes, Jenkins, Linux',
      desc: 'Automated continuous integration and delivery pipelines, container orchestration, and server administration.',
      icon: <Wrench className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Business Analytics',
      tools: 'Power BI, DAX, Advanced Excel',
      desc: 'Interactive business dashboards, KPI modeling, automated reporting, and quantitative decision-support frameworks.',
      icon: <LineChart className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Generative AI',
      tools: 'LLMs, Prompt Engineering, RAG Architectures',
      desc: 'Context-augmented intelligence, semantic document retrieval, and enterprise AI assistant integrations.',
      icon: <Sparkles className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Agentic AI',
      tools: 'Multi-Tool Agents, LangChain, CrewAI',
      desc: 'Autonomous multi-agent analytical pipelines capable of planning, executing tools, evaluating findings, and reporting.',
      icon: <Bot className="w-5 h-5 text-brand-blue" />,
    },
    {
      name: 'Enterprise Technology',
      tools: 'ServiceNow ITSM, Workflow Management',
      desc: 'Enterprise IT service management, incident handling, change approvals, and organizational service automation.',
      icon: <Building2 className="w-5 h-5 text-brand-blue" />,
    },
  ];

  // 5-Stage Learning Approach
  const approachStages = [
    {
      num: '01',
      stage: 'LEARN',
      title: 'Conceptual Depth',
      desc: 'Live instructor-led foundational classes breaking down technical concepts into intuitive, rigorous mental models.',
      color: 'blue',
    },
    {
      num: '02',
      stage: 'PRACTICE',
      title: 'Daily Hands-on Labs',
      desc: 'Interactive sandboxes and code exercises where learners apply theory to practical programming and deployment challenges.',
      color: 'blue',
    },
    {
      num: '03',
      stage: 'BUILD',
      title: 'Portfolio Projects',
      desc: 'Constructing multi-tier cloud deployments, automated pipelines, and BI dashboards hosted on personal GitHub profiles.',
      color: 'cyan',
    },
    {
      num: '04',
      stage: 'PREPARE',
      title: 'Career Strategy',
      desc: 'Saturday ATS resume audits, LinkedIn headline positioning, and Sunday mock interview drills with technical and HR panels.',
      color: 'orange',
    },
    {
      num: '05',
      stage: 'GET HIRED',
      title: 'Career Opportunities',
      desc: 'Equipped with verified projects and interview confidence, graduates navigate job searches and competitive industry interviews.',
      color: 'orange',
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-32 pb-20">
      {/* ========================================================================= */}
      {/* HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-surface-blue border border-brand-blue/30 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-xs font-extrabold tracking-widest text-brand-navy uppercase font-heading">
                ABOUT CLOUDARISS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Building Careers{' '}
              <span className="text-gradient-tech">Through Technology.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Cloudariss Technologies is a Vizag-based technology and learning company focused on practical skills across Cloud, Data, Automation, Analytics, and emerging AI technologies.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHO WE ARE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Company Identity"
          title="Who We Are"
          subtitle="A focused technology and education organization established to bridge the gap between academic theory and practical software engineering capability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whoWeArePillars.map((item, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="lg"
              hoverEffect
              borderAccent={idx === 0 ? 'orange' : 'blue'}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                  {item.icon}
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  {item.tag}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR FOCUS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Technology Domains"
          title="Our Focus Areas"
          subtitle="Cloudariss focuses on the key technological building blocks that modern software and data organizations depend upon."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techFocusAreas.map((area, idx) => (
            <Card
              key={idx}
              variant="white"
              padding="md"
              hoverEffect
              borderAccent="blue"
              className="space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                  {area.icon}
                </div>
                <h3 className="text-base font-bold text-brand-navy">
                  {area.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {area.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-brand-border/60">
                <span className="text-[11px] font-mono text-brand-blue font-semibold">
                  {area.tools}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUR APPROACH */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Methodology"
          title="Our Approach"
          subtitle="A five-stage learning progression that balances rigorous foundational concepts with practical implementation and career readiness."
        />

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-orange -translate-y-6 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {approachStages.map((st) => (
              <div
                key={st.num}
                className="p-5 rounded-xl bg-white border border-brand-border shadow-card hover:border-brand-blue transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-2xl font-extrabold font-mono ${
                      st.color === 'orange'
                        ? 'text-brand-orange'
                        : st.color === 'cyan'
                        ? 'text-[#0a6680]'
                        : 'text-brand-blue'
                    }`}
                  >
                    {st.num}
                  </span>
                  <span
                    className={`w-3 h-3 rounded-full ${
                      st.color === 'orange'
                        ? 'bg-brand-orange'
                        : st.color === 'cyan'
                        ? 'bg-brand-cyan'
                        : 'bg-brand-blue'
                    }`}
                  />
                </div>

                <h3 className="text-base font-bold text-brand-navy uppercase tracking-wider">
                  {st.stage}
                </h3>
                <p className="text-sm font-semibold text-slate-700">
                  {st.title}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            * Our approach is engineered to develop demonstrable technical proficiency and interview readiness. We do not promise that completing a program guarantees employment.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROGRAMS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Our Programs"
          title="Flagship Career Accelerators"
          subtitle="Explore the two specialized pathways offered by Cloudariss Technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* CRPC */}
          <Card
            variant="white"
            padding="lg"
            borderAccent="blue"
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="blue" size="md">
                  {crpc.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  12 Weeks · Live Online
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-navy">
                  Cloud & Data Career Accelerator
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Comprehensive 12-week curriculum spanning Python programming, Data Science essentials, AWS Cloud infrastructure, Docker containerization, Kubernetes, Jenkins CI/CD, and ServiceNow administration.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Python', 'Data Science', 'AWS Cloud', 'Docker', 'Kubernetes', 'Jenkins', 'ServiceNow'].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-brand-surface-blue text-brand-navy border border-brand-border text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border">
              <Button
                to="/courses/crpc"
                variant="secondary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore CRPC Curriculum
              </Button>
            </div>
          </Card>

          {/* DAAP */}
          <Card
            variant="white"
            padding="lg"
            borderAccent="orange"
            className="flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <Badge variant="orange" size="md">
                  {daap.code}
                </Badge>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                  12 Weeks · Live Online
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-brand-navy">
                  Data Analyst Accelerator Program
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Fast-paced 12-week sprint taking learners from advanced Excel formulas and complex SQL querying to Python EDA, executive Power BI dashboards, Generative AI (RAG), and autonomous Agentic AI workflows.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Excel', 'SQL', 'Python & Pandas', 'Power BI', 'Generative AI', 'Agentic AI'].map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-brand-orange/10 text-brand-navy border border-brand-orange/30 text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border">
              <Button
                to="/courses/daap"
                variant="primary"
                size="md"
                fullWidth
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore DAAP Curriculum
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BRAND STATEMENT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark-section border border-brand-blue/40 p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-brand-cyan">
              Our Guiding Brand Principle
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Learn. Build.{' '}
              <span className="text-brand-orange">Get Hired.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto pt-2">
              {BRAND_DATA.positioning}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONTACT CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          variant="surface"
          padding="lg"
          className="border border-brand-border text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-surface-blue flex items-center justify-center mx-auto border border-brand-border text-brand-blue">
            <CheckCircle2 className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
            Have Questions About Cloudariss?
          </h3>

          <p className="text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Reach out to our team for course details, upcoming batch schedules, admissions guidance, or curriculum questions.
          </p>

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
        </Card>
      </section>
    </div>
  );
};
