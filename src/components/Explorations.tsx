import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ExplorationItem {
  title: string;
  category: string;
  image: string;
  link: string;
  desc: string;
}

const ITEMS: ExplorationItem[] = [
  {
    title: "React.js Frontend Architecture",
    category: "Web Development",
    image: import.meta.env.BASE_URL + "images/exploration_2.png",
    link: "#",
    desc: "Mastered modular component design, Context API global state, and custom hooks.",
  },
  {
    title: "Java & Spring Boot APIs",
    category: "Backend Engineering",
    image: import.meta.env.BASE_URL + "images/exploration_1.png",
    link: "#",
    desc: "Engineered scalable RESTful API microservices with MVC patterns and security layers.",
  },
  {
    title: "Python Data Science & ML",
    category: "Machine Learning",
    image: import.meta.env.BASE_URL + "images/exploration_9.png",
    link: "#",
    desc: "Developed predictive data pipelines, feature engineering, and statistical analytics.",
  },
  {
    title: "Relational Database & SQL",
    category: "Database Design",
    image: import.meta.env.BASE_URL + "images/exploration_12.png",
    link: "#",
    desc: "Structured relational schemas, complex query join optimizations, and SQLite integration.",
  },
  {
    title: "UI/UX & Design Thinking",
    category: "User Experience",
    image: import.meta.env.BASE_URL + "images/exploration_3.png",
    link: "#",
    desc: "Applied user-centered prototyping, wireframing, and visual hierarchy standards.",
  },
  {
    title: "Git & Version Control",
    category: "DevOps & Workflow",
    image: import.meta.env.BASE_URL + "images/exploration_4.png",
    link: "#",
    desc: "Collaborative branch workflows, pull request reviews, and CI/CD deployment logic.",
  },
];

