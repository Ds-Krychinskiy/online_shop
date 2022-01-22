import { TemplateWrapper } from "./style";
import Card from "../../organism/card/index";

const Home = ({ get_product, addProduct, deferredProduct }) => {
  return (
    <TemplateWrapper>
      {get_product.map((el) => (
        <Card
          key={el.id}
          name={el.name}
          price={el.price}
          rating={el.rating}
          addInBasket={() => addProduct(el)}
          addInDeferred={() => deferredProduct(el)}
        />
      ))}
    </TemplateWrapper>
  );
};

export default Home;
