import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/portfolio/Navbar";
import { useTheme } from "../lib/ThemeContext";
import { ExternalLink, X, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { ReactElement } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MKU from "../assets/project/MKU.png";
import greenfield from "../assets/project/greenfld.png";
import weather from "../assets/project/weather app.png";
import kitchen from "../assets/project/kitchenSync.png";
import BBB from "../assets/project/BBB1.png";
import rse from "../assets/project/RSE1.png";
import stripe from "../assets/project/stripe.png";
import collab from "../assets/project/teamcollab.png";
import gov from "../assets/project/goverment.png";
import me from "../assets/project/portfolio.png";

// Types
type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "Full Stack" | "Frontend" | "Backend";
  github?: string;
  demo?: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
  onCookingClick: () => void;
};

// Data
const projects: Project[] = [
  {
    title: "MKU Graduands Clearance Management System",
    description:
      "This system helps graduating students easily request and track their clearance process across university departments.",
    image: MKU,
    tags: ["HTML/CSS", "Express", "MongoDB", "Nodemailer"],
    category: "Full Stack",
    github:
      "https://github.com/mahoro-belyse/MKU-Graduands-Clearance-Management-System.git",
    demo: undefined,
  },
  {
    title: "Weather App",
    description:
      "A weather app that displays real-time weather conditions and a 7-day forecast for any city, helping users plan their week with accurate temperature.",
    image: weather,
    tags: ["React", "Javascript", "HTML/CSS"],
    category: "Frontend",
    github: "https://github.com/mahoro-belyse/weather_react1",
    demo: "https://fascinating-figolla-901afe.netlify.app/",
  },
  {
    title: "KitchenSync",
    description:
      "Kitchen management platform. It helps home cooks manage their pantry, build a personal recipe, plan weekly meals, and auto-generate smart grocery lists.",
    image: kitchen,
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Shadcn",
      "Framer Motion",
    ],
    category: "Full Stack",
    github: "https://github.com/mahoro-belyse/KitchenSync.git",
    demo: "https://kitchen-sync.netlify.app/",
  },
  {
    title: "Becky Beauty Boutique",
    description:
      "An e-commerce platform built with the MERN stack for makeup and beauty lovers. Offers a sleek, responsive UI with security.",
    image: BBB,
    tags: ["React", "JavaScript", "CSS"],
    category: "Full Stack",
    github: "https://github.com/mahoro-belyse/becky_beauty_botique.git",
    demo: undefined,
  },
  {
    title: "RSE KYC Portal",
    description:
      "A comprehensive Know Your Customer (KYC) web application for the Rwanda Stock Exchange (RSE) investment platform.",
    image: rse,
    tags: ["HTML/CSS", "JavaScript"],
    category: "Frontend",
    github: "https://github.com/renemahirwe14/rse_kyc_portal.git",
    demo: undefined,
  },
  {
    title: "Stripe Clone",
    description:
      "A pixel-perfect clone of the Stripe landing page with smooth animations and responsive layout.",
    image: stripe,
    tags: ["React", "TypeScript", "Tailwind", "Shadcn", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/mahoro-belyse/stripe-clone.git",
    demo: "https://stripe-cloning.netlify.app/",
  },
  {
    title: "Greenfield Application Form",
    description: "A web application for managing university applications.",
    image: greenfield,
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "Shadcn",
      "Framer Motion",
      "Local Storage",
    ],
    category: "Frontend",
    github: "https://github.com/mahoro-belyse/application-form.git",
    demo: "https://green-flied.netlify.app/apply",
  },
  {
    title: "Team Dashboard Web App",
    description:
      "Collaborative task management with real-time updates, drag-and-drop boards, and team notifications.",
    image: collab,
    tags: ["React", "TypeScript", "Tailwind", "Local Storage"],
    category: "Frontend",
    github: "https://github.com/mahoro-belyse/Team-dashboard.git",
    demo: "https://team-colla-bo.netlify.app/",
  },
  {
    title: "GovConnect – Citizen Service Portal",
    description:
      "Allows citizens to apply for government services, track application status, and receive real-time notifications simulating real-world workflows.",
    image: gov,
    tags: ["React", "TypeScript", "TailwindCSS", "Local Storage"],
    category: "Frontend",
    github: "https://github.com/mahoro-belyse/citizen-service-portal.git",
    demo: "https://govconnectportal.netlify.app/",
  },
  {
    title: "Portfolio",
    description:
      "My personal developer portfolio showcasing projects, skills, and experience — built with React and Framer Motion.",
    image: me,
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    category: "Frontend",
    github: "https://github.com/mahoro-belyse/portfolio",
    demo: undefined,
  },
];

