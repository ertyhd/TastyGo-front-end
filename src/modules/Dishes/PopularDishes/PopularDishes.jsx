import { useState } from "react";
import { useEffect } from "react";
import items from "./items";

import Slider from "react-slick";
import css from "./popularDishes.module.scss"
import "./sliderSlick.scss"


const PopularDishes = () => {
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
   };
 
  const element = items.map(({ id, name, title }) => {
    return(
      <div className={css.wrapperSlideItem} key={id}>
        <p>{name}</p>
        <p>{title}</p>
      </div>)
    })

 
  return (
    <section className={css.section}>
      <div>
        <h2>dishes</h2>
      </div>
      <Slider  {...settings}>
        {element}</Slider>
     
     
    </section>
  );
};
export default PopularDishes;

