import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Mail, MapPin, ExternalLink, Link as LinkIcon } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useToast } from '../context/ToastContext';

const Contact = () => {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading,  setLoading]  = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Veuillez remplir tous les champs.', 'error');
      return;
    }

    setLoading(true);
    // Simulate async send
    setTimeout(() => {
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
      showToast('Message envoyé avec succès ! Je vous répondrai sous 24h.', 'success');
    }, 1200);
  };

  return (
    <section id="contact" className="py-8 bg-ninja-bg/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Left info ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-badge mb-4 w-fit">
              <MessageSquare size={14} />
              <span>Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-ninja-text mb-6">
              Discutons de votre projet
            </h2>
            <p className="text-lg text-ninja-muted mb-12 max-w-lg">
              Vous avez une idée ou un besoin technique spécifique ? N'hésitez pas à me
              contacter. Je réponds généralement sous 24h.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-ninja-card border border-ninja-border flex items-center justify-center text-violet-500 group-hover:border-violet-500/50 group-hover:bg-violet-500/5 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-ninja-text font-bold mb-1">Email</h4>
                  <p className="text-ninja-muted">{PERSONAL_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-ninja-card border border-ninja-border flex items-center justify-center text-indigo-500 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/5 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-ninja-text font-bold mb-1">Localisation</h4>
                  <p className="text-ninja-muted">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-ninja-card border border-ninja-border text-ninja-muted hover:text-ninja-text hover:border-violet-500 transition-all"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-ninja-card border border-ninja-border text-ninja-muted hover:text-ninja-text hover:border-indigo-500 transition-all"
              >
                <LinkIcon size={20} />
              </a>
            </div>
          </motion.div>

          {/* ── Right form ───────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-ninja-card/40 backdrop-blur-md border border-ninja-border p-8 md:p-10 rounded-[32px] shadow-premium"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-ninja-text ml-1">Nom Complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="w-full px-6 py-4 rounded-2xl bg-ninja-bg/50 border border-ninja-border text-ninja-text placeholder:text-ninja-muted focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-ninja-text ml-1">Adresse Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full px-6 py-4 rounded-2xl bg-ninja-bg/50 border border-ninja-border text-ninja-text placeholder:text-ninja-muted focus:outline-none focus:border-violet-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-ninja-text ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Votre projet en quelques mots..."
                  className="w-full px-6 py-4 rounded-2xl bg-ninja-bg/50 border border-ninja-border text-ninja-text placeholder:text-ninja-muted focus:outline-none focus:border-violet-500 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full btn-primary justify-center py-4 text-lg font-bold disabled:opacity-60 disabled:pointer-events-none"
                whileHover={{ scale: loading ? 1 : 1.02, y: loading ? 0 : -1 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                {loading ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send size={20} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
