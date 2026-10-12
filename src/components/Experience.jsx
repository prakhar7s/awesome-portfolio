import { EXPERIENCE } from "../utils/information";

const Experience = () => {
  return (
    <section className="section" id="work">
      <div className="section__intro" data-aos="fade-up">
        <p className="section__eyebrow">Experience</p>
        <h2 className="section__title">Work that shipped</h2>
        <p className="section__lead">
          From healthcare audit platforms to AI prompt tooling and monitoring
          products — building reliable interfaces and the services behind them.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCE.map((job, index) => (
          <article
            className="timeline__item"
            key={`${job.company}-${job.period}`}
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <div className="timeline__meta">
              <p className="timeline__period">{job.period}</p>
              <h3 className="timeline__company">{job.company}</h3>
              <p className="timeline__role">{job.role}</p>
            </div>

            <div className="timeline__body">
              {job.projects.map((project) => (
                <div className="work-block" key={project.title}>
                  <div className="work-block__head">
                    <h4>{project.title}</h4>
                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-link"
                      >
                        View live
                      </a>
                    )}
                  </div>
                  <p>{project.summary}</p>
                  <ul>
                    {project.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <p className="work-block__skills">
                    {project.skills.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
