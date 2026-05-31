import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import PageBackground from "./components/PageBackground";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Experience from "./sections/Experience";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

const loaderReveal = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const loaderText = {
  hidden: { opacity: 0, y: 10, filter: "blur(2px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

const loaderBar = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 },
  },
};

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) return;
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            className="app-loader"
            key="loader"
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <PageBackground />

            <div className="loader-content">
              <motion.div
                variants={loaderReveal}
                initial="hidden"
                animate="visible"
              >
                <Logo size={64} animated />
              </motion.div>

              <motion.p
                variants={loaderText}
                initial="hidden"
                animate="visible"
                className="app-loader-text"
              >
                Bonfils Dev
              </motion.p>

              <motion.div
                className="loader-bar-track"
                variants={loaderBar}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="loader-bar-fill"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Testimonials />
        <Experience />
        <Certifications />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            aria-label="Scroll to top"
            className="scroll-top-btn is-visible"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
