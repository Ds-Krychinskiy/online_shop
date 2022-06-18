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
          <LinkPrototype
            variant={"link"}
            way={`/${consts.ADMIN_ROUTE}`}
            label={"Панель Админа"}
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
        </TopWrapper>
        <BottonWrapper>
          {types.map((el) => (
            <DropDownList name={el.label} listBrand={el.list} key={el.key} />
          ))}
        </BottonWrapper>
      </NavBarWrapper>
    </HeaderWrapper>
  );
};
export default Header;
