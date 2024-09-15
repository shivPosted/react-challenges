import { useState } from "react";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Newsletter from "./pages/Newsletter";
import CockTailList from "./components/CockTailList";
import DetailsDrink from "./components/DetailsDrink";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(null);
  function handleShowDetails(id) {
    const currObj = data.find((item) => item.idDrink === id);

    setDetails(currObj);
  }

  function handleBackClick() {
    setDetails(null);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage setData={setData} setLoading={setLoading}>
              {loading ? (
                <p>Loading</p>
              ) : (
                <CockTailList
                  data={data}
                  handleShowDetails={handleShowDetails}
                />
              )}
            </HomePage>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route
          path="/details"
          element={
            <DetailsDrink details={details} handleBackClick={handleBackClick} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
