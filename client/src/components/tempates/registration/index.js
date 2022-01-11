import Input from "./../../atoms/input/index";
import { RegistrationStyle, InputWrapper } from "./style";
import Typography from "./../../atoms/typography/index";
const Registration = () => {
  return (
    <RegistrationStyle>
      <Typography variant={"link"}>регистрация </Typography>
      <InputWrapper>
        <Input  placeholder={"Введите имя"} />
      </InputWrapper>

      <InputWrapper>
        <Input placeholder={"Введите фамилию"} />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder={"Введите отчиство"} />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder={""} />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder={"Введите  email"} />
      </InputWrapper>
      <InputWrapper>
        <Input type={"password"} placeholder={"Введите пароль"} />
      </InputWrapper>
      <InputWrapper>
        <Input type={"password"} placeholder={"Повторите пароль"} />
      </InputWrapper>
    </RegistrationStyle>
  );
};

export default Registration;
