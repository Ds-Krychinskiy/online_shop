import React from "react";
import {
  ButtonSearch,
  ButtonClose,
  AdminPanelButton,
  Like,
  AddBasket,
} from "./style";

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
    case "search":
      return <ButtonSearch onClick={onClick}>{label}</ButtonSearch>;
    case "x":
      return <ButtonClose onClick={onClick}>{label}</ButtonClose>;
    case "add_basket":
      return (
        <AddBasket onClick={onClick} disabled={disabled}>
          {label}
        </AddBasket>
      );
    case "like":
      return <Like onClick={onClick}>{label}</Like>;
    case "delete":
      return <Like onClick={onClick}>{label}</Like>;
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
