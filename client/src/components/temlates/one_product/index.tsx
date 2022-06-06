import React from "react";
import { DefaulState } from "redux/types/product";

interface TemplateProductProps {
  oneProduct: DefaulState[];
}

const TemplateProduct: React.FC<TemplateProductProps> = ({ oneProduct }) => {
  return (
    <>
      {oneProduct.map((el) => (
        <>
          {el.name}
          {el.author}
          {el.info}
          {el.price}
        </>
      ))}
    </>
  );
};

export default TemplateProduct;
