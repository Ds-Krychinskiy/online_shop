import React from "react";
import {
  ErrorStyle,
  LinkStyle,
  DropListStyle,
  HeaderStyle,
  H1,
  CountPage,
} from "./style";

interface ITypographeProps {
  children: string | JSX.Element | number | undefined;
  variant: string;
  onClick?: () => void
}

const Typography: React.FC<ITypographeProps> = ({ children, variant, onClick }) => {
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
    case "countPage":
      return <CountPage onClick={onClick}>{children}</CountPage>;
    default:
      return <p>{children}</p>;
  }
};

export default Typography;
