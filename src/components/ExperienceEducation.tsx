import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  period: string;
  role: string;
  where: string;
  notes?: string;
}

const EXPERIENCE: TimelineItem[] = [
  {
    period: "May 2026 – Jun 2026",
    role: "React JS Developer Intern",
    where: "Nutz Technovation Pvt. Ltd. • Erode, India",
    notes: "Developed modular React.js web application features with responsive UI design, state management, and real-time REST API integration.",
  },
  {
    period: "May 2025 – Jun 2025",
    role: "Data Science Intern",
    where: "Prochant India Pvt. Ltd. • Chennai, India",
    notes: "Executed healthcare data workflow extraction, automated data transformation scripts in Python, and produced analytical summaries.",
  },
];

const EDUCATION: TimelineItem[] = [
  {
    period: "Aug 2023 – May 2027",
    role: "Bachelor of Engineering – Computer Science & Engineering",
    where: "Sri Krishna College Of Engineering And Technology, Coimbatore",
    notes: "Specialization in Computer Science & Engineering. CGPA: 7.4 / 10",
  },
];

export const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="bg-bg py-20 md:py-28 select-none border-t border-stroke/20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
              Professional Timeline
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
            Work <span className="italic font-normal">experience</span>
          </h2>
          <p className="text-sm md:text-base text-muted/80 leading-relaxed max-w-xl">
            A chronological timeline of my software engineering internships and technical roles.
          </p>
        </motion.div>

        <div className="relative pl-8 border-l border-stroke/40 flex flex-col gap-12">
          {EXPERIENCE.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col items-start"
            >
              <div className="absolute left-[-38px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#89AACC] border-2 border-bg z-10 shadow-[0_0_8px_rgba(137,170,204,0.6)]" />
              <span className="text-xs font-mono text-[#89AACC] font-semibold mb-1">
                {item.period}
              </span>
              <h4 className="text-lg font-semibold text-text-primary leading-snug">
                {item.role}
              </h4>
              <span className="text-sm text-muted/80 font-medium mb-3">
                {item.where}
              </span>
              {item.notes && (
                <p className="text-xs md:text-sm text-muted/60 leading-relaxed max-w-2xl">
                  {item.notes}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const AcademicEducation: React.FC = () => {
  return (
    <section id="education" className="bg-bg py-20 md:py-28 select-none border-t border-stroke/20">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
              Academic Background
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 font-normal tracking-tight">
            Academic <span className="italic font-normal">education</span>
          </h2>
          <p className="text-sm md:text-base text-muted/80 leading-relaxed max-w-xl">
            My educational background and academic credentials.
          </p>
        </motion.div>

        <div className="relative pl-8 border-l border-stroke/40 flex flex-col gap-12">
          {EDUCATION.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col items-start"
            >
              <div className="absolute left-[-38px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#4E85BF] border-2 border-bg z-10 shadow-[0_0_8px_rgba(78,133,191,0.6)]" />
              <span className="text-xs font-mono text-[#4E85BF] font-semibold mb-1">
                {item.period}
              </span>
              <h4 className="text-lg font-semibold text-text-primary leading-snug">
                {item.role}
              </h4>
              <span className="text-sm text-muted/80 font-medium mb-3">
                {item.where}
              </span>
              {item.notes && (
                <p className="text-xs md:text-sm text-muted/60 leading-relaxed max-w-2xl">
                  {item.notes}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
