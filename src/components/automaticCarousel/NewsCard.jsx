import React from "react";

const NewsCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg w-60  shadow-md p-4 mb-4">
      <img
        className="w-full h-48 object-cover object-center"
        src={image}
        alt="NewsCard"
      />
      <div className="px-4 py-2">
        <div className="font-bold text-xl mb-2 line-clamp-2">{title}</div>
        <p className="text-gray-700 text-base line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
