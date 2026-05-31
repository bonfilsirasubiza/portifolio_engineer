import ScrollReveal from "./ScrollReveal";

function SectionHeader({ kicker, title, subtitle, delay = 0 }) {
  return (
    <ScrollReveal className="section-header" delay={delay}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </ScrollReveal>
  );
}

export default SectionHeader;
