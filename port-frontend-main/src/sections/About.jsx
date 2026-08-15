import { ScrollReveal, AnimatedCounter } from "../components/ui";

function About() {
  const highlights = [
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 20, suffix: "+", label: "Projects Completed" },
    { value: 15, suffix: "+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <ScrollReveal>
            <p className="section-kicker">About Me</p>
            <h2 className="about-text-title">
              Engineering partner who bridges technical execution with business strategy
            </h2>
            <div className="about-text-body">
              <p>
                I&apos;m a full-stack software engineer with a passion for building products
                that solve real problems. Over the past 5+ years, I&apos;ve worked with startups
                and enterprises alike — shipping React and Next.js frontends, Laravel and
                Node.js backends, Python data pipelines, and Docker-deployed microservices.
              </p>
              <p>
                My approach goes beyond writing code. I focus on understanding the business
                context, identifying the right trade-offs, and architecting systems that
                are maintainable, performant, and built to last. Whether it&apos;s blockchain
                infrastructure, machine learning models, or cloud-native platforms — I bring
                the technical depth to make it happen.
              </p>
              <p>
                I believe the best software is invisible — it just works, reliably, at scale.
                From validating an MVP to modernizing legacy systems to building
                mission-critical platforms from scratch, I combine strategic thinking with
                execution discipline to deliver outcomes that move the needle.
              </p>
            </div>
          </ScrollReveal>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.label} delay={0.1 + i * 0.08}>
                <div className="glass about-highlight-card">
                  <p className="about-highlight-value">
                    <AnimatedCounter from={0} to={h.value} suffix={h.suffix} duration={2} />
                  </p>
                  <p className="about-highlight-label">{h.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
