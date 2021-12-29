import React from "react";
import { HeaderWrapper } from "./style";
import HeaderTop from "./header_top";
import HeaderBotoom from "./header_bottom";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTop />
      <HeaderBotoom />
    </HeaderWrapper>
  );
};
export default Header;
