import { motion } from "framer-motion";
import SectionHeader from "../components/portfolio/SectionHeader";
import {
  Paintbrush,
  Code2,
  GitBranch,
  Radio,
  Server,
  Triangle,
  Globe,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ABOUT_IMAGE =
  "https://media.base44.com/images/public/69d4cc1d7cc902f54881b8f8/294bf8fa8_generated_6adcf73a.png";

type Skill = {
  name: string;
  level: number;
};

type Tool = {
  name: string;
  icon: LucideIcon;
};

const skills: Skill[] = [
  { name: "UI/UX Design", level: 90 },
  { name: "HTML & CSS", level: 82 },
  { name: "React / Next.js", level: 92 },
  { name: "TailwindCss", level: 90 },
  { name: "Node.js / Express", level: 88 },
  { name: "Supabase", level: 82 },
  { name: "PostgreSQL / MongoDB", level: 80 },
  { name: "TypeScript / Javascript", level: 85 },
  { name: "API", level: 88 },
];

const tools: Tool[] = [
  { name: "Wix", icon: Paintbrush },
  { name: "VScode", icon: Code2 },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Postman", icon: Radio },
  { name: "Render", icon: Server },
  { name: "Vercel", icon: Triangle },
  { name: "Netlify", icon: Globe },
];

type SkillBarProps = Skill & { index: number };

function SkillBar({ name, level, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between items-center">
        <span className="font-body text-sm font-medium text-foreground">
          {name}
        </span>
        <span className="font-mono text-xs text-muted-foreground">
          {level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full bg-gradient-to-r from-primary/70 via-primary to-primary/90 relative"
        >
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 blur-sm rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 px-6 relative overflow-hidden"
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="My"
          highlight="Skills"
          subtitle="Full stack expertise from pixel-perfect UIs to scalable APIs"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left col — image + tools */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
              <img
                src={ABOUT_IMAGE}
                alt="Creative workspace"
                className="w-full h-56 md:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-card/80 backdrop-blur-md border border-border/50 flex items-center justify-between">
                <div>
                  <p className="font-heading text-base font-semibold text-foreground">
                    Uwase Mahoro Belyse
                  </p>
                  <p className="font-mono text-[10px] tracking-widest text-primary uppercase">
                    Full Stack Developer · Rwanda
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                  <span className="text-lg">🇷🇼</span>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div>
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">
                Tools & Technologies
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2">
                {tools.map((tool, i) => (
                  <motion.div
                    key={tool.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-primary/10"
                  >
                    <tool.icon className="w-4 h-4 text-foreground" />
                    <span className="font-body text-xs text-foreground font-medium truncate">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right col — skill bars */}
          <div className="order-1 lg:order-2 space-y-5">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-6">
              Technical Proficiency
            </p>
            {skills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
