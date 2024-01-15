import * as React from "react";
import { InformationCircleIcon } from "@heroicons/react/16/solid";
import cn from "classnames";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { ReactNode } from "react";

export interface InputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors?: string | FieldErrors;
  iconStart?: ReactNode;
  iconEnd?: ReactNode;
  value?: string;
  styling: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  register,
  value,
  styling,
  iconStart,
  errors,
  name,
  iconEnd,
}) => {
  const styleInformation = cn(
    "w-max",
    errors[name] ? "text-red-500" : "text-gray-500"
  );

  const styleIconStart = cn(
    "absolute w-4 h-4 top-11 inset-y-3.5 start-2 mt-0.5",
    errors[name] ? "text-red-500" : "text-gray-500"
  );

  console.log("errors :", errors);

  return (
    <div>
      <div className="w-[400px] h-[100px] relative flex items-center justify-cente">
        <div className="absolute w-4 h-4 text-gray-500 inset-y-3.5">
          <div className="flex items-center gap-1 w-[200px] text-black">
            <h3 className="text-gray-500 font-bold">{label}</h3>
            <div className="text-gray-500">
              <InformationCircleIcon width={14} />
            </div>
          </div>
          <div className={styleIconStart}>{iconStart}</div>
          <div className="absolute w-4 h-4 top-11 left-96 -ml-3">{iconEnd}</div>
          <input
            type={type}
            {...register(name, {
              required: "Value is required",
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
            name={name}
            value={value}
            placeholder={placeholder}
            className={`input input-styling-${
              errors[name] ? "validation" : styling
            }`}
          />
          <p className={styleInformation}>
            {errors[name] ? errors[name].message : "Enter value"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Input;
