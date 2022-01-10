import InputMolecule from "../../molecule/input";
import Image from "../../atoms/img";
import Typography from "./../../atoms/typography/index";
import { CardWrapper } from "./style";

const Card = () => {
  return (
    <CardWrapper>
      <Image
        src={
          "./../../atoms/img/images/origin_0_f5d0a5e9fca1e5ea061bf3590ffd2c7d.jpg"
        }
      />
      <Typography children={"Шахматные дебюты. Полный курс"} />
      <Typography children={"Эстрин, Калиниченко"} />
      <Typography children={"Издательсво Калиниченко"} />
      <InputMolecule variant={"basket"} />
    </CardWrapper>
  );
};

export default Card;
