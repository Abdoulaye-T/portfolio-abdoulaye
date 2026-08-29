import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";

const educations = [
  {
    title: "Certification Hedera Developer",
    school: "Hedera & Orange Digital Center Mali",
    date: "2025",
    description: "Formation intensive sur l'écosystème Hedera avec focus sur l'architecture Hashgraph, les Smart Contracts, et les applications décentralisées. Déployé une application décentralisée pour un client fictif avec Hedera et Hashgraph. Certification Hedera obtenue.",
    tags: ["Hedera", "Hashgraph", "Smart Contracts", "dApps", "Tokenization", "Web3"],
    level: "Certifié Hedera",
  },
  {
    title: "Formation AWS re/Start – Cloud Computing",
    school: "Amazon Web Services & Orange Digital Center Mali",
    date: "2024",
    description: "Formation intensive sur l'écosystème AWS avec focus sur l'architecture cloud moderne, la sécurité, et l'automatisation. Déployé une application serverless pour un client fictif avec Lambda et S3. Certification AWS obtenue avec mention.",
    tags: ["AWS", "EC2", "S3", "VPC", "IAM", "Lambda", "CloudFormation"],
    level: "Certifié AWS",
  },
  {
    title: "BAC+3 Génie Logiciel et Développement Web",
    school: "Technolab-ISTA",
    date: "2021 – 2024",
    description: "Formation complète en développement full-stack avec spécialisation mobile. Projet de fin d'études : E-Uamsat, plateforme de gestion académique déployée en production avec 500+ utilisateurs actifs.",
    tags: ["JavaScript", "Java EE", "Node.js", "PHP", "Laravel", "React Native", "SQL", "UML", "Merise"],
    level: "Diplômé",
  },
  {
    title: "Meta Certified Frontend Developer",
    school: "Meta via Coursera",
    date: "2024",
    description: "Certification officielle Meta couvrant React avancé, JavaScript ES6+, principes UX/UI, et bonnes pratiques. Développé une interface React interactive avec tests unitaires Jest pour un projet client.",
    tags: ["React", "UI/UX", "Testing", "Jest", "Figma"],
    level: "Certifié Meta",
  },
  {
    title: "CISCO IT Essentials",
    school: "Cisco Networking Academy",
    date: "2023",
    description: "Certification CISCO sur les fondamentaux IT, administration réseau, et dépannage hardware. Déployé un réseau local pour une PME avec configuration de pare-feu et diagnostics matériels.",
    tags: ["Réseaux", "Hardware", "Troubleshooting", "Sécurité"],
    level: "Certifié CISCO",
  },
];

const experiences = [
  {
    title: "Stagiaire Développeur Web & Mobile",
    school: "Miths - Agence digitale Franco-Malienne",
    date: "2025 – présent",
    description: "Développement de E-Uamsat, plateforme SaaS de gestion académique. Conception d'une architecture scalable, développement d'API RESTful sécurisées, et création d'interfaces utilisateur modernes.",
    tags: ["Laravel", "MySQL", "API REST", "Bootstrap", "Git"],
    achievements: [
      "500+ utilisateurs actifs quotidiens",
      "Architecture scalable implémentée",
      "Réduction de 80% du temps de gestion",
      "Interface multilingue (FR/EN)",
    ],
  },
  {
    title: "Développeur Full-Stack",
    school: "Technolab-ISTA",
    date: "Fév. – Juin 2024",
    description: "Développement de E-Uamsat, plateforme SaaS de gestion académique. Conception d'une architecture scalable, développement d'API RESTful sécurisées, et création d'interfaces utilisateur modernes.",
    tags: ["Laravel", "MySQL", "API REST", "Bootstrap", "Git"],
    achievements: [
      "500+ utilisateurs actifs quotidiens",
      "Architecture scalable implémentée",
      "Réduction de 80% du temps de gestion",
      "Interface multilingue (FR/EN)",
    ],
  },
  {
    title: "Apprenant Cloud",
    school: "Programme AWS re/Start",
    date: "Mai – Août 2024",
    description: "Développement de solutions cloud sur AWS. Automatisation d'infrastructures avec CloudFormation, mise en place de pipelines CI/CD, et optimisation des coûts cloud.",
    tags: ["AWS", "CloudFormation", "EC2", "S3", "Lambda", "DevOps", "Python"],
    achievements: [
      "5 architectures cloud déployées",
      "Automatisation complète des déploiements",
      "Réduction de 40% des coûts infrastructure",
      "Monitoring et alertes configurés",
    ],
  },
];

export default function Education() {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedItem, setSelectedItem] = useState(null);

  const currentData = activeTab === "education" ? educations : experiences;

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
            <span className="eyebrow">04 — Parcours</span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-medium leading-tight max-w-2xl">
              Une trajectoire tournée vers l'<span className="italic text-gold">excellence</span>.
            </h2>
          </motion.div>

          <div className="flex gap-8 border-b border-line md:border-0 pb-2 md:pb-0">
            {[
              { key: "education", label: "Formations" },
              { key: "experience", label: "Expériences" },
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
                    Réalisations
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
                  Technologies
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
