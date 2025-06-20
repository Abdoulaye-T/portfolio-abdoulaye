import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaCloud,
  FaGraduationCap,
} from "react-icons/fa";

const experiences = [
  {
    title: "Développeur Web & Mobile - Technolab-ISTA",
    date: "Fév 2024 – Juin 2024",
    description:
      "Développement de la plateforme E-Uamsat pour la gestion académique des établissements maliens.",
    icon: <FaCode />,
    tags: ["Laravel", "MySQL", "Blade", "Bootstrap"],
  },
  {
    title: "Formation AWS re/Start",
    date: "Mai 2024 – Août 2024",
    description:
      "Maîtrise des bases AWS, scripts Bash, automatisation, S3, Lambda, CloudFormation, EC2.",
    icon: <FaCloud />,
    tags: ["AWS", "Cloud", "EC2", "S3", "Lambda"],
  },
  {
    title: "Développeur Freelance",
    date: "2023 – Aujourd'hui",
    description:
      "Sites vitrine, apps mobiles, WordPress, gestion de serveurs Linux pour PME locales.",
    icon: <FaGraduationCap />,
    tags: ["React Native", "WordPress", "Linux", "Git", "Nginx"],
  },
];

export default function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  function handleOpenModal(exp) {
    setSelectedExp(exp);
  }

  function handleCloseModal() {
    setSelectedExp(null);
  }

  return (
    <section
      id="experience"
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-purple-600 inline-block">
          Mon parcours
        </h2>

        {/* Desktop timeline avec ligne centrale */}
        <div className="hidden md:flex flex-col relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-500 rounded"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative w-full min-h-[160px]">
              {/* Icône au centre */}
              <div className="absolute left-1/2 top-6 transform -translate-x-1/2 z-10 bg-purple-600 text-white p-3 rounded-full shadow-md">
                {exp.icon}
              </div>

              <div className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mt-6`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`
                    w-[90%] md:w-[46%] 
                    ${index % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'}
                    relative group
                  `}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-purple-100 dark:border-purple-800 group-hover:scale-105 transform transition duration-300">
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <span className="text-sm text-purple-600 dark:text-purple-400">{exp.date}</span>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2 justify-end md:justify-start">
                      {exp.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-800 dark:text-white text-purple-800 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleOpenModal(exp)}
                      className="mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                    >
                      Voir + de détails
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}

        </div>

        {/* Mobile version : layout vertical simple */}
        <div className="md:hidden flex flex-col gap-10 py-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-5"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <span className="text-sm text-purple-600 dark:text-purple-400">
                {exp.date}
              </span>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-800 dark:text-white text-purple-800 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleOpenModal(exp)}
                className="mt-4 text-purple-600 dark:text-purple-400 font-semibold hover:underline"
              >
                Voir + de détails
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedExp && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg p-6 w-[90%] md:w-[600px] relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                {selectedExp.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {selectedExp.date}
              </p>
              <p className="text-gray-800 dark:text-gray-200">
                {selectedExp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedExp.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-800 dark:text-white text-purple-800 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
