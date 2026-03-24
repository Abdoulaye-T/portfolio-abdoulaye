import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

// Lazy loading des sections non visibles au premier rendu
const About = lazy(() => import("./sections/About"));
const Services = lazy(() => import("./sections/Services"));
const Education = lazy(() => import("./sections/Education"));
const Portfolio = lazy(() => import("./sections/Portfolio"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Education />
          <Portfolio />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
