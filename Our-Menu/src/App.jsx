import { menu } from "./data";
import "./style.css";
function App() {
  return (
    <>
      <Header />
      <Nav />
      <MenuList />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Our Menu</h1>
      <div className="title-underline"></div>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <div data-tab-name="all">All</div>
      <div data-tab-name="breakfast">Breakfast</div>
      <div data-tab-name="lunch">Lunch</div>
      <div data-tab-name="shakes">Shakes</div>
    </nav>
  );
}

function MenuList() {
  return (
    <ul>
      {menu.map((item) => (
        <MenuCard key={item.id} data={item} />
      ))}
    </ul>
  );
}

function MenuCard({ data }) {
  return (
    <li>
      <figure>
        <img src={data.img} alt={`${data.title}-image`} />
      </figure>
      <div className="product-description">
        <div className="product-highlights">
          <h2>{data.title}</h2>
          <p>{data.price}</p>
        </div>
        <p className="product-details">{data.desc}</p>
      </div>
    </li>
  );
}
export default App;
