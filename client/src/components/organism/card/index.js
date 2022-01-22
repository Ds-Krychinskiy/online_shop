import Button from "../../atoms/button";
import { CardWrapper, ButtonWrapper } from "./style";

const Card = ({ name, price, rating, addInBasket, addInDeferred, variant }) => {
  switch (variant) {
    case "basket":
      return (
        <CardWrapper>
          <p>{price}</p>
          <p>{name}</p>
          <p>{rating}</p>
        </CardWrapper>
      );
    case "deffered":
      return (
        <CardWrapper>
          <p>{price}</p>
          <p>{name}</p>
          <p>{rating}</p>
          <ButtonWrapper>
            <Button onClick={addInBasket} label={"В корзину"} />
            <Button onClick={addInDeferred} label={"Лайк"} />
          </ButtonWrapper>
        </CardWrapper>
      );
    default:
      return (
        <CardWrapper>
          <p>{price}</p>
          <p>{name}</p>
          <p>{rating}</p>
          <ButtonWrapper>
            <Button onClick={addInBasket} label={"В корзину"} />
            <Button onClick={addInDeferred} label={"Лайк"} />
          </ButtonWrapper>
        </CardWrapper>
      );
  }
};

export default Card;