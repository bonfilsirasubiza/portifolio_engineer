import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "../components/ui";

const faqs = [
  {
    q: "What's your process for starting a new project?",
    a: "I begin with a discovery phase to understand your goals, constraints, and timeline. We define scope, technical approach, and key metrics. Then I move into iterative development with regular check-ins, demos, and milestone deliveries.",
  },
  {
    q: "How do you handle project timelines and budgets?",
    a: "I provide transparent upfront estimates based on clear scope. Projects are structured in phases with defined deliverables. I communicate proactively if anything changes and work to find cost-effective solutions without sacrificing quality.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Absolutely. I've helped multiple startups go from idea to MVP to product-market fit. I can work lean, move fast, and help you avoid common pitfalls that waste time and money.",
  },
  {
    q: "What technologies do you specialize in?",
    a: "My core stack includes React, Next.js, Node.js, TypeScript, Python, Laravel, PostgreSQL, Docker, and cloud platforms (AWS/GCP). I also work extensively with blockchain/Web3 and machine learning systems. I'm technology-agnostic where it matters and always choose the right tool for the job.",
  },
  {
    q: "Can you work with my existing team?",
    a: "Yes. I often integrate with existing engineering teams to provide technical leadership, accelerate delivery, or solve specific challenges. I adapt to your workflows, tools, and culture.",
  },
  {
    q: "How do you ensure code quality and reliability?",
    a: "I follow disciplined engineering practices: comprehensive testing, code reviews, CI/CD pipelines, monitoring, and documentation. Every project includes automated tests and deployment pipelines as standard practice.",
  },
];

const faqVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <SectionHeader
          kicker="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about working with me. If you don't see your question here, just ask."
        />

        <motion.div
          className="faq-list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={faqVariants}
              className={`glass faq-item ${openIndex === i ? "is-open" : ""}`}
            >
              <button
                type="button"
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <ChevronDown className={`faq-chevron ${openIndex === i ? "rotated" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    className="faq-answer"
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
