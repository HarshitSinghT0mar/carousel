import React, { useEffect, useState } from "react";
import { matches } from "../../data/score";
import { MatchCard } from "./MatchCard";

const ManualCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleMatches, setVisibleMatches] = useState([]);

  const totalMatches = matches.length;

  useEffect(() => {
    const initialVisibleMatches = matches.slice(0, Math.min(3, totalMatches));
    setVisibleMatches(initialVisibleMatches);
  }, [totalMatches]);

  const nextSlide = () => {
    if (startIndex + 3 >= totalMatches) {
      setStartIndex(0);
    } else {
      setStartIndex((prevIndex) => prevIndex + 3);
    }
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 3 + totalMatches) % totalMatches);
  };

  useEffect(() => {
    const endIndex =
      startIndex + 3 > totalMatches ? totalMatches : startIndex + 3;
    const currentVisibleMatches = matches.slice(startIndex, endIndex);

    if (currentVisibleMatches.length < 3) {
      const remaining = 3 - currentVisibleMatches.length;
      const prevStartIndex =
        (startIndex - remaining + totalMatches) % totalMatches;
      setVisibleMatches([
        ...matches.slice(prevStartIndex, startIndex),
        ...currentVisibleMatches,
      ]);
    } else {
      setVisibleMatches(currentVisibleMatches);
    }
  }, [startIndex, totalMatches]);

  return (
    <div className="container relative mx-auto px-4 shadow-lg bg-gray-200 rounded-lg">
      <h1 className="text-2xl font-bold text-center mt-8 mb-4">IPL 2024</h1>
      <div className="max-w-full flex justify-around gap-8 overflow-hidden">
        {visibleMatches?.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-themeColor px-4 py-2 rounded-md text-white trxt-xl font-semibold focus:outline-none"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-themeColor px-4 py-2 rounded-md text-white text-xl font-semibold focus:outline-none"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ManualCarousel;
