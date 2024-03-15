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
    <div className="container relative mx-auto px-4 border-solid border-2 border-red-400">
      <h1 className="text-2xl font-bold text-center mt-8">Cricket Matches</h1>
      <div className="max-w-full flex transition-transform ease-in-out duration-300 justify-around overflow-x-auto gap-8 overflow-hidden">
        {visibleMatches?.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 px-2 py-1 rounded"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 px-2 py-1 rounded"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default ManualCarousel;
