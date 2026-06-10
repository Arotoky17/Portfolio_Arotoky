import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionReveal from './ui/SectionReveal';
import Magnetic from './ui/Magnetic';

const Projects = () => {
  return (
    <section id="projects" className="py-8 bg-ninja-bg">
      <div className="section-container">
        <SectionReveal>
          <div className="flex flex-col items-start mb-16">
            <div className="section-badge mb-4">
              <Folder size={14} />
              <span>Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-ninja-text mb-6">
              Projets <span className="text-gradient">Récents</span>
            </h2>
            <p className="text-lg text-ninja-muted max-w-2xl leading-relaxed">
              Une sélection de mes travaux les plus significatifs, allant d'applications SaaS
              complexes à des infrastructures backend sécurisées.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid-rows-2">
          {PROJECTS.map((project, index) => (
            <SectionReveal 
              key={project.id} 
              delay={index * 0.1} 
              className={index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative flex flex-col h-full min-h-[350px] bg-ninja-card border border-ninja-border rounded-[2.5rem] overflow-hidden shadow-premium transition-all duration-500"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 p-8 lg:p-10 mt-auto flex flex-col h-full justify-end">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-violet-500/90 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {project.category}
                    </span>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className={`font-display font-bold text-white mb-3 transition-colors ${
                    index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl'
                  }`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-white/70 line-clamp-2 leading-relaxed mb-8 ${
                    index === 0 ? 'text-lg max-w-xl' : 'text-sm'
                  }`}>
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4">
                    <Magnetic strength={0.2}>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold transition-all hover:bg-violet-600 hover:text-white"
                      >
                        <ExternalLink size={16} />
                        Visiter
                      </a>
                    </Magnetic>
                    <Magnetic strength={0.2}>
                      <a
                        href="#"
                        className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all"
                      >
                        <FaGithub size={20} />
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.4}>
          <div className="mt-20 flex justify-center">
            <Magnetic>
              <a href="#" className="btn-outline group h-14 px-10">
                Voir tout sur GitHub
                <FaGithub size={22} className="ml-2 transition-transform group-hover:rotate-12" />
              </a>
            </Magnetic>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Projects;
