export interface IDefaulState {
  name: string;
  price: number;
  brandId: number;
  typeID: number;
  id: number;
  rating: number;
}

const defaultState: IDefaulState[] = [];

const GET_PRODUCT = "GET_PRODUCT";

export const GetProductFromServerReducer = (
  state = defaultState,
  action: any
): IDefaulState[] => {
  switch (action.type) {
    case GET_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const GetProductFromServer = (payload: IDefaulState[]) => ({
  type: GET_PRODUCT,
  payload,
});
