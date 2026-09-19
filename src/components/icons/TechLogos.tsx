import React from 'react';

interface LogoProps {
  className?: string;
}

// AWS
export const AwsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 50 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.08 17.65c-3.14 2.3-7.72 3.52-11.66 3.52-5.55 0-10.53-2.05-14.3-5.46-.3-.27-.03-.64.33-.43 4.1 2.37 9.17 3.8 14.4 3.8 3.5 0 7.37-.8 10.87-2.46.54-.25.9.38.36 1.03z"
      fill="#FF9900"
      transform="translate(15, -2)"
    />
    <path
      d="M29.5 15.2c.4-.5 2.5-2.9 2.5-6.6 0-4.1-2.9-6.6-7.3-6.6-4.5 0-7.5 2.8-7.5 7.1 0 2.5 1.1 4.5 2.7 5.7.4.3.8.1.9-.3l1.1-3.6c.1-.4 0-.7-.4-1-.8-.7-1.3-1.6-1.3-2.8 0-2.2 1.7-3.6 4.3-3.6 2.4 0 4 1.2 4 3.4 0 2.1-1.3 3.6-2.5 4.9-.3.3-.3.8 0 1.1l2.4 2.3c.3.4.8.4 1.1.1l2.5-2.6z"
      fill="#232F3E"
    />
    <path
      d="M10.2 21.8c.4.3.9.1 1.1-.3l.7-1.2c.2-.3.1-.7-.2-.9-2.3-1.6-3.8-4.2-3.8-7.2 0-4.8 3.8-8.7 8.5-8.7 4.7 0 8.5 3.9 8.5 8.7 0 3-1.5 5.6-3.8 7.2-.3.2-.4.6-.2.9l.7 1.2c.2.4.7.5 1.1.3 2.9-2 4.9-5.3 4.9-9.6 0-6.1-4.9-11-11.2-11-6.2 0-11.2 4.9-11.2 11 0 4.3 2 7.6 4.9 9.6z"
      fill="#FF9900"
    />
    <path
      d="M38.2 22.4c-.4-.5-2.8-.7-4.2-.2-.4.1-.5-.2-.3-.5.9-1.2 2.7-3.1 4.4-3.1 1.8 0 2.4 1.1 2.3 2.7-.2 2.2-1.3 4.8-2 6.1-.2.4-.6.3-.5-.1.3-1.4.6-3.8.3-4.9z"
      fill="#FF9900"
    />
  </svg>
);

// Docker
export const DockerLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.98 11.08h-2.12V8.96h2.12v2.12zm-2.65 0H9.21V8.96h2.12v2.12zm5.3 0h-2.12V8.96h2.12v2.12zm-7.95 0H6.56V8.96h2.12v2.12zm5.3-2.65h-2.12V6.31h2.12v2.12zm-2.65 0H9.21V6.31h2.12v2.12zm5.3 0h-2.12V6.31h2.12v2.12zm-2.65-2.65H9.21V3.66h2.12v2.12zm13.1 6.13c-.37-.26-1.5-.32-2.31-.22-.14-.73-.55-1.38-1.07-1.85l-.47-.38-.34.5c-.5.73-.77 1.62-.77 2.52 0 .32.04.64.1.95-.5.29-1.3.4-1.99.39H1.47c-.25 0-.46.18-.5.43-.61 3.5 1.05 6.64 4.54 8.07 4.19 1.72 9.53 1.15 13.5-1.46 3.19-2.09 4.83-5.26 4.96-8.29.01-.17-.05-.34-.17-.46-.11-.12-.28-.2-.45-.2z"
      fill="#2496ED"
    />
  </svg>
);

// Kubernetes
export const KubernetesLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2zm0 2.3l6.5 3.8-2.6 1.5-3.9-2.3-3.9 2.3-2.6-1.5L12 4.3zm-7.5 5.5l2.6 1.5v4.5l-2.6 1.5v-7.5zm3.6 5.8l2.6-1.5 1.3 2.3-2.6 1.5-1.3-2.3zm7.8 0l-1.3 2.3-2.6-1.5 1.3-2.3 2.6 1.5zm3.6-1.3l-2.6-1.5v-4.5l2.6-1.5v7.5z"
      fill="#326CE5"
    />
  </svg>
);

// Jenkins
export const JenkinsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
      fill="#D24939"
    />
  </svg>
);

// GitHub
export const GitHubLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

// Grafana
export const GrafanaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.93V19h-2v-2.07A6 6 0 017.07 13H5v-2h2.07A6 6 0 0111 7.07V5h2v2.07A6 6 0 0116.93 11H19v2h-2.07A6 6 0 0113 16.93z"
      fill="#F46800"
    />
    <circle cx="12" cy="12" r="3" fill="#F46800" />
  </svg>
);

// ServiceNow
export const ServiceNowLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#81B5A1" strokeWidth="2.5" />
    <circle cx="12" cy="12" r="4.5" fill="#293E40" />
  </svg>
);

