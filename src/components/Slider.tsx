"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import data from "../data/slider.json";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import styles from "../styles/index.module.scss";
import Modal from "react-modal";
import { motion } from "framer-motion";

interface SliderData {
  image: string;
  h2: string;
}

interface SlideItemProps {
  data: SliderData;
  onClick: () => void;
}

const SlideItem: React.FC<SlideItemProps> = ({ data, onClick }) => {
  return (
    <main className={styles.sliderContainer} onClick={onClick}>
      <Image src={data.image} alt="slide" width={350} height={400} />
      <h2>{data.h2}</h2>
    </main>
  );
};

interface SliderProps {}

const Slider: React.FC<SliderProps> = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<SliderData | null>(null);

  const openModal = (slide: SliderData) => {
    setSelectedSlide(slide);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedSlide(null);
  };


  const variantsConatc = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <section className={styles.container}>
      <section>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          modules={[EffectCoverflow, Pagination]}
          className={`${modalIsOpen ? styles.disableSwiper : ""} mySwiper`}
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
              <SlideItem data={item} onClick={() => openModal(item)} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {selectedSlide && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Slide Modal"
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <div className={styles.modalContent}>
            <Image src={selectedSlide.image} alt="slide" width={350} height={400} />
            <h2>{selectedSlide.h2}</h2>
            <button onClick={closeModal}>Close</button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Slider;

