import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-topline"></div>

      <div className="hero-grid">
        <div className="hero-main">
          <p className="eyebrow">Hello, I'm Shashank.</p>

          <h1>
            Building useful
            <br />
            things <span>through code.</span>
          </h1>

          <p className="hero-copy">
            Aspiring full stack developer with foundational knowledge of Python,
            Java, JavaScript, HTML, CSS, and SQL. Familiar with object-oriented
            programming and Git/GitHub for version control. Interested in
            software development, computer vision, and building practical
            technology solutions.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my Projects <span>↘</span>
            </a>

            <a
              className="button button-quiet"
              href={site.resumePath}
              target="_blank"
              rel="noreferrer"
            >
              View resume <span>↗</span>
            </a>
          </div>
        </div>

        <aside className="hero-aside hero-profile">
          <div className="profile-wrapper">
            <div className="open-to-work">
              <span className="open-work-dot"></span>
              {site.availability}
            </div>

            <img
              className="profile-photo"
              src={site.photoPath}
              alt="Professional portrait of Shashank V."
            />
          </div>
        </aside>
      </div>
    </section>
  );
}
