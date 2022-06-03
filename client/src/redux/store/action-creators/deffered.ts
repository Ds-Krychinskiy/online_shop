import { DefaulState } from "redux/types/product";
import { DefferedActionType } from "../../types/deffered";

export const addDefferedProduct = (el: DefaulState) => {
  return (dispatch) => {
    dispatch({ type: DefferedActionType.DEFERRED_PRODUCT, payload: el });
  };
};

export const removeProductFromDeffered = (name: string) => {
  return (dispatch) => {
    dispatch({ type: DefferedActionType.REMOVE_PRODUCT, payload: name });
  };
};
