import { useState } from "react";
import "./style.css";
import { useRef } from "react";
import { useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header />
      <Main setData={setData} setLoading={setLoading}>
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <CockTailList data={data} />
        )}
      </Main>
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>CockTailDB</h1>
      <Nav />
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ul className="navigation-link">
        <li>
          {" "}
          <a href="">Home</a>
        </li>
        <li>
          {" "}
          <a href="">About</a>
        </li>
        <li>
          {" "}
          <a href="">NewsLetter</a>
        </li>
      </ul>
    </nav>
  );
}

function Main({ setData, children, setLoading }) {
  const [query, setQuery] = useState("");

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,
      );
      if (!res.ok) throw new Error(`Error: ${res.statusText}, ${res.status}`);

      const { drinks: data } = await res.json();
      setData(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
  }
  return (
    <main>
      <form action="none" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={input}
        />
        <button>Search</button>
      </form>
      {children}
    </main>
  );
}

function CockTailList({ data }) {
  console.log(data);
  return (
    <ul className="cocktail-list">
      {data.map((item) => (
        <DrinkCard key={item.idDrink} data={item} />
      ))}
    </ul>
  );
}

function DrinkCard({ data }) {
  const {
    idDrink: id,
    strDrink: name,
    // strCategory: category,
    strAlcoholic: alcohalic,
    strGlass: glass,
    strDrinkThumb: img,
  } = data;

  return (
    <li>
      <figure>
        <img src={img} alt={`${name}-image`} />
      </figure>
      <div className="drink-desc">
        <h2>{name}</h2>
        <p className="glass">{glass}</p>
        <div className="alcohalic">{alcohalic}</div>
        <button className="details-btn">Details</button>
      </div>
    </li>
  );
}

export default App;
