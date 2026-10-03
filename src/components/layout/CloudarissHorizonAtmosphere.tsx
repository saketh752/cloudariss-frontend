import React from 'react';
import { Cloud, Code2, BarChart3, Box } from 'lucide-react';

/**
 * CloudarissHorizonAtmosphere
 * 
 * Recreates the "Futuristic Cloud City Data Horizon" visual environment:
 * - Direct, vivid presentation of the panoramic cyber city skyline at sunset horizon
 * - Volumetric glowing clouds and illuminated mountains with warm amber & electric cyan
 * - Streaming glowing data highways with pulsing nodes
 * - Floating 3D holographic glass cubes (Cloud, Kubernetes, Code, Analytics)
 * - Digital orbital globe & network constellation lines
 * - High-contrast glassmorphic readability
 */
export const CloudarissHorizonAtmosphere: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 1. Deep Midnight Base */}
      <div className="absolute inset-0 bg-[#030718]" />

      {/* 2. Panoramic Artwork Foundation: "Futuristic Cloud City Data Horizon" — VIVID & FLASHY */}
      <picture className="absolute inset-0 w-full h-full">
        <source
          srcSet="/brand/backgrounds/futuristic-cloud-city-horizon.webp"
          type="image/webp"
        />
        <img
          src="/brand/backgrounds/futuristic-cloud-city-horizon.png"
          alt="Cloudariss Futuristic Cloud City Data Horizon"
          className="w-full h-full object-cover object-center opacity-85 md:opacity-90 scale-100 transform-gpu"
        />
      </picture>

      {/* 3. Minimal Soft Vignette: Keeps edges clean without dimming the breathtaking city & clouds */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 50%, rgba(3, 7, 24, 0.15) 0%, rgba(3, 7, 24, 0.55) 100%)',
        }}
      />

      {/* 4. Top Fade for Navbar Clarity */}
      <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#030718]/90 via-[#030718]/40 to-transparent" />

      {/* 5. Glowing Atmospheric Light Flares (Cyber Cyan & Sunset Amber) */}
      {/* Top-Left Electric Cyan Bloom */}
      <div className="absolute -top-24 -left-24 w-80 h-80 md:w-[500px] md:h-[500px] bg-[#19BCE8]/25 rounded-full blur-[100px] animate-pulse" />

      {/* Center-Left Cloud Neon Azure Flare */}
      <div className="absolute top-1/3 -left-16 w-72 h-72 bg-[#0878E8]/30 rounded-full blur-[90px]" />

      {/* Bottom-Right Sunset Amber / Gold City Glow */}
      <div className="absolute -bottom-24 -right-16 w-80 h-80 md:w-[600px] md:h-[600px] bg-[#FF7A00]/30 rounded-full blur-[120px]" />

      {/* Far Right Horizon Violet / Indigo Accent */}
      <div className="absolute bottom-1/4 right-8 w-64 h-64 bg-[#7C3AED]/20 rounded-full blur-[100px]" />

      {/* 6. High-Tech Cyber Grid & Micro Data Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(25,188,232,0.18)_1.5px,transparent_1.5px)] bg-[size:36px_36px] opacity-40" />

      {/* 7. Animated Streaming Highway Data Lines (SVG Curves & Light Streaks) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-75 md:opacity-90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="streamCyanToOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#19BCE8" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#0878E8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="streamOrangeGlow" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#19BCE8" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#0878E8" stopOpacity="0.3" />
          </linearGradient>

          <filter id="neonGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Highway Light Trail 1: Left Tech Mountain to Right Horizon City */}
        <path
          d="M -100 520 C 320 620, 680 720, 1540 680"
          fill="none"
          stroke="url(#streamCyanToOrange)"
          strokeWidth="2.5"
          filter="url(#neonGlow)"
          strokeDasharray="14 20"
          className="animate-[dash_35s_linear_infinite]"
        />

        {/* Highway Light Trail 2: Valley Cloud Curve */}
        <path
          d="M -50 680 C 450 780, 850 640, 1500 760"
          fill="none"
          stroke="url(#streamOrangeGlow)"
          strokeWidth="3"
          filter="url(#neonGlow)"
          strokeDasharray="18 26"
          className="animate-[dash_45s_linear_infinite]"
        />

        {/* Highway Light Trail 3: Upper Orbital Data Arc */}
        <path
          d="M 200 -50 C 600 350, 1100 280, 1550 420"
          fill="none"
          stroke="#19BCE8"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          strokeDasharray="10 18"
        />

        {/* Orbit Constellation Rings (matching the globe in the artwork) */}
        <ellipse
          cx="1280"
          cy="180"
          rx="240"
          ry="120"
          fill="none"
          stroke="#19BCE8"
          strokeWidth="1.5"
          strokeOpacity="0.4"
          strokeDasharray="8 12"
          transform="rotate(-25 1280 180)"
        />
        <ellipse
          cx="1280"
          cy="180"
          rx="320"
          ry="160"
          fill="none"
          stroke="#FF7A00"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          strokeDasharray="12 16"
          transform="rotate(15 1280 180)"
        />

        {/* Glowing Data Nodes along the highway */}
        <circle cx="280" cy="580" r="4" fill="#19BCE8" filter="url(#neonGlow)" />
        <circle cx="640" cy="670" r="4.5" fill="#FF7A00" filter="url(#neonGlow)" />
        <circle cx="980" cy="710" r="4" fill="#19BCE8" filter="url(#neonGlow)" />
        <circle cx="1240" cy="690" r="5.5" fill="#FFA500" filter="url(#neonGlow)" />
      </svg>

      {/* 8. 3D Floating Holographic Glass Cubes (Mirroring the 4 Cubes in Reference Artwork) */}
      {/* Cube 1: Top-Left Neon Cloud Cube */}
      <div className="hidden xl:flex absolute top-28 left-8 flex-col items-center gap-1 animate-float-slow [animation-duration:6s]">
        <div className="w-14 h-14 rounded-2xl bg-[#0878E8]/25 backdrop-blur-md border border-[#19BCE8]/70 shadow-[0_0_28px_rgba(25,188,232,0.5)] flex items-center justify-center transform hover:rotate-6 transition-transform">
          <Cloud className="w-7 h-7 text-[#19BCE8] drop-shadow-[0_0_10px_#19BCE8]" />
        </div>
        <span className="text-[10px] font-mono font-bold tracking-wider text-[#19BCE8] uppercase drop-shadow">
          Cloud Core
        </span>
      </div>

      {/* Cube 2: Upper-Right Digital Code Cube </> */}
      <div className="hidden xl:flex absolute top-40 right-16 flex-col items-center gap-1 animate-float-slow [animation-duration:7s] [animation-delay:1.5s]">
        <div className="w-13 h-13 rounded-2xl bg-[#FF7A00]/20 backdrop-blur-md border border-[#FF7A00]/70 shadow-[0_0_24px_rgba(255,122,0,0.45)] flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform">
          <Code2 className="w-6 h-6 text-[#FF7A00] drop-shadow-[0_0_10px_#FF7A00]" />
        </div>
        <span className="text-[10px] font-mono font-bold tracking-wider text-[#FF7A00] uppercase drop-shadow">
          Build &amp; Code
        </span>
      </div>

      {/* Cube 3: Mid-Right Kubernetes/Infrastructure Cube */}
      <div className="hidden 2xl:flex absolute top-1/2 right-12 flex-col items-center gap-1 animate-float-slow [animation-duration:8s] [animation-delay:3s]">
        <div className="w-14 h-14 rounded-2xl bg-[#0878E8]/30 backdrop-blur-md border border-[#0878E8]/80 shadow-[0_0_28px_rgba(8,120,232,0.55)] flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform">
          <Box className="w-7 h-7 text-[#19BCE8] drop-shadow-[0_0_10px_#19BCE8]" />
        </div>
        <span className="text-[10px] font-mono font-bold tracking-wider text-[#19BCE8] uppercase drop-shadow">
          Deploy &amp; Scale
        </span>
      </div>

      {/* Cube 4: Mid-Left Data Analytics Chart Cube */}
      <div className="hidden 2xl:flex absolute top-2/3 left-10 flex-col items-center gap-1 animate-float-slow [animation-duration:7.5s] [animation-delay:0.8s]">
        <div className="w-13 h-13 rounded-2xl bg-[#10B981]/25 backdrop-blur-md border border-[#10B981]/70 shadow-[0_0_24px_rgba(16,185,129,0.45)] flex items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform">
          <BarChart3 className="w-6 h-6 text-emerald-300 drop-shadow-[0_0_10px_#10B981]" />
        </div>
        <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-300 uppercase drop-shadow">
          Data &amp; AI
        </span>
      </div>
    </div>
  );
};
