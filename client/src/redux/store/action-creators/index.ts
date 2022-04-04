import * as ProductActionCreater from "./product";
import * as DefferedActionCreater from "./deffered";
import * as BasketActionCreater from "./basket";
export default {
  ...ProductActionCreater,
  ...DefferedActionCreater,
  ...BasketActionCreater,
};
