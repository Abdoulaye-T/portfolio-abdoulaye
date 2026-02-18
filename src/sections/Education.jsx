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
    description: "Formation intensive sur l'écosystème AWS avec focus sur l'architecture cloud moderne, la sécurité, et l'automatisation. Déployé une application serverless pour un client fictif avec Lambda et S3. Certification AWS obtenue avec mention.",
    icon: <Cloud className="w-5 h-5" />,
    tags: ["AWS", "EC2", "S3", "VPC", "IAM", "Lambda", "CloudFormation", "IaaS", "SaaS", "PaaS"],
    level: "Certifié AWS",
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "BAC+3 Génie Logiciel et Développement Web",
    school: "Technolab-ISTA",
    date: "Octobre 2021 – Août 2024",
    description: "Formation complète en développement full-stack avec spécialisation mobile. Projet de fin d'études : E-Uamsat, plateforme de gestion académique déployée en production avec 500+ utilisateurs actifs.",
    icon: <GraduationCap className="w-5 h-5" />,
    tags: ["HTML/CSS/JavaScript", "Bootstrap", "Java", "Java EE", "Node.js", "C++", "PHP", "Laravel", "React Native", "SQL", "MySQL", "MongoDB", "Oracle", "Git & GitHub", "UML", "Merise"],
    level: "Diplômé",
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Meta Certified Frontend Developer",
    school: "Meta via Coursera",
    date: "Mai 2024 – En cours",
    description: "Certification officielle Meta couvrant React avancé, JavaScript ES6+, principes UX/UI, et bonnes pratiques. Développé une interface React interactive avec tests unitaires Jest pour un projet client.",
    icon: <Code className="w-5 h-5" />,
    tags: ["React", "HTML", "CSS", "JavaScript", "UI/UX", "Testing", "Jest", "Git & GitHub", "Figma"],
    level: "Certifié Meta",
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "CISCO IT Essentials",
    school: "Cisco Networking Academy",
    date: "Août 2023",
    description: "Certification CISCO sur les fondamentaux IT, administration réseau, et dépannage hardware. Déployé un réseau local pour une PME avec configuration de pare-feu et diagnostics matériels.",
    icon: <Building className="w-5 h-5" />,
    tags: ["Réseaux", "Hardware", "Troubleshooting", "Sécurité"],
    level: "Certifié CISCO",
    color: "from-blue-500 to-purple-500"
  },
];

const experiences = [
  {
    title: "Stagiaire Développeur Web & Mobile",
    company: "Miths - Agence digitale Franco-Malienne",
    date: "Mai 2025 – en cours",
    description: "Développement de E-Uamsat, plateforme SaaS de gestion académique. Conception d'une architecture scalable, développement d'API RESTful sécurisées, et création d'interfaces utilisateur modernes.",
    icon: <Code className="w-5 h-5" />,
    tags: ["Laravel", "MySQL", "API REST", "Bootstrap", "Git"],
    achievements: [
      "500+ utilisateurs actifs quotidiens",
      "Architecture scalable implémentée",
      "Réduction de 80% du temps de gestion",
      "Interface multilingue (FR/EN)"
    ],
    color: "from-blue-500 to-purple-500"
  },
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
    color: "from-blue-500 to-purple-500"
  },
  {
    title: "Apprenant Cloud",
    company: "Programme AWS re/Start",
    date: "Mai 2024 – Août 2024",
    description: "Développement de solutions cloud sur AWS. Automatisation d'infrastructures avec CloudFormation, mise en place de pipelines CI/CD, et optimisation des coûts cloud.",
    icon: <Cloud className="w-5 h-5" />,
    tags: ["AWS", "CloudFormation", "EC2", "S3", "Lambda", "DevOps", "Python", "Scripting"],
    achievements: [
      "5 architectures cloud déployées",
      "Automatisation complète des déploiements",
      "Réduction de 40% des coûts infrastructure",
      "Monitoring et alertes configurés"
    ],
    color: "from-yellow-400 to-orange-500" // Dégradé distinct pour se démarquer
  },
];

export default function TimelinePortfolio() {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  const currentData = activeTab === "education" ? educations : experiences;

  // Intersection Observer pour animations
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
    <section id="education" className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">


      <div className="relative z-10 container mx-auto px-6 max-w-6xl py-20">
        {/* Header */}
        <div
          id="header"
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${isVisible.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200/50 dark:border-blue-700/50 mb-6 shadow-lg">
            <Trophy className="w-5 h-5 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Excellence & Innovation</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Parcours <span className="text-indigo-600 dark:text-indigo-400">Professionnel</span>
          </h2>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
            Une trajectoire axée sur l'<span className="font-semibold text-indigo-600">excellence technique</span> et l'<span className="font-semibold text-indigo-500">innovation</span>
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          id="tabs"
          data-animate
          className={`flex justify-center mb-16 transition-all duration-1000 delay-200 ${isVisible.tabs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-gray-200/50 dark:border-blue-700/50">
            <div className="flex">
              {["education", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab
                      ? "text-white bg-indigo-600 shadow-md"
                      : "text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    }`}
                >
                  <span className="flex items-center gap-3">
                    {tab === "education" ? (
                      <>
                        <GraduationCap className="w-5 h-5" />
                        Formations & Certifications
                      </>
                    ) : (
                      <>
                        <Briefcase className="w-5 h-5" />
                        Expériences Professionnelles
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
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-lg" />

          {/* Mobile Timeline Line */}
          <div className="md:hidden absolute left-8 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full shadow-lg" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {currentData.map((item, index) => (
              <div
                key={index}
                id={`item-${index}`}
                data-animate
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row transition-all duration-1000 ${isVisible[`item-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Desktop Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl border-4 border-white dark:border-gray-800 transition-transform duration-300 ${hoveredCard === index ? 'scale-110' : ''
                    }`}>
                    {item.icon}
                  </div>
                </div>

                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-8 transform -translate-x-1/2 z-20">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white dark:border-gray-800">
                    {item.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`md:w-5/12 w-full ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} pl-20 md:pl-0`}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border border-gray-200/50 dark:border-blue-700/50 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                    <div className="mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2 text-sm md:text-base">
                        {activeTab === "education" ? item.school : item.company}
                      </p>
                      <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {item.date}
                      </div>
                      {activeTab === "education" && (
                        <span className="inline-flex items-center px-2 py-1 md:px-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs md:text-sm font-semibold">
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
                          className="px-2 py-1 md:px-3 bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-full text-xs md:text-sm border border-gray-200/50 dark:border-blue-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.tags.length > 3 && (
                        <span className="px-2 py-1 md:px-3 bg-white/60 dark:bg-gray-800/60 text-blue-700 dark:text-blue-300 rounded-full text-xs md:text-sm border border-gray-200/50 dark:border-blue-700/50">
                          +{item.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* View Details Button */}
                    <button
                      onClick={() => setSelectedItem(item)}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors text-sm md:text-base"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200/50 dark:border-blue-700/50"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-2 rounded-full bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-600/70 transition-all"
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
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-gray-200/50 dark:border-blue-700/50">
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
                        className="px-4 py-2 bg-slate-100 dark:bg-gray-700 text-slate-700 dark:text-slate-300 rounded-full font-medium text-sm"
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
    </section>
  );
}