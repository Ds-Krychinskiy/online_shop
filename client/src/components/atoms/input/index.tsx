import { InputSearch, InputRegistration } from "./style";
interface IInputProps {
  placeholder: string;
  type: string;
  variant: string;
  value: string;
  label: string;
  addProduct: (name: string) => void;
}
const Input: React.FC<IInputProps> = ({
  placeholder,
  type,
  variant,
  value,
  label,
  addProduct,
}) => {
  const onChange = (value) => {
    addProduct(value);
  };

  switch (variant) {
    case "search":
      return (
        <InputSearch
          id="outlined-textarea"
          label={label}
          placeholder={placeholder}
        />
      );
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
{
  /* <TextField
id="outlined-textarea"
label="Multiline Placeholder"
placeholder="Placeholder"
multiline
/> */
}
