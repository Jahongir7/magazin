import { Icon } from "@iconify/react";
import { footer } from "../../assets/data/footer";
import styles from "src/assets/styles/components/footer.module.css";
import img from "src/assets/images/cards.png";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.f_head}>
          <div className={styles.f_title}>
            <h1>Sign Up To Our Newsletter</h1>
            <p>Be the first to hear about the latest offers.</p>
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className={styles.f_body}>
          {footer.map((item, index) => {
            return (
              <div key={index}>
                <b>{item.title}</b>
                <ul>
                  {item.lists.map((list, i) => {
                    return <li key={i}>{list}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={styles.f_footer}>
          <div>
            <Icon
              icon="ri:facebook-box-fill"
              width={28}
              color="rgba(255, 255, 255, 0.5)"
            />
            <Icon
              icon="ph:instagram-logo-fill"
              width={28}
              color="rgba(255, 255, 255, 0.5)"
            />
          </div>
          <div className={styles.f_cards}>
            <img src={img} alt="" />
          </div>
          <p style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Copyright © 2020 Shop Pty. Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
