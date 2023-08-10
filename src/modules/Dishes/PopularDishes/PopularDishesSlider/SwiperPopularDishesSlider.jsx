import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Swiper } from "swiper/react";

import ButtonArrow from "../../../../shared/components/Button/ButtonArrow/ButtonArrow";
import { Pagination, Autoplay } from "swiper/modules";
import './swiperSlider.scss'
import css from "../popularDishes.module.scss"
// import "swiper/css";
// import "swiper/css/pagination";

const SwiperPopularDishesSlider = ({ item }) => {

  
  const [isCenterMode, setIsCenterMode] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCenterMode(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // const sliderRef = useRef(null);

  // const next = useCallback(() => {
  //   sliderRef.current.slickNext();
  // }, []);

  // const previous = useCallback(() => {
  //   sliderRef.current.slickPrev();
  // }, []);
  const [isDisplay, setDisplay] = useState(1);
  useEffect(() => {
    let displayWidth = window.innerWidth;
    let k = 1.08 + ((2.7 - 1.08) * (displayWidth - 360)) / 440;
    setDisplay(k);
    
  }, [isDisplay]);
  const swiperRef = React.useRef(null);
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
const [lengthSlideIndex, setLengthSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
setLengthSlideIndex(swiper.slides.length);
   
  };
  const handleClickPrev = () => swiperRef.current.swiper.slidePrev()
  const handleClickNext = () => swiperRef.current.swiper.slideNext();
  return (
    <div className={css.wrapperSwiper}>
      {!isCenterMode ? (
        <>
          <Swiper
            ref={swiperRef}
            spaceBetween={24}
            slidesPerView={3}
            centeredSlides={true}
            onSlideChange={handleSlideChange}
            loop={true}
            // pagination={{
            //   type: "fraction",
            // }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            // navigation={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {item}
            <div style={{ width: "100%", height: "56px" }}></div>
          </Swiper>
          <div className={css.swiperNavigate}>
            <ButtonArrow prev={handleClickPrev} next={handleClickNext}>
              <div> {activeSlideIndex + 1}</div>
              <span>/</span>
              <div>{lengthSlideIndex} </div>
            </ButtonArrow>
          </div>

          {/* <button onClick={handleClickPrev}>
            <SvgSelector id="arrowLeftPopularDishDesc" />
          </button>
          <div>Current Slide: {activeSlideIndex + 1}</div>
          <div>{lengthSlideIndex} </div>
          <button onClick={handleClickNext}>
            <SvgSelector id="arrowRightPopularDishDesc" />
          </button> */}
        </>
      ) : (
        <Swiper
          slidesPerView={isDisplay}
          spaceBetween={-60}
          centeredSlides={true}
          loop={true}
          className="mySwiperMobil"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {item}
        </Swiper>
      )}
    </div>
  );
};
export default SwiperPopularDishesSlider;
