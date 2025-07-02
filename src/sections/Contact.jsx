import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, User, MessageSquare, Briefcase, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sujet: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', sujet: '', message: '' });
      
      // Reset success message après 5 secondes
      setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email professionnel',
      value: 'abdoulayet.dev@gmail.com',
      subtitle: 'Réponse sous 24h',
      href: 'mailto:abdoulayet.dev@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+223 92 35 31 20',
      subtitle: 'Lun-Ven 9h-18h',
      href: 'tel:+22392353129'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Bamako, Mali',
      subtitle: 'Disponible à distance',
      href: '#'
    }
  ];

  const subjects = [
    { value: 'freelance', label: 'Mission freelance', icon: Briefcase },
    { value: 'emploi', label: 'Opportunité d\'emploi', icon: User },
    { value: 'partenariat', label: 'Partenariat / Collaboration', icon: MessageSquare },
    { value: 'conseil', label: 'Conseil technique', icon: CheckCircle },
    { value: 'autre', label: 'Autre demande', icon: Mail }
  ];

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Travaillons <span className="text-blue-600">Ensemble</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Prêt à donner vie à votre projet ? Discutons de vos besoins et trouvons la solution idéale.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Que vous soyez une startup, une PME ou un grand groupe, je m'adapte à vos besoins et votre budget. 
                Parlons de votre vision !
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors mr-4">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{info.label}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{info.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.subtitle}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Disponibilité */}
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="text-blue-600" size={20} />
                <h4 className="font-semibold text-blue-900 dark:text-blue-100">Disponibilité actuelle</h4>
              </div>
              <p className="text-blue-800 dark:text-blue-200 text-sm">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Disponible pour nouveaux projets • Réponse garantie sous 24h
              </p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
          >
            {success ? (
              <div className="text-center py-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="text-green-600" size={32} />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">Message envoyé !</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Démarrons votre projet</h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="vous@exemple.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+223 XX XX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Type de demande *
                    </label>
                    <select
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Sélectionnez le type de demande</option>
                      {subjects.map((subject) => (
                        <option key={subject.value} value={subject.value}>
                          {subject.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Parlez-moi de votre projet, vos objectifs, votre timeline..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  En envoyant ce formulaire, vous acceptez d'être contacté concernant votre demande.
                </p>
              </>
            )}
          </motion.div>
        </div>

        {/* Section FAQ rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Questions fréquentes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Quel est votre délai de réponse ?",
                a: "Je réponds à tous les messages sous 24h maximum, souvent plus rapidement."
              },
              {
                q: "Proposez-vous des devis gratuits ?",
                a: "Oui, l'étude de votre projet et le devis détaillé sont entièrement gratuits."
              },
              {
                q: "Travaillez-vous à distance ?",
                a: "Absolument ! Je collabore avec des clients partout dans le monde."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">{faq.q}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}