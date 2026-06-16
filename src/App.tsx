import { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import NavBar from "./components/NavBar/NavBar";
import ContinuousScroll from "./components/Parallax/ContinuousScroll";
import ParallaxHero from "./components/Parallax/ParallaxHero";
import About from "./components/About/About";
import Tournaments from "./components/Tournaments/Tournaments";
import Join from "./components/Join/Join";
import Workshops from "./components/Workshops/Workshops";
import Sponsors from "./components/Sponsors/Sponsors";
import FAQ from "./components/FAQ/FAQ";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollEnd, setScrollEnd] = useState(8000);
  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  const [clientHeight, setClientHeight] = useState(window.innerHeight);
  const isMobile = clientWidth < 768;

  useEffect(() => {
    const update = () => {
      setClientWidth(window.innerWidth);
      setClientHeight(window.innerHeight);
      if (contentRef.current) {
        setScrollEnd(contentRef.current.scrollHeight);
      }
    };
    update();
    const observer = new ResizeObserver(update);
    if (contentRef.current) observer.observe(contentRef.current);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ParallaxProvider>
      <div className="app">
        <ContinuousScroll scrollEnd={scrollEnd} isMobile={isMobile} />
        <NavBar />
        <div className="scroll-content" ref={contentRef}>
          <section id="home">
            <ParallaxHero
              clientWidth={clientWidth}
              clientHeight={clientHeight}
              isMobile={isMobile}
            />
          </section>
          <About />
          <Tournaments />
          <Join />
          <Workshops />
          <Sponsors />
          <FAQ />
          <Contact />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
