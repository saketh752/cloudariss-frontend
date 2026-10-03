import React from 'react';

/**
 * CloudarissBackground
 * 
 * Authentic Visual Replica of Futuristic Cloud City Data Horizon:
 * - Photographic Depth: Rich mountain terrace, rolling sunset clouds, illuminated city skyline
 * - Controlled lighting: Warm amber horizon glow (#FF7A00) + Cyan high-tech atmosphere (#19BCE8)
 * - Flowing cyber data trails (curved SVG paths matching the reference composition)
 * - Seamlessly integrated behind all content without looking like a pasted rectangular photo
 */
export const CloudarissBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Layer 1: Deep Navy Foundation (#020817) */}
      <div className="absolute inset-0 bg-[#020817]" />

      {/* Layer 2: Approved Visual Horizon (High-fidelity reference replica) */}
      <div className="absolute inset-0 transition-opacity duration-1000 opacity-80">
        <img
          src="/brand/backgrounds/cloudariss-digital-horizon.jpg"
          alt=""
          className="w-full h-full object-cover object-center filter brightness-95 contrast-110 saturate-110"
        />
      </div>

      {/* Layer 3: Atmospheric Smoothing Vignette & Seamless Scroll Blend */}
      {/* Gentle top fade for navbar and gentle bottom fade for footer so content glides over the world */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/70 via-[#020817]/25 to-[#020817]/85" />

      {/* Layer 4: Ambient Environmental Light Flares (Grounded in Reference Image Highlights) */}
      {/* Upper-Left Terrace Cyan Ambient Lighting */}
      <div className="absolute top-12 left-0 w-[600px] h-[600px] bg-[#19BCE8]/15 rounded-full blur-[140px]" />

      {/* Lower-Right Sunset City Skyline Warm Amber Horizon Glow */}
      <div className="absolute bottom-10 right-0 w-[700px] h-[550px] bg-[#FF7A00]/15 rounded-full blur-[160px]" />

      {/* Mid-Center Soft Azure Depth */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#0878E8]/10 rounded-full blur-[130px]" />

      {/* Layer 5: Cyber Data Trails (Curved Optic Light Lines connecting terrace to skyline) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="cyberBeamGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#19BCE8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#0878E8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF7A00" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="cyberBeamGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#19BCE8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0878E8" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Primary sweeping light trail */}
        <path
          d="M 50 320 C 350 480, 750 620, 1440 780"
          fill="none"
          stroke="url(#cyberBeamGradient1)"
          strokeWidth="1.8"
        />

        {/* Secondary lower data curve */}
        <path
          d="M 120 450 C 450 620, 850 780, 1400 860"
          fill="none"
          stroke="url(#cyberBeamGradient1)"
          strokeWidth="1.2"
          strokeDasharray="12 12"
        />

        {/* High-altitude network trajectory */}
        <path
          d="M 0 180 C 500 120, 950 300, 1440 420"
          fill="none"
          stroke="url(#cyberBeamGradient2)"
          strokeWidth="1"
          strokeDasharray="6 18"
          strokeOpacity="0.4"
        />

        {/* Glowing Network Nodes along the data path */}
        <circle cx="350" cy="480" r="3" fill="#19BCE8" />
        <circle cx="750" cy="620" r="3.5" fill="#FF7A00" />
        <circle cx="1120" cy="720" r="3" fill="#FF7A00" />
      </svg>
    </div>
  );
};
