import { site } from "../data/site";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div className="mono contact-kicker">06 / GET IN TOUCH</div>
        <div className="contact-content">
          <h2>Have a good<br />problem to solve<span>?</span></h2>
          <p>I'm open to connecting with recruiters, developers, and teams working on thoughtful software.</p>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${site.email}`}>Email me <span>↗</span></a>
            <a className="contact-social" href={site.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
            <a className="contact-social" href={`tel:${site.phone.replace(/\s/g, "")}`}>Call {site.phone} ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
