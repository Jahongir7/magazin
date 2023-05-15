import { Link } from "react-router-dom";
import styles from "src/assets/styles/pages/home.module.css";
import Card from "../../components/card";
import { fakeCardData } from "../../assets/data/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper";

const NewProducts = () => {
  return (
    <>
      <div className={styles.newProducts}>
        <h3>New Products</h3>
        <Link to="/new-products">See All New Products</Link>
      </div>

      <div className={styles.card_wrapper}>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper"
        >
          {" "}
          {fakeCardData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default NewProducts;
