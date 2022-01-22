import { ButtonDeffered } from "./style";
const Button = ({ label, onClick, variant }) => {
  switch (variant) {
    case "deffered":
    default:
      return <button onClick={onClick}>{label}</button>;
  }
  // return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};

export default Button;
