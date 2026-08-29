import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, Code, Globe, Smartphone, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import Photo from "../assets/Abdoulaye-picture.jpg";

const roleIcons = [Code, Smartphone, Globe, Settings];

export default function Hero() {
  const { t } = useLanguage();
  const [currentRole, setCurrentRole] = useState(0);
  const roles = t.hero.roles;

  useEffect(() => {
    setCurrentRole(0);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const RoleIcon = roleIcons[currentRole % roleIcons.length];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-bg overflow-hidden flex flex-col justify-center"
    >
      {/* Repères éditoriaux : filet vertical + numéro fantôme */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="absolute inset-y-0 left-[6%] w-px bg-line" />
        <div className="absolute inset-y-0 right-[6%] w-px bg-line" />
        <span className="absolute top-24 right-[6%] translate-x-1/2 font-serif text-[14rem] leading-none text-ink/[0.03] select-none">
          01
        </span>
      </div>

      <div className="relative z-10 max-w-editorial mx-auto w-full px-6 lg:px-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-12 gap-y-14 gap-x-10 items-end">

          {/* Colonne texte */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-8 order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              <span className="eyebrow">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-serif font-medium leading-[0.95] text-ink text-[3.4rem] sm:text-7xl lg:text-8xl tracking-tight"
            >
              {t.hero.firstName}
              <br />
              <span className="italic text-gold">{t.hero.lastName}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-8 h-8 overflow-hidden">
              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2.5 text-lg sm:text-xl text-muted font-medium"
              >
                <RoleIcon className="w-5 h-5 text-gold" />
                {roles[currentRole]}
              </motion.div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-muted"
            >
              {t.hero.lead}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-4">
              <motion.a
                href="/Abdoulaye_Traoré_CV_développeur_Fullstack.pdf"
                download
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-gold text-bg font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-gold/10 hover:shadow-gold/20 transition-shadow duration-300"
              >
                <ArrowDownToLine className="w-4 h-4" />
                {t.hero.ctaCv}
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center justify-center gap-3 border border-line text-ink font-semibold px-7 py-3.5 rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
              >
                {t.hero.ctaProjects}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-16 flex items-center gap-10">
              {t.hero.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-10">
                  {i > 0 && <div className="w-px h-10 bg-line" />}
                  <div>
                    <div className="font-serif text-3xl text-ink">{stat.value}</div>
                    <div className="mt-1 font-mono text-[11px] uppercase tracking-widest2 text-muted">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 sm:w-80 lg:w-full lg:max-w-xs">
              <div className="relative aspect-[4/5] overflow-hidden border border-line grayscale-[15%]">
                <img
                  src={Photo}
                  alt="Abdoulaye Traoré - Développeur Full Stack Web & Mobile"
                  width="384"
                  height="480"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-ink/5" />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest2 text-muted">
                <span>{t.hero.photoLocation}</span>
                <span>{t.hero.photoYear}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 mx-auto mb-8 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
