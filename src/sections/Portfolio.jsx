import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import ProjectCover from '../components/ProjectCover';

export default function Portfolio() {
  const { t } = useLanguage();
  const { eyebrow, titleBefore, titleHighlight, titleAfter, subtitle, categories, statusLabels, featuredLabel, detailCta, sourceLabel, viewProjectCta, modalTechLabel, showMoreCta, items } = t.projects;

  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('Tous');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = filter === 'Tous'
    ? items
    : items.filter(p => p.categoryKey === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="relative py-28 bg-bg text-ink overflow-hidden">
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
            <p className="mt-5 text-muted max-w-xl">{subtitle}</p>
          </motion.div>

          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setFilter(cat.key); setShowAll(false); }}
                className={`font-mono text-sm uppercase tracking-wide pb-1 border-b-2 transition-colors duration-200 ${
                  filter === cat.key
                    ? 'text-gold border-gold'
                    : 'text-muted border-transparent hover:text-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grille projets */}
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3 border border-line">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="group bg-bg flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <ProjectCover title={project.title} category={project.categoryKey} className="absolute inset-0" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide bg-bg/90 text-ink border border-line">
                      {statusLabels[project.status]}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide bg-gold text-bg">
                        {featuredLabel}
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif text-xl text-ink group-hover:text-gold transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase text-muted shrink-0 mt-1.5">
                      {project.categoryKey}
                    </span>
                  </div>

                  <p className="text-sm text-muted mb-5 line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs border border-line rounded-full px-3 py-1 text-ink/70">
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs text-muted px-1 py-1">+{project.stack.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-line">
                    <button
                      onClick={() => setSelected(project)}
                      className="text-sm font-semibold text-ink hover:text-gold transition-colors duration-200"
                    >
                      {detailCta} →
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-muted hover:text-gold transition-colors duration-200"
                        aria-label={sourceLabel}
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && filteredProjects.length > 6 && (
          <div className="text-center mt-14">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-line rounded-full font-semibold text-ink hover:border-gold hover:text-gold transition-colors duration-300"
            >
              {showMoreCta(filteredProjects.length - 6)}
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="bg-bg border border-line max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-5 right-5 text-muted hover:text-gold transition-colors z-10"
                onClick={() => setSelected(null)}
                aria-label="Fermer"
              >
                <X size={22} />
              </button>

              <ProjectCover title={selected.title} category={selected.categoryKey} className="w-full h-56" />

              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                  <span>{selected.categoryKey}</span>
                  <span className="text-line">•</span>
                  <span className="text-gold">{statusLabels[selected.status]}</span>
                </div>
                <h3 className="font-serif text-3xl mb-6 text-ink">{selected.title}</h3>

                <p className="text-muted mb-8 leading-relaxed">
                  {selected.description}
                </p>

                <div className="mb-8">
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">
                    {modalTechLabel}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((tech, i) => (
                      <span key={i} className="border border-line rounded-full px-3 py-1.5 text-xs text-ink/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selected.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-gold text-bg py-3.5 px-6 rounded-full font-semibold hover:shadow-lg hover:shadow-gold/20 transition-shadow duration-300"
                  >
                    <ExternalLink size={16} />
                    {viewProjectCta}
                  </a>
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-line rounded-full text-ink py-3.5 px-6 font-semibold hover:border-gold hover:text-gold transition-colors duration-300"
                    >
                      <Github size={16} />
                      {sourceLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
