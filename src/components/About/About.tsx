import { useState } from "react";
import FireflySection from "../Firefly/Firefly";
import ContentParallax from "../Parallax/ContentParallax";
import { ABOUT, TEAM } from "../../data/content";
import "./About.css";

const TEAM_GROUPS = ["Leadership", "Logistics", "Exam", "Build", "Finance", "Creative", "Outreach"];

const bubbleOffsets = [
  { x: 0, y: 0, size: "lg" },
  { x: 12, y: -8, size: "md" },
  { x: -6, y: 14, size: "sm" },
  { x: 8, y: 6, size: "md" },
  { x: -10, y: -4, size: "lg" },
  { x: 4, y: 18, size: "sm" },
];

const getBubbleTransform = (index: number, selected: number | null) => {
  const offset = bubbleOffsets[index % bubbleOffsets.length];
  const rotate = ((index * 7) % 11) - 5;

  if (selected === null) {
    return `translate(${offset.x}px, ${offset.y}px) rotate(${rotate}deg)`;
  }

  if (selected === index) {
    return "translate(0, 0) rotate(0deg) scale(1.85)";
  }

  const distance = index - selected;
  const direction = Math.sign(distance);
  const pushX = direction * Math.min(Math.abs(distance) * 42, 110);
  const pushY = Math.abs(distance) * 6 + offset.y * 0.25;
  const scale = Math.max(0.7, 0.88 - Math.abs(distance) * 0.03);

  return `translate(${pushX}px, ${pushY}px) rotate(${rotate * 0.35}deg) scale(${scale})`;
};

const About = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected((current) => (current === index ? null : index));
  };

  return (
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

          <div className="about-image-column">
            <ContentParallax speed={2} className="about-image-wrap">
              <img src="/images/home/techtower.jpg" alt="Georgia Tech campus" className="about-image" />
            </ContentParallax>
          </div>
        </div>

        <div className="team-section">
          <ContentParallax speed={3}>
            <h3 className="team-heading">Meet the Team</h3>
          </ContentParallax>

          <div className={`team-cloud ${selected !== null ? "team-cloud--expanded" : ""}`}>
            {TEAM.map((member, i) => {
              const offset = bubbleOffsets[i % bubbleOffsets.length];
              const isSelected = selected === i;
              const isDimmed = selected !== null && !isSelected;

              return (
                <button
                  key={member.name}
                  type="button"
                  className={[
                    "team-bubble",
                    `team-bubble--${offset.size}`,
                    isSelected ? "team-bubble--selected" : "",
                    isDimmed ? "team-bubble--dimmed" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-pressed={isSelected}
                  onClick={() => handleSelect(i)}
                >
                  <div
                    className="team-bubble-inner"
                    style={{ transform: getBubbleTransform(i, selected) }}
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
                </button>
              );
            })}
          </div>

          <div className="team-groups-legend" aria-hidden>
            {TEAM_GROUPS.map((group) => (
              <span key={group} className="team-legend-pill">
                {group}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
