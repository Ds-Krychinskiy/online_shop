import { DefaultState } from "../../types/device";

const defaulState: DefaultState = {
  device: [],
};

export const DeviceReducer = (
  state = defaulState,
  action: any
): DefaultState => {
  switch (action.type) {
    case "":
      return { ...state };
    default:
      return state;
  }
};
