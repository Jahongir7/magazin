/* eslint-disable react/prop-types */
import styles from "src/assets/styles/components/card.module.css";
import { Icon } from "@iconify/react";
import Rating from "react-rating";

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <p className={data.isStock ? styles.card_green : styles.card_red}>
        {data.isStock ? (
          <Icon icon="material-symbols:check-circle" />
        ) : (
          <Icon icon="material-symbols:phone-enabled-sharp" />
        )}
        {data.isStock ? "in stock" : "check availability"}
      </p>
      <img src={data.image} alt="" />
      <div className={`${styles.rating} flex`}>
        <Rating
          placeholderRating={data.rating}
          emptySymbol={<Icon icon="ic:outline-star-border" />}
          placeholderSymbol={<Icon icon="ic:outline-star" color="#E9A426" />}
          fullSymbol={<Icon icon="ic:outline-star" color="#E9A426" />}
        />
        <p>Reviews {data.reviews}</p>
      </div>
      <b>{data.desc}</b>
      <h5>${data.price}</h5>
      <button className={styles.card_button}>
        <Icon icon="ci:shopping-cart-01" width={18} /> Add to Cart
      </button>
      <div className={styles.h_button}></div>

      <button>{/* shu joydan boshlimiz */}</button>
    </div>
  );
};

export default Card;

/*
    image
    isStock
    rating
    reviews
    desc
    price
*/
