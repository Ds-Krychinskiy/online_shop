import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
import { DeferredStyled } from "./style";

const Deffered = ({ defferedProduct, addProduct, deferredProduct, remove }) => {
  return (
    <DeferredStyled>
      {defferedProduct.length > 0 ? (
        <>
          {defferedProduct.map((el) => (
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
        </>
      ) : (
        <Typography>Список отложенных товаров пуст!</Typography>
      )}
    </DeferredStyled>
  );
};

export default Deffered;
