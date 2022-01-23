import { BasketStyle } from "./style";
import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
const Basket = ({ product }) => {
  return (
    <BasketStyle>
      {product.length > 0 ? (
        <>
          {product.map((el) => (
            <Card
              key={el.id}
              name={el.name}
              price={el.price}
              rating={el.rating}
            />
          ))}
        </>
      ) : (
        <Typography>Корзина пуста!</Typography>
      )}
    </BasketStyle>
  );
};

export default Basket;
