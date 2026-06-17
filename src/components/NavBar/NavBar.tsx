import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./NavBar.css";

const SCROLL_ITEMS = [
  { label: "About", to: "about" },
  { label: "Tournaments", to: "tournaments" },
  { label: "Get Involved", to: "join" },
  { label: "Workshops", to: "workshops" },
  { label: "Sponsorship", to: "sponsors" },
  { label: "FAQ", to: "faq" },
  { label: "Contact", to: "contact" },
];

const NavBar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav className="navbar">
      {isHome ? (
        <ScrollLink to="home" smooth duration={600} className="navbar-logo">
          <img src="/images/home/logo.png" alt="Science Olympiad at Georgia Tech" className="navbar-logo-img" />
          <span className="logo-text">SciOly @ GT</span>
        </ScrollLink>
      ) : (
        <RouterLink to="/" className="navbar-logo">
          <img src="/images/home/logo.png" alt="Science Olympiad at Georgia Tech" className="navbar-logo-img" />
          <span className="logo-text">SciOly @ GT</span>
        </RouterLink>
      )}

      <ul className="navbar-links">
        {SCROLL_ITEMS.map(({ label, to }) => (
          <li key={to}>
            {isHome ? (
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
            ) : (
              <RouterLink to={`/#${to}`}>{label}</RouterLink>
            )}
          </li>
        ))}
      </ul>

      {isHome ? (
        <ScrollLink to="join" smooth duration={600} offset={-80} className="navbar-cta">
          Get Involved
        </ScrollLink>
      ) : (
        <RouterLink to="/#join" className="navbar-cta">
          Get Involved
        </RouterLink>
      )}
    </nav>
  );
};

export default NavBar;
