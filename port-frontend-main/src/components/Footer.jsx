import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3 className="footer-brand-title">Bonfils Dev</h3>
            <p className="footer-brand-text">
              Full-Stack Software Engineer & Technology Consultant.
              Building scalable, high-impact solutions for businesses worldwide.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#hero" className="footer-link">Home</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#projects" className="footer-link">Case Studies</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Connect</h4>
            <ul className="footer-links">
              <li><a href="mailto:bonfilslegend@gmail.com" className="footer-link"><Mail /> Email</a></li>
              <li><a href="https://linkedin.com/in/bonfils-dev" target="_blank" rel="noreferrer" className="footer-link"><FaLinkedin /> LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link"><FaGithub /> GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; {year} Bonfils Dev. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub"><FaGithub /></a>
            <a href="https://linkedin.com/in/bonfils-dev" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Twitter"><FaTwitter /></a>
            <a href="mailto:bonfilslegend@gmail.com" className="footer-social-link" aria-label="Email"><Mail /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
