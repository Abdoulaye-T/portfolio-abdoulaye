import Navbar from "./components/Navbar";
import Hero from "./sections/Hero"; // On testera avec juste le Hero pour l’instant
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Portfolio from "./sections/Portfolio"; 
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        {/* D'autres sections peuvent être ajoutées ici */}
      </div>
    </div>
  );
}

export default App;
