import React, { useState } from "react";
import SelectedPokemonCard from "./SelectedPokemonCard.jsx";
import Button from "./Button/Button.tsx";

const Team = ({ team, setTeam }) => {
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const removePokemon = (el) => {
    const result = team.filter((pokemon) => pokemon !== el);
    setTeam(result);
  };

  return (
    <div className="w-full ">
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

      <div className="bg-white rounded-md p-4 flex gap-3 border-t-2 justify-end">
        {selectedPokemon ? (
          <>
            <div className="flex-auto w-100">
              <SelectedPokemonCard
                pokemon={selectedPokemon}
                width={50}
                height={50}
                team={team}
                removePokemon={removePokemon}
              />
            </div>
          </>
        ) : (
          ""
        )}
        <div className="flex justify-end gap-2">
          <Button type="reset" text="Cancel" variant="text" size="xl" />
          <Button
            type="button"
            text="Save"
            variant="primary"
            size="xl"
            onClick={() => setSelectedPokemon("")}
          />
        </div>
      </div>
    </div>
  );
};

export default Team;