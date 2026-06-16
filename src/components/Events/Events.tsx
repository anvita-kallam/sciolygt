import "./Events.css";

const EVENT_CATEGORIES = [
  {
    name: "Build",
    icon: "🔧",
    events: ["Tower", "Helicopter", "Robot Tour", "Bungee Drop"],
    description: "Design and construct devices that perform under pressure.",
  },
  {
    name: "Lab",
    icon: "🧪",
    events: ["Chem Lab", "Forensics", "Codebusters", "Experimental Design"],
    description: "Hands-on experiments and analytical problem solving.",
  },
  {
    name: "Study",
    icon: "📚",
    events: ["Anatomy", "Astronomy", "Dynamic Planet", "Remote Sensing"],
    description: "Deep knowledge across biology, earth science, and physics.",
  },
  {
    name: "Hybrid",
    icon: "⚡",
    events: ["Air Trajectory", "Electric Vehicle", "Detector Building", "Wind Power"],
    description: "Combine theory with engineering in timed competition.",
  },
];

const Events = () => (
  <section id="events" className="events-section">
    <div className="section-inner">
      <div className="section-label">Competition</div>
      <h2 className="section-title">
        23 events.
        <br />
        <em>Infinite possibilities.</em>
      </h2>
      <p className="events-intro">
        Science Olympiad spans build events, lab practicums, and study tests —
        there&apos;s a place for every kind of scientist and engineer on our team.
      </p>
      <div className="events-grid">
        {EVENT_CATEGORIES.map(({ name, icon, events, description }) => (
          <div key={name} className="event-card">
            <div className="event-card-header">
              <span className="event-icon">{icon}</span>
              <h3>{name}</h3>
            </div>
            <p className="event-description">{description}</p>
            <ul className="event-list">
              {events.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
