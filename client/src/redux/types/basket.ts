import { DefaulState } from "./product";

export interface BasketState {
  basket_product: DefaulState[];
}

export enum BasketActionType {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}
