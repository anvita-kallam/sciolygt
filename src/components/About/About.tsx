import FireflySection from "../Firefly/Firefly";
import ContentParallax from "../Parallax/ContentParallax";
import { ABOUT, TEAM } from "../../data/content";
import "./About.css";

const TEAM_GROUPS = ["Leadership", "Logistics", "Exam", "Build", "Finance", "Creative", "Outreach"];

const bubbleOffsets = [
  { x: 0, y: 0, size: "lg", speed: 8 },
  { x: 12, y: -8, size: "md", speed: 5 },
  { x: -6, y: 14, size: "sm", speed: 10 },
  { x: 8, y: 6, size: "md", speed: 4 },
  { x: -10, y: -4, size: "lg", speed: 7 },
  { x: 4, y: 18, size: "sm", speed: 9 },
];

const About = () => (
  <section id="about" className="about-section">
    <FireflySection variant="firefly" count={8} />
    <div className="section-inner">
      <div className="about-header">
        <ContentParallax speed={4} className="about-copy">
          <div className="section-label">About Us</div>
          <h2 className="section-title">
            Empowering the next
            <br />
            <em>generation of scientists</em>
          </h2>
          <div className="about-text">
            <p>{ABOUT.mission}</p>
            <p>{ABOUT.detail}</p>
          </div>
          <div className="about-stats">
            {ABOUT.stats.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </ContentParallax>

        <ContentParallax speed={-12} className="about-image-wrap">
          <img src="/images/home/techtower.jpg" alt="Georgia Tech campus" className="about-image" />
        </ContentParallax>
      </div>

      <div className="team-section">
        <ContentParallax speed={3}>
          <h3 className="team-heading">Meet the Team</h3>
        </ContentParallax>

        <div className="team-cloud">
          {TEAM.map((member, i) => {
            const offset = bubbleOffsets[i % bubbleOffsets.length];
            const rotate = ((i * 7) % 11) - 5;
            return (
              <ContentParallax
                key={member.name}
                speed={offset.speed}
                className={`team-bubble team-bubble--${offset.size}`}
              >
                <div
                  className="team-bubble-inner"
                  style={{
                    transform: `translate(${offset.x}px, ${offset.y}px) rotate(${rotate}deg)`,
                  }}
                >
                  <div className="team-photo-ring">
                    <img src={member.img} alt={member.name} className="team-photo" />
                  </div>
                  <div className="team-bubble-text">
                    <span className="team-group-pill">{member.group}</span>
                    <span className="team-name">{member.name}</span>
                    <span className="team-role">{member.role}</span>
                  </div>
                </div>
              </ContentParallax>
            );
          })}
        </div>

        <div className="team-groups-legend" aria-hidden>
          {TEAM_GROUPS.map((group) => (
            <span key={group} className="team-legend-pill">{group}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
