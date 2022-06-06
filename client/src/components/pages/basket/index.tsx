import { DefaulState } from "../../../redux/types/product";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useAction } from "redux/hooks/useAction";
import { useNavigate } from "react-router";
import { PRODUCT_ROUTE } from "consts";
import Button from "components/atoms/button";
import TemplatesProduct from "components/temlates/list_products";

const Basket = () => {
  const { basket_product } = useTypedSelector(
    (state) => state.listProductInBasket
  );

  let price = basket_product.reduce((acc, el) => {
    return acc + el.price;
  }, 0);
  const { addDefferedProduct, removeProductFormBasket, fetchOneProduct } =
    useAction();
  const navigate = useNavigate();

  const GoToProductPage = (el: DefaulState, name: string) => {
    fetchOneProduct(el);
    navigate(`/${PRODUCT_ROUTE}/${name}`);
  };

  const ButtonJSX = (el: DefaulState, name: string) => (
    <>
      <Button
        label={"Отложить"}
        variant={"basic"}
        onClick={() => addDefferedProduct(el)}
      />
      <Button
        label={"Удалить из корзины"}
        variant={"basic"}
        onClick={() => removeProductFormBasket(name)}
      />
    </>
  );
  const Label = () => {
    return basket_product.length > 0
      ? "Ваш заказ"
      : "В корзине пока ничего нет! Начните с главной страницы или воспользуйтесь поиском, чтобы найти что-то конкретное...";
  };

  return (
    <TemplatesProduct
      buttonsJSX={ButtonJSX}
      label={Label()}
      onClick={GoToProductPage}
      product={basket_product}
    />
  );
};

export default Basket;
// {basket_product.length > 0 ? (
//   <>
//     <Typography variant={"h1"}>Ваш заказ</Typography>
//     <BasketStyle>
//       <WrapperProduct>
//         {basket_product.map((el: DefaulState) => (
//           <Card
//             key={el.name}
//             name={el.name}
//             price={el.price}
//             rating={el.rating}
//             onClick={() => GoToProductPage(el.name)}
//             buttonsJSX={() => ButtonJSX(el, el.name)}
//           />
//         ))}
//       </WrapperProduct>
//       <SumWrapper>
//         <Typography variant={"h1"}>
//           <>
//             {basket_product.length !== 0 ? basket_product.length : null}{" "}
//             Товара на сумму: {price !== 0 ? price : null} рублей
//           </>
//         </Typography>
//       </SumWrapper>
//     </BasketStyle>
//   </>
// ) : (
//   <>
//     <Typography variant={"h1"}>В корзине пока ничего нет!</Typography>
//     <Typography variant={"h1"}>
//       Начните с главной страницы или воспользуйтесь поиском, чтобы найти
//       что-то конкретное...
//     </Typography>
//   </>
// )}
