import axios from "axios";
import { ProductActionType } from "../../types/product";

export const fetchProduct = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ProductActionType.GET_PRODUCT });
      const response = await axios.get("http://localhost:5000/api/device");
      setTimeout(() => {
        dispatch({
          type: ProductActionType.GET_PRODUCT_SUCCESS,
          payload: response.data,
        });
      }, 1500);
    } catch (e) {
      console.error(e);
    }
  };
};
