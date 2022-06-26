import { ProductState, ProductActionType } from "../../types/product";

const defaultState: ProductState = {
  product: [],
  pageSize: 10,
  currentPage: 1,
  totalBooksCount: 0,
  loading: false,
  error: null,
};

export const ProductReducer = (
  state = defaultState,
  action: any
): ProductState => {
  switch (action.type) {
    case ProductActionType.GET_PRODUCT:
      return { ...state, loading: true };
    case ProductActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload.product,
        totalBooksCount: action.payload.totalBooksCount,
      };
    case ProductActionType.GET_PRODUCT_BY_PAGE:
      return {
        ...state,
        product: state.product.filter(( el, index) =>  
          index > state.pageSize * action.payload.index && index < state.pageSize * action.payload.pagesCount
        ),
      };
    default:
      return state;
  }
};
