import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 md:px-20 py-10 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Logo + nom */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center">
            A
          </div>
          <span>Abdoulaye Traoré</span>
        </div>

        {/* Navigation rapide */}
        <nav className="flex flex-wrap gap-4 text-sm font-medium">
          <a href="#home" className="hover:text-purple-600 transition">Accueil</a>
          <a href="#about" className="hover:text-purple-600 transition">À propos</a>
          <a href="#experience" className="hover:text-purple-600 transition">Expérience</a>
          <a href="#portfolio" className="hover:text-purple-600 transition">Portfolio</a>
          <a href="#skills" className="hover:text-purple-600 transition">Compétences</a>
          <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
        </nav>

        {/* Réseaux sociaux */}
        <div className="flex gap-4 text-xl">
          <a
            href="github.com/Abdoulaye-T"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdoulaye-traore-73928924a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/22392353120"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Mentions */}
      <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Abdoulaye Traoré. Tous droits réservés.
      </div>
    </footer>
  );
}
