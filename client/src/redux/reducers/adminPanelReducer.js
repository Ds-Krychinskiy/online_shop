const defaultState = {
  name: "",
  price: "",
  brand: "",
  img: "",
};

const ADD_PRODUCT = "ADD_PRODUCT";
const POST_PRODUCT = "POST_PRODUCT";

export const addProductToServerReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        name: action.payload.name,
        price: action.payload.price,
      };
      case POST_PRODUCT:
      return {
        ...state,
        name: "",
        price: ""
      };
    default:
      return state;
  }
};

export const addProductToServer = (payload) => ({
  type: ADD_PRODUCT,
  payload,
});

export const PostProductToServer = (payload) => ({
  type: POST_PRODUCT,
  payload,
})
