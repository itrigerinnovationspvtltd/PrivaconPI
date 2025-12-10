import React from "react";
import {
  HeartHandshake,
  Camera,
  ShieldQuestion,
  UserSearch,
  BriefcaseBusiness,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Infidelity Investigations",
      icon: HeartHandshake,
      desc: `Suspecting a partner is painful — guessing makes it worse. We provide discreet surveillance, digital evidence, and factual reports so you can make informed decisions.`,
      highlight: "👉 Get clarity. Get proof.",
    },
    {
      title: "Surveillance Services",
      icon: Camera,
      desc: `Our team uses professional surveillance techniques and advanced equipment to document movements, behavior, and interactions — without detection.`,
      highlight:
        "👉 Ideal for: spouse monitoring, fraud cases, employee misconduct, and more.",
    },
    {
      title: "Cyber & Digital Investigations",
      icon: ShieldQuestion,
      desc: `From online scams to cyber harassment and social media tracking — we trace digital footprints and uncover hidden information.`,
      highlight:
        "👉 We specialize in: online identity verification, cyberstalking, catfish investigations, and digital background checks.",
    },
    {
      title: "Background & People Search",
      icon: UserSearch,
      desc: `Need to verify someone’s identity, history, or intentions? We collect verified data, not automated database guesses.`,
      highlight:
        "👉 Perfect for dating safety, hiring decisions, tenants, or reconnecting with lost contacts.",
    },
    {
      title: "Corporate & Fraud Investigations",
      icon: BriefcaseBusiness,
      desc: `Protect your business with internal investigations, asset verification, employee surveillance, and fraud detection.`,
      highlight:
        "👉 Minimize risks before they turn into lawsuits or financial loss.",
    },
  ];

  return (
    <div id="services" className="w-full bg-[#F5F2EB] pt-10 pb-2">

      {/* HERO SECTION */}
      <div
        className="relative w-full h-64 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/bgservices.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30 flex items-center px-6">
          <h1 className="playfair-display text-white text-4xl md:text-5xl font-bold max-w-4xl mx-auto">
            Our Investigation Services
          </h1>
        </div>
      </div>

      {/* SERVICES CARDS */}
      <div className="w-full bg-[#F4F1EA] py-16">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((srv, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#DBB189] rounded-xl shadow-md p-6 hover:shadow-xl hover:bg-[#F5E9D8] transition transform opacity-0 animate-slideUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <srv.icon className="h-12 w-12 text-[#1E2D40] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {srv.title}
                </h3>

                <p className="text-gray-800 leading-relaxed">
                  {srv.desc}
                </p>

                <p className="text-gray-900 font-medium mt-3">
                  {srv.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Services;
