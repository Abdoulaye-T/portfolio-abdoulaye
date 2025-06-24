import { useState } from 'react';
import { FaReact, FaLaravel, FaNodeJs, FaMobileAlt, FaAws, FaGitAlt } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiFlutter,
  SiWordpress,
  SiFramer,
  SiWix,
  SiDocker,
  SiFigma,
  SiJira,
  SiOdoo,
} from 'react-icons/si';
import '../flip.css';

const allSkills = [
  // Web
  {
    name: 'React',
    icon: <FaReact className="text-blue-500" size={40} />,
    description: 'Interfaces dynamiques et performantes avec hooks et composants.',
    category: 'Web',
  },
  {
    name: 'Laravel',
    icon: <FaLaravel className="text-red-500" size={40} />,
    description: 'Framework PHP puissant pour construire des API et apps robustes.',
    category: 'Web',
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="text-green-500" size={40} />,
    description: 'Environnement d\'exécution JavaScript pour construire des API et apps robustes.',
    category: 'Web',
  },
  {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss className="text-teal-400" size={40} />,
    description: 'CSS utilitaire pour un design rapide, responsive et élégant.',
    category: 'Web',
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="text-blue-600" size={40} />,
    description: 'Base de données relationnelle solide, utilisée avec Laravel & Node.',
    category: 'Web',
  },
  {
    name: 'JavaScript',
    icon: <SiJavascript className="text-yellow-400" size={40} />,
    description: 'Langage fondamental du web, utilisé sur tous les fronts.',
    category: 'Web',
  },

  // Mobile
  {
    name: 'React Native',
    icon: <FaMobileAlt className="text-indigo-500" size={40} />,
    description: 'Création d’applications mobiles cross-platform (Android/iOS).',
    category: 'Mobile',
  },
  {
    name: 'Flutter',
    icon: <SiFlutter className="text-blue-500" size={40} />,
    description: 'Framework mobile UI de Google pour des apps natives.',
    category: 'Mobile',
  },

  // No-code
  {
    name: 'WordPress',
    icon: <SiWordpress className="text-blue-800" size={40} />,
    description: 'CMS populaire pour créer des sites sans coder.',
    category: 'No-code',
  },
  {
    name: 'Framer',
    icon: <SiFramer className="text-purple-600" size={40} />,
    description: 'Outil de prototypage interactif & design UI/UX.',
    category: 'No-code',
  },
  {
    name: 'Wix',
    icon: <SiWix className="text-gray-800" size={40} />,
    description: 'Créateur de sites no-code avec éditeur visuel.',
    category: 'No-code',
  },

  // Outils
  {
    name: 'AWS',
    icon: <FaAws className="text-yellow-500" size={40} />,
    description: 'S3, EC2, Lambda, CloudFormation, IAM, etc.',
    category: 'Outils',
  },
  {
    name: 'Git',
    icon: <FaGitAlt className="text-orange-500" size={40} />,
    description: 'Gestion de version, branches, merge, GitHub.',
    category: 'Outils',
  },
  {
    name: 'Docker',
    icon: <SiDocker className="text-blue-500" size={40} />,
    description: 'Conteneurisation et environnement isolé pour dev.',
    category: 'Outils',
  },
  {
    name: 'Figma',
    icon: <SiFigma className="text-pink-500" size={40} />,
    description: 'Design UI collaboratif, maquettes et prototypage.',
    category: 'Outils',
  },
  {
    name: 'Jira',
    icon: <SiJira className="text-blue-500" size={40} />,
    description: 'Suivi agile, sprints, tâches, user stories.',
    category: 'Outils',
  },
  {
    name: 'Odoo',
    icon: <SiOdoo className="text-purple-700" size={40} />,
    description: 'ERP modulaire pour gestion commerciale et RH.',
    category: 'Outils',
  },
];

const categories = ['Tous', 'Web', 'Mobile', 'No-code', 'Outils'];

export default function Skills() {
  const [filter, setFilter] = useState('Tous');

  const filteredSkills =
    filter === 'Tous'
      ? allSkills
      : allSkills.filter((skill) => skill.category === filter);

  return (
    <section
      id="skills"
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 border-b-4 border-purple-600 inline-block">
          Mes compétences
        </h2>

        {/* Filtres */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
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

        {/* Grille compétences */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center shadow-lg">
                  {skill.icon}
                  <h3 className="mt-4 font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="flip-card-back bg-purple-600 dark:bg-purple-800 text-white rounded-xl p-6 flex items-center justify-center">
                  <p className="text-sm">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
