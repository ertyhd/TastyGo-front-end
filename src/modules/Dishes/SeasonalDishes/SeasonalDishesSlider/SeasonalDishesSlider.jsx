import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getLoadingFoods } from "../../../../redux/foods/foods-selector";

import { Swiper } from "swiper/react";

import ButtonArrow from "../../../../shared/components/Button/ButtonArrow/ButtonArrow";
import { Pagination, Autoplay } from "swiper/modules";
import LoaderSpinner from "../../../../shared/components/LoaderSpinner/LoaderSpinner";
import "../../PopularDishes/PopularDishesSlider/swiperSlider.scss";

import css from "./seasonalDishesSlider.module.scss";

const SeasonalDishesSlider = ({ item, sizeWindow }) => {
  const [isSlidesPerView, setSlidesPerViewDisplay] = useState(0);
  const [isSpaceBetween, setSpaceBetweenDisplay] = useState(0);

  const isLoadingFoods = useSelector(getLoadingFoods);

  useEffect(() => {
    setSlidesPerViewDisplay(
      sizeWindow >= 1440
        ? sizeWindow -
            1440 +
            3 -
            0.00208333 +
            0.00208333 -
            0.99791667 * (sizeWindow - 1440)
        : sizeWindow < 1440 && sizeWindow >= 768
        ? sizeWindow -
          768 +
          2 -
          0.00260417 +
          0.00260417 -
          0.99739583 * (sizeWindow - 768)
        : sizeWindow < 768
        ? sizeWindow -
          360 +
          1.15 -
          0.00319444 +
          0.00319444 -
          0.99680556 * (sizeWindow - 360)
        : 1
    );
    setSpaceBetweenDisplay(
      sizeWindow >= 1440
        ? sizeWindow -
            1440 +
            20 -
            0.01388889 +
            0.01388889 -
            0.98611111 * (sizeWindow - 1440)
        : sizeWindow < 1440 && sizeWindow >= 768
        ? 768 - sizeWindow - 353
        : sizeWindow < 768
        ? sizeWindow -
          360 +
          10 -
          0.02777778 +
          0.02777778 -
          0.97222222 * (sizeWindow - 360)
        : 1
    );
  }, [sizeWindow, isSlidesPerView]);

  const swiperRef = React.useRef(null);

  const handleClickPrev = () => swiperRef.current.swiper.slidePrev();
  const handleClickNext = () => swiperRef.current.swiper.slideNext();
  return (
    <div className={css.wrapperSwiper}>
      {isLoadingFoods && (
        <div className={css.overlay}>
          <LoaderSpinner />
        </div>
      )}
      {!isLoadingFoods && sizeWindow >= 1440 && (
        <>
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={20}
            // centeredSlides={true}
            // onSlideChange={handleSlideChange}
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
            pagination={{
              el: ".swiperSeasonalMainPaginationCustom",
              dynamicBullets: true,
            }}
            // className="mySwiper"
          >
            {item}
          </Swiper>
          <div className={css.swiperNavigate}>
            <ButtonArrow
              prev={handleClickPrev}
              next={handleClickNext}
              el={"swiperSeasonalMainPaginationCustom"}
            ></ButtonArrow>
          </div>
        </>
      )}
      {!isLoadingFoods && sizeWindow < 1440 && sizeWindow >= 768 && (
        <>
          <Swiper
            ref={swiperRef}
            style={{ width: "100wv" }}
            // centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={isSpaceBetween}
            // spaceBetween={-453}
            loop={true}
            className="mySwiperMobill"
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".swiperSeasonalMainPaginationCustom",
              dynamicBullets: true,
            }}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            // modules={[Autoplay]}
          >
            {item}
          </Swiper>
          <div className={css.swiperNavigate}>
            <ButtonArrow
              prev={handleClickPrev}
              next={handleClickNext}
              el={"swiperSeasonalMainPaginationCustom"}
            ></ButtonArrow>
          </div>
        </>
      )}
      {!isLoadingFoods && sizeWindow < 768 && (
        <>
          <Swiper
            ref={swiperRef}
            // style={{width: "312px"}}
            slidesPerView={isSlidesPerView}
            // spaceBetween={isDisplay}
            spaceBetween={isSpaceBetween}
            centeredSlides={true}
            loop={true}
            className="mySwiperMobill"
            modules={[Pagination, Autoplay]}
            pagination={{
              el: ".swiperSeasonalMainPaginationCustom",
              dynamicBullets: true,
            }}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            // modules={[Autoplay]}
          >
            {item}
          </Swiper>
          <div className={css.swiperNavigate}>
            <ButtonArrow
              prev={handleClickPrev}
              next={handleClickNext}
              el={"swiperSeasonalMainPaginationCustom"}
            ></ButtonArrow>
          </div>
        </>
      )}
    </div>
  );
};
export default SeasonalDishesSlider;
