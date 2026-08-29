import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Solid\'Avenir',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwJTIwd2VifGVufDB8fDB8fHww',
    description: `Conception et développement d’une plateforme de financement participatif basée sur Hedera Hashgraph, permettant des dons transparents, traçables et sécurisés pour
    des projets sociaux et environnementaux. La solution intègre la gestion des utilisateurs, des transactions et le suivi d’impact en temps réel.`,
    stack: ["Web3", 'Python', 'Django', 'SQlite', 'Node.js', 'JavaScript', 'HTML', 'CSS', 'Hedera Hashgraph', 'Hedera Consensus Service', 'Hedera Token Service', 'Smart Contracts'],
    link: 'https://solidavenir.com/',
    github: 'https://github.com/dmaiga/solidavenir.git',
    status: 'Production',
    featured: false
  },
  {
    id: 2,
    title: 'E-Uamsat',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
    description: "Développement d’une plateforme de gestion académique destinée aux établissements maliens, centralisant la gestion des notes, des emplois du temps et la communication interne afin d’améliorer l’organisation et la transparence académique.",
    stack: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    link: 'https://github.com/tonprofil/e-uamsat',
    github: 'https://github.com/tonprofil/e-uamsat',
    status: 'Production',
    featured: false
  },
  {
    id: 3,
    title: 'Tontine Mobile App',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
    description: "Application mobile cross-platform permettant la gestion de tontines avec authentification sécurisée, API REST et synchronisation des données en temps réel, conçue pour une utilisation simple et fiable sur Android et iOS.",
    stack: ['React Native', 'Node.js', 'MySQL', 'JWT'],
    link: 'https://github.com/tonprofil/app-mobile',
    github: 'https://github.com/tonprofil/app-mobile',
    status: 'Développement',
    featured: true
  },
  {
    id: 4,
    title: 'Site vitrine Agence Miths SAS',
    category: 'WordPress',
    image: 'https://images.unsplash.com/photo-1583929260767-9020a3cdc78a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: "Conception et mise en ligne d’un site vitrine WordPress optimisé SEO, visant à renforcer la visibilité en ligne, présenter les services de l’entreprise et générer de nouveaux leads.",
    stack: ['WordPress', 'Elementor', 'PHP', 'SEO'],
    link: 'http://www.miths.tech/',
    status: 'Production',
    featured: false
  },
  {
    id: 5,
    title: 'PISE (Plateforme d\'Innovation Sociale et Écologique)',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1702047054352-cf264d3b1a9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYXRlZm9ybWUlMjB3ZWIlMjBlY29sb2dpcXVlfGVufDB8fDB8fHww',
    description: 'Plateforme web dédiée à la promotion de projets innovants axés sur le développement durable et l\'impact social positif.',
    stack: ['React', 'Vite', 'Node.js'],
    link: 'https://pise.vercel.app/',
    github: '#',
    status: 'Production',
    featured: true
  },
  {
    id: 6,
    title: 'Site vitrine HUB BY FIBRES',
    category: 'WordPress',
    image: 'https://images.unsplash.com/photo-1530435460869-d13625c69bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHNpdGUlMjB3b3JkcHJlc3MlMjB0ZXh0aWxlfGVufDB8fDB8fHww',
    description: 'Site vitrine pour une  entreprise sociale malienne spécialisée dans la valorisation des déchets textiles à travers l’innovation, la recherche et la production de matériaux écologiques.',
    stack: ['WordPress', "Astra (Parent/Child)", 'Elementor', 'PHP', 'SEO'],
    link: 'https://mistyrose-loris-372094.hostingersite.com/',
    status: 'Développement',
    featured: true
  },
  {
    id: 7,
    title: 'Site vitrine GECAF SASU',
    category: 'WordPress',
    image: 'https://images.unsplash.com/photo-1571677246347-5040036b95cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8',
    description: 'Site vitrine pour un Cabinet d\'Expertise Comptable et de Fiscalité au Mali. L\'objectif est de présenter les services offerts par le cabinet, son équipe, ainsi que des ressources utiles pour les clients. Pour améliorer la visibilité en ligne du cabinet et attirer de nouveaux clients.',
    stack: ['WordPress', "Astra (Child)", 'Elementor', 'PHP', 'SEO'],
    link: 'https://gecaf-sasu.miths.tech/',
    status: 'Développement',
    featured: true
  },
  {
    id: 8,
    title: 'Blog',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
    description: "Une plateforme de blog en ligne permettant à un individu ou une organisation de publier régulièrement des articles, des opinions, des informations et des contenus multimédias. Application web basée sur Laravel avec une interface Blade et Tailwind CSS. Version 1.0 avec gestion des bases de données, des routes et des tests unitaires.",
    stack: ['Laravel', 'MySQL', 'Tailwind', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    link: '#',
    github: 'https://github.com/Abdoulaye-T/Blog.git',
    status: 'Développement',
    featured: false
  },
  {
    id: 9,
    title: 'Cabinet médical ESPOIR SARL',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
    description: "Application web pour un cabinet médical permettant de gérer les rendez-vous entre les médecins et les patients, rendez-vous en présentiel et en ligne grace à la fonctionnalité de téléconsultation intégrée. Chaque utilisateur à son propre espace qui lui donne accès à ses rendez-vous, ses informations et ses paramètres via un Dashboard sécurisé.",
    stack: ['Laravel', 'MySQL', 'Tailwind', 'PHP', 'JavaScript', 'HTML', 'CSS'],
    link: '#',
    github: 'https://github.com/habiiba7000/Espoir-SARL',
    status: 'Développement',
    featured: false
  },
];

const categories = ['Tous', 'Web', 'Mobile', 'WordPress'];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('Tous');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = filter === 'Tous'
    ? projects
    : projects.filter(p => p.category === filter);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="portfolio" className="relative py-28 bg-bg text-ink overflow-hidden">
      <div className="max-w-editorial mx-auto px-6 lg:px-10">

        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">05 — Projets</span>
            <h2 className="mt-5 font-serif text-4xl md:text-6xl font-medium leading-tight max-w-2xl">
              Une sélection de mes <span className="italic text-gold">réalisations</span>.
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setShowAll(false); }}
                className={`font-mono text-sm uppercase tracking-wide pb-1 border-b-2 transition-colors duration-200 ${
                  filter === cat
                    ? 'text-gold border-gold'
                    : 'text-muted border-transparent hover:text-ink'
                }`}
              >
                {cat}
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
                  <img
                    src={project.image}
                    alt={project.title}
                    width="600"
                    height="400"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide bg-bg/90 text-ink border border-line">
                      {project.status}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide bg-gold text-bg">
                        Featured
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
                      {project.category}
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
                      Voir le détail →
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-muted hover:text-gold transition-colors duration-200"
                        aria-label="Code source"
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
              Voir tous les projets ({filteredProjects.length - 6} de plus)
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

              <img
                src={selected.image}
                alt={selected.title}
                width="672"
                height="256"
                loading="lazy"
                className="w-full h-64 object-cover grayscale-[10%]"
              />

              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-4 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                  <span>{selected.category}</span>
                  <span className="text-line">•</span>
                  <span className="text-gold">{selected.status}</span>
                </div>
                <h3 className="font-serif text-3xl mb-6 text-ink">{selected.title}</h3>

                <p className="text-muted mb-8 leading-relaxed">
                  {selected.description}
                </p>

                <div className="mb-8">
                  <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">
                    Technologies utilisées
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
                    Voir le projet
                  </a>
                  {selected.github && (
                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 border border-line rounded-full text-ink py-3.5 px-6 font-semibold hover:border-gold hover:text-gold transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code source
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
