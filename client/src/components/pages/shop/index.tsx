import Button from "components/atoms/button";
import TemplatesProduct from "components/temlates/list_products";
import { PRODUCT_ROUTE } from "consts";
import { useNavigate } from "react-router";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useAction } from "../../../redux/hooks/useAction";
import { DefaulState } from "redux/types/product";

const Shop = () => {
  const { product, loading, error } = useTypedSelector(
    (state) => state.listProduct
  );

  const { addDefferedProduct, addToBasketProduct, fetchOneProduct } =
    useAction();

  const navigate = useNavigate();

  const GoToProductPage = (el: DefaulState, name: string) => {
    fetchOneProduct(el);
    navigate(`${PRODUCT_ROUTE}/${name}`);
  };

  const ButtonJSX = (el: DefaulState, name: string) => (
    <>
      <Button
        label={"В корзину"}
        variant={"basic"}
        onClick={() => addToBasketProduct(el)}
      />
      <Button
        label={"Отложить"}
        variant={"basic"}
        onClick={() => addDefferedProduct(el)}
      />
    </>
  );
  return (
    <TemplatesProduct
      label={"Выберите книгу ;)"}
      product={product}
      buttonsJSX={ButtonJSX}
      onClick={GoToProductPage}
    />
  );
};
export default Shop;
