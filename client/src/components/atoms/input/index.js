import { InputSearch, InputRegistration } from "./style";

const Input = ({ placeholder, type, variant, value, addProduct }) => {
  const onChange = (value) => {
    addProduct(value);
  };

  switch (variant) {
    case "search":
      return <InputSearch type={type} placeholder={placeholder} />;
    case "admin-panel":
      return (
        <InputRegistration
          onChange={(event) => onChange(event.target.value)}
          value={value}
          placeholder={placeholder}
          type={type}
        ></InputRegistration>
      );
    default:
      return <InputSearch type={type} placeholder={placeholder}></InputSearch>;
  }
};

export default Input;
