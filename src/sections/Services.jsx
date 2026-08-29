import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Smartphone, Settings, Globe, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const serviceIcons = [Code, Globe, Smartphone, Settings];

export default function Services() {
  const { t } = useLanguage();
  const { eyebrow, titleBefore, titleHighlight, titleAfter, subtitle, technologiesLabel, ctaDiscuss, ctaTitle, ctaButton, items } = t.services;
  const [openId, setOpenId] = useState(items[0].id);

  return (
    <section id="services" className="relative py-28 bg-bg text-ink overflow-hidden">
      <div className="max-w-editorial mx-auto px-6 lg:px-10">

        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-medium leading-tight max-w-2xl">
              {titleBefore}<span className="italic text-gold">{titleHighlight}</span>{titleAfter}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted max-w-sm md:text-right md:mb-2"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Liste accordéon */}
        <div className="border-t border-line">
          {items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const isOpen = openId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b border-line"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : service.id)}
                  className="w-full flex items-center gap-4 sm:gap-8 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-mono text-sm text-muted w-8 shrink-0">
                    0{index + 1}
                  </span>
                  <Icon
                    size={20}
                    className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-muted group-hover:text-ink'}`}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-serif text-xl sm:text-2xl transition-colors duration-300 ${isOpen ? 'text-gold' : 'text-ink'}`}>
                      {service.title}
                    </h3>
                    <p className="hidden sm:block text-sm text-muted mt-1">{service.subtitle}</p>
                  </div>
                  <span className="hidden md:inline-block font-mono text-[11px] uppercase tracking-widest2 text-muted shrink-0">
                    {service.badge}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className={`shrink-0 transition-transform duration-300 text-muted ${isOpen ? 'rotate-45 text-gold' : 'group-hover:rotate-45'}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-12 sm:pl-20 grid md:grid-cols-12 gap-10">
                        <div className="md:col-span-7">
                          <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                          <ul className="space-y-3">
                            {service.features.map((f, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-ink/80">
                                <Check size={14} className="shrink-0 mt-1 text-gold" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="md:col-span-5">
                          <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">
                            {technologiesLabel}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1.5 text-xs border border-line rounded-full text-ink/80"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href="#contact"
                            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all duration-200"
                          >
                            {ctaDiscuss}
                            <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA global */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border border-line p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <h3 className="font-serif text-3xl md:text-4xl max-w-md">{ctaTitle}</h3>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gold text-bg rounded-full font-semibold shrink-0 hover:shadow-lg hover:shadow-gold/20 transition-shadow duration-300"
          >
            {ctaButton}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
