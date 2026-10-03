import React from 'react';
import {
  AwsLogo,
  DockerLogo,
  KubernetesLogo,
  JenkinsLogo,
  TerraformLogo,
  LinuxLogo,
  PythonLogo,
  JavaLogo,
  CLogo,
  SqlLogo,
  PowerBiLogo,
  ExcelLogo,
  ChatGptLogo,
  AgenticAiLogo,
  DsaLogo,
  AlgorithmLogo,
  ReactLogo,
  BackendLogo,
  DbmsLogo,
  OopsLogo,
} from '@/components/icons/TechLogos';

interface TechVisualArtworkProps {
  techId: string;
}

export const TechVisualArtwork: React.FC<TechVisualArtworkProps> = ({ techId }) => {
  switch (techId) {
    case 'aws':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#061838] via-[#0A2E6B] to-[#124D9C] p-4 flex items-center justify-between border border-[#19BCE8]/30 shadow-inner group">
          {/* Ambient Glows */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FF9900]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Server Towers & Data Streams */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-end gap-2">
              <div className="w-9 h-24 bg-[#051532]/90 rounded-md border border-[#19BCE8]/40 p-1 flex flex-col justify-between shadow-lg">
                <div className="space-y-1">
                  <div className="h-1 bg-[#00D2FF] rounded-xs animate-pulse" />
                  <div className="h-1 bg-[#FF9900] rounded-xs" />
                  <div className="h-1 bg-[#00D2FF]/60 rounded-xs" />
                </div>
                <div className="flex justify-between items-center px-0.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[7px] font-mono text-cyan-300 font-bold">EC2</span>
                </div>
              </div>
              <div className="w-11 h-32 bg-[#051532]/90 rounded-md border border-[#00D2FF]/50 p-1.5 flex flex-col justify-between shadow-xl">
                <div className="space-y-1">
                  <div className="h-1 bg-[#00D2FF] rounded-xs" />
                  <div className="h-1 bg-[#00D2FF] rounded-xs" />
                  <div className="h-1 bg-[#FF9900] rounded-xs animate-pulse" />
                  <div className="h-1 bg-[#00D2FF]/60 rounded-xs" />
                </div>
                <div className="flex justify-between items-center px-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[8px] font-mono text-cyan-200 font-extrabold">VPC</span>
                </div>
              </div>
              <div className="w-8 h-20 bg-[#051532]/90 rounded-md border border-[#FF9900]/40 p-1 flex flex-col justify-between shadow-md">
                <div className="space-y-1">
                  <div className="h-1 bg-[#FF9900] rounded-xs" />
                  <div className="h-1 bg-[#00D2FF] rounded-xs" />
                </div>
                <span className="text-[7px] font-mono text-amber-300 font-bold">S3</span>
              </div>
            </div>
            <div className="text-[10px] font-mono text-cyan-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9900]" />
              GLOBAL CLOUD INFRASTRUCTURE
            </div>
          </div>

          {/* Right: Giant Glowing AWS Cloud Emblem */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative p-4 rounded-3xl bg-gradient-to-br from-[#082456]/90 to-[#0A337A]/90 border-2 border-[#00D2FF]/60 shadow-[0_0_30px_rgba(0,210,255,0.4)] backdrop-blur-md">
              <AwsLogo className="w-20 h-20 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
              <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-[#FF9900] text-[#06143D] text-[9px] font-mono font-black uppercase tracking-wider shadow-md">
                MULTI-AZ
              </div>
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-300 mt-2 tracking-widest uppercase">
              AWS CLOUD ECOSYSTEM
            </span>
          </div>
        </div>
      );

    case 'docker':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#041A38] via-[#063168] to-[#0A4B9E] p-4 flex items-center justify-between border border-[#2496ED]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#2496ED]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Container Stack Matrix */}
          <div className="relative z-10 space-y-2">
            <div className="grid grid-cols-3 gap-1.5 w-36">
              {[1, 2, 3, 4, 5, 6].map((c) => (
                <div key={c} className="h-7 rounded bg-[#0A3370]/90 border border-[#2496ED]/50 flex items-center justify-center text-[8px] font-mono font-bold text-cyan-300 shadow-sm">
                  C_{c}0
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono text-cyan-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2496ED] animate-ping" />
              ISOLATED RUNTIMES
            </div>
          </div>

          {/* Right: Glowing Docker Emblem */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#072450]/90 border-2 border-[#2496ED] shadow-[0_0_30px_rgba(36,150,237,0.4)]">
              <DockerLogo className="w-20 h-20 text-[#2496ED] drop-shadow-[0_0_12px_rgba(36,150,237,0.8)]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-300 mt-2 tracking-widest uppercase">
              DOCKER ENGINE
            </span>
          </div>
        </div>
      );

    case 'kubernetes':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#061848] via-[#0D2E7C] to-[#1E4DB8] p-4 flex items-center justify-between border border-[#326CE5]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#326CE5]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Cluster Pod Mesh */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#0A2260] border border-[#326CE5] text-center">
                <div className="text-[9px] font-mono font-bold text-cyan-200">NODE 01</div>
                <div className="text-[8px] font-mono text-emerald-400">● 4 PODS</div>
              </div>
              <div className="text-cyan-400 font-mono">⟷</div>
              <div className="p-2 rounded-xl bg-[#0A2260] border border-[#326CE5] text-center">
                <div className="text-[9px] font-mono font-bold text-cyan-200">NODE 02</div>
                <div className="text-[8px] font-mono text-emerald-400">● 4 PODS</div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-cyan-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#326CE5]" />
              AUTO-SCALING REPLICA SETS
            </div>
          </div>

          {/* Right: Kubernetes Helm */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#0A266C]/90 border-2 border-[#326CE5] shadow-[0_0_30px_rgba(50,108,229,0.5)]">
              <KubernetesLogo className="w-20 h-20 text-[#326CE5] drop-shadow-[0_0_12px_rgba(50,108,229,0.8)]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-blue-200 mt-2 tracking-widest uppercase">
              K8S CLUSTER ORCHESTRATION
            </span>
          </div>
        </div>
      );

    case 'jenkins':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2D0F18] via-[#4A1828] to-[#78243E] p-4 flex items-center justify-between border border-[#D24939]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#D24939]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Pipeline Stages */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-1.5">
              {['BUILD', 'TEST', 'SCAN', 'DEPLOY'].map((stg) => (
                <div key={stg} className="px-2 py-1.5 rounded bg-[#1C0910] border border-[#D24939]/60 text-center">
                  <div className="text-[8px] font-mono font-bold text-white">{stg}</div>
                  <div className="text-[7px] text-emerald-400 font-mono">✓ PASS</div>
                </div>
              ))}
            </div>
            <div className="text-[10px] font-mono text-rose-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D24939] animate-pulse" />
              CONTINUOUS DELIVERY PIPELINE
            </div>
          </div>

          {/* Right: Jenkins Butler */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-3.5 rounded-3xl bg-[#2A0C16]/90 border-2 border-[#D24939] shadow-[0_0_30px_rgba(210,73,57,0.5)]">
              <JenkinsLogo className="w-18 h-18 text-[#D24939]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-rose-200 mt-2 tracking-widest uppercase">
              JENKINS CI/CD
            </span>
          </div>
        </div>
      );

    case 'terraform':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E0E3D] via-[#38166D] to-[#5C23A8] p-4 flex items-center justify-between border border-[#844FBA]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#844FBA]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Declarative State Graph */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#15092A] border border-[#844FBA]/60 space-y-1">
              <div className="text-[9px] font-mono text-purple-300 font-bold">terraform apply</div>
              <div className="text-[8px] font-mono text-emerald-400">+ 12 cloud resources added</div>
              <div className="text-[8px] font-mono text-cyan-300">~ 0 changed, 0 destroyed</div>
            </div>
            <div className="text-[10px] font-mono text-purple-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#844FBA]" />
              INFRASTRUCTURE AS CODE (IaC)
            </div>
          </div>

          {/* Right: Terraform Polygon */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#220B44]/90 border-2 border-[#844FBA] shadow-[0_0_30px_rgba(132,79,186,0.5)]">
              <TerraformLogo className="w-20 h-20 text-[#844FBA]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-purple-200 mt-2 tracking-widest uppercase">
              HASHICORP TERRAFORM
            </span>
          </div>
        </div>
      );

    case 'linux':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A1806] via-[#332A0C] to-[#544614] p-4 flex items-center justify-between border border-[#FCC624]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FCC624]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Bash Terminal */}
          <div className="relative z-10 space-y-2">
            <div className="w-44 p-2.5 rounded-xl bg-[#0D0C03]/90 border border-[#FCC624]/50 font-mono text-[9px] space-y-1">
              <div className="text-amber-400">root@cloudariss:~# uname -r</div>
              <div className="text-slate-300">Linux 6.8.0-enterprise-x86_64</div>
              <div className="text-emerald-400">System status: OPTIMAL</div>
            </div>
            <div className="text-[10px] font-mono text-amber-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FCC624] animate-ping" />
              SERVER ADMINISTRATION &amp; KERNEL
            </div>
          </div>

          {/* Right: Tux Penguin */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-3.5 rounded-3xl bg-[#1C1805]/90 border-2 border-[#FCC624] shadow-[0_0_30px_rgba(252,198,36,0.4)]">
              <LinuxLogo className="w-18 h-18 text-[#FCC624]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-300 mt-2 tracking-widest uppercase">
              LINUX SYSTEM
            </span>
          </div>
        </div>
      );

    case 'python':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#091F38] via-[#123E6E] to-[#2060A8] p-4 flex items-center justify-between border border-[#3776AB]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#FFD438]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Pandas Data Engine */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#051325]/90 border border-[#3776AB]/50 font-mono text-[9px] space-y-1">
              <div className="text-cyan-300">import pandas as pd</div>
              <div className="text-amber-300">df = pd.DataFrame(data)</div>
              <div className="text-emerald-400">df.groupby('kpi').mean()</div>
            </div>
            <div className="text-[10px] font-mono text-cyan-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD438]" />
              ANALYTICS &amp; AUTOMATION ENGINE
            </div>
          </div>

          {/* Right: Python Snake */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#08203E]/90 border-2 border-[#3776AB] shadow-[0_0_30px_rgba(55,118,171,0.5)]">
              <PythonLogo className="w-20 h-20" />
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-200 mt-2 tracking-widest uppercase">
              PYTHON PROGRAMMING
            </span>
          </div>
        </div>
      );

    case 'java':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2D1606] via-[#522509] to-[#8C3E0E] p-4 flex items-center justify-between border border-[#ED8B00]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#ED8B00]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: JVM Enterprise Stack */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#170902]/90 border border-[#ED8B00]/50 font-mono text-[9px] space-y-1">
              <div className="text-orange-300">public class EnterpriseApp &#123;</div>
              <div className="text-amber-200 pl-2">SpringApplication.run()</div>
              <div className="text-orange-300">&#125;</div>
            </div>
            <div className="text-[10px] font-mono text-amber-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ED8B00]" />
              ENTERPRISE APPLICATION BACKEND
            </div>
          </div>

          {/* Right: Java Coffee Cup */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#260E03]/90 border-2 border-[#ED8B00] shadow-[0_0_30px_rgba(237,139,0,0.5)]">
              <JavaLogo className="w-20 h-20" />
            </div>
            <span className="text-[11px] font-mono font-bold text-orange-200 mt-2 tracking-widest uppercase">
              JAVA &amp; JVM ARCHITECTURE
            </span>
          </div>
        </div>
      );

    case 'c':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#081F38] via-[#0E355E] to-[#185390] p-4 flex items-center justify-between border border-[#00599C]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#00599C]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Memory Pointer Hex Grid */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#041224]/90 border border-[#00599C]/60 font-mono text-[9px] space-y-1">
              <div className="text-cyan-300">int* ptr = &amp;memoryAddr;</div>
              <div className="text-slate-300">0x7FFF5FBFF8C0 &#8594; [01101001]</div>
              <div className="text-emerald-400">O(1) memory complexity</div>
            </div>
            <div className="text-[10px] font-mono text-cyan-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00599C]" />
              LOW-LEVEL SYSTEMS COMPUTING
            </div>
          </div>

          {/* Right: C Hexagon */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#061B34]/90 border-2 border-[#00599C] shadow-[0_0_30px_rgba(0,89,156,0.5)]">
              <CLogo className="w-20 h-20" />
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-200 mt-2 tracking-widest uppercase">
              C / C++ CORE SYSTEMS
            </span>
          </div>
        </div>
      );

    case 'sql':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#062038] via-[#0C3E68] to-[#1264A0] p-4 flex items-center justify-between border border-[#336791]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#336791]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Relational Storage Cylinder */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#041324]/90 border border-[#336791]/60 font-mono text-[9px] space-y-1">
              <div className="text-cyan-300">SELECT id, SUM(rev)</div>
              <div className="text-slate-300">FROM orders JOIN users ON ..</div>
              <div className="text-emerald-400">Execution Time: 2.1ms (Indexed)</div>
            </div>
            <div className="text-[10px] font-mono text-cyan-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#336791]" />
              RELATIONAL QUERY OPTIMIZATION
            </div>
          </div>

          {/* Right: SQL Database Cylinders */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#06223E]/90 border-2 border-[#336791] shadow-[0_0_30px_rgba(51,103,145,0.5)]">
              <SqlLogo className="w-20 h-20 text-[#336791]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-200 mt-2 tracking-widest uppercase">
              RELATIONAL DATABASE
            </span>
          </div>
        </div>
      );

    case 'powerbi':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#261B04] via-[#4D3608] to-[#80590C] p-4 flex items-center justify-between border border-[#F2C811]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F2C811]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: 3D Holographic Dashboard */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-end gap-1.5 h-16 p-2 rounded-xl bg-[#140D01]/90 border border-[#F2C811]/50">
              <div className="w-4 h-6 bg-[#F2C811]/60 rounded-xs" />
              <div className="w-4 h-10 bg-[#F2C811]/80 rounded-xs" />
              <div className="w-4 h-14 bg-[#F2C811] rounded-xs shadow-sm" />
              <div className="w-4 h-8 bg-[#F2C811]/70 rounded-xs" />
              <div className="w-4 h-12 bg-[#F2C811] rounded-xs" />
            </div>
            <div className="text-[10px] font-mono text-amber-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2C811]" />
              INTERACTIVE DAX BI DASHBOARDS
            </div>
          </div>

          {/* Right: Power BI 3-Bar Logo */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#1F1502]/90 border-2 border-[#F2C811] shadow-[0_0_30px_rgba(242,200,17,0.5)]">
              <PowerBiLogo className="w-20 h-20 text-[#F2C811]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-300 mt-2 tracking-widest uppercase">
              MICROSOFT POWER BI
            </span>
          </div>
        </div>
      );

    case 'excel':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#062414] via-[#0A4828] to-[#127A45] p-4 flex items-center justify-between border border-[#107C41]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#107C41]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Dynamic Array Cells */}
          <div className="relative z-10 space-y-2">
            <div className="grid grid-cols-3 gap-1 w-36 p-2 rounded-xl bg-[#03140A]/90 border border-[#107C41]/50 font-mono text-[8px] text-emerald-300">
              <div className="p-1 bg-[#107C41]/40 rounded text-center">XLOOKUP</div>
              <div className="p-1 bg-[#107C41]/30 rounded text-center">FILTER</div>
              <div className="p-1 bg-[#107C41]/30 rounded text-center">UNIQUE</div>
              <div className="p-1 bg-[#107C41]/20 rounded text-center">$42,500</div>
              <div className="p-1 bg-[#107C41]/40 rounded text-center font-bold">+18.4%</div>
              <div className="p-1 bg-[#107C41]/20 rounded text-center">KPI-PASS</div>
            </div>
            <div className="text-[10px] font-mono text-emerald-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#107C41]" />
              SPREADSHEET &amp; DYNAMIC ARRAYS
            </div>
          </div>

          {/* Right: Excel Green Book */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#051C0F]/90 border-2 border-[#107C41] shadow-[0_0_30px_rgba(16,124,65,0.5)]">
              <ExcelLogo className="w-20 h-20 text-[#107C41]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-emerald-300 mt-2 tracking-widest uppercase">
              MICROSOFT EXCEL
            </span>
          </div>
        </div>
      );

    case 'rag':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#062420] via-[#0B4A40] to-[#127868] p-4 flex items-center justify-between border border-[#10A37F]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#10A37F]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Vector Retrieval Matrix */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#031714]/90 border border-[#10A37F]/60 font-mono text-[9px] space-y-1">
              <div className="text-teal-300">Query Vector &#8594; Cosine Sim</div>
              <div className="text-cyan-200">Top-k Document Context [3]</div>
              <div className="text-emerald-400">Grounded Synthesis (Zero Hallucination)</div>
            </div>
            <div className="text-[10px] font-mono text-teal-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10A37F] animate-pulse" />
              RETRIEVAL-AUGMENTED GENERATION
            </div>
          </div>

          {/* Right: OpenAI Spiral */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#051E1A]/90 border-2 border-[#10A37F] shadow-[0_0_30px_rgba(16,163,127,0.5)]">
              <ChatGptLogo className="w-20 h-20 text-[#10A37F]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-teal-300 mt-2 tracking-widest uppercase">
              GENERATIVE AI &amp; RAG
            </span>
          </div>
        </div>
      );

    case 'agenticai':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1A0B38] via-[#35156E] to-[#5C23B8] p-4 flex items-center justify-between border border-[#8B5CF6]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#8B5CF6]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Multi-Agent Topology */}
          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-[#100624] border border-[#8B5CF6] text-center">
                <div className="text-[8px] font-mono text-purple-300">PLANNER</div>
                <div className="text-[7px] text-emerald-400">DECOMPOSE</div>
              </div>
              <div className="text-purple-300 font-mono text-xs">➔</div>
              <div className="p-2 rounded-xl bg-[#100624] border border-[#8B5CF6] text-center">
                <div className="text-[8px] font-mono text-cyan-300">TOOL EXEC</div>
                <div className="text-[7px] text-emerald-400">VERIFY</div>
              </div>
            </div>
            <div className="text-[10px] font-mono text-purple-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]" />
              AUTONOMOUS MULTI-AGENT PIPELINE
            </div>
          </div>

          {/* Right: Agentic AI Nodes */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#1F0A44]/90 border-2 border-[#8B5CF6] shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              <AgenticAiLogo className="w-20 h-20 text-[#8B5CF6]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-purple-300 mt-2 tracking-widest uppercase">
              AGENTIC AI SYSTEMS
            </span>
          </div>
        </div>
      );

    case 'dsa':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#240B38] via-[#48156E] to-[#7823B8] p-4 flex items-center justify-between border border-[#7C3AED]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#7C3AED]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Tree & Pointer Graph */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#150624]/90 border border-[#7C3AED]/60 font-mono text-[9px] space-y-1">
              <div className="text-purple-300">Root Node: [Key: 42]</div>
              <div className="text-cyan-200">Left: [21] ⟵ ➔ Right: [84]</div>
              <div className="text-emerald-400">Balanced AVL Height: O(log N)</div>
            </div>
            <div className="text-[10px] font-mono text-purple-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
              DATA STRUCTURES &amp; MEMORY
            </div>
          </div>

          {/* Right: DSA Tree Icon */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#200A40]/90 border-2 border-[#7C3AED] shadow-[0_0_30px_rgba(124,58,237,0.5)]">
              <DsaLogo className="w-20 h-20 text-[#7C3AED]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-purple-300 mt-2 tracking-widest uppercase">
              DATA STRUCTURES
            </span>
          </div>
        </div>
      );

    case 'algorithms':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#281504] via-[#522908] to-[#8A450D] p-4 flex items-center justify-between border border-[#F59E0B]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#F59E0B]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Dijkstra Path Graph */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#140901]/90 border border-[#F59E0B]/60 font-mono text-[9px] space-y-1">
              <div className="text-amber-300">Path: Node_A &#8594; Node_Z</div>
              <div className="text-emerald-400">Shortest Distance: 14 hops</div>
              <div className="text-cyan-200">Time Complexity: O(V + E log V)</div>
            </div>
            <div className="text-[10px] font-mono text-amber-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              COMPUTATIONAL ALGORITHMS
            </div>
          </div>

          {/* Right: Algorithm Flowchart Icon */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#200F02]/90 border-2 border-[#F59E0B] shadow-[0_0_30px_rgba(245,158,11,0.5)]">
              <AlgorithmLogo className="w-20 h-20 text-[#F59E0B]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-300 mt-2 tracking-widest uppercase">
              ALGORITHMS &amp; LOGIC
            </span>
          </div>
        </div>
      );

    case 'frontend':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#062038] via-[#0A406E] to-[#126CAE] p-4 flex items-center justify-between border border-[#61DAFB]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#61DAFB]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Component DOM Tree */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#031322]/90 border border-[#61DAFB]/60 font-mono text-[9px] space-y-1">
              <div className="text-cyan-300">&lt;AppLayout&gt;</div>
              <div className="text-slate-300 pl-2">&lt;InteractiveCanvas /&gt;</div>
              <div className="text-cyan-300">&lt;/AppLayout&gt;</div>
            </div>
            <div className="text-[10px] font-mono text-cyan-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#61DAFB]" />
              RESPONSIVE WEB INTERFACES
            </div>
          </div>

          {/* Right: React Atom */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#06223D]/90 border-2 border-[#61DAFB] shadow-[0_0_30px_rgba(97,218,251,0.5)]">
              <ReactLogo className="w-20 h-20 text-[#61DAFB]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-300 mt-2 tracking-widest uppercase">
              FRONTEND &amp; REACT
            </span>
          </div>
        </div>
      );

    case 'backend':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#06241A] via-[#0B4834] to-[#127856] p-4 flex items-center justify-between border border-[#10B981]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#10B981]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: API Gateway & Microservices */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#03150F]/90 border border-[#10B981]/60 font-mono text-[9px] space-y-1">
              <div className="text-emerald-300">POST /api/v1/checkout 200 OK</div>
              <div className="text-slate-300">JWT Authentication Verified</div>
              <div className="text-cyan-300">Redis Cache Hit (0.4ms)</div>
            </div>
            <div className="text-[10px] font-mono text-emerald-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              SERVER-SIDE API ARCHITECTURE
            </div>
          </div>

          {/* Right: Backend Server Rack */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#051E16]/90 border-2 border-[#10B981] shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <BackendLogo className="w-20 h-20 text-[#10B981]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-emerald-300 mt-2 tracking-widest uppercase">
              BACKEND SERVICES
            </span>
          </div>
        </div>
      );

    case 'dbms':
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#061E38] via-[#0C3B6C] to-[#1460AC] p-4 flex items-center justify-between border border-[#336791]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#336791]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: ACID Transactions */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#041224]/90 border border-[#336791]/60 font-mono text-[9px] space-y-1">
              <div className="text-cyan-300">ACID Transaction: COMMITTED</div>
              <div className="text-emerald-400">WAL Replication: Synchronized</div>
              <div className="text-slate-300">Zero Data Loss Architecture</div>
            </div>
            <div className="text-[10px] font-mono text-cyan-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#336791]" />
              DATABASE MANAGEMENT SYSTEMS
            </div>
          </div>

          {/* Right: DBMS Cylinders */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#06203E]/90 border-2 border-[#336791] shadow-[0_0_30px_rgba(51,103,145,0.5)]">
              <DbmsLogo className="w-20 h-20 text-[#336791]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-cyan-200 mt-2 tracking-widest uppercase">
              DBMS ARCHITECTURE
            </span>
          </div>
        </div>
      );

    case 'oops':
    default:
      return (
        <div className="relative w-full h-44 sm:h-52 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2D1406] via-[#562509] to-[#8F3E0E] p-4 flex items-center justify-between border border-[#D97706]/40 shadow-inner">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#D97706]/25 rounded-full blur-3xl pointer-events-none" />

          {/* Left: OOP Polymorphism & Inheritance */}
          <div className="relative z-10 space-y-2">
            <div className="p-2.5 rounded-xl bg-[#160802]/90 border border-[#D97706]/60 font-mono text-[9px] space-y-1">
              <div className="text-amber-300">interface PaymentGateway</div>
              <div className="text-orange-200 pl-2">class Stripe implements ...</div>
              <div className="text-emerald-400">Polymorphic Decoupling: SOLID</div>
            </div>
            <div className="text-[10px] font-mono text-amber-200 tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
              OBJECT-ORIENTED DESIGN PATTERNS
            </div>
          </div>

          {/* Right: OOP Modular Blocks */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-3xl bg-[#220E03]/90 border-2 border-[#D97706] shadow-[0_0_30px_rgba(217,119,6,0.5)]">
              <OopsLogo className="w-20 h-20 text-[#D97706]" />
            </div>
            <span className="text-[11px] font-mono font-bold text-amber-300 mt-2 tracking-widest uppercase">
              OOP &amp; SOFTWARE DESIGN
            </span>
          </div>
        </div>
      );
  }
};
