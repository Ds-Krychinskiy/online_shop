import { oneProductActionType } from "redux/types/oneDevice";
import { DefaulState } from "redux/types/product";

export const fetchOneProduct = (el: DefaulState) => {
  return (dispatch) => {
    try {
      dispatch({ type: oneProductActionType.GET_PRODUCT });

      setTimeout(() => {
        dispatch({
          type: oneProductActionType.GET_PRODUCT_SUCCESS,
          payload: el,
        });
      }, 1500);
    } catch (e) {
      console.error(e);
    }
  };
};
