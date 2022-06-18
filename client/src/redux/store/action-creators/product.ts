import { DefaulState, ProductActionType } from "../../types/product";

export const fetchProduct = (product: DefaulState[]) => {
  return (dispatch) => {
    try {
      dispatch({
        type: ProductActionType.GET_PRODUCT_SUCCESS,
        payload: {
          product,
          totalBooksCount: product.length,
        },
      });
    } catch (e) {
      console.error(e);
    }
  };
};
