import { LinkWrapper } from "./style";
import { Link } from "react-router-dom";

const LinkPrototype = ({ way, children }) => {
  return (
    <LinkWrapper>
      <Link to={way}>{children}</Link>
    </LinkWrapper>
  );
};

export default LinkPrototype;
