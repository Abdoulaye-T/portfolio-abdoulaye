import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const infoIcons = { mail: Mail, phone: Phone, map: MapPin };

export default function Contact() {
  const { t } = useLanguage();
  const { eyebrow, titleBefore, titleHighlight, titleAfter, lead, infoItems, availabilityText, form, faqEyebrow, faq } = t.contact;

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
  const [error, setError] = useState(null);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'N/A',
      company: formData.company || 'N/A',
      sujet: formData.sujet,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', company: '', sujet: '', message: '' });
      setTimeout(() => setSuccess(false), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setError(form.errorText);
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "w-full bg-transparent border-0 border-b border-line py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-gold transition-colors duration-200";

  return (
    <section id="contact" className="relative py-28 bg-bg text-ink overflow-hidden">
      <div className="max-w-editorial mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl font-medium leading-tight max-w-2xl">
            {titleBefore}<span className="italic text-gold">{titleHighlight}</span>{titleAfter}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Informations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-10"
          >
            <p className="text-muted leading-relaxed">{lead}</p>

            <div className="space-y-6 border-t border-line pt-8">
              {infoItems.map((info, index) => {
                const Icon = infoIcons[info.icon];
                return (
                  <a key={index} href={info.href} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 shrink-0 flex items-center justify-center border border-line rounded-full text-ink group-hover:border-gold group-hover:text-gold transition-colors duration-200">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{info.label}</p>
                      <p className="text-ink font-medium group-hover:text-gold transition-colors duration-200">{info.value}</p>
                      <p className="text-xs text-muted">{info.subtitle}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3 border border-line p-5">
              <Clock className="text-gold shrink-0" size={18} />
              <p className="text-sm text-muted">
                <span className="inline-block w-2 h-2 bg-gold rounded-full mr-2 align-middle" />
                {availabilityText}
              </p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            {success ? (
              <div className="text-center py-16 border border-line">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mx-auto mb-5"
                >
                  <CheckCircle className="text-gold" size={28} />
                </motion.div>
                <h3 className="font-serif text-2xl text-ink mb-2">{form.successTitle}</h3>
                <p className="text-muted">{form.successBody}</p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{form.nameLabel}</label>
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      className={inputClasses} placeholder={form.namePlaceholder} required
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{form.emailLabel}</label>
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      className={inputClasses} placeholder={form.emailPlaceholder} required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{form.phoneLabel}</label>
                    <input
                      type="tel" name="phone" value={formData.phone} onChange={handleChange}
                      className={inputClasses} placeholder={form.phonePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{form.companyLabel}</label>
                    <input
                      type="text" name="company" value={formData.company} onChange={handleChange}
                      className={inputClasses} placeholder={form.companyPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{form.subjectLabel}</label>
                  <select
                    name="sujet" value={formData.sujet} onChange={handleChange}
                    className={`${inputClasses} appearance-none cursor-pointer`} required
                  >
                    <option value="" className="bg-bg">{form.subjectPlaceholder}</option>
                    {form.subjects.map((subject) => (
                      <option key={subject.value} value={subject.value} className="bg-bg">
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-mono text-[11px] uppercase tracking-widest2 text-muted">{form.messageLabel}</label>
                  <textarea
                    name="message" value={formData.message} onChange={handleChange} rows={4}
                    className={`${inputClasses} resize-none`}
                    placeholder={form.messagePlaceholder} required
                  />
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 p-4 border border-line text-sm text-ink"
                  >
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-gold" />
                    <p>{error}</p>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ y: loading ? 0 : -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-3 bg-gold text-bg py-4 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-gold/20 transition-shadow duration-300 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                      {form.submitting}
                    </>
                  ) : (
                    <>
                      <Send size={17} />
                      {form.submit}
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-28"
        >
          <span className="eyebrow">{faqEyebrow}</span>
          <div className="mt-8 border-t border-line">
            {faq.map((item, index) => (
              <div key={index} className="grid sm:grid-cols-12 gap-4 py-7 border-b border-line">
                <span className="sm:col-span-1 font-mono text-sm text-gold">0{index + 1}</span>
                <h4 className="sm:col-span-4 font-serif text-lg text-ink">{item.q}</h4>
                <p className="sm:col-span-7 text-sm text-muted leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
