import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button/Button.tsx";
import Input from "./Input/Input.tsx";
import IconStar from "./Icons/IconStar.jsx";

const UserForm = ({ showTeam }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6">
        <Input
          errors={errors}
          register={register}
          type="text"
          name="name"
          label="Name"
          iconStart={<IconStar />}
          styling="default"
          placeholder="Enter your Name "
        />

        <Input
          errors={errors}
          register={register}
          name="lastname"
          type="text"
          label="Last Name"
          iconStart={<IconStar />}
          styling="default"
          placeholder="Enter your Last Name "
        />
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
    </form>
  );
};

export default UserForm;
