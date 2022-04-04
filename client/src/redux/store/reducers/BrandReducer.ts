import { ListState } from "lists";

const defaulState = {
  brand: ListState,
};

export const BrandReducer = (state = defaulState, action: any) => {
  switch (action.type) {
    case "":
      return { ...state };
    default:
      return state;
  }
};
