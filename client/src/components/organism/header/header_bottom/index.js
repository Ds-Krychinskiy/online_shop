import { BottonWrapper } from "./style";
import DropDownList from "../../../molecule/drop_down_list";
import {
  GamesList,
  SchoolList,
  ListBook,
  Сhancellery,
  Remain,
} from "../../../../lists";

const HeaderBotoom = () => {
  return (
    <BottonWrapper>
      <DropDownList label={"Книги"} list={ListBook} />
      <DropDownList label={"Школа"} list={SchoolList} />
      <DropDownList label={"Игрушки"} list={GamesList} />
      <DropDownList label={"Канцтовары"} list={Сhancellery} />
      <DropDownList label={"Ещё..."} list={Remain} />
    </BottonWrapper>
  );
};

export default HeaderBotoom;
