import { useState } from "react";
import "./style.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import CockTailList from "./components/CockTailList";
import DetailsDrink from "./components/DetailsDrink";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Outlet />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage setData={setData} setLoading={setLoading}>
                {loading ? <p>Loading</p> : <CockTailList data={data} />}
              </HomePage>
            }
          >
            <Route path=":id" element={<DetailsDrink data={data} />} />{" "}
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
