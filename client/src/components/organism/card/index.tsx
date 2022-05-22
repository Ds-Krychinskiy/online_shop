import Typography from "../../atoms/typography/index";
import { CardWrapper, ButtonWrapper, ContentWrapper } from "./style";
import React from "react";
import Button from "../../atoms/button/index";

type CardProps = {
  name: string;
  price: number;
  rating: number;
  variant: string;
  addProduct?: () => void;
  defferedPropduct?: () => void;
  remove?: () => void;
  onClick?: () => void;
};

const Card: React.FC<CardProps> = ({
  name,
  price,
  rating,
  variant,
  addProduct,
  defferedPropduct,
  remove,
  onClick,
}) => {
  switch (variant) {
    case "basket":
      return (
        <CardWrapper>
          <ContentWrapper onClick={onClick}>
            <Typography variant={"H1"}>{name}</Typography>
            <Typography variant={"H1"}>{price}</Typography>
            <Typography variant={"H1"}>{rating}</Typography>
          </ContentWrapper>
          {remove ? (
            <Button variant={"delete"} onClick={remove} label={"Х"} />
          ) : null}
        </CardWrapper>
      );
    case "deffered":
      return (
        <CardWrapper>
          <ContentWrapper onClick={onClick}>
            <Typography variant={"H1"}>{name}</Typography>
            <Typography variant={"H1"}>{price}</Typography>
            <Typography variant={"H1"}>{rating}</Typography>
          </ContentWrapper>
          <ButtonWrapper>
            {addProduct ? (
              <Button
                variant={"add_basket"}
                onClick={addProduct}
                label={"В корзину"}
              />
            ) : null}
            {remove ? (
              <Button variant={"delete"} onClick={remove} label={"X"} />
            ) : null}
          </ButtonWrapper>
        </CardWrapper>
      );
    case "base":
      return (
        <CardWrapper>
          <ContentWrapper onClick={onClick}>
            <Typography variant={"H1"}>{name}</Typography>
            <Typography variant={"H1"}>{price}</Typography>
            <Typography variant={"H1"}>{rating}</Typography>
          </ContentWrapper>
          <ButtonWrapper>
            {addProduct ? (
              <Button
                variant={"add_basket"}
                onClick={addProduct}
                label={"В корзину"}
              />
            ) : null}
            {defferedPropduct ? (
              <Button
                variant={"like"}
                onClick={defferedPropduct}
                label={"Отложить"}
              />
            ) : null}
          </ButtonWrapper>
        </CardWrapper>
      );
    default:
      return <></>;
  }
};

export default Card;
