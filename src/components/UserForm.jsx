import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button/Button.tsx";
import Input from "./Input/Input.tsx";
import IconStar from "./Icons/IconStar.jsx";

const UserForm = ({ showTeam }) => {
  const {
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isValid },
  // } = useForm({
  //   defaultValues: {
  //     name: "",
  //     lastname: "",
  //   },
  //   mode: "onChange",
  // });

  // function onSubmit(data) {
  //   console.log(JSON.stringify(data, null, 4));
  //   return false;
  // }

  // console.log("errForm :", Boolean(errors.name));
  console.log("errForm :", errors.name);
  // console.log("isValidUserForm :", isValid);
  return (
    <div
    // onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-6">
        <Input
          type="text"
          id="name"
          label="Name"
          iconStart={<IconStar />}
          styling="default"
          placeholder="Enter your Name "
        />

        <Input
          type="text"
          id="lastName"
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
    </div>
  );
};

export default UserForm;
