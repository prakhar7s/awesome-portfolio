import { LINKS, PROFILE } from "../utils/information";

const Hero = () => {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__media" aria-hidden="true">
        <span className="hero__orb hero__orb--a" />
        <span className="hero__orb hero__orb--b" />
        <span className="hero__orb hero__orb--c" />
        <span className="hero__grid" />
        <span className="hero__glow" />
      </div>
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="hero__brand" data-aos="fade-up">
          {PROFILE.name}
        </p>
        <h1 className="hero__headline" data-aos="fade-up" data-aos-delay="80">
          {PROFILE.tagline}
        </h1>
        <p className="hero__support" data-aos="fade-up" data-aos-delay="140">
          Full Stack Engineer focused on React, TypeScript, Python/FastAPI, and
          AWS — shipping AI workflows, dashboards, and products people rely on.
        </p>
        <div className="hero__actions" data-aos="fade-up" data-aos-delay="200">
          <a className="btn btn--primary" href="#work">
            See selected work
          </a>
          <a
            className="btn btn--ghost"
            href={LINKS.resume}
            target="_blank"
            rel="noreferrer"
          >
            View resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
