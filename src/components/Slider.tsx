"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import data from "../data/slider.json";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "../styles/index.module.scss";

interface SliderData {
  image: string;
  h2: string;
}

interface SlideItemProps {
  data: SliderData;
}

const SlideItem: React.FC<SlideItemProps> = ({ data }) => {
  return (
    <main className={styles.sliderContainer}>
      <Image src={data.image} alt="slide" width={350} height={400} />
      <h2>{data.h2}</h2>
    </main>
  );
};

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  return (
    <section className={styles.container}>
      <section>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          spaceBetween={30}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <SlideItem data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default Slider;
