import { Link } from "react-router-dom";
import PageNav from "./PageNav.jsx";
export default function DetailsDrink({ details, handleBackClick }) {
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
    <>
      <PageNav />
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
        <Link to="/">
          <button onClick={handleBackClick} id="back-btn">
            &larr;
          </button>
        </Link>
      </div>
    </>
  );
}
