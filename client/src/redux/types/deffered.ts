import { DefaulState } from "./product";

export interface ProductState {
  deffered_product: DefaulState[];
  loading: boolean;
}

export enum DefferedActionType {
  DEFERRED_PRODUCT = "DEFERRED_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}
