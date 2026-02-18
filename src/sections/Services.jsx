import { useState, useEffect, useRef } from 'react';
import {
  Code,
  Smartphone,
  Settings,
  ArrowRight,
  Check,
  Trophy,
  X,
  ExternalLink,
  Layers,
  Cpu,
  Globe,
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
    description:
      "Je conçois et développe des applications web adaptées aux besoins réels des entreprises : outils internes, plateformes métier, dashboards, APIs et systèmes connectés. J'interviens sur l'ensemble du cycle de vie du projet, de la conception technique à la mise en production, avec une attention particulière portée à la performance, à la sécurité et à la maintenabilité du code.",
    features: [
      'Applications web sur mesure',
      'API REST & intégrations tierces',
      'Bases de données relationnelles',
      'Sécurité, authentification et gestion des accès',
      'Tests, optimisation des performances et déploiement',
    ],
    technologies: ['React', 'Angular', 'Laravel', 'Node.js', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'WordPress & Solutions Business',
    subtitle: 'Sites professionnels, performants et optimisés',
    icon: Globe,
    popular: true,
    badge: 'Populaire',
    description:
      "Je développe des sites WordPress avancés pour les entreprises souhaitant une présence en ligne professionnelle, performante et évolutive. Au-delà du design, je veille à la qualité technique : structure du code, performance, sécurité, SEO et facilité de maintenance.",
    features: [
      'Sites vitrine et plateformes WordPress sur mesure',
      'Thèmes enfants et personnalisations avancées',
      'Optimisation SEO et performances',
      'Sécurité et sauvegardes',
      'Maintenance et évolutions continues',
    ],
    technologies: ['WordPress', 'PHP', 'Elementor', 'Astra', 'SEO technique'],
  },
  {
    id: 3,
    title: 'Applications Mobile & Expériences Utilisateur',
    subtitle: 'Apps cross-platform connectées à vos systèmes existants',
    icon: Smartphone,
    popular: false,
    badge: 'Scalable',
    description:
      "Je développe des applications mobiles cross-platform connectées à des back-ends fiables, permettant de centraliser les données et d'offrir une expérience utilisateur fluide sur iOS et Android. Ces applications sont pensées pour s'intégrer naturellement à vos outils existants.",
    features: [
      'Applications mobiles React Native',
      'Connexion API & synchronisation des données',
      'Authentification sécurisée',
      'Déploiement et support initial',
    ],
    technologies: ['React Native', 'Node.js', 'APIs REST', 'Firebase'],
  },
  {
    id: 4,
    title: 'ERP, Cloud & Automatisation',
    subtitle: 'Optimisation des processus et systèmes métiers',
    icon: Settings,
    popular: false,
    badge: 'ROI Garanti',
    description:
      "J'accompagne les entreprises dans l'automatisation de leurs processus métiers grâce à des solutions ERP et cloud adaptées à leurs besoins. Mon objectif est de simplifier les flux de travail, fiabiliser les données et améliorer la productivité des équipes.",
    features: [
      'Implémentation et personnalisation Odoo',
      'Développement de modules métier',
      'Déploiement cloud et configuration des environnements',
      'Automatisation de tâches et intégrations externes',
      'Formation équipes incluse',
    ],
    technologies: ['Odoo', 'AWS', 'Docker', 'CI/CD'],
  },
];

const globalStats = [
  { icon: Trophy, value: '8+', label: 'Projets livrés' },
  { icon: Code, value: '3+', label: "Années d'expérience" },
];

