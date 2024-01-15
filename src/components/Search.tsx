import * as React from "react";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid/index.js";
import { useForm } from "react-hook-form";

const Search = ({ text, setText, fullTeam, team, setModalFormIsOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="flex justify-center"
        onChange={(e) => setText(e.target.value)}
      >
        <Input
          errors={errors}
          type="search"
          register={register}
          name="search"
          label="Label"
          value={text}
          styling="default"
          placeholder="Search"
          iconStart={<MagnifyingGlassIcon />}
        />
      </div>

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
    </form>
  );
};

export default Search;
