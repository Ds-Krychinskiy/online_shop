import Card from "../../organism/card/index";

interface IHomeProps{
  get_product: [];
  addProduct: (el: any) => void;
  defferedPropduct: (el: any) => void;
}

const Home: React.FC<IHomeProps> = ({ get_product, addProduct, defferedPropduct }) => {
  return (
      {get_product.map((el) => (
        <Card
        variant={"general"}
          key={el.id}
          name={el.name}
          price={el.price}
          rating={el.rating}
          addInBasket={() => addProduct(el)}
          addInDeferred={() => defferedPropduct(el)}
        />
      ))}
  );
};

export default Home;
