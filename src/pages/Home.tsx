// home.tsx
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";

import { useTheme } from "../lib/ThemeContext";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="lg:pl-20">
        <HeroSection />
      </main>
    </div>
  );
}
