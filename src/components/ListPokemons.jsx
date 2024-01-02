import React from "react";

const ListPokemons = ({ pokemons, text, showPokemon }) => {
  const filteredData =
    pokemons &&
    pokemons.map((el) => {
      if (text === "") {
        return el.name;
      } else if (el.name.includes(text.toLowerCase())) {
        return el.name;
      }
    });

  console.log(filteredData);

  return (
    <ul className="flex flex-1 flex-col ring-1 ring-teal-200 max-h-[500px] overflow-y-auto bg-[#182237] rounded-md cursor-pointer">
      {filteredData &&
        filteredData.map((el) => (
          <li
            className="px-2 text-teal-700 text-2xl font-bold w-45 hover:bg-blue-200"
            key={el}
            onClick={() => showPokemon(el)}
          >
            {el}
          </li>
        ))}
    </ul>
  );
};

export default ListPokemons;