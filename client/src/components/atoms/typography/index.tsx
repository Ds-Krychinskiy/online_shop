import React from "react";
import { ErrorStyle, LinkStyle, DropListStyle, HeaderStyle, H1 } from "./style";

interface ITypographeProps {
  children: String | JSX.Element;
  variant: String;
}

const Typography: React.FC<ITypographeProps> = ({ children, variant }) => {
  switch (variant) {
    case "h1":
      return <H1>{children}</H1>;
    case "drop-list":
      return <DropListStyle>{children}</DropListStyle>;
    case "link":
      return <LinkStyle>{children}</LinkStyle>;
    case "error":
      return <ErrorStyle></ErrorStyle>;
    case "header":
      return <HeaderStyle>{children}</HeaderStyle>;
    default:
      return <p>{children}</p>;
  }
};

export default Typography;
