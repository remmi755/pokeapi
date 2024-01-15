import React from "react";

const ShowTeamButton = ({ team, isShowTeam }) => {
  return (
    <button
      type="button"
      className="p-2 ring-1 ring-gray-300 rounded-md mt-4 bg-[#5d57c9]"
      onClick={() => setIsShowTeam(!isShowTeam)}
    >
      Show Team ({team.length})
    </button>
  );
};

export default ShowTeamButton;
