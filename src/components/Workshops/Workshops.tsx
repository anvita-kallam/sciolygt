import { workshopData } from "../../data/workshopData";
import ContentParallax from "../Parallax/ContentParallax";
import "./Workshops.css";

const nonEventTitles = new Set([
  "Champion Cheatsheets Workshop",
  "Fundraising Workshop",
  "Starting a Team Workshop",
  "Metric Mastery Workshop",
]);

const eventWorkshops = workshopData.filter((w) => !nonEventTitles.has(w.title));

const videoId = (url: string) => url.split("/embed/")[1]?.split("?")[0] ?? "";

const Workshops = () => (
  <section id="workshops" className="workshops-section">
    <div className="section-inner">
      <ContentParallax speed={4}>
        <div className="section-label">Resources</div>
        <h2 className="section-title section-title-compact">
          Event Workshops <em>— learn from the best</em>
        </h2>
        <p className="workshops-intro">
          Recorded workshops covering build and study events — click any title to watch on YouTube.
        </p>
      </ContentParallax>

      <ContentParallax speed={8}>
        <ul className="workshops-list">
          {eventWorkshops.map((workshop, i) => (
            <li key={workshop.title} style={{ transform: `translateY(${(i % 3) * 2}px)` }}>
              <a
                href={`https://www.youtube.com/watch?v=${videoId(workshop.videoUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="workshop-row"
              >
                <span className="workshop-title">{workshop.title}</span>
                <span className="workshop-arrow" aria-hidden>→</span>
              </a>
            </li>
          ))}
        </ul>
      </ContentParallax>
    </div>
  </section>
);

export default Workshops;
