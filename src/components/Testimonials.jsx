import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Andrew Sippel",
    rating: 5,
    avatar: "/users/user5.png",
    text: `It says alot about the Character of a company when they will Say one thing but Do another ... like telling someone they're interested in a job, but never sending a quote ... rather than having the Decency to just turn the job down.`,
  },
  {
    name: "Iris Cruz",
    rating: 5,
    avatar: "/users/user1.png",
    text: `Sarah was very professional and very easy to work with. From the initial contact she put me at ease and gave me very calming and encouraging words. I did not feel pressured but instead felt a genuine concern and desire to help with my situation.`,
  },
  {
    name: "Jimmy Reynolds",
    rating: 5,
    avatar: "/users/user2.png",
    text: `I truly enjoyed talking with Sarah. She was very helpful and understanding with my problem and provided me with great insight about how I should proceed. Thank you so very much for your help.`,
  },
  {
    name: "Will P",
    rating: 5,
    avatar: "/users/user3.png",
    text: `Great services and solid advice. Sarah was attentive to the needs of my case. I felt comfortable and confident discussing the details.`,
  },
  {
    name: "Ken Nowak",
    rating: 5,
    avatar: "/users/user4.png",
    text: `Sarah was great to work with during the entire process. Very patient, organized and addressed all concerns. Highly recommended!`,
  },
  {
    name: "James Damon",
    rating: 5,
    avatar: "/users/user6.png",
    text: `I reached out today needing help with my situation and I was more than impressed by the treatment I received. Very professional.`,
  },
  {
    name: "Mahi Malik",
    rating: 5,
    avatar: "/users/user7.png",
    text: `She found rare art pieces for me within hours — amazing experience. Highly recommended!`,
  },
  {
    name: "Vannessa Sanchez",
    rating: 5,
    avatar: "/users/user8.png",
    text: `Such a pleasure to work with. Very personable and comforting. Highly recommend!`,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Determine cards per screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(4);
      else if (window.innerWidth >= 640) setCardsPerView(2);
      else setCardsPerView(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Functions must be declared BEFORE useEffect
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 > testimonials.length - cardsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? testimonials.length - cardsPerView : prev - 1
    );
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, cardsPerView]);

  return (
    <section className="w-full py-16 bg-white">
      {/* Title */}
      <h2 className="playfair-display text-[#1E2D40] text-center text-3xl md:text-5xl font-bold mb-12">
        See what our clients say
      </h2>

      {/* Slider Container */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border shadow rounded-full p-2 z-10 hover:bg-gray-100 transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Cards Wrapper */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`shrink-0 w-full sm:w-1/2 lg:w-1/4 p-3`}
              >
                <div className="bg-white shadow-md border rounded-xl p-6 hover:shadow-xl transition flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6 grow">
                    “{t.text}”
                  </p>

                  {/* User Info */}
                  <div className="mt-auto flex items-center gap-3 pt-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 leading-tight">
                        {t.name}
                      </h4>
                      <img
                        src="/checkmark.jpg"
                        alt="verified"
                        className="w-5 mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border shadow rounded-full p-2 z-10 hover:bg-gray-100 transition"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
