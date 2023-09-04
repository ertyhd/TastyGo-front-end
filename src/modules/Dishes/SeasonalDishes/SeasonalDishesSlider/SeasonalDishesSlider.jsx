import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Swiper } from "swiper/react";

import ButtonArrow from "../../../../shared/components/Button/ButtonArrow/ButtonArrow";
import { Pagination, Autoplay } from "swiper/modules";
import "../../PopularDishes/PopularDishesSlider/swiperSlider.scss";
import css from './seasonalDishesSlider.module.scss';


const SeasonalDishesSlider = ({ item }) => {
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

  const [isDisplay, setDisplay] = useState(1);
  useEffect(() => {
    let displayWidth = window.innerWidth;
    let k = 1.08 + ((2.7 - 1.08) * (displayWidth - 360)) / 440;
    setDisplay(k);
  }, [isDisplay]);
  const swiperRef = React.useRef(null);

//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const [lengthSlideIndex, setLengthSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    // setActiveSlideIndex(swiper.realIndex);
    // setLengthSlideIndex(swiper.slides.length);
  };
  const handleClickPrev = () => swiperRef.current.swiper.slidePrev();
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
              delay: 7000,
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
              {/* <p>{String(activeSlideIndex + 1).padStart(2, "0")}</p>
              <p>/{lengthSlideIndex}</p> */}
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
export default SeasonalDishesSlider;