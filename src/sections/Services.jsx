import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Code,
  Smartphone,
  Settings,
  ArrowRight,
  Check,
  Trophy,
  Globe,
  ChevronLeft,
  ChevronRight,
  Layers,
  Cpu,
  ExternalLink,
  X,
} from 'lucide-react';

// ─── Données ────────────────────────────────────────────────────────────────

const services = [
  {
    id: 1,
    title: 'Développement Web & Applications Métiers',
    subtitle: 'Applications web sur mesure, robustes et évolutives',
    icon: Code,
    popular: false,
    badge: 'Expert',
    accentClass: 'from-indigo-500 to-violet-600',
    iconBg: 'bg-indigo-50 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    description:
      "Je conçois et développe des applications web adaptées aux besoins réels des entreprises : outils internes, plateformes métier, dashboards et APIs. J'interviens sur l'ensemble du cycle de vie, de la conception technique à la mise en production.",
    features: [
      { label: 'Applications web sur mesure', detail: 'Dashboards, CRM internes, outils métier adaptés à vos processus' },
      { label: 'APIs REST & intégrations tierces', detail: 'Connexion à des services externes (paiement, CRM, ERP…)' },
      { label: 'Bases de données relationnelles', detail: 'Conception, optimisation et sécurisation des schémas MySQL/PostgreSQL' },
      { label: 'Authentification & gestion des accès', detail: 'JWT, OAuth2, gestion des rôles et permissions' },
      { label: 'Tests, performances & déploiement', detail: 'CI/CD, monitoring, optimisation des temps de réponse' },
    ],
    technologies: ['React', 'Next.js', 'Angular', 'Laravel', 'Node.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Bootstrap', 'PHP', 'JavaScript', 'HTML', 'CSS', 'Python'],
  },
  {
    id: 2,
    title: 'WordPress & Solutions Business',
    subtitle: 'Sites professionnels, performants et optimisés',
    icon: Globe,
    popular: true,
    badge: 'Populaire',
    accentClass: 'from-amber-400 to-orange-500',
    iconBg: 'bg-amber-50 dark:bg-amber-900/20',
    iconColor: 'text-amber-600 dark:text-amber-400',
    description:
      "Je développe des sites WordPress avancés pour les entreprises souhaitant une présence en ligne professionnelle et performante. Au-delà du design, je veille à la qualité technique, à la sécurité et au SEO.",
    features: [
      { label: 'Sites vitrine & plateformes sur mesure', detail: 'Design unique, développement de thèmes enfants, page builders avancés' },
      { label: 'Personnalisations & fonctionnalités métier', detail: 'Formulaires complexes, CPT, ACF, plugins spécifiques' },
      { label: 'Optimisation SEO & performances', detail: 'Core Web Vitals, balises meta, sitemap, score Lighthouse +90' },
      { label: 'Sécurité & sauvegardes automatisées', detail: 'Firewall, mises à jour gérées, sauvegardes quotidiennes offsite' },
      { label: 'Maintenance & évolutions continues', detail: 'Suivi mensuel, ajout de fonctionnalités, support réactif' },
    ],
    technologies: ['WordPress', 'PHP', 'Elementor', 'Astra', 'SEO technique', 'Sécurité', 'Sauvegardes automatisées', 'Maintenance', 'Évolutions continues'],
  },
  {
    id: 3,
    title: 'Applications Mobile & Expériences Utilisateur',
    subtitle: 'Apps cross-platform connectées à vos systèmes existants',
    icon: Smartphone,
    popular: false,
    badge: 'Scalable',
    accentClass: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-50 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    description:
      "Je développe des applications mobiles cross-platform connectées à des back-ends fiables, offrant une expérience fluide sur iOS et Android, intégrées naturellement à vos outils existants.",
    features: [
      { label: 'Applications React Native iOS & Android', detail: 'Un seul codebase, expérience native sur les deux plateformes' },
      { label: 'Synchronisation API & données temps réel', detail: 'REST, WebSockets, notifications push' },
      { label: 'Authentification sécurisée', detail: 'Biométrie, JWT, OAuth, gestion des sessions' },
      { label: 'Publication & support initial', detail: 'Déploiement App Store & Google Play, suivi post-lancement' },
    ],
    technologies: ['React Native', 'Expo', 'Node.js', 'APIs REST', 'Firebase'],
  },
  {
    id: 4,
    title: 'ERP, Cloud & DevOps',
    subtitle: 'Automatisation des processus et systèmes métiers',
    icon: Settings,
    popular: false,
    badge: 'ROI Garanti',
    accentClass: 'from-sky-500 to-blue-600',
    iconBg: 'bg-sky-50 dark:bg-sky-900/20',
    iconColor: 'text-sky-600 dark:text-sky-400',
    description:
      "J'accompagne les entreprises dans l'automatisation de leurs processus métiers via des solutions ERP et cloud adaptées. Objectif : simplifier les flux, fiabiliser les données et booster la productivité.",
    features: [
      { label: 'Intégration complète Odoo (ERP)', detail: 'Paramétrage, migration de données, formation équipes incluse' },
      { label: 'Modules Odoo sur mesure', detail: 'Développement Python/XML pour des besoins métier spécifiques' },
      { label: 'Déploiement cloud & infrastructure', detail: 'AWS, serveurs VPS, conteneurisation Docker, Vagrant' },
      { label: 'Automatisation & intégrations externes', detail: 'Webhooks, scripts automatisés, connecteurs tiers' },
      { label: 'CI/CD, Tests & Monitoring', detail: 'GitLab CI, pipelines automatisés, alertes de performance' },
    ],
    technologies: ['Odoo', 'AWS', 'Docker', 'CI/CD', 'GitLab', 'Vagrant', 'Jmeter', 'Ansible', 'Jenkins'],
  },
];

