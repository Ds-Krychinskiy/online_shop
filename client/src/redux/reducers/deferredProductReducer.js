const defaultState = {
  deferred: [],
};

const DEFERRED_PRODUCT = "DEFERRED_PRODUCT";

export const deferredProductReducer = (state = defaultState, action) => {
  switch (action.type) {
    case DEFERRED_PRODUCT:
      return { ...state, deferred: [...state.deferred, action.payload] };
    default:
      return state;
  }
};

export const addProductToDeferred = (payload) => ({
  type: DEFERRED_PRODUCT,
  payload,
});
