import TemplateProduct from "components/temlates/one_product";
import { useTypedSelector } from "redux/hooks/useTypedSelector";

const Product = () => {
  const { oneProduct } = useTypedSelector((state) => state.oneProduct);
  return <TemplateProduct oneProduct={oneProduct} />;
};

export default Product;
