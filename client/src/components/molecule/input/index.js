import { InputMoleculeStyle } from "./style";
import Input from "../../atoms/input";
import Button from "../../atoms/button";

const InputMolecule = () => {
  return (
    <InputMoleculeStyle>
      <Input />
      <Button label={"Искать"} />
    </InputMoleculeStyle>
  );
};

export default InputMolecule;
