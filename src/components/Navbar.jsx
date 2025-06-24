import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import useTheme from '../hooks/useTheme';
import { FaBars, FaTimes, FaMoon, FaSun, FaDownload } from "react-icons/fa";

const links = [
  { id: 1, name: "Accueil", to: "hero" },
  { id: 2, name: "À propos", to: "about" },
  { id: 3, name: "Service", to: "skills" },
  { id: 4, name: "Formation", to: "education" },
  { id: 5, name: "Expérience", to: "experience" },
  { id: 6, name: "Portfolio", to: "portfolio" },  
  { id: 7, name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useTheme();

  // Détection du scroll pour changer le style de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nav && !e.target.closest('.mobile-menu') && !e.target.closest('.burger-button')) {
        setNav(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [nav]);

  // Empêcher le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [nav]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        
        {/* Logo amélioré */}
        <Link to="hero" smooth duration={500} className="cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg hover:scale-110 transition-transform">
              A
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              Abdoulaye
            </span>
          </div>
        </Link>

        {/* Navigation desktop avec indicateur actif */}
        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, name, to }) => (
            <li key={id}>
              <Link 
                to={to} 
                smooth 
                duration={500}
                spy={true}
                activeClass="active"
                onSetActive={() => setActiveSection(to)}
                className={`text-gray-900 dark:text-white cursor-pointer font-medium transition-all duration-300 relative hover:text-purple-400 ${
                  activeSection === to ? 'text-purple-400' : ''
                }`}
              >
                {name}
                {/* Indicateur de section active */}
                {activeSection === to && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contrôles à droite */}
        <div className="flex items-center gap-4">
          
          {/* Toggle thème - toujours visible */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full transition-all hover:scale-110 text-gray-900 dark:text-white hover:bg-white/20"
            title="Changer de thème"
            aria-label="Changer de thème"
          >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Burger menu mobile */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setNav(!nav);
            }}
            className="text-gray-900 dark:text-white burger-button md:hidden p-2 rounded-full transition-all hover:scale-110 text-gray-900 hover:bg-white/20"
            aria-label="Menu"
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Menu mobile amélioré */}
      <div className={`mobile-menu fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden z-40 ${
        nav ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Header du menu mobile */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold">
                A
              </div>
              <span className="font-bold text-lg text-gray-800 dark:text-white">Menu</span>
            </div>
            <button
              onClick={() => setNav(false)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Navigation mobile */}
          <nav className="p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg">
            <ul className="space-y-2">
              {links.map(({ id, name, to }) => (
                <li key={id}>
                  <Link 
                    to={to} 
                    smooth 
                    duration={500}
                    onClick={() => setNav(false)}
                    className="block py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400 transition-all font-medium"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Actions supplémentaires dans le menu mobile */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href="/cv-abdoulaye-traore.pdf"
                download
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                onClick={() => setNav(false)}
              >
                <FaDownload /> Télécharger CV
              </a>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}













// import { Link } from "react-scroll";
// import { useState, useEffect } from "react";
// import useTheme from '../hooks/useTheme';
// import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

// const links = [
//   { id: 1, name: "Accueil", to: "hero" },
//   { id: 2, name: "À propos", to: "about" },
//   { id: 3, name: "Compétences", to: "skills" },
//   { id: 4, name: "Formation", to: "education" },
//   { id: 5, name: "Expérience", to: "experience" },
//   { id: 6, name: "Portfolio", to: "portfolio" },  
//   { id: 7, name: "Contact", to: "contact" },
// ];

// export default function Navbar() {
//   const [nav, setNav] = useState(false);
//   const [theme, setTheme] = useTheme();

//   return (
//     <div className="fixed w-full z-50 bg-gray-900 text-white shadow-md">
//       <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
//         <h1 className="text-2xl font-bold">A.</h1>

//         <ul className="hidden md:flex space-x-6">
//           {links.map(({ id, name, to }) => (
//             <li key={id} className="hover:text-blue-400 cursor-pointer">
//               <Link to={to} smooth duration={500}>
//                 {name}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Burger Menu */}
//         <div
//           onClick={() => setNav(!nav)}
//           className="md:hidden cursor-pointer z-50"
//         >
//           {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </div>

//         {/* Mobile Menu */}
//         {nav && (
//           <ul className="absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center space-y-6 text-2xl">
//             {links.map(({ id, name, to }) => (
//               <li key={id} onClick={() => setNav(false)}>
//                 <Link to={to} smooth duration={500}>
//                   {name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Theme Toggle */}
//         <button
//           onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//           className="text-xl text-yellow-500 dark:text-gray-200 hover:scale-110 transition"
//           title="Changer de thème"
//         >
//           {theme === 'dark' ? <FaSun /> : <FaMoon />}
//         </button>
//       </div>
//     </div>
//   );
// }
