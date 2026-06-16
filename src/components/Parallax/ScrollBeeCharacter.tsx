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
    translateX={[0, speedX * -10]}
    rotate={facingRight ? [-10, 6] : [6, -10]}
    className={`cs-bee-segment ${className}`}
  >
    <div className="cs-bee-wrap">
      <img
        src="/images/bee-character.png"
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

  return (
    <>
      <BeeSegment
        startScroll={heroHeight}
        endScroll={seg1End}
        speed={-6}
        speedX={-14}
        className="cs-bee-a"
        facingRight
      />
      <BeeSegment
        startScroll={seg1End}
        endScroll={seg2End}
        speed={-8}
        speedX={12}
        className="cs-bee-b"
        facingRight={false}
      />
      <BeeSegment
        startScroll={seg2End}
        endScroll={scrollEnd}
        speed={-7}
        speedX={-16}
        className="cs-bee-c"
        facingRight
      />
    </>
  );
};

export default ScrollBeeCharacter;
