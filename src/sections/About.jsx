import { motion } from "framer-motion";
import { FaArrowRight, FaCode, FaLightbulb, FaRocket, FaHeart } from "react-icons/fa";
import Illustration from "../assets/illustration 1.jpg";

export default function About() {
  const techStack = [
    { name: "React", color: "from-blue-400 to-blue-600", icon: "⚛️" },
    { name: "Laravel", color: "from-red-400 to-red-600", icon: "🐘" },
    { name: "Tailwind CSS", color: "from-cyan-400 to-cyan-600", icon: "🎨" },
    { name: "AWS", color: "from-orange-400 to-orange-600", icon: "☁️" },
    { name: "Node.js", color: "from-green-400 to-green-600", icon: "🟢" },
    { name: "MySQL", color: "from-blue-500 to-blue-700", icon: "🗄️" },
    { name: "Git", color: "from-gray-400 to-gray-600", icon: "🔧" }
  ];

  const highlights = [
    {
      icon: <FaCode className="text-purple-500" />,
      title: "Code avec intention",
      description: "Chaque ligne écrite a un but précis"
    },
    {
      icon: <FaLightbulb className="text-yellow-500" />,
      title: "Innovation constante",
      description: "Toujours à l'affût des nouvelles technologies"
    },
    {
      icon: <FaRocket className="text-blue-500" />,
      title: "Solutions performantes",
      description: "Des applications rapides et optimisées"
    },
    {
      icon: <FaHeart className="text-red-500" />,
      title: "Passion authentique",
      description: "L'amour du code et de la création"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10 text-gray-800 dark:text-gray-100 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-3xl">👨‍💻</span>
                  Développeur web & mobile passionné
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  Je code pour <span className="font-semibold text-purple-600 dark:text-purple-400">donner vie à des idées</span>, 
                  résoudre des problèmes réels et créer des outils qui ont du sens.
                </p>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                  Mon parcours est fait de <span className="font-semibold">curiosité</span>, d'apprentissage constant, 
                  et d'une volonté profonde de construire des solutions numériques 
                  <span className="font-semibold text-blue-600 dark:text-blue-400"> utiles, durables et humaines</span>.
                </p>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  J'ai appris à faire cohabiter le sens du détail visuel avec la rigueur du backend : 
                  chaque interface que je crée doit être <span className="font-semibold">fluide, claire, et pensée pour ceux qui l'utilisent</span>.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-700/50">
              <p className="text-center italic text-lg font-medium">
                "Chaque ligne de code est une brique dans l'édifice d'un monde numérique plus accessible et plus efficace."
              </p>
            </div>

            <div className="space-y-3">
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                Je m'intéresse de près au <span className="font-semibold text-blue-600 dark:text-blue-400">cloud computing</span>, 
                à l'<span className="font-semibold text-green-600 dark:text-green-400">automatisation des processus (ERP Odoo)</span>, 
                et à tout ce qui permet à la technologie de mieux servir l'humain.
              </p>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                <FaRocket />
                <span>Mon ambition : coder avec intention, bâtir avec clarté, et contribuer à des projets qui laissent une trace positive.</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative group">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl transform rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl transform -rotate-6 group-hover:-rotate-3 transition-transform duration-500"></div>
              
              {/* Main image */}
              <div className="relative bg-white dark:bg-gray-800 p-4 rounded-3xl shadow-2xl">
                <img
                  src={Illustration}
                  alt="Développeur au travail"
                  className="w-full h-auto rounded-2xl"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-bounce">
                  💡
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse">
                  🚀
                </div>
              </div>
            </div>
          </motion.div>
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-100">
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
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
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
                className={`group relative overflow-hidden px-6 py-3 rounded-full bg-gradient-to-r ${tech.color} text-white font-medium shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-default`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg group-hover:animate-bounce">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à donner vie à votre projet ?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Discutons de votre vision et créons ensemble quelque chose d'extraordinaire
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg group"
            >
              Me contacter 
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}