import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GetProductFromServer } from "../../redux/reducers/getListProductReducer";
import { addProductToBasket } from "../../redux/reducers/basketProductReducer";
import { addProductToDeferred } from "../../redux/reducers/deferredProductReducer";
import { removeProductFromBasket } from "../../redux/reducers/basketProductReducer";
import { removeProductFromDeffered } from "../../redux/reducers/deferredProductReducer";
import * as routes from "../../routes";
import {
  GamesList,
  SchoolList,
  ListBook,
  Сhancellery,
  Remain,
} from "./../../lists";
import { PageWrapper, Container, ComponentWrapper } from "./style";
import _axios from "../../axios";

import Header from "../organism/header/index";
import Profile from "../tempates/profile/index";
import Product from "../tempates/product/index";
import Basket from "../tempates/basket/index";
import Authorization from "../tempates/authorization";
import Registration from "../tempates/registration";
import AdminPanel from "../tempates/admin-panel";
import Deffered from "../tempates/deferred/index";
import Home from "../tempates/home/index";

import { IDefaulState } from "../../redux/reducers/getListProductReducer";

const Pages = () => {
  const dispatch = useDispatch();

  const get_product = useSelector((state: IDefaulState[]) => state);

  const listProductInBasket = useSelector((state: IDefaulState[]) => state);

  const listdefferedProduct = useSelector((state: IDefaulState[]) => state);

  React.useEffect(() => {
    _axios
      .get(`/device`)
      .then((response) => dispatch(GetProductFromServer(response.data)))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addProduct = (el: IDefaulState) => {
    dispatch(addProductToBasket(el));
  };
  const defferedPropduct = (el: IDefaulState) => {
    dispatch(addProductToDeferred(el));
  };

  const removeProduct = (el: number) => {
    dispatch(removeProductFromBasket(el));
  };

  const deleteProduct = (el: number) => {
    dispatch(removeProductFromDeffered(el));
  };
  return (
    <PageWrapper>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route
              path={"/"}
              element={
                <ComponentWrapper>
                  <Home
                    get_product={get_product}
                    addProduct={addProduct}
                    defferedPropduct={defferedPropduct}
                  />
                </ComponentWrapper>
              }
            />
          </Routes>
          <Routes>
            <Route
              path={`/${routes.Profile}`}
              element={
                <ComponentWrapper>
                  <Profile />
                </ComponentWrapper>
              }
            />
          </Routes>
          <Routes>
            <Route
              path={`/${routes.Basket}`}
              element={
                <ComponentWrapper>
                  <Basket
                    product={listProductInBasket}
                    remove={removeProduct}
                  />
                </ComponentWrapper>
              }
            />
          </Routes>

          <Routes>
            <Route
              path={`/${routes.Deferred}`}
              element={
                <ComponentWrapper>
                  <Deffered
                    remove={deleteProduct}
                    listdefferedProduct={listdefferedProduct}
                    addProduct={addProduct}
                    defferedPropduct={defferedPropduct}
                  />
                </ComponentWrapper>
              }
            />
          </Routes>

          <Routes>
            <Route
              path={`/${routes.Admin}`}
              element={
                <ComponentWrapper>
                  <AdminPanel />
                </ComponentWrapper>
              }
            />
          </Routes>

          <Routes>
            <Route
              path={`/${routes.Authorization}`}
              element={
                <ComponentWrapper>
                  <Authorization />
                </ComponentWrapper>
              }
            />
          </Routes>
          <Routes>
            <Route
              path={`/${routes.Registration}`}
              element={
                <ComponentWrapper>
                  <Registration />
                </ComponentWrapper>
              }
            />
          </Routes>

          {ListBook.map((el) => (
            <Routes>
              <Route
                path={`/${el.way}`}
                element={<Product label={el.label} />}
              />
            </Routes>
          ))}
          {GamesList.map((el) => (
            <Routes>
              <Route
                path={`/${el.way}`}
                element={<Product label={el.label} />}
              />
            </Routes>
          ))}
          {SchoolList.map((el) => (
            <Routes>
              <Route
                path={`/${el.way}`}
                element={<Product label={el.label} />}
              />
            </Routes>
          ))}
          {Сhancellery.map((el) => (
            <Routes>
              <Route
                path={`/${el.way}`}
                element={<Product label={el.label} />}
              />
            </Routes>
          ))}
          {Remain.map((el) => (
            <Routes>
              <Route
                path={`/${el.way}`}
                element={<Product label={el.label} />}
              />
            </Routes>
          ))}
        </Container>
      </Router>
    </PageWrapper>
  );
};
export default Pages;
