import React, { createContext, useContext, useState } from 'react';

export type ProgramId = 'crpc' | 'daap';

export interface ProgramCurriculumMeta {
  id: ProgramId;
  code: string;
  name: string;
  badge: string;
  pdfUrl: string;
  fileName: string;
  trackColor: string;
  duration: string;
}

export const CURRICULUM_DATA: Record<ProgramId, ProgramCurriculumMeta> = {
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
};

interface CurriculumContextType {
  activeProgram: ProgramId | null;
  isOpen: boolean;
  openCurriculum: (programId: ProgramId) => void;
  closeCurriculum: () => void;
}

const CurriculumContext = createContext<CurriculumContextType | undefined>(undefined);

export const CurriculumProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeProgram, setActiveProgram] = useState<ProgramId | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openCurriculum = (programId: ProgramId) => {
    setActiveProgram(programId);
    setIsOpen(true);
  };

  const closeCurriculum = () => {
    setIsOpen(false);
  };

  return (
    <CurriculumContext.Provider
      value={{
        activeProgram,
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

