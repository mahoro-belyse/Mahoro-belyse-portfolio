import { motion } from "framer-motion";
import SectionHeader from "../components/portfolio/SectionHeader";
import {
  Paintbrush, Code2, GitBranch, Radio,
  Server, Triangle, Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ABOUT_IMAGE =
  "https://media.base44.com/images/public/69d4cc1d7cc902f54881b8f8/294bf8fa8_generated_6adcf73a.png";

type Tool = { name: string; icon: LucideIcon };

const LANGUAGES  = ["TypeScript", "JavaScript", "Python", "HTML", "CSS"];
const FRAMEWORKS = ["React", "Next.js", "Node.js", "Express", "FastAPI", "TailwindCSS"];
const DATABASES  = ["PostgreSQL", "MongoDB", "Supabase", "REST APIs"];
const DESIGN     = ["UI/UX Design", "Figma", "Responsive Design"];

const tools: Tool[] = [
  { name: "VS Code",      icon: Code2 },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Postman",      icon: Radio },
  { name: "Vercel",       icon: Triangle },
  { name: "Netlify",      icon: Globe },
  { name: "Render",       icon: Server },
  { name: "Wix",          icon: Paintbrush },
];

/* ── Pill ──────────────────────────────────────────────────── */
function Pill({ name, i, accent }: { name: string; i: number; accent?: boolean }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, y: -2 }}
      className={`
        inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium
        border transition-all duration-200 cursor-default select-none
        ${accent
          ? "border-primary/50 bg-primary/15 text-primary"
          : "border-white/10 bg-white/[0.04] text-foreground/70 hover:border-primary/25 hover:text-foreground hover:bg-white/[0.07]"
        }
      `}
    >
      {name}
    </motion.span>
  );
}

/* ── Category block ────────────────────────────────────────── */
function CategoryBlock({
  number, label, items, delay = 0,
}: { number: string; label: string; items: string[]; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-mono text-[9px] text-primary/40 tracking-[0.2em]">{number}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
        <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-muted-foreground/50">
          {label}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((name, i) => (
          <Pill key={name} name={name} i={i} accent={i === 0 && label === "Frameworks & Libraries"} />
        ))}
      </div>
    </motion.div>
  );
}

/* ── Tool card ─────────────────────────────────────────────── */
function ToolCard({ tool, i }: { tool: Tool; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
      whileHover={{ scale: 1.05, y: -3 }}
      className="
        flex items-center gap-2.5 px-3 py-2.5 rounded-xl
        border border-white/[0.07] bg-white/[0.03]
        hover:border-primary/25 hover:bg-primary/[0.05]
        transition-all duration-250 cursor-default group
      "
    >
      <div className="
        w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0
        bg-white/[0.05] border border-white/[0.06]
        group-hover:bg-primary/15 group-hover:border-primary/20
        transition-all duration-250
      ">
        <tool.icon className="w-3.5 h-3.5 text-foreground/40 group-hover:text-primary transition-colors duration-250" />
      </div>
      <span className="font-mono text-[10px] tracking-wide text-foreground/55 group-hover:text-foreground/80 transition-colors duration-250">
        {tool.name}
      </span>
    </motion.div>
  );
}

/* ── Section ───────────────────────────────────────────────── */
export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-36 px-6 relative overflow-hidden">

      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />
        <div
          className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 65%)" }}
        />
        <div
          className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 65%)" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="My"
          highlight="Skills"
          subtitle="Full stack expertise from pixel-perfect UIs to scalable APIs"
        />

        {/* ── 3-col grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px] gap-8 lg:gap-10 items-start">

          {/* LEFT: Tools */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-5 bg-primary/40" />
              <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground/55">
                Dev Tools
              </span>
            </div>
            <div className="space-y-2">
              {tools.map((tool, i) => (
                <ToolCard key={tool.name} tool={tool} i={i} />
              ))}
            </div>
          </motion.div>

          {/* CENTER: Skill categories */}
          <div className="space-y-7 relative">
            {/* Ghost watermark */}
            <div
              className="absolute -top-4 left-0 font-mono font-bold text-foreground/[0.025] select-none pointer-events-none leading-none"
              style={{ fontSize: "clamp(60px, 10vw, 120px)" }}
              aria-hidden
            >
              SKL
            </div>

            <CategoryBlock number="01" label="Languages"              items={LANGUAGES}  delay={0}    />
            <CategoryBlock number="02" label="Frameworks & Libraries" items={FRAMEWORKS} delay={0.1}  />
            <CategoryBlock number="03" label="Databases & Services"   items={DATABASES}  delay={0.2}  />
            <CategoryBlock number="04" label="Design & Other"         items={DESIGN}     delay={0.3}  />
          </div>

          {/* RIGHT: Image card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Profile image */}
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40 group">
              <img
                src={ABOUT_IMAGE}
                alt="Workspace"
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Name badge */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="p-3 rounded-xl bg-black/50 backdrop-blur-md border border-white/10">
                  <p className="font-heading text-sm font-semibold text-white">
                    Uwase Mahoro Belyse
                  </p>
                  <p className="font-mono text-[9px] tracking-[0.18em] text-primary uppercase mt-0.5">
                    Full Stack Developer · Rwanda 🇷🇼
                  </p>
                </div>
              </div>
            </div>

            {/* Stats row under image */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Total Skills", value: `${LANGUAGES.length + FRAMEWORKS.length + DATABASES.length + DESIGN.length}+` },
                { label: "Years Coding", value: "3+" },
              ].map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="p-3 rounded-xl border border-white/[0.07] bg-white/[0.03] text-center"
                >
                  <p className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted-foreground/50 mb-1">
                    {label}
                  </p>
                  <p className="font-heading text-2xl font-semibold text-foreground">
                    {value.replace("+", "")}<span className="text-primary">+</span>
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="font-body text-xs text-muted-foreground/50 leading-relaxed border-l border-primary/25 pl-3"
            >
              Crafting end-to-end digital experiences — from database architecture to pixel-perfect UI.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}