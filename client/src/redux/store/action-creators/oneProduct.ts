import { oneProductActionType } from "redux/types/oneDevice";
import { DefaulState } from "redux/types/product";

export const fetchOneProduct = (product: DefaulState) => {
  return (dispatch) => {
    try {
      dispatch({
        type: oneProductActionType.GET_PRODUCT_SUCCESS,
        payload: product,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
