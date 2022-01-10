import { TypographyStyle, LinkStyle, DropListStyle, HeaderStyle } from "./style";

const Typography = ({ children, variant }) => {
  switch (variant) {
    case "drop-list":
      return <DropListStyle>{children}</DropListStyle>;
    case "link":
      return <LinkStyle>{children}</LinkStyle>;
    case "author":
      return <div></div>;
    case "publishing-house":
      return <div></div>;
      case "header":
      return <HeaderStyle>{children}</HeaderStyle>;
    default:
      return <TypographyStyle>{children}</TypographyStyle>;
  }
};

export default Typography;
