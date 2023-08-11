import { useState } from "react";
import { useEffect, useRef, useCallback } from "react";
import { SvgSelector } from "../../../../shared/components/SvgSelector/SvgSelector";
import Slider from "react-slick";
import { Swiper } from "swiper/react";
import {  Autoplay } from "swiper/modules";
// import "./sliderSlick.scss";
import "./swiperSlider.scss";
import css from "../popularDishes.module.scss"

const SwiperPopularDishesCategorySlider = ({ elementCategory }) => {
  console.log("elementCategory", elementCategory);
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

  return (
    <div className={css.wrapperCategory}>
      <Swiper
        slidesPerView={2}
        spaceBetween={-60}

        loop={true}
        className="mySwiperCategory"
        // className={styles.swaprWrap}
        // 
      
      >
        {elementCategory}
      </Swiper>
    </div>
  );
};
export default SwiperPopularDishesCategorySlider;
