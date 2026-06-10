import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { PERSONAL_INFO } from '../constants';

const NAV_LINKS = [
  { id: "home", label: "ACCUEIL" },
  { id: "about", label: "À PROPOS" },
  { id: "projects", label: "PROJETS" },
  { id: "skills", label: "COMPÉTENCES" },
  { id: "contact", label: "CONTACT" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

        .nb-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          font-family: 'Syne', sans-serif;
        }

        /* ── Aurora top bar ── */
        .nb-aurora-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            #7c3aed 20%,
            #a855f7 40%,
            #e879f9 55%,
            #06b6d4 70%,
            #7c3aed 85%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: aurora-slide 3s linear infinite;
          z-index: 10;
        }

        @keyframes aurora-slide {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }

        /* Halo glow under the aurora bar */
        .nb-aurora-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 12px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(168, 85, 247, 0.25),
            rgba(232, 121, 249, 0.2),
            rgba(6, 182, 212, 0.2),
            transparent
          );
          background-size: 200% 100%;
          animation: aurora-slide 3s linear infinite;
          filter: blur(4px);
        }

        /* ── Main bar ── */
        .nb-bar {
          display: flex;
          align-items: center;
          padding: 0 2rem;
          height: 64px;
          background: rgba(5, 5, 20, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .nb-root.light .nb-bar {
          background: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .nb-bar.scrolled {
          background: rgba(5, 5, 20, 0.88);
          border-bottom-color: rgba(168, 85, 247, 0.15);
        }

        .nb-root.light .nb-bar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          border-bottom-color: rgba(168, 85, 247, 0.25);
        }

        /* ── Logo ── */
        .nb-logo {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-decoration: none;
          margin-right: 2rem;
          flex-shrink: 0;
          cursor: pointer;
        }

        .nb-logo-main {
          font-size: 17px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: 0.02em;
          transition: color 0.3s ease;
        }

        .nb-root.light .nb-logo-main {
          color: #111827;
        }

        .nb-logo-main span {
          background: linear-gradient(90deg, #a855f7, #e879f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nb-logo-sub {
          font-size: 9px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.3);
          letter-spacing: 0.12em;
          font-family: 'DM Mono', monospace;
          margin-top: 2px;
          transition: color 0.3s ease;
        }

        .nb-root.light .nb-logo-sub {
          color: rgba(0, 0, 0, 0.4);
        }

        /* ── Divider ── */
        .nb-divider {
          width: 1px;
          height: 22px;
          background: rgba(255, 255, 255, 0.1);
          margin-right: 1.5rem;
          flex-shrink: 0;
          transition: background 0.3s ease;
        }

        .nb-root.light .nb-divider {
          background: rgba(0, 0, 0, 0.1);
        }

        /* ── Nav links ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 2px;
          flex: 1;
        }

        .nb-link {
          position: relative;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.42);
          padding: 6px 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: color 0.2s ease, background 0.2s ease;
          border: none;
          background: transparent;
          font-family: 'Syne', sans-serif;
          white-space: nowrap;
        }

        .nb-root.light .nb-link {
          color: rgba(0, 0, 0, 0.5);
        }

        .nb-link:hover {
          color: rgba(255, 255, 255, 0.75);
        }

        .nb-root.light .nb-link:hover {
          color: rgba(0, 0, 0, 0.85);
        }

        .nb-link.active {
          color: #ffffff;
        }

        .nb-root.light .nb-link.active {
          color: #111827;
        }

        /* Aurora underline on active link */
        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 14px;
          right: 14px;
          height: 2px;
          background: linear-gradient(90deg, #7c3aed, #e879f9, #06b6d4);
          border-radius: 2px;
          animation: aurora-underline 2s linear infinite;
          background-size: 200% 100%;
        }

        @keyframes aurora-underline {
          0%   { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        /* Hover underline */
        .nb-link:not(.active)::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 14px;
          right: 14px;
          height: 1px;
          background: rgba(168, 85, 247, 0.4);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s ease;
        }

        .nb-link:not(.active):hover::after {
          transform: scaleX(1);
        }

        /* ── Right section ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-left: auto;
          flex-shrink: 0;
        }

        /* Dark mode toggle */
        .nb-toggle {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, border-color 0.2s ease, color 0.3s ease;
          color: rgba(255, 255, 255, 0.55);
          font-size: 16px;
        }

        .nb-root.light .nb-toggle {
          background: rgba(0, 0, 0, 0.04);
          border-color: rgba(0, 0, 0, 0.08);
          color: rgba(0, 0, 0, 0.6);
        }

        .nb-toggle:hover {
          background: rgba(168, 85, 247, 0.12);
          border-color: rgba(168, 85, 247, 0.3);
          color: #a855f7;
        }

        .nb-root.light .nb-toggle:hover {
          background: rgba(168, 85, 247, 0.1);
          border-color: rgba(168, 85, 247, 0.3);
          color: #7c3aed;
        }

        /* CV button */
        .nb-cv {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #ffffff;
          background: linear-gradient(135deg, #6d28d9 0%, #a855f7 100%);
          border: none;
          border-radius: 24px;
          padding: 8px 20px;
          cursor: pointer;
          font-family: 'Syne', sans-serif;
          transition: transform 0.2s ease, filter 0.2s ease;
          position: relative;
          overflow: hidden;
          text-decoration: none;
        }

        .nb-cv::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }

        .nb-cv:hover {
          transform: scale(1.04);
          filter: brightness(1.15);
          color: #fff;
        }

        .nb-cv:hover::before {
          transform: translateX(100%);
        }

        .nb-cv svg {
          width: 13px;
          height: 13px;
          stroke: currentColor;
          fill: none;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* ── Availability badge ── */
        .nb-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(168, 85, 247, 0.85);
          border: 1px solid rgba(168, 85, 247, 0.25);
          border-radius: 20px;
          padding: 5px 14px 5px 10px;
          background: rgba(124, 58, 237, 0.07);
          font-family: 'DM Mono', monospace;
          white-space: nowrap;
        }

        .nb-root.light .nb-badge {
          color: rgba(124, 58, 237, 0.95);
          border-color: rgba(168, 85, 247, 0.4);
          background: rgba(124, 58, 237, 0.1);
        }

        .nb-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #a855f7;
          box-shadow: 0 0 6px rgba(168, 85, 247, 0.8);
          animation: dot-pulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes dot-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }

        /* ── Mobile hamburger ── */
        .nb-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 6px;
          background: transparent;
          border: none;
          margin-left: 8px;
        }

        .nb-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .nb-root.light .nb-hamburger span {
          background: rgba(0,0,0,0.7);
        }

        .nb-hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .nb-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .nb-hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ── Mobile menu ── */
        .nb-mobile-menu {
          display: none;
          flex-direction: column;
          padding: 12px 1.5rem 20px;
          background: rgba(5, 5, 20, 0.97);
          border-bottom: 1px solid rgba(168, 85, 247, 0.15);
          gap: 2px;
        }

        .nb-root.light .nb-mobile-menu {
          background: rgba(255, 255, 255, 0.97);
          border-bottom: 1px solid rgba(168, 85, 247, 0.3);
        }

        .nb-mobile-menu.open {
          display: flex;
        }

        .nb-mobile-link {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.5);
          padding: 10px 12px;
          border-radius: 8px;
          cursor: pointer;
          border: none;
          background: transparent;
          text-align: left;
          font-family: 'Syne', sans-serif;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .nb-root.light .nb-mobile-link {
          color: rgba(0, 0, 0, 0.6);
        }

        .nb-mobile-link:hover,
        .nb-mobile-link.active {
          color: #ffffff;
          background: rgba(124, 58, 237, 0.15);
        }

        .nb-root.light .nb-mobile-link:hover,
        .nb-root.light .nb-mobile-link.active {
          color: #111827;
          background: rgba(124, 58, 237, 0.1);
        }

        .nb-mobile-link.active {
          border-left: 2px solid #a855f7;
          padding-left: 10px;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .nb-links,
          .nb-divider,
          .nb-toggle {
            display: none;
          }

          .nb-hamburger {
            display: flex;
          }

          .nb-bar {
            padding: 0 1.25rem;
          }

          .nb-badge {
            font-size: 9px;
            padding: 4px 10px 4px 8px;
          }
        }

        @media (max-width: 480px) {
          .nb-badge {
            display: none;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .nb-aurora-bar,
          .nb-aurora-bar::after,
          .nb-link.active::after,
          .nb-badge-dot {
            animation: none;
          }
        }
      `}</style>

      <nav className={`nb-root ${!isDarkMode ? 'light' : ''}`} role="navigation" aria-label="Navigation principale">
        {/* Aurora top bar */}
        <div className="nb-aurora-bar" aria-hidden="true" />

        {/* Main bar */}
        <div className={`nb-bar${scrolled ? " scrolled" : ""}`}>
          {/* Logo */}
          <Link to="home" smooth={true} className="nb-logo" aria-label="Arotoky Andrianarivelo — accueil">
            <span className="nb-logo-main">
              Aro<span>toky</span>
            </span>
            <span className="nb-logo-sub">Andrianarivelo</span>
          </Link>

          {/* Divider */}
          <div className="nb-divider" aria-hidden="true" />

          {/* Desktop nav links */}
          <div className="nb-links" role="list">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth={true}
                offset={-80}
                spy={true}
                onSetActive={() => setActive(link.id)}
                role="listitem"
                className={`nb-link${active === link.id ? " active" : ""}`}
                onClick={() => setActive(link.id)}
                aria-current={active === link.id ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right section */}
          <div className="nb-right">
            {/* Availability badge */}
            <div className="nb-badge" aria-label="Disponible pour stage ou alternance">
              <span className="nb-badge-dot" aria-hidden="true" />
              DISPO STAGE / ALT
            </div>

            {/* Dark/light toggle */}
            <button
              className="nb-toggle"
              onClick={toggleTheme}
              aria-label={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
            >
              {!isDarkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              )}
            </button>

            {/* CV button */}
            <a href={PERSONAL_INFO.cvUrl} download className="nb-cv" aria-label="Télécharger mon CV">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              CV
            </a>

            {/* Hamburger (mobile) */}
            <button
              className={`nb-hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`nb-mobile-menu${menuOpen ? " open" : ""}`} role="list">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              smooth={true}
              offset={-80}
              spy={true}
              onSetActive={() => setActive(link.id)}
              role="listitem"
              className={`nb-mobile-link${active === link.id ? " active" : ""}`}
              onClick={() => {
                setActive(link.id);
                setMenuOpen(false);
              }}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Spacer to push content below fixed navbar */}
      <div style={{ height: "64px" }} aria-hidden="true" />
    </>
  );
}
