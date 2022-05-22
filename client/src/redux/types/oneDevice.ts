export type DefaulState = {
  name: string;
  price: number;
  brandId: number;
  typeID: number;
  id: number;
  rating: number;
};

export interface ProductState {
  oneDevice: DefaulState[];
  loading: boolean;
  error: null | string;
}

export enum oneProductActionType {
  GET_PRODUCT = "GET_PRODUCT",
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
}
