import { useState } from "react";
import { site } from "../data/site";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Publications", "#publications"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label={`${site.name}, home`}>
          {site.name}<span className="wordmark-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span><span></span>
        </button>
        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-resume" href={site.resumePath} onClick={closeMenu}>Resume <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
