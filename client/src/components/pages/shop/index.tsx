import Typography from "components/atoms/typography";
import Card from "components/organism/card";
import { PRODUCT_ROUTE } from "consts";
import { useCallback } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { DefaulState } from "redux/types/product";
import { useAction } from "../../../redux/hooks/useAction";

// import { useTypedSelector } from "../../redux/hooks/useTypedSelector";
// import { DefaulState } from "../../redux/types/basket";

const Shop = () => {
  const { product, loading, error } = useTypedSelector(
    (state) => state.listProduct
  );
  const { fetchProduct, addDefferedProduct, addToBasketProduct } = useAction();

  const navigate = useNavigate();

  const GoToProductPage = useCallback((id: number) => {
    navigate(`${PRODUCT_ROUTE}/${id}`);
  }, []);

  const fetchProductFromServer = useCallback(() => {
    fetchProduct()
  }, []);


  useEffect(() => {
    fetchProductFromServer()
  }, []);

  return (
    <>
      {loading === false ? (
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
      ) : (
        <Typography variant={"h1"}>Идёт загрузка...</Typography>
      )}
    </>
  );
};
export default Shop;
