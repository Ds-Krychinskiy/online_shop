import Card from "../../organism/card/index";
import { IDefaulState } from "../../../redux/reducers/getListProductReducer";

interface IHomeProps {
  get_product: IDefaulState[];
  addProduct: (el: IDefaulState) => void;
  defferedPropduct: (el: IDefaulState) => void;
}

const Home: React.FC<IHomeProps> = ({
  get_product,
  addProduct,
  defferedPropduct,
}) => {
  return (
    <>
      {get_product.map((el: IDefaulState) => (
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
      ;
    </>
  );
};

export default Home;
