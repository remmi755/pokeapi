import "./App.css";
import React from "react";
import SelectPokemons from "./pages/SelectPokemons.jsx";
import Header from "./components/Header.jsx";

function App() {
  // const removeMember = (el) => {
  //   const result = team.filter((member) => member !== el);
  //   setTeam(result);
  // };

  // const isEmpty = Object.keys(pokemon);

  return (
    <>
      <Header />
      <SelectPokemons />
    </>
  );
}

export default App;
