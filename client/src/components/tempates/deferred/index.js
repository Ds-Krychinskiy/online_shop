import Card from "../../organism/card/index";
import Typography from "../../atoms/typography/index";

const Deffered = ({ defferedProduct, addProduct, deferredProduct }) => {
  return (
    <div>
      {defferedProduct.length > 0 ? (
        <>
          {defferedProduct.map((el) => (
            <Card
              variant={"deffered"}
              key={el.id}
              name={el.name}
              price={el.price}
              rating={el.rating}
              addInBasket={() => addProduct(el)}
              addInDeferred={() => deferredProduct(el)}
            />
          ))}
        </>
      ) : (
        <Typography>Список отложенных товаров пуст!</Typography>
      )}
    </div>
  );
};

export default Deffered;
