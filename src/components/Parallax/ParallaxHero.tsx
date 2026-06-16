import type { ReactNode } from "react";
import { Parallax } from "react-scroll-parallax";
import FireflySection from "../Firefly/Firefly";
import { HERO } from "../../data/content";
import {
  AuroraBand,
  CampusSkyline,
  CloudLayer,
  ForegroundHills,
  MoonGlow,
  MountainsBack,
  MountainsFront,
  MountainsMid,
  PineForest,
  ScienceDecor,
} from "./ParallaxGraphics";
import "./ParallaxHero.css";

const SCROLL_INCREMENT = -7;
const PARALLAX_PORTION = 1.1;

type LayerProps = {
  speed: number;
  clientHeight: number;
  className: string;
  children: ReactNode;
  speedX?: number;
  opacityRange?: [number, number];
};

const ParallaxLayer = ({
  speed,
  speedX = 0,
  clientHeight,
  className,
  children,
  opacityRange,
}: LayerProps) => {
  const end = speed * SCROLL_INCREMENT;
  const endX = speedX * SCROLL_INCREMENT;
  const height = PARALLAX_PORTION * clientHeight;

  return (
    <Parallax
      startScroll={0}
      endScroll={height}
      translateY={[0, end]}
      translateX={speedX ? [0, endX] : undefined}
      opacity={opacityRange}
      className={`parallax-layer ${className}`}
    >
      {children}
    </Parallax>
  );
};

type ParallaxHeroProps = {
  clientWidth: number;
  clientHeight: number;
  isMobile: boolean;
};

const ParallaxHero = ({ clientHeight, isMobile }: ParallaxHeroProps) => (
  <div className="parallax-hero">
    <div className="parallax-sky" />

    <ParallaxLayer speed={-1} clientHeight={clientHeight} className="layer-aurora">
      <AuroraBand />
    </ParallaxLayer>

    <ParallaxLayer speed={-2} clientHeight={clientHeight} className="layer-stars">
      <div className="stars" />
      <div className="stars stars-dense" />
    </ParallaxLayer>

    <ParallaxLayer speed={-1.5} clientHeight={clientHeight} className="layer-moon">
      <MoonGlow />
    </ParallaxLayer>

    <ParallaxLayer
      speed={-3}
      speedX={-2}
      clientHeight={clientHeight}
      className="layer-clouds-far"
      opacityRange={[0.6, 0.2]}
    >
      <CloudLayer variant="far" />
    </ParallaxLayer>

    <ParallaxLayer speed={-4} clientHeight={clientHeight} className="layer-mountains-back">
      <MountainsBack />
    </ParallaxLayer>

    <ParallaxLayer
      speed={-5}
      speedX={3}
      clientHeight={clientHeight}
      className="layer-clouds-mid"
      opacityRange={[0.7, 0.3]}
    >
      <CloudLayer variant="mid" />
    </ParallaxLayer>

    <ParallaxLayer speed={-7} clientHeight={clientHeight} className="layer-mountains-mid">
      <MountainsMid />
    </ParallaxLayer>

    <ParallaxLayer speed={-8} clientHeight={clientHeight} className="layer-campus">
      <CampusSkyline />
    </ParallaxLayer>

    <ParallaxLayer
      speed={-6}
      speedX={-4}
      clientHeight={clientHeight}
      className="layer-clouds-near"
      opacityRange={[0.85, 0.4]}
    >
      <CloudLayer variant="near" />
    </ParallaxLayer>

    <ParallaxLayer speed={-10} clientHeight={clientHeight} className="layer-forest">
      <PineForest />
    </ParallaxLayer>

    <ParallaxLayer speed={-11} clientHeight={clientHeight} className="layer-mountains-front">
      <MountainsFront />
    </ParallaxLayer>

    <ParallaxLayer speed={-13} clientHeight={clientHeight} className="layer-science">
      <ScienceDecor />
    </ParallaxLayer>

    <ParallaxLayer speed={-15} clientHeight={clientHeight} className="layer-foreground">
      <ForegroundHills />
    </ParallaxLayer>

    <ParallaxLayer speed={-16} clientHeight={clientHeight} className="layer-ground">
      <div className="ground-gradient" />
    </ParallaxLayer>

    {!isMobile && (
      <ParallaxLayer speed={-9} clientHeight={clientHeight} className="layer-particles">
        <div className="floating-particles" />
      </ParallaxLayer>
    )}

    <FireflySection variant="firefly" count={isMobile ? 8 : 14} />
    <FireflySection variant="fireflySmall" count={isMobile ? 10 : 18} />

    <div className="hero-content">
      <p className="hero-eyebrow">{HERO.eyebrow}</p>
      <h1 className="hero-title">
        {HERO.title.split(" ").slice(0, 1).join(" ")}
        <br />
        <em>{HERO.title.split(" ").slice(1).join(" ")}</em>
      </h1>
      <p className="hero-subtitle">{HERO.subtitle}</p>
      <p className="hero-description">{HERO.description}</p>
      <div className="hero-actions">
        <a href="#tournaments" className="hero-btn primary">View Tournaments</a>
        <a href="#join" className="hero-btn secondary">Get Involved</a>
      </div>
      <div className="scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </div>
  </div>
);

export default ParallaxHero;
