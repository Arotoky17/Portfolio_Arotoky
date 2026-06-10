import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';
import { Cpu } from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-8 relative overflow-hidden">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge mb-4"
          >
            <Cpu size={14} />
            <span>Technologies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-ninja-text mb-6"
          >
            Expertise <span className="text-gradient">Technique</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-ninja-muted max-w-2xl leading-relaxed"
          >
            Ma boîte à outils évolue constamment pour rester à la pointe des standards du
            web moderne et des meilleures pratiques de développement.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-8 rounded-[2.5rem] bg-ninja-card/40 backdrop-blur-sm border border-ninja-border flex flex-col items-center text-center hover:bg-ninja-card/70 hover:border-violet-500/30 transition-all cursor-default shadow-premium"
            >
              <div className="w-20 h-20 rounded-2xl bg-ninja-bg border border-ninja-border flex items-center justify-center text-ninja-muted group-hover:text-violet-500 group-hover:border-violet-500/30 group-hover:bg-violet-500/5 transition-all mb-6">
                <skill.icon size={36} />
              </div>
              <h4 className="text-ninja-text font-bold mb-2 text-lg">{skill.name}</h4>
              <span className="text-[10px] text-ninja-muted font-bold uppercase tracking-[0.2em]">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px] -z-10 pointer-events-none animate-pulse" />
      </div>
    </section>
  );
};

export default Skills;
