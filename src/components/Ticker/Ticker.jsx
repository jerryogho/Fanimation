import "./Ticker.css";
import { useEffect, useState } from "react";
import { Clock, Truck, ShieldCheck, Tag } from "lucide-react";

const ANNOUNCEMENTS = [
  { icon: <Truck size={16} />, text: "Free delivery on all orders above N50,000" },
  { icon: <Tag size={16} />, text: "Seasonal sale now on - up to 20% off selected fans" },
  { icon: <ShieldCheck size={16} />, text: "Every Fanimation product comes with a 2 year warranty" },
];

function formatDateTime(date) {
  const dateStr = date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const timeStr = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return `${dateStr}  |  ${timeStr}`;
}

// A slim strip that lives just under the navbar: a scrolling marquee of
// announcements on the left, and a live-updating clock on the right.
function Ticker() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ticker">
      <div className="ticker-track-wrapper">
        <div className="ticker-track">
          {[...ANNOUNCEMENTS, ...ANNOUNCEMENTS].map((item, index) => (
            <span className="ticker-item" key={index}>
              {item.icon} {item.text}
            </span>
          ))}
        </div>
      </div>
      <div className="ticker-clock">
        <Clock size={16} />
        <span>{formatDateTime(now)}</span>
      </div>
    </div>
  );
}

export default Ticker;
