import Carousel from "./Carousel";
import styles from "src/assets/styles/pages/home.module.css";
import NewProducts from "./NewProducts";
import HomeCatalog from "./HomeCatalog";
import Companies from "./Companies";
import News from "./News";
import Testimonial from "./Testimonial";
import Services from "./Services";

const Home = () => {
  const arr = [0, 1, 2, 3];
  return (
    <div className="paralax_container">
      <div className="container">
        <div className={styles.homeCarousel}>
          <Carousel />
        </div>
        <NewProducts />
        {arr.map((item) => {
          return <HomeCatalog key={item} />;
        })}
        <Companies />
        <News />
        <Testimonial />
        <Services />
      </div>
    </div>
  );
};

export default Home;
