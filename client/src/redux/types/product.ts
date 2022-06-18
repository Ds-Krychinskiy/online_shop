export type DefaulState = {
  name: string;
  author: string;
  price: number;
  genre: string;
  rating: number;
  info: string;
  image: string;
};

export interface ProductState {
  product: DefaulState[];
  pageSize: number;
  currentPage: number;
  totalBooksCount: number;
  loading: boolean;
  error: null | string;
}

export enum ProductActionType {
  GET_PRODUCT = "GET_PRODUCT",
  GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
  GET_PRODUCT_BY_GANRE = "GET_PRODUCT_BY_GANRE",
  GET_PRODUCT_BY_PAGE = "GET_PRODUCT_BY_PAGE",
}
