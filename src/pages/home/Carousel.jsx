import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import c1 from "src/assets/images/c-1.png";
import c2 from "src/assets/images/5950631.jpg";

const Carousel = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} loop={true}>
      <SwiperSlide>
        <img src={c1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={c2} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
