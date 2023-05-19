import styles from "src/assets/styles/pages/home.module.css";
import img from "src/assets/images/news1.png";

const News = () => {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={styles.news}>
      <h3>Follow us on Instagram for News, Offers & More</h3>
      <div className={styles.news_wrapper}>
        {arr.map((item) => {
          return (
            <div key={item} className={styles.new}>
              <img src={img} alt="" />
              <b>
                If you’ve recently made a desktop PC or laptop purchase, you
                might want to consider adding peripherals to enhance your home
                office setup, your gaming rig, or your business workspace...
              </b>
              <p>04.05.2023</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
