import { Github, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Abdoulaye-T' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/developpeur-fullstack' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/22392353120' },
];

export default function Footer() {
  const { t } = useLanguage();
  const { tagline, navTitle, followTitle, rights, availability } = t.footer;
  const navLinks = t.nav.links;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg text-ink border-t border-line">
      <div className="max-w-editorial mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-6">
            <p className="font-serif text-3xl mb-4">
              Abdoulaye<span className="text-gold">.</span>
            </p>
            <p className="text-muted text-sm max-w-sm leading-relaxed">{tagline}</p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">{navTitle}</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.to}`} className="text-sm text-ink/80 hover:text-gold transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">{followTitle}</p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-line rounded-full text-ink hover:border-gold hover:text-gold transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-line">
          <p className="text-xs text-muted">{rights(currentYear)}</p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              {availability}
            </div>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 flex items-center justify-center border border-line rounded-full text-ink hover:border-gold hover:text-gold transition-colors duration-200"
              aria-label="Retour en haut"
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
