import { DefaulState } from "redux/types/product";
import { BasketActionType } from "../../types/basket";

export const addToBasketProduct = (el: DefaulState) => {
  return (dispatch) => {
    dispatch({ type: BasketActionType.ADD_PRODUCT, payload: el });
  };
};

export const removeProductFormBasket = (name: string) => {
  return (dispatch) => {
    dispatch({ type: BasketActionType.REMOVE_PRODUCT, payload: name });
  };
};
