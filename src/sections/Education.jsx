import SectionHeading from "../components/SectionHeading";

const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    institution: "Sai Vidya Institute of Technology",
    duration: "Dec 2023 – May 2026",
    score: "CGPA 8",
    number: "01",
  },
  {
    degree: "Diploma",
    field: "Computer Science",
    institution: "Government Polytechnic",
    duration: "Aug 2020 – May 2023",
    score: "CGPA 7.9",
    number: "02",
  },
];

export default function Education() {
  return (
    <section className="section section-tint" id="education">
      <div className="container">
        <SectionHeading
          title="Education"
          description="My academic journey and the foundation behind my interest in software development."
        />

        <div className="education-list">
          {education.map((item) => (
            <article className="education-card" key={item.number}>
              <span className="education-number mono">{item.number}</span>

              <div className="education-details">
                <h3>
                  {item.degree} — {item.field}
                </h3>
                <p>{item.institution}</p>
                <span className="education-duration mono">{item.duration}</span>
              </div>

              <span className="education-score">{item.score}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
