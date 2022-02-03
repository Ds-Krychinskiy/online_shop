import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
import { DeferredStyled } from "./style";
import { IDefaulState } from "../../../redux/reducers/getListProductReducer";
interface IDefferedProps {
  listdefferedProduct: IDefaulState[];
  addProduct: (el: IDefaulState) => void;
  defferedPropduct: (el: IDefaulState) => void;
  remove: (id: number) => void;
}

const Deffered: React.FC<IDefferedProps> = ({
  listdefferedProduct,
  addProduct,
  defferedPropduct,
  remove,
}) => {
  return (
    <>
      <Typography variant={"h1"}>Отложенные товары</Typography>
      {listdefferedProduct.length > 0 ? (
        <DeferredStyled>
          {listdefferedProduct.map((el) => (
            <Card
              variant={"deffered"}
              key={el.id}
              name={el.name}
              price={el.price}
              rating={el.rating}
              remove={() => remove(el.id)}
              addInBasket={() => addProduct(el)}
              addInDeferred={() => defferedPropduct(el)}
            />
          ))}
        </DeferredStyled>
      ) : (
        <Typography variant={"h1"}>Список отложенных товаров пуст!</Typography>
      )}
    </>
  );
};

export default Deffered;
