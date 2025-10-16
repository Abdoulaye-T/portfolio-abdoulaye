import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaLightbulb, FaRocket, FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiReact, SiLaravel, SiTailwindcss, SiAmazon, SiNodedotjs, SiMysql, SiGit, SiAngular, SiFirebase, SiFigma } from "react-icons/si";
import Illustration from "../assets/a2.jpg"; // Image principale (toi professionnel)
import WorkImage from "../assets/a1.jpg"; // Image secondaire (setup de travail)

export default function About() {
  const techStack = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "MySQL", icon: SiMysql, color: "#00758F" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Odoo", icon: SiGit, color: "#714B67" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" }
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
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
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
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdoulaye-traore-73928924a/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Text Content (storytelling amélioré) */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">👨‍💻</span>
                  Développeur full-stack passionné
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  Tout a commencé par une simple curiosité : un premier code qui a résolu un problème réel pour un proche. Aujourd'hui, avec <span className="font-semibold text-blue-600 dark:text-blue-400">plus de 3 ans d'expérience</span>, je transforme cette passion en solutions digitales qui font la différence – des apps web fluides aux systèmes ERP Odoo sur mesure.
                </p>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  Mon parcours m'a mené du développement mobile à l'<span className="font-semibold text-blue-600 dark:text-blue-400">automatisation cloud</span>, en passant par des projets qui allient innovation technique et impact humain. Imaginez : des interfaces intuitives qui boostent la productivité, des infrastructures scalables qui grandissent avec votre business, et du code qui inspire confiance.
                </p>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  Ce qui me motive ? Créer avec vous des outils qui ne se contentent pas d'exister, mais qui <span className="font-semibold text-blue-600 dark:text-blue-400">inspirent le changement</span>. Rejoignez-moi maintenant pour écrire cette histoire ensemble.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
              <p className="text-center italic text-lg font-medium text-gray-600 dark:text-gray-300">
                "Chaque ligne de code est une étape vers un monde plus connecté et efficace – et je suis là pour vous guider."
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                <FaRocket />
                <span>Du prototype à la production : ensemble, nous innovons.</span>
              </div>
            </div>
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-blue-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
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

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-gray-100">
            Technologies & Outils
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                className="relative px-6 py-3 rounded-full bg-white/80 dark:bg-gray-800/80 border border-blue-200/50 dark:border-blue-700/50 text-gray-900 dark:text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-2">
                  <tech.icon style={{ color: tech.color }} className="text-lg" />
                  <span>{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Un projet à réaliser ?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Collaborons pour créer une solution sur mesure.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg group"
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