import { CONTACT } from "../../data/content";
import ContentParallax from "../Parallax/ContentParallax";
import "./Contact.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="section-inner">
      <div className="contact-grid">
        <ContentParallax speed={5} className="contact-text">
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            We&apos;d love to
            <br />
            <em>hear from you.</em>
          </h2>
          <p>
            If you have any questions or comments regarding competing, sponsoring,
            or anything else related to Science Olympiad at Georgia Tech, we would
            love to hear from you!
          </p>
        </ContentParallax>
        <ContentParallax speed={-9} className="contact-links">
          <a href={`mailto:${CONTACT.email}`} className="contact-link">
            <span className="link-label">Email</span>
            <span className="link-value">{CONTACT.email}</span>
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="link-label">Instagram</span>
            <span className="link-value">{CONTACT.instagramHandle}</span>
          </a>
          <a href={CONTACT.soinc} target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="link-label">Science Olympiad National</span>
            <span className="link-value">soinc.org</span>
          </a>
        </ContentParallax>
      </div>
      <ContentParallax speed={3}>
        <footer className="site-footer">
          <div className="footer-logo">
            <img src="/images/officialLogo.png" alt="Science Olympiad at Georgia Tech" className="footer-logo-img" />
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} Science Olympiad @ Georgia Tech
          </p>
        </footer>
      </ContentParallax>
    </div>
  </section>
);

export default Contact;
