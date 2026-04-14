import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "../components/portfolio/SectionHeader";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

const contactInfo = [
  { icon: Mail, label: "Email", value: "mahorobelyse1@gmail.com" },
  { icon: MapPin, label: "Location", value: "Gasabo, Kigali, Rwanda 🇷🇼" },
  { icon: Phone, label: "Phone", value: "+250 787 488 939" },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/mahoro-belyse" },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/uwase-mahoro-belyse-3a1300344",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const buttonLabel = {
    idle: { text: "Send Message", icon: true },
    loading: { text: "Sending...", icon: false },
    success: { text: "✓ Message Sent!", icon: false },
    error: { text: "Failed. Try again.", icon: false },
  }[status];

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(var(--primary)/0.08),transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Get In"
          highlight="Touch"
          subtitle="Have a project in mind? Let's build something great together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:shadow-primary/10"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                    {label}
                  </p>
                  <p className="font-body text-sm font-medium text-foreground">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-11 h-11 rounded-xl bg-card border border-border/50 hover:border-primary/40 hover:bg-primary/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/15"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-5 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs tracking-wide text-foreground font-medium">
                  Currently Available
                </span>
              </div>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                Open to freelance projects, full-time roles, and exciting
                collaborations.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 p-6 md:p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-sm shadow-lg space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  Name
                </label>
                <Input
                  required
                  placeholder="Your name"
                  value={formData.name}
                  disabled={status === "loading"}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  Email
                </label>
                <Input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  disabled={status === "loading"}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                Message
              </label>
              <Textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={formData.message}
                disabled={status === "loading"}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </div>

            <Button
              type="submit"
              className="w-full py-6"
              disabled={status === "loading" || status === "success"}
            >
              {buttonLabel.text}
              {buttonLabel.icon && <Send className="w-4 h-4 ml-2" />}
            </Button>

            {status === "error" && (
              <p className="text-center text-xs text-red-500 font-mono">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
