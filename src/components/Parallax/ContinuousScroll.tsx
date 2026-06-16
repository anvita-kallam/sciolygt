import type { ReactNode } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  CloudLayer,
  MountainsBack,
  MountainsFront,
  MountainsMid,
  MixedForest,
  OakForest,
  PineForest,
} from "./ParallaxGraphics";
import ScrollBeeCharacter from "./ScrollBeeCharacter";
import "./ContinuousScroll.css";

type ScrollLayerProps = {
  scrollEnd: number;
  startScroll: number;
  speed: number;
  className: string;
  children: ReactNode;
  speedX?: number;
  opacityRange?: [number, number];
};

const ScrollLayer = ({
  scrollEnd,
  startScroll,
  speed,
  speedX = 0,
  className,
  children,
  opacityRange,
}: ScrollLayerProps) => (
  <Parallax
    startScroll={startScroll}
    endScroll={scrollEnd}
    translateY={[0, speed * -11]}
    translateX={speedX ? [0, speedX * -10] : undefined}
    opacity={opacityRange}
    className={`cs-layer ${className}`}
  >
    {children}
  </Parallax>
);

const MOUNTAIN_LAYERS = [
  { id: "a", Mountain: MountainsBack, speed: -3 },
  { id: "b", Mountain: MountainsMid, speed: -5 },
  { id: "c", Mountain: MountainsFront, speed: -4 },
  { id: "d", Mountain: MountainsBack, speed: -6 },
  { id: "e", Mountain: MountainsMid, speed: -5 },
  { id: "f", Mountain: MountainsFront, speed: -7 },
  { id: "g", Mountain: MountainsBack, speed: -4 },
  { id: "h", Mountain: MountainsMid, speed: -6 },
  { id: "i", Mountain: MountainsFront, speed: -5 },
  { id: "j", Mountain: MountainsBack, speed: -7 },
  { id: "k", Mountain: MountainsMid, speed: -4 },
  { id: "l", Mountain: MountainsFront, speed: -6 },
  { id: "m", Mountain: MountainsBack, speed: -5 },
  { id: "n", Mountain: MountainsMid, speed: -7 },
  { id: "o", Mountain: MountainsFront, speed: -6 },
  { id: "p", Mountain: MountainsBack, speed: -8 },
  { id: "q", Mountain: MountainsFront, speed: -7 },
  { id: "r", Mountain: MountainsMid, speed: -9 },
  { id: "s", Mountain: MountainsBack, speed: -10 },
] as const;

const FOREST_LAYERS = [
  { id: "1", Forest: PineForest, speed: -9 },
  { id: "2", Forest: OakForest, speed: -11 },
  { id: "3", Forest: MixedForest, speed: -10 },
  { id: "4", Forest: PineForest, speed: -12 },
  { id: "5", Forest: OakForest, speed: -13 },
  { id: "6", Forest: MixedForest, speed: -11 },
  { id: "7", Forest: PineForest, speed: -10 },
  { id: "8", Forest: OakForest, speed: -12 },
  { id: "9", Forest: MixedForest, speed: -13 },
  { id: "10", Forest: PineForest, speed: -11 },
  { id: "11", Forest: OakForest, speed: -12 },
  { id: "12", Forest: MixedForest, speed: -13 },
  { id: "13", Forest: PineForest, speed: -14 },
  { id: "14", Forest: OakForest, speed: -15 },
] as const;

type ContinuousScrollProps = {
  scrollEnd: number;
  heroHeight: number;
  ridgeOverlap: number;
  isMobile: boolean;
};

const ContinuousScroll = ({ scrollEnd, heroHeight, ridgeOverlap, isMobile }: ContinuousScrollProps) => (
  <div className="continuous-scroll" style={{ top: heroHeight - ridgeOverlap }} aria-hidden>
    <div className="cs-sky" />

    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-1} className="cs-stars">
      <div className="cs-starfield" />
      <div className="cs-starfield cs-starfield-dense" />
    </ScrollLayer>

    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-3} className="cs-particles">
      <div className="cs-gold-particles" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-4} className="cs-haze cs-haze-a">
      <div className="cs-gold-haze" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-6} className="cs-haze cs-haze-b">
      <div className="cs-gold-haze cs-gold-haze-strong" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-5} className="cs-haze cs-haze-c">
      <div className="cs-gold-haze" />
    </ScrollLayer>

    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-4} speedX={-3} className="cs-clouds cs-clouds-a" opacityRange={[0.45, 0.2]}>
      <CloudLayer variant="far" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-5} speedX={4} className="cs-clouds cs-clouds-b" opacityRange={[0.5, 0.22]}>
      <CloudLayer variant="mid" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-6} speedX={-4} className="cs-clouds cs-clouds-c" opacityRange={[0.55, 0.25]}>
      <CloudLayer variant="near" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-5} speedX={3} className="cs-clouds cs-clouds-d" opacityRange={[0.5, 0.28]}>
      <CloudLayer variant="mid" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-6} speedX={-1} className="cs-clouds cs-clouds-f" opacityRange={[0.48, 0.22]}>
      <CloudLayer variant="near" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-5} speedX={2} className="cs-clouds cs-clouds-g" opacityRange={[0.46, 0.2]}>
      <CloudLayer variant="mid" />
    </ScrollLayer>
    {!isMobile && (
      <>
        <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-4} speedX={-2} className="cs-clouds cs-clouds-e" opacityRange={[0.4, 0.18]}>
          <CloudLayer variant="far" />
        </ScrollLayer>
        <ScrollLayer scrollEnd={scrollEnd} startScroll={heroHeight} speed={-6} speedX={3} className="cs-clouds cs-clouds-h" opacityRange={[0.42, 0.18]}>
          <CloudLayer variant="near" />
        </ScrollLayer>
      </>
    )}

    {MOUNTAIN_LAYERS.map(({ id, Mountain, speed }) => (
      <ScrollLayer
        key={id}
        scrollEnd={scrollEnd}
        startScroll={heroHeight}
        speed={speed}
        className={`cs-drift cs-drift-${id}`}
      >
        <Mountain />
      </ScrollLayer>
    ))}

    {FOREST_LAYERS.map(({ id, Forest, speed }) => (
      <ScrollLayer key={id} scrollEnd={scrollEnd} startScroll={heroHeight} speed={speed} className={`cs-forest cs-forest-${id}`}>
        <Forest />
      </ScrollLayer>
    ))}

    <ScrollBeeCharacter scrollEnd={scrollEnd} heroHeight={heroHeight} />
  </div>
);

export default ContinuousScroll;
