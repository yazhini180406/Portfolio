import React from "react";
import { motion } from "framer-motion";
import type { Project } from "../types";
import { Eye, ExternalLink, FileText, Settings } from "lucide-react";

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface SelectedWorksProps {
  projects: Project[];
}

const renderSchematic = (idx: number) => {
  if (idx === 0) {
    return (
      <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
        <defs>
          <pattern id="grid-0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.1]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-0)" />
        <line x1="100" y1="100" x2="300" y2="300" className="opacity-30" />
        <line x1="300" y1="100" x2="100" y2="300" className="opacity-30" />
        <circle cx="200" cy="200" r="45" className="stroke-[#89AACC] opacity-80" strokeWidth="2" />
        <circle cx="200" cy="200" r="32" className="stroke-[#89AACC] opacity-30" />
        <circle cx="100" cy="100" r="20" className="stroke-[#4E85BF] opacity-80" />
        <circle cx="300" cy="100" r="20" className="stroke-[#4E85BF] opacity-80" />
        <circle cx="100" cy="300" r="20" className="stroke-[#4E85BF] opacity-80" />
        <circle cx="300" cy="300" r="20" className="stroke-[#4E85BF] opacity-80" />
        <line x1="85" y1="100" x2="115" y2="100" className="opacity-60" />
        <line x1="285" y1="100" x2="315" y2="100" className="opacity-60" />
        <line x1="85" y1="300" x2="115" y2="300" className="opacity-60" />
        <line x1="285" y1="300" x2="315" y2="300" className="opacity-60" />
        <rect x="180" y="130" width="40" height="20" rx="4" className="stroke-[#89AACC] opacity-60" />
        <text x="200" y="143" textAnchor="middle" fontSize="8" className="fill-muted/70 font-mono">GPS</text>
        <path d="M 170,250 A 40,40 0 0,0 230,250" className="stroke-[#89AACC] opacity-50" strokeDasharray="3 3" />
        <text x="200" y="85" textAnchor="middle" fontSize="10" className="fill-muted/50 font-mono tracking-widest font-bold">UAV SYS CONFIG</text>
      </svg>
    );
  }
  if (idx === 1) {
    return (
      <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
        <defs>
          <pattern id="grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.1]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-1)" />
        <rect x="230" y="120" width="100" height="150" rx="6" className="stroke-[#89AACC]" strokeWidth="2" />
        <text x="280" y="145" textAnchor="middle" fontSize="11" className="fill-[#89AACC] font-mono font-bold">ESP32 Core</text>
        <text x="280" y="160" textAnchor="middle" fontSize="8" className="fill-muted/60 font-mono">WIFI / BLE</text>
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="215" y1={180 + i * 10} x2="230" y2={180 + i * 10} className="stroke-stroke" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1="330" y1={180 + i * 10} x2="345" y2={180 + i * 10} className="stroke-stroke" />
        ))}
        <rect x="70" y="150" width="80" height="100" rx="8" className="stroke-[#4E85BF] opacity-80" strokeWidth="2" />
        <line x1="110" y1="140" x2="110" y2="150" className="stroke-[#4E85BF] opacity-80" strokeWidth="4" />
        <text x="110" y="200" textAnchor="middle" fontSize="11" className="fill-[#4E85BF] font-mono font-bold">LIPO 3.7V</text>
        <path d="M 110,140 L 110,100 L 280,100 L 280,120" className="stroke-stroke" strokeDasharray="2 2" />
        <path d="M 50,310 Q 90,290 130,330 T 210,300 T 290,320 T 370,280" className="stroke-[#89AACC]/30" strokeWidth="2" />
        <text x="200" y="85" textAnchor="middle" fontSize="10" className="fill-muted/50 font-mono tracking-widest font-bold">BATTERY BALANCER</text>
      </svg>
    );
  }
  if (idx === 2) {
    return (
      <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
        <defs>
          <pattern id="grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.1]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-2)" />
        <circle cx="110" cy="180" r="35" className="stroke-[#89AACC]" strokeWidth="2" />
        <circle cx="110" cy="180" r="28" className="stroke-[#89AACC] opacity-30" strokeDasharray="2 2" />
        <text x="110" y="184" textAnchor="middle" fontSize="9" className="fill-[#89AACC] font-mono font-bold">MQ-6</text>
        <rect x="70" y="270" width="80" height="30" rx="3" className="stroke-[#4E85BF] opacity-80" />
        <circle cx="110" cy="285" r="4" className="fill-[#4E85BF]" />
        <rect x="250" y="160" width="90" height="130" rx="6" className="stroke-stroke" />
        <text x="295" y="195" textAnchor="middle" fontSize="10" className="fill-text-primary/70 font-mono font-bold">ATMEGA328P</text>
        <path d="M 230,110 A 15,15 0 0,1 230,140" className="stroke-red-500/50" strokeWidth="2" />
        <rect x="180" y="112" width="30" height="26" rx="2" className="stroke-stroke" />
        <path d="M 210,115 L 225,105 L 225,145 L 210,135 Z" className="stroke-stroke fill-stroke/10" />
        <path d="M 145,180 L 250,180" className="stroke-stroke" />
        <path d="M 150,285 L 250,285" className="stroke-stroke" />
        <text x="200" y="85" textAnchor="middle" fontSize="10" className="fill-muted/50 font-mono tracking-widest font-bold">RTGMS SCHEMATIC</text>
      </svg>
    );
  }
  if (idx === 3) {
    return (
      <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
        <defs>
          <pattern id="grid-3" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.1]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-3)" />
        <circle cx="130" cy="150" r="18" className="stroke-[#89AACC]" strokeWidth="2" />
        <circle cx="210" cy="150" r="18" className="stroke-[#89AACC]" strokeWidth="2" />
        <rect x="95" y="125" width="150" height="50" rx="6" className="stroke-stroke" />
        <text x="170" y="138" textAnchor="middle" fontSize="8" className="fill-muted/60 font-mono">HC-SR04 SENSOR</text>
        <path d="M 130,120 A 40,40 0 0,0 130,80" className="stroke-[#89AACC] opacity-80" strokeWidth="2" />
        <path d="M 210,120 A 40,40 0 0,1 210,80" className="stroke-[#4E85BF] opacity-80" strokeWidth="2" />
        <rect x="290" y="230" width="45" height="45" rx="22.5" className="stroke-[#4E85BF]" strokeWidth="2" />
        <text x="312.5" y="256" textAnchor="middle" fontSize="8" className="fill-[#4E85BF] font-mono">VIB_MOTOR</text>
        <rect x="125" y="230" width="90" height="90" rx="4" className="stroke-stroke" />
        <text x="170" y="270" textAnchor="middle" fontSize="10" className="fill-text-primary/70 font-mono font-bold">MCU CORE</text>
        <path d="M 130,175 L 130,230" className="stroke-[#89AACC]" />
        <path d="M 210,175 L 210,230" className="stroke-[#4E85BF]" />
        <text x="200" y="85" textAnchor="middle" fontSize="10" className="fill-muted/50 font-mono tracking-widest font-bold">ASSISTIVE SONAR</text>
      </svg>
    );
  }
  if (idx === 4) {
    return (
      <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
        <defs>
          <pattern id="grid-4" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.1]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-4)" />
        <rect x="50" y="130" width="95" height="40" rx="4" className="stroke-[#89AACC]" strokeWidth="2" />
        <text x="97.5" y="154" textAnchor="middle" fontSize="8" className="fill-[#89AACC] font-mono font-bold">INCOME DISPATCH</text>
        
        <rect x="50" y="230" width="95" height="40" rx="4" className="stroke-[#4E85BF]" strokeWidth="2" />
        <text x="97.5" y="254" textAnchor="middle" fontSize="8" className="fill-[#4E85BF] font-mono font-bold">EXPENSE CATEGORIES</text>

        <rect x="250" y="160" width="100" height="80" rx="6" className="stroke-stroke" />
        <text x="300" y="190" textAnchor="middle" fontSize="9" className="fill-text-primary/70 font-mono font-bold">ANALYTICS ENGINE</text>
        <text x="300" y="210" textAnchor="middle" fontSize="7" className="fill-muted/50 font-mono">DATA METRICS</text>

        <path d="M 145,150 L 195,150 L 195,200 L 250,200" className="stroke-stroke" strokeDasharray="3 3" />
        <path d="M 145,250 L 195,250 L 195,200" className="stroke-stroke" />
        
        <path d="M 260,230 L 280,215 L 300,225 L 320,205 L 340,210" className="stroke-[#89AACC] opacity-80" strokeWidth="1.5" />
        <circle cx="280" cy="215" r="2.5" className="fill-[#89AACC]" />
        <circle cx="320" cy="205" r="2.5" className="fill-[#89AACC]" />

        <text x="200" y="85" textAnchor="middle" fontSize="10" className="fill-muted/50 font-mono tracking-widest font-bold">EXPANSEIQ ARCH</text>
      </svg>
    );
  }
  if (idx === 5) {
    return (
      <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
        <defs>
          <pattern id="grid-5" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.1]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-5)" />
        <rect x="60" y="110" width="80" height="30" rx="3" className="stroke-[#89AACC]" strokeWidth="2" />
        <text x="100" y="128" textAnchor="middle" fontSize="8" className="fill-[#89AACC] font-mono font-bold">OPEN TICKET</text>

        <rect x="60" y="185" width="80" height="30" rx="3" className="stroke-[#4E85BF]" strokeWidth="2" />
        <text x="100" y="203" textAnchor="middle" fontSize="8" className="fill-[#4E85BF] font-mono font-bold">IN_PROGRESS</text>

        <rect x="60" y="260" width="80" height="30" rx="3" className="stroke-stroke" />
        <text x="100" y="278" textAnchor="middle" fontSize="8" className="fill-muted/70 font-mono font-bold">RESOLVED</text>

        <path d="M 100,140 L 100,185" className="stroke-stroke" strokeDasharray="3 3" />
        <path d="M 100,215 L 100,260" className="stroke-stroke" strokeDasharray="3 3" />

        <rect x="230" y="160" width="110" height="80" rx="6" className="stroke-stroke" />
        <text x="285" y="195" textAnchor="middle" fontSize="9" className="fill-text-primary/70 font-mono font-bold">RELATIONAL DB</text>
        <text x="285" y="215" textAnchor="middle" fontSize="7" className="fill-muted/50 font-mono">SCHEMAS & TABLES</text>

        <path d="M 140,200 L 230,200" className="stroke-stroke" />
        <path d="M 140,125 L 185,125 L 185,200" className="stroke-stroke" />
        <path d="M 140,275 L 185,275 L 185,200" className="stroke-stroke" />

        <text x="200" y="85" textAnchor="middle" fontSize="10" className="fill-muted/50 font-mono tracking-widest font-bold">COMPLAINT PORTAL DB</text>
      </svg>
    );
  }
  if (idx === 6) {
    return (
      <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
        <defs>
          <pattern id="grid-6" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.1]" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-6)" />
        <rect x="50" y="130" width="100" height="130" rx="6" className="stroke-stroke" />
        <text x="100" y="155" textAnchor="middle" fontSize="8" className="fill-muted/70 font-mono font-bold">PRODUCT LIST</text>
        
        <rect x="65" y="170" width="70" height="20" rx="2" className="stroke-[#89AACC]/50" />
        <rect x="65" y="195" width="70" height="20" rx="2" className="stroke-[#89AACC]/50" />
        <rect x="65" y="220" width="70" height="20" rx="2" className="stroke-[#89AACC]/50" />

        <rect x="250" y="130" width="100" height="50" rx="4" className="stroke-[#89AACC]" strokeWidth="2" />
        <text x="300" y="158" textAnchor="middle" fontSize="8" className="fill-[#89AACC] font-mono font-bold">SHOPPING CART</text>

        <rect x="250" y="210" width="100" height="50" rx="4" className="stroke-[#4E85BF]" strokeWidth="2" />
        <text x="300" y="238" textAnchor="middle" fontSize="8" className="fill-[#4E85BF] font-mono font-bold">CHECKOUT GATEWAY</text>

        <path d="M 150,195 L 200,195 L 200,155 L 250,155" className="stroke-stroke" />
        <path d="M 300,180 L 300,210" className="stroke-stroke" strokeDasharray="3 3" />

        <text x="200" y="85" textAnchor="middle" fontSize="10" className="fill-muted/50 font-mono tracking-widest font-bold">ELITE SHOP SYSTEM</text>
      </svg>
    );
  }
  return (
    <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 400 400" fill="none" stroke="currentColor" strokeWidth="1.5">
      <defs>
        <pattern id="grid-default" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.1]" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-default)" />
      <text x="200" y="200" textAnchor="middle" fontSize="12" className="fill-muted/50 font-mono">SYSTEM SCHEMATIC</text>
    </svg>
  );
};

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ projects }) => {
  const getColSpan = (index: number) => {
    // Spans: 7, 5, 5, 7
    const pattern = [7, 5, 5, 7];
    const span = pattern[index % pattern.length];
    return span === 7 ? "md:col-span-7" : "md:col-span-5";
  };

  const handleCardClick = (link: string) => {
    if (link && link !== "#") {
      window.open(link, "_blank");
    }
  };

  return (
    <section id="work" className="bg-bg py-20 md:py-28 select-none">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
              Featured <span className="italic font-normal">projects</span>
            </h2>
            <p className="text-sm md:text-base text-muted/80 leading-relaxed">
              A selection of full-stack web applications, REST API integrations, data science analytics, and interactive software dashboards.
            </p>
          </div>
          
          <button
            onClick={() => {
              const el = document.getElementById("explorations");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted hover:text-text-primary transition-colors duration-200 mt-6 md:mt-0"
          >
            Explore certifications <span className="text-lg">→</span>
          </button>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {projects.map((project, idx) => {
            const colSpan = getColSpan(idx);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className={`group relative bg-surface border border-stroke rounded-3xl overflow-hidden min-h-[340px] md:min-h-0 md:aspect-auto md:h-[480px] flex flex-col justify-end cursor-pointer ${colSpan}`}
                onClick={() => handleCardClick(project.link)}
              >
                {/* Project Schematic Blueprint */}
                <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#050505]">
                  {renderSchematic(idx)}
                  {/* Halftone texture overlay */}
                  <div className="absolute inset-0 halftone-overlay mix-blend-multiply opacity-30 pointer-events-none" />
                  {/* Card shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent z-10 pointer-events-none" />
                </div>

                {/* Content - Bottom Left */}
                <div className="relative z-20 p-6 md:p-8 flex flex-col justify-between h-full">
                  {/* Top Links Row */}
                  <div className="flex justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 border border-white/5 text-muted hover:text-text-primary hover:bg-black/60 transition-all duration-200"
                        title="GitHub Codebase"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.report && (
                      <a
                        href={project.report}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 border border-white/5 text-muted hover:text-text-primary hover:bg-black/60 transition-all duration-200"
                        title="Project Report"
                      >
                        <FileText size={16} />
                      </a>
                    )}
                    {project.workflow && (
                      <a
                        href={project.workflow}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 border border-white/5 text-muted hover:text-text-primary hover:bg-black/60 transition-all duration-200"
                        title="Workflow Documentation"
                      >
                        <Settings size={16} />
                      </a>
                    )}
                    {project.link && project.link.includes("wokwi.com") && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-black/40 border border-white/5 text-muted hover:text-text-primary hover:bg-black/60 transition-all duration-200"
                        title="Run Wokwi Simulator"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[9px] font-mono tracking-wider text-text-primary/70 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold text-text-primary tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted/90 line-clamp-2 leading-relaxed">
                      {project.desc}
                    </p>
                  </div>
                </div>

                {/* Hover Reveal Card Label */}
                <div className="absolute inset-0 bg-[#0a0a0a]/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-400 z-35 flex items-center justify-center">
                  <div className="relative p-[1px] rounded-full overflow-hidden animate-gradient-shift accent-gradient">
                    <div className="bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 shadow-lg font-medium text-xs tracking-wider uppercase">
                      <Eye size={14} className="stroke-[2.5]" />
                      <span>View — <span className="font-display italic capitalize font-semibold tracking-normal text-sm">{project.title.split(" ")[0]}</span></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
