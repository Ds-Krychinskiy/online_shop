import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
import { DeferredStyled } from "./style";

const Deffered = ({
  listdefferedProduct,
  addProduct,
  deferredProduct,
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
              addInDeferred={() => deferredProduct(el)}
            />
          ))}
        </DeferredStyled>
      ) : (
        <Typography>Список отложенных товаров пуст!</Typography>
      )}
    </>
  );
};

export default Deffered;
