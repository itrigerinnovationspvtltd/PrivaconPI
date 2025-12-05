import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E2D40] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* WHO WE ARE */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-300 leading-relaxed">
            Privacon Investigations is a full-service Western New York Private
            Investigation agency, based in Cattaraugus and Erie Counties.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            Licensed. Bonded. Insured. New York State Department of State License
            #11000215646
          </p>
        </div>

        {/* WHAT WE DO */}
        <div>
          <h3 className="text-xl font-semibold mb-4">What We Do</h3>
          <p className="text-gray-300 leading-relaxed">
            We offer Personal/Family/Domestic, Business and Legal Investigations
            across the state of New York at an affordable cost.
          </p>

          <ul className="mt-4 space-y-2">
            <li className="text-[#DBB189]  cursor-pointer">
              Infidelity Investigations
            </li>
            <li className="text-[#DBB189]  cursor-pointer">
              Background Checks
            </li>
            <li className="text-[#DBB189]  cursor-pointer">
              Cyber Investigations
            </li>
            <li className="text-[#DBB189]  cursor-pointer">
              See more
            </li>
          </ul>
        </div>

        {/* GET IN TOUCH */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>

          <p className="text-gray-300">92 W Main St.<br />Gowanda, NY 14070</p>

          <p className="mt-3 text-gray-300">
            Email:
            <a
              href="mailto:agent@privaconpi.com"
              className="text-[#DBB189] ml-1"
            >
              agent@privaconpi.com
            </a>
          </p>

          <p className="mt-3 text-gray-300">
            Phone:
            <a
              href="tel:17165440230"
              className="text-[#DBB189]  ml-1"
            >
              +1 (716) 544-0230
            </a>
          </p>

          <p className="mt-3">
            <a href="#" className="text-[#DBB189] ">
              Privacy Policy
            </a>
          </p>

          <p className="mt-2">
            <a href="#" className="text-[#DBB189] ">
              Blog
            </a>
          </p>
        </div>

        {/* LEGAL NOTICE */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legal Notice</h3>
          <p className="text-gray-300 leading-relaxed">
            The information contained in this website is for general information
            purposes only. We are not attorneys and the information we provide
            should never be taken as legal advice. Although we work diligently to
            keep our information up to date and correct, the information provided
            by Privacon Investigations is as-is.
          </p>
        </div>
      </div>

    <div className="w-full border-t border-gray-600 mt-8"></div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-8 text-center text-white text-sm sm:text-base">
        © 2025 Privacon Investigations. All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;
