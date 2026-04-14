import { motion } from "framer-motion";
import { Briefcase, Star } from "lucide-react";
import SectionHeader from "../components/portfolio/SectionHeader";

// Types
type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
};

// Data
const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Nexventures Ltd",
    period: "2026 – Present",
    location: "Kigali, Rwanda",
    highlights: [
      "Architected and developed scalable full-stack applications with React, TypeScript, TailwindCSS, PostgreSQL, and Supabase",
      "Contributed to the successful delivery of multiple products in a collaborative team environment",
      "Optimized frontend performance, reducing load time by 60% using modern React techniques",
    ],
  },
  {
    role: "IT intern",
    company: "Rwanda Stock Exchange",
    period: "May 2025 – August 2025",
    location: "Kigali, Rwanda",
    highlights: [
      "Built and maintained responsive web applications with HTML, CSS, and JavaScript",
      "Identified and resolved bugs, enhancing application reliability and user experience",
      "Gained hands-on experience applying technology in stock market analysis and solutions",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "FreeLance",
    period: "2026 – present",
    location: "Kigali, Rwanda",
    highlights: [
      "Developed and deployed full-stack applications for diverse clients using React, Node.js, and MongoDB",
      "Implemented responsive designs and efficient backend systems",
      "Handled debugging, optimization, and production support",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 lg:py-32 px-6 bg-muted/20 relative overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="My"
          highlight="Experience"
          subtitle="A journey of growth, impact, and craftsmanship"
        />

        <div className="relative space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{
                opacity: 0,
                x: i % 2 === 0 ? -60 : 60,
                y: 20,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex flex-col lg:flex-row gap-0 lg:gap-8 mb-12 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="flex-1">
                <div className="group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="w-4 h-4 text-primary shrink-0" />
                          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground">
                            {exp.role}
                          </h3>
                        </div>

                        <p className="font-body text-sm font-medium text-primary">
                          {exp.company}
                        </p>

                        <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mt-0.5">
                          {exp.location}
                        </p>
                      </div>

                      <span className="font-mono text-[11px] tracking-wider text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-full border border-border/50 whitespace-nowrap self-start">
                        {exp.period}
                      </span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((item, j) => (
                        <motion.li
                          key={j}
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + j * 0.08 }}
                          className="flex items-start gap-2.5 text-muted-foreground"
                        >
                          <Star className="w-3 h-3 text-primary mt-1 shrink-0" />
                          <span className="font-body text-sm leading-relaxed">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden lg:flex items-center justify-center w-12 shrink-0 pt-8">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30"
                />
              </div>

              {/* Spacer */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
