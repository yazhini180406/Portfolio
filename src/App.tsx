import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SelectedWorks } from "./components/SelectedWorks";
import { Explorations } from "./components/Explorations";
import { Stats } from "./components/Stats";
import { WorkExperience, AcademicEducation } from "./components/ExperienceEducation";
import { ContactFooter } from "./components/ContactFooter";
import type { Project } from "./types";

const PROFILE = {
  name: "Yazhini R",
  summary:
    "Computer Science undergraduate specializing in full-stack web development with React.js, Java, Python, and Spring Boot. Experienced in engineering modular UI architectures, integrating RESTful APIs, and developing scalable, data-driven applications.",
  roles: [
    "Full-Stack Software Engineer",
    "React JS Developer",
    "Spring Boot & Java Developer",
    "Data Science Enthusiast"
  ],
  resume: "#",
  badges: ["React.js", "Java", "Spring Boot", "Python", "TypeScript", "REST APIs", "SQLite", "Tailwind CSS"],
};

const PROJECTS: Project[] = [
  {
    title: "AI Tutor Platform",
    desc: "Built an AI-powered tutoring platform that analyzes uploaded PDFs to deliver personalized lessons through a virtual instructor with real-time doubt resolution.",
    tags: ["Future Project", "Full Stack", "AI Integration", "Python"],
    link: "https://github.com/yazhini180406/AI-Tutor-Platform",
    github: "https://github.com/yazhini180406/AI-Tutor-Platform",
    image: import.meta.env.BASE_URL + "images/logistics_drone.png",
  },
  {
    title: "Skill Tracker App",
    desc: "Developed an employee management platform to track attendance records, manage skills, and monitor proficiency with structured data dashboards.",
    tags: ["Future Project", "React", "Spring Boot", "REST APIs"],
    link: "https://github.com/yazhini180406/SkillTracker",
    github: "https://github.com/yazhini180406/SkillTracker",
    image: import.meta.env.BASE_URL + "images/battery_monitoring.png",
  },
  {
    title: "EliteShop – E-Commerce Platform",
    desc: "Engineered a responsive e-commerce platform with dynamic catalog browsing, cart management, Context API global state, and checkout flow.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Context API"],
    link: "https://github.com/yazhini180406/Elite-Shop",
    github: "https://github.com/yazhini180406/Elite-Shop",
    image: import.meta.env.BASE_URL + "images/elite_shop.png",
  },
  {
    title: "ExpanseIQ – Predictive Expense Analytics",
    desc: "Created a financial analytics platform integrating machine learning models to forecast monthly expenditures and automated budget categorization.",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Analytics"],
    link: "https://github.com/yazhini180406/ExpanseIQ",
    github: "https://github.com/yazhini180406/ExpanseIQ",
    image: import.meta.env.BASE_URL + "images/expanse_iq.png",
  },
  {
    title: "Spendify – Financial Tracker",
    desc: "Built a Streamlit personal finance app to monitor budgets and track expenses with SQLite persistence and Plotly visual reports.",
    tags: ["Python", "Streamlit", "SQLite", "Plotly"],
    link: "https://github.com/yazhini180406/Spendify",
    github: "https://github.com/yazhini180406/Spendify",
    image: import.meta.env.BASE_URL + "images/gas_monitoring.png",
  },
  {
    title: "ComplaintHub – Centralized Service Desk",
    desc: "Architected a role-based service resolution web app utilizing React Context API for persistent session handling and ticket management.",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://github.com/yazhini180406/ComplaintHub",
    github: "https://github.com/yazhini180406/ComplaintHub",
    image: import.meta.env.BASE_URL + "images/complaint_portal.png",
  },
];

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-bg text-text-primary selection:bg-[#89AACC]/30 selection:text-white">
          {/* Global Top Progress Indicator */}
          <div className="fixed top-0 left-0 right-0 h-[2px] bg-stroke/30 z-[100]">
            <div className="h-full accent-gradient animate-scroll-down w-full origin-left" style={{ display: 'none' }} />
          </div>

          <Navbar resumeUrl={PROFILE.resume} />
          
          <main>
            <Hero
              name={PROFILE.name}
              roles={PROFILE.roles}
              summary={PROFILE.summary}
              badges={PROFILE.badges}
            />
            
            <SelectedWorks projects={PROJECTS} />
            
            <WorkExperience />
            
            <Explorations />
            
            <AcademicEducation />
            
            <Stats />
          </main>

          <ContactFooter />
        </div>
      )}
    </>
  );
}

export default App;
