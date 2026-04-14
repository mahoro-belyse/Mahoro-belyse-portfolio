import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

import { useTheme } from "../../lib/ThemeContext";

const PortfolioLayout: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="lg:pl-20">
        <Outlet />
      </main>
    </div>
  );
};

export default PortfolioLayout;
