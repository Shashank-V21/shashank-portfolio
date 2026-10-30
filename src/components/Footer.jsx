import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="wordmark" href="#top">{site.name}<span className="wordmark-dot">.</span></a>
        <p>Designed and built with care.</p>
        <div className="footer-links">
          <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          {site.email && <a href={`mailto:${site.email}`}>Email ↗</a>}
        </div>
        <span className="copyright">© {new Date().getFullYear()} {site.name}</span>
      </div>
    </footer>
  );
}
