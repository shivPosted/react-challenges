import { useState } from "react";
import "./style.css";
import { useRef } from "react";
import { useEffect } from "react";
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
    <>
      <Header />
      {details ? (
        <DetailsDrink details={details} handleBackClick={handleBackClick} />
      ) : (
        <Main setData={setData} setLoading={setLoading}>
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            <CockTailList data={data} handleShowDetails={handleShowDetails} />
          )}
        </Main>
      )}
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

  useEffect(() => {
    fetchData();
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
      console.log(data);
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

function CockTailList({ data, handleShowDetails }) {
  const drinksData = data ? data : "Drink Not Found";

  return !data ? (
    <p className="message">{drinksData}</p>
  ) : (
    <ul className="cocktail-list">
      {drinksData.map((item) => (
        <DrinkCard
          key={item.idDrink}
          data={item}
          handleShowDetails={handleShowDetails}
        />
      ))}
    </ul>
  );
}

function DrinkCard({ data, handleShowDetails }) {
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
        <img className="card-img" src={img} alt={`${name}-image`} />
      </figure>
      <div className="drink-desc">
        <h2>{name}</h2>
        <p className="glass">{glass}</p>
        <div className="alcohalic">{alcohalic}</div>
        <button className="details-btn" onClick={() => handleShowDetails(id)}>
          Details
        </button>
      </div>
    </li>
  );
}

function DetailsDrink({ details, handleBackClick }) {
  const {
    strDrink: name,
    strGlass: glass,
    strDrinkThumb: img,
    strAlcoholic: alcholic,
    strCategory: category,
    strInstructions: instructions,
  } = details;

  const ingredients = Object.entries(details)
    .filter((entry) => entry[0].includes("strIngredient") && entry[1])
    .map((entry) => entry[1])
    .join(", ");
  console.log(ingredients);
  return (
    <div className="drink-details-section">
      <figure>
        <img src={img} alt={`${name}-image`} />
      </figure>

      <div className="drink-details">
        <div className="drink-details-categ">Name:</div>
        <p>{name}</p>
        <div className="drink-details-categ">Category:</div>
        <p>{category}</p>
        <div className="drink-details-categ">Info:</div>
        <p>{alcholic}</p>
        <div className="drink-details-categ">Glass:</div>
        <p>{glass}</p>
        <div className="drink-details-categ">Ingredients:</div>
        <p>{ingredients}</p>
        <div className="drink-details-categ">Instructions:</div>
        <p>{instructions}</p>
      </div>
      <button onClick={handleBackClick} id="back-btn">
        &larr;
      </button>
    </div>
  );
}
export default App;
