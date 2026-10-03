import React from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

export const TechBrandLogo: React.FC<{ techId: string; className?: string; alt?: string }> = ({
  techId,
  className = 'w-6 h-6',
  alt = '',
}) => {
  const imgSrc =
    techId === 'linux'
      ? '/logos/tech/linux.png'
      : techId === 'jenkins'
      ? '/logos/tech/jenkins.png'
      : `/logos/tech/${techId}.svg`;

  return (
    <img
      src={imgSrc}
      alt={alt || techId}
      className={`inline-block object-contain ${className}`}
      loading="lazy"
    />
  );
};

export const TechBadge: React.FC<{ name: string; className?: string }> = ({
  name,
  className = '',
}) => {
  const normalized = name.toLowerCase().replace(/[\s\.\/\-\+]/g, '');
  let techId = 'aws';
  if (normalized.includes('docker')) techId = 'docker';
  else if (normalized.includes('kuber') || normalized.includes('k8s')) techId = 'kubernetes';
  else if (normalized.includes('jenkins')) techId = 'jenkins';
  else if (normalized.includes('terraform')) techId = 'terraform';
  else if (normalized.includes('linux')) techId = 'linux';
  else if (normalized.includes('python')) techId = 'python';
  else if (normalized.includes('java')) techId = 'java';
  else if (normalized.includes('c++') || normalized === 'c') techId = 'c';
  else if (normalized.includes('sql') || normalized.includes('mysql')) techId = 'sql';
  else if (normalized.includes('powerbi')) techId = 'powerbi';
  else if (normalized.includes('excel')) techId = 'excel';
  else if (normalized.includes('agent')) techId = 'agenticai';
  else if (normalized.includes('ai') || normalized.includes('gpt') || normalized.includes('genai')) techId = 'rag';
  else if (normalized.includes('dsa') || normalized.includes('structure')) techId = 'dsa';
  else if (normalized.includes('algo')) techId = 'algorithms';
  else if (normalized.includes('react') || normalized.includes('front')) techId = 'frontend';
  else if (normalized.includes('node') || normalized.includes('back')) techId = 'backend';
  else if (normalized.includes('dbms')) techId = 'dbms';
  else if (normalized.includes('oop')) techId = 'oops';

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-xl bg-white/15 hover:bg-white/20 border border-white/25 text-xs font-extrabold text-white shadow-md backdrop-blur-md transition-all ${className}`}
    >
      <div className="w-5 h-5 rounded-md bg-white/95 border border-white/80 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
        <TechBrandLogo techId={techId} className={techId === 'jenkins' ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
      </div>
      <span className="tracking-wide text-white drop-shadow-xs">{name}</span>
    </div>
  );
};


// Official AWS Logo
export const AwsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'AWS' }) => (
  <img src="/logos/tech/aws.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Docker Logo
export const DockerLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Docker' }) => (
  <img src="/logos/tech/docker.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Kubernetes Logo
export const KubernetesLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Kubernetes' }) => (
  <img src="/logos/tech/kubernetes.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// User-provided Jenkins Butler Logo
export const JenkinsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Jenkins' }) => (
  <img src="/logos/tech/jenkins.png" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Terraform Logo
export const TerraformLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Terraform' }) => (
  <img src="/logos/tech/terraform.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// User-provided Linux Tux Logo
export const LinuxLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Linux' }) => (
  <img src="/logos/tech/linux.png" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Python Logo
export const PythonLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Python' }) => (
  <img src="/logos/tech/python.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Java Logo
export const JavaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Java' }) => (
  <img src="/logos/tech/java.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official C / C++ Logo
export const CLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'C / C++' }) => (
  <img src="/logos/tech/c.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official SQL / MySQL Logo
export const SqlLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'SQL' }) => (
  <img src="/logos/tech/sql.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Microsoft Power BI Logo
export const PowerBiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Power BI' }) => (
  <img src="/logos/tech/powerbi.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Microsoft Excel Logo
export const ExcelLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Excel' }) => (
  <img src="/logos/tech/excel.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official OpenAI / ChatGPT Logo
export const ChatGptLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'OpenAI' }) => (
  <img src="/logos/tech/rag.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official RAG Logo
export const RagLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Generative AI' }) => (
  <img src="/logos/tech/rag.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Agentic AI Logo
export const AgenticAiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Agentic AI' }) => (
  <img src="/logos/tech/agenticai.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Data Structures Logo
export const DsaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Data Structures' }) => (
  <img src="/logos/tech/dsa.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Algorithms Logo
export const AlgorithmLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Algorithms' }) => (
  <img src="/logos/tech/algorithms.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official React / Frontend Logo
export const ReactLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'React' }) => (
  <img src="/logos/tech/frontend.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Backend / Node.js Logo
export const BackendLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Backend' }) => (
  <img src="/logos/tech/backend.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official PostgreSQL / DBMS Logo
export const DbmsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'DBMS' }) => (
  <img src="/logos/tech/dbms.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

export const PostgreSqlLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'PostgreSQL' }) => (
  <img src="/logos/tech/dbms.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

export const MySqlLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'MySQL' }) => (
  <img src="/logos/tech/sql.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official OOP Concepts Logo
export const OopsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'OOPs' }) => (
  <img src="/logos/tech/oops.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official WhatsApp Logo
export const WhatsAppLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'WhatsApp' }) => (
  <img src="/logos/tech/whatsapp.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official GitHub Logo
export const GitHubLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'GitHub' }) => (
  <img src="/logos/tech/github.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// Official Grafana Logo
export const GrafanaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Grafana' }) => (
  <img src="/logos/tech/grafana.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// ServiceNow Logo
export const ServiceNowLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 46 22" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18V9h2.6v1.4c.8-1.1 2-1.6 3.4-1.6 2.3 0 3.8 1.4 3.8 3.9V18h-2.8v-4.9c0-1.4-.7-2.1-1.9-2.1-1.3 0-2.3.9-2.3 2.4V18H4z" fill="#293E40" />
    <circle cx="21" cy="13.5" r="4.5" stroke="#293E40" strokeWidth="2.5" />
    <path d="M17 6.8c2.4-1.8 5.6-1.8 8 0" stroke="#81B5A1" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M28 9h2.8l2 6 2.1-6h2.4l2.1 6 2-6H44l-3.3 9h-2.6l-2.1-5.7-2.1 5.7h-2.6L28 9z" fill="#293E40" />
  </svg>
);

// Anthropic Claude Logo
export const ClaudeLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#CC785C" xmlns="http://www.w3.org/2000/svg">
    <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z"/>
  </svg>
);

// Google Gemini Logo
export const GeminiLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"
      fill="url(#gemini-gradient)"
    />
    <defs>
      <linearGradient id="gemini-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1B73E8" />
        <stop offset="50%" stopColor="#8AB4F8" />
        <stop offset="100%" stopColor="#9333EA" />
      </linearGradient>
    </defs>
  </svg>
);

// LangChain Logo
export const LangChainLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z"
      fill="#00A67E"
    />
  </svg>
);

// JavaScript Logo
export const JavaScriptLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#F7DF1E" />
    <path d="M7.5 11v6.5c0 1.5-.8 2-2 2-1 0-1.7-.5-2-1.2l1.2-.8c.2.4.5.7.9.7.4 0 .7-.2.7-.7V11h1.2zm8.5 4.3c-.6-.4-1.2-.7-1.7-.9-.6-.3-.9-.6-.9-1 0-.4.3-.8.9-.8.6 0 1 .3 1.3.7l1-.8c-.6-.7-1.3-1.1-2.3-1.1-1.3 0-2.2.8-2.2 2 0 .9.5 1.5 1.6 2 .6.3 1.3.6 1.7.9.5.3.7.7.7 1.1 0 .6-.5 1-1.2 1-.8 0-1.4-.4-1.8-1.1l-1.1.7c.6 1.1 1.6 1.6 2.9 1.6 1.5 0 2.5-.9 2.5-2.2 0-1-.6-1.7-1.7-2.2z" fill="#000" />
  </svg>
);

// TypeScript Logo
export const TypeScriptLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#3178C6" />
    <path d="M5 8.5h6V10H8.7v8H7.3v-8H5V8.5zm9 5.3c-.5-.3-1-.6-1.5-.8-.5-.2-.8-.5-.8-.9 0-.4.3-.7.8-.7.5 0 .9.3 1.2.6l1-.8c-.5-.6-1.2-.9-2.1-.9-1.2 0-2 .7-2 1.8 0 .8.5 1.4 1.5 1.8.5.2 1.1.5 1.5.7.4.3.6.6.6 1 0 .5-.4.9-1.1.9-.7 0-1.2-.3-1.6-.9l-1 .7c.6 1 1.4 1.4 2.6 1.4 1.4 0 2.3-.8 2.3-2 0-.9-.5-1.5-1.5-1.8z" fill="#fff" />
  </svg>
);

// HTML5 Logo
export const Html5Logo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#E34F26" />
    <path d="M12 3.8v16.3l4.8-1.5 1.3-14.8H12z" fill="#EF652A" />
    <path d="M8 7h8l-.3 3.5H9.8l.2 2.5h5.7l-.6 6-3.1 1-3.1-1-.2-2.5h-2l.4 4.5 4.9 1.5 4.9-1.5 1-10.5H7.7L8 7z" fill="#fff" />
  </svg>
);

// CSS3 Logo
export const Css3Logo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2l1.6 18 6.4 2 6.4-2L20 2H4z" fill="#1572B6" />
    <path d="M12 3.8v16.3l4.8-1.5 1.3-14.8H12z" fill="#33A9DC" />
    <path d="M8 7h8l-.3 3.5H9.8l.2 2.5h5.7l-.6 6-3.1 1-3.1-1-.2-2.5h-2l.4 4.5 4.9 1.5 4.9-1.5 1-10.5H7.7L8 7z" fill="#fff" />
  </svg>
);

// Computer Networks Logo
export const NetworksLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="3" width="6" height="4" rx="1" stroke="#059669" strokeWidth="1.8" />
    <rect x="3" y="16" width="6" height="4" rx="1" stroke="#059669" strokeWidth="1.8" />
    <rect x="15" y="16" width="6" height="4" rx="1" stroke="#059669" strokeWidth="1.8" />
    <path d="M12 7v5m0 0H6v4m6-4h6v4" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
