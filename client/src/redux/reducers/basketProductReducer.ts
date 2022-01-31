const defaultState = {
  basket: [],
};

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProductToBasketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, basket: [...state.basket, action.payload] };
    case REMOVE_PRODUCT:
      return {
        ...state,
        basket: [...state.basket.filter((el) => el.id !== action.payload)],
      };
    default:
      return state;
  }
};

export const addProductToBasket = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const removeProductFromBasket = (payload) => ({
  type: REMOVE_PRODUCT,
  payload,
});
