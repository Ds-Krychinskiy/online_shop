import Header from "components/organism/header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authRoutes } from "./routes";
import { PageWrapper } from "./style";
import { ListType } from "lists";
import GanrePage from "components/pages/GanrePage";

const App = () => {
  return (
    <PageWrapper>
      <Router>
        <Header />
        {authRoutes.map(({ Component, path }) => (
          <Routes key={path}>
            <Route path={`/${path}`} element={<Component />} />
          </Routes>
        ))}
        {ListType.map((el) =>
          el.list.map((e) => (
            <Routes key={e.way}>
              <Route path={`/${e.way}`} element={<GanrePage />} />
            </Routes>
          ))
        )}
      </Router>
    </PageWrapper>
  );
};

export default App;
