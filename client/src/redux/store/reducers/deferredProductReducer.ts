import { ProductState, DefferedActionType } from "./../../types/deffered";

const defaultState: ProductState = {
  deffered_product: [],
  loading: false,
};

export const deferredProductReducer = (
  state = defaultState,
  action: any
): ProductState => {
  switch (action.type) {
    case DefferedActionType.DEFERRED_PRODUCT:
      return {
        ...state,
        deffered_product: [...state.deffered_product, action.payload],
      };
    case DefferedActionType.REMOVE_PRODUCT:
      return {
        ...state,
        deffered_product: state.deffered_product.filter(
          (el) => el.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
