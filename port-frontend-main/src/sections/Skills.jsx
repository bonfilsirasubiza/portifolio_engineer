import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiPython,
  SiLaravel,
} from "react-icons/si";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { GitBranch, Hexagon, BrainCircuit } from "lucide-react";
import { SectionHeader } from "../components/ui";

const skills = [
  { name: "React & Next.js", level: 95, icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", level: 92, icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js & Express", level: 93, icon: FaNodeJs, color: "#339933" },
  { name: "Python", level: 85, icon: SiPython, color: "#3776AB" },
  { name: "Laravel & PHP", level: 80, icon: SiLaravel, color: "#FF2D20" },
  { name: "PostgreSQL", level: 90, icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", level: 85, icon: SiMongodb, color: "#47A248" },
  { name: "Docker & Cloud", level: 82, icon: FaDocker, color: "#2496ED" },
  { name: "Git & CI/CD", level: 90, icon: GitBranch, color: "#F05032" },
  { name: "Blockchain / Web3", level: 72, icon: Hexagon, color: "#8B5CF6" },
  { name: "Machine Learning / AI", level: 70, icon: BrainCircuit, color: "#EC4899" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function SkillBar({ level }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="skill-bar-track">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: "0%" }}
        animate={isInView ? { width: `${level}%` } : { width: "0%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader
          kicker="Expertise"
          title="Technologies I work with daily"
          subtitle="Years of hands-on experience with modern tools and frameworks that power today's most impactful products."
        />

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.name} variants={skillVariants} className="glass skill-card">
                <div className="skill-card-icon" style={{ color: skill.color }}>
                  <Icon />
                </div>
                <h3 className="skill-card-title">{skill.name}</h3>
                <p className="skill-card-desc">{skill.level}% proficiency</p>
                <SkillBar level={skill.level} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
