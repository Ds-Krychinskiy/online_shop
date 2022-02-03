export interface IDefaulState {
  name: string;
  price: number;
  brandId: number;
  typeID: number;
  id: number;
  rating: number;
}
const defaultState: IDefaulState[] = [];

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const addProductToBasketReducer = (
  state = defaultState,
  action: any
): IDefaulState[] => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return { ...state, ...state.filter((el) => el.id !== action.payload) };
    default:
      return state;
  }
};

export const addProductToBasket = (payload: IDefaulState) => ({
  type: ADD_PRODUCT,
  payload,
});

export const removeProductFromBasket = (payload: number) => ({
  type: REMOVE_PRODUCT,
  payload,
});
