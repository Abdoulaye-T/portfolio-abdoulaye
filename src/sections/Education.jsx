import { useState, useEffect } from "react";
import { 
  GraduationCap, 
  Cloud, 
  Code, 
  Award,
  Calendar,
  CheckCircle,
  Building,
  Trophy,
  X,
  Eye,
  Briefcase,
  Rocket
} from "lucide-react";

const educations = [
  {
    title: "Formation AWS re/Start – Cloud Computing",
    school: "Amazon Web Services & Orange Digital Center Mali",
    date: "Août 2024 – Novembre 2024",
    description: "Formation intensive sur l'écosystème AWS avec focus sur l'architecture cloud moderne, la sécurité, et l'automatisation. Certification AWS obtenue avec mention.",
    icon: <Cloud className="w-5 h-5" />,
    tags: ["AWS", "EC2", "S3", "IAM", "Lambda", "CloudFormation"],
    level: "Certifié AWS",
    color: "from-orange-400 to-red-500",
    year: "2024"
  },
  {
    title: "BAC+3 Génie Logiciel et Développement Web",
    school: "Technolab-ISTA",
    date: "Octobre 2021 – Août 2024",
    description: "Formation complète en développement full-stack avec spécialisation mobile. Projet de fin d'études : E-Uamsat, plateforme de gestion académique déployée en production.",
    icon: <GraduationCap className="w-5 h-5" />,
    tags: ["Laravel", "React Native", "MySQL", "Bootstrap", "Git"],
    level: "Diplômé",
    color: "from-blue-400 to-purple-500",
    year: "2021-2024"
  },
  {
    title: "Meta Certified Frontend Developer",
    school: "Meta via Coursera",
    date: "Mai 2024 – En cours",
    description: "Certification officielle Meta couvrant React avancé, JavaScript ES6+, principes UX/UI, et bonnes pratiques de développement frontend moderne.",
    icon: <Code className="w-5 h-5" />,
    tags: ["React", "JavaScript", "UI/UX", "Testing", "Git"],
    level: "Certifié Meta",
    color: "from-green-400 to-blue-500",
    year: "2024"
  },
  {
    title: "CISCO IT Essentials",
    school: "Cisco Networking Academy",
    date: "Août 2023",
    description: "Certification CISCO sur les fondamentaux IT, administration réseau, et dépannage hardware. Base solide pour la compréhension des infrastructures.",
    icon: <Building className="w-5 h-5" />,
    tags: ["Réseaux", "Hardware", "Troubleshooting", "Sécurité"],
    level: "Certifié CISCO",
    color: "from-indigo-400 to-purple-500",
    year: "2023"
  },
];

const experiences = [
  {
    title: "Développeur Full-Stack",
    company: "Technolab-ISTA",
    date: "Février 2024 – Juin 2024",
    description: "Développement de E-Uamsat, plateforme SaaS de gestion académique. Conception d'une architecture scalable, développement d'API RESTful sécurisées, et création d'interfaces utilisateur modernes.",
    icon: <Code className="w-5 h-5" />,
    tags: ["Laravel", "MySQL", "API REST", "Bootstrap", "Git"],
    achievements: [
      "500+ utilisateurs actifs quotidiens",
      "Architecture scalable implémentée", 
      "Réduction de 80% du temps de gestion",
      "Interface multilingue (FR/EN)"
    ],
    color: "from-emerald-400 to-teal-500",
    year: "2024"
  },
  {
    title: "Stagiaire Cloud Developer",
    company: "Programme AWS re/Start",
    date: "Mai 2024 – Août 2024",
    description: "Développement de solutions cloud sur AWS. Automatisation d'infrastructures avec CloudFormation, mise en place de pipelines CI/CD, et optimisation des coûts cloud.",
    icon: <Cloud className="w-5 h-5" />,
    tags: ["AWS", "CloudFormation", "EC2", "S3", "Lambda", "DevOps"],
    achievements: [
      "5 architectures cloud déployées",
      "Automatisation complète des déploiements",
      "Réduction de 40% des coûts infrastructure", 
      "Monitoring et alertes configurés"
    ],
    color: "from-orange-400 to-pink-500",
    year: "2024"
  },
  {
    title: "Développeur Freelance",
    company: "Indépendant",
    date: "2023 – Présent",
    description: "Développement d'applications web et mobile sur mesure pour PME locales. Spécialisation WordPress, React Native, et administration serveurs Linux. Conseil en transformation digitale.",
    icon: <Rocket className="w-5 h-5" />,
    tags: ["React Native", "WordPress", "Linux", "Nginx", "Consulting"],
    achievements: [
      "15+ projets web/mobile livrés",
      "100% de satisfaction client",
      "Respect des délais et budgets",
      "Support technique 24/7"
    ],
    color: "from-purple-400 to-indigo-500",
    year: "2023-2025"
  },
];

export default function TimelinePortfolio() {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const currentData = activeTab === "education" ? educations : experiences;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-6xl py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800 mb-6 shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Excellence & Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Parcours Professionnel
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une trajectoire axée sur l'<span className="font-semibold text-blue-600">excellence technique</span> et l'<span className="font-semibold text-purple-600">innovation</span>
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/20">
            <div className="flex">
              {["education", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {tab === "education" ? (
                      <>
                        <GraduationCap className="w-5 h-5" />
                        Formation
                      </>
                    ) : (
                      <>
                        <Briefcase className="w-5 h-5" />
                        Expérience
                      </>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-600 rounded-full shadow-lg" />
          
          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-indigo-600 rounded-full shadow-lg" />
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {currentData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Desktop Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white shadow-2xl border-4 border-white dark:border-gray-800 transition-transform duration-300 ${
                    hoveredCard === index ? 'scale-125 rotate-12' : ''
                  }`}>
                    {item.icon}
                  </div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-8 transform -translate-x-1/2 z-20">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-white shadow-xl border-3 border-white dark:border-gray-800`}>
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`md:w-5/12 w-full ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} pl-20 md:pl-0`}>
                  {/* Year Badge */}
                  <div className={`inline-flex items-center gap-2 mb-4 ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  } justify-start`}>
                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 md:px-4 md:py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-md">
                      <span className="text-xs md:text-sm font-bold text-gray-700 dark:text-gray-300">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border border-white/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className={`text-transparent bg-gradient-to-r ${item.color} bg-clip-text font-semibold mb-2 text-sm md:text-base`}>
                        {activeTab === "education" ? item.school : item.company}
                      </p>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {item.date}
                      </div>
                      {activeTab === "education" && (
                        <span className="inline-flex items-center px-2 py-1 md:px-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs md:text-sm font-semibold mt-2">
                          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {item.level}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-3 md:mb-4 line-clamp-3 text-sm md:text-base">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {item.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 md:px-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 md:px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 font-medium transition-colors text-sm md:text-base"
                    >
                      <Eye className="w-3 h-3 md:w-4 md:h-4" />
                      Voir détails
                    </button>
                  </div>
                </div>

                {/* Empty space for alignment - Desktop only */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/50 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 p-2 rounded-full bg-white/50 hover:bg-white/70 transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="pr-12">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${selectedItem.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {selectedItem.icon}
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedItem.title}
                    </h2>
                    <p className={`text-transparent bg-gradient-to-r ${selectedItem.color} bg-clip-text font-semibold text-xl mb-3`}>
                      {activeTab === "education" ? selectedItem.school : selectedItem.company}
                    </p>
                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{selectedItem.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Description</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {selectedItem.description}
                  </p>
                </div>

                {selectedItem.achievements && (
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Trophy className="w-6 h-6 text-yellow-500" />
                      Réalisations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedItem.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}