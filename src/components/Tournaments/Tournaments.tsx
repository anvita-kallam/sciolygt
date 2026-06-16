import { TOURNAMENTS, PAST_TOURNAMENTS } from "../../data/content";
import ContentParallax from "../Parallax/ContentParallax";
import "./Tournaments.css";

const Tournaments = () => (
  <section id="tournaments" className="tournaments-section">
    <div className="section-inner">
      <ContentParallax speed={4}>
        <div className="section-label">Competition</div>
        <h2 className="section-title">
          2026 Tournaments
          <br />
          <em>on the Georgia Tech campus</em>
        </h2>
      </ContentParallax>

      <div className="tournament-cards">
        {TOURNAMENTS.map((tournament, i) => (
          <ContentParallax key={tournament.name} speed={i % 2 === 0 ? 7 : -6}>
            <article className="tournament-card">
              <div className="tournament-card-header">
                <h3>{tournament.name}</h3>
                <span className="tournament-date">{tournament.date}</span>
              </div>
              <p className="tournament-description">{tournament.description}</p>
              {tournament.highlight && (
                <p className="tournament-highlight">{tournament.highlight}</p>
              )}
              <ul className="tournament-details">
                {tournament.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <div className="tournament-links">
                {tournament.links.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="tournament-link">
                    {label}
                  </a>
                ))}
              </div>
            </article>
          </ContentParallax>
        ))}
      </div>

      <ContentParallax speed={5}>
        <div className="past-tournaments">
          <h3 className="past-heading">Past Tournaments</h3>
          <div className="past-grid">
            <div className="past-column">
              <h4>State Tournament</h4>
              <ul>
                {PAST_TOURNAMENTS.states.map((year) => (
                  <li key={year}>{year}</li>
                ))}
              </ul>
            </div>
            <div className="past-column">
              <h4>Yellow Jacket Invitational</h4>
              <ul>
                {PAST_TOURNAMENTS.yji.map((year) => (
                  <li key={year}>{year}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ContentParallax>
    </div>
  </section>
);

export default Tournaments;
