import React from "react";
import { ButtonStyle } from "./style";

interface IButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({ label, onClick }) => {
  return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;

  // return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};

export default Button;
