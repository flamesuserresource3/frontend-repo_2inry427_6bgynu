import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-white">
      {/* Simple Top Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-white/90 hover:text-white transition">Christopher Mesaya</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500/90 hover:bg-blue-500 text-white px-4 py-2 transition shadow shadow-blue-500/20"
            >
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Christopher Mesaya. All rights reserved.</p>
          <p className="text-white/50">Made with React, Tailwind, and a love for great design.</p>
        </div>
      </footer>
    </div>
  );
}
