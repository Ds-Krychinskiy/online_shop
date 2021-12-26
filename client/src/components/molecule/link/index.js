import { LinkStyle } from "./style";
import LinkPrototype from "../../atoms/link";
import Typography from "../../atoms/typography";
const LinkMolecule = ({ way }) => {
  return (
    <LinkStyle>
      <LinkPrototype way={way}>
        <Typography>kek</Typography>
      </LinkPrototype>
    </LinkStyle>
  );
};

export default LinkMolecule;
