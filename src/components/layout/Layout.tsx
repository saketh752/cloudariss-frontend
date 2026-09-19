import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TopBanner } from './TopBanner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CurriculumProvider } from '@/components/curriculum/CurriculumContext';
import { CurriculumModal } from '@/components/curriculum/CurriculumModal';

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Cloudariss Technologies — Learn. Build. Get Hired.',
    description: 'Empowering Careers with Cloud, Data & Automation Skills. Industry-oriented technology programs with live instructor-led learning.',
  },
  '/courses': {
    title: 'Programs Overview | Cloudariss Technologies',
    description: 'Explore Cloudariss career accelerator programs: CRPC (Cloud, Data & Infrastructure) and DAAP (Data Analytics & AI).',
  },
  '/courses/crpc': {
    title: 'CRPC — Cloud & Data Career Accelerator | Cloudariss Technologies',
    description: '12-week comprehensive accelerator covering Python, Data Science, AWS Cloud, Docker, Kubernetes, Jenkins CI/CD, and ServiceNow.',
  },
  '/courses/daap': {
    title: 'DAAP — Data Analyst Accelerator Program | Cloudariss Technologies',
    description: '12-week data analytics program covering Excel, SQL, Python EDA, Power BI dashboards, Generative AI (RAG), and Agentic AI analytics.',
  },
  '/offerings': {
    title: 'What We Offer | Cloudariss Technologies',
    description: 'Structured technical learning, hands-on projects, modern technology stack, and career preparation ecosystem.',
  },
  '/why-cloudariss': {
    title: 'Why Cloudariss | Technology Skills That Move Beyond Theory',
    description: 'Practical learning philosophy, verifiable project artifacts, industry exposure, and compounding career preparation.',
  },
  '/about': {
    title: 'About Us | Cloudariss Technologies',
    description: 'Vizag-based technology and learning company focused on practical skills across Cloud, Data, Automation, Analytics, and emerging AI.',
  },
  '/contact': {
    title: 'Contact & Admissions | Cloudariss Technologies',
    description: 'Get in touch with the Cloudariss team for program inquiries, schedules, admissions guidance, or support.',
  },
  '/verify-certificate': {
    title: 'Certificate Verification | Cloudariss Technologies',
    description: 'Verify the authenticity of an official Cloudariss certificate using your certificate identification number.',
  },
};

export const Layout: React.FC = () => {
  const location = useLocation();

  // Scroll to top on route change & update SEO metadata
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    const currentMeta = PAGE_METADATA[location.pathname] || {
      title: 'Page Not Found | Cloudariss Technologies',
      description: 'The requested page could not be found on Cloudariss Technologies.',
    };

    document.title = currentMeta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentMeta.description);
    }
  }, [location.pathname, location.hash]);

  return (
    <CurriculumProvider>
      <div className="min-h-screen flex flex-col bg-brand-bg-light text-slate-800 antialiased selection:bg-brand-blue selection:text-white">
        {/* Top Banner with approved Vinayaka offer and CAT@AKHI coupon */}
        <TopBanner />

        {/* Sticky, responsive Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Foundation Footer */}
        <Footer />

        {/* Global Interactive Curriculum PDF Viewer Modal */}
        <CurriculumModal />
      </div>
    </CurriculumProvider>
  );
};

