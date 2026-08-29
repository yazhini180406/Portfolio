import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface NavbarProps {
  resumeUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ resumeUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section tracker
      const sections = ["home", "work", "experience", "journal", "explorations", "education", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
    >
      <div
        className={`inline-flex items-center rounded-full border border-white/5 bg-surface/80 px-2 py-1.5 md:py-2 max-w-[calc(100vw-1.5rem)] overflow-x-auto backdrop-blur-xl transition-all duration-300 scrollbar-none ${
          isScrolled ? "shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] border-white/10 bg-[#0a0a0a]/90" : ""
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="group relative flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110"
        >
          {/* Accent Ring */}
          <div className="absolute inset-0 rounded-full accent-gradient transition-transform duration-700 group-hover:rotate-180" />
          {/* Inner Circle */}
          <div className="absolute inset-[1px] bg-bg rounded-full flex items-center justify-center transition-colors">
            <span className="font-display italic text-[12px] font-bold text-text-primary group-hover:text-white mt-[1px] tracking-tight">
              YA
            </span>
          </div>
        </a>

        {/* Divider */}
        <div className="w-px h-4 bg-stroke mx-2 sm:mx-3 flex-shrink-0" />

        {/* Links */}
        <nav className="flex items-center gap-0.5 sm:gap-2 flex-shrink-0">
          {[
            { label: "Home", id: "home" },
            { label: "Work", id: "work" },
            { label: "Experience", id: "experience" },
            { label: "Explorations", id: "explorations" },
            { label: "Education", id: "education" },
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`text-[11px] sm:text-xs font-medium tracking-wide rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "text-text-primary bg-stroke/60 font-semibold"
                    : "text-muted hover:text-text-primary hover:bg-stroke/35"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] sm:text-xs font-medium tracking-wide rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 whitespace-nowrap text-muted hover:text-text-primary hover:bg-stroke/35 transition-all duration-200"
          >
            Resume
          </a>
        </nav>

        {/* Divider */}
        <div className="w-px h-4 bg-stroke mx-2 sm:mx-3 flex-shrink-0" />

        {/* "Say hi" Button */}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="group relative flex-shrink-0 inline-flex items-center justify-center text-[11px] sm:text-xs font-semibold rounded-full overflow-hidden p-[1px]"
        >
          {/* Gradient Hover Ring */}
          <span className="absolute inset-0 rounded-full bg-stroke group-hover:accent-gradient transition-all duration-300" />
          {/* Inner Content */}
          <span className="relative flex items-center gap-1 bg-surface px-3 py-1.5 rounded-full transition-colors duration-200 group-hover:bg-[#121212] text-text-primary">
            Say hi <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </span>
        </a>
      </div>
    </motion.header>
  );
};
