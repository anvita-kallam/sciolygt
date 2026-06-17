import { useEffect, useState } from "react";
import "./Countdown.css";

const MS_SECOND = 1000;
const MS_MINUTE = 60 * MS_SECOND;
const MS_HOUR = 60 * MS_MINUTE;
const MS_DAY = 24 * MS_HOUR;

type CountdownProps = {
  targetDate: string;
};

const Countdown = ({ targetDate }: CountdownProps) => {
  const [now, setNow] = useState(() => new Date());
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!ready) {
    return <div className="countdown-loading">Loading…</div>;
  }

  const target = new Date(targetDate);
  let remaining = Math.max(target.getTime() - now.getTime(), 0);

  const days = Math.floor(remaining / MS_DAY);
  remaining %= MS_DAY;
  const hours = Math.floor(remaining / MS_HOUR);
  remaining %= MS_HOUR;
  const minutes = Math.floor(remaining / MS_MINUTE);
  remaining %= MS_MINUTE;
  const seconds = Math.floor(remaining / MS_SECOND);

  const blocks = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className="countdown">
      {blocks.map(({ value, label }) => (
        <div key={label} className="countdown-block">
          <span className="countdown-value">{value.toString().padStart(2, "0")}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
