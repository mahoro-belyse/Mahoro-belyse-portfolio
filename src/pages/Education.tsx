import { motion } from "framer-motion";
import { GraduationCap, Award, Sparkles, ExternalLink } from "lucide-react";
import SectionHeader from "../components/portfolio/SectionHeader";

// Certificate PDF imports from assets
import reactCert from "../assets/certificate/belyse react development .jpeg";
import responsiveCert from "../assets/certificate/Belyse responsive web development.jpeg";
import webDevCert from "../assets/certificate/Belyse web development.jpeg";
import mernCert from "../assets/certificate/belyse Full-Stack Development MERN Stack certificate.pdf";

// Types
type EducationItem = {
  title: string;
  institution?: string;
  year: string;
};

type CertificationItem = {
  title: string;
  issuer?: string;
  year: string;
  certificatePath?: string;
};

type TimelineItemProps = {
  item: EducationItem | CertificationItem;
  index: number;
  icon: React.ElementType;
};

// Data
const education: EducationItem[] = [
  {
    title: "Bachelor of Business Information communication and Technology",
    institution: "MKU University, Rwanda",
    year: "2023 - 2025",
  },
  {
    title: "Math , econimics and computer science",
    institution: "College immaculee conception, Rwanda",
    year: "2019 - 2022",
  },
];

const certifications: CertificationItem[] = [
  {
    title: "React Development",
    issuer: "Shecodes",
    year: "2024",
    certificatePath: reactCert,
  },
  {
    title: "Responsive Web Development",
    issuer: "Shecodes",
    year: "2024",
    certificatePath: responsiveCert,
  },
  {
    title: "Web Development",
    issuer: "Shecodes",
    year: "2023",
    certificatePath: webDevCert,
  },
  {
    title: "Full-Stack Development MERN Stack",
    issuer: "Power Learn Project",
    year: "2025",
    certificatePath: mernCert,
  },
];

// Component
function TimelineItem({ item, index, icon: Icon }: TimelineItemProps) {
  const cert = "certificatePath" in item ? (item as CertificationItem) : null;
  const hasCert = cert?.certificatePath;

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex gap-4 items-start"
    >
      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mt-1">
        <Icon className="w-4 h-4 text-primary" />
      </div>

      <div className="flex-1">
        {hasCert ? (
          <a
            href={cert!.certificatePath}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 font-body text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
            title="View Certificate"
          >
            {item.title}
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" />
          </a>
        ) : (
          <h4 className="font-body text-sm font-semibold text-foreground">
            {item.title}
          </h4>
        )}

        <p className="font-body text-xs text-muted-foreground mt-0.5">
          {"institution" in item
            ? item.institution
            : (item as CertificationItem).issuer}
        </p>

        <span className="font-mono text-[10px] tracking-widest text-primary/70 uppercase">
          {item.year}
        </span>
      </div>
    </motion.div>
  );
}

// Main Section
export default function EducationSection() {
  return (
    <section id="education" className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title=""
          highlight="Education"
          subtitle="My learning journey and certifications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, i) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  index={i}
                  icon={GraduationCap}
                />
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm shadow-lg"
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="font-heading text-2xl font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((item, i) => (
                <TimelineItem
                  key={item.title}
                  item={item}
                  index={i}
                  icon={Award}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Motivational Note */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
        >
          <Sparkles className="w-4 h-4 text-primary shrink-0" />
          <p className="font-mono text-xs tracking-wide text-primary/80">
            Always learning and growing
          </p>
        </motion.div>
      </div>
    </section>
  );
}
