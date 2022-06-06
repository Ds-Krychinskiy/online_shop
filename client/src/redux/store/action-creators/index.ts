import * as ProductActionCreater from "./product";
import * as DefferedActionCreater from "./deffered";
import * as BasketActionCreater from "./basket";
import * as oneDeviceActionCreater from "./oneProduct";
export default {
  ...ProductActionCreater,
  ...DefferedActionCreater,
  ...BasketActionCreater,
  ...oneDeviceActionCreater,
};
