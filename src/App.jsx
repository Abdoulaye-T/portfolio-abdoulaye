import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Education from "./sections/Education";

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <div className="pt-20">
        <Hero />
        <About />
        <Services />
        <Education />
        {/* <Experience /> */}
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
