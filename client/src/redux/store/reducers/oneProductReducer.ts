import { oneProductActionType } from "redux/types/oneDevice";

const defaulState = {
  oneProduct: [],
  loading: false,
  error: null,
};

export const oneProductReducer = (state = defaulState, action: any) => {
  switch (action.type) {
    case oneProductActionType.GET_PRODUCT:
      return { loading: true, error: null, oneDevice: [] };
    case oneProductActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        oneProduct: action.payload,
      };
    default:
      return state;
  }
};
