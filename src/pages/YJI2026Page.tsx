import {
  YJI_2026,
  YJI_EVENTS_B,
  YJI_EVENTS_C,
  YJI_OVERALL_B,
  YJI_OVERALL_C,
  type YjiEventResult,
  type YjiResult,
} from "../data/yjiData";
import "./YJI2026Page.css";

const MEDALS = ["🥇", "🥈", "🥉"];

const PodiumCard = ({ result, rank }: { result: YjiResult; rank: number }) => (
  <div className={`yji-podium-card yji-podium-${rank + 1}`}>
    <span className="yji-podium-medal">{MEDALS[rank]}</span>
    <span className="yji-podium-school">{result.school}</span>
    {result.town && <span className="yji-podium-town">{result.town}</span>}
    <span className="yji-podium-rank">#{result.key}</span>
  </div>
);

const ResultsList = ({ results }: { results: YjiResult[] }) => (
  <ul className="yji-results-list">
    {results.slice(3).map((result) => (
      <li key={result.key} className={result.bold ? "bold" : undefined}>
        <span className="yji-results-rank">{result.key}</span>
        <div className="yji-results-info">
          <span className="yji-results-school">{result.school}</span>
          {result.town && <span className="yji-results-town">{result.town}</span>}
        </div>
      </li>
    ))}
  </ul>
);

const DivisionResults = ({ title, results }: { title: string; results: YjiResult[] }) => {
  const top3 = results.slice(0, 3);

  return (
    <div className="yji-division-results">
      <h2 className="yji-division-title">🏆 {title} 🏆</h2>
      <div className="yji-podium-mobile">
        {top3.map((result, i) => (
          <PodiumCard key={result.key} result={result} rank={i} />
        ))}
      </div>
      <div className="yji-podium-desktop">
        {top3[1] && (
          <div className="yji-podium-slot second">
            <PodiumCard result={top3[1]} rank={1} />
          </div>
        )}
        {top3[0] && (
          <div className="yji-podium-slot first">
            <PodiumCard result={top3[0]} rank={0} />
          </div>
        )}
        {top3[2] && (
          <div className="yji-podium-slot third">
            <PodiumCard result={top3[2]} rank={2} />
          </div>
        )}
      </div>
      <ResultsList results={results} />
    </div>
  );
};

const EventWinners = ({
  title,
  events,
  variant,
}: {
  title: string;
  events: YjiEventResult[];
  variant: "b" | "c";
}) => (
  <div className="yji-event-winners">
    <h2 className={`yji-event-title yji-event-title-${variant}`}>🏅 {title} 🏅</h2>
    <div className="yji-event-list">
      {events.map((item) => (
        <div key={item.key} className={`yji-event-row yji-event-row-${variant}`}>
          <div className="yji-event-name">{item.event}</div>
          <div className="yji-event-school">{item.school}</div>
        </div>
      ))}
    </div>
  </div>
);

const YJI2026Page = () => (
  <div className="yji-page">
    <header className="yji-header">
      <h1>{YJI_2026.title}</h1>
    </header>

    <section className="yji-exams-section">
      <a
        href={YJI_2026.examsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="yji-exams-btn"
      >
        Exams
      </a>
      <div className="yji-video-wrapper">
        <iframe
          src={YJI_2026.videoUrl}
          title="YJI 2026 Tournament Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>

    <section className="yji-overall-section">
      <DivisionResults title="Div B Overall Results" results={YJI_OVERALL_B} />
      <DivisionResults title="Div C Overall Results" results={YJI_OVERALL_C} />
    </section>

    <section className="yji-events-section">
      <EventWinners title="Div B Event Winners" events={YJI_EVENTS_B} variant="b" />
      <EventWinners title="Div C Event Winners" events={YJI_EVENTS_C} variant="c" />
    </section>
  </div>
);

export default YJI2026Page;
