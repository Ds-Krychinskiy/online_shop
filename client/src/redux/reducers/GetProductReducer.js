const defaultState = {
  product: [],
};

const GET_PRODUCT = "GET_PRODUCT";

export const GetProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};

export const GetProductFromServer = (payload) => ({
  type: GET_PRODUCT,
  payload,
});
