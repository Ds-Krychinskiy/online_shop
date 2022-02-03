import React from "react";
import {
  HeaderWrapper,
  LabelWrapper,
  NavBarWrapper,
  BottonWrapper,
  TopWrapper,
  SearchWrapper,
} from "./style";
import Typography from "../../atoms/typography";
import Input from "../../atoms/input/index";
import Button from "../../atoms/button/index";
import DropDownList from "../../molecule/drop_down_list/index";
import LinkPrototype from "../../molecule/link/index";
import * as routes from "../../../routes";
import {
  GamesList,
  SchoolList,
  ListBook,
  Сhancellery,
  Remain,
} from "../../../lists";

const Header = () => {
  const Admin = true;
  const Authorization = true;

  return (
    <HeaderWrapper>
      <LabelWrapper>
        <LinkPrototype
          variant={"link"}
          way={"/"}
          label={<Typography variant={"header"}>New Labirint</Typography>}
        />
      </LabelWrapper>
      <NavBarWrapper>
        <TopWrapper>
          <SearchWrapper>
            <Input
              type={"text"}
              variant={"search"}
              placeholder={"Введите название книги..."}
            />
            <Button label={"Искать..."} onClick={() => console.log("search")} />
          </SearchWrapper>
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
