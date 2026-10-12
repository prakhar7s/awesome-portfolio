import { ACHIEVEMENTS, EDUCATION, SKILLS } from "../utils/information";

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="section__intro" data-aos="fade-up">
        <p className="section__eyebrow">Capabilities</p>
        <h2 className="section__title">Skills & foundation</h2>
        <p className="section__lead">
          A practical stack for product engineering — frontend systems, APIs,
          data stores, cloud, and AI-assisted workflows.
        </p>
      </div>

      <div className="skills-grid">
        {SKILLS.map((group, index) => (
          <div
            className="skill-group"
            key={group.group}
            data-aos="fade-up"
            data-aos-delay={index * 50}
          >
            <h3>{group.group}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="foundation" data-aos="fade-up">
        <div>
          <p className="section__eyebrow">Education</p>
          <h3>{EDUCATION.degree}</h3>
          <p>
            {EDUCATION.school} · {EDUCATION.location}
          </p>
          <p>
            {EDUCATION.period} · CGPA {EDUCATION.cgpa}
          </p>
          <p className="foundation__coursework">
            {EDUCATION.coursework.join(" · ")}
          </p>
        </div>
        <div>
          <p className="section__eyebrow">Highlights</p>
          <ul className="achievement-list">
            {ACHIEVEMENTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
