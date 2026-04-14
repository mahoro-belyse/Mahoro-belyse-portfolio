import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ReactElement } from "react";
import HERO_IMAGE from "../../assets/belyse_Photo.jpeg";
import CV from "../../assets/Belyse_Cv.pdf";

const ROLES: string[] = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Creative Technologist",
  "Problem Solver",
];

const tickerWords: string[] = [
  "Full Stack Development",
  "•",
  "React & Node.js",
  "•",
  "Rwanda 🇷🇼",
  "•",
  "API Architecture",
  "•",
  "UI/UX Design",
  "•",
  "Python & Django",
  "•",
  "Full Stack Development",
  "•",
  "React & Node.js",
  "•",
  "Rwanda 🇷🇼",
  "•",
  "API Architecture",
  "•",
  "UI/UX Design",
  "•",
  "Python & Django",
  "•",
];

export default function HeroSection(): ReactElement {
  const [roleIndex, setRoleIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  const scrollToWork = (): void => {
    navigate("/portfolio");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 lg:pt-0"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,hsl(var(--primary)/0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,hsl(var(--secondary)/0.08),transparent_60%)]" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl hidden md:block animate-pulse" />
      <div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full bg-secondary/5 blur-3xl hidden md:block"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span className="font-mono text-xs tracking-widest text-primary uppercase">
            Kigali, Rwanda 🇷🇼
          </span>
          <Sparkles className="w-3.5 h-3.5 text-primary" />
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          className="relative mb-10"
        >
          <motion.div
            className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/25"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute -inset-2 rounded-full bg-primary/15 blur-md"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl shadow-primary/25">
            <img
              src={HERO_IMAGE}
              alt="Portrait of Uwase Mahoro Belyse, Full Stack Developer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Status */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="absolute -bottom-2 -right-2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border shadow-lg"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[10px] tracking-wide text-foreground">
              Available
            </span>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mb-3">
            Creative & Full Stack
          </p>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground">
            Hi, I'm{" "}
            <span className="text-primary font-semibold italic">
              Uwase Mahoro
            </span>
            <br />
            <span className="font-semibold italic">Belyse</span>
          </h1>
        </motion.div>

        {/* Role */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 h-10 flex items-center justify-center"
        >
          <motion.h2
            key={roleIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-xl md:text-2xl lg:text-3xl font-light italic text-muted-foreground"
          >
            I'm a{" "}
            <span className="text-primary font-medium">{ROLES[roleIndex]}</span>
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-base md:text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed"
        >
          I design and build scalable web applications—from intuitive,
          high-quality frontends to robust, reliable backends—with a strong
          focus on clean code and user-centered design.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap gap-4 mt-10 justify-center"
        >
          <Button
            onClick={scrollToWork}
            className="group rounded-full px-8 py-6"
          >
            View My Work
            <ArrowDown className="w-4 h-4 ml-2" />
          </Button>

          <Button variant="outline" className="rounded-full px-8 py-6">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Download CV
              <Download className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="grid grid-cols-3 gap-6 mt-14 w-full max-w-sm"
        >
          {[
            ["2+", "Years Exp."],
            ["20+", "Projects"],
            ["100%", "Passion"],
          ].map(([num, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="font-heading text-3xl font-semibold text-primary">
                {num}
              </span>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-3 border-t border-border/30 backdrop-blur-sm bg-background/30">
        <div className="animate-ticker flex whitespace-nowrap">
          {tickerWords.map((word, i) => (
            <span
              key={i}
              className={`mx-5 font-mono text-xs tracking-widest uppercase ${
                word === "•"
                  ? "text-primary text-lg"
                  : "text-muted-foreground/50"
              }`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
