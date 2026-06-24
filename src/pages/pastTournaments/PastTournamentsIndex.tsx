import { Link } from "react-router-dom";
import { PAST_TOURNAMENT_INDEX } from "../../data/pastTournamentArchive";
import "./PastTournaments.css";

const PastTournamentsIndex = () => (
  <main className="past-archive">
    <div className="past-archive-inner">
      <Link to="/" className="past-archive-back">
        ← Back to home
      </Link>

      <header className="past-index-hero">
        <img src="/images/pastTournaments/olympics.jpg" alt="" />
        <div className="past-index-hero-overlay">
          <h1 className="past-archive-title">Past Tournaments</h1>
        </div>
      </header>

      <div className="past-index-grid">
        <section className="past-index-column">
          <h2>State Tournament</h2>
          <ul className="past-index-list">
            {PAST_TOURNAMENT_INDEX.states.map((year, index) => (
              <li key={year}>
                <Link
                  to={`/pastTournaments/${year}`}
                  className={`past-index-link ${index % 2 === 1 ? "alt" : ""}`}
                >
                  {year}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="past-index-column">
          <h2>Yellow Jacket Invitational</h2>
          <ul className="past-index-list">
            {PAST_TOURNAMENT_INDEX.yji.map((year, index) => (
              <li key={year}>
                <Link
                  to={`/pastTournaments/${year}`}
                  className={`past-index-link ${index % 2 === 1 ? "alt" : ""}`}
                >
                  {year.replace("YJI", "")}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/yji-2026" className="past-index-link alt">
                2026
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </main>
);

export default PastTournamentsIndex;
