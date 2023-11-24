import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Swiper } from "swiper/react";

import ButtonArrow from "../../../../shared/components/Button/ButtonArrow/ButtonArrow";
import { Pagination, Autoplay } from "swiper/modules";
import "./swiperSlider.scss";
import css from "../popularDishes.module.scss";
// import "swiper/css";
// import "swiper/css/pagination";

const SwiperPopularDishesSlider = ({ item, sizeWindow }) => {
  // const [isCenterMode, setIsCenterMode] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsCenterMode(window.innerWidth <= 767);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const sliderRef = useRef(null);

  // const next = useCallback(() => {
  //   sliderRef.current.slickNext();
  // }, []);

  // const previous = useCallback(() => {
  //   sliderRef.current.slickPrev();
  // }, []);
  const [isDisplay, setDisplay] = useState(0);
  console.log("isDisplay", isDisplay);
  useEffect(() => {
    // let displayWidth = window.innerWidth;
    // console.log("displayWidth", displayWidth);
    let k = (sizeWindow - 360) * 0.0031 + 1.15;
    setDisplay(k);
  }, [sizeWindow]);
  const swiperRef = React.useRef(null);

  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  // const [lengthSlideIndex, setLengthSlideIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    // setActiveSlideIndex(swiper.realIndex);
    // setLengthSlideIndex(swiper.slides.length);
  };
  const handleClickPrev = () => swiperRef.current.swiper.slidePrev();
  const handleClickNext = () => swiperRef.current.swiper.slideNext();
  return (
    <div className={css.wrapperSwiper}>
      {sizeWindow > 1440 && (
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
      )}
      {sizeWindow < 768 && (
        <Swiper
          slidesPerView={isDisplay}
          spaceBetween={8}
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
