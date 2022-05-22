import { oneProductActionType } from "redux/types/oneDevice";

const defaulState = {
  oneDevice: [],
  loading: false,
  error: null,
};

export const oneDeviceReducer = (state = defaulState, action: any) => {
  switch (action.type) {
    case oneProductActionType.GET_PRODUCT:
      return { loading: true, error: null, oneDevice: [] };
    case oneProductActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        oneDevice: action.payload,
      };
    default:
      return state;
  }
};
