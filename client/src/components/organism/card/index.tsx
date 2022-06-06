import Typography from "../../atoms/typography/index";
import { CardWrapper, ButtonWrapper, ContentWrapper } from "./style";
import React from "react";

type CardProps = {
  name: string;
  price: number;
  rating: number;
  onClick: () => void;
  buttonsJSX: () => JSX.Element;
};

const Card: React.FC<CardProps> = ({
  name,
  price,
  rating,
  onClick,
  buttonsJSX,
}) => {
  return (
    <CardWrapper>
      <ContentWrapper onClick={onClick}>
        <Typography variant={"H1"}>{name}</Typography>
        <Typography variant={"H1"}>{price}</Typography>
        <Typography variant={"H1"}>{rating}</Typography>
      </ContentWrapper>
      <ButtonWrapper>{buttonsJSX()}</ButtonWrapper>
    </CardWrapper>
  );
};

export default Card;
