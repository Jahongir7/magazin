import styles from "src/assets/styles/pages/home.module.css";
import { services } from "../../assets/data/services";
import { Icon } from "@iconify/react";

const Services = () => {
  return (
    <div className={styles.services}>
      {services.map((item) => {
        return (
          <div key={item.id} className={styles.service}>
            <div className={styles.icon}>
              <Icon icon={item.icon} />
            </div>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
