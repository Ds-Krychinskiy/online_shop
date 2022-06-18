import KekProduct from "components/temlates/one_product/index";
import { useTypedSelector } from "redux/hooks/useTypedSelector";

const Product = () => {
  const { oneProduct } = useTypedSelector((state) => state.oneProduct);

  return <KekProduct oneProduct={oneProduct} />;
};

export default Product;
