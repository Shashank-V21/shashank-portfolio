import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-topline">
        <span className="mono">PORTFOLIO <b>—</b> 2026</span>
        <span className="availability"><i></i>{site.availability}</span>
      </div>
      <div className="hero-grid">
        <div className="hero-main">
          <p className="eyebrow">Hello, I'm Shashank.</p>
          <h1>Building useful<br />things <span>through code.</span></h1>
          <p className="hero-copy">
            Aspiring full-stack developer with foundational knowledge of Python, Java, JavaScript, HTML, CSS, and SQL. Interested in software development, computer vision, and building practical technology solutions.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">Explore my work <span>↘</span></a>
            <a className="button button-quiet" href={site.resumePath} target="_blank" rel="noreferrer">View resume <span>↗</span></a>
          </div>
        </div>
        <aside className="hero-aside hero-profile">
          <img className="profile-photo" src={site.photoPath} alt="Professional portrait of Shashank V." />
          <span className="aside-label mono">A LITTLE ABOUT MY WORK</span>
          <p>I enjoy learning how systems work, exploring computer vision, and building practical applications through hands-on development.</p>
          <div className="aside-location"><span className="blue-square"></span>{site.location}</div>
        </aside>
      </div>
      <div className="hero-bottomline">
        <span className="mono">SOFTWARE DEVELOPMENT / FULL-STACK / COMPUTER VISION</span>
        <a href="#work" className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></a>
      </div>
    </section>
  );
}
