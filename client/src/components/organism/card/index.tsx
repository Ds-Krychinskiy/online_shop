import Button from "../../atoms/button/index";
import { CardWrapper, ButtonWrapper } from "./style";

interface ICardProps {
  name: string;
  price: number;
  rating: number;
  variant: string;
  addInBasket: () => void;
  addInDeferred: () => void;
  remove: () => void;
}

const Card: React.FC<ICardProps> = ({ name, price, rating, addInBasket, addInDeferred, variant, remove  }) => {
  
  switch (variant) {
    case "basket":
      return (
        <CardWrapper>
          <Button onClick={remove} label={"X"} />
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
            <Button onClick={remove} label={"X"} />
            <Button onClick={addInBasket} label={"В корзину"} />
            <Button onClick={addInDeferred} label={"Лайк"} />
          </ButtonWrapper>
        </CardWrapper>
      );
    case "general":
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
