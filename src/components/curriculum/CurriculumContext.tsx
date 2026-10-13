import React, { createContext, useContext, useState } from 'react';

export type ProgramId =
  | 'crpc'
  | 'daap'
  | 'fde'
  | 'java'
  | 'python'
  | 'c'
  | 'dsa'
  | 'frontend'
  | 'fullstack'
  | 'dbms'
  | 'networks'
  | 'cybersecurity'
  | 'genai'
  | 'agenticai'
  | 'prompteng'
  | 'deeplearning'
  | 'sap';

export interface ProgramCurriculumMeta {
  id: string;
  code: string;
  name: string;
  badge: string;
  pdfUrl: string;
  fileName: string;
  trackColor: string;
  duration: string;
}

export const CURRICULUM_DATA: Record<string, ProgramCurriculumMeta> = {
  crpc: {
    id: 'crpc',
    code: 'CRPC',
    name: 'Cloud Ready Professional Curriculum',
    badge: 'Cloud & Data Career Accelerator',
    pdfUrl: '/curriculum/CRPC_CloudData_3Month_Schedule_ONLINE_Updated.pdf',
    fileName: 'CRPC_CloudData_3Month_Schedule_ONLINE_Updated.pdf',
    trackColor: '#0878E8',
    duration: '12 Weeks (3 Months)',
  },
  daap: {
    id: 'daap',
    code: 'DAAP',
    name: 'Data Analyst Accelerator Program',
    badge: 'Data, Analytics, Generative & Agentic AI',
    pdfUrl: '/curriculum/DAAP_GenAI_Agentic_Original_Structure_With_Cloudariss_Logo.pdf',
    fileName: 'DAAP_GenAI_Agentic_Original_Structure_With_Cloudariss_Logo.pdf',
    trackColor: '#19BCE8',
    duration: '12 Weeks (3 Months)',
  },
  fde: {
    id: 'fde',
    code: 'FDE',
    name: 'FDE AI Engineer',
    badge: 'Forward Deployed Engineer · Enterprise AI Implementation',
    pdfUrl: '/curriculum/15_FDE_AI_Engineer.pdf',
    fileName: '15_FDE_AI_Engineer.pdf',
    trackColor: '#00D2FF',
    duration: '6 Months',
  },
  java: {
    id: 'java',
    code: 'JAVA',
    name: 'Java Programming',
    badge: 'Core Programming & Object-Oriented Applications',
    pdfUrl: '/curriculum/01_Java_Programming.pdf',
    fileName: '01_Java_Programming.pdf',
    trackColor: '#ED8B00',
    duration: 'Comprehensive Foundation Track',
  },
  python: {
    id: 'python',
    code: 'PYTHON',
    name: 'Python Foundations',
    badge: 'Applications, Automation & Data',
    pdfUrl: '/curriculum/02_Python_Foundations.pdf',
    fileName: '02_Python_Foundations.pdf',
    trackColor: '#38BDF8',
    duration: 'Comprehensive Foundation Track',
  },
  c: {
    id: 'c',
    code: 'C/C++',
    name: 'C & C++ Programming',
    badge: 'Computational Foundations & Systems',
    pdfUrl: '/curriculum/03_C_C_Programming.pdf',
    fileName: '03_C_C_Programming.pdf',
    trackColor: '#00599C',
    duration: 'Comprehensive Foundation Track',
  },
  dsa: {
    id: 'dsa',
    code: 'DSA',
    name: 'Data Structures & Algorithms',
    badge: 'Problem Solving & Logic Foundations',
    pdfUrl: '/curriculum/04_Data_Structures_Algorithms.pdf',
    fileName: '04_Data_Structures_Algorithms.pdf',
    trackColor: '#A855F7',
    duration: 'Comprehensive Foundation Track',
  },
  frontend: {
    id: 'frontend',
    code: 'FRONTEND',
    name: 'Frontend Web Development',
    badge: 'Modern Responsive Web Interfaces',
    pdfUrl: '/curriculum/05_Frontend_Web_Development.pdf',
    fileName: '05_Frontend_Web_Development.pdf',
    trackColor: '#00D2FF',
    duration: 'Comprehensive Foundation Track',
  },
  fullstack: {
    id: 'fullstack',
    code: 'FULLSTACK',
    name: 'Full Stack Development',
    badge: 'End-to-End Web Applications',
    pdfUrl: '/curriculum/06_Full_Stack_Development.pdf',
    fileName: '06_Full_Stack_Development.pdf',
    trackColor: '#10B981',
    duration: 'Comprehensive Foundation Track',
  },
  dbms: {
    id: 'dbms',
    code: 'DBMS',
    name: 'DBMS & Relational Data',
    badge: 'Database Architecture & Relational Systems',
    pdfUrl: '/curriculum/07_DBMS_Relational_Databases.pdf',
    fileName: '07_DBMS_Relational_Databases.pdf',
    trackColor: '#3B82F6',
    duration: 'Comprehensive Foundation Track',
  },
  networks: {
    id: 'networks',
    code: 'NETWORKS',
    name: 'Computer Networks',
    badge: 'Protocols & Network Systems',
    pdfUrl: '/curriculum/08_Computer_Networks.pdf',
    fileName: '08_Computer_Networks.pdf',
    trackColor: '#6366F1',
    duration: 'Comprehensive Foundation Track',
  },
  cybersecurity: {
    id: 'cybersecurity',
    code: 'CYBERSECURITY',
    name: 'Cybersecurity',
    badge: 'Secure Systems & Threat Defense',
    pdfUrl: '/curriculum/09_Cybersecurity.pdf',
    fileName: '09_Cybersecurity.pdf',
    trackColor: '#F43F5E',
    duration: 'Comprehensive Foundation Track',
  },
  genai: {
    id: 'genai',
    code: 'GENAI',
    name: 'Generative AI',
    badge: 'Create with Large Language Models & RAG',
    pdfUrl: '/curriculum/10_Generative_AI.pdf',
    fileName: '10_Generative_AI.pdf',
    trackColor: '#8B5CF6',
    duration: 'Comprehensive Foundation Track',
  },
  agenticai: {
    id: 'agenticai',
    code: 'AGENTIC AI',
    name: 'Agentic AI',
    badge: 'Autonomous AI Systems & Tool Use',
    pdfUrl: '/curriculum/11_Agentic_AI.pdf',
    fileName: '11_Agentic_AI.pdf',
    trackColor: '#06B6D4',
    duration: 'Comprehensive Foundation Track',
  },
  prompteng: {
    id: 'prompteng',
    code: 'PROMPT ENG',
    name: 'Prompt Engineering',
    badge: 'Communicate with AI Effectively',
    pdfUrl: '/curriculum/12_Prompt_Engineering.pdf',
    fileName: '12_Prompt_Engineering.pdf',
    trackColor: '#D946EF',
    duration: 'Comprehensive Foundation Track',
  },
  deeplearning: {
    id: 'deeplearning',
    code: 'DEEP LEARNING',
    name: 'Deep Learning',
    badge: 'Neural Networks & AI Models',
    pdfUrl: '/curriculum/13_Deep_Learning.pdf',
    fileName: '13_Deep_Learning.pdf',
    trackColor: '#6366F1',
    duration: 'Comprehensive Foundation Track',
  },
  sap: {
    id: 'sap',
    code: 'SAP',
    name: 'SAP',
    badge: 'Systems, Applications, and Products in Data Processing · Enterprise ERP',
    pdfUrl: '/curriculum/14_SAP.pdf',
    fileName: '14_SAP.pdf',
    trackColor: '#0070F2',
    duration: 'Enterprise Systems Track',
  },
};

