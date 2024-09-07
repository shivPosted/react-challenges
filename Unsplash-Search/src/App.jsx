import { useEffect, useState } from "react";
import "./style.css";

const API_KEY = "88SJYI2uba7mEDzC3v-8kbOQyTh7WMNVQ5nICvcJxok";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Header setData={setData} setIsLoading={setIsLoading} />
      {isLoading ? <p className="loading">Loading...</p> : <Main data={data} />}
    </>
  );
}

function Header({ setData, setIsLoading }) {
  const [query, setQuery] = useState("cat");

  async function fetchData() {
    if (!query) return;
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${query}`,
      );
      if (!res.ok) throw new Error(`Error: ${res.statusText}`);
      const data = await res.json();
      const imgArr = data.results.map((item) => item.urls.full);
      console.log(imgArr);
      setData(imgArr);
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header>
      <h1>Unsplash Search</h1>
      <form
        action="/none"
        onSubmit={(e) => {
          e.preventDefault();
          fetchData();
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search-btn">Search</button>
      </form>
    </header>
  );
}

function Main({ data }) {
  return (
    <ul className="search-result">
      {data.map((link, i) => (
        <SingleImg link={link} key={i} />
      ))}
    </ul>
  );
}

function SingleImg({ link }) {
  return (
    <li>
      <img loading="lazy" src={link} alt={"cat-image"} />
    </li>
  );
}

export default App;
