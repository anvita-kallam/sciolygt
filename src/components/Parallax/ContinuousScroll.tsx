import type { ReactNode } from "react";
import { Parallax } from "react-scroll-parallax";
import {
  AtlantaSkyline,
  AuroraBand,
  BuzzBee,
  CampusSkyline,
  CloudLayer,
  ForegroundHills,
  MixedForest,
  MoonGlow,
  MountainsBack,
  MountainsFront,
  MountainsMid,
  OakForest,
  PineForest,
  RamblinWreck,
  ScienceDecor,
  TechTowerSilhouette,
} from "./ParallaxGraphics";
import "./ContinuousScroll.css";

type ScrollLayerProps = {
  scrollEnd: number;
  speed: number;
  className: string;
  children: ReactNode;
  speedX?: number;
  opacityRange?: [number, number];
};

const ScrollLayer = ({
  scrollEnd,
  speed,
  speedX = 0,
  className,
  children,
  opacityRange,
}: ScrollLayerProps) => (
  <Parallax
    startScroll={0}
    endScroll={scrollEnd}
    translateY={[0, speed * -8]}
    translateX={speedX ? [0, speedX * -8] : undefined}
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
] as const;

const FOREST_LAYERS = [
  { id: "1", Forest: PineForest, speed: -9 },
  { id: "2", Forest: OakForest, speed: -11 },
  { id: "3", Forest: MixedForest, speed: -10 },
  { id: "4", Forest: PineForest, speed: -12 },
  { id: "5", Forest: OakForest, speed: -13 },
  { id: "6", Forest: MixedForest, speed: -11 },
] as const;

type ContinuousScrollProps = {
  scrollEnd: number;
  isMobile: boolean;
};

const ContinuousScroll = ({ scrollEnd, isMobile }: ContinuousScrollProps) => (
  <div className="continuous-scroll" aria-hidden>
    <div className="cs-sky" />
    <div className="cs-haze cs-haze-a" />
    <div className="cs-haze cs-haze-b" />
    <div className="cs-haze cs-haze-c" />
    <div className="cs-haze cs-haze-d" />

    <ScrollLayer scrollEnd={scrollEnd} speed={-2} className="cs-aurora">
      <AuroraBand />
    </ScrollLayer>

    <ScrollLayer scrollEnd={scrollEnd} speed={-3} className="cs-stars">
      <div className="cs-starfield" />
      <div className="cs-starfield cs-starfield-dense" />
    </ScrollLayer>

    <ScrollLayer scrollEnd={scrollEnd} speed={-2} className="cs-moon">
      <MoonGlow />
    </ScrollLayer>

    <ScrollLayer scrollEnd={scrollEnd} speed={-4} speedX={-3} className="cs-clouds cs-clouds-a" opacityRange={[0.5, 0.2]}>
      <CloudLayer variant="far" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-5} speedX={4} className="cs-clouds cs-clouds-b" opacityRange={[0.55, 0.22]}>
      <CloudLayer variant="mid" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-6} speedX={-4} className="cs-clouds cs-clouds-c" opacityRange={[0.6, 0.25]}>
      <CloudLayer variant="near" />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-5} speedX={3} className="cs-clouds cs-clouds-d" opacityRange={[0.55, 0.28]}>
      <CloudLayer variant="mid" />
    </ScrollLayer>

    {MOUNTAIN_LAYERS.map(({ id, Mountain, speed }) => (
      <ScrollLayer key={id} scrollEnd={scrollEnd} speed={speed} className={`cs-drift cs-drift-${id}`}>
        <Mountain />
      </ScrollLayer>
    ))}

    {FOREST_LAYERS.map(({ id, Forest, speed }) => (
      <ScrollLayer key={id} scrollEnd={scrollEnd} speed={speed} className={`cs-forest cs-forest-${id}`}>
        <Forest />
      </ScrollLayer>
    ))}

    {/* Atlanta campus & skyline */}
    <ScrollLayer scrollEnd={scrollEnd} speed={-8} className="cs-campus cs-campus-a">
      <CampusSkyline />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-9} className="cs-campus cs-campus-b">
      <AtlantaSkyline />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-7} className="cs-campus cs-campus-c">
      <CampusSkyline />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-10} className="cs-campus cs-campus-d">
      <AtlantaSkyline />
    </ScrollLayer>

    {/* Tech Tower silhouettes */}
    <ScrollLayer scrollEnd={scrollEnd} speed={-12} speedX={-2} className="cs-tower cs-tower-a">
      <TechTowerSilhouette opacity={0.45} />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-14} speedX={3} className="cs-tower cs-tower-b">
      <TechTowerSilhouette opacity={0.35} />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-11} speedX={-4} className="cs-tower cs-tower-c">
      <TechTowerSilhouette opacity={0.4} />
    </ScrollLayer>

    {/* GT mascots */}
    <ScrollLayer scrollEnd={scrollEnd} speed={-5} speedX={6} className="cs-mascot cs-bee-a">
      <BuzzBee opacity={0.7} />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-6} speedX={-5} className="cs-mascot cs-bee-b">
      <BuzzBee opacity={0.55} />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-4} speedX={4} className="cs-mascot cs-bee-c">
      <BuzzBee opacity={0.5} />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-9} speedX={-10} className="cs-mascot cs-wreck-a">
      <RamblinWreck opacity={0.65} />
    </ScrollLayer>
    <ScrollLayer scrollEnd={scrollEnd} speed={-10} speedX={8} className="cs-mascot cs-wreck-b">
      <RamblinWreck opacity={0.5} />
    </ScrollLayer>

    <ScrollLayer scrollEnd={scrollEnd} speed={-4} className="cs-science">
      <ScienceDecor />
    </ScrollLayer>

    {!isMobile && (
      <ScrollLayer scrollEnd={scrollEnd} speed={-3} className="cs-particles">
        <div className="cs-floating-particles" />
      </ScrollLayer>
    )}

    <ScrollLayer scrollEnd={scrollEnd} speed={-14} className="cs-foreground">
      <ForegroundHills />
    </ScrollLayer>
  </div>
);

export default ContinuousScroll;