export interface CustomCurriculumMeta {
  title: string;
  pdfUrl: string;
  fileName?: string;
  badge?: string;
  code?: string;
  duration?: string;
}

interface CurriculumContextType {
  activeProgram: string | null;
  customCurriculum: CustomCurriculumMeta | null;
  isOpen: boolean;
  openCurriculum: (programIdOrMeta: string | CustomCurriculumMeta) => void;
  closeCurriculum: () => void;
}

const CurriculumContext = createContext<CurriculumContextType | undefined>(undefined);

export const CurriculumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeProgram, setActiveProgram] = useState<string | null>(null);
  const [customCurriculum, setCustomCurriculum] = useState<CustomCurriculumMeta | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCurriculum = (programIdOrMeta: string | CustomCurriculumMeta) => {
    if (typeof programIdOrMeta === 'string') {
      setActiveProgram(programIdOrMeta);
      setCustomCurriculum(null);
    } else {
      setActiveProgram(null);
      setCustomCurriculum(programIdOrMeta);
    }
    setIsOpen(true);
  };

  const closeCurriculum = () => {
    setIsOpen(false);
  };

  return (
    <CurriculumContext.Provider
      value={{
        activeProgram,
        customCurriculum,
        isOpen,
        openCurriculum,
        closeCurriculum,
      }}
    >
      {children}
    </CurriculumContext.Provider>
  );
};

export const useCurriculumModal = () => {
  const context = useContext(CurriculumContext);
  if (!context) {
    throw new Error('useCurriculumModal must be used within a CurriculumProvider');
  }
  return context;
};
