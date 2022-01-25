import { BasketStyle, WrapperProduct } from "./style";
import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
const Basket = ({ product, remove }) => {
  let sum = product.reduce((acc, el) => {
    return acc + el.price;
  }, 0);

  console.log(sum);
  return (
    <BasketStyle>
      {product.length > 0 ? (
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
      ) : (
        <>
          <Typography>В корзине пока ничего нет!</Typography>
          <Typography>
            Начните с главной страницы или воспользуйтесь поиском, чтобы найти
            что-то конкретное
          </Typography>
        </>
      )}
      <Typography>{sum !== 0 ? sum : null}</Typography>
    </BasketStyle>
  );
};

export default Basket;
