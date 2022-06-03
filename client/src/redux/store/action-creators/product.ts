import {  ProductActionType } from "../../types/product";

export const fetchProduct = (product) => {
  return  (dispatch) => {
    try {
      dispatch({ type: ProductActionType.GET_PRODUCT });
      setTimeout(() => {
        dispatch({
          type: ProductActionType.GET_PRODUCT_SUCCESS,
          payload: product,
        });
      }, 1500);
    } catch (e) {
      console.error(e);
    }
  };
};
