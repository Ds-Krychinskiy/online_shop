export type DefaulState = {
  name: string;
  price: number;
  brandId: number;
  typeID: number;
  id: number;
  rating: number;
};

export interface BasketState {
  basket_product: DefaulState[];
}

export enum BasketActionType {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
}
