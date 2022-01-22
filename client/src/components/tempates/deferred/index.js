import Card from "../../organism/card/index";

const Deffered = ({ defferedProduct, addProduct, deferredProduct }) => {
  return (
    <div>
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
    </div>
  );
};

export default Deffered;
