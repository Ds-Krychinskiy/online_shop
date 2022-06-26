import TemplatesProduct from "components/temlates/list_products";
import { ListBooks } from "listBook";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { useAction } from "redux/hooks/useAction";
import { useTypedSelector } from "redux/hooks/useTypedSelector";

const GanrePage = () => {
  const location = useLocation();
  const {
    fetchProductByGanre,
    addToBasketProduct,
    addDefferedProduct,
    getProduct,
    fetchOneProduct,fetchProductByPages
  } = useAction();

  const { productByGenre } = useTypedSelector((state) => state.productByGenre);
  const name = location.pathname.slice(1);

  useEffect(() => {
    getProduct(ListBooks);
    fetchProductByGanre(name);
  }, [location]);

  let pages: number[] = [];

  return (
    <TemplatesProduct
      label={"Work"}
      pageNavigation={fetchProductByPages}
      product={productByGenre}
      fetchOneProduct={fetchOneProduct}
      pages={pages}
      onClick={addToBasketProduct}
      onClick2={addDefferedProduct}
    />
  );
};

export default GanrePage;
