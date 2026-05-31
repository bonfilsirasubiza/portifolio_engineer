import { motion } from "framer-motion";
import { Award, Cloud, Code2, Container, Database, FileCode } from "lucide-react";
import { SectionHeader } from "../components/ui";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: Cloud,
  },
  {
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2023",
    icon: Container,
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2023",
    icon: Code2,
  },
  {
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2024",
    icon: Cloud,
  },
  {
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2023",
    icon: Database,
  },
  {
    title: "Python Institute PCEP",
    issuer: "Python Institute",
    date: "2022",
    icon: FileCode,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeader
          kicker="Credentials"
          title="Professional Certifications"
          subtitle="Industry-recognized certifications that validate my expertise across cloud, infrastructure, and development."
        />

        <motion.div
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <motion.div key={cert.title} variants={cardVariants} className="glass certification-card">
                <div className="certification-icon"><Icon /></div>
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
