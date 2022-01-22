import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GetProductFromServer } from "../../redux/reducers/getListProductReducer.js";
import { addProductToBasket } from "../../redux/reducers/basketProductReducer";
import { addProductToDeferred } from "../../redux/reducers/deferredProductReducer";

import * as routes from "./../../routes";
import {
  GamesList,
  SchoolList,
  ListBook,
  Сhancellery,
  Remain,
} from "./../../lists.js";
import { PageWrapper } from "./style";
import _axios from "../../axios";

import Header from "../organism/header/index";
import Profile from "../tempates/profile/index";
import Basket from "../tempates/basket/index";
import Authorization from "../tempates/authorization";
import Registration from "../tempates/registration";
import AdminPanel from "../tempates/admin-panel";
import Deffered from "../tempates/deferred/index";
import Home from "../tempates/home/index";

const Pages = () => {
  const dispatch = useDispatch();

  const get_product = useSelector((state) => state.get_product.product);

  const listProductInBasket = useSelector(
    (state) => state.listProductInBasket.basket
  );

  const defferedProduct = useSelector(
    (state) => state.listDeferredProduct.deferred
  );

  React.useEffect(() => {
    _axios
      .get(``)
      .then((response) => dispatch(GetProductFromServer(response.data)))
      .catch((error) => {
        console.log("Sorry, Bro");
      });
  }, []);

  const addProduct = (el) => {
    dispatch(addProductToBasket(el));
  };
  const deferredProduct = (el) => {
    dispatch(addProductToDeferred(el));
  };

  console.log(defferedProduct);
  return (
    <PageWrapper>
      <Router>
        <Header />
        <Routes>
          <Route
            path={"/"}
            element={
              <Home
                get_product={get_product}
                addProduct={addProduct}
                deferredProduct={deferredProduct}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path={`/${routes.Profile}`}
            element={<Profile message={"Профиль"} />}
          />
        </Routes>
        <Routes>
          <Route
            path={`/${routes.Basket}`}
            element={<Basket product={listProductInBasket} />}
          />
        </Routes>

        <Routes>
          <Route
            path={`/${routes.Deferred}`}
            element={
              <Deffered
                defferedProduct={defferedProduct}
                addProduct={addProduct}
                deferredProduct={deferredProduct}
              />
            }
          />
        </Routes>
        <Routes>
          <Route path={`/${routes.Admin}`} element={<AdminPanel />} />
        </Routes>
        <Routes>
          <Route
            path={`/${routes.Authorization}`}
            element={<Authorization />}
          />
        </Routes>
        <Routes>
          <Route path={`/${routes.Registration}`} element={<Registration />} />
        </Routes>

        {ListBook.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Home label={el.label} />} />
          </Routes>
        ))}
        {GamesList.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Home label={el.label} />} />
          </Routes>
        ))}
        {SchoolList.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Home label={el.label} />} />
          </Routes>
        ))}
        {Сhancellery.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Home label={el.label} />} />
          </Routes>
        ))}
        {Remain.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Home label={el.label} />} />
          </Routes>
        ))}
      </Router>
    </PageWrapper>
  );
};
export default Pages;
