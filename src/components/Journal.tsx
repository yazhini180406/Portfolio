import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

interface JournalEntry {
  title: string;
  category: string;
  date: string;
  link: string;
  icon: React.ReactNode;
  description: string;
}

export const Journal: React.FC = () => {
  const entries: JournalEntry[] = [
    {
      title: "Full-Stack Web Development & APIs",
      category: "Certification",
      date: "2026",
      link: "#",
      icon: <Award className="w-5 h-5 text-[#89AACC]" />,
      description: "Specialized training in building responsive React applications integrated with Java Spring Boot backend REST APIs.",
    },
    {
      title: "Data Science & Python Analytics",
      category: "Internship Credential",
      date: "2025",
      link: "#",
      icon: <BookOpen className="w-5 h-5 text-[#4E85BF]" />,
      description: "Executed data transformation pipelines and predictive analytics for healthcare datasets at Prochant India.",
    },
  ];

  return (
    <section id="journal" className="bg-bg py-20 md:py-28 select-none border-t border-stroke/20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                Publications & Milestones
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
              Academic <span className="italic font-normal">highlights</span>
            </h2>
            <p className="text-sm md:text-base text-muted/80 leading-relaxed max-w-xl">
              Research publications, national award winnings, and specialized engineering training.
            </p>
          </div>
        </motion.div>

        {/* List of Entries */}
        <div className="flex flex-col gap-4">
          {entries.map((entry, idx) => (
            <motion.a
              key={idx}
              href={entry.link.startsWith("http") || entry.link.startsWith("/") ? entry.link : `${import.meta.env.BASE_URL}${entry.link}`}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 md:p-8 rounded-[24px] md:rounded-full bg-surface/30 hover:bg-surface/80 border border-stroke transition-all duration-300 group"
            >
              {/* Icon / Category Ring */}
              <div className="flex items-center gap-4 min-w-[150px]">
                <div className="w-10 h-10 rounded-full bg-stroke/60 flex items-center justify-center border border-white/5 transition-transform duration-300 group-hover:scale-110">
                  {entry.icon}
                </div>
                <span className="text-xs font-mono font-medium text-[#89AACC] uppercase tracking-wider">
                  {entry.category}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-base md:text-lg font-semibold text-text-primary group-hover:text-white transition-colors duration-200 mb-1">
                  {entry.title}
                </h3>
                <p className="text-xs md:text-sm text-muted/70 group-hover:text-muted transition-colors duration-200">
                  {entry.description}
                </p>
              </div>

              {/* Date & Link Icon */}
              <div className="flex items-center justify-between w-full md:w-auto gap-6 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-stroke/60">
                <span className="text-xs font-mono text-muted/60">
                  {entry.date}
                </span>
                <div className="w-8 h-8 rounded-full bg-stroke flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:accent-gradient transition-all duration-300">
                  <span className="text-text-primary group-hover:text-bg font-bold transition-colors">↗</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
