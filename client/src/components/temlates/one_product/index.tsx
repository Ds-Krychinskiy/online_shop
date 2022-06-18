import Paragraph from "components/molecule/paragraph";
import React from "react";
import { DefaulState } from "redux/types/oneDevice";

interface TemplateProductProps {
  oneProduct: DefaulState[];
}

const KekProduct: React.FC<TemplateProductProps> = ({ oneProduct }) => {
  return (
    <>
      {oneProduct.map((el) => (
        <div>
          <Paragraph variant={"h1"}>{el.name}</Paragraph>
          <Paragraph variant={"h1"}>{el.author}</Paragraph>
          <Paragraph variant={"h1"}>{el.info}</Paragraph>
          <Paragraph variant={"h1"}>
            <>{el.price} рублей</>
          </Paragraph>
        </div>
      ))}
    </>
  );
};

export default KekProduct;
