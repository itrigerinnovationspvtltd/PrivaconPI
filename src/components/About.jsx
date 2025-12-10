import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full pt-24 pb-20 px-6 bg-white">

      {/* TOP HEADING */}
      <h1 className="playfair-display text-4xl font-bold text-center text-[#1E2D40] mb-8 sm:mb-16 
                     md:text-5xl sm:text-4xl">
        About Us
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="/about1.webp"
            alt="Private Investigation"
            className="rounded-2xl shadow-xl w-full sm:w-[70%]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="playfair-display text-2xl font-bold text-[#1E2D40] leading-tight 
                         md:text-4xl sm:text-3xl">
            Female-Owned <br /> Private Investigation <br /> Agency
          </h2>

          <p className="mt-6  text-sm text-gray-600 leading-relaxed sm:text-lg">
            Privacon Investigations is a female-owned, full-service, licensed
            private investigator Buffalo NY agency. Our office is located just
            30 mins south of Downtown Buffalo NY, between Hamburg and Jamestown,
            but we are licensed to provide service in the entire State of New York.
          </p>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed sm:text-lg">
            Our primary service areas are Buffalo, Grand Island, Clarence,
            Hamburg, Niagara Falls, East Aurora, Rochester, and Syracuse.
          </p>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">

        {/* TEXT FIRST ON MOBILE */}
        <div>
          <h3 className=" playfair-display text-2xl font-bold text-[#1E2D40] leading-tight 
                         md:text-4xl sm:text-3xl">
            Founder Sarah Martinez
          </h3>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed sm:text-lg">
            Founder Sarah Martinez has 10 years of investigative experience,
            hundreds of cases ranging from homicides to missing persons, and
            multiple high-profile undercover operations under her belt.
          </p>

          <p className="mt-4 text-sm text-gray-600 leading-relaxed sm:text-lg">
            After graduating with a degree in Criminal Justice, she joined the 
            Sheriff’s Department where she served as Deputy Sheriff. She assisted 
            in the investigation of homicides, robberies, sexual assaults, kidnaps, 
            and missing persons, among others. She also conducted major surveillance 
            operations throughout some of the toughest neighborhoods in the county.
          </p>

          
          <p className="mt-4 text-sm text-gray-600 leading-relaxed sm:text-lg">
            Sarah joined the private sector in 2014 and became an Investigative 
            Reporter and Journalist, before independently establishing Privacon 
            Investigations LLC as a trusted licensed private investigator Buffalo NY.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src="/about2.webp"
            alt="Investigation Work"
            className="rounded-2xl md:ml-10 shadow-xl w-full sm:w-[70%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
