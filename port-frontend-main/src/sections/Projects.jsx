import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Rocket, Shield, ShoppingCart, Link, Smartphone } from "lucide-react";
import { SectionHeader, MagneticButton } from "../components/ui";

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    domain: "Retail / SaaS",
    challenge: "Legacy monolith struggling with 6s+ page loads, frequent downtime during peak traffic, and a 45% mobile bounce rate.",
    solution: "Complete architectural overhaul — migrated to a headless commerce stack with Next.js, implemented CDN caching, database query optimization, and a real-time inventory system.",
    results: [
      "300% improvement in page load speed",
      "47% increase in conversion rate",
      "35% reduction in bounce rate",
      "99.99% uptime during Black Friday",
    ],
    metric: "+47% conversion",
    icon: ShoppingCart,
    color: "#6366F1",
  },
  {
    title: "Real-Time Analytics Dashboard",
    domain: "Data / Fintech",
    challenge: "Batch-processed reports delivered 24h late. Business teams couldn't make real-time decisions with stale data.",
    solution: "Architected a streaming data pipeline with WebSocket connections, in-memory caching layer, and a high-performance React dashboard processing 2M+ events daily.",
    results: [
      "Real-time data delivery (from 24h to instant)",
      "2M+ events processed daily",
      "60% reduction in infrastructure costs",
      "Adopted by 3 enterprise clients",
    ],
    metric: "2M+ events/day",
    icon: BarChart3,
    color: "#22C55E",
  },
  {
    title: "Enterprise API Gateway",
    domain: "Infrastructure",
    challenge: "Disparate microservices with inconsistent authentication, no rate limiting, and growing latency issues as traffic scaled.",
    solution: "Designed and built a centralized API gateway with token-based auth, rate limiting, request caching, and comprehensive observability — handling 10K+ req/s.",
    results: [
      "99.99% uptime in production",
      "10K+ requests per second throughput",
      "Unified authentication across 12 services",
      "Reduced P90 latency by 75%",
    ],
    metric: "99.99% uptime",
    icon: Shield,
    color: "#F59E0B",
  },
  {
    title: "ML Recommendation Engine",
    domain: "Machine Learning",
    challenge: "Generic product recommendations driving low engagement. Manual curation couldn't scale and conversion rates were stagnant.",
    solution: "Built a hybrid ML recommendation system combining collaborative filtering, real-time user behavior tracking, and A/B testing infrastructure for continuous optimization.",
    results: [
      "32% increase in revenue per user",
      "28% improvement in click-through rate",
      "Real-time personalization at scale",
      "A/B testing framework for continuous optimization",
    ],
    metric: "+32% revenue/user",
    icon: Rocket,
    color: "#EC4899",
  },
  {
    title: "DeFi Portfolio Tracker",
    domain: "Blockchain / Web3",
    challenge: "DeFi users had no unified view of their cross-chain assets and yields. Existing tools were slow, non-intuitive, and lacked real-time data.",
    solution: "Developed a full-stack dApp integrating with multiple blockchain nodes via Web3 APIs, using React for the frontend, Node.js for indexing, and Solidity smart contracts for on-chain data verification.",
    results: [
      "Real-time cross-chain portfolio tracking",
      "Integrated with 5+ blockchain networks",
      "Sub-second transaction lookup times",
      "500+ active monthly users",
    ],
    metric: "5+ chains supported",
    icon: Link,
    color: "#8B5CF6",
  },
  {
    title: "Cross-Platform Health App",
    domain: "Mobile / HealthTech",
    challenge: "Clinic patients had no way to book appointments, access records, or consult doctors remotely. Paper-based workflows caused long wait times and low satisfaction.",
    solution: "Designed and built a cross-platform mobile application with Flutter, featuring secure patient authentication, real-time messaging, video consultations, and EHR integration via REST APIs.",
    results: [
      "60% reduction in patient wait times",
      "4.8★ average app store rating",
      "10K+ active patients within 3 months",
      "HIPAA-compliant data architecture",
    ],
    metric: "60% faster service",
    icon: Smartphone,
    color: "#06B6D4",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader
          kicker="Case Studies"
          title="Real projects, real business impact"
          subtitle="Every engagement is focused on outcomes. Here's how I've helped businesses solve critical challenges."
        />

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.title} variants={cardVariants} className="glass project-card">
                <div className="project-card-accent" style={{ background: project.color }} />
                <div className="project-card-header">
                  <div className="project-card-icon" style={{ color: project.color }}>
                    <Icon />
                  </div>
                  <div>
                    <p className="project-card-domain">{project.domain}</p>
                    <h3 className="project-card-title">{project.title}</h3>
                  </div>
                </div>

                <div className="project-card-metric-badge" style={{ borderColor: `${project.color}33`, color: project.color, background: `${project.color}11` }}>
                  <BarChart3 /> {project.metric}
                </div>

                <div className="project-card-details">
                  <div className="project-card-detail">
                    <p className="project-card-detail-label">Challenge</p>
                    <p className="project-card-detail-text">{project.challenge}</p>
                  </div>
                  <div className="project-card-detail">
                    <p className="project-card-detail-label">Solution</p>
                    <p className="project-card-detail-text">{project.solution}</p>
                  </div>
                  <div className="project-card-detail">
                    <p className="project-card-detail-label">Results</p>
                    <ul className="project-card-results">
                      {project.results.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-card-footer">
                  <MagneticButton href="#" variant="secondary" className="project-card-btn">
                    Full Case Study <ArrowRight />
                  </MagneticButton>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
