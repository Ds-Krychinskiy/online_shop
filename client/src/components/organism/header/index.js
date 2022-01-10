import React from "react";
import { HeaderWrapper, LabelWrapper, NavBarWrapper } from "./style";
import HeaderTop from "./header_top";
import HeaderBotoom from "./header_bottom";
import Typography from "../../atoms/typography";

const Header = () => {
  return (
    <HeaderWrapper>
      <LabelWrapper>
        <Typography variant={"header"}>New Labirint</Typography>
      </LabelWrapper>
      <NavBarWrapper>
        <HeaderTop />
        <HeaderBotoom />
      </NavBarWrapper>
    </HeaderWrapper>
  );
};
export default Header;
