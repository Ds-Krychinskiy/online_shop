import { LinkWrapper } from "./style";
import { Link } from "react-router-dom";
import Typography from "./../typography/index";

const LinkPrototype = ({ way, label }) => {
  return (
    <LinkWrapper>
      <Link to={way} style={{ textDecoration: "none" }}>
        <Typography>{label}</Typography>
      </Link>
    </LinkWrapper>
  );
};

export default LinkPrototype;
