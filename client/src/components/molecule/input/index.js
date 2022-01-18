import { InputSearch, InputBasket } from "./style";
import Input from "../../atoms/input";
import Button from "../../atoms/button";

const InputMolecule = ({ variant }) => {
  switch (variant) {
    case "count":
      return (
        <InputBasket>
          <Input variant={"count"} />
          <Button label={"+"} />
          <Button label={"-"} />
        </InputBasket>
      );
    default:
      return (
        <InputSearch>
          <Input variant={"search"} placeholder={"Поиск..."} />
          <Button label={"Искать"} />
        </InputSearch>
      );
  }
};

export default InputMolecule;
