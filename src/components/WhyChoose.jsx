import React from "react";
import {
  BadgeCheck,
  FileCheck,
  Search,
  MapPin,
  Shield,
} from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      title: "Licensed & Experienced Investigators",
      icon: BadgeCheck,
      desc: "Professional investigators with proven expertise across personal, legal, and corporate cases.",
    },
    {
      title: "Evidence-Based Reports",
      icon: Search,
      desc: "Every case is backed by verified documentation, surveillance, and factual reporting.",
    },
    {
      title: "Serving New York & Surrounding Areas",
      icon: MapPin,
      desc: "Reliable investigative coverage across NYC, Long Island, and nearby regions.",
    },
    {
      title: "100% Confidential Case Handling",
      icon: Shield,
      desc: "Your privacy is protected at every step — discreet, secure, and fully confidential.",
    },
    {
      title: "Court-Ready Documentation",
      icon: FileCheck,
      desc: "Detailed evidence, organized records, and professional documentation suitable for legal proceedings.",
    },
  ];

  return (
    <div className="w-full bg-[#F5F2EB] pt-16 pb-20 px-6 text-[#1E2D40]">

      {/* Section Title */}
      <div className="max-w-6xl mx-auto mb-12 opacity-0 animate-fadeInSlow">
        <h2 className="playfair-display text-3xl md:text-5xl font-bold text-center">
          Why Choose Privacon?
        </h2>
        <p className="text-center text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
          When you’re facing uncertainty, the last thing you need is guesswork.
          At <span className="font-semibold">Privacon Private Investigations</span>, we use licensed expertise, advanced technology, and discreet investigative strategies to deliver verified answers — not assumptions.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#DBB189] hover:bg-[#D7A975] shadow-lg rounded-xl p-6 border hover:shadow-2xl transition transform opacity-0 animate-slideUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex flex-col items-center text-center">
              <feature.icon className="h-12 w-12 text-[#1E2D40] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-800 leading-relaxed">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
