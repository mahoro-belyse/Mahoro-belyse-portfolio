import type { ReactElement } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer(): ReactElement {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="font-mono text-xs tracking-wide text-muted-foreground/60">
          © {new Date().getFullYear()} Belyse. All rights reserved.
        </p>

        <p className="font-mono text-xs tracking-wide text-muted-foreground/60 flex items-center gap-1">
          Made with <Heart className="w-3 h-3 text-primary fill-primary" /> and
          passion
        </p>
      </motion.div>
    </footer>
  );
}
