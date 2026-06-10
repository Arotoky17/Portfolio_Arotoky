import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollProgress from './components/ScrollProgress';
import SectionDivider from './components/SectionDivider';
import PageTransition from './components/ui/PageTransition';
import SectionReveal from './components/ui/SectionReveal';
import ParticlesBackground from './components/ui/ParticlesBackground';
import { ToastProvider } from './context/ToastContext';
import { PERSONAL_INFO } from './constants';

function App() {
  return (
    <ToastProvider>
      <div className="min-h-[100dvh] bg-ninja-bg text-ninja-text transition-colors duration-300 selection:bg-violet-500/30 selection:text-violet-900">
        <ScrollProgress />
        <ParticlesBackground />
        <AnimatePresence mode="wait">
          <PageTransition key="transition" />
        </AnimatePresence>
        <Navbar />

        <main className="relative z-10">
          <Hero />

          <SectionDivider />
          <SectionReveal>
            <About />
          </SectionReveal>

          <SectionDivider />
          <Projects />

          <SectionDivider />
          <SectionReveal>
            <Skills />
          </SectionReveal>

          <SectionDivider />
          <SectionReveal>
            <Contact />
          </SectionReveal>
        </main>

        <footer className="relative z-10 py-16 border-t border-ninja-border bg-ninja-card transition-colors duration-300">
          <div className="section-container text-center">
            <h2 className="text-4xl font-display font-black tracking-tighter mb-8">
              Arotoky <span className="text-violet-500">Andrianarivelo</span>
            </h2>
            <p className="text-ninja-muted mb-10 max-w-md mx-auto leading-relaxed text-lg font-medium">
              Merci de votre visite. Je suis actuellement à la recherche d'un stage ou d'une alternance pour 2026.
            </p>
            
            <div className="w-20 h-px bg-ninja-border mx-auto mb-10" />

            <p className="text-ninja-muted text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.firstName} {PERSONAL_INFO.name}.
            </p>
            
            <div className="flex justify-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-ninja-muted">
              <a href="#" className="hover:text-violet-500 transition-colors">
                Confidentialité
              </a>
              <a href="#" className="hover:text-violet-500 transition-colors">
                Mentions Légales
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ToastProvider>
  );
}

export default App;
