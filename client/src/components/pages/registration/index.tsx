import axios from "axios";
import Button from "components/atoms/button";
import Input from "components/atoms/input";
import { useState } from "react";
import { FormWrapper } from "./style";

export interface DefaulStateRegistrationProp {
  name: string;
  password1: string;
  password2: string;
}
const DefaulState: DefaulStateRegistrationProp = {
  name: "",
  password1: "",
  password2: "",
};

const Registration: React.FC = () => {
  const [RegistrationState, setRegistrationState] = useState(DefaulState);
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const { name, password1, password2 } = RegistrationState;

  const getValueFromInput = (value: string | number, field: string) => {
    setRegistrationState((state) => ({ ...state, [field]: value }));
  };

  const Register = () => {
    try {
      axios
        .post("http://localhost:5000/api/registration", {
          RegistrationState,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <FormWrapper>
        <Input
          placeholder={"E-Mail"}
          value={name}
          type={"text"}
          variant={"registration"}
          onChange={(value) => getValueFromInput(value, "name")}
        ></Input>
        <Input
          placeholder={"Введите пароль..."}
          type={showPassword1 ? "text" : "password"}
          value={password1}
          variant={"registration"}
          onChange={(value) => getValueFromInput(value, "password1")}
        ></Input>
        <Input
          placeholder={"Повторите пароль..."}
          value={password2}
          type={showPassword2 ? "text" : "password"}
          variant={"registration"}
          onChange={(value) => getValueFromInput(value, "password2")}
        ></Input>
        <Button
          onClick={Register}
          label={"Зарегистрироваться"}
          variant={"admin-panel"}
        />
      </FormWrapper>
    </>
  );
};

export default Registration;
