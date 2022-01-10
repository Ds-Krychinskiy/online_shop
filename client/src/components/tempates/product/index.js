import { TemplateWrapper } from "./style";
// import Card from "../../organism/card/index";
import Typography from "../../atoms/typography";

const Product = ({ message, label }) => {
  return (
    <TemplateWrapper>
      <Typography variant={"drop-list"}>{label}</Typography>
      {message}
      {/* <Card /> */}
    </TemplateWrapper>
  );
};

export default Product;
