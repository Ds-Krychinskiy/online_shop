import React from "react";
import { TopWrapper } from "./style";
import InputMolecule from "./../../../molecule/input/index";
import LinkPrototype from "./../../../atoms/link/index";
import * as routes from "./../../../../routes";
const HeaderTop = () => {
  const Admin = false;
  return (
    <TopWrapper>
      <InputMolecule variant={"search"} />
      {Admin ? (
        <LinkPrototype
          variant={"link"}
          way={`/${routes.Admin}`}
          label={"Панель Админа"}
        />
      ) : null}
      <LinkPrototype
        variant={"link"}
        way={`/${routes.Basket}`}
        label={"Корзина"}
      />
      <LinkPrototype
        variant={"link"}
        way={`/${routes.Profile}`}
        label={"Профиль"}
      />
      <LinkPrototype
        variant={"link"}
        way={`/${routes.Deferred}`}
        label={"Отложено"}
      />
    </TopWrapper>
  );
};

export default HeaderTop;
