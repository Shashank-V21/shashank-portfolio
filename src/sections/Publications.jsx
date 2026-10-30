import SectionHeading from "../components/SectionHeading";

const publications = [
  {
    number: "01",
    journal: "TIJER Publication",
    date: "JUNE 2023",
    title: "AI Smart Mirror Using Raspberry Pi 3B+",
    authors: "Manju Shree Yadav D, Purushotham K, Shashank V, Gowrish HB, Pallavi HS, Srinivasappa KV",
    citation: "TIJER — International Research Journal · Volume 10, Issue 6 · ISSN 2349-9249",
    summary: "Describes a smart mirror built around Raspberry Pi 3B+, combining a display, camera, sensors, voice interaction, facial recognition, and motion detection to provide personalized information and assistance.",
    href: "/papers/ai-smart-mirror-research-paper.pdf",
    label: "Download research paper",
  },
  {
    number: "02",
    journal: "IRJMETS Publication",
    date: "JANUARY 2026",
    title: "Price Vision AI: Multimodal Product Search and Cross-E-Commerce Real-Time Bargain Comparison System",
    authors: "Dr. Shashikumar D R, Prof. Sunil Kumar B, Shashank V, Sanjay KR, Sanjay P, Vikas Gowda GN",
    citation: "International Research Journal of Modernization in Engineering Technology and Science · Volume 08, Issue 01 · e-ISSN 2582-5208",
    summary: "Presents an AI-powered approach to image-based product identification and cross-marketplace comparison, considering price, delivery time, and seller rating. The paper describes CLIP/BLIP, Playwright, FastAPI, React, Redis, and PostgreSQL.",
    href: "/papers/price-vision-ai-research-paper.pdf",
    label: "Download research paper",
  },
];

export default function Publications() {
  return (
    <section className="section container" id="publications">
      <SectionHeading index="04" eyebrow="RESEARCH & PUBLICATIONS" title="Research contributions." description="Two co-authored research papers featuring project work in embedded systems, computer vision, and AI-powered product discovery." />
      <div className="publication-list">
        {publications.map((paper) => (
          <article className="publication-card" key={paper.number}>
            <div className="publication-icon" aria-hidden="true">↗</div>
            <div className="publication-body">
              <div className="publication-meta"><span>{paper.journal}</span><span>{paper.date}</span></div>
              <h3>{paper.title}</h3>
              <p className="publication-authors">Authors: {paper.authors}</p>
              <p className="publication-citation">{paper.citation}</p>
              <p className="publication-summary">{paper.summary}</p>
              <a className="text-link" href={paper.href} target="_blank" rel="noreferrer">{paper.label} <span>↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
