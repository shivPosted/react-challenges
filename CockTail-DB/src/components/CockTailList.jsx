import DrinkCard from "./DrinkCard";
import styles from "./CockTailList.module.css";
export default function CockTailList({ data, handleShowDetails }) {
  const drinksData = data ? data : "Drink Not Found";

  return !data ? (
    <p className="message">{drinksData}</p>
  ) : (
    <ul className={styles.list}>
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
