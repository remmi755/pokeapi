import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserForm from "./pages/UserForm.jsx";
import Team from "./pages/Team.jsx";
import { useForm } from "react-hook-form";
import SelectPokemons from "./pages/SelectPokemons.jsx";
import Header from "./components/Header.jsx";

function App() {
  // const removeMember = (el) => {
  //   const result = team.filter((member) => member !== el);
  //   setTeam(result);
  // };

  // const isEmpty = Object.keys(pokemon);

  // const showTeam = () => {
  //   if (isValid && team.length === fullTeam) {
  //     setIsShowTeam(true);
  //   }
  // };

  return (
    <>
      <Header />
      <SelectPokemons />
    </>
  );
}

export default App;
