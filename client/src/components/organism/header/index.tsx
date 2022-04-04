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
import * as consts from "../../../consts";
import { useTypedSelector } from "redux/hooks/useTypedSelector";

const Header = () => {
  const Admin = true;
  const Authorization = true;
  const { types } = useTypedSelector((state) => state.typeStore);

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
              placeholder={"Поиск..."}
              type={"text"}
              variant={"search"}
              onChange={(e) => console.log(e)}
            ></Input>
            <Button
              variant={"search"}
              label={"Искать..."}
              onClick={() => console.log("search")}
            />
          </SearchWrapper>
          {Admin ? (
            <LinkPrototype
              variant={"link"}
              way={`/${consts.ADMIN_ROUTE}`}
              label={"Панель Админа"}
            />
          ) : null}
          {Authorization ? (
            <>
              <LinkPrototype
                variant={"link"}
                way={`/${consts.PROFIL_ROUTE}`}
                label={"Профиль"}
              />
              <LinkPrototype
                variant={"link"}
                way={`/${consts.BASKET_ROUTE}`}
                label={"Корзина"}
              />
              <LinkPrototype
                variant={"link"}
                way={`/${consts.DEFERRED_ROUTE}`}
                label={"Отложено"}
              />
            </>
          ) : (
            <LinkPrototype
              variant={"link"}
              way={`/${consts.AUTORIZATION_ROUTE}`}
              label={"Авторизация"}
            />
          )}
        </TopWrapper>
        <BottonWrapper>
          {types.map((el) => (
            <DropDownList
              variant={"header"}
              name={el.label}
              listBrand={el.list}
              key={el.key}
            />
          ))}
        </BottonWrapper>
      </NavBarWrapper>
    </HeaderWrapper>
  );
};
export default Header;
