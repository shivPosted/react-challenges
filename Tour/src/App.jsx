import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function fetchTourData() {
    setIsLoading(true);
    try {
      const res = await fetch("https://www.course-api.com/react-tours-project");
      if (!res.ok) throw new Error(`Error: ${res.statusText}`);

      const data = await res.json();

      setData(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchTourData();
  }, []);

  function handleRemoveFromList(id) {
    setData((arr) => arr.filter((item) => item.id !== id));
  }

  return (
    <>
      <Title data={data} />
      <main>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : data.length === 0 ? (
          <button className="refresh-btn" onClick={fetchTourData}>
            Refresh
          </button>
        ) : (
          <TourList data={data} handleRemove={handleRemoveFromList} />
        )}
      </main>
    </>
  );
}

function Title({ data }) {
  return (
    <div className="title">
      <h1>{data.length === 0 ? "No tours Left" : "Our Tours"}</h1>
      <div className="title-underline"></div>
    </div>
  );
}

function TourList({ data, handleRemove }) {
  return (
    <ul className="tour-list">
      {data.map((data) => (
        <TourCard key={data.id} data={data} handleRemove={handleRemove} />
      ))}
    </ul>
  );
}

function TourCard({ data, handleRemove }) {
  const [showDetails, setShowDetails] = useState(false);

  const tourDetails = showDetails
    ? data.info
    : data.info.split(" ").slice(0, 15).join(" ") + "...";

  return (
    <li>
      <img src={data.image} alt={`image-${data.title}`} />
      <div className="tour-info">
        <h2>{data.name}</h2>
        <p>
          {tourDetails}
          <span
            className="handle-hide-show"
            onClick={() => setShowDetails((cur) => !cur)}
          >
            {showDetails ? "show less" : "show more"}
          </span>
        </p>
        <button onClick={() => handleRemove(data.id)}>Not Interested</button>
      </div>
      <span className="price-tag">{`$ ${data.price}`}</span>
    </li>
  );
}

export default App;
