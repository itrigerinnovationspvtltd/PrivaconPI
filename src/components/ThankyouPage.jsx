import React from "react";
import { useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h1 className=" playfair-display text-3xl font-bold text-gray-800 mb-3">Thank You! 🎉</h1>
        <p className="text-gray-600 mb-6">
          We've received your message and our team will get back to you shortly.
        </p>
        <button
          onClick={() => navigate("/")} // redirect to homepage
          className="w-full bg-[#DBB189] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#8e7054] transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
