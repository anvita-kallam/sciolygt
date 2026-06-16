import type { ReactNode } from "react";
import { Parallax } from "react-scroll-parallax";

type ContentParallaxProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

/** Subtle scroll-linked drift for text, photos, and cards */
const ContentParallax = ({ children, speed = 6, className = "" }: ContentParallaxProps) => (
  <Parallax speed={speed} className={className}>
    {children}
  </Parallax>
);

export default ContentParallax;
