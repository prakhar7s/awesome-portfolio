import { LINKS, PROFILE } from "../utils/information";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__panel" data-aos="fade-up">
        <p className="section__eyebrow">Contact</p>
        <h2 className="contact__title">Let’s build something sharp.</h2>
        <p className="contact__copy">
          Open to full-stack and product engineering roles where AI, cloud, and
          thoughtful UI meet real user problems.
        </p>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${PROFILE.email}`}>
            Email me
          </a>
          <a
            className="btn btn--ghost"
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="contact__meta">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <span>{PROFILE.phone}</span>
        </div>
      </div>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <div className="site-footer__links">
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={LINKS.leetcode} target="_blank" rel="noreferrer">
            LeetCode
          </a>
          <a href={LINKS.hackerrank} target="_blank" rel="noreferrer">
            HackerRank
          </a>
          <a href={LINKS.codechef} target="_blank" rel="noreferrer">
            CodeChef
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
