import React, { useEffect, useState } from "react";

const LeadFormPopup = () => {
  const [open, setOpen] = useState(false);           // Lead form popup
  const [hasOpened, setHasOpened] = useState(false); // Prevent opening multiple times
  const [showPopup, setShowPopup] = useState(false); // Thank-you popup

  //  OPEN POPUP ON 20% PAGE SCROLL (ONLY ONCE)
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

  // FORM SUBMIT → OPEN EMAIL CLIENT + SHOW THANK-YOU POPUP
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailtoLink = `
      mailto:agent@privaconpi.com
      ?subject=${encodeURIComponent("Lead Form Submission")}
      &body=${encodeURIComponent(
        `Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${message}`
      )}
    `.replace(/\s+/g, "");

    window.location.href = mailtoLink;

    // Close form & show thank-you popup
    setOpen(false);            //  Form closes
    setShowPopup(true);        //  Thank-you popup opens

    form.reset();

    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  // Close when clicked outside popup
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
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows="2"
                  required
                  className="w-full border-b border-gray-300 bg-transparent py-2 outline-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#DBB189] text-white py-3 rounded-md font-semibold hover:bg-[#8e7054] transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/*  THANK YOU POPUP */}
      {showPopup && (
        <div className="pointer-events-auto fixed inset-0 flex items-center justify-center bg-black/60 z-50">
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
    </div>
  );
};

export default LeadFormPopup;
