const defaultState = {
  deferred: [],
};

const DEFERRED_PRODUCT = "DEFERRED_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const deferredProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DEFERRED_PRODUCT:
      return { ...state, deferred: [...state.deferred, action.payload] };
    case REMOVE_PRODUCT:
      return {
        ...state,
        deferred: [...state.deferred.filter((el) => el.id !== action.payload)],
      };
    default:
      return state;
  }
};

export const addProductToDeferred = (payload) => ({
  type: DEFERRED_PRODUCT,
  payload,
});
export const removeProductFromDeffered = (payload) => ({
  type: REMOVE_PRODUCT,
  payload,
});
