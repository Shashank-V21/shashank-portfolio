import SectionHeading from "../components/SectionHeading";

const skills = [
  {
    label: "LANGUAGES",
    number: "01",
    items: ["Java", "Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "FRAMEWORKS",
    number: "02",
    items: ["React (Basics)", "Node.js (Basics)"],
  },
  {
    label: "CLOUD & DELIVERY",
    number: "03",
    items: [
      "Google Cloud Platform",
      "Git",
      "GitHub Actions",
      "CI/CD Pipelines",
      "Code Documentation",
    ],
  },
  {
    label: "CORE FUNDAMENTALS",
    number: "04",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading
          title="Technologies I work with."
          description="A growing toolkit of programming languages, development technologies, tools, and computer science fundamentals."
        />

        <div className="skills-grid">
          {skills.map((skill) => (
            <article className="skills-card" key={skill.label}>
              <div className="skills-card-top">
                <span className="mono">{skill.number}</span>
                <span className="mono">{skill.label}</span>
              </div>

              <div className="skills-tags">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
