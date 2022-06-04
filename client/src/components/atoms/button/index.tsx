import React from "react";
import { ButtonSearch, AdminPanelButton, ButtonBasic } from "./style";

interface IButtonProps {
  label: string;
  variant: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<IButtonProps> = ({
  label,
  variant,
  onClick,
  disabled,
}) => {
  switch (variant) {
    case "basic":
      return <ButtonBasic onClick={onClick}>{label}</ButtonBasic>;
    case "search":
      return <ButtonSearch onClick={onClick}>{label}</ButtonSearch>;
    case "admin-panel":
      return (
        <AdminPanelButton onClick={onClick} disabled={disabled}>
          {label}
        </AdminPanelButton>
      );
    default:
      return <button></button>;
  }
};

export default Button;
