import { SPONSORSHIP, CONTACT } from "../../data/content";
import ContentParallax from "../Parallax/ContentParallax";
import "./Sponsors.css";

const Sponsors = () => (
  <section id="sponsors" className="sponsors-section">
    <div className="section-inner">
      <ContentParallax speed={4}>
        <div className="section-label">Support Us</div>
        <h2 className="section-title">
          Sponsorship
          <br />
          <em>fuel STEM on campus</em>
        </h2>
        <p className="sponsors-intro">{SPONSORSHIP.intro}</p>
      </ContentParallax>

      <div className="sponsor-tiers">
        {SPONSORSHIP.tiers.map((tier, i) => (
          <ContentParallax key={tier.name} speed={5 + i * 3}>
            <div className={`sponsor-tier tier-${tier.name.toLowerCase()}`}>
              <div className="tier-header">
                <span className="tier-name">{tier.name}</span>
                <span className="tier-amount">{tier.amount}</span>
              </div>
              <p className="tier-benefit">{tier.benefit}</p>
            </div>
          </ContentParallax>
        ))}
      </div>

      <ContentParallax speed={-6}>
        <div className="sponsor-contact">
          <p>
            Interested in sponsoring? Reach out at{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
        </div>
      </ContentParallax>
    </div>
  </section>
);

export default Sponsors;
