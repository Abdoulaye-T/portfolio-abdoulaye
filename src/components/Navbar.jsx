import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import useTheme from '../hooks/useTheme';
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const links = [
  { id: 1, name: "Accueil", to: "hero" },
  { id: 2, name: "À propos", to: "about" },
  { id: 3, name: "Expérience", to: "experience" },
  { id: 4, name: "Compétences", to: "skills" },
  { id: 5, name: "Portfolio", to: "portfolio" },
  { id: 6, name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useTheme();

  return (
    <div className="fixed w-full z-50 bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">A.</h1>

        <ul className="hidden md:flex space-x-6">
          {links.map(({ id, name, to }) => (
            <li key={id} className="hover:text-blue-400 cursor-pointer">
              <Link to={to} smooth duration={500}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Menu */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden cursor-pointer z-50"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="absolute top-0 left-0 w-full h-screen bg-gray-900 flex flex-col justify-center items-center space-y-6 text-2xl">
            {links.map(({ id, name, to }) => (
              <li key={id} onClick={() => setNav(false)}>
                <Link to={to} smooth duration={500}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-xl text-yellow-500 dark:text-gray-200 hover:scale-110 transition"
          title="Changer de thème"
        >
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
}
