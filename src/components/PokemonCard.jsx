import React from "react";

const PokemonCard = ({ pokemon, addToTeam, team, fullTeam }) => {
  const isEmpty = Object.keys(pokemon);

  console.log("pokemon :", pokemon);
  console.log("team :", team);

  return (
    <div className="p-2 ring-2 w-full ring-teal-300 rounded-md  bg-blue-200">
      {isEmpty.length ? (
        <img
          className="m-auto"
          src={pokemon.sprites["front_default"]}
          alt=""
          width={350}
          height={350}
        />
      ) : (
        ""
      )}

      <h1 className="text-5xl text-teal-700 font-bold">{pokemon.name}</h1>
      <button
        className={`w-32 h-8 ring-1 ring-gray-300 mt-6 rounded-md ${
          team?.length === fullTeam ? "bg-green-500" : "bg-[#5d57c9]"
        }`}
        onClick={() => addToTeam(pokemon)}
      >
        {team?.length === fullTeam ? "Full Team" : " Add to Team"}
      </button>
    </div>
  );
};

export default PokemonCard;
