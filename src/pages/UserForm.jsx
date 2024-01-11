import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button/Button.tsx";

const UserForm = ({ showTeam }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      lastname: "",
    },
    mode: "onChange",
  });

  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  // console.log("err :", Boolean(errors.name));
  // console.log(isValid);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" ">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col py-2">
          <label className="text-start ">Name</label>
          <input
            className={`w-[400px] h-10 text-black cursor-pointer px-4 py-3 mt-2 ring-1 ${
              errors.name ? "ring-fuchsia-500" : "ring-gray-300"
            } rounded-md `}
            label="name"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message: "MinLength 2 characters.",
              },
              maxLength: {
                value: 12,
                message: "MaxLength 12 characters.",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "This input is character only.",
              },
            })}
          />
        </div>

        {errors?.name && (
          <span className="text-red-500">{errors?.name.message}</span>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col py-2">
          <label className="text-start">Last Name</label>
          <input
            className="w-[400px] h-10 px-4 py-3 mt-2 text-black p-2 ring-1 ring-gray-300 rounded-md cursor-pointer"
            label="lastname"
            {...register("lastname", {
              required: "Last Name is required.",
              minLength: {
                value: 2,
                message: "MinLength 2 characters.",
              },
              maxLength: {
                value: 12,
                message: "MaxLength 12 characters.",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "This input is character only.",
              },
            })}
          />
        </div>

        {errors.lastname && (
          <span className="text-red-500">{errors?.lastname.message}</span>
        )}
      </div>
      <div className="mt-4">
        <Button
          type="submit"
          text="Send"
          variant="primary"
          size="base"
          onClick={isValid ? () => showTeam() : ""}
        />
      </div>

      {/*<button*/}
      {/*  className="h-8 ring-1 ring-gray-300 rounded-md bg-[#5d57c9] w-32 mt-8"*/}
      {/*  type="submit"*/}
      {/*  onClick={isValid ? () => showTeam() : ""}*/}
      {/*>*/}
      {/*  Send*/}
      {/*</button>*/}
    </form>
  );
};

export default UserForm;
