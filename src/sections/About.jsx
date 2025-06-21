// src/sections/About.jsx
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Illustration from "../assets/illustration 1.jpg"; // Assurez-vous que le chemin est correct

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Texte */}
        <div>
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-purple-500 inline-block">
            À propos de moi
          </h2>
          <p className="mb-4 leading-relaxed">
            Je m'appelle <strong>Abdoulaye Traoré</strong>, développeur web & mobile passionné par la création de solutions numériques efficaces, élégantes et durables.
            Fort d’une double compétence technique et créative, je conçois des interfaces intuitives tout en assurant robustesse côté backend.
          </p>
          <p className="mb-4 leading-relaxed">
            Je m'intéresse particulièrement au **Cloud computing**, à l’**automatisation DevOps** et à l’impact de la technologie sur la société. 
            Mon objectif : résoudre des problèmes réels avec du code clair et une vision centrée utilisateur.
          </p>

          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 dark:bg-purple-500 text-white dark:text-white hover:bg-purple-700 dark:hover:bg-purple-400 transition"
            >
              Me contacter <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Bloc visuel (optionnel) */}
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={Illustration}
            alt="Développeur au travail"
            className="w-64 md:w-80"
          />
        </div>
      </motion.div>

      {/* Badges de compétences */}
        <div className="flex flex-wrap gap-3 mt-6">
        {["React", "Laravel", "Tailwind CSS", "AWS", "Node.js", "MySQL", "Git"].map((tech, index) => (
            <span
            key={index}
            className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800 rounded-full"
            >
            {tech}
            </span>
        ))}
        </div>

        {/* Objectif professionnel
        <div className="mt-8 p-4 rounded-xl bg-gray-100 border-l-4 border-purple-500 shadow-sm">
        <h3 className="text-lg font-semibold mb-1">🎯 Objectif professionnel</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
            Intégrer une équipe ambitieuse ou accompagner des projets innovants en tant que développeur fullstack / cloud. 
            Apporter des solutions techniques solides tout en continuant à me former sur les technologies émergentes.
        </p>
        </div> */}

    </section>
  );
}
