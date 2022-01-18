import { AuthorizationStyle, InputWrapper } from "./style";
import Input from "./../../atoms/input/index";
import LinkPrototype from "../../atoms/link";
import * as routes from "./../../../routes";
import Typography from "../../atoms/typography";

const Authorization = () => {
  return (
    <AuthorizationStyle>
      <Typography>Авторизация</Typography>
      <InputWrapper>
        <Input placeholder={"Введите email"} />
      </InputWrapper>

      <InputWrapper>
        <Input placeholder={"Введите пароль"} type={"password"} />
      </InputWrapper>

      <LinkPrototype way={`/${routes.Registration}`} label={"Регистрация"} />
    </AuthorizationStyle>
  );
};

export default Authorization;
