import Typography from "components/atoms/typography";
import Card from "components/organism/card";
import { DefaulState } from "redux/types/product";
import { ProductWrappe, Wrapp } from "./style";
import { useNavigate } from "react-router";
import { PRODUCT_ROUTE } from "consts";

interface BasketTemplateProps {
  label: string;
  product: DefaulState[];
  fetchOneProduct: (el: DefaulState) => void;
}

const BasketTemplate: React.FC<BasketTemplateProps> = ({
  label,
  product,
  fetchOneProduct,
}) => {
  let price = product.reduce((acc, el) => {
    return acc + el.price;
  }, 0);
  const navigate = useNavigate();

  const GoToProductPage = (el: DefaulState) => {
    fetchOneProduct(el);
    navigate(`/${PRODUCT_ROUTE}/${el.name}`);
  };

  return (
    <Wrapp>
      <Typography variant={"h1"} children={label} />
      <ProductWrappe>
        {product.map((el: DefaulState) => (
          <Card
            key={el.name}
            name={el.name}
            price={el.price}
            rating={el.rating}
            GoToProductPage={() => GoToProductPage(el)}
          />
        ))}
      </ProductWrappe>
    </Wrapp>
  );
};

export default BasketTemplate;
