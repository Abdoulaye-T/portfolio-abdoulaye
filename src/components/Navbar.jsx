import { Link } from "react-scroll";
import { useState, useEffect, useCallback } from "react";
import useTheme from '../hooks/useTheme';
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from "react-icons/fa";

const links = [
  { id: 1, name: "Accueil", to: "hero" },
  { id: 2, name: "À propos", to: "about" },
  { id: 3, name: "Services", to: "services" },
  { id: 4, name: "Parcours", to: "education" },
  { id: 5, name: "Portfolio", to: "portfolio" },  
  { id: 6, name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useTheme();

  // Optimisation avec useCallback pour éviter les re-renders
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const closeMenu = useCallback(() => {
    setNav(false);
  }, []);

  const toggleMenu = useCallback((e) => {
    e.stopPropagation();
    setNav(prev => !prev);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, [setTheme]);

  // Gestion du scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Gestion du clic en dehors du menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nav && !e.target.closest('.mobile-menu-container')) {
        closeMenu();
      }
    };
    
    if (nav) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [nav, closeMenu]);

  // Gestion de la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && nav) {
        closeMenu();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [nav, closeMenu]);

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
            : 'bg-black/20 backdrop-blur-sm'
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-7xl mx-auto">
          
          {/* Logo */}
          <Link 
            to="hero" 
            smooth 
            duration={500} 
            className="cursor-pointer group"
            aria-label="Retour à l'accueil"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300">
                A
              </div>
              <span className={`font-bold text-xl transition-colors duration-300 text-white ${
                scrolled ? 'lg:text-gray-900 lg:dark:text-white' : ''
              }`}>
                Abdoulaye
              </span>
            </div>
          </Link>

          {/* Navigation desktop */}
          <ul className="hidden lg:flex space-x-8" role="menubar">
            {links.map(({ id, name, to }) => (
              <li key={id} role="none">
                <Link 
                  to={to} 
                  smooth 
                  duration={500}
                  spy={true}
                  activeClass="active"
                  onSetActive={() => setActiveSection(to)}
                  className={`cursor-pointer font-medium transition-all duration-300 relative hover:text-purple-400 py-2 px-1 text-white ${
                    scrolled ? 'lg:text-gray-900 lg:dark:text-white' : ''
                  } ${activeSection === to ? 'text-purple-400' : ''}`}
                  role="menuitem"
                >
                  {name}
                  {/* Indicateur de section active */}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-purple-400 rounded-full transition-all duration-300 ${
                    activeSection === to ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contrôles à droite */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Bouton CV - desktop uniquement */}
            <a
              href="/cv-abdoulaye-traore.pdf"
              download
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
              aria-label="Télécharger mon CV"
            >
              <FaDownload size={14} />
              <span className="hidden md:inline">CV</span>
            </a>

            {/* Toggle thème */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 hover:scale-110 text-white hover:bg-white/20 ${
                scrolled ? 'lg:text-gray-900 lg:dark:text-white lg:hover:bg-gray-100 lg:dark:hover:bg-gray-800' : ''
              }`}
              title={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
              aria-label={`Passer en mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Burger menu */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                scrolled 
                  ? 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Menu de navigation"
              aria-expanded={nav}
              aria-controls="mobile-menu"
            >
              {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile */}
      <div 
        className={`mobile-menu-container fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          nav ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!nav}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
          aria-label="Fermer le menu"
        ></div>
        
        {/* Menu panel */}
        <div 
          className={`absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-title"
        >
          
          {/* Header du menu */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                A
              </div>
              <span id="mobile-menu-title" className="font-bold text-lg text-gray-800 dark:text-white">
                Navigation
              </span>
            </div>
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors duration-200"
              aria-label="Fermer le menu"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* Navigation mobile */}
          <div className="p-6">
            <ul className="space-y-2" role="menu">
              {links.map(({ id, name, to }) => (
                <li key={id} role="none">
                  <Link 
                    to={to} 
                    smooth 
                    duration={500}
                    onClick={closeMenu}
                    className="block py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 font-medium"
                    role="menuitem"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions supplémentaires */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <a
                href="/cv-abdoulaye-traore.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                onClick={closeMenu}
                aria-label="Télécharger mon CV"
              >
                <FaDownload size={16} />
                Télécharger CV
              </a>
              
              <div className="text-center">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Mode {theme === 'dark' ? 'sombre' : 'clair'} activé
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}