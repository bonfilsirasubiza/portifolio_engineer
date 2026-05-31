import { motion } from "framer-motion";
import { SectionHeader } from "../components/ui";

const timeline = [
  {
    role: "Senior Software Engineer",
    company: "Enterprise Product Team",
    date: "2024 — Present",
    desc: "Leading architecture decisions for mission-critical services. Driving technical strategy across multiple teams and mentoring engineers on scalable system design and delivery excellence.",
  },
  {
    role: "Full Stack Lead Developer",
    company: "Digital Platform Company",
    date: "2022 — 2024",
    desc: "Architected high-throughput APIs and reusable frontend modules serving 100K+ users. Reduced release cycles by 40% and improved platform reliability to 99.99% uptime.",
  },
  {
    role: "Full Stack Developer",
    company: "Technology Solutions Firm",
    date: "2021 — 2022",
    desc: "Delivered end-to-end web applications with secure authentication, complex data workflows, and maintainable codebases. Served 50K+ users across multiple products.",
  },
  {
    role: "Software Developer",
    company: "Startup Studio",
    date: "2019 — 2021",
    desc: "Built foundational services and UI layers for early-stage products. Established development standards, code review processes, and automated deployment pipelines from scratch.",
  },
  {
    role: "Software Engineering Trainee",
    company: "Origi Group Training",
    date: "2018 — 2019",
    desc: "Completed intensive training in modern full-stack development, system architecture, and DevOps practices. Gained hands-on experience building production-grade applications with React, Node.js, Python, and Docker.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader
          kicker="Career Journey"
          title="A track record of growth and impact"
          subtitle="From startup to enterprise — each role shaped my approach to building software that makes a difference."
        />

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {timeline.map((item) => (
            <motion.div
              key={`${item.role}-${item.company}`}
              variants={itemVariants}
              className="timeline-item"
            >
              <span className="timeline-dot" />
              <div className="glass timeline-card">
                <p className="timeline-date">{item.date}</p>
                <h3 className="timeline-role">{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
