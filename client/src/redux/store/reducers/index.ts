import { combineReducers } from "redux";
import { BasketReducer } from "./basketProductReducer";
import { deferredProductReducer } from "./deferredProductReducer";
import { DeviceReducer } from "./DeviceReducer";
import { BrandReducer } from "./BrandReducer";
import { TypeReducer } from "./TypeReducer";
import { ProductReducer } from "./productReducer";
import { oneProductReducer } from "./oneProductReducer";

export const rootReducer = combineReducers({
  listProduct: ProductReducer,
  listProductInBasket: BasketReducer,
  listDeferredProduct: deferredProductReducer,
  oneProduct: oneProductReducer,
  deviceStore: DeviceReducer,
  brandStore: BrandReducer,
  typeStore: TypeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
