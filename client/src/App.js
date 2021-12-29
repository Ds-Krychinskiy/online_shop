import Header from "./components/organism/header";
import Message from "./components/pages/message";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import * as routes from "./routes";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path={`/${routes.Message}`} element={<Message />} />

        </Routes>
      </Router>
    </>
  );
};

export default App;
