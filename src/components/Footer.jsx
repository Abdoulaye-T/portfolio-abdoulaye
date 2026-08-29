import { Github, Linkedin, MessageCircle, ArrowUp } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', icon: Github, url: 'https://github.com/Abdoulaye-T' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/abdoulaye-traore-73928924a/' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/22392353120' },
];

const quickLinks = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Parcours', href: '#education' },
  { name: 'Projets', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
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
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Développeur Full Stack passionné par la création d'applications web et mobile
              fiables. Toujours à la recherche de nouveaux défis techniques et de
              collaborations enrichissantes.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-ink/80 hover:text-gold transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted mb-4">Me suivre</p>
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
          <p className="text-xs text-muted">
            © {currentYear} Abdoulaye Traoré. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-muted">
              <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
              Disponible pour nouveaux projets
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
