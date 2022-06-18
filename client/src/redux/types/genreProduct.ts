export type DefaulState = {
  name: string;
  author: string;
  price: number;
  genre: string;
  rating: number;
  info: string;
  image: string;
};

export interface ProductGanreState {
  productByGenre: DefaulState[];
  loading: boolean;
  error: null | string;
}

export enum ProductByGanreActionType {
  GET_PRODUCT = "GET_PRODUCT",
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_BY_GANRE = "GET_PRODUCT_BY_GANRE",
}
