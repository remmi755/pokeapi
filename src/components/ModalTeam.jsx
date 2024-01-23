import * as React from "react";

const ModalTeam = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
      onClick={onClose}
    ></div>
  );
};

export default ModalTeam;
