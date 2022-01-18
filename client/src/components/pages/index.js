import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { GetProductFromServer } from "../../redux/reducers/GetProductReducer";

import * as routes from "./../../routes";
import {
  GamesList,
  SchoolList,
  ListBook,
  Сhancellery,
  Remain,
} from "./../../lists.js";
import { PageWrapper } from "./style";
// import _axios from "../../axios";

import Header from "../organism/header";
import Product from "../tempates/product";
import Profile from "../tempates/profile";
import Basket from "../tempates/basket";
import Authorization from "../tempates/authorization";
import Registration from "../tempates/registration";
import AdminPanel from "../tempates/admin-panel";

const Pages = () => {
  const dispatch = useDispatch();
  const get_product = useSelector((state) => state.get_product.product);
  // React.useEffect(() => {
  //   _axios
  //     .get(``)
  //     .then((response) => dispatch(GetProductFromServer(response.data)))
  //     .catch((error) => {
  //       console.log("Sorry, Bro");
  //     });
  // }, []);
  return (
    <PageWrapper>
      <Router>
        <Header />
        <Routes>
          <Route
            path={`/${routes.Profile}`}
            element={<Profile message={"Профиль"} />}
          />
        </Routes>
        <Routes>
          <Route
            path={`/${routes.Basket}`}
            element={<Basket get_product={get_product} />}
          />
        </Routes>

        <Routes>
          <Route
            path={`/${routes.Deferred}`}
            element={<Product message={"Отложено"} />}
          />
        </Routes>
        <Routes>
          <Route
            path={`/${routes.Admin}`}
            element={<AdminPanel />}
          />
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
            <Route path={`/${el.way}`} element={<Product label={el.label} />} />
          </Routes>
        ))}
        {GamesList.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Product label={el.label} />} />
          </Routes>
        ))}
        {SchoolList.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Product label={el.label} />} />
          </Routes>
        ))}
        {Сhancellery.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Product label={el.label} />} />
          </Routes>
        ))}
        {Remain.map((el) => (
          <Routes>
            <Route path={`/${el.way}`} element={<Product label={el.label} />} />
          </Routes>
        ))}
      </Router>
    </PageWrapper>
  );
};
export default Pages;
