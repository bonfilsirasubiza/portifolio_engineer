import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeader } from "../components/ui";

const testimonials = [
  {
    quote: "Bonfils transformed our outdated platform into a modern, scalable product. Our users noticed the difference immediately — page loads went from 6 seconds to under a second. The impact on our business was immediate.",
    name: "Sarah Mitchell",
    role: "CTO, TechVenture Inc.",
    rating: 5,
  },
  {
    quote: "Working with Bonfils was a game-changer for our engineering team. He brought clarity to our architecture, mentored our developers, and helped us ship 3x faster. I've never seen someone so effective at both strategy and execution.",
    name: "James Okonkwo",
    role: "VP Engineering, ScaleUp Labs",
    rating: 5,
  },
  {
    quote: "The API infrastructure Bonfils built handles millions of requests daily with zero downtime. His attention to reliability, security, and performance is unmatched. He's the first person I call when I need something done right.",
    name: "Amara Nwosu",
    role: "Founder, DataFlow Systems",
    rating: 5,
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <SectionHeader
          kicker="Testimonials"
          title="What clients say about working with me"
          subtitle="Real feedback from real partnerships — because results speak louder than promises."
        />

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={cardVariants} className="glass testimonial-card">
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
