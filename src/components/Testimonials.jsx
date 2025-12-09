import React, { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Andrew Sippel",
    rating: 5,
    avatar: "/users/user5.png",
    text: `"It says alot about the Character of a company when they will Say one thing but Do another ... like telling someone they're interested in a job, but never sending a quote ... rather than having the Decency to just turn the job down.”`,
  },
  {
    name: "Iris Cruz",
    rating: 5,
    avatar: "/users/user1.png",
    text: `"Sarah was very professional and very easy to work with. From the initial contact she put me at ease and gave me very calming and encouraging words. I did not feel pressured but instead felt a genuine concern and desire to help with my situation."`,
  },
  {
    name: "Jimmy Reynolds",
    rating: 5,
    avatar: "/users/user2.png",
    text: `“I truly enjoyed talking with Sarah. She was very helpful and understanding with my problem and provided me with great insight about how I should proceed. Thank you so very much for your help.”`,
  },
  {
    name: "Will P",
    rating: 5,
    avatar: "/users/user3.png",
    text: `“Great services and solid advice. Sarah was attentive to the needs of my case. I felt comfortable and confident discussing the details.”`,
  },
  {
    name: "Ken Nowak",
    rating: 5,
    avatar: "/users/user4.png",
    text: `“Sarah was great to work with during the entire process. Very patient, organized and addressed all concerns. Highly recommended!”`,
  },
  {
    name: "James Damon",
    rating: 5,
    avatar: "/users/user6.png",
    text: `“I reached out today needing help with my situation and I was more than impressed by the treatment I received. Very professional.”`,
  },
  {
    name: "Mahi Malik",
    rating: 5,
    avatar: "/users/user7.png",
    text: `“She found rare art pieces for me within hours — amazing experience. Highly recommended!”`,
  },
  {
    name: "Vannessa Sanchez",
    rating: 5,
    avatar: "/users/user8.png",
    text: `“Such a pleasure to work with. Very personable and comforting. Highly recommend!”`,
  },
];

const Testimonials = () => {
  const [position, setPosition] = useState(0);

  const SCROLL_AMOUNT = 375;

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setPosition((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Move left and right manually
  const goLeft = () => setPosition((p) => p - 1);
  const goRight = () => setPosition((p) => p + 1);

  return (
    <section className="w-full py-16 bg-white relative">
      <h2 className="playfair-display text-[#1E2D40] text-center text-3xl md:text-5xl font-bold mb-12">
        See what our clients say
      </h2>

      <div className="max-w-7xl mx-auto relative">
        {/* Arrows */}
        <button
          onClick={goLeft}
          className="flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-20"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={goRight}
          className="flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-20"
        >
          <ChevronRight size={26} />
        </button>

        {/* Slider */}
        <div className="overflow-hidden px-4 md:px-6 lg:px-10">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${(position * SCROLL_AMOUNT) % (testimonials.length * SCROLL_AMOUNT)}px)`
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="
                  bg-white shadow-md border rounded-xl p-5 
                  hover:shadow-xl transition flex flex-col 
                  min-w-[350px] sm:min-w-[300px] lg:min-w-[260px]
                  h-[360px] sm:h-[320px]
                "
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6 overflow-hidden">
                  “{t.text}”
                </p>

                <div className="mt-auto flex items-center gap-3 pt-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800 leading-tight">
                      {t.name}
                    </h4>
                    <img src="/checkmark.jpg" alt="verified" className="w-4 mt-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
