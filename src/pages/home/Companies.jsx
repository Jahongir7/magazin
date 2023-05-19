import styles from "src/assets/styles/pages/home.module.css";
import image from "src/assets/images/company1.png";

const Companies = () => {
  const arr = [0, 1, 2, 3, 4, 5];
  return (
    <div className={styles.companies}>
      {arr.map((item) => {
        return <img src={image} alt="" key={item} />;
      })}
    </div>
  );
};

export default Companies;
