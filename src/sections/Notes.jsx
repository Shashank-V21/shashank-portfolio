import SectionHeading from "../components/SectionHeading";

export default function Notes() {
  return (
    <section className="section container" id="notes">
      <div className="section-heading">
        <span className="mono section-index"></span>

        <div className="interest-intro">
          <SectionHeading
            title="More than just code"
            description="I'm curious about building products, exploring entrepreneurship, and expressing ideas through content."
          />
        </div>
      </div>

      <div className="notes-list">
        <article className="note-row">
          <span className="mono note-number">01</span>

          <div>
            <span className="mono note-topic">ENTREPRENEURSHIP</span>
            <h3>Building something of my own</h3>
            <p>
              Interested in pursuing a startup journey, identifying meaningful
              problems, and turning ideas into practical products.
            </p>
          </div>

          <span className="note-arrow" aria-hidden="true">
            ↗
          </span>
        </article>

        <article className="note-row">
          <span className="mono note-number">02</span>

          <div>
            <span className="mono note-topic">CONTENT CREATION</span>
            <h3>YouTube</h3>
            <p>
              Interested in vlogs, digital content creation, and sharing ideas
              through video.
            </p>

            <a
              className="text-link"
              href="https://youtube.com/@shashank_diaries"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Shashank Diaries <span>↗</span>
            </a>
          </div>

          <span className="note-arrow" aria-hidden="true">
            ↗
          </span>
        </article>
      </div>
    </section>
  );
}
