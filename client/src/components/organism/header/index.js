import InputMolecule from "../../molecule/input";
import { HeaderWrapper, TopWrapper, BottonWrapper} from "./style";
import Typography from "./../../atoms/typography/index"
const Header = () => {
  return (
    <HeaderWrapper>
<TopWrapper>
      <InputMolecule></InputMolecule>
      <Typography>Сообщение</Typography>
      <Typography>Профиль</Typography>
      <Typography>Отложенные</Typography>
      <Typography>Корзина</Typography>
</TopWrapper>
    <BottonWrapper>
    <Typography>Книги</Typography>
    <Typography>Главное 2021</Typography>
    <Typography>Школа</Typography>
    <Typography>Игрушки</Typography>
    <Typography>Канцтовары</Typography>
    <Typography>Ещё...</Typography>
    <Typography>Клуб</Typography>

    </BottonWrapper>
    </HeaderWrapper>
  );
};
export default Header;
