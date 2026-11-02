const experiences = [
  {
    role: "Android App Development using Generative AI Intern",
    company: "MindMatrix.io",
    location: "Bengaluru, India",
    period: "Feb 2026 — May 2026",
    points: [
      "Worked on Android application development using Kotlin and Jetpack Compose, following standard Android development workflows.",
      "Explored Generative AI capabilities in application development using Google AI Studio and Google Cloud Labs.",
      "Gained hands-on experience with Android Studio, UI/UX design, prototyping, feature development, debugging, and iterative improvements.",
      "Practiced Firebase integration, application testing, and standard Android development practices.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-heading">
        <h2>Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-meta">
              <span className="mono">{experience.period}</span>
              <span className="mono">{experience.location}</span>
            </div>

            <div className="experience-content">
              <h3>{experience.role}</h3>
              <p className="experience-company">{experience.company}</p>

              <ul>
                {experience.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