// Python
export const PythonLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.91 2c-5.26 0-4.94 2.28-4.94 2.28l.01 2.36h5.02v.71H4.95S2 7.03 2 12.33c0 5.3 2.58 5.14 2.58 5.14h1.54v-2.17s-.08-2.58 2.54-2.58h4.33s2.44.04 2.44-2.38V4.38S15.86 2 11.91 2zm-2.7 1.63a.9.9 0 110 1.8.9.9 0 010-1.8z"
      fill="#3776AB"
    />
    <path
      d="M12.09 22c5.26 0 4.94-2.28 4.94-2.28l-.01-2.36h-5.02v-.71h7.05s2.95.32 2.95-4.98c0-5.3-2.58-5.14-2.58-5.14h-1.54v2.17s.08 2.58-2.54 2.58h-4.33s-2.44-.04-2.44 2.38v8.28S8.14 22 12.09 22zm2.7-1.63a.9.9 0 110-1.8.9.9 0 010 1.8z"
      fill="#FFD438"
    />
  </svg>
);

// SQL / PostgreSQL
export const SqlLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm8 7.37c-.77.89-2.08 1.63-3.72 2.13.78.68 1.45 1.5 1.95 2.44 1.13-.53 1.77-1.19 1.77-1.94v-2.63zM4 9.63v2.63c0 1.44 1.57 2.7 4 3.42v-2.07c-2.44-.66-4-1.83-4-2.98zm8 3.37c-3.87 0-7.14-1.39-7.87-3.23v5.23c0 2.21 3.58 4 8 4s8-1.79 8-4V9.77c-.73 1.84-4 3.23-7.87 3.23z"
      fill="#336791"
    />
  </svg>
);

// Power BI
export const PowerBiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="4" width="5" height="16" rx="1" fill="#F2C811" />
    <rect x="9.5" y="8" width="5" height="12" rx="1" fill="#EAA300" />
    <rect x="4" y="13" width="5" height="7" rx="1" fill="#D38100" />
  </svg>
);

// ChatGPT / OpenAI
export const ChatGptLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.5 9.5a5.5 5.5 0 00-4.8-4.4 5.5 5.5 0 00-7.9-1.9 5.5 5.5 0 00-5.8 3.5A5.5 5.5 0 004 14.8a5.5 5.5 0 004.8 4.4 5.5 5.5 0 007.9 1.9 5.5 5.5 0 005.8-3.5 5.5 5.5 0 00-1-8.1zm-8.8 9.3a4 4 0 01-2.4-.8l.2-.3 2.7-1.6a.8.8 0 00.4-.7v-3.7l1.1.6v3.1a4 4 0 01-2 3.4zm-6.6-3.2a4 4 0 01-.5-2.5l.3.2 2.7 1.6a.8.8 0 00.8 0l3.2-1.9v1.3l-2.7 1.6a4 4 0 01-3.8-.3zm-1.4-6.8a4 4 0 011.9-1.7v.4l.1 3.1a.8.8 0 00.4.7l3.2 1.9-1.1.6-2.7-1.6a4 4 0 01-1.8-3.4zm10.7 2.7l-3.2-1.9 1.1-.6 2.7 1.6a4 4 0 011.8 3.4 4 4 0 01-1.9 1.7v-.4l-.1-3.1a.8.8 0 00-.4-.7zm2.4-1.9l-.3-.2-2.7-1.6a.8.8 0 00-.8 0l-3.2 1.9v-1.3l2.7-1.6a4 4 0 013.8.3 4 4 0 01.5 2.5zm-5.7-3.1a.8.8 0 00-.4.7v3.7l-1.1-.6v-3.1a4 4 0 014.4-2.6l-.2.3-2.7 1.6zm-2.4 4.5l1.6-.9 1.6.9v1.8l-1.6.9-1.6-.9v-1.8z"
      fill="#10A37F"
    />
  </svg>
);

// Claude (Anthropic)
export const ClaudeLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"
      fill="#D97706"
    />
    <circle cx="12" cy="12" r="8" stroke="#D97706" strokeWidth="1.5" />
  </svg>
);

// Google Gemini
export const GeminiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2C12 7.52 7.52 12 2 12c5.52 0 10 4.48 10 10 0-5.52 4.48-10 10-10-5.52 0-10-4.48-10-10z"
      fill="url(#gemini-grad)"
    />
    <defs>
      <linearGradient id="gemini-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1B73E8" />
        <stop offset="0.5" stopColor="#8AB4F8" />
        <stop offset="1" stopColor="#9333EA" />
      </linearGradient>
    </defs>
  </svg>
);

// LangChain
export const LangChainLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="12" r="4" stroke="#1C3C3C" strokeWidth="2" />
    <circle cx="17" cy="12" r="4" stroke="#00A67E" strokeWidth="2" />
    <path d="M10 12h4" stroke="#00A67E" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// RAG (Retrieval Augmented Generation)
export const RagLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="8" height="16" rx="2" stroke="#0878E8" strokeWidth="2" />
    <path d="M14 8h7M14 12h5M14 16h6" stroke="#19BCE8" strokeWidth="2" strokeLinecap="round" />
    <circle cx="7" cy="12" r="2" fill="#0878E8" />
  </svg>
);

// Agentic AI
export const AgenticAiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#FF7A00" strokeWidth="2" strokeDasharray="3 3" />
    <circle cx="12" cy="12" r="4" fill="#FF7A00" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="#FF7A00" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

