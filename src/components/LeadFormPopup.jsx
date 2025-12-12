import React, { useEffect, useState } from "react";
import { API_ENDPOINTS } from "../config/api";
import { useNavigate } from "react-router-dom";

const LeadFormPopup = () => {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // OPEN POPUP ON 20% SCROLL
  useEffect(() => {
    const handleScroll = () => {
      if (hasOpened) return;

      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollPosition / totalHeight) * 100;

      if (scrollPercent > 20) {
        setOpen(true);
        setHasOpened(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasOpened]);

  // SUBMIT FORM → send-email.php
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
      const response = await fetch(API_ENDPOINTS.SEND_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        form.reset();
        setOpen(false);
        navigate("/thank-you");
      } else {
        setError(data.message || "Failed to send email. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    }

    setIsLoading(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "popupOverlay") {
      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* LEAD FORM POPUP */}
      {open && (
        <div
          id="popupOverlay"
          onClick={handleOutsideClick}
          className="pointer-events-auto fixed inset-0 bg-black/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md relative text-white"
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 bg-black text-white w-8 h-8 rounded-full"
            >
              ✕
            </button>

            <h2 className="playfair-display text-2xl font-bold mb-4">
              Get a Free Consultation
            </h2>

            <p className="text-sm mb-4 text-gray-200">
              Fill the form and our investigator will contact you shortly.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
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

              {error && (
                <p className="text-red-300 text-sm bg-red-900/30 p-2 rounded-md">
                  {error}
                </p>
              )}

              <button
                className="w-full bg-[#DBB189] text-white py-3 rounded-md font-semibold hover:bg-[#8e7054] transition disabled:opacity-60"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default LeadFormPopup;
