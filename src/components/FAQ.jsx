import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Privacon Investigations the right agency for me?",
    a: "Founder and lead investigator Sarah Martinez has 10 years of investigative experience and has solved hundreds of cases throughout her career as a Deputy Sheriff, Law Enforcement Officer, and Investigative Reporter and Journalist. She has assisted in the investigation of homicides, robberies, sexual assaults, kidnaps, and missing persons, among others. She conducted major surveillance operations throughout her county and has gone undercover for the D.E. Task Force."
  },
  {
    q: "Why hire a private investigator versus the police?",
    a: "The police are usually overloaded with cases that need immediate attention and have limited resources that are already spread thin. The police themselves sometimes hire private investigators to help with cases."
  },
  {
    q: "How do I know you'll prioritize my case?",
    a: "Privacon assigns a single investigator to each case. The assigned investigator will be solely dedicated to your case and will serve as your primary contact throughout the investigation."
  },
  {
    q: "What are your business hours?",
    a: "Our business hours are 7:00 AM – 6:00 PM from Monday to Saturday and 9:00 AM to 3:00 PM on Sundays."
  },
  {
    q: "Do you charge for consultations?",
    a: "No, we don’t charge for consultations, so don’t hesitate to reach out. Fill up the form at the top of our Contact Page to request a free consultation or contact us directly by emailing agent@privaconpi.com or calling +1 716 544 0230."
  },
  {
    q: "How much does it cost to hire a private investigator?",
    a: "There are too many variables that can affect the total cost of an investigation. However, the average hourly rate for Private Investigators is $150. For an accurate estimate, request a free consultation by filling up the form on our Contact Page"
  },
  {
    q: "What do I receive in exchange for your fee?",
    a: "Each case is assigned a dedicated investigator. Once the investigation is concluded, we’ll prepare a court-ready investigative report that includes video and photographic evidence and detailed descriptions of our findings. We are prepared to testify in court if needed."
  }
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div id="faq" className="w-full bg-[#F5F2EB] pb-10 pt-20 px-4 md:px-6">
      
      {/* HEADING */}
      <h1 className="playfair-display text-4xl md:text-5xl font-bold text-center text-[#1E2D40] mb-12">
        Frequently Asked Questions
      </h1>

      {/* FAQ BOX */}
      <div className="max-w-7xl mx-auto bg-white p-4 md:p-8 rounded-md shadow-sm">
        {faqs.map((item, index) => {
          const isActive = active === index;

          return (
            <div key={index} className="border-b last:border-none">
              
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className={`w-full py-5 font-bold flex justify-between items-center text-left text-[17px] md:text-xl  transition-colors
                ${isActive ? "text-[#D7A975]" : "text-[#1E2D40]"}`}
              >
                {item.q}
                {isActive ? (
                  <Minus size={22} className="text-[#DBB189]" />
                ) : (
                  <Plus size={22} className="text-[#1E2D40]" />
                )}
              </button>

              {/* ANSWER */}
              <div
                className={`transition-all overflow-hidden ${
                  isActive ? "max-h-[300px] pb-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-700 text-[15px] md:text-lg leading-relaxed px-1">
                  {item.a}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
