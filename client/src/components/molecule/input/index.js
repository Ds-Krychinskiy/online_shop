import { InputSearch, InputBasket } from "./style";
import Input from "../../atoms/input";
import Button from "../../atoms/button";

const InputMolecule = ({ variant }) => {
  switch (variant) {
    case "basket":
      return (
        <InputBasket>
          <Input />
          <Button label={"+"} />
          <Button label={"-"} />
        </InputBasket>
      );
    default:
      return (
        <InputSearch>
          <Input />
          <Button label={"Искать"} />
        </InputSearch>
      );
  }
};

export default InputMolecule;
