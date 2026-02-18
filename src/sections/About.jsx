import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaCode, FaLightbulb, FaRocket, FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { SiReact, SiLaravel, SiTailwindcss, SiAmazon, SiNodedotjs, SiMysql, SiGit, SiAngular, SiFirebase, SiFigma, SiDocker, SiWordpress, SiMongodb, SiPhp, SiJavascript } from "react-icons/si";
import Illustration from "../assets/a2.jpg"; // Image principale (toi professionnel)
import WorkImage from "../assets/a1.jpg"; // Image secondaire (setup de travail)

export default function About() {
  const [activePole, setActivePole] = useState("Tous");
  const techPoles = [
    {
      pole: "Dev Web",
      emoji: "🌐",
      techs: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Angular", icon: SiAngular, color: "#DD0031" },
        { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "PHP", icon: SiPhp, color: "#777BB4" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      ]
    },
    {
      pole: "Mobile",
      emoji: "📱",
      techs: [
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
      ]
    },
    {
      pole: "Cloud & DevOps",
      emoji: "☁️",
      techs: [
        { name: "AWS", icon: SiAmazon, color: "#FF9900" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: SiGit, color: "#F05032" },
      ]
    },
    {
      pole: "Bases de données",
      emoji: "🗄️",
      techs: [
        { name: "MySQL", icon: SiMysql, color: "#00758F" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ]
    },
    {
      pole: "Outils & ERP",
      emoji: "🔧",
      techs: [
        { name: "Odoo", icon: SiGit, color: "#714B67" },
        { name: "WordPress", icon: SiWordpress, color: "#21759B" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      ]
    },
  ];

  const highlights = [
    {
      icon: <FaCode className="text-blue-500" />,
      title: "Code de qualité",
      description: "Solutions robustes et bien structurées"
    },
    {
      icon: <FaLightbulb className="text-yellow-500" />,
      title: "Solutions créatives",
      description: "Approches innovantes pour chaque défi"
    },
    {
      icon: <FaRocket className="text-blue-500" />,
      title: "Performance optimale",
      description: "Applications rapides et fiables"
    },
    {
      icon: <FaHeart className="text-red-500" />,
      title: "Passion du code",
      description: "Créer avec enthousiasme et précision"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative overflow-hidden">


      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            À propos de <span className="text-indigo-600 dark:text-indigo-400">moi</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Visual Content (2 images superposées, bien visibles) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative w-[450px] h-80 flex justify-center items-center"> {/* Conteneur élargi */}
              {/* Image principale (gauche, légèrement inclinée, bien visible) */}
              <motion.div
                className="absolute left-0 w-72 h-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-blue-700/50 transform -rotate-4 z-10"
                whileHover={{ y: -10, rotate: -2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={Illustration}
                  alt="Abdoulaye Traoré professionnel"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </motion.div>
              {/* Image secondaire (décalée haut/droite, superposée, bien visible) */}
              <motion.div
                className="absolute top-[-20px] right-[-20px] w-64 h-72 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-blue-700/50 transform rotate-4 z-20"
                whileHover={{ y: -10, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={WorkImage}
                  alt="Environnement de travail"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </motion.div>
            </div>
            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-12">
              <motion.a
                href="https://github.com/Abdoulaye-T"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdoulaye-traore-73928924a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Text Content (storytelling amélioré) */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-0.5 h-full bg-indigo-400 dark:bg-indigo-600 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">👨‍💻</span>
                  Développeur Web Full Stack au service de solutions utiles et durables
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  Développeur web full stack avec <span className="font-semibold text-blue-600 dark:text-blue-400">plus de 3 ans d'expérience</span>, je conçois et développe
                  des solutions digitales fiables, performantes et orientées utilisateurs.
                  J’interviens sur l’ensemble du cycle de vie des projets : <span className="font-semibold text-blue-600 dark:text-blue-400">conception, développement,
                    intégration et mise en production.</span> <br /><br />

                  Mon parcours m’a amené à travailler sur des <span className="font-semibold text-blue-600 dark:text-blue-400">applications web</span>, des <span className="font-semibold text-blue-600 dark:text-blue-400">sites professionnels</span>,
                  des <span className="font-semibold text-blue-600 dark:text-blue-400">solutions WordPress avancées</span> et des <span className="font-semibold text-blue-600 dark:text-blue-400">modules ERP Odoo sur mesure</span>, avec une attention
                  constante portée à la qualité du code, à la sécurité et à la scalabilité. <br /><br />

                  J’aime transformer des besoins concrets en outils utiles : interfaces intuitives,
                  systèmes automatisés et plateformes capables d’évoluer avec les enjeux business.

                </p>
                {/* <p className="leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  Mon parcours m'a mené du développement mobile à l'<span className="font-semibold text-blue-600 dark:text-blue-400">automatisation cloud</span>, en passant par des projets qui allient innovation technique et impact humain. Imaginez : des interfaces intuitives qui boostent la productivité, des infrastructures scalables qui grandissent avec votre business, et du code qui inspire confiance.
                </p>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  Ce qui me motive ? Créer avec vous des outils qui ne se contentent pas d'exister, mais qui <span className="font-semibold text-blue-600 dark:text-blue-400">inspirent le changement</span>. Rejoignez-moi maintenant pour écrire cette histoire ensemble.
                </p> */}
              </div>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-6 rounded-2xl border border-indigo-200/60 dark:border-indigo-800/60">
              <p className="text-center italic text-lg font-medium text-gray-600 dark:text-gray-300">
                👉 Du prototype à la production, j’accompagne mes clients et partenaires pour construire des solutions solides, claires et pérennes.
              </p>
            </div>

            {/* <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                <FaRocket />
                <span>Du prototype à la production : ensemble, nous innovons.</span>
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack avec filtres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">
            Technologies &amp; Outils
          </h3>

          {/* Boutons filtres */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {["Tous", ...techPoles.map(p => p.pole)].map((label) => (
              <button
                key={label}
                onClick={() => setActivePole(label)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${activePole === label
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
              >
                {label !== "Tous" && (
                  <span>{techPoles.find(p => p.pole === label)?.emoji}</span>
                )}
                {label}
              </button>
            ))}
          </div>

          {/* Pills filtrées */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePole}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {(activePole === "Tous"
                ? techPoles.flatMap(p => p.techs.map(t => ({ ...t, pole: p.pole })))
                : techPoles.find(p => p.pole === activePole)?.techs.map(t => ({ ...t, pole: activePole })) ?? []
              ).map((tech, index) => (
                <motion.div
                  key={`${tech.pole}-${tech.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-sm transition-all duration-200 cursor-default"
                >
                  <tech.icon style={{ color: tech.color }} className="text-base flex-shrink-0" />
                  <span>{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gray-900 dark:bg-gray-800 p-8 rounded-2xl border border-gray-800 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Un projet à réaliser ?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-sm">
              Collaborons pour créer une solution sur mesure.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-indigo-50 transition-colors duration-300 shadow-sm group"
              aria-label="Aller à la section contact"
            >
              Démarrer le projet
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}