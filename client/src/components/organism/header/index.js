import React from "react";
import {
  HeaderWrapper,
  LabelWrapper,
  NavBarWrapper,
  BottonWrapper,
  TopWrapper,
} from "./style";
import Typography from "../../atoms/typography";
import DropDownList from "../../molecule/drop_down_list/index";
import InputMolecule from "../../molecule/input/index";
import LinkPrototype from "../../atoms/link/index";
import * as routes from "../../../routes";
import {
  GamesList,
  SchoolList,
  ListBook,
  Сhancellery,
  Remain,
} from "../../../lists.js";

const Header = () => {
  const Admin = true;
  const Authorization = true;

  return (
    <HeaderWrapper>
      <LabelWrapper>
        <Typography variant={"header"}>New Labirint</Typography>
      </LabelWrapper>
      <NavBarWrapper>
        <TopWrapper>
          <InputMolecule variant={"search"} />
          {Admin ? (
            <LinkPrototype
              variant={"link"}
              way={`/${routes.Admin}`}
              label={"Панель Админа"}
            />
          ) : null}
          {Authorization ? (
            <>
              <LinkPrototype
                variant={"link"}
                way={`/${routes.Profile}`}
                label={"Профиль"}
              />
              <LinkPrototype
                variant={"link"}
                way={`/${routes.Basket}`}
                label={"Корзина"}
              />
              <LinkPrototype
                variant={"link"}
                way={`/${routes.Deferred}`}
                label={"Отложено"}
              />
            </>
          ) : (
            <LinkPrototype
              variant={"link"}
              way={`/${routes.Authorization}`}
              label={"Авторизация"}
            />
          )}
        </TopWrapper>
        <BottonWrapper>
          <DropDownList label={"Книги"} list={ListBook} />
          <DropDownList label={"Школа"} list={SchoolList} />
          <DropDownList label={"Игрушки"} list={GamesList} />
          <DropDownList label={"Канцтовары"} list={Сhancellery} />
          <DropDownList label={"Ещё..."} list={Remain} />
        </BottonWrapper>
      </NavBarWrapper>
    </HeaderWrapper>
  );
};
export default Header;
