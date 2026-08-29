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
    <div className="bg-bg text-ink min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Portfolio />
        <About />
        <Services />
        <Education />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
