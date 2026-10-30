import SectionHeading from "../components/SectionHeading";

const skills = [
  ["LANGUAGES", "Java · Python · SQL · JavaScript · HTML · CSS"],
  ["FRAMEWORKS", "React (basics) · Node.js (basics)"],
  ["CLOUD & DELIVERY", "Google Cloud Platform · Git · GitHub Actions · CI/CD Pipelines · Code Documentation"],
  ["CORE", "Data Structures & Algorithms · OOP · DBMS · Operating Systems · Computer Networks"],
];

export default function About() {
  return (
    <section className="section section-tint" id="about">
      <div className="container">
        <SectionHeading index="02" eyebrow="ABOUT" title="Curious by nature. Builder by practice." description="I'm an aspiring full-stack developer interested in software development, computer vision, and building practical technology solutions." />
        <div className="about-grid">
          <div className="about-copy">
            <p className="large-copy">I believe the best way to understand technology is to build with it.</p>
            <p>My foundation includes programming, object-oriented concepts, databases, and core computer science subjects. Through projects, I've explored computer vision, deep learning, embedded interfaces, and product discovery.</p>
            <p>I'm looking for an entry-level opportunity where I can contribute, learn from a team, and continue growing as a software developer.</p>
          </div>
          <div className="skills-panel">
            <div className="panel-heading mono">TECHNICAL TOOLKIT</div>
            {skills.map(([label, value]) => (
              <div className="skill-row" key={label}>
                <span className="mono">{label}</span>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="experience-strip">
          <div className="mono">INTERNSHIP</div>
          <div>
            <h3>Android App Development using Generative AI Intern</h3>
            <p>MindMatrix.io <span>·</span> Bengaluru <span>·</span> Feb 2026 – May 2026</p>
            <ul className="experience-bullets">
              <li>Worked on Android application development using Kotlin and Jetpack Compose, following standard Android development workflows.</li>
              <li>Explored Generative AI capabilities with Android Studio, Google Cloud Labs, and Google AI Studio.</li>
              <li>Practiced UI/UX design, prototyping, feature development, debugging, iterative enhancements, Firebase integration, and application testing.</li>
            </ul>
          </div>
        </div>
        <div className="education-strip">
          <div className="mono">EDUCATION</div>
          <div className="education-list">
            <article>
              <div><h3>Bachelor of Engineering — Computer Science and Engineering</h3><p>Sai Vidya Institute of Technology · Dec 2023 – May 2026</p></div>
              <span className="education-score">CGPA 8</span>
            </article>
            <article>
              <div><h3>Diploma — Computer Science</h3><p>Government Polytechnic · Aug 2020 – May 2023</p></div>
              <span className="education-score">CGPA 7.9</span>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