// ─── Composant principal ─────────────────────────────────────────────────────

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [visibleIds, setVisibleIds] = useState(new Set());
  const sectionRef = useRef(null);

  // Intersection Observer pour les animations d'entrée
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleIds((prev) => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets = sectionRef.current?.querySelectorAll('[data-id]') ?? [];
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Fermer le modal avec Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const isVisible = (id) => visibleIds.has(String(id));

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 bg-slate-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Décoration de fond : grille subtile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(99,102,241,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ── En-tête ── */}
        <div
          data-id="header"
          className={`text-center mb-16 transition-all duration-700 ${isVisible('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          {/* Pill badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 mb-6">
            <Layers size={13} />
            Solutions Digitales Sur Mesure
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4">
            Mes{' '}
            <span className="text-indigo-600 dark:text-indigo-400">Services</span>
          </h2>

          <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            J'accompagne les entreprises et organisations dans la conception, le développement
            et la maintenance de solutions digitales fiables, performantes et évolutives.
          </p>

          {/* Séparateur */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
            <div className="w-2 h-2 rounded-full bg-indigo-500" />
            <div className="h-px w-12 bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>

        {/* ── Statistiques globales ── */}
        <div
          data-id="stats"
          className={`grid grid-cols-2 gap-4 max-w-sm mx-auto mb-16 transition-all duration-700 delay-100 ${isVisible('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          {globalStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30">
                  <Icon size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 text-center">{stat.label}</span>
              </div>
            );
          })}
        </div>

        {/* ── Grille des services ── */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                data-id={`service-${service.id}`}
                className={`transition-all duration-700 ${isVisible(`service-${service.id}`)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden">

                  {/* Bande colorée en haut pour le service populaire */}
                  {service.popular && (
                    <div className="h-1 w-full bg-indigo-500" />
                  )}

                  <div className="flex flex-col flex-1 p-7">
                    {/* En-tête de la carte */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex items-center justify-center w-12 h-12 rounded-xl ${service.popular
                            ? 'bg-amber-50 dark:bg-amber-900/20'
                            : 'bg-indigo-50 dark:bg-indigo-900/30'
                            }`}
                        >
                          <Icon
                            size={22}
                            className={
                              service.popular
                                ? 'text-amber-600 dark:text-amber-400'
                                : 'text-indigo-600 dark:text-indigo-400'
                            }
                          />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                            {service.title}
                          </h3>
                          <p className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Badge */}
                      <span
                        className={`flex-shrink-0 ml-3 px-2.5 py-1 rounded-full text-xs font-semibold ${service.popular
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-gray-700 dark:text-slate-300'
                          }`}
                      >
                        {service.badge}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Fonctionnalités */}
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                        Ce qui est inclus
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                            <Check
                              size={14}
                              className="flex-shrink-0 mt-0.5 text-indigo-500 dark:text-indigo-400"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
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
                    <div className="mt-auto">
                      <button
                        onClick={() => setSelectedService(service)}
                        className="group/btn w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-indigo-700 dark:hover:bg-indigo-100 transition-colors duration-300"
                      >
                        En savoir plus
                        <ArrowRight
                          size={15}
                          className="group-hover/btn:translate-x-1 transition-transform duration-200"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA global ── */}
        <div
          data-id="cta"
          className={`transition-all duration-700 delay-300 ${isVisible('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
        >
          {/* Ligne décorative */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            <Cpu size={16} className="text-gray-400 dark:text-gray-600" />
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-10 md:p-14 text-center border border-gray-800 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Un projet à concrétiser ?
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Discutons de vos besoins et voyons comment construire une solution adaptée à votre contexte.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-gray-900 rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-colors duration-300 shadow-sm"
            >
              Me contacter
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
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
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center justify-center w-11 h-11 rounded-xl ${selectedService.popular
                    ? 'bg-amber-50 dark:bg-amber-900/20'
                    : 'bg-indigo-50 dark:bg-indigo-900/30'
                    }`}
                >
                  {(() => {
                    const Icon = selectedService.icon;
                    return (
                      <Icon
                        size={20}
                        className={
                          selectedService.popular
                            ? 'text-amber-600 dark:text-amber-400'
                            : 'text-indigo-600 dark:text-indigo-400'
                        }
                      />
                    );
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
              {/* Description */}
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                  Ce qui est inclus
                </p>
                <ul className="space-y-2.5">
                  {selectedService.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <Check size={14} className="flex-shrink-0 mt-0.5 text-indigo-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
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

              {/* CTA modal */}
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
    </section>
  );
}