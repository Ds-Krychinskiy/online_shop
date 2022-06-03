import AdminPanel from "components/pages/admin-panel";
import Authorization from "components/pages/authorization";
import Basket from "components/pages/basket";
import Deferred from "components/pages/deferred";
import Product from "components/pages/product";
import Registration from "components/pages/registration";
import Shop from "components/pages/shop";
import {
  ADMIN_ROUTE,
  AUTORIZATION_ROUTE,
  BASKET_ROUTE,
  DEFERRED_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
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
];

export const publicRoutes = [
  {
    path: AUTORIZATION_ROUTE,
    Component: Authorization,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Registration,
  },
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: PRODUCT_ROUTE + "/:id",
    Component: Product,
  },
];
