import { useEffect, useState } from "react";
import { LINKS, PROFILE } from "../utils/information";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " nav--solid" : ""}`}>
      <a className="nav__brand" href="#top">
        {PROFILE.name.split(" ")[0]}
        <span>.</span>
      </a>
      <nav className="nav__links" aria-label="Primary">
        {SECTIONS.map((item) => (
          <a key={item.id} href={`#${item.id}`}>
            {item.label}
          </a>
        ))}
      </nav>
      <a
        className="nav__cta"
        href={LINKS.resume}
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
    </header>
  );
};

export default Nav;
