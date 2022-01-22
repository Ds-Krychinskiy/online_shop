import { BasketStyle } from "./style";
import Card from "../../organism/card/index";
const Basket = ({ product }) => {
  return (
    <BasketStyle>
      {product.map((el) => (
        <Card key={el.id} name={el.name} price={el.price} rating={el.rating} />
      ))}
    </BasketStyle>
  );
};

export default Basket;
