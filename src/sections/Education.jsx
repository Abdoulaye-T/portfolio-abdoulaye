import { useState, useEffect, useRef } from "react";
import { 
  GraduationCap, 
  Cloud, 
  Code, 
  Award,
  Rocket,
  Calendar,
  Star,
  ArrowRight,
  ExternalLink,
  Briefcase,
  CheckCircle,
  Building,
  Zap,
  Trophy,
  X,
  Download,
  Eye
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
    type: "Certification",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20"
  },
  {
    title: "BAC+3 Génie Logiciel et Développement Web",
    school: "Technolab-ISTA",
    date: "Octobre 2021 – Août 2024",
    description: "Formation complète en développement full-stack avec spécialisation mobile. Projet de fin d'études : E-Uamsat, plateforme de gestion académique déployée en production.",
    icon: <GraduationCap className="w-5 h-5" />,
    tags: ["Laravel", "React Native", "MySQL", "Bootstrap", "Git"],
    level: "Diplômé",
    type: "Diplôme",
    color: "from-blue-400 to-purple-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
  },
  {
    title: "Meta Certified Frontend Developer",
    school: "Meta via Coursera",
    date: "Mai 2024 – En cours",
    description: "Certification officielle Meta couvrant React avancé, JavaScript ES6+, principes UX/UI, et bonnes pratiques de développement frontend moderne.",
    icon: <Code className="w-5 h-5" />,
    tags: ["React", "JavaScript", "UI/UX", "Testing", "Git"],
    level: "Certifié Meta",
    type: "Certification",
    color: "from-green-400 to-blue-500",
    bgColor: "bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20"
  },
  {
    title: "CISCO IT Essentials",
    school: "Cisco Networking Academy",
    date: "Août 2023",
    description: "Certification CISCO sur les fondamentaux IT, administration réseau, et dépannage hardware. Base solide pour la compréhension des infrastructures.",
    icon: <Building className="w-5 h-5" />,
    tags: ["Réseaux", "Hardware", "Troubleshooting", "Sécurité"],
    level: "Certifié CISCO",
    type: "Certification",
    color: "from-indigo-400 to-purple-500",
    bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20"
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
    type: "Stage / Projet",
    color: "from-emerald-400 to-teal-500",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    impact: "High"
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
    type: "Formation Pratique",
    color: "from-orange-400 to-pink-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20",
    impact: "Medium"
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
    type: "Freelance",
    color: "from-purple-400 to-indigo-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    impact: "High"
  },
];

const FloatingParticle = ({ delay = 0 }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100
      });
    }, 3000 + delay * 1000);
    
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div
      className="absolute w-1 h-1 bg-blue-400/20 rounded-full transition-all duration-3000 ease-in-out"
      style={{
        left: position.x + "%",
        top: position.y + "%",
        animation: `float ${3 + delay}s ease-in-out infinite`,
      }}
    />
  );
};

export default function EnhancedProfessionalPortfolio() {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 min-h-screen overflow-hidden">
      
      {/* Style pour les animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-7xl py-20">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 blur-3xl rounded-full animate-pulse-glow" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 dark:border-blue-800 mb-6 shadow-lg">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Excellence & Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
              Parcours
              <br />
              <span className="text-4xl md:text-6xl">Professionnel</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Une trajectoire axée sur l'<span className="font-semibold text-blue-600 dark:text-blue-400">excellence technique</span>, 
              l'<span className="font-semibold text-purple-600 dark:text-purple-400">innovation</span> et la création de 
              <span className="font-semibold text-indigo-600 dark:text-indigo-400"> solutions impactantes</span>
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-2 shadow-2xl border border-white/20 dark:border-gray-700/50">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl" />
            <div className="relative flex">
              {["education", "experience"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "text-white transform scale-105"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-105"
                  }`}
                >
                  {activeTab === tab && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg transition-all duration-300" />
                  )}
                  
                  <span className="relative flex items-center gap-3">
                    {tab === "education" ? (
                      <>
                        <GraduationCap className="w-5 h-5" />
                        Formation & Certifications
                      </>
                    ) : (
                      <>
                        <Briefcase className="w-5 h-5" />
                        Expérience Professionnelle
                      </>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === "education" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {educations.map((edu, index) => (
              <div
                key={index}
                className={`group relative ${edu.bgColor} rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${edu.color} rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}
                    >
                      {edu.icon}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {edu.title}
                      </h3>
                      <p className={`text-transparent bg-gradient-to-r ${edu.color} bg-clip-text font-semibold mb-2`}>
                        {edu.school}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center gap-1 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          {edu.date}
                        </span>
                        <span className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full text-xs font-semibold shadow-md`}>
                          {edu.type}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-green-700 dark:text-green-300 rounded-full text-sm font-semibold border border-green-200 dark:border-green-800">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {edu.level}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200/50 dark:border-gray-600/50 hover:scale-105 hover:bg-blue-100/60 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative ${exp.bgColor} rounded-3xl shadow-xl border border-white/50 dark:border-gray-700/50 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Impact Indicator */}
                <div
                  className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${
                    exp.impact === 'High' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-white'
                  }`}
                >
                  <Zap className="w-3 h-3 inline mr-1" />
                  {exp.impact} Impact
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 ${hoveredCard === index ? 'scale-110 rotate-12' : ''}`}
                    >
                      {exp.icon}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <p className={`text-transparent bg-gradient-to-r ${exp.color} bg-clip-text font-semibold text-lg mb-2`}>
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1 bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full">
                              <Calendar className="w-4 h-4" />
                              {exp.date}
                            </span>
                            <span className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white rounded-full text-xs font-semibold`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => setSelectedItem(exp)}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-yellow-500" />
                          Réalisations clés
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 hover:scale-102 hover:bg-white/70 transition-all duration-200"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:scale-105 hover:bg-blue-100/60 hover:border-blue-300/50 transition-all duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/50 dark:border-gray-700/50 relative transform scale-100 transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-2 rounded-full hover:scale-110 transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Content */}
              <div className="pr-12">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${selectedItem.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                    {selectedItem.icon}
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedItem.title}
                    </h2>
                    <p className={`text-transparent bg-gradient-to-r ${selectedItem.color} bg-clip-text font-semibold text-xl mb-3`}>
                      {selectedItem.company}
                    </p>
                    <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{selectedItem.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Description détaillée</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    Réalisations et Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedItem.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-4 bg-gradient-to-r from-white/60 to-white/40 dark:from-gray-800/60 dark:to-gray-800/40 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30"
                      >
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies utilisées</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-full font-medium border border-blue-200/50 dark:border-blue-800/50"
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