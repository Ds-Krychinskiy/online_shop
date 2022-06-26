import { useTypedSelector } from "redux/hooks/useTypedSelector";
import { useAction } from "redux/hooks/useAction";
import TemplatesProduct from "components/temlates/list_products";

const Deferred = () => {
  const { deffered_product } = useTypedSelector(
    (state) => state.listDeferredProduct
  );

  const { removeProductFromDeffered, addToBasketProduct, fetchOneProduct, fetchProductByPages } =
    useAction();

  let pages: number[] = [];

  return (
    <TemplatesProduct
pageNavigation={fetchProductByPages}
      label={"Отложенные книги."}
      fetchOneProduct={fetchOneProduct}
      product={deffered_product}
      pages={pages}
      onClick={addToBasketProduct}
      onClick2={() => console.log()}
    />
  );
};

export default Deferred;
