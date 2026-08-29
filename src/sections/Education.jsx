import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const {
    eyebrow, titleBefore, titleHighlight, titleAfter,
    tabEducation, tabExperience, achievementsLabel, technologiesLabel,
    educationItems, experienceItems,
  } = t.education;

  const [activeTab, setActiveTab] = useState("education");
  const [selectedItem, setSelectedItem] = useState(null);

  const currentData = activeTab === "education" ? educationItems : experienceItems;

  return (
    <section id="education" className="relative py-28 bg-bg text-ink overflow-hidden">
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

          <div className="flex gap-8 border-b border-line md:border-0 pb-2 md:pb-0">
            {[
              { key: "education", label: tabEducation },
              { key: "experience", label: tabExperience },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`font-mono text-sm uppercase tracking-wide pb-2 border-b-2 transition-colors duration-200 ${
                  activeTab === tab.key
                    ? "text-gold border-gold"
                    : "text-muted border-transparent hover:text-ink"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Liste */}
        <div className="border-t border-line">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {currentData.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                  className="w-full flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-7 border-b border-line text-left group"
                >
                  <span className="font-mono text-sm text-muted sm:w-32 shrink-0">
                    {item.date}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl sm:text-2xl text-ink group-hover:text-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">{item.school}</p>
                  </div>
                  {activeTab === "education" && (
                    <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest2 text-muted shrink-0">
                      <CheckCircle size={12} className="text-gold" />
                      {item.level}
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal détails */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="bg-bg border border-line max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-muted hover:text-gold transition-colors"
                aria-label="Fermer"
              >
                <X size={22} />
              </button>

              <span className="font-mono text-sm text-muted">{selectedItem.date}</span>
              <h3 className="font-serif text-3xl mt-2 mb-1 text-ink pr-8">{selectedItem.title}</h3>
              <p className="text-gold font-medium mb-6">{selectedItem.school}</p>

              <p className="text-muted leading-relaxed mb-8">{selectedItem.description}</p>

              {selectedItem.achievements && (
                <div className="mb-8">
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">
                    {achievementsLabel}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedItem.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <CheckCircle size={14} className="shrink-0 mt-0.5 text-gold" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">
                  {technologiesLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 text-xs border border-line rounded-full text-ink/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
