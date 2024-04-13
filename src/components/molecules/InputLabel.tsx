import { InputHTMLAttributes } from "react";

interface InputLabelProps {
  label: string;
  name: string;
  placeholder: string;
  value?: string;
  isRequired?: boolean;
  type: InputHTMLAttributes<HTMLInputElement>["type"];
}

export const InputLabel = ({ label, name, placeholder, value, type, isRequired }: InputLabelProps) => {
  return (
    <span className="flex flex-col gap-2">
      <label htmlFor="category" className="text-gray-950 font-bold">
        {label}
      </label>
      <input required={isRequired} type={type} name={name} placeholder={placeholder} value={value} className="p-3 rounded-md bg-gray-300 bg-opacity-50 text-gray-500 placeholder:text-gray-500 outline-none input input-bordered md:w-full md:max-w-xs"/>
    </span>
  );
};
