import { createStore } from "redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { GetProductFromServerReducer } from "./reducers/getListProductReducer.js";
import { addProductToBasketReducer } from "./reducers/basketProductReducer";
import { deferredProductReducer } from "./reducers/deferredProductReducer";

const rootReducer = combineReducers({
  get_product: GetProductFromServerReducer,
  listProductInBasket: addProductToBasketReducer,
  listDeferredProduct: deferredProductReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
