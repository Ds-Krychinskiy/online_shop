import { DefferedActionType, DefaulState } from "../../types/deffered";

export const addDefferedProduct = (el: DefaulState) => {
  return (dispatch) => {
    dispatch({ type: DefferedActionType.DEFERRED_PRODUCT, payload: el });
  };
};

export const removeProductFromDeffered = (el: number) => {
  return (dispatch) => {
    dispatch({ type: DefferedActionType.REMOVE_PRODUCT, payload: el });
  };
};
