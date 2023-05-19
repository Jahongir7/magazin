import styles from "src/assets/styles/pages/home.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Icon } from "@iconify/react";

const Testimonial = () => {
  return (
    <div className={styles.Testimonial}>
      <Swiper pagination={true} modules={[Pagination]} loop={true}>
        <SwiperSlide>
          <div className={styles.carousel_item}>
            <Icon icon="dashicons:editor-quote" width={80} />
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carousel_item}>
            <Icon icon="dashicons:editor-quote" width={80} />
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carousel_item}>
            <Icon icon="dashicons:editor-quote" width={80} />
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carousel_item}>
            <Icon icon="dashicons:editor-quote" width={80} />
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
