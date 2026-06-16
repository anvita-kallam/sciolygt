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
  const seg1End = heroHeight + scrollSpan * 0.33;
  const seg2End = heroHeight + scrollSpan * 0.66;
  const sponsorsStart = heroHeight + scrollSpan * 0.62;
  const sponsorsEnd = heroHeight + scrollSpan * 0.74;

  return (
    <>
      <BeeSegment
        startScroll={heroHeight}
        endScroll={seg1End}
        speed={-8}
        speedX={-32}
        className="cs-bee-a"
        facingRight
      />
      <BeeSegment
        startScroll={seg1End}
        endScroll={seg2End}
        speed={-10}
        speedX={36}
        className="cs-bee-b"
        facingRight={false}
      />
      <BeeSegment
        startScroll={sponsorsStart}
        endScroll={sponsorsEnd}
        speed={-11}
        speedX={52}
        className="cs-bee-sponsors"
        facingRight={false}
      />
      <BeeSegment
        startScroll={seg2End}
        endScroll={scrollEnd}
        speed={-9}
        speedX={-44}
        className="cs-bee-c"
        facingRight
      />
    </>
  );
};

export default ScrollBeeCharacter;
