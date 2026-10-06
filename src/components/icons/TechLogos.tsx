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


// Official AWS Logo (white mark + orange smile for dark backgrounds)
export const AwsLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'AWS' }) => (
  <svg viewBox="0 0 128 128" className={`inline-block object-contain ${className}`} xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
    <path fill="#FFFFFF" d="M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0" />
    <path fill="#FF9900" d="M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z" />
  </svg>
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

// Official GitHub Logo (white mark for dark backgrounds)
export const GitHubLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'GitHub' }) => (
  <svg viewBox="0 0 128 128" className={`inline-block object-contain ${className}`} fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={alt}>
    <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
  </svg>
);

// Official Grafana Logo
export const GrafanaLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6', alt = 'Grafana' }) => (
  <img src="/logos/tech/grafana.svg" alt={alt} className={`inline-block object-contain ${className}`} />
);

// ServiceNow Logo (light white + green arc for dark backgrounds)
export const ServiceNowLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 46 22" className={`inline-block object-contain ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 18V9h2.6v1.4c.8-1.1 2-1.6 3.4-1.6 2.3 0 3.8 1.4 3.8 3.9V18h-2.8v-4.9c0-1.4-.7-2.1-1.9-2.1-1.3 0-2.3.9-2.3 2.4V18H4z" fill="#FFFFFF" />
    <circle cx="21" cy="13.5" r="4.5" stroke="#FFFFFF" strokeWidth="2.5" />
    <path d="M17 6.8c2.4-1.8 5.6-1.8 8 0" stroke="#81B5A1" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M28 9h2.8l2 6 2.1-6h2.4l2.1 6 2-6H44l-3.3 9h-2.6l-2.1-5.7-2.1 5.7h-2.6L28 9z" fill="#FFFFFF" />
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

// Cybersecurity Logo
export const CybersecurityLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 5v6.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V5l-8-3z" fill="#F43F5E" fillOpacity="0.2" stroke="#F43F5E" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 11.5l2 2 4-4" stroke="#F43F5E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Prompt Engineering Logo
export const PromptEngLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="15" rx="3" stroke="#D946EF" strokeWidth="2" fill="#D946EF" fillOpacity="0.15"/>
    <path d="M6 8l4 3.5L6 15" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 15h6" stroke="#D946EF" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 18l-3 3v-3" fill="#D946EF"/>
  </svg>
);

// Deep Learning Neural Logo
export const DeepLearningLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="6" r="2.5" fill="#818CF8" />
    <circle cx="5" cy="18" r="2.5" fill="#818CF8" />
    <circle cx="12" cy="12" r="3" fill="#6366F1" stroke="#C7D2FE" strokeWidth="1.5"/>
    <circle cx="19" cy="6" r="2.5" fill="#A855F7" />
    <circle cx="19" cy="18" r="2.5" fill="#A855F7" />
    <path d="M7 7.5l3 3M7 16.5l3-3M14 10.5l3-3M14 13.5l3 3" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Full Stack Combined Logo
export const FullStackLogo: React.FC<LogoProps> = ({ className = 'w-6 h-6' }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <img src="/logos/tech/frontend.svg" alt="React" className="w-5 h-5 -mr-1 object-contain drop-shadow" />
    <div className="w-4 h-4 rounded-full bg-[#10B981] flex items-center justify-center text-[7px] font-black text-white shadow-xs">
      FS
    </div>
  </div>
);
