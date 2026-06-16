import { Link as ScrollLink } from "react-scroll";
import "./NavBar.css";

const NAV_ITEMS = [
  { label: "About", to: "about" },
  { label: "Tournaments", to: "tournaments" },
  { label: "Get Involved", to: "join" },
  { label: "Workshops", to: "workshops" },
  { label: "Sponsorship", to: "sponsors" },
  { label: "FAQ", to: "faq" },
  { label: "Contact", to: "contact" },
];

const NavBar = () => (
  <nav className="navbar">
    <ScrollLink to="home" smooth duration={600} className="navbar-logo">
      <img src="/images/home/logo.png" alt="Science Olympiad at Georgia Tech" className="navbar-logo-img" />
      <span className="logo-text">SciOly @ GT</span>
    </ScrollLink>
    <ul className="navbar-links">
      {NAV_ITEMS.map(({ label, to }) => (
        <li key={to}>
          <ScrollLink
            to={to}
            smooth
            duration={600}
            offset={-80}
            spy
            activeClass="active"
          >
            {label}
          </ScrollLink>
        </li>
      ))}
    </ul>
    <ScrollLink to="join" smooth duration={600} offset={-80} className="navbar-cta">
      Get Involved
    </ScrollLink>
  </nav>
);

export default NavBar;
