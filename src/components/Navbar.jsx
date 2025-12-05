import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full py-4 shadow-sm fixed top-0 left-0 z-50 transition-all duration-300 
      ${isScrolled ? "bg-[#1E2D40]" : "bg-[#1E2D40]/30"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <img src="/logo.webp" alt="logo" className="w-48 cursor-pointer" />

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10 text-white font-medium">
            <li className="hover:text-[#DBB189] cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-[#DBB189] cursor-pointer">
              <a href="#about">About</a>
            </li>
             <li className="hover:text-[#DBB189] cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-[#DBB189] cursor-pointer">
              <a href="#faq">FAQ</a>
            </li>
          </ul>

          <a
            href="tel:7165440230"
            className="px-5 py-2 bg-[#DBB189] text-white rounded-lg font-semibold hover:bg-[#c49868] transition"
          >
            (716) 544-0230
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#1E2D40] text-white px-6 pb-6 space-y-4 pt-2">
          <ul className="pt-4 space-y-4 font-medium text-lg">
            <li className="hover:text-[#DBB189] cursor-pointer">
              <a onClick={() => setOpen(false)} href="#home">Home</a>
            </li>
            <li className="hover:text-[#DBB189] cursor-pointer">
              <a onClick={() => setOpen(false)} href="#about">About</a>
            </li>
            <li className="hover:text-[#DBB189] cursor-pointer">
              <a onClick={() => setOpen(false)} href="#services">Services</a>
            </li>
            <li onClick={() => setOpen(false)} className="hover:text-[#DBB189] cursor-pointer">
              <a href="#faq">FAQ</a>
            </li>
          </ul>

          <a
            href="tel:7165440230"
            className="block w-full text-center px-5 py-3 bg-[#DBB189] text-white rounded-lg font-semibold mt-4"
          >
            (716) 544-0230
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
