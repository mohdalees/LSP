import React from "react";
import cards from "../data/card.json";

export default function About() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 ">
      {cards.map((card) => (
        <div
          key={card.id}
          className="w-80 bg-white rounded-2xl shadow-lg 
                     hover:shadow-2xl transition duration-300
                     flex flex-col items-center p-6 text-center"
        >
          {/* Circular Image */}
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-700 mb-4 hover:border-teal-800">
            <img
              src={card.image}
              alt={card.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {card.name}
          </h2>

          <p className="text-gray-600 text-sm">
            {card.discription}
          </p>
        </div>
      ))}
    </div>
  );
}
