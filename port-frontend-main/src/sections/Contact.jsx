import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { SectionHeader, MagneticButton } from "../components/ui";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          kicker="Get In Touch"
          title="Let's build something great together"
          subtitle="Whether you have a project in mind or just want to explore possibilities — I'd love to hear from you."
        />

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div variants={itemVariants} className="glass contact-info-card">
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              I&apos;m currently available for freelance projects, consulting engagements,
              and full-time opportunities. Response time is typically within 24 hours.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon"><Mail /></div>
              <div>
                <p className="contact-info-label">Email</p>
                <p className="contact-info-value">bonfilslegend@gmail.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><Phone /></div>
              <div>
                <p className="contact-info-label">Phone</p>
                <p className="contact-info-value">+234 800 000 0000</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon"><MapPin /></div>
              <div>
                <p className="contact-info-label">Location</p>
                <p className="contact-info-value">Remote / Global</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass contact-form-card">
            {submitted ? (
              <motion.div
                className="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="contact-success-icon"><Send /></div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="contact-form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="contact-form-input"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className="contact-form-input"
                    placeholder="Project inquiry, collaboration, etc."
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact-form-textarea"
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <MagneticButton type="submit" variant="primary" size="lg" className="contact-submit-btn">
                  <Send /> Send Message
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
