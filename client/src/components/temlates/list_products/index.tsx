import Typography from "components/atoms/typography";
import Card from "components/organism/card";
import React from "react";
import { DefaulState } from "redux/types/product";
import {  ProductWrappe, Wrapp } from "./style";
import { useNavigate } from "react-router";
import { PRODUCT_ROUTE } from "consts";

interface TemplateProductProps {
  label: string;
  pages: number[];
  product: DefaulState[];
  fetchOneProduct: (el: DefaulState) => void;
  pageNavigation: (index: number, pagesCoun: number) => void,
  onClick: (el: DefaulState) => void;
  onClick2: (name: DefaulState) => void;
}

const TemplatesProduct: React.FC<TemplateProductProps> = ({
  label,
  product,
  fetchOneProduct,
  pages,
}) => {
  const navigate = useNavigate();

  const GoToProductPage = (el: DefaulState) => {
    fetchOneProduct(el);
    navigate(`${PRODUCT_ROUTE}/${el.name}`);
  };

  return (
    <Wrapp>
      <Typography variant={"h1"} children={label} />
      <ProductWrappe>
        {product.map((el: DefaulState) => (
          <Card
            key={el.name}
            name={el.name}
            price={el.price}
            rating={el.rating}
            GoToProductPage={() => GoToProductPage(el)}
          />
        ))}
      </ProductWrappe>
  
    </Wrapp>
  );
};

export default TemplatesProduct;
