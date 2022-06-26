import TemplatesProduct from "components/temlates/list_products";
import { useLocation } from "react-router";
import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useAction } from "../../../redux/hooks/useAction";
import { ListBooks } from "listBook";
import { useEffect } from "react";

const Shop = () => {
  const location = useLocation();
  const { fetchProduct } = useAction();

  const { product, loading, error, pageSize, totalBooksCount } =
    useTypedSelector((state) => state.listProduct);

  const { addDefferedProduct, addToBasketProduct, fetchOneProduct, fetchProductByPages} =
    useAction();

  useEffect(() => {
    fetchProduct(ListBooks);
  }, [location]);

  let pagesCount = Math.ceil(totalBooksCount / pageSize);

  let pages: number[] = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <TemplatesProduct
      label={"Выберите книгу ;)"}
      product={product}
      fetchOneProduct={fetchOneProduct}
      pages={pages}
      pageNavigation={fetchProductByPages}
      onClick={addToBasketProduct}
      onClick2={addDefferedProduct}
    />
  );
};
export default Shop;
