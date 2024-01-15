import React, { useEffect, useState } from "react";
import ListPokemons from "./ListPokemons.jsx";
import PokemonCard from "./PokemonCard.jsx";
import Search from "./Search.tsx";
import axios from "axios";
import Team from "./Team.jsx";
import Modal from "./Modal.jsx";
import UserForm from "./UserForm.jsx";

const SelectPokemons = () => {
  const [text, setText] = useState("");
  const [pokemons, setPokemons] = useState("");
  const [pokemon, setPokemon] = useState("");
  const [team, setTeam] = useState([]);
  const [isShowTeam, setIsShowTeam] = useState(false);
  const [modalFormIsOpen, setModalFormIsOpen] = useState(false);
  const [modalTeamIsOpen, setModalTeamIsOpen] = useState(false);
  const fullTeam = 4;

  useEffect(() => {
    const fetchPokemons = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=50`)
        .then((res) => setPokemons(res.data.results));
    };
    fetchPokemons();
  }, []);

  const fetchSinglePokemon = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    setPokemon(res.data);
    return res.data;
  };

  const showPokemon = async (pokemonName) => {
    if (team?.length === fullTeam) {
      return;
    }
    return await fetchSinglePokemon(pokemonName);
  };

  const addToTeam = async (pokemon) => {
    const isInTeam = team?.find((member) => member.name === pokemon.name);

    if (team?.length < fullTeam && !isInTeam) {
      const newTeam = [...team, pokemon];
      setTeam(newTeam);
    }
  };

  const showTeam = () => {
    setModalFormIsOpen(false);
    setModalTeamIsOpen(true);
  };

  return (
    <div className="h-[100vh]">
      <div className="px-10">
        <Search
          text={text}
          setText={setText}
          setIsShowTeam={setIsShowTeam}
          isShowTeam={isShowTeam}
          team={team}
          setModalFormIsOpen={setModalFormIsOpen}
          fullTeam={fullTeam}
        />
        <section className="flex mt-4">
          <ListPokemons
            pokemons={pokemons}
            text={text}
            showPokemon={showPokemon}
          />
          <div className="flex flex-1 ring-1 ring-teal-200 justify-center w-96 h-[485px] rounded-r-md bg-[#182237]">
            {pokemon ? (
              <PokemonCard
                pokemon={pokemon}
                addToTeam={addToTeam}
                team={team}
                fullTeam={fullTeam}
              />
            ) : (
              <h1 className="text-fuchsia-500 text-5xl justify-center font-bold flex items-center h-[500px] ">
                {" "}
                Your selected Pokemon
              </h1>
            )}
          </div>
        </section>
      </div>
      <div className="">
        <Modal
          isOpen={modalFormIsOpen}
          onClose={() => setModalFormIsOpen(false)}
          width={"w-[464px]"}
          title={"Enter your Name and Last Name"}
        >
          <UserForm showTeam={showTeam} />
        </Modal>
      </div>

      <Modal
        isOpen={modalTeamIsOpen}
        onClose={() => setModalTeamIsOpen(false)}
        title={"This is your Team"}
        width={"w-[800px]"}
      >
        <Team team={team} setTeam={setTeam} />
      </Modal>
    </div>
  );
};

export default SelectPokemons;
