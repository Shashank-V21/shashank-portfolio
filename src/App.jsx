import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Notes from "./sections/Notes";
import Publications from "./sections/Publications";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Education from "./sections/Education";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <Skills />
        <Education />
        <Publications />
        <Certifications />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
