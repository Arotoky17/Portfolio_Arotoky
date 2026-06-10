import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTypewriter } from '../hooks/useTypewriter';
import SectionReveal from './ui/SectionReveal';
import Magnetic from './ui/Magnetic';

/* ─── Data ──────────────────────────────────────────────────── */

const ROLES = [
  'Développeur Web & Mobile',
  'Développeur React & React Native',
  'Passionné de DevOps',
  "Créateur d'applications modernes",
];

const STATS = [
  { value: 12,  label: 'Projets réalisés', suffix: '+' },
  { value: 8,   label: 'Technologies maîtrisées', suffix: '+' },
  { value: 1,   label: "Année d'expérience", suffix: '+' },
];

const CODE_LINES = [
  [
    { t: 'const ',     c: 'text-violet-400' },
    { t: 'developer',  c: 'text-white' },
    { t: ' = {',       c: 'text-white/60' },
  ],
  [
    { t: '  name',                  c: 'text-violet-300' },
    { t: ': ',                      c: 'text-white/60' },
    { t: "'Arotoky Andrianarivelo'", c: 'text-amber-200' },
    { t: ',',                       c: 'text-white/60' },
  ],
  [
    { t: '  role',              c: 'text-violet-300' },
    { t: ': ',                  c: 'text-white/60' },
    { t: "'Étudiant L3 / Dev'", c: 'text-amber-200' },
    { t: ',',                   c: 'text-white/60' },
  ],
  [
    { t: '  niveau',        c: 'text-violet-300' },
    { t: ': ',                  c: 'text-white/60' },
    { t: "'Génie Logiciel'", c: 'text-amber-200' },
    { t: ',',               c: 'text-white/60' },
  ],
  [
    { t: '  location',      c: 'text-violet-300' },
    { t: ': ',              c: 'text-white/60' },
    { t: "'Madagascar'",    c: 'text-amber-200' },
    { t: ',',               c: 'text-white/60' },
  ],
  [
    { t: '  skills', c: 'text-violet-300' },
    { t: ': [',      c: 'text-white/60' },
  ],
  [
    { t: "    'React'",  c: 'text-sky-300' },
    { t: ', ',           c: 'text-white/60' },
    { t: "'Node.js'",    c: 'text-emerald-300' },
    { t: ',',            c: 'text-white/60' },
  ],
  [
    { t: "    'PostgreSQL'", c: 'text-indigo-300' },
    { t: ', ',               c: 'text-white/60' },
    { t: "'Git'",            c: 'text-orange-300' },
  ],
  [{ t: '  ],',        c: 'text-white/60' }],
  [
    { t: '  openTo', c: 'text-violet-300' },
    { t: ': ',       c: 'text-white/60' },
    { t: "'stage / alternance'", c: 'text-violet-400' },
  ],
  [{ t: '};', c: 'text-white/60' }],
];

/* ─── Framer variants ─────────────────────────────────────────── */

const codeContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.9 } },
};

const codeLineVariants = {
  hidden:   { opacity: 0, x: -10 },
  visible:  { opacity: 1, x: 0,    transition: { duration: 0.28 } },
};

/* ─── Component ──────────────────────────────────────────────── */

