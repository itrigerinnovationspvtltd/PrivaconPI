import React, { useState } from "react";
import { API_ENDPOINTS } from "../config/api"; 
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

 const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.target;

    const formData = {
      Name: form.name.value,
      Phone: form.phone.value,
      Email: form.email.value,
      Subject: form.subject.value,
      Message: form.message.value,
    };

    try {
      //  SAME FETCH LOGIC AS LEADFORMPOPUP
      const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        navigate("/thank-you"); //  SAME AS POPUP
      } else {
        setError(data.message || "Failed to send email. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    }

    setIsLoading(false);
  };

  return (
    <section id="home"
      className=" relative bg-cover bg-center bg-no-repeat pt-28  pb-16"
      style={{
        backgroundImage:
          "url('/bgimage.webp')"
      }}
    >
      {/* Dark overlay */}
      <div className=" absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* LEFT CONTENT */}
        <div className="text-white space-y-6 md:space-y-10">
          <h2 className="playfair-display text-2xl sm:text-4xl font-bold leading-tight">
            Hire a Licensed Private Investigator You Can Trust
          </h2>

          <p className=" playfair-display text-sm  sm:text-lg text-gray-200 leading-relaxed">
            Discreet. Accurate. Confidential. Whether it’s infidelity, surveillance, cyber investigations, or background checks. We uncover the truth.

          </p>

          

          <button className="playfair-display text-base sm:text-lg font-semibold">
  <a
    href="tel:7165440230"
    className="bg-[#c79b74] text-white px-5 py-2 rounded-xl shadow-md hover:bg-[#DBB189] hover:shadow-lg transition-all duration-300 ease-in-out focus:ring-2 focus:ring-[#DBB189] focus:outline-none"
  >
    Call Us
  </a>
</button>

        </div>

        {/* RIGHT FORM */}
        <div className="bg-white/30 p-6 sm:p-8 rounded-xl shadow-xl text-white">
          <h3 className="playfair-display text-2xl font-semibold mb-6">
            Free Consultation
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Phone</label>
              <input
                name="phone"
                type="tel"
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                name="subject"
                type="text"
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="2"
                required
                className="w-full border-b border-gray-300 bg-transparent py-2 outline-none"
              ></textarea>
            </div>
{/* ADDED ERROR MESSAGE */}
            {error && (
              <p className="text-red-300 text-sm bg-red-900/50 p-2 rounded-md">
                {error}
              </p>
            )}

            {/* UPDATED BUTTON with loading */}
            <button
              className="w-full bg-[#DBB189] text-white py-3 rounded-md font-semibold hover:bg-[#8e7054] transition disabled:opacity-60"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
