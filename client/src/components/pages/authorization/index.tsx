import Input from "components/atoms/input";
import { useState } from "react";
import { FormWrapper } from "./style";
import axios from "axios";
import Button from "components/atoms/button";
import LinkPrototype from "components/molecule/link";
import * as consts from "../../../consts";
export interface DefaulStateAuthorizationProp {
  name: string;
  password: string;
}

const DefaulState: DefaulStateAuthorizationProp = {
  name: "",
  password: "",
};

const Authorization: React.FC = () => {
  const [AuthorizationState, setAuthorizationState] = useState(DefaulState);
  const [showPassword, setShowPassword] = useState(false);
  const { name, password } = AuthorizationState;

  const getValueFromInput = (value: string | number, field: string) => {
    setAuthorizationState((state) => ({ ...state, [field]: value }));
  };
  const LogIn = () => {
    try {
      axios
        .post("http://localhost:5000/api/login", { name, password })
        .then((response) => {
          console.log(response);
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <FormWrapper>
        <Input
          value={name}
          type={"text"}
          variant={"registration"}
          onChange={(value) => getValueFromInput(value, "name")}
        ></Input>
        <Input
          value={password}
          type={showPassword ? "text" : "password"}
          variant={"registration"}
          onChange={(value) => getValueFromInput(value, "password")}
        ></Input>
        <Button onClick={LogIn} label={"Войти"} variant={"admin-panel"} />
        <LinkPrototype
          way={`/${consts.REGISTRATION_ROUTE}`}
          variant={""}
          label={"Регистрация"}
        />
      </FormWrapper>
    </>
  );
};

export default Authorization;
