import { Link } from "react-router-dom";
import { TOURNAMENTS, PAST_TOURNAMENTS, type PastTournamentLink } from "../../data/content";
import { YJI_2027_TEAMS, YJI_2027_TEAM_COUNTS, type RegisteredTeam } from "../../data/yji2027Teams";
import ContentParallax from "../Parallax/ContentParallax";
import "./Tournaments.css";

const PastTournamentItem = ({ label, href }: PastTournamentLink) => {
  const className = "past-tournament-link";

  if (href.startsWith("/")) {
    return (
      <li>
        <Link to={href} className={className}>
          {label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    </li>
  );
};

const TeamColumn = ({
  title,
  teams,
  totalTeams,
}: {
  title: string;
  teams: RegisteredTeam[];
  totalTeams: number;
}) => (
  <div className="registered-team-column">
    <h4>
      {title}
      <span className="registered-team-count">
        {teams.length} schools · {totalTeams} teams
      </span>
    </h4>
    <ul>
      {teams.map((team) => (
        <li key={team.school}>
          <span className="registered-team-school">{team.school}</span>
          <span className="registered-team-meta">
            {team.teams} {team.teams === 1 ? "team" : "teams"} · {team.state}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

const TournamentLink = ({ label, href }: { label: string; href: string }) => {
  if (!href) {
    return (
      <span className="tournament-link tournament-link-soon">{label}</span>
    );
  }

  const isExternal = href.startsWith("http");
  const isDownload = href.endsWith(".pdf");

  return (
    <a
      key={label}
      href={href}
      className="tournament-link"
      {...(isExternal || isDownload
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {label}
    </a>
  );
};

const Tournaments = () => (
  <section id="tournaments" className="tournaments-section">
    <div className="section-inner">
      <ContentParallax speed={4}>
        <div className="section-label">Competition</div>
        <h2 className="section-title">
          2027 Tournaments
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
              {tournament.links.length > 0 && (
                <div className="tournament-links">
                  {tournament.links.map(({ label, href }) => (
                    <TournamentLink key={label} label={label} href={href} />
                  ))}
                </div>
              )}
            </article>
          </ContentParallax>
        ))}
      </div>

      <ContentParallax speed={4}>
        <div id="yji-2027-teams" className="registered-teams">
          <h3 className="registered-teams-heading">YJI 2027 Registered Teams</h3>
          <div className="registered-teams-grid">
            <TeamColumn
              title="Division B"
              teams={YJI_2027_TEAMS.divisionB}
              totalTeams={YJI_2027_TEAM_COUNTS.divisionB}
            />
            <TeamColumn
              title="Division C"
              teams={YJI_2027_TEAMS.divisionC}
              totalTeams={YJI_2027_TEAM_COUNTS.divisionC}
            />
          </div>
        </div>
      </ContentParallax>

      <ContentParallax speed={5}>
        <div className="past-tournaments">
          <h3 className="past-heading">Past Tournaments</h3>
          <div className="past-grid">
            <div className="past-column">
              <h4>State Tournament</h4>
              <ul>
                {PAST_TOURNAMENTS.states.map((tournament) => (
                  <PastTournamentItem key={tournament.label} {...tournament} />
                ))}
              </ul>
            </div>
            <div className="past-column">
              <h4>Yellow Jacket Invitational</h4>
              <ul>
                {PAST_TOURNAMENTS.yji.map((tournament) => (
                  <PastTournamentItem key={tournament.label} {...tournament} />
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
