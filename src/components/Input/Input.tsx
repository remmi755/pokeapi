import * as React from "react";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import cn from "classnames";
import { useForm } from "react-hook-form";
import { ReactNode } from "react";

export interface InputProps {
  name: string;
  label?: string;
  type: string;
  placeholder?: string;
  errorMsg?: string;
  id: string;
  iconStart: ReactNode;
  iconEnd?: ReactNode;
  value?: string;
  styling: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  id,
  value,
  styling,
  iconStart,
  disabled,
  iconEnd,
  onChange,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const styleInformation = cn(
    "w-max",
    errors[id] ? "text-red-500" : "text-gray-500"
  );

  const styleIconStart = cn(
    errors[id] ? "text-red-500" : "text-gray-700",
    "absolute w-4 h-4 top-11 inset-y-3.5 start-2 mt-0.5"
  );

  console.log("errorsInput :", errors);
  console.log("isValidInput :", isValid);

  function onSubmit(data) {
    console.log(data);
    return false;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[400px] h-[100px] relative flex items-center justify-cente">
        <div className="absolute w-4 h-4 text-gray-500 inset-y-3.5">
          <div className="flex items-center gap-1 w-[200px] text-black ">
            <h3 className="text-gray-500 font-bold">{label}</h3>
            <div className="text-gray-500">
              <InformationCircleIcon width={14} />
            </div>
          </div>
          <div className={styleIconStart}>{iconStart}</div>
          <div className="absolute w-4 h-4 top-11 left-96 -ml-3">{iconEnd}</div>
          <input
            type={type}
            id={id}
            value={value}
            placeholder={placeholder}
            className={`input input-styling-${
              errors[id] ? "validation" : styling
            }`}
            {...register(`${id}`, {
              required: "Value is required.",
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
          <p className={styleInformation}>
            {errors[id] ? errors[id].message : "Enter value"}
          </p>
        </div>
      </div>
    </form>
  );
};

export default Input;
