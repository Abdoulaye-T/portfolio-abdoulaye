import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Uamsat',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    description: 'Plateforme de gestion académique complète pour établissements maliens avec système de notes, planning et communication.',
    stack: ['Laravel', 'MySQL', 'Bootstrap', 'PHP'],
    link: 'https://github.com/tonprofil/e-uamsat',
    github: 'https://github.com/tonprofil/e-uamsat',
    status: 'Production',
    featured: true
  },
  {
    id: 2,
    title: 'App React Native',
    category: 'Mobile',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
    description: 'Application mobile cross-platform avec authentification, API REST et synchronisation temps réel.',
    stack: ['React Native', 'Node.js', 'MySQL', 'JWT'],
    link: 'https://github.com/tonprofil/app-mobile',
    github: 'https://github.com/tonprofil/app-mobile',
    status: 'Développement',
    featured: true
  },
  {
    id: 3,
    title: 'Site vitrine WordPress',
    category: 'WordPress',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    description: 'Site institutionnel responsive pour entreprise pharmaceutique avec CMS personnalisé et optimisation SEO.',
    stack: ['WordPress', 'Elementor', 'PHP', 'SEO'],
    link: 'https://site-client.com',
    status: 'Production',
    featured: false
  },
  {
    id: 4,
    title: 'Dashboard Analytics',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    description: 'Tableau de bord analytique avec visualisations interactives et rapports automatisés.',
    stack: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#',
    status: 'Production',
    featured: true
  }
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

  const getStatusColor = (status) => {
    switch(status) {
      case 'Production': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Développement': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <section id="portfolio" className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mes <span className="text-blue-600">Réalisations</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Découvrez une sélection de projets que j'ai développés, alliant expertise technique et vision business.
            </p>
          </motion.div>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mr-4">
            <Filter size={16} />
            <span>Filtrer par :</span>
          </div>
          {categories.map((cat, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grille projets */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                  project.featured ? 'ring-2 ring-blue-100 dark:ring-blue-900' : ''
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 text-xs font-bold rounded-full">
                        ⭐ Featured
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelected(project)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                    >
                      <Eye size={16} />
                      Détails
                    </button>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
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

        {/* Bouton Voir plus */}
        {!showAll && filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-8 rounded-full font-semibold transition-all duration-300"
            >
              Voir tous les projets ({filteredProjects.length - 6} de plus)
            </button>
          </div>
        )}

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors z-10"
                  onClick={() => setSelected(null)}
                >
                  ×
                </button>

                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                          {selected.category}
                        </span>
                        <span className={`text-sm px-3 py-1 rounded-full ${getStatusColor(selected.status)}`}>
                          {selected.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {selected.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies utilisées :</h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-2 rounded-lg text-sm font-medium"
                        >
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
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink size={18} />
                      Voir le projet
                    </a>
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-medium transition-colors"
                      >
                        <Github size={18} />
                        Code source
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}