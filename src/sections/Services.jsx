import { useState, useEffect } from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Settings, 
  Palette, 
  Rocket,
  ArrowRight,
  Check,
  Star,
  Zap,
  Trophy,
  Users,
  Clock,
  Sparkles
} from 'lucide-react';

// Définition des services avec badges optimisés
const services = [
  {
    id: 1,
    title: "Développement Web",
    subtitle: "Applications web modernes & performantes",
    icon: <Code size={28} />,
    gradient: "from-blue-500 to-purple-500",
    description: "Transformez votre vision en application web haute performance qui convertit vos visiteurs en clients.",
    features: [
      "Applications React/Laravel sur mesure",
      "API REST & GraphQL optimisées",
      "Base de données haute performance",
      "Design responsive premium",
      "SEO & Core Web Vitals optimisés"
    ],
    technologies: ["React", "Angular", "PHP & Laravel", "Express & Node.js", "MySQL", "Tailwind CSS"],
    stats: {
      projects: "5+",
      satisfaction: "100% (5 clients)",
      avgTime: "4 sem"
    },
    popular: false,
    badge: "Expert"
  },
  {
    id: 2,
    title: "Applications Mobile",
    subtitle: "iOS & Android avec une seule base de code",
    icon: <Smartphone size={28} />,
    gradient: "from-yellow-400 to-orange-500",
    description: "Créez une app mobile qui rivalise avec les plus grandes, disponible sur iOS et Android simultanément.",
    features: [
      "React Native / Flutter premium",
      "Interface native fluide",
      "Intégrations API avancées",
      "Push notifications intelligentes",
      "Publication stores incluse"
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Supabase", "REST API"],
    stats: {
      projects: "2+",
      satisfaction: "98% (4 clients)",
      avgTime: "6 sem"
    },
    popular: true,
    badge: "Populaire"
  },
  {
    id: 3,
    title: "Solutions Cloud",
    subtitle: "Infrastructure scalable & sécurisée",
    icon: <Cloud size={28} />,
    gradient: "from-blue-500 to-purple-500",
    description: "Scalez votre business sans limites avec une infrastructure cloud qui grandit avec vous.",
    features: [
      "Déploiement AWS/Azure certifié",
      "CI/CD automatisé avancé",
      "Monitoring & alertes 24/7",
      "Sauvegarde multi-zones",
      "Optimisation coûts -40%"
    ],
    technologies: ["AWS", "Docker", "SaaS", "PaaS", "IaaS"],
    stats: {
      projects: "En cours",
      satisfaction: null,
      avgTime: "2 sem"
    },
    popular: false,
    badge: "Scalable"
  },
  {
    id: 4,
    title: "Automatisation ERP",
    subtitle: "Optimisation des processus métier",
    icon: <Settings size={28} />,
    gradient: "from-blue-500 to-purple-500",
    description: "Éliminez les tâches répétitives et gagnez 40% de temps avec Odoo personnalisé pour votre métier.",
    features: [
      "Implémentation Odoo complète",
      "Modules métier sur mesure",
      "Migration données sécurisée",
      "Formation équipes incluse",
      "Maintenance continue"
    ],
    technologies: ["ERP", "Odoo"],
    stats: {
      projects: "3+",
      satisfaction: "95% (2 clients)",
      avgTime: "3 sem"
    },
    popular: false,
    badge: "ROI Garanti"
  },
  {
    id: 5,
    title: "Sites Vitrine & E-commerce",
    subtitle: "Présence web qui convertit",
    icon: <Palette size={28} />,
    gradient: "from-blue-500 to-purple-500",
    description: "Un site web qui transforme vos visiteurs en clients avec un design qui marque les esprits.",
    features: [
      "Design premium sur mesure",
      "Optimisation conversion +150%",
      "SEO première page Google",
      "Paiements sécurisés Stripe",
      "Analytics & heatmaps inclus"
    ],
    technologies: ["WordPress", "Wix", "WooCommerce", "Stripe", "Paypal", "Mobile Money"],
    stats: {
      projects: "3+",
      satisfaction: "99% (3 clients)",
      avgTime: "2 sem"
    },
    popular: false,
    badge: "Conversion+"
  },
  {
    id: 6,
    title: "Conseil & Audit",
    subtitle: "Expertise technique & stratégique",
    icon: <Rocket size={28} />,
    gradient: "from-blue-500 to-purple-500",
    description: "Révélez le potentiel caché de votre stack technique et multipliez vos performances par 3.",
    features: [
      "Audit technique 360° complet",
      "Plan d'action détaillé",
      "Roadmap technologique 2024",
      "Optimisation performance +200%",
      "ROI calculé et garanti"
    ],
    technologies: [], // Supprimé les concepts vagues
    stats: {
      projects: "En cours",
      satisfaction: null,
      avgTime: "1 sem"
    },
    popular: false,
    badge: "Stratégique"
  }
];

// Statistiques globales
const globalStats = [
  { icon: <Trophy size={20} />, value: "5+", label: "Projets livrés" },
  { icon: <Users size={20} />, value: "98%", label: "Clients satisfaits" },
  { icon: <Zap size={20} />, value: "5★", label: "Note moyenne" },
  { icon: <Clock size={20} />, value: "48h", label: "Première réponse" }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer pour les animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative overflow-hidden"
    >
      {/* Décorations de fond */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 dark:from-blue-400/20 dark:to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* En-tête */}
        <div
          id="header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full mb-6">
            <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Solutions digitales premium</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            Mes Services
            <span className="block text-3xl md:text-4xl mt-2 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
              qui transforment votre business
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Des solutions sur mesure qui ont déjà aidé <strong>3+ entreprises</strong> à digitaliser leur activité et multiplier leur chiffre d'affaires
          </p>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Statistiques globales */}
        <div
          id="stats"
          data-animate
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-200 ${
            isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {globalStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200/50 dark:border-blue-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-3 text-white">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Grille des services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={`service-${service.id}`}
              data-animate
              className={`group relative transition-all duration-1000 ${
                isVisible[`service-${service.id}`]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge Populaire */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                    🔥 POPULAIRE
                  </div>
                </div>
              )}

              {/* Badge du service */}
              <div className="absolute -top-2 -left-2 z-10">
                <div
                  className={`bg-gradient-to-r ${
                    service.popular ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-purple-500'
                  } text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}
                >
                  {service.badge}
                </div>
              </div>

              <div className="h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/20 dark:border-blue-700/20 relative overflow-hidden group-hover:-translate-y-3 group-hover:scale-[1.02]">
                {/* En-tête du service */}
                <div className="text-center mb-6 relative z-10">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${
                      service.popular ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-purple-500'
                    } mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{service.subtitle}</p>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {service.stats.projects && (
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-800 dark:text-gray-100">{service.stats.projects}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Projets</div>
                    </div>
                  )}
                  {service.stats.satisfaction && (
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{service.stats.satisfaction}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">Satisfaction</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{service.stats.avgTime}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">Livraison</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Fonctionnalités */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <Check size={16} className="text-green-500" />
                    Ce qui est inclus :
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                        <Check className="text-green-500 flex-shrink-0 mt-0.5" size={14} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {service.technologies.length > 0 && (
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200/50 dark:border-blue-700/50 font-medium backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bouton CTA */}
                <button
                  onClick={() => setSelectedService(service)}
                  className={`w-full flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r ${
                    service.popular ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-purple-500'
                  } text-white rounded-2xl font-bold hover:shadow-2xl transition-all duration-500 group-hover:scale-105 relative overflow-hidden text-sm group/button`}
                >
                  <span className="relative z-10">Démarrer maintenant</span>
                  <ArrowRight size={16} className="relative z-10 group-hover/button:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 transform translate-x-full group-hover/button:translate-x-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA global */}
        <div
          id="cta"
          data-animate
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full mb-6">
                <Sparkles size={16} className="text-white" />
                <span className="text-sm font-bold text-white">Consultation stratégique gratuite</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prêt à transformer votre business ?
              </h3>
              <p className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Rejoignez les <strong>3+ entreprises</strong> qui ont déjà fait confiance à mon expertise. 
                <span className="block mt-2">💡 Consultation stratégique de 30min</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-xl text-lg min-w-[250px]"
                >
                  <span>🚀 Consultation gratuite</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="tel:+33123456789"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg min-w-[250px]"
                >
                  <span>📞 Appel immédiat</span>
                </a>
              </div>
              {/* <div className="mt-6 text-white/80 text-sm">
                ⏰ Réservez avant le 15 août
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200/20 dark:border-blue-700/20 animate-in slide-in-from-bottom duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${
                    selectedService.popular ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-purple-500'
                  } text-white`}
                >
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                    {selectedService.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {selectedService.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-3xl font-light hover:scale-110 transition-all duration-200"
              >
                ×
              </button>
            </div>
            
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-6 mb-6">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {service.stats.projects && (
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/50 dark:border-blue-700/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedService.stats.projects}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projets réalisés</div>
                </div>
              )}
              {service.stats.satisfaction && (
                <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/50 dark:border-blue-700/50">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedService.stats.satisfaction}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Satisfaction client</div>
                </div>
              )}
              <div className="text-center p-4 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/50 dark:border-blue-700/50">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{selectedService.stats.avgTime}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Délai moyen</div>
              </div>
            </div>
            
            <div className="space-y-6">
              <a
                href="#contact"
                className={`block w-full text-center py-4 px-8 bg-gradient-to-r ${
                  selectedService.popular ? 'from-yellow-400 to-orange-500' : 'from-blue-500 to-purple-500'
                } text-white rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 text-lg hover:scale-[1.02]`}
                onClick={() => setSelectedService(null)}
              >
                🚀 Lancer ce projet maintenant
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}