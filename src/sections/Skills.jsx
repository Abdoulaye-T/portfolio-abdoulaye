import { useState } from 'react';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Settings, 
  Palette, 
  Rocket,
  ArrowRight,
  Check,
  Star
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Développement Web",
    subtitle: "Applications web modernes & performantes",
    icon: <Code className="text-3xl text-blue-500" size={24} />,
    gradient: "from-blue-500 to-cyan-500",
    description: "Je crée des applications web sur mesure avec les dernières technologies. Interface utilisateur intuitive, backend robuste et performance optimale.",
    features: [
      "Applications React/Laravel",
      "API REST & GraphQL",
      "Base de données optimisée",
      "Responsive design",
      "Performance & SEO"
    ],
    technologies: ["React", "Angular", "PHP & Laravel", "Node.js", "MySQL", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Applications Mobile",
    subtitle: "iOS & Android avec une seule base de code",
    icon: <Smartphone className="text-3xl text-purple-500" size={24} />,
    gradient: "from-purple-500 to-pink-500",
    description: "Développement d'applications mobiles cross-platform qui offrent une expérience native sur iOS et Android.",
    features: [
      "React Native / Flutter",
      "Interface native",
      "Intégration API",
      "Push notifications",
      "Publication stores"
    ],
    technologies: ["React Native", "Flutter", "Firebase", "REST API"]
  },
  {
    id: 3,
    title: "Solutions Cloud",
    subtitle: "Infrastructure scalable & sécurisée",
    icon: <Cloud className="text-3xl text-orange-500" size={24} />,
    gradient: "from-orange-500 to-red-500",
    description: "Déploiement et gestion d'infrastructures cloud pour assurer la scalabilité, la sécurité et la disponibilité de vos applications.",
    features: [
      "Déploiement AWS/Azure",
      "CI/CD automatisé",
      "Monitoring & alertes",
      "Sauvegarde automatique",
      "Optimisation coûts"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    id: 4,
    title: "Automatisation ERP",
    subtitle: "Optimisation des processus métier",
    icon: <Settings className="text-3xl text-purple-700" size={24} />,
    gradient: "from-purple-700 to-indigo-600",
    description: "Implémentation et personnalisation d'Odoo pour automatiser vos processus de gestion : CRM, comptabilité, inventaire, RH.",
    features: [
      "Implémentation Odoo",
      "Modules personnalisés",
      "Migration de données",
      "Formation équipes",
      "Maintenance continue"
    ],
    technologies: ["ERP", "Odoo"]
  },
  {
    id: 5,
    title: "Sites Vitrine & E-commerce",
    subtitle: "Présence web professionnelle",
    icon: <Palette className="text-3xl text-blue-600" size={24} />,
    gradient: "from-blue-600 to-teal-500",
    description: "Création de sites vitrines élégants et boutiques e-commerce performantes pour développer votre activité en ligne.",
    features: [
      "Design sur mesure",
      "Optimisation SEO",
      "Gestion contenu facile",
      "Paiement sécurisé",
      "Analytics intégrés"
    ],
    technologies: ["WordPress", "WooCommerce", "HTML/CSS", "JavaScript", "SEO"]
  },
  {
    id: 6,
    title: "Conseil & Audit",
    subtitle: "Expertise technique & stratégique",
    icon: <Rocket className="text-3xl text-green-500" size={24} />,
    gradient: "from-green-500 to-emerald-500",
    description: "Audit de vos solutions existantes et conseil stratégique pour optimiser votre stack technologique et vos processus.",
    features: [
      "Audit technique complet",
      "Recommandations d'amélioration",
      "Stratégie technologique",
      "Optimisation performance",
      "Plan de migration"
    ],
    technologies: ["Architecture", "Performance", "Sécurité", "Scalabilité"]
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
            Mes Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions digitales complètes pour faire grandir votre entreprise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Services Grid - 3 colonnes */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative"
            >
              <div className="h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                
                {/* Service Header */}
                <div className="text-center mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 text-sm">Ce qui est inclus :</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <Check className="text-green-500 flex-shrink-0" size={12} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-sm`}
                >
                  Discuter du projet
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Prêt à lancer votre projet ?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre entreprise
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg text-sm"
              >
                Obtenir un devis gratuit
                <ArrowRight size={16} />
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-purple-600 transition-all duration-300 text-sm"
              >
                Appel découverte (15min)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for service details */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                  {selectedService.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400">
                  {selectedService.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {selectedService.description}
            </p>
            
            <a
              href="#contact"
              className="block w-full text-center py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              onClick={() => setSelectedService(null)}
            >
              Commencer ce projet
            </a>
          </div>
        </div>
      )}
    </section>
  );
}