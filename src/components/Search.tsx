import * as React from "react";
import Button from "../components/Button/Button";
import Input from "./Input/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid/index.js";

const Search = ({ text, setText, fullTeam, team, setModalFormIsOpen }) => {
  return (
    <div>
      <div
        className="flex justify-center"
        onChange={(e) => setText(e.target.value)}
      >
        <Input
          id="search"
          type="search"
          label="Label"
          value={text}
          styling="default"
          placeholder="Search"
          iconStart={<MagnifyingGlassIcon />}
          // onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/*<label*/}
      {/*  htmlFor="search"*/}
      {/*  className="mb-2 text-sm font-medium text-gray-900 sr-only"*/}
      {/*>*/}
      {/*  Search*/}
      {/*</label>*/}
      {/*<div className="flex justify-center">*/}
      {/*  <div className="relative flex items-center justify-center ps-3 pointer-events-none">*/}
      {/*    <svg*/}
      {/*      className="absolute w-4 h-4 text-gray-500 inset-y-3.5 start-7"*/}
      {/*      aria-hidden="true"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*      fill="none"*/}
      {/*      viewBox="0 0 20 20"*/}
      {/*    >*/}
      {/*      <path*/}
      {/*        stroke="currentColor"*/}
      {/*        strokeLinecap="round"*/}
      {/*        strokeLinejoin="round"*/}
      {/*        strokeWidth="2"*/}
      {/*        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"*/}
      {/*      />*/}
      {/*    </svg>*/}
      {/*  </div>*/}
      {/*  <input*/}
      {/*    // type="search"*/}
      {/*    id="search"*/}
      {/*    className="block w-[400px] h-10 px-4 py-3 ps-10 text-sm text-gray-900 border border-teal-300 rounded-lg bg-gray-50"*/}
      {/*    placeholder="Search"*/}
      {/*    value={text}*/}
      {/*    onChange={(e) => setText(e.target.value)}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="mt-6">
        <Button
          type="button"
          size="base"
          text={
            team.length !== fullTeam
              ? `Selected (${team?.length})`
              : "Show Team"
          }
          variant={team.length === fullTeam ? "secondary" : "primary"}
          onClick={
            team?.length === fullTeam ? () => setModalFormIsOpen(true) : null
          }
        />
      </div>
    </div>
  );
};

export default Search;
