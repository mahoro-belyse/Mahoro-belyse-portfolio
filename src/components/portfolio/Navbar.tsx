import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Clock,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: User, label: "Skills", href: "/skills" },
  { icon: Briefcase, label: "Portfolio", href: "/portfolio" },
  { icon: Clock, label: "Experience", href: "/experience" },
  { icon: GraduationCap, label: "Education", href: "/education" },
  { icon: Mail, label: "Contact", href: "/contact" },
];

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (href: string): void => {
    navigate(href);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.nav
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1 p-3 rounded-2xl backdrop-blur-xl bg-card/60 border border-border/50 shadow-2xl"
      >
        {navItems.map(({ icon: Icon, label, href }) => {
          const isActive = location.pathname === href;
          return (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className={`group relative p-3 rounded-xl transition-all duration-300 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${isActive ? "bg-primary/10" : ""}`}
              aria-label={label}
            >
              <Icon
                className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"}`}
              />
              <span className="absolute left-full ml-3 px-3 py-1 rounded-lg bg-card border border-border text-sm font-body text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {label}
              </span>
            </button>
          );
        })}
        <div className="w-6 h-px bg-border/50 my-0.5" />
        <button
          onClick={toggleTheme}
          className="group relative p-3 rounded-xl transition-all duration-300 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-primary" />
          ) : (
            <Moon className="w-5 h-5 text-primary" />
          )}
          <span className="absolute left-full ml-3 px-3 py-1 rounded-lg bg-card border border-border text-sm font-body text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>
      </motion.nav>

      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div className="flex items-center justify-between p-4 backdrop-blur-xl bg-background/80 border-b border-border/50">
          <span className="font-heading text-xl font-semibold text-foreground">
            Portfolio
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-primary" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-foreground" />
              ) : (
                <Menu className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-xl bg-background/95 border-b border-border/50 p-4"
            >
              <div className="flex flex-col gap-1">
                {navItems.map(({ icon: Icon, label, href }) => (
                  <button
                    key={label}
                    onClick={() => scrollTo(href)}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors text-left"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="font-body text-sm text-foreground">
                      {label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
