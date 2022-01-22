const defaultState = {
  basket: [],
};

const ADD_PRODUCT = "ADD_PRODUCT";

export const addProductToBasketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, basket: [...state.basket, action.payload] };
    default:
      return state;
  }
};

export const addProductToBasket = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});
