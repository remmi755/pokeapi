import React from "react";
import {
  ChevronDownIcon,
  EyeIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import cn from "classnames";

export interface InputProps {
  label?: string;
  type: string;
  placeholder?: string;
  errorMsg?: string;
  id: string;
  value?: string;
  styling: string;
  disabled?: Boolean;
  onChange?: () => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  errorMsg,
  type,
  id,
  value,
  styling,
  iconStart,
  disabled,
  iconEnd,
  onChange,
  children,
}) => {
  const styleInformation = cn(
    "w-max",
    `${styling}` === "validation" ? "text-red-700" : "text-gray-500"
  );

  const styleIconStart = cn(
    `${styling}` === "validation" ? "text-red-700" : "text-gray-700",
    "absolute w-4 h-4 top-11 inset-y-3.5 start-2 mt-0.5"
  );
  return (
    <div>
      <div className="w-[400px] h-[100px] relative flex items-center justify-cente">
        <div className="absolute w-4 h-4 text-gray-500 inset-y-3.5">
          <div className="flex items-center gap-1 w-[200px] text-black ">
            <h3 className="text-gray-500 font-bold">{label}</h3>
            <div className="text-gray-500">
              <InformationCircleIcon width={14} />
            </div>
          </div>
          <div className={styleIconStart}>
            {/*<MagnifyingGlassIcon />*/}
            {iconStart}
          </div>

          {children}
          <div className="absolute w-4 h-4 top-11 left-96 -ml-3">
            {iconEnd}
            {/*<EyeIcon />*/}
          </div>
          <input
            type={type}
            id={id}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            className={`input input-styling-${styling}`}
            onChange={onChange}
            // className="block w-[400px] h-10 px-4 py-3 ps-10 text-sm text-gray-900 border border-teal-300 rounded-lg bg-gray-50"
          />
          <p className={styleInformation}>
            {`${styling}` === "validation"
              ? "Please type a valid value"
              : "This information is required"}
          </p>
        </div>
      </div>
      <p className="">{errorMsg}</p>
    </div>
  );
};

export default Input;
