import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
import { DeferredStyled } from "./style";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useAction } from "redux/hooks/useAction";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { PRODUCT_ROUTE } from "consts";

const Deferred = () => {
  const { deffered_product } = useTypedSelector(
    (state) => state.listDeferredProduct
  );

  const {
    removeProductFromDeffered,
    addToBasketProduct,
  } = useAction();

  const navigate = useNavigate();

  const GoToProductPage = useCallback((id: number) => {
    navigate(`/${PRODUCT_ROUTE}/${id}`);
  }, []);
  return (
    <>
      <Typography variant={"h1"}>Отложенные товары</Typography>
      {deffered_product.length > 0 ? (
        <DeferredStyled>
          {deffered_product.map((el) => (
            <Card
              variant={"deffered"}
              key={el.id}
              name={el.name}
              price={el.price}
              rating={el.rating}
              remove={() => removeProductFromDeffered(el.id)}
              addProduct={() => addToBasketProduct(el)}
              onClick={() => GoToProductPage(el.id)}
            />
          ))}
        </DeferredStyled>
      ) : (
        <Typography variant={"h1"}>Список отложенных товаров пуст!</Typography>
      )}
    </>
  );
};

export default Deferred;
