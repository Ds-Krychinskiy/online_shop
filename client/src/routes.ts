import AdminPanel from "components/pages/admin-panel";
import Basket from "components/pages/basket";
import Deferred from "components/pages/deferred";
import Product from "components/pages/product";
import Shop from "components/pages/shop";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEFERRED_ROUTE,
  PRODUCT_ROUTE,
  SHOP_ROUTE,
} from "consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: AdminPanel,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
  {
    path: DEFERRED_ROUTE,
    Component: Deferred,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: PRODUCT_ROUTE + "/:name",
    Component: Product,
  },
];
