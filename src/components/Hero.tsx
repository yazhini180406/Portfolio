import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";

interface HeroProps {
  name: string;
  roles: string[];
  summary: string;
  badges: string[];
}

export const Hero: React.FC<HeroProps> = ({ name, roles, summary, badges }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Mux HLS source
  const hlsSource = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(hlsSource);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Auto-play was prevented (safari/chrome policy)
        });
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Native support (Safari)
      video.src = hlsSource;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // Roles cycling loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles]);

  // GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        0.1
      );

      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.0, ease: "power3.out", stagger: 0.15 },
        0.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center bg-bg overflow-hidden select-none"
    >
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          muted
          loop
          playsInline
          autoPlay
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-30 container max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-12 md:mt-20">
        {/* Eyebrow */}
        <p className="blur-in text-[10px] sm:text-xs font-semibold text-muted uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 md:mb-8">
          FULL-STACK & REACT DEVELOPER PORTFOLIO '26
        </p>

        {/* Name */}
        <h1 className="name-reveal text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-none tracking-tight text-text-primary mb-4 md:mb-8 font-semibold select-none">
          {name}
        </h1>

        {/* Tagline / Roles Loop */}
        <div className="blur-in h-10 md:h-12 flex items-center justify-center mb-6 overflow-hidden">
          <span className="text-base sm:text-xl md:text-2xl text-muted font-normal tracking-wide">
            A{" "}
            <span
              key={roleIndex}
              className="font-display italic text-text-primary animate-role-fade-in inline-block font-semibold px-1"
            >
              {roles[roleIndex]}
            </span>{" "}
            based in Coimbatore.
          </span>
        </div>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted/80 max-w-lg leading-relaxed mb-10 md:mb-12">
          {summary}
        </p>

        {/* CTA Buttons */}
        <div className="blur-in flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("work");
            }}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-semibold px-8 py-4 bg-text-primary text-bg transition-all duration-300 hover:scale-105 hover:bg-bg hover:text-text-primary overflow-hidden"
          >
            {/* Gradient border on hover */}
            <span className="absolute inset-0 rounded-full p-[1px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            See Works
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-semibold px-8 py-4 border-2 border-stroke bg-bg text-text-primary transition-all duration-300 hover:scale-105 hover:border-transparent overflow-hidden"
          >
            {/* Gradient border on hover */}
            <span className="absolute inset-0 rounded-full p-[2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="relative z-10 flex items-center gap-1">
              Reach out <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
            </span>
          </a>
        </div>

        {/* Tech Badges */}
        <div className="blur-in flex flex-wrap justify-center gap-2 max-w-2xl">
          {badges.map((badge, idx) => (
            <span
              key={idx}
              className="text-[10px] md:text-xs font-mono font-medium text-text-primary/70 bg-surface/50 border border-stroke rounded-full px-3 py-1 backdrop-blur-md"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
        <span className="text-[10px] text-muted/60 tracking-[0.25em] uppercase font-semibold">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-stroke/60 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 right-0 h-4 bg-text-primary rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
