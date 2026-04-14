import { motion } from "framer-motion";

type SectionHeaderProps = {
  title: string;
  highlight: string;
  subtitle?: string;
};

export default function SectionHeader({
  title,
  highlight,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
        {title}{" "}
        <span className="text-primary font-semibold italic">{highlight}</span>
      </h2>

      {subtitle && (
        <p className="font-body text-base text-muted-foreground mt-4 max-w-md mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
