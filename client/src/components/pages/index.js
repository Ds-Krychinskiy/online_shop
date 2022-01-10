import Header from "../organism/header";
import Product from "../tempates/product";
import Profile from "../tempates/profile";
import Basket from "../tempates/basket";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as routes from "./../../routes";
import {
  GamesList,
  SchoolList,
  ListBook,
  Сhancellery,
  Remain,
} from "./../../lists.js";
import { PageWrapper } from "./style";

const Pages = () => {
  return (
    <PageWrapper>
      <Router>
        <Header />
        <Routes>
          <Route
            path={`/${routes.Basket}`}
            element={<Basket message={"саламуля"} />}
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
            path={`/${routes.Deferred}`}
            element={<Product message={"Отложено"} />}
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
      </Router>
    </PageWrapper>
  );
};
export default Pages;
