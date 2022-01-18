import Typography from "../../atoms/typography/index";
import { BasketStyle } from "./style";
const Basket = ({ message, get_product }) => {
  return (
    <BasketStyle>
      <Typography>Ваш заказ {message}</Typography>
      {get_product.map((el) => (
        <>
          <Typography>{el.name}</Typography>
          <Typography>{el.price}</Typography>
        </>
      ))}
    </BasketStyle>
  );
};

export default Basket;