const globalStats = [
  { icon: Trophy, value: '8+', label: 'Projets livrés' },
  { icon: Code, value: '3+', label: "Années d'expérience" },
];

// ─── Composant principal ─────────────────────────────────────────────────────

export default function Services() {
  const [current, setCurrent] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  const total = services.length;

  // Intersection observer for header animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback(
    (idx, dir = 1) => {
      if (animating) return;
      setAnimating(true);
      setDirection(dir);
      setCurrent(idx);
      setTimeout(() => setAnimating(false), 400);
    },
    [animating]
  );

  const goPrev = () => {
    const idx = (current - 1 + total) % total;
    goTo(idx, -1);
    resetTimer();
  };

  const goNext = useCallback(() => {
    const idx = (current + 1) % total;
    goTo(idx, 1);
  }, [current, total, goTo]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(goNext, 5000);
  };

  // Auto-play
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(goNext, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused, goNext]);

  // Keyboard nav + Escape for modal
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedService) {
        if (e.key === 'Escape') setSelectedService(null);
        return;
      }
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') { goNext(); resetTimer(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedService, current, goNext]);

  const service = services[current];
  const Icon = service.icon;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 bg-slate-50 dark:bg-gray-900 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* ── En-tête ── */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 mb-5">
            <Layers size={13} />
            Solutions Digitales Sur Mesure
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3">
            Mes{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Services</span>
          </h2>

          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            J'accompagne les entreprises dans la conception, le développement et la maintenance de solutions digitales fiables et évolutives.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto mb-10">
          {globalStats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-1.5 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-900/30">
                  <StatIcon size={16} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center">{stat.label}</span>
              </div>
            );
          })}
        </div>

        {/* ── Slider ── */}
        <div className="relative mb-10">

          {/* Indicateurs (dots) */}
          <div className="flex justify-center gap-2 mb-5">
            {services.map((s, i) => (
              <button
                key={s.id}
                onClick={() => { goTo(i, i > current ? 1 : -1); resetTimer(); }}
                aria-label={`Service ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-indigo-500' : 'w-3 bg-gray-300 dark:bg-gray-600 hover:bg-indigo-300 dark:hover:bg-indigo-700'}`}
              />
            ))}
          </div>

          {/* Numérotation */}
          <div className="flex items-center justify-between mb-4 px-1">
            <button
              onClick={goPrev}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 text-gray-500 dark:text-gray-400"
              aria-label="Service précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 tabular-nums">
              {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              onClick={() => { goNext(); resetTimer(); }}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 text-gray-500 dark:text-gray-400"
              aria-label="Service suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Card principale */}
          <div
            key={service.id}
            className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
            style={{
              animation: 'slideIn 0.35s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {/* Barre gradient en haut */}
            <div className={`h-1 w-full bg-gradient-to-r ${service.accentClass}`} />

            <div className="p-7 md:p-9">
              <div className="flex flex-col md:flex-row md:gap-10">

                {/* Colonne gauche */}
                <div className="flex-1 mb-6 md:mb-0">
                  {/* Header service */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`flex-shrink-0 flex items-center justify-center w-13 h-13 w-12 h-12 rounded-xl ${service.iconBg}`}>
                      <Icon size={22} className={service.iconColor} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">
                          {service.title}
                        </h3>
                        {service.popular && (
                          <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                            {service.badge}
                          </span>
                        )}
                        {!service.popular && (
                          <span className="flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-gray-700 dark:text-slate-300">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400">{service.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Techs */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-xs bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="group/btn inline-flex items-center gap-2 py-2.5 px-5 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-indigo-700 dark:hover:bg-indigo-100 transition-colors duration-300"
                  >
                    Voir le détail
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>

                {/* Colonne droite – liste features */}
                <div className="md:w-64 lg:w-72 flex-shrink-0">
                  <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                    Ce qui est inclus
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check size={14} className="flex-shrink-0 mt-0.5 text-indigo-500 dark:text-indigo-400" />
                        <div>
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200 block leading-snug">
                            {f.label}
                          </span>
                          <span className="text-xs text-gray-400 dark:text-gray-500 leading-snug">
                            {f.detail}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ── CTA global ── */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            <Cpu size={14} className="text-gray-400 dark:text-gray-600" />
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center border border-gray-800 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Un projet à concrétiser ?
            </h3>
            <p className="text-gray-400 mb-7 max-w-md mx-auto text-sm leading-relaxed">
              Discutons de vos besoins et construisons ensemble une solution adaptée à votre contexte.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-gray-900 rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-colors duration-300 shadow-sm"
            >
              Me contacter
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Modal ── */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header modal */}
            <div className={`h-1 w-full bg-gradient-to-r ${selectedService.accentClass}`} />
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${selectedService.iconBg}`}>
                  {(() => {
                    const ModalIcon = selectedService.icon;
                    return <ModalIcon size={20} className={selectedService.iconColor} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-snug">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {selectedService.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Fermer"
                className="flex-shrink-0 p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <X size={18} />
              </button>
            </div>

            {/* Corps modal */}
            <div className="p-6 space-y-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                  Ce qui est inclus
                </p>
                <ul className="space-y-3">
                  {selectedService.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check size={14} className="flex-shrink-0 mt-0.5 text-indigo-500" />
                      <div>
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 block">{f.label}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">{f.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-slate-100 dark:bg-gray-700 text-slate-600 dark:text-slate-300 rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="group flex items-center justify-center gap-2.5 w-full py-3.5 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-sm hover:bg-indigo-700 dark:hover:bg-indigo-100 transition-colors duration-300"
                >
                  Discuter de ce projet
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Animation keyframe ── */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}