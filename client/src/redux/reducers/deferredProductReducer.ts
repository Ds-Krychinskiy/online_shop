export interface IDefaulState {
  name: string;
  price: number;
  brandId: number;
  typeID: number;
  id: number;
  rating: number;
}
const defaultState: IDefaulState[] = [];

const DEFERRED_PRODUCT = "DEFERRED_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const deferredProductReducer = (
  state = defaultState,
  action: any
): IDefaulState[] => {
  switch (action.type) {
    case DEFERRED_PRODUCT:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return { ...state, ...state.filter((el) => el.id !== action.payload) };
    default:
      return state;
  }
};

export const addProductToDeferred = (payload: IDefaulState) => ({
  type: DEFERRED_PRODUCT,
  payload,
});

export const removeProductFromDeffered = (payload: number) => ({
  type: REMOVE_PRODUCT,
  payload,
});
