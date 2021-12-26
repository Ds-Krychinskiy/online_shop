import { InputMoleculeStyle } from "./style";
import Input from "../../atoms/input";
import Button from "../../atoms/button";

const InputMolecule = () => {
  return (
    <InputMoleculeStyle>
      <Input></Input>
      <Button>Искать</Button>
    </InputMoleculeStyle>
  );
};

export default InputMolecule;
