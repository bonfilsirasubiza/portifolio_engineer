import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { SAMPLE_PROFILE_IMAGE } from "../constants/profile";
import { AnimatedCounter, MagneticButton } from "../components/ui";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: 0.6 + i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-main">
            <motion.div variants={itemVariants} className="hero-badge">
              <span className="hero-badge-dot" />
              Available for Projects
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-headline">
              Full-Stack Engineer &
              <br />
              <span className="hero-headline-gradient">Technology Consultant</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-subheadline">
              I craft high-performance software with React, Next.js, and Node.js — 
              backed by Python data pipelines, Docker deployments, and cloud-native 
              infrastructure. From startup MVPs to enterprise platforms, I architect 
              solutions that scale, perform, and drive measurable business impact.
            </motion.p>

            <motion.div variants={itemVariants} className="hero-actions">
              <MagneticButton href="#contact" variant="primary" size="lg">
                Start a Project <ArrowRight />
              </MagneticButton>
              <MagneticButton href="#projects" variant="secondary" size="lg">
                View Case Studies
              </MagneticButton>
            </motion.div>
          </div>

          <div className="hero-visual">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass hero-portrait-card"
            >
              <div className="hero-portrait-glow" />
              <img
                src={SAMPLE_PROFILE_IMAGE}
                alt="Bonfils Dev"
                className="hero-portrait"
              />
              <h2 className="hero-portrait-name">Bonfils Dev</h2>
              <p className="hero-portrait-role">Full-Stack Software Engineer</p>
              <div className="hero-portrait-links">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hero-portrait-link" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/bonfils-dev" target="_blank" rel="noreferrer" className="hero-portrait-link" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>

            <div className="hero-stats-grid">
              {[
                { value: 5, suffix: "+", label: "Years Experience" },
                { value: 20, suffix: "+", label: "Projects Delivered" },
                { value: 98, suffix: "%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="glass hero-stat-card"
                  custom={i}
                  variants={statVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="hero-stat-value">
                    <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} duration={2} />
                  </p>
                  <p className="hero-stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
