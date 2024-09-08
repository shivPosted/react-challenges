import "./style.css";
function App() {
  return (
    <>
      <Header />
      <Main>
        <CockTailList />
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

function Main({ children }) {
  return (
    <main>
      <form action="none">
        <input type="text" />
        <button>Search</button>
        {children}
      </form>
    </main>
  );
}

function CockTailList({ data }) {
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
    strAlcohalic: alcohalic,
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
      </div>
    </li>
  );
}

export default App;
