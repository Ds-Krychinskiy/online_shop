import {
  DefaulState,
  ProductByGanreActionType,
} from "redux/types/genreProduct";

export const getProduct = (product: DefaulState[]) => {
  return (dispatch) => {
    try {
      dispatch({
        type: ProductByGanreActionType.GET_PRODUCT,
        payload: product,
      });
    } catch (e) {
      console.error(e);
    }
  };
};

export const fetchProductByGanre = (genre: string) => {
  return (dispatch) => {
    try {
      dispatch({
        type: ProductByGanreActionType.GET_PRODUCT_BY_GANRE,
        payload: genre,
      });
    } catch (e) {
      console.error(e);
    }
  };
};
