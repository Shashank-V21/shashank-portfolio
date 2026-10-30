import SectionHeading from "../components/SectionHeading";

const interests = [
  { n: "01", title: "Computer vision & deep learning", topic: "EXPLORING", text: "Image and video analysis, face detection, feature extraction, and classification." },
  { n: "02", title: "Full-stack application development", topic: "BUILDING", text: "Developing web application fundamentals with JavaScript, React, Node.js, and APIs." },
  { n: "03", title: "Practical AI-powered applications", topic: "INTEREST", text: "Exploring how AI capabilities can be integrated into useful software experiences." },
];

export default function Notes() {
  return (
    <section className="section container" id="notes">
      <SectionHeading index="03" eyebrow="AREAS OF INTEREST" title="What I'm exploring." description="Topics that connect my project experience with the areas of software development I want to keep learning." />
      <div className="notes-list">
        {interests.map((item) => (
          <article className="note-row" key={item.n}>
            <span className="mono note-number">{item.n}</span>
            <div><span className="mono note-topic">{item.topic}</span><h3>{item.title}</h3><p>{item.text}</p></div>
            <span className="note-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
    </section>
  );
}
