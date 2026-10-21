import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";
import SectionWrapper from "./components/SectionWrapper";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { PUBLICATIONS } from "./constants";
import { useParallax } from "./hooks/useParallax";

const App = () => {
  const [loading, setLoading] = useState(true);
  const offset = useParallax(0.05);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      <ScrollProgress />
      <Navbar />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <motion.div
        className="pointer-events-none absolute -top-24 right-20 h-40 w-40 rounded-full bg-accent-cyan/30 blur-3xl"
        style={{ transform: `translate3d(0, ${offset}px, 0)` }}
      />
      <motion.div
        className="pointer-events-none absolute left-8 top-1/3 h-56 w-56 rounded-full bg-primary/30 blur-3xl"
        style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
      />
      <main className="relative">
        <Hero />
        <SectionWrapper id="about">
          <About />
        </SectionWrapper>
        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>
        <SectionWrapper id="experience">
          <Experience />
        </SectionWrapper>
        <SectionWrapper id="projects">
          <Projects />
        </SectionWrapper>
        <SectionWrapper id="education">
          <Education />
        </SectionWrapper>
        <SectionWrapper id="certifications"><Certifications /></SectionWrapper>
        <SectionWrapper id="publications">
          <div className="section-shell">
            <h2 className="section-title mb-10 text-white md:mb-12">Publications</h2>
            {PUBLICATIONS.map((publication) => (
              <article key={publication.title} className="glass rounded-2xl border border-white/10 p-6 md:p-8">
                <h3 className="text-lg font-semibold text-white">{publication.title}</h3>
                <p className="mt-2 text-slate-300">{publication.publisher} ({publication.year})</p>
                <a href={publication.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-full bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400">View Publication</a>
              </article>
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper id="contact">
          <Contact />
        </SectionWrapper>
        <Footer />
      </main>
    </div>
  );
};

export default App;
