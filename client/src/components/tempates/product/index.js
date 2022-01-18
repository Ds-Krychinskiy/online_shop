import { TemplateWrapper } from "./style";
// import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";

const Product = ({ message }) => {
  return (
    <TemplateWrapper>
      <Typography variant={"drop-list"}>{message}</Typography>
    </TemplateWrapper>
  );
};

export default Product;
