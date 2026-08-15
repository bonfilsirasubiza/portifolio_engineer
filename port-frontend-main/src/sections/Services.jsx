import { motion } from "framer-motion";
import { Cloud, Code2, Hexagon, Server, Wrench } from "lucide-react";
import { SectionHeader } from "../components/ui";

const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    desc: "End-to-end web applications built with modern frameworks — designed for performance, security, and scalability from day one.",
    points: ["React, Next.js, Node.js, Laravel", "Responsive, accessible interfaces", "CI/CD & automated testing"],
  },
  {
    icon: Server,
    title: "API & Backend Architecture",
    desc: "Robust, well-documented APIs and microservices that power your applications with reliability and speed at any scale.",
    points: ["RESTful & GraphQL APIs", "Auth, security & compliance", "Database design & optimization"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & DevOps",
    desc: "Infrastructure automation and cloud-native deployment strategies that ensure resilience, cost-efficiency, and observability.",
    points: ["AWS, GCP & Azure deployment", "Docker & Kubernetes orchestration", "Monitoring, logging & alerting"],
  },
  {
    icon: Hexagon,
    title: "Blockchain & Web3 Development",
    desc: "Decentralized application development, smart contract engineering, and blockchain integration for transparent, trustless systems.",
    points: ["Smart contract development (Solidity)", "DeFi & NFT platform architecture", "Wallet integration & web3 APIs"],
  },
  {
    icon: Wrench,
    title: "Technical Advisory & Consulting",
    desc: "Strategic guidance to help your team make better architectural decisions, improve engineering processes, and ship with confidence.",
    points: ["Code reviews & architecture audits", "System design & scalability planning", "Team mentoring & capability building"],
  },
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

function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          kicker="What I Do"
          title="Services that deliver measurable results"
          subtitle="From concept to deployment — I provide end-to-end engineering services tailored to your business goals."
        />

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={cardVariants} className="glass service-card">
                <div className="service-card-icon"><Icon /></div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <ul className="service-card-list">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