const renderExplorationVector = (idx: number) => {
  // Common Grid Pattern
  const gridPattern = (
    <defs>
      <pattern id={`grid-exp-${idx}`} width="16" height="16" patternUnits="userSpaceOnUse">
        <path d="M 16 0 L 0 0 0 16" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-[0.08]" />
      </pattern>
    </defs>
  );

  const gridRect = <rect width="100%" height="100%" fill={`url(#grid-exp-${idx})`} className="pointer-events-none" />;

  switch (idx) {
    case 0: // National Drone Grand Prix
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <path d="M 80,130 L 120,130 L 115,145 L 85,145 Z" className="stroke-[#89AACC] opacity-80" />
          <path d="M 100,90 L 100,130" className="stroke-[#89AACC] opacity-80" />
          <circle cx="100" cy="70" r="25" className="stroke-[#4E85BF] opacity-80" strokeWidth="1.5" />
          <path d="M 70,60 Q 60,65 60,75 T 75,80" className="stroke-[#89AACC] opacity-40" />
          <path d="M 130,60 Q 140,65 140,75 T 125,80" className="stroke-[#89AACC] opacity-40" />
          <text x="100" y="73" textAnchor="middle" fontSize="10" className="fill-[#89AACC] font-display font-semibold italic">1st</text>
        </svg>
      );
    case 1: // Amphenol Trainee
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <rect x="60" y="70" width="80" height="50" rx="3" className="stroke-[#89AACC]" />
          {Array.from({ length: 6 }).map((_, i) => (
            <circle key={i} cx={75 + i * 10} cy="95" r="3" className="fill-[#4E85BF] opacity-80" />
          ))}
          <path d="M 40,95 L 60,95" className="stroke-stroke" />
          <path d="M 140,95 L 160,95" className="stroke-stroke" />
          <text x="100" y="60" textAnchor="middle" fontSize="7" className="fill-muted/70 font-mono tracking-widest uppercase">Pinout Block</text>
        </svg>
      );
    case 2: // Cool Maker Solar Systems
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <rect x="55" y="65" width="90" height="70" rx="4" className="stroke-[#4E85BF]" strokeWidth="1.5" />
          <line x1="85" y1="65" x2="85" y2="135" className="stroke-[#4E85BF] opacity-40" />
          <line x1="115" y1="65" x2="115" y2="135" className="stroke-[#4E85BF] opacity-40" />
          <line x1="55" y1="100" x2="145" y2="100" className="stroke-[#4E85BF] opacity-40" />
          <circle cx="100" cy="40" r="10" className="stroke-[#89AACC] opacity-50" strokeDasharray="2 2" />
          <line x1="100" y1="25" x2="100" y2="30" className="stroke-[#89AACC] opacity-40" />
          <line x1="100" y1="50" x2="100" y2="55" className="stroke-[#89AACC] opacity-40" />
        </svg>
      );
    case 3: // DCDC Club Training
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          {Array.from({ length: 5 }).map((_, i) => (
            <path key={i} d={`M 40,${60 + i * 20} Q 100,${50 + (i % 2) * 30} 160,${60 + i * 20}`} className="stroke-[#89AACC] opacity-50" />
          ))}
          <line x1="100" y1="40" x2="100" y2="160" className="stroke-stroke" strokeDasharray="3 3" />
        </svg>
      );
    case 4: // Code Galata Certification
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <rect x="50" y="60" width="100" height="80" rx="6" className="stroke-[#4E85BF]" />
          <path d="M 60,80 L 75,90 L 60,100" className="stroke-[#89AACC] opacity-80" />
          <line x1="80" y1="100" x2="95" y2="100" className="stroke-[#89AACC] opacity-80" strokeWidth="2" />
          <text x="100" y="125" textAnchor="middle" fontSize="6" className="fill-muted/50 font-mono font-bold">INIT_SYNTHESIS</text>
        </svg>
      );
    case 5: // Design Thinking: Primer
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <circle cx="100" cy="80" r="20" className="stroke-[#89AACC] opacity-80" />
          <path d="M 100,100 L 100,115" className="stroke-[#89AACC]" />
          <rect x="85" y="115" width="30" height="15" rx="2" className="stroke-[#4E85BF] opacity-80" />
          <text x="100" y="125" textAnchor="middle" fontSize="6" className="fill-[#4E85BF] font-mono font-bold">CORE</text>
          <path d="M 65,80 A 35,35 0 0,1 135,80" className="stroke-stroke" strokeDasharray="2 2" />
        </svg>
      );
    case 6: // Community Connect NGO
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <circle cx="85" cy="100" r="22" className="stroke-[#89AACC]" />
          <circle cx="115" cy="100" r="22" className="stroke-[#4E85BF]" />
          <circle cx="100" cy="100" r="6" className="fill-[#89AACC] opacity-60" />
        </svg>
      );
    case 7: // IEEE Presenter (ICACRS)
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <rect x="65" y="60" width="70" height="80" rx="3" className="stroke-[#89AACC] fill-stroke/5" />
          <line x1="75" y1="80" x2="125" y2="80" className="stroke-stroke" />
          <line x1="75" y1="95" x2="125" y2="95" className="stroke-stroke" />
          <line x1="75" y1="110" x2="110" y2="110" className="stroke-stroke" />
          <text x="100" y="130" textAnchor="middle" fontSize="7" className="fill-[#89AACC] font-mono font-bold">IEEE</text>
        </svg>
      );
    case 8: // WOPPD 2024 Photonics
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <line x1="40" y1="100" x2="160" y2="100" className="stroke-[#89AACC] opacity-80" strokeWidth="1.5" />
          <path d="M 85,70 L 100,100 L 85,130" className="stroke-[#4E85BF] fill-[#4E85BF]/10" />
          <path d="M 115,70 L 100,100 L 115,130" className="stroke-[#4E85BF] fill-[#4E85BF]/10" />
          <circle cx="100" cy="100" r="4" className="fill-red-500 animate-pulse" />
        </svg>
      );
    case 9: // Oracle SQL Foundations
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <path d="M 70,70 A 30,10 0 0,0 130,70 M 70,70 L 70,100 A 30,10 0 0,0 130,100 L 130,70" className="stroke-[#89AACC] fill-[#89AACC]/5" />
          <path d="M 70,100 L 70,130 A 30,10 0 0,0 130,130 L 130,100" className="stroke-[#89AACC] fill-[#89AACC]/5" />
          <ellipse cx="100" cy="70" rx="30" ry="10" className="stroke-[#89AACC] fill-[#89AACC]/10" />
          <text x="100" y="105" textAnchor="middle" fontSize="6" className="fill-muted/70 font-mono">SQL</text>
        </svg>
      );
    case 10: // MongoDB Atlas Admin
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <circle cx="100" cy="65" r="12" className="stroke-[#4E85BF]" />
          <circle cx="70" cy="120" r="12" className="stroke-stroke" />
          <circle cx="130" cy="120" r="12" className="stroke-stroke" />
          <line x1="100" y1="77" x2="70" y2="108" className="stroke-stroke" />
          <line x1="100" y1="77" x2="130" y2="108" className="stroke-stroke" />
          <line x1="70" y1="120" x2="130" y2="120" className="stroke-stroke" strokeDasharray="2 2" />
        </svg>
      );
    default: // Verilog HDL Hardware Design
      return (
        <svg className="w-full h-full text-muted/20 hover:text-muted/40 transition-colors duration-500" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.2">
          {gridPattern}
          {gridRect}
          <path d="M 60,70 L 90,70 Q 110,70 120,85 Q 110,100 90,100 L 60,100 Z" className="stroke-[#89AACC] fill-[#89AACC]/5" />
          <path d="M 60,70 Q 75,85 60,100" className="stroke-[#89AACC]" />
          <circle cx="125" cy="85" r="4" className="stroke-[#89AACC]" fill="none" />
          <line x1="45" y1="80" x2="65" y2="80" className="stroke-stroke" />
          <line x1="45" y1="90" x2="65" y2="90" className="stroke-stroke" />
          <line x1="130" y1="85" x2="155" y2="85" className="stroke-[#89AACC]" />
          <text x="90" y="88" textAnchor="middle" fontSize="8" className="fill-[#89AACC] font-mono">NOR</text>
        </svg>
      );
  }
};

