import { BasketActionType, BasketState } from "../../types/basket";

const defaultState: BasketState = {
  basket_product: [],
};

export const BasketReducer = (
  state = defaultState,
  action: any
): BasketState => {
  switch (action.type) {
    case BasketActionType.ADD_PRODUCT:
      return {
        ...state,
        basket_product: [...state.basket_product, action.payload],
      };
    case BasketActionType.REMOVE_PRODUCT:
      return {
        ...state,
        basket_product: state.basket_product.filter(
          (el) => el.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
