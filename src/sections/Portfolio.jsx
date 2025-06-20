import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: 'E-Uamsat',
    category: 'Web',
    image: '/images/e-uamsat.png',
    description: 'Plateforme de gestion académique pour établissements maliens.',
    stack: ['Laravel', 'MySQL', 'Bootstrap'],
    link: 'https://github.com/tonprofil/e-uamsat',
  },
  {
    title: 'App React Native',
    category: 'Mobile',
    image: '/images/app-mobile.png',
    description: 'Application mobile avec React Native et Node.js.',
    stack: ['React Native', 'Node.js', 'MySQL'],
    link: 'https://github.com/tonprofil/app-mobile',
  },
  {
    title: 'Site vitrine WordPress',
    category: 'WordPress',
    image: '/images/wordpress-site.png',
    description: 'Site institutionnel pour une entreprise pharmaceutique.',
    stack: ['WordPress', 'Elementor', 'PHP'],
    link: 'https://site-client.com',
  },
  // Tu peux en ajouter autant que tu veux
];

const categories = ['Tous', 'Web', 'Mobile', 'WordPress'];

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('Tous');

  const filteredProjects =
    filter === 'Tous'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-purple-600 inline-block">
          Mes projets
        </h2>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border font-medium transition ${
                filter === cat
                  ? 'bg-purple-600 text-white'
                  : 'border-purple-400 text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille projets */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-white px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button
                    className="mt-4 text-purple-600 font-bold dark:text-purple-400 hover:underline"
                    onClick={() => setSelected(project)}
                  >
                    Voir plus
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-lg p-6 relative text-left">
              <button
                className="absolute top-2 right-2 text-xl text-gray-600 hover:text-red-600"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <img
                src={selected.image}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="mb-4">{selected.description}</p>
              <a
                href={selected.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:underline"
              >
                Voir le projet en ligne
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
