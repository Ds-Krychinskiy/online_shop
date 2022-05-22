import { WrapperProduct, SumWrapper, BasketStyle } from "./style";
import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
import { DefaulState } from "../../../redux/types/product";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useAction } from "redux/hooks/useAction";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { PRODUCT_ROUTE } from "consts";

const Basket = () => {
  const { basket_product } = useTypedSelector(
    (state) => state.listProductInBasket
  );

  let price = basket_product.reduce((acc, el) => {
    return acc + el.price;
  }, 0);
  const { addDefferedProduct, removeProductFormBasket } = useAction();
  const navigate = useNavigate();

  const GoToProductPage = useCallback((id: number) => {
    navigate(`/${PRODUCT_ROUTE}/${id}`);
  }, []);

  return (
    <>
      {basket_product.length > 0 ? (
        <>
          <Typography variant={"h1"}>Ваш заказ</Typography>
          <BasketStyle>
            <WrapperProduct>
              {basket_product.map((el: DefaulState) => (
                <Card
                  variant={"basket"}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  rating={el.rating}
                  onClick={() => GoToProductPage(el.id)}
                  remove={() => removeProductFormBasket(el.id)}
                  defferedPropduct={() => addDefferedProduct(el)}
                />
              ))}
            </WrapperProduct>
            <SumWrapper>
              <Typography variant={"h1"}>
                <>
                  {basket_product.length !== 0 ? basket_product.length : null}{" "}
                  Товара на сумму: {price !== 0 ? price : null} рублей
                </>
              </Typography>
            </SumWrapper>
          </BasketStyle>
        </>
      ) : (
        <>
          <Typography variant={"h1"}>В корзине пока ничего нет!</Typography>
          <Typography variant={"h1"}>
            Начните с главной страницы или воспользуйтесь поиском, чтобы найти
            что-то конкретное
          </Typography>
        </>
      )}
    </>
  );
};

export default Basket;
