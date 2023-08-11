import { useState } from "react";
import { useEffect, useRef, useCallback } from "react";
import { SvgSelector } from "../../../../shared/components/SvgSelector/SvgSelector";
import Slider from "react-slick";
import "./sliderSlick.scss";
import css from "./popularDishesSlider.module.scss"

const PopularDishesCategorySlider = ({ item }) => {
    
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

 

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    // arrows: false,
    // className: "center",
    // dots: true,
    // infinite: true,
    // centerPadding: "60px",
    // // centerMode: isCenterMode,
    // speed: 500,

    // slidesToShow: isCenterMode ? 3 : null,
    // slidesToScroll: 1,
    // swipeToSlide: isCenterMode,
  };
  return (
    <div className="wrapperCategory">
      {isCenterMode && <Slider {...settings} >
        {item}
      </Slider>}
      {/* {isCenterMode && (
        <div className="wrapperDownSlider">
          <Slider {...settings} ref={sliderRef}>
            {item}
          </Slider>
        </div>
      )}
      <div className="wrapperDownSlider">
        <Slider {...settings} ref={sliderRef}>
          {item}
        </Slider>
      </div> */}

      {/* {!isCenterMode && (
        <div>
          <button type="button" className="button" onClick={() => previous()}>
            <SvgSelector id="arrowLeftPopularDishDesc" />
          </button>
          <span>1</span>
          <span>/</span>
          <span>10</span>
          <button type="button" className="button" onClick={next}>
            <SvgSelector id="arrowRightPopularDishDesc" />
          </button>
        </div>
      )} */}
    </div>
  );
};
export default PopularDishesCategorySlider;
