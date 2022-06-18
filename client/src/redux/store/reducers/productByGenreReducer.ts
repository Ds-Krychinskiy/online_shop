import {
  ProductByGanreActionType,
  ProductGanreState,
} from "redux/types/genreProduct";

const defaultState: ProductGanreState = {
  productByGenre: [],
  loading: false,
  error: null,
};

export const ProductByGenreReducer = (
  state = defaultState,
  action: any
): ProductGanreState => {
  switch (action.type) {
    case ProductByGanreActionType.GET_PRODUCT:
      return {
        ...state,
        loading: false,
        error: null,
        productByGenre: action.payload,
      };
    case ProductByGanreActionType.GET_PRODUCT_BY_GANRE:
      return {
        ...state,
        loading: false,
        error: null,
        productByGenre: state.productByGenre.filter(
          (el) => el.genre === action.payload
        ),
      };
    default:
      return state;
  }
};
