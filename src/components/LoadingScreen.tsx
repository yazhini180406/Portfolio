import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const WORDS = ["Architect", "Compile", "Debug", "Refactor", "Deploy"];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const DURATION = 3000; // ms

  useEffect(() => {
    // Rotating words cycle every 600ms (5 terms = 3000ms)
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 600);

    // High performance count up using requestAnimationFrame
    const updateCount = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        clearInterval(wordInterval);
        setTimeout(() => {
          onComplete();
        }, 400); // 400ms delay on complete
      }
    };

    requestAnimationFrame(updateCount);

    return () => {
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col justify-between p-8 md:p-16 select-none"
    >
      {/* Top section */}
      <div className="flex justify-between items-start">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs text-muted uppercase tracking-[0.3em] font-medium"
        >
          YAZHINI PORTFOLIO '26
        </motion.span>
        <span className="text-xs text-muted/40 uppercase tracking-widest font-mono">
          SOFTWARE IDE ENGINE v1.0
        </span>
      </div>

      {/* Center rotating words */}
      <div className="flex justify-center items-center h-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIndex}
            initial={{ y: 30, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 0.8, filter: "blur(0px)" }}
            exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.45, ease: [0.215, 0.61, 0.355, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary text-center tracking-tight"
          >
            {WORDS[wordIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <span className="text-xs text-muted/60 max-w-xs leading-relaxed font-mono hidden md:block">
            Initializing IDE runtime environment...<br />
            Compiling React.js & Spring Boot modules...
          </span>
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary leading-none tracking-tighter tabular-nums select-none">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Progress bar */}
        <div className="relative w-full h-[3px] bg-stroke/30 rounded-full overflow-hidden">
          <motion.div
            style={{ scaleX: count / 100, transformOrigin: "left" }}
            className="absolute inset-0 accent-gradient"
            layoutId="loading-bar"
            transition={{ type: "tween", ease: "linear" }}
          />
          <div
            style={{
              width: `${count}%`,
              boxShadow: "0 0 12px rgba(137, 170, 204, 0.5)",
            }}
            className="h-full accent-gradient transition-all duration-75"
          />
        </div>
      </div>
    </motion.div>
  );
};
