import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import {
  SiReact, SiLaravel, SiTailwindcss, SiAmazon, SiNodedotjs,
  SiMysql, SiGit, SiAngular, SiFirebase, SiFigma, SiDocker,
  SiWordpress, SiMongodb, SiPhp, SiJavascript, SiGitlab,
  SiPostgresql, SiVagrant, SiAnsible, SiJenkins, SiApache, SiKubernetes,
} from "react-icons/si";
import { useLanguage } from "../i18n/LanguageContext";
import Illustration from "../assets/a2.jpg";
import WorkImage from "../assets/a1.jpg";

const techByPole = {
  dev: [
    { name: "React", icon: SiReact },
    { name: "Angular", icon: SiAngular },
    { name: "Laravel", icon: SiLaravel },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "JavaScript", icon: SiJavascript },
    { name: "PHP", icon: SiPhp },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  mobile: [
    { name: "React Native", icon: SiReact },
    { name: "Expo", icon: SiReact },
    { name: "Firebase", icon: SiFirebase },
  ],
  devops: [
    { name: "AWS", icon: SiAmazon },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
    { name: "GitLab CI", icon: SiGitlab },
    { name: "Vagrant", icon: SiVagrant },
    { name: "Ansible", icon: SiAnsible },
    { name: "Jenkins", icon: SiJenkins },
    { name: "JMeter", icon: SiApache },
    { name: "Kubernetes", icon: SiKubernetes },
  ],
  db: [
    { name: "MySQL", icon: SiMysql },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
  ],
  tools: [
    { name: "WordPress", icon: SiWordpress },
    { name: "Figma", icon: SiFigma },
    { name: "Git", icon: SiGit },
    { name: "GitLab", icon: SiGitlab },
  ],
};

export default function About() {
  const { t } = useLanguage();
  const { eyebrow, titleBefore, titleHighlight, titleAfter, paragraphs, quote, highlights, techEyebrow, techPoles, ctaTitle, ctaButton } = t.about;
  const [activePole, setActivePole] = useState(techPoles[0].key);

  return (
    <section id="about" className="relative py-28 bg-bg text-ink overflow-hidden">
      <div className="max-w-editorial mx-auto px-6 lg:px-10">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl font-medium leading-tight max-w-3xl">
            {titleBefore}<span className="italic text-gold">{titleHighlight}</span>{titleAfter}
          </h2>
        </motion.div>

        {/* Contenu principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24"
        >
          {/* Visuel */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative w-full max-w-xs mx-auto lg:mx-0 aspect-[4/5]">
              <div className="absolute left-0 top-6 w-[72%] h-[85%] border border-line bg-surface2 -rotate-3 z-10">
                <img
                  src={Illustration}
                  alt="Abdoulaye Traoré professionnel"
                  className="w-full h-full object-cover grayscale-[20%]"
                  loading="lazy"
                />
              </div>
              <div className="absolute right-0 top-0 w-[68%] h-[78%] border border-line bg-surface2 rotate-3 z-20">
                <img
                  src={WorkImage}
                  alt="Environnement de travail"
                  className="w-full h-full object-cover grayscale-[20%]"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex justify-center lg:justify-start gap-3 mt-10">
              <a
                href="https://github.com/Abdoulaye-T"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-line rounded-full text-ink hover:border-gold hover:text-gold transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/developpeur-fullstack"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center border border-line rounded-full text-ink hover:border-gold hover:text-gold transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Texte */}
          <div className="lg:col-span-8 order-1 lg:order-2 space-y-8">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-lg sm:text-xl leading-relaxed text-muted">
                {i === 0 && (
                  <span className="font-serif text-3xl float-left mr-3 mt-1 text-ink leading-none">
                    {p.charAt(0)}
                  </span>
                )}
                {i === 0 ? p.slice(1) : p}
              </p>
            ))}

            <div className="border-l-2 border-gold pl-6 py-1">
              <p className="text-lg italic text-ink/90 font-serif">« {quote} »</p>
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-line mb-24"
        >
          {highlights.map((item, index) => (
            <div
              key={index}
              className="py-8 px-2 sm:border-l border-line first:border-l-0 lg:pl-8"
            >
              <span className="font-mono text-xs text-gold">0{index + 1}</span>
              <h4 className="mt-3 font-serif text-xl text-ink">{item.title}</h4>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <span className="eyebrow">{techEyebrow}</span>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mt-6 mb-10 border-b border-line pb-6">
            {techPoles.map((p) => (
              <button
                key={p.key}
                onClick={() => setActivePole(p.key)}
                className={`font-mono text-sm uppercase tracking-wide transition-colors duration-200 ${
                  activePole === p.key ? "text-gold" : "text-muted hover:text-ink"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePole}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap gap-3"
            >
              {(techByPole[activePole] ?? []).map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-2.5 px-4 py-2.5 border border-line rounded-full text-ink/80 hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  <tech.icon className="text-base" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border border-line p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          <h3 className="font-serif text-3xl md:text-4xl max-w-md">{ctaTitle}</h3>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-gold text-bg rounded-full font-semibold shrink-0 hover:shadow-lg hover:shadow-gold/20 transition-shadow duration-300"
          >
            {ctaButton}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
