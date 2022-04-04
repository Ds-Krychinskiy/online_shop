import { ListType } from "lists";

const defaulState = {
  types: ListType,
};

export const TypeReducer = (state = defaulState, action: any) => {
  switch (action.type) {
    case "":
      return { ...state };
    default:
      return state;
  }
};
