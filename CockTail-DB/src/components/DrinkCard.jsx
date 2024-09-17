import { Link } from "react-router-dom";
import styles from "./DrinkCard.module.css";

export default function DrinkCard({ data }) {
  const {
    idDrink: id,
    strDrink: name,
    // strCategory: category,
    strAlcoholic: alcohalic,
    strGlass: glass,
    strDrinkThumb: img,
  } = data;

  return (
    <li className={styles.item}>
      <figure>
        <img className={styles.img} src={img} alt={`${name}-image`} />
      </figure>
      <div className="drink-desc">
        <h2>{name}</h2>
        <p className="glass">{glass}</p>
        <div className="alcohalic">{alcohalic}</div>
        <Link to={`${id}`}>
          <button className="details-btn">Details</button>
        </Link>
      </div>
    </li>
  );
}
