import Header from "components/organism/header";
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAction } from "redux/hooks/useAction";
import { authRoutes, publicRoutes } from "./routes";
import { PageWrapper } from "./style";
import { ListBooks } from "../src/listBook";

const App = () => {
  const { fetchProduct } = useAction();

  useEffect(() => {
    fetchProduct(ListBooks);
  }, []);

  return (
    <PageWrapper>
      <Router>
        <Header />
        {authRoutes.map(({ Component, path }) => (
          <Routes key={path}>
            <Route path={`/${path}`} element={<Component />} />
          </Routes>
        ))}
        {publicRoutes.map(({ Component, path }) => (
          <Routes key={path}>
            <Route path={`/${path}`} element={<Component />} />
          </Routes>
        ))}
      </Router>
    </PageWrapper>
  );
};

export default App;
