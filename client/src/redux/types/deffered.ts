export type DefaulState = {
  name: string;
  price: number;
  brandId: number;
  typeID: number;
  id: number;
  rating: number;
};

export interface ProductState {
  deffered_product: DefaulState[];
  loading: boolean;
}

export enum DefferedActionType {
  DEFERRED_PRODUCT = "DEFERRED_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}
