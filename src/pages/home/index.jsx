import Carousel from "./Carousel";
import styles from "src/assets/styles/pages/home.module.css";
import NewProducts from "./NewProducts";
import HomeCatalog from "./HomeCatalog";

const Home = () => {
  return (
    <div className="container">
      <div className={styles.homeCarousel}>
        <Carousel />
      </div>
      <NewProducts />
      <HomeCatalog />
    </div>
  );
};

export default Home;
