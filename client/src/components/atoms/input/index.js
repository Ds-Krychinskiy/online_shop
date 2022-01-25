import { InputSearch, InputRegistration } from "./style";

const Input = ({ placeholder, type, variant, value, addProduct }) => {
  const onChange = (value) => {
    addProduct(value);
  };

  switch (variant) {
    case "search":
      return <InputSearch type={type} placeholder={placeholder} />;
    default:
      return (
        <InputRegistration
          onChange={(event) => onChange(event.target.value)}
          value={value}
          placeholder={placeholder}
          type={type}
        ></InputRegistration>
      );
  }
};

export default Input;
