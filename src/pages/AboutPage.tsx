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
  FileText,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { BRAND_DATA } from '@/data/brandData';
import { FiveStageVisualJourney } from '@/components/home/FiveStageVisualJourney';
import { useCurriculumModal } from '@/components/curriculum/CurriculumContext';
import {
  AwsLogo,
  DockerLogo,
  ServiceNowLogo,
  SqlLogo,
  PowerBiLogo,
  RagLogo,
  AgenticAiLogo,
} from '@/components/icons/TechLogos';

export const AboutPage: React.FC = () => {
  const crpc = BRAND_DATA.programs.find((p) => p.id === 'crpc')!;
  const daap = BRAND_DATA.programs.find((p) => p.id === 'daap')!;
  const { openCurriculum } = useCurriculumModal();

  // Editorial Who We Are Pillars
  const whoWeArePillars = [
    {
      title: 'Vizag-Based Identity',
      tag: 'Regional Engineering Core',
      desc: 'Headquartered in Visakhapatnam, Andhra Pradesh. We draw inspiration from the city’s expanding IT landscape, maintaining active links to technology corridors including Rushikonda IT Park and VSEZ.',
      icon: <MapPin className="w-5 h-5 text-brand-orange" />,
    },
    {
      title: 'Technology-Focused',
      tag: 'Core Modern Stacks',
      desc: 'Our instruction centers purely on high-demand, modern technology disciplines: Cloud infrastructure, distributed data systems, automated CI/CD pipelines, business analytics, and agentic AI.',
      icon: <Cpu className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Outcome-Driven Pedagogy',
      tag: 'Methodical Learning',
      desc: 'We are committed to structured, outcome-driven education that prioritizes hands-on lab work, code authoring, real architectural debugging, and demonstrable portfolio artifacts over passive lecture viewing.',
      icon: <GraduationCap className="w-5 h-5 text-brand-blue" />,
    },
    {
      title: 'Accessible Virtual Classrooms',
      tag: '100% Live Online',
      desc: 'Our interactive live classrooms break geographic boundaries, connecting students with experienced instructors, live code walkthroughs, and collaborative peer learning environments.',
      icon: <Globe2 className="w-5 h-5 text-[#0a6680]" />,
    },
  ];

  // 7 Major Technology Areas with SVG Logos
  const techFocusAreas = [
    {
      name: 'Cloud Computing',
      tools: 'AWS (EC2, VPC, ALB, RDS, IAM)',
      desc: 'Scalable cloud infrastructure design, virtual networking, secure access control, and high-availability architecture.',
      icon: <Cloud className="w-5 h-5 text-brand-blue" />,
      logo: <AwsLogo className="w-5 h-5" />,
    },
    {
      name: 'Data Engineering & SQL',
      tools: 'SQL, PostgreSQL, Relational Modeling',
      desc: 'Multi-table database querying, aggregations, window functions, and schema normalization for robust data operations.',
      icon: <Database className="w-5 h-5 text-brand-blue" />,
      logo: <SqlLogo className="w-5 h-5" />,
    },
    {
      name: 'DevOps & CI/CD Pipelines',
      tools: 'Docker, Kubernetes, Jenkins, Linux',
      desc: 'Automated continuous integration and delivery pipelines, container orchestration, and server administration.',
      icon: <Wrench className="w-5 h-5 text-brand-blue" />,
      logo: <DockerLogo className="w-5 h-5" />,
    },
    {
      name: 'Business Analytics & BI',
      tools: 'Power BI, DAX, Advanced Excel',
      desc: 'Interactive executive dashboards, KPI modeling, automated reporting, and quantitative decision-support frameworks.',
      icon: <LineChart className="w-5 h-5 text-brand-blue" />,
      logo: <PowerBiLogo className="w-5 h-5" />,
    },
    {
      name: 'Generative AI & RAG',
      tools: 'LLMs, Prompt Engineering, RAG',
      desc: 'Context-augmented intelligence, semantic document retrieval, and enterprise AI assistant integrations.',
      icon: <Sparkles className="w-5 h-5 text-brand-blue" />,
      logo: <RagLogo className="w-5 h-5" />,
    },
    {
      name: 'Agentic AI Systems',
      tools: 'Multi-Tool Agents, LangChain, CrewAI',
      desc: 'Autonomous multi-agent analytical pipelines capable of planning, executing tools, evaluating findings, and reporting.',
      icon: <Bot className="w-5 h-5 text-brand-blue" />,
      logo: <AgenticAiLogo className="w-5 h-5" />,
    },
    {
      name: 'Enterprise IT Workflows',
      tools: 'ServiceNow ITSM, Workflow Automation',
      desc: 'Enterprise IT service management, incident handling, change approvals, and organizational service automation.',
      icon: <Building2 className="w-5 h-5 text-brand-blue" />,
      logo: <ServiceNowLogo className="w-5 h-5" />,
    },
  ];

  return (
    <div className="space-y-20 lg:space-y-32 pb-20">
      {/* ========================================================================= */}
      {/* HERO SECTION WITH AUTHENTIC PHOTOGRAPHY */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-atmospheric border-b border-brand-border/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
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

              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl leading-relaxed">
                Cloudariss Technologies is a Visakhapatnam-based technology and learning organization dedicated to hands-on competence across Cloud, Data, DevOps, Business Analytics, and emerging Agentic AI systems.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  to="/courses"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Programs
                </Button>
                <Button
                  to="/contact"
                  variant="outline"
                  size="lg"
                >
                  Talk to Us
                </Button>
              </div>

              {/* Fast Proof Points */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-brand-border/60">
                <div>
                  <div className="text-xl font-extrabold text-brand-navy font-mono">Vizag</div>
                  <div className="text-xs text-slate-500 font-medium">Headquarters</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-brand-blue font-mono">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Live Labs</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-brand-orange font-mono">10+</div>
                  <div className="text-xs text-slate-500 font-medium">Capstones</div>
                </div>
                <div>
                  <div className="text-xl font-extrabold text-emerald-600 font-mono">Top 5</div>
                  <div className="text-xs text-slate-500 font-medium">Internship Pathway</div>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-brand-blue/20 shadow-2xl bg-white group">
                <img
                  src="/brand/brochures/brighter-tomorrow.jpg"
                  alt="Empowering Young Minds for a Brighter Tomorrow"
                  className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-section/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5">
                  <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">
                    Our Mission
                  </span>
                  <div className="text-lg font-bold leading-tight">
                    Empowering Young Minds For a Brighter Tomorrow
                  </div>
                  <p className="text-xs text-slate-300">
                    Transforming academic potential into verifiable engineering capability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHO WE ARE (Pictorial Grid) */}
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
      {/* OUR FOCUS AREAS (Logo-Rich Domain Grid) */}
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
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-brand-surface-blue flex items-center justify-center border border-brand-border">
                    {area.icon}
                  </div>
                  <div className="p-1.5 rounded-md bg-slate-50 border border-slate-200">
                    {area.logo}
                  </div>
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
      {/* OUR APPROACH (Interactive Five-Stage Visual Journey) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Methodology"
          title="Our Approach"
          subtitle="A five-stage learning progression that balances rigorous foundational concepts with practical implementation and career readiness."
        />

        <FiveStageVisualJourney />

        <div className="p-4 rounded-xl bg-slate-50 border border-brand-border/70 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            * Our approach is engineered to develop demonstrable technical proficiency and interview readiness. We do not promise that completing a program guarantees employment.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROGRAMS (With Official Brochure Visuals & PDF Viewer CTAs) */}
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
            className="flex flex-col justify-between space-y-6 overflow-hidden"
          >
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-brand-border h-48 bg-slate-100">
                <img
                  src="/brand/brochures/crpc-brochure.jpg"
                  alt="CRPC Program Brochure"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="blue" size="sm">
                    {crpc.code}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3">
                  <button
                    type="button"
                    onClick={() => openCurriculum('crpc')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-navy/90 hover:bg-brand-navy text-white text-xs font-bold shadow-md backdrop-blur-sm transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>View Curriculum (PDF)</span>
                  </button>
                </div>
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

            <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => openCurriculum('crpc')}
                className="px-3.5 py-2 rounded-lg bg-brand-surface-blue text-brand-navy hover:text-brand-blue text-xs font-bold border border-brand-border"
              >
                View PDF Syllabus
              </button>
              <Button
                to="/courses/crpc"
                variant="secondary"
                size="sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore CRPC
              </Button>
            </div>
          </Card>

          {/* DAAP */}
          <Card
            variant="white"
            padding="lg"
            borderAccent="orange"
            className="flex flex-col justify-between space-y-6 overflow-hidden"
          >
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden border border-brand-border h-48 bg-slate-100">
                <img
                  src="/brand/brochures/daap-brochure.jpg"
                  alt="DAAP Program Brochure"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="orange" size="sm">
                    {daap.code}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3">
                  <button
                    type="button"
                    onClick={() => openCurriculum('daap')}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-navy/90 hover:bg-brand-navy text-white text-xs font-bold shadow-md backdrop-blur-sm transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-brand-orange" />
                    <span>View Curriculum (PDF)</span>
                  </button>
                </div>
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

            <div className="pt-4 border-t border-brand-border flex items-center justify-between gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => openCurriculum('daap')}
                className="px-3.5 py-2 rounded-lg bg-brand-orange/10 text-brand-navy hover:text-brand-orange text-xs font-bold border border-brand-orange/30"
              >
                View PDF Syllabus
              </button>
              <Button
                to="/courses/daap"
                variant="primary"
                size="sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore DAAP
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BRAND STATEMENT WITH VISUAL STORYTELLING */}
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
