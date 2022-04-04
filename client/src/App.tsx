import Header from "components/organism/header";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";

import {
  PageWrapper,
  Container,
  ComponentWrapper,
  ProductWrapper,
} from "./style";

const App = () => {
  return (
    <PageWrapper>
      <Router>
        <Header />
        <Container>
          {authRoutes.map(({ Component, path }) => (
            <Routes key={path}>
              <Route
                path={`/${path}`}
                element={
                  <ComponentWrapper>
                    <ProductWrapper>
                      <Component />
                    </ProductWrapper>
                  </ComponentWrapper>
                }
              />
            </Routes>
          ))}
          {publicRoutes.map(({ Component, path }) => (
            <Routes key={path}>
              <Route
                path={`/${path}`}
                element={
                  <ComponentWrapper>
                    <ProductWrapper>
                      <Component />
                    </ProductWrapper>
                  </ComponentWrapper>
                }
              />
            </Routes>
          ))}
        </Container>
      </Router>
    </PageWrapper>
  );
};

export default App;
