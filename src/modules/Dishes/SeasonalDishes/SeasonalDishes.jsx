import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
import SectionLink from "../../../shared/components/SectionLink/SectionLink";
import css from "./seasonalDishes.module.scss";
import SeasonalDishesSlider from "./SeasonalDishesSlider/SeasonalDishesSlider";
import SingleCard from "../../../shared/components/SingleCard/SingleCard";

import { fetchFoodsSeasonal } from "../../../redux/foods/foods-operations";
import { getItemsSeason } from "../../../redux/foods/foods-selector";

const SeasonalDishes = ({ windowWidth }) => {
  const ItemsSeasonFoods = useSelector(getItemsSeason);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsSeasonal({ page: 1 }));
  }, [dispatch]);

  const element = ItemsSeasonFoods.map(
    ({ _id, title, imgUrl, weight, price }) => {
      return (
        <SwiperSlide key={_id}>
          <SingleCard
            name={title}
            imgUrl={imgUrl}
            // description={description}
            weight={weight}
            price={price}
          />
        </SwiperSlide>
      );
    }
  );

  return (
    <section
      className={
        windowWidth < 768 ? `${css.section}` : `${css.section} ${"container"}`
      }
    >
      <p className={css.titlePopularDish}>seasonal menu</p>
      <div className={css.wrapperDescriptionSectionLink}>
        <h2 className={css.descriptionSection}>
          Try dishes from our seasonal menu
        </h2>
        {windowWidth >= 768 && (
          <SectionLink>
            <p className={css.linkAllCategory}>View menu</p>
          </SectionLink>
        )}
      </div>
      <SeasonalDishesSlider item={element} sizeWindow={windowWidth} />
      {windowWidth < 768 && (
        <SectionLink>
          <p className={css.linkAllCategory}>View menu</p>
        </SectionLink>
      )}
    </section>
  );
};
export default SeasonalDishes;
