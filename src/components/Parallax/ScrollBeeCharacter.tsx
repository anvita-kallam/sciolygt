import { Parallax } from "react-scroll-parallax";
import "./ScrollBeeCharacter.css";

type BeeSegmentProps = {
  startScroll: number;
  endScroll: number;
  speed: number;
  speedX: number;
  className: string;
  facingRight: boolean;
};

const BeeSegment = ({
  startScroll,
  endScroll,
  speed,
  speedX,
  className,
  facingRight,
}: BeeSegmentProps) => (
  <Parallax
    startScroll={startScroll}
    endScroll={endScroll}
    translateY={[0, speed * -11]}
    translateX={[0, speedX * -32]}
    rotate={facingRight ? [-24, 14] : [14, -24]}
    className={`cs-bee-segment ${className}`}
  >
    <div className="cs-bee-wrap">
      <img
        src="/images/clearbee.png"
        alt=""
        className={`cs-bee-character ${facingRight ? "cs-bee-facing-right" : "cs-bee-facing-left"}`}
        draggable={false}
      />
    </div>
  </Parallax>
);

type ScrollBeeCharacterProps = {
  scrollEnd: number;
  heroHeight: number;
};

const ScrollBeeCharacter = ({ scrollEnd, heroHeight }: ScrollBeeCharacterProps) => {
  const scrollSpan = Math.max(scrollEnd - heroHeight, 1);
  const sponsorsStart = heroHeight + scrollSpan * 0.56;
  const sponsorsEnd = heroHeight + scrollSpan * 0.76;

  return (
    <>
      <BeeSegment
        startScroll={heroHeight}
        endScroll={sponsorsStart}
        speed={-8}
        speedX={-32}
        className="cs-bee-a"
        facingRight
      />
      <BeeSegment
        startScroll={sponsorsEnd}
        endScroll={scrollEnd}
        speed={-10}
        speedX={44}
        className="cs-bee-c"
        facingRight={false}
      />
    </>
  );
};

export default ScrollBeeCharacter;
