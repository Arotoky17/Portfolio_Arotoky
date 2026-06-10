import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { User, Terminal, Database } from 'lucide-react';
import imageA from '../imageA.jpeg';


const About = () => {
  return (
    <section id="about" className="py-8 relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* ── Left text ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border-2 border-violet-500/20 shadow-lg shadow-violet-500/10 flex items-center justify-center text-violet-500">
                <User size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-ninja-text">À propos de moi</h2>
            </div>

            <p className="text-lg text-ninja-muted mb-6 leading-relaxed">
              Basé à{' '}
              <span className="text-ninja-text font-bold">{PERSONAL_INFO.location}</span>,
              je suis étudiant en{' '}
              <span className="text-ninja-text font-bold text-violet-500">Licence 3 Génie Logiciel</span>,
              passionné par le développement web et la résolution de problèmes concrets
              à travers le code.
            </p>

            <p className="text-lg text-ninja-muted mb-8 leading-relaxed">
              Sans expérience professionnelle formelle, j'ai choisi d'apprendre en{' '}
              <span className="text-ninja-text font-bold">construisant</span> — plus de{' '}
              <span className="text-ninja-text font-bold">5 projets fullstack</span> réels
              dans l'écosystème JavaScript, de la base de données à l'interface utilisateur.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-ninja-card/40 border border-ninja-border hover:border-violet-500/30 transition-all group shadow-premium">
                <Terminal className="text-violet-500 mb-3 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-ninja-text font-bold mb-1">Projets concrets</h4>
                <p className="text-sm text-ninja-muted">Des apps fullstack réelles, pas seulement des tutoriels.</p>
              </div>
              <div className="p-6 rounded-2xl bg-ninja-card/40 border border-ninja-border hover:border-indigo-500/30 transition-all group shadow-premium">
                <Database className="text-indigo-500 mb-3 group-hover:scale-110 transition-transform" size={24} />
                <h4 className="text-ninja-text font-bold mb-1">Apprentissage continu</h4>
                <p className="text-sm text-ninja-muted">Curieux, autodidacte, toujours en train d'explorer de nouvelles technos.</p>
              </div>
            </div>
          </motion.div>

          {/* ── Right skill bars ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-ninja-border shadow-2xl aspect-[4/5] max-w-[360px] mx-auto group bg-ninja-card/50" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}>
              <img 
                src={imageA} 
                alt="Portrait" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity opacity-80 group-hover:opacity-100 group-hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ninja-bg via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
