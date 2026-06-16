import { useEffect, useRef } from "react";
import "./Firefly.css";

interface FireflyProps {
  className: string;
}

const Firefly = ({ className }: FireflyProps) => (
  <div className={`firefly ${className}`} />
);

type FireflySectionProps = {
  variant: "firefly" | "fireflySmall";
  count?: number;
};

const FireflySection = ({ variant, count = 12 }: FireflySectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fireflies = container.querySelectorAll<HTMLElement>(".firefly");
    const DURATION = variant === "firefly" ? 45 : 30;

    fireflies.forEach((firefly, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      const keyframesName = `fireflyMove${variant}${i}`;

      firefly.style.left = `${startX}vw`;
      firefly.style.top = `${startY}vh`;

      const style = document.createElement("style");
      style.textContent = `
        @keyframes ${keyframesName} {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          25% { transform: translate(${(endX - startX) * 0.5}vw, ${(endY - startY) * 0.5}vh); opacity: 0.8; }
          50% { transform: translate(${(endX - startX)}vw, ${(endY - startY)}vh); opacity: 0.5; }
          75% { transform: translate(${(endX - startX) * 0.7}vw, ${(endY - startY) * 0.3}vh); opacity: 0.9; }
        }
      `;
      document.head.appendChild(style);

      firefly.style.animation = `${keyframesName} ${DURATION}s ease-in-out infinite, glow 2s ease-in-out infinite alternate`;
    });
  }, [variant]);

  return (
    <div className="firefly-container" ref={containerRef}>
      {Array.from({ length: count }).map((_, i) => (
        <Firefly key={i} className={variant} />
      ))}
    </div>
  );
};

export default FireflySection;
