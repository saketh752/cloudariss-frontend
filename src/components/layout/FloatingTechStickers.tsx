import React from 'react';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  PythonLogo,
  SqlLogo,
  PowerBiLogo,
  ReactLogo,
  GitHubLogo,
} from '@/components/icons/TechLogos';
import { Cloud, Code2 } from 'lucide-react';

interface TechSticker {
  id: string;
  name: string;
  icon: React.ReactNode;
  top: string;
  left?: string;
  right?: string;
  rotation: string;
  type: 'cube' | 'sticker';
  accent: string;
}

/**
 * FloatingTechStickers
 * 
 * Recreates the authentic developer laptop sticker & 3D holographic cube aesthetic
 * from the Cloudariss Futuristic Cloud City Data Horizon reference:
 * - 4 3D Holographic Cubes (Cloud, K8s, Analytics, Code) directly matching the reference
 * - Minimal, relatable developer laptop stickers (Docker, Python, AWS, GitHub, React, SQL)
 * - Suitable minimal opacity (50-65%) with soft glow on hover
 * - Positioned in the outer peripheral margins so content readability is never compromised
 */
export const FloatingTechStickers: React.FC = () => {
  const stickers: TechSticker[] = [
    // Top-Left: Holographic Cloud Cube (matching reference image top-left)
    {
      id: 'cloud-cube',
      name: 'Cloud Infrastructure',
      icon: <Cloud className="w-5 h-5 text-[#19BCE8]" />,
      top: '14%',
      left: '1.5%',
      rotation: '-rotate-6',
      type: 'cube',
      accent: 'border-cyan-400/50 shadow-cyan-500/25',
    },
    // Top-Right: Holographic Kubernetes Helm Cube (matching reference image top-right)
    {
      id: 'k8s-cube',
      name: 'Kubernetes',
      icon: <KubernetesLogo className="w-5 h-5" />,
      top: '18%',
      right: '2%',
      rotation: 'rotate-6',
      type: 'cube',
      accent: 'border-blue-400/50 shadow-blue-500/25',
    },
    // Upper-Right: Analytics Bar Chart Cube (matching reference image mid-right)
    {
      id: 'metrics-cube',
      name: 'Power BI Analytics',
      icon: <PowerBiLogo className="w-5 h-5" />,
      top: '32%',
      right: '2.5%',
      rotation: '-rotate-3',
      type: 'cube',
      accent: 'border-amber-400/50 shadow-amber-500/25',
    },
    // Mid-Left: Laptop Sticker - Docker Whale
    {
      id: 'docker-sticker',
      name: 'Docker',
      icon: <DockerLogo className="w-5 h-5" />,
      top: '42%',
      left: '1.8%',
      rotation: 'rotate-4',
      type: 'sticker',
      accent: 'border-cyan-400/40',
    },
    // Mid-Right: Laptop Sticker - Python
    {
      id: 'python-sticker',
      name: 'Python',
      icon: <PythonLogo className="w-5 h-5" />,
      top: '50%',
      right: '2%',
      rotation: '-rotate-6',
      type: 'sticker',
      accent: 'border-yellow-400/40',
    },
    // Center-Left: Laptop Sticker - GitHub
    {
      id: 'github-sticker',
      name: 'GitHub',
      icon: <GitHubLogo className="w-5 h-5 text-slate-200" />,
      top: '62%',
      left: '1.5%',
      rotation: 'rotate-3',
      type: 'sticker',
      accent: 'border-purple-400/40',
    },
    // Lower-Left: Laptop Sticker - AWS Cloud
    {
      id: 'aws-sticker',
      name: 'AWS Cloud',
      icon: <AwsLogo className="w-5 h-5" />,
      top: '74%',
      left: '2%',
      rotation: '-rotate-4',
      type: 'sticker',
      accent: 'border-orange-400/40',
    },
    // Lower-Right: Holographic Code Cube `</>` (matching reference image bottom-right)
    {
      id: 'code-cube',
      name: 'Full-Stack Code',
      icon: <Code2 className="w-5 h-5 text-cyan-300" />,
      top: '80%',
      right: '2%',
      rotation: 'rotate-6',
      type: 'cube',
      accent: 'border-cyan-400/50 shadow-cyan-500/25',
    },
    // Lower-Right: React Frontend Sticker
    {
      id: 'react-sticker',
      name: 'React.js',
      icon: <ReactLogo className="w-5 h-5" />,
      top: '89%',
      right: '2.5%',
      rotation: '-rotate-4',
      type: 'sticker',
      accent: 'border-cyan-400/40',
    },
    // Bottom-Left: Laptop Sticker - PostgreSQL
    {
      id: 'sql-sticker',
      name: 'PostgreSQL',
      icon: <SqlLogo className="w-5 h-5" />,
      top: '92%',
      left: '1.8%',
      rotation: 'rotate-4',
      type: 'sticker',
      accent: 'border-blue-400/40',
    },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden select-none z-10 hidden xl:block"
    >
      {stickers.map((s) => (
        <div
          key={s.id}
          className={`absolute transition-all duration-500 ease-out ${s.rotation}`}
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
          }}
        >
          {s.type === 'cube' ? (
            /* 3D Holographic Cube (Direct replica of the floating cubes in the reference image) */
            <div
              className={`group flex items-center gap-2 p-2 rounded-2xl bg-[#06143D]/65 backdrop-blur-md border ${s.accent} shadow-lg opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300 pointer-events-auto cursor-default`}
              style={{
                boxShadow: '0 8px 30px rgba(7, 27, 99, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
              }}
            >
              <div className="w-7 h-7 rounded-xl bg-white/15 flex items-center justify-center border border-white/20">
                {s.icon}
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider text-cyan-100 uppercase pr-1.5 opacity-90">
                {s.name}
              </span>
            </div>
          ) : (
            /* Relatable Developer Laptop Sticker Aesthetic */
            <div
              className={`group flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-[#040E2D]/75 backdrop-blur-md border ${s.accent} shadow-md opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 pointer-events-auto cursor-default`}
              style={{
                boxShadow: '0 6px 20px rgba(2, 8, 23, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              }}
            >
              <div className="shrink-0">{s.icon}</div>
              <span className="text-[10px] font-mono font-extrabold tracking-wider text-slate-200 uppercase">
                {s.name}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