export const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const colLeftRef = useRef<HTMLDivElement | null>(null);
  const colRightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Media query to check if screen is desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (!containerRef.current || !pinRef.current || !colLeftRef.current || !colRightRef.current) return;

      // Pin the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinRef.current,
        pinSpacing: false,
      });

      // Left column scrolls down, Right column scrolls up (parallax)
      gsap.fromTo(
        colLeftRef.current,
        { y: 0 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        colRightRef.current,
        { y: 80 },
        {
          y: -220,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const handleCardClick = (link: string) => {
    if (link) {
      const url = link.startsWith("http") || link.startsWith("/")
        ? link
        : `${import.meta.env.BASE_URL}${link}`;
      window.open(url, "_blank");
    }
  };

  return (
    <section
      id="explorations"
      ref={containerRef}
      className="relative min-h-0 md:min-h-[220vh] bg-bg py-16 md:py-32 select-none"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex flex-col md:flex-row relative">
        
        {/* Left Layer: Pinned Text Content */}
        <div ref={pinRef} className="w-full md:w-5/12 md:h-[60vh] flex flex-col justify-center mb-12 md:mb-0 z-10">
          <div className="max-w-md sticky top-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                Explorations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
              Visual <span className="italic font-normal">playground</span>
            </h2>
            <p className="text-sm md:text-base text-muted/80 leading-relaxed mb-8">
              A gallery of technical domains, web architecture patterns, and software development methodologies spanning React.js frontend engineering, Java Spring Boot microservices, and Python data science pipelines.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-primary hover:text-muted transition-colors duration-200"
            >
              Check GitHub Repositories <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* Right Layer: Parallax Columns */}
        <div className="w-full md:w-7/12 flex gap-6 md:gap-12 relative md:mt-24">
          
          {/* Column Left (items 0, 2, 4) */}
          <div ref={colLeftRef} className="w-1/2 flex flex-col gap-6 md:gap-12">
            {ITEMS.filter((_, i) => i % 2 === 0).map((item, idx) => {
              const originalIdx = ITEMS.indexOf(item);
              return (
                <div
                  key={idx}
                  onClick={() => handleCardClick(item.link)}
                  className="exploration-card group bg-surface border border-stroke rounded-2xl md:rounded-3xl overflow-hidden aspect-square flex flex-col justify-end p-4 md:p-6 cursor-pointer relative"
                >
                  {/* Schematic Blueprint Background */}
                  <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#070707]">
                    {renderExplorationVector(originalIdx)}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10" />
                  </div>
                
                {/* Content */}
                <div className="relative z-20 flex flex-col">
                  <span className="text-[9px] font-mono text-[#89AACC] uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted/80 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Hover overlay link */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:bg-black/80 transition-all">
                  <ExternalLink size={12} />
                </div>
              </div>
            );
          })}
          </div>

          {/* Column Right (items 1, 3, 5) */}
          <div ref={colRightRef} className="w-1/2 flex flex-col gap-6 md:gap-12">
            {ITEMS.filter((_, i) => i % 2 !== 0).map((item, idx) => {
              const originalIdx = ITEMS.indexOf(item);
              return (
                <div
                  key={idx}
                  onClick={() => handleCardClick(item.link)}
                  className="exploration-card group bg-surface border border-stroke rounded-2xl md:rounded-3xl overflow-hidden aspect-square flex flex-col justify-end p-4 md:p-6 cursor-pointer relative"
                >
                  {/* Schematic Blueprint Background */}
                  <div className="absolute inset-0 z-0 flex items-center justify-center bg-[#070707]">
                    {renderExplorationVector(originalIdx)}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10" />
                  </div>
                
                {/* Content */}
                <div className="relative z-20 flex flex-col">
                  <span className="text-[9px] font-mono text-[#89AACC] uppercase tracking-wider mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-base md:text-lg font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted/80 line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Hover overlay link */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-muted group-hover:text-text-primary group-hover:bg-black/80 transition-all">
                  <ExternalLink size={12} />
                </div>
              </div>
            );
          })}
          </div>
          
        </div>
      </div>
    </section>
  );
};
