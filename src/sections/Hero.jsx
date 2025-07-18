import { motion } from "framer-motion";
import { Download, ArrowDown, Code, Globe, Smartphone, Settings } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    { text: "Développeur Full Stack", icon: Code },
    { text: "Développeur Mobile", icon: Smartphone },
    { text: "Développeur WordPress", icon: Globe },
    { text: "Intégrateur ERP Odoo", icon: Settings }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Animation plus subtile pour la card
  const subtleFloatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background decorative elements - légèrement réduits */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/4 to-purple-500/4 rounded-full blur-3xl"></div>
      </div>

      {/* Grid pattern overlay - plus subtil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-15"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Disponible pour nouveaux projets
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Abdoulaye</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Traoré
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="h-16 flex items-center">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    {(() => {
                      const IconComponent = roles[currentRole].icon;
                      return <IconComponent className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <span className="text-2xl lg:text-3xl font-semibold text-blue-100">
                    {roles[currentRole].text}
                  </span>
                </motion.div>
              </div>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Je transforme vos idées en solutions digitales performantes. 
                Expert en développement moderne avec un focus sur l'innovation et la qualité.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="/cv-abdoulaye-traore.pdf"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <Download className="w-5 h-5 group-hover:animate-pulse" />
                Télécharger mon CV
              </motion.a>
              
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                Voir mes projets
                <ArrowDown className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Ajout de metrics professionnelles */}
            <motion.div variants={itemVariants} className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">3+</div>
                <div className="text-sm text-gray-400">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-gray-400">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-400">Clients satisfaits</div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <p className="text-sm text-gray-400 italic">
                "Excellence technique, solutions sur mesure."
              </p>
            </motion.div>
          </motion.div>

          {/* Visual Element - Animations réduites */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              variants={subtleFloatVariants}
              initial="initial"
              animate="animate"
              className="relative"
            >
              {/* Main card */}
              <motion.div
                variants={itemVariants}
                className="relative z-10 w-80 h-96 bg-gradient-to-br from-white/12 to-white/6 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center font-bold text-lg text-white">
                      A
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Abdoulaye Traoré</h3>
                      <p className="text-sm text-gray-300">Développeur Full Stack</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">3+</div>
                      <div className="text-sm text-gray-300">Années</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">25+</div>
                      <div className="text-sm text-gray-300">Projets</div>
                    </div>
                  </div>
                  
                  {/* Tech stack preview */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-300">Stack technique</p>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'Node.js', 'Python', 'WordPress', 'Odoo'].map((tech, index) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-white backdrop-blur-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Status professionnel */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Disponible immédiatement
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Bamako, Mali (Remote OK)
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Éléments flottants - Animation uniquement au hover */}
              <motion.div
                whileHover={{
                  y: -5,
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg cursor-pointer"
              >
                <Code className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                whileHover={{
                  y: -3,
                  scale: 1.05
                }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg cursor-pointer"
              >
                <Globe className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - plus discret */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-1 h-3 bg-white/40 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}