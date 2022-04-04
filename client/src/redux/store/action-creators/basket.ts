import { BasketActionType, DefaulState } from "../../types/basket";

export const addToBasketProduct = (el: DefaulState) => {
  return (dispatch) => {
    dispatch({ type: BasketActionType.ADD_PRODUCT, payload: el });
  };
};

export const removeProductFormBasket = (el: number) => {
  return (dispatch) => {
    console.log(el);
    dispatch({ type: BasketActionType.REMOVE_PRODUCT, payload: el });
  };
};