const categoryColors: Record<Project["category"], string> = {
  "Full Stack": "from-primary/80 to-primary",
  Frontend: "from-secondary/80 to-secondary",
  Backend: "from-primary/60 to-secondary",
};

const allCategories = ["All", "Full Stack", "Frontend", "Backend"] as const;
type FilterCategory = (typeof allCategories)[number];

// Toast
function CookingToast({ onClose }: { onClose: () => void }): ReactElement {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-card border border-border shadow-2xl shadow-black/20 backdrop-blur-sm min-w-[280px]"
    >
      <span className="text-2xl">🍳</span>
      <div className="flex-1">
        <p className="font-mono text-[10px] tracking-widest text-primary uppercase mb-0.5">
          Still Cooking
        </p>
        <p className="font-body text-sm text-muted-foreground">
          Live demo coming soon — stay tuned!
        </p>
      </div>
      <button
        onClick={onClose}
        className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-muted transition-colors shrink-0"
      >
        <X className="w-3.5 h-3.5 text-muted-foreground" />
      </button>
    </motion.div>
  );
}

// Card
function ProjectCard({
  project,
  index,
  onCookingClick,
}: ProjectCardProps): ReactElement {
  const handleDemo = () => {
    if (project.demo) {
      window.open(project.demo, "_blank", "noopener,noreferrer");
    } else {
      onCookingClick();
    }
  };

  const handleGithub = () => {
    if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-2xl hover:shadow-primary/15 transition-all duration-500 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-gradient-to-r ${categoryColors[project.category]} text-primary-foreground`}
          >
            {project.category}
          </span>
        </div>

        {/* Hover icon buttons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleDemo}
            title={project.demo ? "Live Demo" : "Coming Soon"}
            className="w-8 h-8 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-foreground" />
          </button>
          <button
            onClick={handleGithub}
            title="GitHub"
            className="w-8 h-8 rounded-lg bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <FaGithub className="w-3.5 h-3.5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-heading text-base md:text-lg font-semibold text-foreground mb-1.5">
          {project.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wide bg-primary/10 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-3 border-t border-border/40">
          <button
            onClick={handleGithub}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide bg-muted/60 hover:bg-primary/10 text-muted-foreground hover:text-primary border border-border/40 hover:border-primary/30 transition-all duration-200"
          >
            <FaGithub className="w-3 h-3" />
            Source
          </button>
          <button
            onClick={handleDemo}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono tracking-wide bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 hover:border-primary/40 transition-all duration-200"
          >
            <ExternalLink className="w-3 h-3" />
            {project.demo ? "Live Demo" : "Coming Soon"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// Page
export default function PortfolioPage(): ReactElement {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const handleCookingClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      {/* Header */}
      <div className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <span className="font-heading font-semibold text-foreground">
            All Projects
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            {filtered.length} / {projects.length}
          </span>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <p className="font-mono text-[11px] tracking-widest text-primary uppercase mb-3">
            My Work
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project <span className="text-primary">Portfolio</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
            A full collection of projects I've built — from full-stack apps to
            polished frontend experiences.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-200 border ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-muted/40 text-muted-foreground border-border/40 hover:border-primary/30 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onCookingClick={handleCookingClick}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-6 rounded-2xl bg-primary/5 border border-primary/15 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-mono text-[10px] tracking-widest text-primary uppercase mb-1">
              Open to Work
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Looking for exciting full-stack projects to collaborate on
            </p>
          </div>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="shrink-0 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25"
          >
            Let's Talk
          </button>
        </motion.div>
      </div>
      {/* Toast */}
      <AnimatePresence>
        {showToast && <CookingToast onClose={() => setShowToast(false)} />}
      </AnimatePresence>
    </div>
  );
}
