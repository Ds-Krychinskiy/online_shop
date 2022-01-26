import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";
import { DeferredWrapper, DeferredStyled } from "./style";

const Deffered = ({ defferedProduct, addProduct, deferredProduct, remove }) => {
  return (
    <DeferredWrapper>
      <Typography>Отложенные товары</Typography>

      {defferedProduct.length > 0 ? (
        <DeferredStyled>
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
        </DeferredStyled>
      ) : (
        <Typography>Список отложенных товаров пуст!</Typography>
      )}
    </DeferredWrapper>
  );
};

export default Deffered;
