import { ButtonStyle } from "./style";
const Button = ({ label, onClick }) => {
  return <ButtonStyle onClick={onClick}>{label}</ButtonStyle>;
};

export default Button;
