import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import About from "./sections/About";
import Notes from "./sections/Notes";
import Publications from "./sections/Publications";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";

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
        <About />
        <Notes />
        <Publications />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
