import { site } from "../data/site";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <div className="contact-left">
          <span className="mono contact-kicker">06 / GET IN TOUCH</span>

          <h2>
            Let's build
            <br />
            something
            <br />
            <span>meaningful.</span>
          </h2>

          <p>
            I'm open to entry-level software development opportunities,
            connecting with developers, and collaborating on practical
            technology projects.
          </p>

          <div className="contact-availability">
            <span className="availability-dot"></span>
            Open to opportunities
          </div>
        </div>

        <div className="contact-right">
          <a
            className="contact-card"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=shashank.v0074@gmail.com&su=Portfolio%20Enquiry"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-card-top">
              <span className="mono">01 / EMAIL</span>
              <span className="contact-arrow">↗</span>
            </div>

            <div>
              <h3>Let's talk.</h3>
              <p>{site.email}</p>
            </div>
          </a>

          <a
            className="contact-card"
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-card-top">
              <span className="mono">02 / LINKEDIN</span>
              <span className="contact-arrow">↗</span>
            </div>

            <div>
              <h3>Connect with me.</h3>
              <p>Find me on LinkedIn</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
