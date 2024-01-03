import React from "react";

const Search = ({ text, setText, fullTeam, team, setModalIsOpen }) => {
  return (
    <form className=" ">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="flex justify-center">
        <div className="relative flex items-center justify-center ps-3 pointer-events-none">
          <svg
            className="absolute w-4 h-4 text-gray-500 inset-y-3.5 start-7"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block w-[400px] h-10 px-4 py-3 ps-10 text-sm text-gray-900 border border-teal-300 rounded-lg bg-gray-50"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        type="button"
        className={`w-32 h-8 rounded-md mt-4 ${
          team?.length === fullTeam ? "bg-green-500" : "bg-[#5d57c9]"
        } focus:border-sky-500 shadow-sm`}
        // onClick={() => setIsShowTeam(!isShowTeam)}
        onClick={team?.length === fullTeam ? () => setModalIsOpen(true) : ""}
      >
        {team?.length === fullTeam
          ? `Show Team (${team?.length})`
          : `Selected  (${team?.length})`}
      </button>
    </form>
  );
};

export default Search;
