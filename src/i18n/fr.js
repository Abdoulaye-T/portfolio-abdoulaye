export default {
  meta: {
    title: "Abdoulaye Traoré — Développeur Full Stack Web & Mobile | React, Laravel, WordPress",
    description:
      "Développeur Full Stack basé à Bamako (Mali) : applications web sur mesure, apps mobiles React Native et sites WordPress avancés. Disponible pour vos projets freelance ou missions.",
  },

  nav: {
    links: [
      { id: "01", label: "Accueil", to: "home" },
      { id: "02", label: "Projets", to: "projects" },
      { id: "03", label: "À propos", to: "about" },
      { id: "04", label: "Services", to: "services" },
      { id: "05", label: "Parcours", to: "education" },
      { id: "06", label: "Contact", to: "contact" },
    ],
    cv: "CV",
    downloadCv: "Télécharger CV",
    themeDark: "mode sombre",
    themeLight: "mode clair",
  },

  hero: {
    badge: "Disponible pour nouveaux projets — Bamako, Mali",
    firstName: "Abdoulaye",
    lastName: "Traoré",
    roles: [
      "Développeur Web Full Stack",
      "Applications Mobile (React Native)",
      "Solutions WordPress avancées",
      "ERP Odoo sur mesure",
    ],
    lead: "Développeur Full Stack basé à Bamako, j'aide startups, PME et agences à concevoir des applications web et mobiles fiables, rapides et prêtes pour la production — de l'idée au déploiement, sans compromis sur la qualité du code.",
    ctaCv: "Télécharger mon CV",
    ctaProjects: "Voir mes projets",
    stats: [
      { value: "3+", label: "Années d'expérience" },
      { value: "8+", label: "Projets livrés" },
    ],
    photoLocation: "Bamako, Mali",
    photoYear: "2026",
    scroll: "Scroll",
  },

  projects: {
    eyebrow: "02 — Projets",
    titleBefore: "Une sélection de mes ",
    titleHighlight: "réalisations",
    titleAfter: ".",
    subtitle: "Du prototype à la mise en production : plateformes web, applications mobiles et sites professionnels livrés pour des clients réels.",
    categories: [
      { key: "Tous", label: "Tous" },
      { key: "Web", label: "Web" },
      { key: "Mobile", label: "Mobile" },
      { key: "WordPress", label: "WordPress" },
    ],
    statusLabels: { live: "Production", dev: "Développement" },
    featuredLabel: "En vedette",
    detailCta: "Voir le détail",
    sourceLabel: "Code source",
    viewProjectCta: "Voir le projet",
    modalTechLabel: "Technologies utilisées",
    showMoreCta: (n) => `Voir tous les projets (${n} de plus)`,
    items: [
      {
        id: 5,
        title: "PISE — Plateforme d'Innovation Sociale et Écologique",
        categoryKey: "Web",
        status: "live",
        featured: true,
        description:
          "Plateforme web dédiée à la promotion de projets à impact social et environnemental. Architecture React/Node.js et expérience utilisateur pensées pour donner de la visibilité à des initiatives durables.",
        stack: ["React", "Vite", "Node.js"],
        link: "https://pise.vercel.app/",
        github: "#",
      },
      {
        id: 6,
        title: "HUB BY FIBRES",
        categoryKey: "WordPress",
        status: "dev",
        featured: true,
        description:
          "Site vitrine pour une entreprise sociale malienne qui valorise les déchets textiles par l'innovation et la recherche. Développement WordPress sur mesure (Astra + Elementor), pensé pour la conversion et le SEO.",
        stack: ["WordPress", "Astra (Parent/Child)", "Elementor", "PHP", "SEO"],
        link: "https://mistyrose-loris-372094.hostingersite.com/",
      },
      {
        id: 7,
        title: "GECAF SASU — Cabinet d'expertise comptable",
        categoryKey: "WordPress",
        status: "dev",
        featured: true,
        description:
          "Site vitrine pour un cabinet d'expertise comptable et de fiscalité au Mali : présentation de l'équipe, des services et de ressources utiles, optimisé pour générer des prises de contact qualifiées.",
        stack: ["WordPress", "Astra (Child)", "Elementor", "PHP", "SEO"],
        link: "https://gecaf-sasu.miths.tech/",
      },
      {
        id: 3,
        title: "Tontine Mobile App",
        categoryKey: "Mobile",
        status: "dev",
        featured: true,
        description:
          "Application mobile cross-platform de gestion de tontines : authentification sécurisée, API REST et synchronisation des données en temps réel, pensée pour un usage simple sur Android et iOS.",
        stack: ["React Native", "Node.js", "MySQL", "JWT"],
        link: "https://github.com/tonprofil/app-mobile",
        github: "https://github.com/tonprofil/app-mobile",
      },
      {
        id: 1,
        title: "Solid'Avenir",
        categoryKey: "Web",
        status: "live",
        featured: false,
        description:
          "Plateforme de financement participatif basée sur Hedera Hashgraph : dons traçables et sécurisés pour des projets sociaux et environnementaux, avec suivi d'impact en temps réel.",
        stack: ["Web3", "Python", "Django", "SQLite", "Node.js", "JavaScript", "Hedera Hashgraph", "Smart Contracts"],
        link: "https://solidavenir.com/",
        github: "https://github.com/dmaiga/solidavenir.git",
      },
      {
        id: 2,
        title: "E-Uamsat",
        categoryKey: "Web",
        status: "live",
        featured: false,
        description:
          "Plateforme de gestion académique pour les établissements maliens : notes, emplois du temps et communication interne centralisés pour plus de transparence — plus de 500 utilisateurs actifs.",
        stack: ["Laravel", "MySQL", "Bootstrap", "PHP", "JavaScript"],
        link: "https://github.com/tonprofil/e-uamsat",
        github: "https://github.com/tonprofil/e-uamsat",
      },
      {
        id: 4,
        title: "Agence Miths SAS",
        categoryKey: "WordPress",
        status: "live",
        featured: false,
        description:
          "Site vitrine WordPress optimisé SEO pour une agence digitale franco-malienne, pensé pour renforcer la visibilité en ligne et générer de nouveaux leads.",
        stack: ["WordPress", "Elementor", "PHP", "SEO"],
        link: "http://www.miths.tech/",
      },
      {
        id: 8,
        title: "Blog Laravel",
        categoryKey: "Web",
        status: "dev",
        featured: false,
        description:
          "Plateforme de blog personnelle en Laravel avec interface Blade et Tailwind CSS : gestion de contenu, base de données et tests unitaires — un projet pour explorer l'écosystème Laravel en profondeur.",
        stack: ["Laravel", "MySQL", "Tailwind", "PHP", "JavaScript"],
        link: "#",
        github: "https://github.com/Abdoulaye-T/Blog.git",
      },
      {
        id: 9,
        title: "Cabinet médical ESPOIR SARL",
        categoryKey: "Web",
        status: "dev",
        featured: false,
        description:
          "Application de prise de rendez-vous pour un cabinet médical, avec téléconsultation intégrée et espace patient sécurisé pour gérer rendez-vous, informations et paramètres via un dashboard.",
        stack: ["Laravel", "MySQL", "Tailwind", "PHP", "JavaScript"],
        link: "#",
        github: "https://github.com/habiiba7000/Espoir-SARL",
      },
    ],
  },

  about: {
    eyebrow: "03 — À propos",
    titleBefore: "Construire des produits qui ",
    titleHighlight: "durent",
    titleAfter: ", pas seulement des démos.",
    paragraphs: [
      "Développeur web full stack basé à Bamako, avec plus de 3 ans d'expérience, je conçois et développe des solutions digitales fiables, performantes et pensées pour leurs utilisateurs. J'interviens sur l'ensemble du cycle de vie d'un projet : conception, développement, intégration et mise en production.",
      "Mon parcours m'a amené à travailler sur des applications web métier, des sites professionnels, des solutions WordPress avancées et des modules ERP Odoo sur mesure — toujours avec la même exigence sur la qualité du code, la sécurité et la scalabilité.",
    ],
    quote:
      "Du prototype à la production, j'accompagne mes clients et partenaires pour construire des solutions solides, claires et pérennes.",
    highlights: [
      { title: "Code maintenable", description: "Une architecture claire, testée et documentée — pensée pour durer, pas pour dépanner." },
      { title: "Sens du produit", description: "Je challenge les besoins avant d'écrire la première ligne de code." },
      { title: "Performance mesurée", description: "Core Web Vitals, temps de réponse API, scores Lighthouse — jamais d'approximation." },
      { title: "Communication claire", description: "Des points d'avancement réguliers, sans jargon inutile." },
    ],
    techEyebrow: "Technologies & outils",
    techPoles: [
      { key: "dev", label: "Dev Web" },
      { key: "mobile", label: "Mobile" },
      { key: "devops", label: "Cloud & DevOps" },
      { key: "db", label: "Bases de données" },
      { key: "tools", label: "Outils & ERP" },
    ],
    ctaTitle: "Un projet à réaliser ?",
    ctaButton: "Démarrer le projet",
  },

  services: {
    eyebrow: "04 — Services",
    titleBefore: "Ce que je peux ",
    titleHighlight: "construire",
    titleAfter: " pour vous.",
    subtitle:
      "J'accompagne les entreprises dans la conception, le développement et la maintenance de solutions digitales fiables et évolutives.",
    technologiesLabel: "Technologies",
    ctaDiscuss: "Discuter de ce projet",
    ctaTitle: "Un projet à concrétiser ?",
    ctaButton: "Me contacter",
    items: [
      {
        id: 1,
        title: "Développement Web & Applications Métiers",
        subtitle: "Des applications sur mesure, robustes et évolutives",
        badge: "Expert",
        description:
          "Je conçois des applications web taillées pour vos besoins réels : outils internes, plateformes métier, dashboards et APIs. J'interviens sur tout le cycle de vie, de l'architecture technique à la mise en production.",
        features: [
          "Applications sur mesure — dashboards, CRM internes, outils métier",
          "APIs REST & intégrations tierces (paiement, CRM, ERP…)",
          "Bases de données relationnelles optimisées (MySQL/PostgreSQL)",
          "Authentification & gestion des accès — JWT, OAuth2, rôles",
          "Tests, CI/CD & monitoring de performance",
        ],
        technologies: ["React", "Next.js", "Angular", "Laravel", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Tailwind CSS", "PHP", "Python"],
      },
      {
        id: 2,
        title: "WordPress & Sites Business",
        subtitle: "Des sites professionnels rapides et bien référencés",
        badge: "Populaire",
        description:
          "Je développe des sites WordPress avancés pour les entreprises qui veulent une présence en ligne à la fois soignée et techniquement solide. Sécurité, SEO et performance ne sont jamais des options.",
        features: [
          "Sites vitrine & plateformes sur mesure — thèmes enfants, page builders avancés",
          "Personnalisations & fonctionnalités métier — CPT, ACF, plugins spécifiques",
          "Optimisation SEO & performances — Core Web Vitals, score Lighthouse +90",
          "Sécurité & sauvegardes automatisées",
          "Maintenance & évolutions continues",
        ],
        technologies: ["WordPress", "PHP", "Elementor", "Astra", "SEO technique", "Sécurité"],
      },
      {
        id: 3,
        title: "Applications Mobile & Expérience Utilisateur",
        subtitle: "Des apps cross-platform connectées à votre écosystème",
        badge: "Scalable",
        description:
          "Je développe des applications mobiles cross-platform connectées à des back-ends fiables, pour une expérience fluide sur iOS et Android, intégrée naturellement à vos outils existants.",
        features: [
          "Applications React Native iOS & Android — un seul codebase",
          "Synchronisation API & données temps réel — REST, WebSockets, push",
          "Authentification sécurisée — biométrie, JWT, OAuth",
          "Publication & support initial — App Store & Google Play",
        ],
        technologies: ["React Native", "Expo", "Node.js", "APIs REST", "Firebase"],
      },
      {
        id: 4,
        title: "ERP, Cloud & DevOps",
        subtitle: "L'automatisation de vos processus métiers",
        badge: "ROI garanti",
        description:
          "J'accompagne les entreprises dans l'automatisation de leurs processus via des solutions ERP et cloud adaptées. Objectif : simplifier les flux, fiabiliser les données et gagner en productivité.",
        features: [
          "Intégration complète Odoo (ERP) — paramétrage, migration, formation",
          "Modules Odoo sur mesure — développement Python/XML",
          "Déploiement cloud & infrastructure — AWS, VPS, Docker",
          "Automatisation & intégrations externes — webhooks, connecteurs tiers",
          "CI/CD, tests & monitoring — GitLab CI, alertes de performance",
        ],
        technologies: ["Odoo", "AWS", "Docker", "CI/CD", "GitLab", "Vagrant", "Ansible", "Jenkins"],
      },
    ],
  },

  education: {
    eyebrow: "05 — Parcours",
    titleBefore: "Une trajectoire tournée vers l'",
    titleHighlight: "excellence",
    titleAfter: ".",
    tabEducation: "Formations",
    tabExperience: "Expériences",
    achievementsLabel: "Réalisations",
    technologiesLabel: "Technologies",
    educationItems: [
      {
        title: "Certification Hedera Developer",
        school: "Hedera & Orange Digital Center Mali",
        date: "2025",
        description:
          "Formation intensive sur l'écosystème Hedera : architecture Hashgraph, Smart Contracts et applications décentralisées. Déploiement d'une dApp complète pour un client fictif.",
        tags: ["Hedera", "Hashgraph", "Smart Contracts", "dApps", "Tokenization", "Web3"],
        level: "Certifié Hedera",
      },
      {
        title: "Formation AWS re/Start — Cloud Computing",
        school: "Amazon Web Services & Orange Digital Center Mali",
        date: "2024",
        description:
          "Formation intensive sur l'écosystème AWS : architecture cloud moderne, sécurité et automatisation. Déploiement d'une application serverless avec Lambda et S3, certification obtenue avec mention.",
        tags: ["AWS", "EC2", "S3", "VPC", "IAM", "Lambda", "CloudFormation"],
        level: "Certifié AWS",
      },
      {
        title: "BAC+3 Génie Logiciel et Développement Web",
        school: "Technolab-ISTA",
        date: "2021 – 2024",
        description:
          "Formation complète en développement full-stack avec spécialisation mobile. Projet de fin d'études : E-Uamsat, plateforme de gestion académique déployée en production avec plus de 500 utilisateurs actifs.",
        tags: ["JavaScript", "Java EE", "Node.js", "PHP", "Laravel", "React Native", "SQL", "UML", "Merise"],
        level: "Diplômé",
      },
      {
        title: "Meta Certified Frontend Developer",
        school: "Meta via Coursera",
        date: "2024",
        description:
          "Certification officielle Meta : React avancé, JavaScript ES6+, principes UX/UI et bonnes pratiques. Interface React interactive développée avec tests unitaires Jest.",
        tags: ["React", "UI/UX", "Testing", "Jest", "Figma"],
        level: "Certifié Meta",
      },
      {
        title: "CISCO IT Essentials",
        school: "Cisco Networking Academy",
        date: "2023",
        description:
          "Certification CISCO sur les fondamentaux IT, l'administration réseau et le dépannage matériel. Déploiement d'un réseau local pour une PME avec configuration de pare-feu.",
        tags: ["Réseaux", "Hardware", "Troubleshooting", "Sécurité"],
        level: "Certifié CISCO",
      },
    ],
    experienceItems: [
      {
        title: "Développeur Web & Mobile",
        school: "Miths — Agence digitale Franco-Malienne",
        date: "Mai 2025 – présent",
        description:
          "Conception de sites WordPress pour l'agence et ses clients (vitrine, support, e-commerce), maintenance et amélioration d'une application mobile en React Native, et contribution au développement d'un extranet pour un grossiste pharmaceutique. Intégration de modules Odoo personnalisés pour l'intranet de l'entreprise, en équipe avec Git et pratiques Agile/Scrum.",
        tags: ["WordPress", "React Native", "Odoo", "PHP", "Git", "Agile/Scrum"],
        achievements: [
          "Sites WordPress vitrine, support et e-commerce livrés pour l'agence et ses clients",
          "Maintenance et évolutions d'une app mobile React Native en production",
          "Extranet développé pour un grossiste pharmaceutique (accès client, gestion de commandes)",
          "Modules Odoo personnalisés intégrés à l'intranet de l'entreprise",
        ],
      },
      {
        title: "Encadrant pédagogique — Challenge Database IAM",
        school: "Super DataInsights, à l'IAM (Institut Africain de Management)",
        date: "Mars – Juillet 2026",
        description:
          "Encadrement et suivi pédagogique de groupes d'étudiants en 2ème année de Licence Informatique de Gestion, dans le cadre du Challenge Database de l'IAM Bamako. Pilotage de projets d'applications web dynamiques de bout en bout, de la validation de la thématique jusqu'à la soutenance finale devant jury.",
        tags: ["Encadrement", "Pédagogie", "Applications web", "Gestion de projet"],
        achievements: [
          "Plusieurs groupes d'étudiants encadrés de bout en bout",
          "Projets menés de la thématique jusqu'à la soutenance devant jury",
          "Transmission de bonnes pratiques de développement web",
        ],
      },
      {
        title: "Développeur Full-Stack",
        school: "Technolab-ISTA",
        date: "Fév. – Juin 2024",
        description:
          "Développement de E-Uamsat, plateforme SaaS de gestion académique : architecture scalable, API RESTful sécurisées et interfaces utilisateur modernes.",
        tags: ["Laravel", "MySQL", "API REST", "Bootstrap", "Git"],
        achievements: [
          "500+ utilisateurs actifs quotidiens",
          "Architecture scalable implémentée",
          "Réduction de 80% du temps de gestion",
          "Interface multilingue (FR/EN)",
        ],
      },
      {
        title: "Apprenant Cloud",
        school: "Programme AWS re/Start",
        date: "Mai – Août 2024",
        description:
          "Développement de solutions cloud sur AWS : automatisation d'infrastructures avec CloudFormation, pipelines CI/CD et optimisation des coûts.",
        tags: ["AWS", "CloudFormation", "EC2", "S3", "Lambda", "DevOps", "Python"],
        achievements: [
          "5 architectures cloud déployées",
          "Automatisation complète des déploiements",
          "Réduction de 40% des coûts infrastructure",
          "Monitoring et alertes configurés",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "06 — Contact",
    titleBefore: "Travaillons ",
    titleHighlight: "ensemble",
    titleAfter: ".",
    lead: "Startup, PME ou grand groupe : je m'adapte à vos besoins et à votre budget. Parlons de votre projet.",
    infoItems: [
      { icon: "mail", label: "Email professionnel", value: "abdoulayet.dev@gmail.com", subtitle: "Réponse sous 24h", href: "mailto:abdoulayet.dev@gmail.com" },
      { icon: "phone", label: "Téléphone", value: "+223 92 35 31 20", subtitle: "Lun–Ven, 9h–18h", href: "tel:+22392353129" },
      { icon: "map", label: "Localisation", value: "Bamako, Mali", subtitle: "Disponible à distance", href: "#" },
    ],
    availabilityText: "Disponible pour nouveaux projets — réponse garantie sous 24h",
    form: {
      nameLabel: "Nom complet *",
      namePlaceholder: "Votre nom",
      emailLabel: "Email *",
      emailPlaceholder: "vous@exemple.com",
      phoneLabel: "Téléphone",
      phonePlaceholder: "+223 XX XX XX XX",
      companyLabel: "Entreprise",
      companyPlaceholder: "Nom de votre entreprise",
      subjectLabel: "Type de demande *",
      subjectPlaceholder: "Sélectionnez le type de demande",
      subjects: [
        { value: "freelance", label: "Mission freelance" },
        { value: "emploi", label: "Opportunité d'emploi" },
        { value: "partenariat", label: "Partenariat / Collaboration" },
        { value: "conseil", label: "Conseil technique" },
        { value: "autre", label: "Autre demande" },
      ],
      messageLabel: "Décrivez votre projet *",
      messagePlaceholder: "Parlez-moi de votre projet, vos objectifs, votre timeline...",
      submit: "Envoyer le message",
      submitting: "Envoi en cours...",
      successTitle: "Message envoyé !",
      successBody: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      errorText: "Une erreur est survenue lors de l'envoi. Réessayez ou contactez-moi directement par email.",
    },
    faqEyebrow: "Questions fréquentes",
    faq: [
      { q: "Quel est votre délai de réponse ?", a: "Je réponds à tous les messages sous 24h maximum, souvent plus rapidement." },
      { q: "Proposez-vous des devis gratuits ?", a: "Oui, l'étude de votre projet et le devis détaillé sont entièrement gratuits." },
      { q: "Travaillez-vous à distance ?", a: "Absolument ! Je collabore avec des clients partout dans le monde." },
    ],
  },

  footer: {
    tagline:
      "Développeur Full Stack passionné par la création d'applications web et mobile fiables. Toujours partant pour de nouveaux défis techniques et des collaborations enrichissantes.",
    navTitle: "Navigation",
    followTitle: "Me suivre",
    rights: (year) => `© ${year} Abdoulaye Traoré. Tous droits réservés.`,
    availability: "Disponible pour nouveaux projets",
  },
};
