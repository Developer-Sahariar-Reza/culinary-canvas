import React from "react";
import "./FeaturedFood.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const FeaturedFood = () => {
  return (
    <div className="featured-food">
      <h1>Our Featured Food</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="feature-image"
            src="https://i.ibb.co/g3QFF4z/Japanese-Curry.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="feature-image"
            src="https://i.ibb.co/RQsL4fP/Gazpacho-Andaluz.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="feature-image"
            src="https://i.ibb.co/ThH5xD3/Gyoza.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="feature-image"
            src="https://i.ibb.co/JvGGpnw/Shrimp-Scampi-Pasta.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="feature-image"
            src="https://i.ibb.co/WsdLZ1q/Tonkotsu-Ramen.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="feature-image"
            src="https://i.ibb.co/c30xNS4/Assorted-Tempura.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="feature-image"
            src="https://i.ibb.co/dDm5vzD/Yakitori.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="feature-image"
            src="https://i.ibb.co/sRZMDvj/Volcano-Roll.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeaturedFood;
