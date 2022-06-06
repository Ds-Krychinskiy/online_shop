import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useAction } from "redux/hooks/useAction";
import { useNavigate } from "react-router";
import { PRODUCT_ROUTE } from "consts";
import Button from "components/atoms/button";
import TemplatesProduct from "components/temlates/list_products";
import { DefaulState } from "redux/types/product";

const Deferred = () => {
  const { deffered_product } = useTypedSelector(
    (state) => state.listDeferredProduct
  );

  const { removeProductFromDeffered, addToBasketProduct, fetchOneProduct } =
    useAction();

  const navigate = useNavigate();

  const GoToProductPage = (el: DefaulState, name: string) => {
    fetchOneProduct(el);
    navigate(`/${PRODUCT_ROUTE}/${name}`);
  };

  const ButtonJSX = (el: DefaulState, name: string) => (
    <>
      <Button
        label={"В корзину"}
        variant={"basic"}
        onClick={() => addToBasketProduct(el)}
      />
      <Button
        label={"Удалить из отложенных"}
        variant={"basic"}
        onClick={() => removeProductFromDeffered(name)}
      />
    </>
  );

  return (
    <TemplatesProduct
      label={"Отложенные книги."}
      buttonsJSX={ButtonJSX}
      onClick={GoToProductPage}
      product={deffered_product}
    />
  );
};

export default Deferred;
