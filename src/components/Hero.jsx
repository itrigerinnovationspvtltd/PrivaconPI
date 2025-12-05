import React, { useState } from "react";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlesubmit = (e)=>{
    e.preventDefault();
    setShowPopup(true);
    e.target.reset();

    setTimeout(()=>{
      setShowPopup(false);
    },3000);
  };

  return (
    <section id="home"
      className=" relative bg-cover bg-center bg-no-repeat pt-28  pb-16"
      style={{
        backgroundImage:
          "url('/bgimage.jpg')"
      }}
    >
      {/* Dark overlay */}
      <div className=" absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* LEFT CONTENT */}
        <div className="text-white space-y-6">
          <h2 className="playfair-display text-2xl sm:text-4xl font-bold leading-tight">
            Speak with Privacon’s Lead Investigator.
          </h2>

          <p className=" playfair-display text-sm  sm:text-lg text-gray-200 leading-relaxed">
            Privacon Investigations is a full-service private investigation 
            agency based in Western New York. We offer Personal & Family, 
            Corporate, and Legal investigative services.
          </p>

          <p className="playfair-display text-gray-200 text-sm  sm:text-lg">
            We primarily handle cases in Buffalo, Grand Island, Clarence, 
            Hamburg, Niagara Falls, East Aurora, Rochester, Syracuse, and 
            anywhere else in the Erie and Cattaraugus counties.
          </p>

          <p className=" playfair-display text-sm  sm:text-lg font-semibold">
            Call Us Now: <a href="tel:7165440230" className="text-[#DBB189]">
              (716) 544-0230
            </a>
          </p>

          <p className=" playfair-display text-sm  sm:text-lg font-semibold">
            Email Us: <a href="mailto:agent@privaconpi.com" className="text-[#DBB189]">
              agent@privaconpi.com
            </a>
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/30 p-6 sm:p-8 rounded-xl shadow-xl text-white">
          <h3 className="playfair-display text-2xl font-semibold mb-6">Free Consultation</h3>

          <form onSubmit={handlesubmit} className="space-y-3 sm:space-y-5">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                type="text"
                required
                className="w-full border-b border-gray-300 focus:border-black bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
               type="tel"
                required
                className="w-full border-b border-gray-300 focus:border-black bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full border-b border-gray-300 focus:border-black bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                required
                className="w-full border-b border-gray-300 focus:border-black bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="2"
                required
                className="w-full border-b border-gray-300 focus:border-black bg-transparent py-2 outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button className="w-full bg-[#DBB189] text-white py-3 rounded-md font-semibold hover:bg-[#8e7054] transition">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* popup thankyou */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div
            className="
              bg-white text-black p-6 rounded-xl shadow-xl w-72 sm:w-96 text-center relative
              transform transition-all duration-300 ease-out
              animate-[fadeInScale_0.3s_ease-out]
            "
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 bg-black text-white w-7 h-7 rounded-full"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold mb-2">Thank You! 🎉</h3>
            <p className="text-sm">Your request has been submitted.</p>
          </div>
        </div>
      )}
      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeInScale {
            0% { opacity: 0; transform: scale(0.7); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
