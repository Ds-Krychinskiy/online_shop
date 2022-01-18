const defaultState = {
  name: "",
  price: "",
  brand: "",
  img: "",
};

const POST_PRODUCT = "POST_PRODUCT";

export const PostProductreducer = (state = defaultState, action) => {
  switch (action.type) {
    case POST_PRODUCT:
      return {
        ...state,
        name: action.payload.name,
        price: action.payload.price,
      };
    default:
      return state;
  }
};

export const PostProductToServer = (payload) => ({
  type: POST_PRODUCT,
  payload
});
