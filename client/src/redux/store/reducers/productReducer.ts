import { ProductState, ProductActionType } from "../../types/product";

const defaultState: ProductState = {
  product: [],
  loading: false,
  error: null,
};

export const ProductReducer = (
  state = defaultState,
  action: any
): ProductState => {
  switch (action.type) {
    case ProductActionType.GET_PRODUCT:
      return { loading: true, error: null, product: [] };
    case ProductActionType.GET_PRODUCT_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload };
    default:
      return state;
  }
};
