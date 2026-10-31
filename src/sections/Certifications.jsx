import SectionHeading from "../components/SectionHeading";

const certifications = [
  {
    number: "01",
    title:
      "IoT (Internet of Things) Wireless & Cloud Computing Emerging Technologies",
    issuer: "Coursera",
    date: "DECEMBER 2025",
    credential: "GZ4B1O6OI9X6",
    href: "https://www.coursera.org/account/accomplishments/records/GZ4B1O6OI9X6",
  },
  {
    number: "02",
    title: "Deloitte Australia — Data Analytics Job Simulation",
    issuer: "Forage",
    date: "APRIL 2025",
    credential: "THafEm4tSvCvkHhGJ",
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_y57YCteuwDSpkB64m_1744474915134_completion_certificate.pdf",
  },
  {
    number: "03",
    title: "Power BI",
    issuer: "United Latino Students Association",
    date: "APRIL 2025",
    credential: "27",
    href: "https://certx.in/certificate/4d173e82-3861-47b4-ab33-09d1da812849286064",
  },
];

export default function Certifications() {
  return (
    <section className="section section-tint" id="certifications">
      <div className="container">
        <SectionHeading
          title="Certifications"
          description="Credentials and job-simulation experience shared on my professional profile."
        />
        <div className="certification-list">
          {certifications.map((item) => (
            <article className="certification-card" key={item.number}>
              <span className="certification-number mono">{item.number}</span>
              <div className="certification-main">
                <h3>{item.title}</h3>
                <p>
                  {item.issuer} <span>·</span> {item.date}
                </p>
                <span className="credential-id mono">
                  CREDENTIAL ID — {item.credential}
                </span>
              </div>
              <a
                className="button button-quiet certification-link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                View credential <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
