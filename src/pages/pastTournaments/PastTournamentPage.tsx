import { Link, Navigate, useParams } from "react-router-dom";
import {
  PAST_TOURNAMENT_ARCHIVE,
  type DivisionResults,
  type EventEntry,
  type ResultEntry,
} from "../../data/pastTournamentArchive";
import "./PastTournaments.css";

const OverallTable = ({ rows }: { rows: ResultEntry[] }) => (
  <table className="past-results-table">
    <tbody>
      {rows.map((row) => (
        <tr key={row.key} className={row.bold ? "bold" : undefined}>
          <td>{row.key}</td>
          <td>{row.school}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const EventTable = ({ rows }: { rows: EventEntry[] }) => (
  <table className="past-results-table past-event-table">
    <tbody>
      {rows.map((row) => (
        <tr key={row.key}>
          <td>{row.event}</td>
          <td>{row.school}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const DivisionBlock = ({ division }: { division: DivisionResults }) => (
  <section className="past-division-block">
    <h2 className="past-division-heading">{division.label}</h2>
    <div className={`past-results-grid ${division.events.length > 0 ? "two-up" : ""}`}>
      <div className="past-results-card">
        <h3>Overall Results</h3>
        <OverallTable rows={division.overall} />
      </div>
      {division.events.length > 0 && (
        <div className="past-results-card">
          <h3>Event Winners</h3>
          <EventTable rows={division.events} />
          {division.allResultsUrl && (
            <div className="past-archive-actions" style={{ marginTop: "1rem", marginBottom: 0 }}>
              <a
                href={division.allResultsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="past-archive-link"
              >
                View all results on Duosmium
              </a>
            </div>
          )}
        </div>
      )}
    </div>
    {division.events.length === 0 && division.allResultsUrl && (
      <div className="past-archive-actions">
        <a
          href={division.allResultsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="past-archive-link"
        >
          View all results on Duosmium
        </a>
      </div>
    )}
  </section>
);

const PastTournamentPage = () => {
  const { slug } = useParams();
  const tournament = slug ? PAST_TOURNAMENT_ARCHIVE[slug] : undefined;

  if (!tournament) {
    return <Navigate to="/pastTournaments" replace />;
  }

  return (
    <main className="past-archive">
      <div className="past-archive-inner">
        <Link to="/pastTournaments" className="past-archive-back">
          ← Back to past tournaments
        </Link>

        <header className="past-archive-hero">
          {!tournament.intro && tournament.heroImage ? (
            <img src={tournament.heroImage} alt="" />
          ) : !tournament.intro && tournament.photos?.[0] ? (
            <img src={tournament.photos[0]} alt="" />
          ) : null}
          <div className="past-archive-hero-overlay">
            <div>
              <h1 className="past-archive-title">{tournament.title}</h1>
              {tournament.subtitle && <p className="past-archive-subtitle">{tournament.subtitle}</p>}
            </div>
          </div>
        </header>

        {tournament.intro && (
          <div className={tournament.heroImage ? "past-archive-intro-figure" : undefined}>
            <p className="past-archive-intro">{tournament.intro}</p>
            {tournament.heroImage && (
              <figure>
                <img src={tournament.heroImage} alt="Tournament photo" />
              </figure>
            )}
          </div>
        )}

        {tournament.photos && tournament.photos.length > 0 && (
          <div className="past-photo-grid">
            {tournament.photos.map((photo) => (
              <img key={photo} src={photo} alt="" loading="lazy" />
            ))}
          </div>
        )}

        {tournament.photosUrl && (
          <div className="past-archive-actions">
            <a
              href={tournament.photosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="past-archive-link"
            >
              View all photos
            </a>
          </div>
        )}

        {tournament.divisions.map((division) => (
          <DivisionBlock key={division.label} division={division} />
        ))}

        {tournament.infoDocUrl && (
          <section className="past-division-block">
            <h2 className="past-division-heading">Tournament Information</h2>
            <iframe
              title={`${tournament.title} information`}
              src={tournament.infoDocUrl}
              className="past-info-frame"
            />
          </section>
        )}
      </div>
    </main>
  );
};

export default PastTournamentPage;
