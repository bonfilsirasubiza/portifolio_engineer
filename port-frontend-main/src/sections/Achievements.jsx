import { motion } from "framer-motion";
import { GitFork, Star, Trophy, Users } from "lucide-react";
import { SectionHeader, AnimatedCounter } from "../components/ui";

const achievements = [
  { value: 50, suffix: "+", label: "GitHub Contributions", icon: GitFork },
  { value: 25, suffix: "+", label: "Open Source Projects", icon: Star },
  { value: 15, suffix: "+", label: "Speaking Engagements", icon: Trophy },
  { value: 30, suffix: "+", label: "Team Members Mentored", icon: Users },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeader
          kicker="Recognition"
          title="Achievements & Impact"
          subtitle="Beyond project delivery — my contributions to the developer community and engineering excellence."
        />

        <motion.div
          className="achievements-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <motion.div key={a.label} variants={cardVariants} className="glass achievement-card">
                <div className="achievement-icon"><Icon /></div>
                <p className="achievement-value">
                  <AnimatedCounter from={0} to={a.value} suffix={a.suffix} duration={2} />
                </p>
                <p className="achievement-label">{a.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;
