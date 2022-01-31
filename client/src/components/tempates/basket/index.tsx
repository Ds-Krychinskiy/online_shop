import { WrapperProduct, SumWrapper, BasketStyle } from "./style";
import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";

interface IBasketProps {
  product: [];
  remove: (id: number) => void;
}

const Basket: React.FC<IBasketProps> = ({ product, remove }) => {
  let price = product.reduce((acc, el) => {
    return acc + el.price;
  }, 0);

  return (
    <>
      {product.length > 0 ? (
        <>
          <Typography variant={"h1"}>Ваш заказ</Typography>
          <BasketStyle>
            <WrapperProduct>
              {product.map((el) => (
                <Card
                  remove={() => remove(el.id)}
                  variant={"basket"}
                  key={el.id}
                  name={el.name}
                  price={el.price}
                  rating={el.rating}
                />
              ))}
            </WrapperProduct>
            <SumWrapper>
              <Typography variant={"h1"}>
                <>
                  {product.length !== 0 ? product.length : null} Товара на
                  сумму: {price !== 0 ? price : null} рублей
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
