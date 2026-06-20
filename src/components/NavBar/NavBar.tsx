import { useEffect, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const renderNavLink = (label: string, to: string, className?: string) =>
    isHome ? (
      <ScrollLink
        to={to}
        smooth
        duration={600}
        offset={-80}
        spy
        activeClass="active"
        className={className}
        onClick={closeMenu}
      >
        {label}
      </ScrollLink>
    ) : (
      <RouterLink to={`/#${to}`} className={className} onClick={closeMenu}>
        {label}
      </RouterLink>
    );

  const renderCta = (className: string) =>
    isHome ? (
      <ScrollLink
        to="join"
        smooth
        duration={600}
        offset={-80}
        className={className}
        onClick={closeMenu}
      >
        Get Involved
      </ScrollLink>
    ) : (
      <RouterLink to="/#join" className={className} onClick={closeMenu}>
        Get Involved
      </RouterLink>
    );

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      {isHome ? (
        <ScrollLink to="home" smooth duration={600} className="navbar-logo" onClick={closeMenu}>
          <img src="/images/home/logo.png" alt="Science Olympiad at Georgia Tech" className="navbar-logo-img" />
          <span className="logo-text">SciOly @ GT</span>
        </ScrollLink>
      ) : (
        <RouterLink to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/images/home/logo.png" alt="Science Olympiad at Georgia Tech" className="navbar-logo-img" />
          <span className="logo-text">SciOly @ GT</span>
        </RouterLink>
      )}

      <ul className="navbar-links">
        {SCROLL_ITEMS.map(({ label, to }) => (
          <li key={to}>{renderNavLink(label, to)}</li>
        ))}
      </ul>

      {renderCta("navbar-cta")}

      <button
        type="button"
        className="navbar-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-nav-panel"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        id="mobile-nav-panel"
        className="navbar-mobile-panel"
        aria-hidden={!menuOpen}
        onClick={closeMenu}
      >
        <ul className="navbar-mobile-links" onClick={(event) => event.stopPropagation()}>
          {SCROLL_ITEMS.map(({ label, to }) => (
            <li key={to}>{renderNavLink(label, to, "navbar-mobile-link")}</li>
          ))}
          <li className="navbar-mobile-cta-item">{renderCta("navbar-mobile-cta")}</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
