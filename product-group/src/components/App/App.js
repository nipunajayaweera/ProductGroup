import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './../Home/Home';
import Layout from "../../commons/Layout/layout";
import Shopping from "../Shopping/Shopping";
import NoPage from "../NoPage/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

