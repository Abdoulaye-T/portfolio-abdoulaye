export default {
  meta: {
    title: "Abdoulaye Traoré — Full-Stack Web & Mobile Developer | React, Laravel, WordPress",
    description:
      "Full-Stack developer based in Bamako, Mali: custom web apps, React Native mobile apps, and advanced WordPress builds. Available for freelance projects and contracts.",
  },

  nav: {
    links: [
      { id: "01", label: "Home", to: "home" },
      { id: "02", label: "Work", to: "projects" },
      { id: "03", label: "About", to: "about" },
      { id: "04", label: "Services", to: "services" },
      { id: "05", label: "Journey", to: "education" },
      { id: "06", label: "Contact", to: "contact" },
    ],
    cv: "Resume",
    downloadCv: "Download Resume",
    themeDark: "dark mode",
    themeLight: "light mode",
  },

  hero: {
    badge: "Available for new projects — Bamako, Mali",
    firstName: "Abdoulaye",
    lastName: "Traoré",
    roles: [
      "Full Stack Web Developer",
      "Mobile Apps (React Native)",
      "Advanced WordPress Solutions",
      "Custom Odoo ERP",
    ],
    lead: "Full-Stack developer based in Bamako, I help startups, SMBs and agencies design reliable, fast web and mobile applications that are ready for production — from idea to deployment, with no compromise on code quality.",
    ctaCv: "Download my resume",
    ctaProjects: "See my work",
    stats: [
      { value: "3+", label: "Years of experience" },
      { value: "8+", label: "Projects shipped" },
    ],
    photoLocation: "Bamako, Mali",
    photoYear: "2026",
    scroll: "Scroll",
  },

  projects: {
    eyebrow: "02 — Work",
    titleBefore: "A selection of my ",
    titleHighlight: "work",
    titleAfter: ".",
    subtitle: "From prototype to production: web platforms, mobile apps and business websites shipped for real clients.",
    categories: [
      { key: "Tous", label: "All" },
      { key: "Web", label: "Web" },
      { key: "Mobile", label: "Mobile" },
      { key: "WordPress", label: "WordPress" },
    ],
    statusLabels: { live: "Live", dev: "In development" },
    featuredLabel: "Featured",
    detailCta: "View details",
    sourceLabel: "Source code",
    viewProjectCta: "View project",
    modalTechLabel: "Technologies used",
    showMoreCta: (n) => `View all projects (${n} more)`,
    items: [
      {
        id: 5,
        title: "PISE — Social & Ecological Innovation Platform",
        categoryKey: "Web",
        status: "live",
        featured: true,
        description:
          "A web platform promoting projects with social and environmental impact. React/Node.js architecture and UX built to give real visibility to sustainable initiatives.",
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
          "Showcase site for a Malian social enterprise turning textile waste into value through innovation and research. Custom WordPress build (Astra + Elementor) tuned for conversion and SEO.",
        stack: ["WordPress", "Astra (Parent/Child)", "Elementor", "PHP", "SEO"],
        link: "https://mistyrose-loris-372094.hostingersite.com/",
      },
      {
        id: 7,
        title: "GECAF SASU — Accounting Firm",
        categoryKey: "WordPress",
        status: "dev",
        featured: true,
        description:
          "Showcase site for an accounting and tax advisory firm in Mali: team, services and client resources, optimized to generate qualified inquiries.",
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
          "Cross-platform mobile app for managing rotating savings groups (tontines): secure authentication, REST API and real-time data sync, built for simple use on Android and iOS.",
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
          "Crowdfunding platform built on Hedera Hashgraph: traceable, secure donations for social and environmental projects, with real-time impact tracking.",
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
          "Academic management platform for Malian institutions: grades, timetables and internal communication centralized for more transparency — 500+ active users.",
        stack: ["Laravel", "MySQL", "Bootstrap", "PHP", "JavaScript"],
        link: "https://github.com/tonprofil/e-uamsat",
        github: "https://github.com/tonprofil/e-uamsat",
      },
      {
        id: 4,
        title: "Miths Agency",
        categoryKey: "WordPress",
        status: "live",
        featured: false,
        description:
          "SEO-optimized WordPress showcase site for a French-Malian digital agency, built to strengthen online visibility and generate new leads.",
        stack: ["WordPress", "Elementor", "PHP", "SEO"],
        link: "http://www.miths.tech/",
      },
      {
        id: 8,
        title: "Laravel Blog",
        categoryKey: "Web",
        status: "dev",
        featured: false,
        description:
          "Personal blogging platform built with Laravel, Blade and Tailwind CSS: content management, database design and unit tests — a project to dig deeper into the Laravel ecosystem.",
        stack: ["Laravel", "MySQL", "Tailwind", "PHP", "JavaScript"],
        link: "#",
        github: "https://github.com/Abdoulaye-T/Blog.git",
      },
      {
        id: 9,
        title: "ESPOIR SARL Medical Clinic",
        categoryKey: "Web",
        status: "dev",
        featured: false,
        description:
          "Appointment booking app for a medical clinic, with built-in teleconsultation and a secure patient dashboard for managing appointments, information and settings.",
        stack: ["Laravel", "MySQL", "Tailwind", "PHP", "JavaScript"],
        link: "#",
        github: "https://github.com/habiiba7000/Espoir-SARL",
      },
    ],
  },

  about: {
    eyebrow: "03 — About",
    titleBefore: "Building products that ",
    titleHighlight: "last",
    titleAfter: ", not just demos.",
    paragraphs: [
      "I'm a full-stack web developer based in Bamako with 3+ years of experience designing and building digital solutions that are reliable, performant, and built around real users. I work across the full project lifecycle: design, development, integration and production release.",
      "My path has taken me through business web applications, professional websites, advanced WordPress builds and custom Odoo ERP modules — always with the same bar for code quality, security and scalability.",
    ],
    quote:
      "From prototype to production, I help clients and partners build solutions that are solid, clear and built to last.",
    highlights: [
      { title: "Maintainable code", description: "Clear, tested, documented architecture — built to last, not to patch." },
      { title: "Product thinking", description: "I challenge requirements before writing the first line of code." },
      { title: "Measured performance", description: "Core Web Vitals, API response times, Lighthouse scores — never guesswork." },
      { title: "Clear communication", description: "Regular progress updates, no unnecessary jargon." },
    ],
    techEyebrow: "Technologies & Tools",
    techPoles: [
      { key: "dev", label: "Web Dev" },
      { key: "mobile", label: "Mobile" },
      { key: "devops", label: "Cloud & DevOps" },
      { key: "db", label: "Databases" },
      { key: "tools", label: "Tools & ERP" },
    ],
    ctaTitle: "Have a project in mind?",
    ctaButton: "Start the project",
  },

  services: {
    eyebrow: "04 — Services",
    titleBefore: "What I can ",
    titleHighlight: "build",
    titleAfter: " for you.",
    subtitle:
      "I help companies design, build and maintain reliable, scalable digital solutions.",
    technologiesLabel: "Technologies",
    ctaDiscuss: "Discuss this project",
    ctaTitle: "Ready to bring a project to life?",
    ctaButton: "Get in touch",
    items: [
      {
        id: 1,
        title: "Web Development & Business Applications",
        subtitle: "Custom applications, robust and built to scale",
        badge: "Expert",
        description:
          "I design web applications tailored to your real needs: internal tools, business platforms, dashboards and APIs. I work across the full lifecycle, from technical architecture to production release.",
        features: [
          "Custom applications — dashboards, internal CRMs, business tools",
          "REST APIs & third-party integrations (payments, CRM, ERP…)",
          "Optimized relational databases (MySQL/PostgreSQL)",
          "Authentication & access management — JWT, OAuth2, roles",
          "Testing, CI/CD & performance monitoring",
        ],
        technologies: ["React", "Next.js", "Angular", "Laravel", "Node.js", "MySQL", "PostgreSQL", "MongoDB", "Tailwind CSS", "PHP", "Python"],
      },
      {
        id: 2,
        title: "WordPress & Business Websites",
        subtitle: "Fast, well-ranked professional websites",
        badge: "Popular",
        description:
          "I build advanced WordPress sites for businesses that want an online presence that's both polished and technically solid. Security, SEO and performance are never optional.",
        features: [
          "Showcase sites & custom platforms — child themes, advanced page builders",
          "Custom features & business logic — CPTs, ACF, dedicated plugins",
          "SEO & performance optimization — Core Web Vitals, Lighthouse 90+",
          "Security & automated backups",
          "Ongoing maintenance & feature updates",
        ],
        technologies: ["WordPress", "PHP", "Elementor", "Astra", "Technical SEO", "Security"],
      },
      {
        id: 3,
        title: "Mobile Apps & User Experience",
        subtitle: "Cross-platform apps connected to your ecosystem",
        badge: "Scalable",
        description:
          "I build cross-platform mobile apps connected to reliable back-ends, delivering a smooth experience on iOS and Android that plugs naturally into your existing tools.",
        features: [
          "React Native apps for iOS & Android — a single codebase",
          "Real-time API & data sync — REST, WebSockets, push notifications",
          "Secure authentication — biometrics, JWT, OAuth",
          "App Store & Google Play publishing, launch support",
        ],
        technologies: ["React Native", "Expo", "Node.js", "REST APIs", "Firebase"],
      },
      {
        id: 4,
        title: "ERP, Cloud & DevOps",
        subtitle: "Automating your business processes",
        badge: "Proven ROI",
        description:
          "I help companies automate their business processes with tailored ERP and cloud solutions. The goal: simpler workflows, more reliable data, and higher productivity.",
        features: [
          "Full Odoo (ERP) integration — setup, data migration, team training",
          "Custom Odoo modules — Python/XML development",
          "Cloud deployment & infrastructure — AWS, VPS, Docker",
          "Automation & third-party integrations — webhooks, connectors",
          "CI/CD, testing & monitoring — GitLab CI, performance alerts",
        ],
        technologies: ["Odoo", "AWS", "Docker", "CI/CD", "GitLab", "Vagrant", "Ansible", "Jenkins"],
      },
    ],
  },

  education: {
    eyebrow: "05 — Journey",
    titleBefore: "A path driven by ",
    titleHighlight: "excellence",
    titleAfter: ".",
    tabEducation: "Education",
    tabExperience: "Experience",
    achievementsLabel: "Achievements",
    technologiesLabel: "Technologies",
    educationItems: [
      {
        title: "Hedera Developer Certification",
        school: "Hedera & Orange Digital Center Mali",
        date: "2025",
        description:
          "Intensive training on the Hedera ecosystem: Hashgraph architecture, Smart Contracts and decentralized applications. Deployed a full dApp for a fictional client.",
        tags: ["Hedera", "Hashgraph", "Smart Contracts", "dApps", "Tokenization", "Web3"],
        level: "Hedera Certified",
      },
      {
        title: "AWS re/Start — Cloud Computing",
        school: "Amazon Web Services & Orange Digital Center Mali",
        date: "2024",
        description:
          "Intensive training on the AWS ecosystem: modern cloud architecture, security and automation. Deployed a serverless app with Lambda and S3; certified with distinction.",
        tags: ["AWS", "EC2", "S3", "VPC", "IAM", "Lambda", "CloudFormation"],
        level: "AWS Certified",
      },
      {
        title: "BSc in Software Engineering & Web Development",
        school: "Technolab-ISTA",
        date: "2021 – 2024",
        description:
          "Full-stack development program with a mobile specialization. Capstone project: E-Uamsat, an academic management platform deployed to production with 500+ active users.",
        tags: ["JavaScript", "Java EE", "Node.js", "PHP", "Laravel", "React Native", "SQL", "UML", "Merise"],
        level: "Graduated",
      },
      {
        title: "Meta Certified Frontend Developer",
        school: "Meta via Coursera",
        date: "2024",
        description:
          "Official Meta certification: advanced React, modern JavaScript, UX/UI principles and best practices. Built an interactive React interface with Jest unit tests.",
        tags: ["React", "UI/UX", "Testing", "Jest", "Figma"],
        level: "Meta Certified",
      },
      {
        title: "CISCO IT Essentials",
        school: "Cisco Networking Academy",
        date: "2023",
        description:
          "CISCO certification covering IT fundamentals, network administration and hardware troubleshooting. Deployed a local network for an SMB with firewall configuration.",
        tags: ["Networking", "Hardware", "Troubleshooting", "Security"],
        level: "CISCO Certified",
      },
    ],
    experienceItems: [
      {
        title: "Web & Mobile Developer",
        school: "Miths — French-Malian Digital Agency",
        date: "May 2025 – present",
        description:
          "Building WordPress sites for the agency and its clients (showcase, support, e-commerce), maintaining and improving a React Native mobile app, and contributing to an extranet for a pharmaceutical wholesaler. Integrating custom Odoo modules for the company's intranet, working with Git and Agile/Scrum practices.",
        tags: ["WordPress", "React Native", "Odoo", "PHP", "Git", "Agile/Scrum"],
        achievements: [
          "Showcase, support and e-commerce WordPress sites delivered for the agency and its clients",
          "Maintained and improved a production React Native app",
          "Built an extranet for a pharmaceutical wholesaler (client access, order management)",
          "Integrated custom Odoo modules into the company's intranet",
        ],
      },
      {
        title: "Teaching Mentor — IAM Database Challenge",
        school: "Super DataInsights, at IAM (African Institute of Management)",
        date: "Mar. – Jul. 2026",
        description:
          "Mentored and supervised groups of 2nd-year Business IT students as part of IAM Bamako's Database Challenge. Guided dynamic web application projects end-to-end, from topic validation through to the final jury defense.",
        tags: ["Mentoring", "Teaching", "Web Applications", "Project Management"],
        achievements: [
          "Multiple student groups mentored end-to-end",
          "Projects guided from topic validation through to jury defense",
          "Shared web development best practices",
        ],
      },
      {
        title: "Full-Stack Developer",
        school: "Technolab-ISTA",
        date: "Feb. – Jun. 2024",
        description:
          "Building E-Uamsat, a SaaS academic management platform: scalable architecture, secure RESTful APIs and modern user interfaces.",
        tags: ["Laravel", "MySQL", "REST API", "Bootstrap", "Git"],
        achievements: [
          "500+ daily active users",
          "Scalable architecture implemented",
          "80% reduction in admin overhead",
          "Bilingual interface (FR/EN)",
        ],
      },
      {
        title: "Cloud Trainee",
        school: "AWS re/Start Program",
        date: "May – Aug. 2024",
        description:
          "Built cloud solutions on AWS: infrastructure automation with CloudFormation, CI/CD pipelines and cost optimization.",
        tags: ["AWS", "CloudFormation", "EC2", "S3", "Lambda", "DevOps", "Python"],
        achievements: [
          "5 cloud architectures deployed",
          "Fully automated deployments",
          "40% infrastructure cost reduction",
          "Monitoring and alerts configured",
        ],
      },
    ],
  },

  contact: {
    eyebrow: "06 — Contact",
    titleBefore: "Let's work ",
    titleHighlight: "together",
    titleAfter: ".",
    lead: "Startup, SMB or large company: I adapt to your needs and your budget. Let's talk about your project.",
    infoItems: [
      { icon: "mail", label: "Professional email", value: "abdoulayet.dev@gmail.com", subtitle: "Reply within 24h", href: "mailto:abdoulayet.dev@gmail.com" },
      { icon: "phone", label: "Phone", value: "+223 92 35 31 20", subtitle: "Mon–Fri, 9am–6pm", href: "tel:+22392353129" },
      { icon: "map", label: "Location", value: "Bamako, Mali", subtitle: "Available remotely", href: "#" },
    ],
    availabilityText: "Available for new projects — guaranteed reply within 24h",
    form: {
      nameLabel: "Full name *",
      namePlaceholder: "Your name",
      emailLabel: "Email *",
      emailPlaceholder: "you@example.com",
      phoneLabel: "Phone",
      phonePlaceholder: "+223 XX XX XX XX",
      companyLabel: "Company",
      companyPlaceholder: "Your company name",
      subjectLabel: "Request type *",
      subjectPlaceholder: "Select a request type",
      subjects: [
        { value: "freelance", label: "Freelance mission" },
        { value: "emploi", label: "Job opportunity" },
        { value: "partenariat", label: "Partnership / Collaboration" },
        { value: "conseil", label: "Technical consulting" },
        { value: "autre", label: "Other request" },
      ],
      messageLabel: "Describe your project *",
      messagePlaceholder: "Tell me about your project, goals, and timeline...",
      submit: "Send message",
      submitting: "Sending...",
      successTitle: "Message sent!",
      successBody: "Thanks for reaching out. I'll get back to you as soon as possible.",
      errorText: "Something went wrong while sending. Please try again or email me directly.",
    },
    faqEyebrow: "Frequently Asked Questions",
    faq: [
      { q: "What's your response time?", a: "I reply to every message within 24 hours max, often much sooner." },
      { q: "Do you offer free quotes?", a: "Yes, reviewing your project and providing a detailed quote is always free." },
      { q: "Do you work remotely?", a: "Absolutely — I collaborate with clients all over the world." },
    ],
  },

  footer: {
    tagline:
      "Full-Stack developer passionate about building reliable web and mobile applications. Always up for new technical challenges and rewarding collaborations.",
    navTitle: "Navigation",
    followTitle: "Follow me",
    rights: (year) => `© ${year} Abdoulaye Traoré. All rights reserved.`,
    availability: "Available for new projects",
  },
};
