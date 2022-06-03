import Card from "components/organism/card";
import { PRODUCT_ROUTE } from "consts";
import { useNavigate } from "react-router";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { DefaulState } from "redux/types/product";
import { useAction } from "../../../redux/hooks/useAction";
import { ShopWrappe } from "./style";


const Shop = () => {
  const { product, loading, error } = useTypedSelector(
    (state) => state.listProduct
  );
  const {
    addDefferedProduct,
    addToBasketProduct,
  } = useAction();

  const navigate = useNavigate();

  const GoToProductPage = (name: string) => {
    navigate(`${PRODUCT_ROUTE}/${name}`);
  };

  return (
    <ShopWrappe>
      {product.map((el: DefaulState) => (
        <Card
          key={el.name}
          name={el.name}
          price={el.price}
          rating={el.rating}
          variant={"base"}
          addProduct={() => addToBasketProduct(el)}
          defferedPropduct={() => addDefferedProduct(el)}
          onClick={() => GoToProductPage(el.name)}
        />
      ))}
    </ShopWrappe>
  );
};
export default Shop;
