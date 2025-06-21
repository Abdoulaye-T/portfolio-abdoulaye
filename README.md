# Portfolio – Abdoulaye Traoré

Ce projet est un portfolio moderne développé avec **React** et **Vite**, stylisé avec **Tailwind CSS**. Il présente mon parcours, mes compétences, mes projets et permet de me contacter facilement.

## Aperçu

- **Stack principale** : React, Vite, Tailwind CSS, Framer Motion, React Icons
- **Fonctionnalités** :
  - Présentation (Hero)
  - À propos de moi
  - Timeline d’expériences
  - Compétences filtrables (flip cards)
  - Projets filtrables avec modale de détails
  - Formulaire de contact sécurisé (EmailJS + reCAPTCHA)
  - Mode sombre/clair

## Structure du projet

```
src/
│
├── assets/           # Images et illustrations
├── components/       # Navbar, Footer, ProjectCard, SkillCard
├── hooks/            # Hooks personnalisés (ex: useTheme)
├── sections/         # Hero, About, Experience, Skills, Portfolio, Contact
├── App.jsx           # Composant principal
├── main.jsx          # Point d’entrée React
├── index.css         # Styles globaux (inclut Tailwind)
├── flip.css          # Styles pour les flip cards
```

## Installation

1. **Cloner le repo**
   ```sh
   git clone https://github.com/Abdoulaye-T/portfolio.git
   cd portfolio
   ```

2. **Installer les dépendances**
   ```sh
   npm install
   ```

3. **Lancer le serveur de développement**
   ```sh
   npm run dev
   ```

4. **Accéder à l’application**
   Ouvre [http://localhost:5173](http://localhost:5173) dans ton navigateur.

## Personnalisation

- Modifie les données dans les fichiers de [`src/sections`](src/sections) pour adapter le contenu (projets, expériences, etc.).
- Les images sont à placer dans [`src/assets`](src/assets).
- Les couleurs et styles sont personnalisables via [`tailwind.config.js`](tailwind.config.js).

## Déploiement

Pour générer une version de production :
```sh
npm run build
```
Les fichiers seront dans le dossier `dist/`.

## Crédits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha)

---

© {année} Abdoulaye Traoré. Tous droits réservés.