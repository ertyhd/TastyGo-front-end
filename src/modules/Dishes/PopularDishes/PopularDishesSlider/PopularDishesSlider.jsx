import { useState } from "react";
import { useEffect, useRef, useCallback } from "react";
import { SvgSelector } from "../../../../shared/components/SvgSelector/SvgSelector";
import Slider from "react-slick";
import "./sliderSlick.scss";
// import css from "./popularDishesSlider.module.scss";

const PopularDishesSlider = ({ item }) => {
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

  const sliderRef = useRef(null);

  const next = useCallback(() => {
    sliderRef.current.slickNext();
  }, []);

  const previous = useCallback(() => {
    sliderRef.current.slickPrev();
  }, []);

  const [isDisplay, setDisplay] = useState(1);
  useEffect(() => {
    let displayWidth = window.innerWidth;
    let k = 10 + ((180 - 10) * (displayWidth - 360)) / 440;
    setDisplay(k);
    // console.log(isDisplay);
  }, [isDisplay]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          // className: "center",
          // centerMode: false,
          // slidesToShow: 3,
          // slidesToScroll: 1,
          // initialSlide: 2,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 767,
        settings: {
          // className: "center",
          // centerMode: true,
          // slidesToShow: 3,
          // slidesToScroll: 1,
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: `${isDisplay}px`,
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  // const settings = {
  //   className: "center",
  //   // dots: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   centerMode: isCenterMode,
  //   speed: 500,

  //   slidesToShow: isCenterMode ? 1 : 3,
  //   slidesToScroll: 1,
  //   swipeToSlide: isCenterMode,

  //   arrows: false,
  // };
  return (
    <div>
      {/* {isCenterMode && (
        <div className="wrapperUpSlider">
          <Slider {...settings} ref={sliderRef}>
            {item}
          </Slider>
        </div>
      )} */}
      <div className="wrapperDownSlider">
        <Slider {...settings} ref={sliderRef}>
          {item}
        </Slider>
      </div>

      {!isCenterMode && (
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
      )}
    </div>
  );
};
export default PopularDishesSlider;
