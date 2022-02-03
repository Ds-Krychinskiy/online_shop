import { LinkWrapper } from "./style";
import Typography from "../../atoms/typography/index";

interface ILinkProps {
  way: string;
  label: string | JSX.Element;
  variant: string;
}

const LinkPrototype: React.FC<ILinkProps> = ({ way, label, variant }) => {
  return (
    <LinkWrapper to={way}>
      <Typography variant={variant}>{label}</Typography>
    </LinkWrapper>
  );
};

export default LinkPrototype;
