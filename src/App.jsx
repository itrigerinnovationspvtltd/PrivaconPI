import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hero from "./components/Hero";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";
import LeadFormPopup from "./components/LeadFormPopup";
import ThankYouPage from "./components/ThankyouPage";


function App() {
  

  return (
   <Router>
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <LeadFormPopup />
              <Testimonials />
              <About />
              <Services />
              <WhyChoose />
              <FAQ />
              <Footer />
            </>
          }
        />

        {/* THANK YOU PAGE */}
        <Route path="/thank-you" element={<ThankYouPage />} />

      </Routes>
    </Router>
  );
}

export default App;