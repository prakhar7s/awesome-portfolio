import { LINKS } from "../utils/information";

const Resume = () => {
  return (
    <section className="section section--soft" id="resume">
      <div className="section__intro" data-aos="fade-up">
        <p className="section__eyebrow">Resume</p>
        <h2 className="section__title">Full experience at a glance</h2>
        <p className="section__lead">
          Read the latest version here, or open it in a new tab if you prefer.
        </p>
        <a
          className="text-link resume__open"
          href={LINKS.resume}
          target="_blank"
          rel="noreferrer"
        >
          Open resume
        </a>
      </div>

      <div className="resume-frame" data-aos="fade-up" data-aos-delay="80">
        <iframe
          title="Prakhar Shrivastava resume"
          src={LINKS.resumeEmbed}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Resume;
