import React from "react";
import { TopWrapper } from "./style";
import InputMolecule from "./../../../molecule/input/index";
import LinkPrototype from "./../../../atoms/link/index";
import * as routes from "./../../../../routes";
const HeaderTop = () => {
  return (
    <TopWrapper>
      <InputMolecule />
      <LinkPrototype way={`/${routes.Message}`} label={"Сообщения"} />
      {/* <LinkPrototype label={"Профиль"} />
      <LinkPrototype label={"Отложено"} />
      <LinkPrototype label={"Корзина"} /> */}
    </TopWrapper>
  );
};

export default HeaderTop;
