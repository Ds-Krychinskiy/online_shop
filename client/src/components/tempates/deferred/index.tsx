import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
import { DeferredStyled } from "./style";

interface IDefferedProps {
  listdefferedProduct: [];
  addProduct: (el: any) => void;
  defferedPropduct: (el: any) => void;
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
