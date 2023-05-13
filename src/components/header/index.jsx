import styles from "src/assets/styles/components/header.module.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`container ${styles.header_wrapper}`}>
        <div>
          <span>Mon-Thu:</span>
          <b>9:00 AM - 5:30 PM</b>
        </div>
        <p>
          Visit our showroom in 1234 Street Adress City Address, 1234{" "}
          <Link to="/contact">Contact Us</Link>
        </p>
        <div className="flex">
          <b>Call Us: (00) 1234 5678</b>
          <Icon icon="ri:facebook-box-fill" width={24} />
          <Icon icon="ph:instagram-logo-fill" width={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