const Hero = () => {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700" />

      <div className="section-container relative z-10 py-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left ─────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-5">
            <SectionReveal direction="left">
              {/* Name */}
              <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3.5rem] font-display font-extrabold text-ninja-text leading-[1.1] tracking-tighter mb-6 whitespace-nowrap" style={{ fontFamily: '"Outfit", "Inter", sans-serif' }}>
                <span className="block opacity-70 pb-2">{PERSONAL_INFO.firstName}</span>
                <span className="text-gradient animate-shimmer bg-[length:200%_auto] block text-glow pb-2">{PERSONAL_INFO.name}</span>
              </h1>

              <div className="w-12 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 mb-8" />

              {/* Typewriter role */}
              <div className="h-10 mb-10 flex items-center">
                <p className="text-xl md:text-2xl text-ninja-muted font-medium font-mono tracking-tight" style={{ fontFamily: '"DM Mono", monospace' }}>
                  <span className="text-violet-500 mr-3 opacity-50">$</span>
                  {role}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                    className="inline-block ml-1 text-violet-500 font-bold"
                  >
                    _
                  </motion.span>
                </p>
              </div>

              {/* Description */}
              <p className="text-xl text-ninja-muted mb-12 max-w-lg leading-relaxed font-medium">
                Développeur Web & Mobile passionné, je crée des applications modernes, performantes et intuitives, du frontend au backend.
              </p>

              {/* Stats */}
              <div className="flex items-stretch gap-0 mb-12 w-fit border border-ninja-border rounded-[2rem] overflow-hidden shadow-premium bg-ninja-card/20 backdrop-blur-sm">
                {STATS.map((stat, idx) => (
                  <div key={stat.label} className={`flex flex-col items-center justify-center px-10 py-6 ${idx !== STATS.length - 1 ? 'border-r border-ninja-border' : ''}`}>
                    <p className="text-4xl font-display font-extrabold text-violet-500 leading-none">
                      <span>{stat.value}{stat.suffix}</span>
                    </p>
                    <p className="text-[10px] text-ninja-muted uppercase tracking-[0.25em] font-bold mt-3 whitespace-nowrap">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-6">
                <Magnetic>
                  <Link to="projects" smooth={true} offset={-80}>
                    <button className="btn-primary group h-16 px-12 text-lg">
                      Voir mes projets
                      <ArrowRight size={22} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link to="contact" smooth={true} offset={-80}>
                    <button className="btn-outline h-16 px-12 text-lg">
                      Me contacter
                    </button>
                  </Link>
                </Magnetic>
              </div>
            </SectionReveal>
          </div>

          {/* ── Right – Code Block ────────────────────────────── */}
          <SectionReveal direction="right" delay={0.3} className="hidden lg:block lg:col-span-5 xl:col-span-5 xl:col-start-8 lg:translate-x-16 xl:translate-x-24">
            <div className="relative scale-90 lg:scale-95 xl:scale-100 origin-right">
              {/* Code editor card */}
              <motion.div whileHover={{ scale: 1.02 }} className="relative z-10 bg-slate-950 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">

                {/* Window chrome */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-violet-500/40 border border-violet-500/20" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-500/20" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-500/20" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-white/30 font-mono tracking-[0.3em] uppercase font-bold">portfolio.tsx</span>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Code lines */}
                <div className="p-5 lg:p-6 font-mono text-xs lg:text-sm leading-7 lg:leading-8 select-none bg-gradient-to-br from-slate-950 to-slate-900">
                  <motion.div
                    variants={codeContainerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {CODE_LINES.map((tokens, lineIdx) => (
                      <motion.div
                        key={lineIdx}
                        variants={codeLineVariants}
                        className="flex items-center"
                      >
                        <span className="w-8 text-white/10 text-right mr-8 text-xs font-bold">
                          {lineIdx + 1}
                        </span>
                        <span>
                          {tokens.map((tok, tokIdx) => (
                            <span key={tokIdx} className={tok.c}>
                              {tok.t}
                            </span>
                          ))}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

                {/* Floating avatar */}
              <Magnetic strength={0.5}>
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-12 -left-12 z-20 px-2 py-2 bg-ninja-card/80 border border-violet-500/10 rounded-full shadow-2xl backdrop-blur-xl"
                >
                  <img src="/src/assets/hero.png" alt="avatar" className="w-20 h-20 rounded-full object-cover border-2 border-violet-500 shadow-sm" />
                </motion.div>
              </Magnetic>

              {/* Floating elements */}
              <Magnetic strength={0.4}>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-10 -right-10 z-20 px-6 py-4 bg-ninja-card border border-violet-500/20 rounded-[2rem] shadow-2xl backdrop-blur-xl"
                >
                  <div className="text-violet-500 font-display font-extrabold text-sm flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-violet-500 animate-pulse shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                    React Native
                  </div>
                </motion.div>
              </Magnetic>

              <Magnetic strength={0.4}>
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-10 -left-10 z-20 px-6 py-4 bg-ninja-card border border-indigo-500/20 rounded-[2rem] shadow-2xl backdrop-blur-xl"
                >
                  <div className="text-indigo-400 font-display font-extrabold text-sm flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_10px_rgba(129,140,248,0.5)]" />
                    Fullstack Dev
                  </div>
                </motion.div>
              </Magnetic>

              {/* Background rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border border-violet-500/5 rounded-full -z-10 animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-indigo-500/5 rounded-full -z-10 animate-[spin_90s_linear_infinite_reverse]" />
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Scroll down indicator */}
      <SectionReveal delay={2}>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <Link
            to="about"
            smooth={true}
            offset={-80}
            className="group cursor-pointer flex flex-col items-center gap-4"
          >
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-ninja-muted group-hover:text-violet-500 transition-all duration-500">Explorer</span>
            <div className="w-8 h-14 border-2 border-ninja-border rounded-full flex justify-center p-2 group-hover:border-violet-500 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] transition-all duration-500">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-2 bg-violet-500 rounded-full shadow-[0_0_8px_rgba(124,58,237,0.8)]"
              />
            </div>
          </Link>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Hero;
