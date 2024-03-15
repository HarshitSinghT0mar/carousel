import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { articles } from "../../data/news";

const AutomaticCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndicator, setActiveIndicator] = useState(0);
  const [visibleArticles, setVisibleArticles] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (startIndex + 1) % Math.ceil(articles.length / 3);
      setStartIndex(nextIndex);
      setActiveIndicator(nextIndex);
    }, 3000); 

    return () => clearTimeout(timer);
  }, [startIndex]);

  useEffect(() => {
    const endIndex = (startIndex * 3 + 3) % articles.length;
    const visibleArticlesSubset = [];

    if (articles.length <= 3) {
      visibleArticlesSubset.push(...articles);
    } else if (endIndex >= startIndex * 3) {
      visibleArticlesSubset.push(...articles.slice(startIndex * 3, endIndex));
    } else {
      visibleArticlesSubset.push(...articles.slice(startIndex * 3));
      visibleArticlesSubset.push(...articles.slice(0, endIndex));
    }

    setVisibleArticles(visibleArticlesSubset);
  }, [startIndex, articles]);

  const handleIndicatorClick = (index) => {
    setActiveIndicator(index);
    setStartIndex(index);
  };

  return (
    <div className="container relative mx-auto p-4 bg-gray-300">
      <div className="max-w-full flex transition-transform ease-in-out duration-300 justify-around overflow-x-auto gap-8 overflow-hidden carousel-slide">
        {visibleArticles.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(articles.length / 3) }, (_, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-1 rounded-full bg-gray-300 hover:bg-gray-500 focus:outline-none ${
              activeIndicator === index ? "bg-themeColor" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutomaticCarousel;
