import React from "react";
import { InputSearch, InputRegistration } from "./style";

interface InputProps {
  variant: string;
  value?: string | number;
  type: string;
  placeholder?: string;
  onChange: (value: string | number) => void;
}

const Input: React.FC<InputProps> = ({
  variant,
  value,
  type,
  placeholder,
  onChange,
}) => {
  switch (variant) {
    case "search":
      return (
        <InputSearch
          placeholder={placeholder}
          type={type}
          onChange={(e) => console.log(e.target.value)}
        ></InputSearch>
      );
    case "registration":
      return (
        <InputRegistration
          placeholder={placeholder}
          type={type}
          required
          value={value}
          onChange={(e) => onChange(e.target.value)}
        ></InputRegistration>
      );
    default:
      return <input></input>;
  }
};
export default Input;
