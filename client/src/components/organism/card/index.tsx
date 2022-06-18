import Typography from "../../atoms/typography/index";
import { CardWrapper, ButtonWrapper, ContentWrapper } from "./style";
import React from "react";
import Button from "components/atoms/button";

type CardProps = {
  name: string;
  price: number;
  rating: number;
  GoToProductPage: () => void;
};

const Card: React.FC<CardProps> = ({
  name,
  price,
  rating,
  GoToProductPage,
}) => {
  return (
    <CardWrapper>
      <ContentWrapper onClick={GoToProductPage}>
        <Typography variant={"H1"}>{name}</Typography>
        <Typography variant={"H1"}>{price}</Typography>
        <Typography variant={"H1"}>{rating}</Typography>
      </ContentWrapper>
      <ButtonWrapper>
        <Button label={""} onClick={() => console.log()} variant={""}></Button>
        <Button label={""} onClick={() => console.log()} variant={""}></Button>
      </ButtonWrapper>
    </CardWrapper>
  );
};

export default Card;
