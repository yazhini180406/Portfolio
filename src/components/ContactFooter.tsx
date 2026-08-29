import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { Mail, Phone, MapPin, Globe, ArrowRight, Loader } from "lucide-react";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
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

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


export const ContactFooter: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  
  const [formStatus, setFormStatus] = useState<{ type: "success" | "error" | null; msg: string }>({
    type: null,
    msg: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hlsSource = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

  // Contact info
  const PROFILE = {
    email: "yazhini1018@gmail.com",
    phone: "+91 8825676853",
    location: "Coimbatore, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com",
    github: "https://github.com/yazhini180406",
    instagram: "https://www.instagram.com",
  };

  // Video Background (Flipped)
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
        video.play().catch(() => {});
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSource;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) hls.destroy();
    };
  }, []);

  // GSAP Marquee
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Create continuous loop scrolling
    const width = marquee.scrollWidth / 2;
    
    const tween = gsap.to(marquee, {
      x: -width,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, msg: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Anti-spam check for honeypot
    if (data._gotcha) {
      setIsSubmitting(false);
      return;
    }
    delete data._gotcha;
    delete data._honeypot;

    try {
      const res = await fetch("https://formspree.io/f/mljedwqe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        setFormStatus({
          type: "success",
          msg: "✓ Thanks! Your message was sent successfully.",
        });
      } else {
        const errorData = await res.json().catch(() => null);
        let errorMsg = "Sorry, there was a problem submitting your message.";
        if (errorData && errorData.errors && Array.isArray(errorData.errors)) {
          errorMsg = errorData.errors.map((item: any) => item.message).join(", ");
        } else if (errorData && errorData.error) {
          errorMsg = errorData.error;
        }
        setFormStatus({
          type: "error",
          msg: errorMsg,
        });
      }
    } catch (err) {
      setFormStatus({
        type: "error",
        msg: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-bg pt-20 pb-8 overflow-hidden select-none border-t border-stroke/20"
    >
      {/* Background Video (Flipped vertically) */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1]"
          muted
          loop
          playsInline
          autoPlay
        />
        <div className="absolute inset-0 bg-black/75 z-10" />
      </div>

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col justify-between h-full">
        
        {/* GSAP Continuous Marquee */}
        <div className="w-full overflow-hidden border-y border-stroke/40 py-6 mb-16 relative">
          <div ref={marqueeRef} className="flex whitespace-nowrap text-3xl md:text-5xl lg:text-6xl font-display font-medium uppercase tracking-[0.2em] text-text-primary/10">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="inline-block mr-12 select-none">
                BUILDING THE FUTURE • PROTOTYPING THE NEXT •{" "}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start mb-20">
          
          {/* Contact Details (col-5) */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em] font-semibold">
                  Get in touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-6 tracking-tight leading-none">
                Let's make something <span className="italic font-normal">together</span>
              </h2>
              <p className="text-sm text-muted/80 leading-relaxed mb-8 max-w-sm">
                Interested in full-stack web development, React.js UI design, or Spring Boot REST API projects? Reach out to collaborate!
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="group relative inline-flex items-center gap-3 p-4 bg-surface/30 hover:bg-surface/80 border border-stroke/50 rounded-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-2.5 rounded-full bg-stroke/60 border border-white/5 text-muted group-hover:text-text-primary group-hover:scale-105 transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted font-mono uppercase tracking-wider">Email Me</div>
                  <div className="text-xs sm:text-sm font-semibold text-text-primary">{PROFILE.email}</div>
                </div>
                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>

              <a
                href={`tel:${PROFILE.phone}`}
                className="group relative inline-flex items-center gap-3 p-4 bg-surface/30 hover:bg-surface/80 border border-stroke/50 rounded-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-2.5 rounded-full bg-stroke/60 border border-white/5 text-muted group-hover:text-text-primary group-hover:scale-105 transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted font-mono uppercase tracking-wider">Call Me</div>
                  <div className="text-xs sm:text-sm font-semibold text-text-primary">{PROFILE.phone}</div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>

              <div className="inline-flex items-center gap-3 p-4 bg-surface/30 border border-stroke/50 rounded-2xl">
                <div className="p-2.5 rounded-full bg-stroke/60 border border-white/5 text-muted">
                  <MapPin size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted font-mono uppercase tracking-wider">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-text-primary">{PROFILE.location}</div>
                </div>
              </div>

              <div className="inline-flex items-start gap-3 p-4 bg-surface/30 border border-stroke/50 rounded-2xl">
                <div className="p-2.5 rounded-full bg-stroke/60 border border-white/5 text-muted mt-0.5">
                  <Globe size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-muted font-mono uppercase tracking-wider">Languages</div>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    <span className="text-[9px] font-mono text-text-primary/70 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">Tamil (Native)</span>
                    <span className="text-[9px] font-mono text-text-primary/70 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">English (Fluent)</span>
                    <span className="text-[9px] font-mono text-text-primary/70 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">Hindi (Intermediate)</span>
                    <span className="text-[9px] font-mono text-text-primary/70 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">Japanese (Beginner)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form (col-7) */}
          <div className="md:col-span-7 bg-surface/30 border border-stroke/80 p-6 md:p-8 rounded-3xl backdrop-blur-md">
            <form
              action="https://formspree.io/f/mljedwqe"
              method="POST"
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-mono font-medium text-muted uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="e.g. inihzaY"
                  required
                  className="w-full bg-surface border border-stroke rounded-xl px-4 py-3 text-xs md:text-sm text-text-primary placeholder:text-muted/40 focus:outline-none focus:border-[#89AACC] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-mono font-medium text-muted uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="e.g. inihzay0918@gmail.com"
                  required
                  className="w-full bg-surface border border-stroke rounded-xl px-4 py-3 text-xs md:text-sm text-text-primary placeholder:text-muted/40 focus:outline-none focus:border-[#89AACC] transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono font-medium text-muted uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="e.g. Hi! What's up? Let's collaborate on a project and work together..."
                  required
                  className="w-full bg-surface border border-stroke rounded-xl px-4 py-3 text-xs md:text-sm text-text-primary placeholder:text-muted/40 focus:outline-none focus:border-[#89AACC] transition-colors resize-none"
                />
              </div>

              {/* Honeypot Spam Protection */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full relative inline-flex items-center justify-center rounded-xl py-3.5 bg-text-primary text-bg font-semibold text-xs md:text-sm tracking-wider uppercase transition-transform duration-200 active:scale-95 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Loader className="w-4 h-4 animate-spin text-bg" />
                ) : (
                  <span className="flex items-center gap-1.5">
                    Send Message <ArrowRight size={14} className="stroke-[2.5]" />
                  </span>
                )}
              </button>

              {formStatus.type && (
                <div
                  className={`text-xs md:text-sm text-center py-2 rounded-lg ${
                    formStatus.type === "success" ? "text-green-400 bg-green-950/20" : "text-red-400 bg-red-950/20"
                  }`}
                >
                  {formStatus.msg}
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Footer Bar */}
        <div className="border-t border-stroke/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Status Dot */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-muted/80 font-medium tracking-wide">
              Available for projects & internships
            </span>
          </div>

          {/* Social Directory */}
          <div className="flex gap-4">
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-[#4E85BF] transition-colors duration-200"
              title="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-white transition-colors duration-200"
              title="GitHub Repositories"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={PROFILE.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-muted hover:text-[#E1306C] transition-colors duration-200"
              title="Instagram Profile"
            >
              <InstagramIcon size={18} />
            </a>
          </div>

          {/* Copyright */}
          <span className="text-xs text-muted/60 font-mono">
            © {new Date().getFullYear()} Yazhini R • Coimbatore
          </span>
        </div>
      </div>
    </section>
  );
};
