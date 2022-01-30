import { ButtonStyle } from "./style";
const Button = ({ label, onClick, variant }) => {
  switch (variant) {
    case "deffered":
    default:
      return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
  }
  // return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};

export default Button;
