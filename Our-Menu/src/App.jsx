import { useState } from "react";
import { menu, tabNames } from "./data";
import "./style.css";
function App() {
  const [data, setData] = useState(menu);

  return (
    <>
      <Header />
      <Nav setData={setData} />
      <MenuList data={data} />
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

function Nav({ setData }) {
  function handleClick(e) {
    console.log(e.target);
    console.log();
    const tabName = e.target.dataset.tabName;

    setData(() =>
      tabName === "all"
        ? menu
        : menu.filter((item) => item.category === tabName),
    );
  }
  return (
    <nav>
      {tabNames.map((tab) => (
        <Tab key={tab} tabName={tab} handleClick={handleClick} />
      ))}
    </nav>
  );
}
function Tab({ tabName, handleClick }) {
  return (
    <div data-tab-name={tabName} onClick={handleClick}>
      {tabName}
    </div>
  );
}
function MenuList({ data }) {
  return (
    <ul>
      {data.map((item) => (
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
          <h2>
            {data.title
              .split(" ")
              .map((string) => string[0].toUpperCase() + string.slice(1))
              .join(" ")}
          </h2>
          <p>${data.price}</p>
        </div>
        <p className="product-details">{data.desc}</p>
      </div>
    </li>
  );
}
export default App;
