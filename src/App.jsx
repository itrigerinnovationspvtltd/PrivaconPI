import About from "./components/About";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";



function App() {
  

  return (
   <div>
    <Navbar />
    <Hero />
    <Testimonials />
    <About />
    <Services />
    <FAQ />
    <Footer />
   </div>
  )
}

export default App
