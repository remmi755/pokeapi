import React, { useState } from "react";
import PokemonCard from "../components/PokemonCard.jsx";
import SelectedPokemonCard from "../components/SelectedPokemonCard.jsx";

const Team = ({ team, setTeam }) => {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const removePokemon = (el) => {
    const result = team.filter((pokemon) => pokemon !== el);
    setTeam(result);
  };
  // const team = JSON.parse(localStorage.getItem("team"));
  console.log("team :", team);
  console.log(selectedPokemon);
  return (
    <div className="w-full ">
      {/*<h1 className=" text-4xl font-bold pb-6 text-start">This is your Team</h1>*/}
      <ul className="flex flex-col justify-between gap-3 mt-8 my-4">
        {team &&
          team.map((pokemon) => (
            <li key={pokemon.id} onClick={() => setSelectedPokemon(pokemon)}>
              <SelectedPokemonCard
                pokemon={pokemon}
                team={team}
                width={100}
                height={100}
                removePokemon={removePokemon}
              />
            </li>
          ))}
      </ul>
      <div className="text-white flex gap-3 pt-4 border-t-2">
        {selectedPokemon ? (
          <div className="flex-auto w-100">
            <SelectedPokemonCard
              pokemon={selectedPokemon}
              width={50}
              height={50}
              team={team}
              removePokemon={removePokemon}
            />
          </div>
        ) : (
          ""
        )}

        <button className="flex-initial w-32 h-8 bg-[#5d57c9]">Cancel</button>
        <button className="flex-initial w-32 h-8 bg-[#5d57c9]">Save</button>
      </div>
    </div>
  );
};

export default Team;