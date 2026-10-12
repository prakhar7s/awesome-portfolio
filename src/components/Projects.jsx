import { PROJECTS } from "../utils/information";

const Projects = () => {
  return (
    <section className="section section--soft" id="projects">
      <div className="section__intro" data-aos="fade-up">
        <p className="section__eyebrow">Selected projects</p>
        <h2 className="section__title">Personal builds</h2>
        <p className="section__lead">
          Side projects where I owned the full loop — product idea, UI, API, and
          data.
        </p>
      </div>

      <div className="project-list">
        {PROJECTS.map((project, index) => (
          <article
            className="project-row"
            key={project.title}
            data-aos="fade-up"
            data-aos-delay={index * 70}
          >
            <div className="project-row__index">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="project-row__content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <p className="project-row__stack">{project.stack.join(" / ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
