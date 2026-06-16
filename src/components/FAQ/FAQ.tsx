import { useState } from "react";
import FireflySection from "../Firefly/Firefly";
import ContentParallax from "../Parallax/ContentParallax";
import { FAQ_ITEMS } from "../../data/content";
import "./FAQ.css";

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className={`accordion-item ${isOpen ? "open" : ""}`}>
    <button className="accordion-trigger" onClick={onToggle} aria-expanded={isOpen}>
      <span>{question}</span>
      <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
    </button>
    <div className="accordion-content">
      <p>{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="faq-section">
      <FireflySection variant="firefly" count={6} />
      <div className="section-inner">
        <ContentParallax speed={4}>
          <div className="section-label">FAQ</div>
          <h2 className="section-title">
            Questions?
            <br />
            <em>We&apos;ve got answers.</em>
          </h2>
        </ContentParallax>
        <ContentParallax speed={7}>
          <div className="accordion">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.question}
                {...item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </ContentParallax>
      </div>
    </section>
  );
};

export default FAQ;
