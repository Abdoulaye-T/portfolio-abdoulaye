import { FaDownload } from "react-icons/fa";
import heroImg from "../assets/hero.jpg"; // Remplace ou ajoute une vraie image
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16"
    >
      {/* Texte */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left space-y-4 md:w-1/2"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Abdoulaye Traoré
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-white/90">
          <Typewriter
            words={[
              "Développeur Web",
              "Développeur Mobile",
              "Développeur Wordpress",
              "Intégrateur ERP Odoo",
            ]}
            loop={0} // 0 = infini
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </h2>

        <p className="italic text-lg">
          “Un projet, une solution, un impact.”
        </p>

        <a
          href="/cv-abdoulaye-traore.pdf"
          download
          className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all duration-300"
        >
          <FaDownload /> Télécharger mon CV
        </a>
      </motion.div>

      {/* Image ou illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
      >
        <img
          src={heroImg}
          alt="Illustration de développeur"
          className="w-72 md:w-[350px] rounded-2xl shadow-2xl"
        />
      </motion.div>
      {/* <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
        <div className="relative group w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/20">
            <img
            src={heroImg} // ← ici tu mets ton vrai fichier : import heroImg from "../assets/abdoulaye.jpg"
            alt="Portrait de Abdoulaye Traoré"
            className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
        </div>
        </motion.div> */}

    </section>
  );
}