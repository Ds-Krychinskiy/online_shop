import axios from "axios";
import { oneProductActionType } from "redux/types/oneDevice";

export const fetchOneProduct = (id: number) => {
  return async (dispatch) => {
    try {
      dispatch({ type: oneProductActionType.GET_PRODUCT });
      const response = await axios.get(
        `http://localhost:5000/api/device/${id}`
      );
      // setTimeout(() => {
      //   dispatch({
      //     type: oneProductActionType.GET_PRODUCT_SUCCESS,
      //     payload: response.data,
      //   });
      // }, 1500);
    } catch (e) {
      console.error(e);
    }
  };
};
