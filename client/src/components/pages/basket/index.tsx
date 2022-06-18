import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useAction } from "redux/hooks/useAction";
import BasketTemplate from "components/temlates/basket";

const Basket = () => {
  const { basket_product } = useTypedSelector(
    (state) => state.listProductInBasket
  );

  const { addDefferedProduct, removeProductFormBasket, fetchOneProduct } =
    useAction();

  const Label = () => {
    return basket_product.length > 0
      ? "Ваш заказ"
      : "В корзине пока ничего нет! Начните с главной страницы или воспользуйтесь поиском, чтобы найти что-то конкретное...";
  };

  return (
    <BasketTemplate
      label={Label()}
      fetchOneProduct={fetchOneProduct}
      product={basket_product}
    />
  );
};

export default Basket;
