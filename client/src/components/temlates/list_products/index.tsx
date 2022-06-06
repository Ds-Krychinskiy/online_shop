import Typography from "components/atoms/typography";
import Card from "components/organism/card";
import React from "react";
import { DefaulState } from "redux/types/product";
import { ProductWrappe, Wrapp } from "./style";

interface TemplateProductProps {
  label: string;
  product: DefaulState[];
  onClick: (el: DefaulState, name: string) => void;
  buttonsJSX: (el: DefaulState, name: string) => JSX.Element;
}

const TemplatesProduct: React.FC<TemplateProductProps> = ({
  label,
  product,
  buttonsJSX,
  onClick,
}) => {
  return (
    <Wrapp>
      <Typography variant={"h1"}>{label}</Typography>
      <ProductWrappe>
        {product.map((el: DefaulState) => (
          <Card
            key={el.name}
            name={el.name}
            price={el.price}
            rating={el.rating}
            onClick={() => onClick(el, el.name)}
            buttonsJSX={() => buttonsJSX(el, el.name)}
          />
        ))}
      </ProductWrappe>
    </Wrapp>
  );
};

export default TemplatesProduct;
