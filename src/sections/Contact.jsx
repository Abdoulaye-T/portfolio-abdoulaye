import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sujet: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef();

  const SERVICE_ID = 'service_9ggoslo';
  const TEMPLATE_ID = 'template_m9mk6hi';
  const PUBLIC_KEY = 'mOsW4igu0Oqs7NM-X';
  const RECAPTCHA_SITE_KEY = '6LctD2grAAAAAHmfcHNb9v_SU2obSWatudyBBvUH';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const token = await recaptchaRef.current.executeAsync();
  recaptchaRef.current.reset();

  if (!token) {
    toast.error("Échec de validation reCAPTCHA.");
    setLoading(false);
    return;
  }

  const templateParams = {
    ...formData,
    'g-recaptcha-response': token,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      setLoading(false);
      toast.success('Message envoyé avec succès !');
      setFormData({ name: '', email: '', sujet: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    });
};


  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-20 px-6 md:px-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-purple-600 inline-block">
          Me contacter
        </h2>
        <p className="mb-10 text-sm text-gray-600 dark:text-gray-300">
          Une idée ? Un projet ? Ou juste envie de discuter tech ? N’hésite pas.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
          autoComplete="off"
        >
          <div>
            <label className="block mb-1 font-semibold">Nom complet</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Abdoulaye Traoré"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Sujet</label>
            <select
              name="sujet"
              value={formData.sujet}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              required
            >
              <option value="">-- Sélectionner un sujet --</option>
              <option value="freelance">Demande de prestation freelance</option>
              <option value="emploi">Opportunité d’emploi</option>
              <option value="partenariat">Partenariat / collaboration</option>
              <option value="autre">Autre</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              'Envoyer le message'
            )}
          </button>
        </form>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          size="invisible"
        />
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" />
    </section>
  );
}
