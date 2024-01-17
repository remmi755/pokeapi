import "./App.css";
import React from "react";
import SelectPokemons from "./components/SelectPokemons.tsx";
import Header from "./components/Header.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.tsx";

function App() {
  // const removeMember = (el) => {
  //   const result = team.filter((member) => member !== el);
  //   setTeam(result);
  // };

  // const isEmpty = Object.keys(pokemon);

  return (
    <div className="relative">
      <div className="flex absolute top-6 right-2 justify-end items-center mr-8 mb-2">
        <ThemeSwitcher />
      </div>
      <Header />
      <SelectPokemons />
    </div>
  );
}

export default App;
