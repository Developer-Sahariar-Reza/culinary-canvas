import React from "react";
import "./OurClient.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const OurClient = () => {
  return (
    <div className="our-client">
      <h1>Our Client</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="client">
            <h4>Monkey D. Luffy</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              accusamus quidem dolorum quos aperiam autem ipsa corporis fuga
              deleniti, voluptatibus ab quia itaque. Quasi, ipsa?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="client">
            <h4>Peter Parker</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              accusamus quidem dolorum quos aperiam autem ipsa corporis fuga
              deleniti, voluptatibus ab quia itaque. Quasi, ipsa?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="client">
            <h4>Tony Stark</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              accusamus quidem dolorum quos aperiam autem ipsa corporis fuga
              deleniti, voluptatibus ab quia itaque. Quasi, ipsa?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="client">
            <h4>Aono Hajime</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              accusamus quidem dolorum quos aperiam autem ipsa corporis fuga
              deleniti, voluptatibus ab quia itaque. Quasi, ipsa?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="client">
            <h4>Babe Hexa</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              accusamus quidem dolorum quos aperiam autem ipsa corporis fuga
              deleniti, voluptatibus ab quia itaque. Quasi, ipsa?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurClient;
