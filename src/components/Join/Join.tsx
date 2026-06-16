import FireflySection from "../Firefly/Firefly";
import ContentParallax from "../Parallax/ContentParallax";
import { GET_INVOLVED } from "../../data/content";
import "./Join.css";

const Join = () => (
  <section id="join" className="join-section">
    <FireflySection variant="fireflySmall" count={10} />
    <div className="section-inner">
      <ContentParallax speed={5}>
        <div className="section-label">Get Involved</div>
        <h2 className="section-title">
          Join the team or
          <br />
          <em>volunteer at tournaments</em>
        </h2>
      </ContentParallax>

      <div className="join-steps">
        {GET_INVOLVED.steps.map(({ step, title, description }, i) => (
          <ContentParallax key={step} speed={6 + i * 2}>
            <div className="join-step">
              <span className="step-number">{step}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </ContentParallax>
        ))}
      </div>

      <ContentParallax speed={-8}>
        <div className="join-cta">
          <h3>Are you a Tech student?</h3>
          <p>{GET_INVOLVED.volunteerNote}</p>
          <div className="join-buttons">
            <a href={GET_INVOLVED.engageUrl} target="_blank" rel="noopener noreferrer" className="join-btn">
              Join on Engage
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSekFTVWk0ZQ-mK0fVWTKB21nae7Nm60SFrXWxuVJWlGmNUWpA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="join-btn secondary"
            >
              Volunteer Sign-Up
            </a>
          </div>
        </div>
      </ContentParallax>
    </div>
  </section>
);

export default Join;
