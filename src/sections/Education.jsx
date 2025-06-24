import { motion } from "framer-motion";
import { FaGraduationCap, FaCloud, FaBook } from "react-icons/fa";

const educations = [
  {
    title: "Formation AWS re/Start – Cloud Computing",
    school: "Amazon Web Services & Orange Digital Center Mali",
    date: "Août 2024 – Novembre 2024",
    description:
      "Apprentissage du cloud AWS : EC2, S3, Lambda, IAM, scripts Bash, sécurité, VPC. Projets pratiques sur l'infrastructure cloud.",
    icon: <FaCloud />,
    tags: ["EC2", "S3", "IAM", "Lambda", "Bash", "CloudFormation"],
  },
  {
    title: "BAC+3 Génie Logiciel et Développement Web",
    school: "Technolab-ISTA",
    date: "Octobre 2021 – Août 2024",
    description:
      "Développement web & mobile : Laravel, Rea)à==ct Native, MySQL, Bootstrap. Projet de gestion académique (E-Uamsat).",
    icon: <FaGraduationCap />,
    tags: ["Laravel", "React Native", "MySQL", "Bootstrap"],
  },
  {
    title: "Meta Certified Frontend Developer",
    school: "Orange Digital Center Mali, Coursera",
    date: "Depuis Mai 2025",
    description:
      "Renforcement en JavaScript et JavaScript avancées, React et React avancées, principes UI/UX, Figma, Veille technologique constante.",
    icon: <FaBook />,
    tags: ["React", "Docker", "Git", "WordPress", "DevOps"],
  },
  {
    title: "CISCO Certification IT Essentials",
    school: "Netacad",
    date: "Août 2023",
    description:
      "Renforcement en JavaScript et JavaScript avancées, React et React avancées, principes UI/UX, Figma, Veille technologique constante.",
    icon: <FaBook />,
    tags: ["React", "Docker", "Git", "WordPress", "DevOps"],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-purple-600 inline-block">
          Formations & Éducations
        </h2>

        <div className="relative border-l-4 border-purple-600 pl-6 space-y-14">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="absolute -left-11 top-2 bg-purple-600 text-white p-3 rounded-full shadow-md">
                {edu.icon}
              </div>
              <h3 className="text-xl font-semibold">{edu.title}</h3>
              <p className="text-sm italic text-purple-600 dark:text-purple-400">
                {edu.school} – {edu.date}
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{edu.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {edu.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-purple-100 dark:bg-purple-800 dark:text-white text-purple-800 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
