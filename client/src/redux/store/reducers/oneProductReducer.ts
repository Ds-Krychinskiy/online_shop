import { oneProductActionType, ProductState } from "redux/types/oneDevice";

const defaultState: ProductState = {
  oneProduct: [],
  loading: false,
  error: null,
};

export const oneProductReducer = (
  state = defaultState,
  action: any
): ProductState => {
  switch (action.type) {
    case oneProductActionType.GET_PRODUCT:
      return { loading: true, error: null, oneProduct: [] };
    case oneProductActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        oneProduct: [action.payload],
      };
    default:
      return state;
  }
};
