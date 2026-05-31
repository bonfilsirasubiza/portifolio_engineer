import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, CircleHelp, Home, Mail, MessageSquare, Moon, Sun, Wrench } from "lucide-react";
import Logo from "./Logo";
import { MagneticButton } from "./ui";

const links = [
  { id: "hero", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Wrench },
  { id: "projects", label: "Case Studies", icon: Briefcase },
  { id: "testimonials", label: "Testimonials", icon: MessageSquare },
  { id: "faq", label: "FAQ", icon: CircleHelp },
  { id: "contact", label: "Contact", icon: Mail },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    const preferredDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return saved || (preferredDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const handleClick = () => setMenuOpen(false);

  return (
    <motion.header
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="navbar-inner">
        <a href="#hero" className="navbar-brand" onClick={handleClick}>
          <Logo size={32} />
          <span className="navbar-brand-text">Bonfils Dev</span>
        </a>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`navbar-link ${activeSection === link.id ? "active" : ""}`}
                onClick={handleClick}
              >
                <Icon />
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>

          <MagneticButton href="#contact" variant="primary" className="navbar-cta">
            <Mail /> Hire Me
          </MagneticButton>

          <button
            type="button"
            className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
