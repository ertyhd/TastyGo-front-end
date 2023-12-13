import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Swiper } from "swiper/react";

import ButtonArrow from "../../../../shared/components/Button/ButtonArrow/ButtonArrow";
import { Pagination, Autoplay } from "swiper/modules";
import "../../PopularDishes/PopularDishesSlider/swiperSlider.scss";
import css from './swiperPopularDishesSlider.module.scss'

const SwiperPopularDishesSlider = ({ item, sizeWindow }) => {
  const [isSlidesPerView, setSlidesPerViewDisplay] = useState(0);
//   const [isSpaceBetween, setSpaceBetweenDisplay] = useState(0);
  
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
        : 
        sizeWindow < 768
        ? sizeWindow -
          360 +
          1.15 -
          0.00319444 +
          0.00319444 -
          0.99680556 * (sizeWindow - 360) 
        : 1
    );
    // setSpaceBetweenDisplay(
    //   sizeWindow >= 1440
    //     ? sizeWindow -
    //         1440 +
    //         20 -
    //         0.01388889 +
    //         0.01388889 -
    //         0.98611111 * (sizeWindow - 1440)
    //     : sizeWindow < 1440 && sizeWindow >= 768
    //     ? 768 - sizeWindow - 353
    //     : 
    //     sizeWindow < 768
    //     ? sizeWindow -
    //       360 +
    //       10 -
    //       0.02777778 +
    //       0.02777778 -
    //       0.97222222 * (sizeWindow - 360) 
    //     : 1
    // );
  }, [sizeWindow, isSlidesPerView]);

    const swiperRef = React.useRef(null);
     const handleClickPrev = () => swiperRef.current.swiper.slidePrev();
     const handleClickNext = () => swiperRef.current.swiper.slideNext();
    return (
      <div className={css.wrapperSwiper}>
        {sizeWindow >= 1440 && (
          <>
            <Swiper
              ref={swiperRef}
              //   slidesPerView={3}
              //   spaceBetween={20}
              // centeredSlides={true}
              // onSlideChange={handleSlideChange}
              loop={true}
              // pagination={{
              //   type: "fraction",
              // }}
            //   autoplay={{
            //     delay: 7000,
            //     disableOnInteraction: false,
            //   }}
              // navigation={true}
              modules={[Pagination, Autoplay]}
              pagination={{
                el: ".swiperPopularMainPaginationCustom",
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
                el={"swiperPopularMainPaginationCustom"}
              >
               
              </ButtonArrow>
            </div>

            
          </>
        )}
        {sizeWindow < 1440 && sizeWindow >= 768 && (
          <>
            <Swiper
              ref={swiperRef}
             
              //   // centeredSlides={true}
              //   slidesPerView={"auto"}
              //   spaceBetween={isSpaceBetween}
              
              loop={true}
              className="mySwiperMobil"
              modules={[Pagination, Autoplay]}
              pagination={{
                el: ".swiperPopularMainPaginationCustom",
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
                el={"swiperPopularMainPaginationCustom"}
              >
               
              </ButtonArrow>
            </div>
          </>
        )}
        {sizeWindow < 768 && (
          <>
            <Swiper
              ref={swiperRef}
              // style={{width: "312px"}}
            //   slidesPerView={isSlidesPerView}
            //   // spaceBetween={isDisplay}
            //   spaceBetween={isSpaceBetween}
              centeredSlides={true}
              loop={true}
              className="mySwiperMobil"
              modules={[Pagination, Autoplay]}
              pagination={{
                el: ".swiperPopularMainPaginationCustom",
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
                el={"swiperPopularMainPaginationCustom"}
              >
                
              </ButtonArrow>
            </div>
          </>
        )}
      </div>
    );
};
export default SwiperPopularDishesSlider;
