import { Link } from "react-scroll";
import { useState, useEffect, useCallback } from "react";
import useTheme from '../hooks/useTheme';
import { useLanguage } from '../i18n/LanguageContext';
import { Menu, X, Sun, Moon, ArrowDownToLine } from "lucide-react";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  const closeMenu = useCallback(() => setNav(false), []);
  const toggleMenu = useCallback(() => setNav((prev) => !prev), []);
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, [setTheme]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [nav]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && nav) closeMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [nav, closeMenu]);

  const links = t.nav.links;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-md border-line'
            : 'bg-transparent border-transparent'
        }`}
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="flex justify-between items-center px-6 lg:px-10 py-5 max-w-editorial mx-auto">

          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer group flex items-baseline gap-1"
            aria-label="Retour à l'accueil"
          >
            <span className="font-serif text-xl font-semibold tracking-tight text-ink">
              Abdoulaye
            </span>
            <span className="text-gold text-xl font-serif">.</span>
          </Link>

          {/* Navigation desktop */}
          <ul className="hidden lg:flex items-center gap-1" role="menubar">
            {links.map(({ id, label, to }) => (
              <li key={id} role="none">
                <Link
                  to={to}
                  smooth
                  duration={500}
                  offset={-80}
                  spy={true}
                  onSetActive={() => setActiveSection(to)}
                  className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                    activeSection === to ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                  role="menuitem"
                >
                  <span className={`font-mono text-[11px] transition-colors duration-200 ${activeSection === to ? 'text-gold' : 'text-muted/60 group-hover:text-gold'}`}>
                    {id}
                  </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Contrôles à droite */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLang}
              className="p-2.5 rounded-full text-ink hover:text-gold hover:bg-surface2 transition-colors duration-300 font-mono text-xs font-semibold w-9 h-9 flex items-center justify-center"
              title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
              aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>

            <a
              href="/Abdoulaye_Traoré_CV_développeur_Fullstack.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-ink text-sm font-medium hover:border-gold hover:text-gold transition-colors duration-300"
              aria-label={t.nav.downloadCv}
            >
              <ArrowDownToLine size={14} />
              <span>{t.nav.cv}</span>
            </a>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-ink hover:text-gold hover:bg-surface2 transition-colors duration-300"
              title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
              aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={toggleMenu}
              className="lg:hidden p-2.5 rounded-full text-ink hover:text-gold hover:bg-surface2 transition-colors duration-300"
              aria-label="Menu de navigation"
              aria-expanded={nav}
              aria-controls="mobile-menu"
            >
              {nav ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile plein écran */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!nav}
        className={`fixed inset-0 z-40 lg:hidden bg-bg transition-opacity duration-300 ${
          nav ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-10">
          <ul className="flex-1 flex flex-col justify-center gap-2" role="menu">
            {links.map(({ id, label, to }, index) => (
              <li key={id} role="none">
                <Link
                  to={to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={closeMenu}
                  className={`flex items-baseline gap-4 py-3 border-b border-line group transition-all duration-300 ${
                    nav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 40}ms` }}
                  role="menuitem"
                >
                  <span className="font-mono text-sm text-gold">{id}</span>
                  <span className="font-serif text-3xl text-ink group-hover:text-gold transition-colors duration-200">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between pt-6">
            <a
              href="/Abdoulaye_Traoré_CV_développeur_Fullstack.pdf"
              download
              onClick={closeMenu}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-ink text-sm font-medium hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <ArrowDownToLine size={14} />
              {t.nav.downloadCv}
            </a>
            <button
              onClick={toggleLang}
              className="font-mono text-xs text-muted hover:text-gold transition-colors duration-200"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
