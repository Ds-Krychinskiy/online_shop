import Typography from "components/atoms/typography";
import Card from "components/organism/card";
import { PRODUCT_ROUTE } from "consts";
import { useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { DefaulState } from "redux/types/product";
import { useAction } from "../../../redux/hooks/useAction";

const Shop = () => {
  const { product, loading, error } = useTypedSelector(
    (state) => state.listProduct
  );
  const {
    fetchProduct,
    addDefferedProduct,
    addToBasketProduct,
    fetchOneProduct,
  } = useAction();

  const navigate = useNavigate();

  const GoToProductPage = useCallback((id: number) => {
    fetchOneProduct(id);
    navigate(`${PRODUCT_ROUTE}/${id}`);
  }, []);

  const fetchProductFromServer = useCallback(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    fetchProductFromServer();
  }, []);

  return (
    <>
      {loading ? (
        <Typography variant={"h1"}>Идёт загрузка...</Typography>
      ) : (
        <>
          {product.map((el: DefaulState) => (
            <Card
              key={el.id}
              name={el.name}
              price={el.price}
              rating={el.rating}
              variant={"base"}
              addProduct={() => addToBasketProduct(el)}
              defferedPropduct={() => addDefferedProduct(el)}
              onClick={() => GoToProductPage(el.id)}
            />
          ))}
        </>
      )}
    </>
  );
};
export default Shop;
