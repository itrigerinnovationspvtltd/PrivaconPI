import About from "./components/About";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import LeadFormPopup from "./components/LeadFormPopup";



function App() {
  

  return (
   <div>
    <Navbar />
    <Hero />
    <LeadFormPopup />
    <Testimonials />
    <About />
    <Services />
    <WhyChoose />
    <FAQ />
    <Footer />
   </div>
  )
}

export default App
