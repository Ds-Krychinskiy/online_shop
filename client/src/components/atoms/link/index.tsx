import { LinkWrapper } from "./style";
import { Link } from "react-router-dom";
import Typography from "../typography/index";

interface ILinkProps {
  way: string;
  label: string | JSX.Element;
  variant: string;
}

const LinkPrototype: React.FC<ILinkProps> = ({ way, label, variant }) => {
  return (
    <LinkWrapper>
      <Link to={way} style={{ textDecoration: "none" }}>
        <Typography variant={variant}>{label}</Typography>
      </Link>
    </LinkWrapper>
  );
};

export default LinkPrototype;
