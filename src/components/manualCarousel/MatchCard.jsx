import React from "react";
// Import the JSON data

export const MatchCard = ({ match }) => {
  return (
    <div className="bg-white rounded-lg min-w-48  shadow-md p-4 mb-4">
      <h2 className="text-xl font-semibold text-center mb-2">{match.match}</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-semibold">{match.team1}</p>
          <p className="text-gray-600"> {match.team1Score}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold ">{match.team2}</p>
          <p className="text-gray-600">{match.team2Score}</p>
        </div>
      </div>
    </div>
  );
};
