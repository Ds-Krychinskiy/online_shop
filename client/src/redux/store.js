import { createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { GetProductReducer } from "./reducers/GetProductReducer";
import { PostProductreducer } from "./reducers/PostProductReducer";

const rootReducer = combineReducers({
  get_product: GetProductReducer,
  post_product: PostProductreducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
