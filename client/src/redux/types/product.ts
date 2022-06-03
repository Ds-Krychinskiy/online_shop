export type DefaulState = {
  name: string;
  author: string;
  price: number;
  genre: string;
  rating: number;
  info: string
};

export interface ProductState {
  product: DefaulState[];
  loading: boolean;
  error: null | string;
}

export enum ProductActionType {
  GET_PRODUCT = "GET_PRODUCT",
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
}
