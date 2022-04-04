const defaultState = {
  isAuth: false,
  user: {},
};

export const UserReducer = (state, action: any) => {
  switch (action.type) {
    case "":
      return { ...state };
    default:
      return state;
  }
};
