import styles from "src/assets/styles/pages/home.module.css";
import { fakeCardData } from "src/assets/data/card.js";
import Card from "../../components/card";

const HomeCatalog = () => {
  return (
    <div className={styles.homeCatalog}>
      <img src="src/assets/images/catalog.png" alt="" />
      <div className={styles.card_grid}>
        {fakeCardData.slice(1, 6).map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HomeCatalog;
