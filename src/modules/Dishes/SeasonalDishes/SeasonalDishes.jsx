import { useState } from "react";
import { useEffect } from "react";
import items from "./items";
import { SwiperSlide } from "swiper/react";
// import { Link } from "react-router-dom";
import SectionLink from "../../../shared/components/SectionLink/SectionLink";
import css from './seasonalDishes.module.scss';
import SeasonalDishesSlider from "./SeasonalDishesSlider/SeasonalDishesSlider";
import SingleCard from "../../../shared/components/SingleCard/SingleCard";

const SeasonalDishes = () => {
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

  const element = items.map(({ id, name, description, weight, price }) => {
    return (
      <SwiperSlide key={id}>
        <SingleCard
          name={name}
          description={description}
          weight={weight}
          price={price}
        />
        {/* <div className={css.wrapperSlideItem}>
          <div className={css.wrapperContentDish}>
            <div className={css.wrapperImgDish}>
              <img
                className={css.imgDish}
                alt="dish"
                src={require("../../../assete/jpg/salad-with-salmon-parmesan-cheese-tomatoes-salad-mix-banner 1.jpg")}
              />
            </div>
            <div className={css.wrapperDescriptionDish}>
              <p className={css.nameDish}>{name}</p>
              <p className={css.descriptionDish}>{description}</p>
              <p className={css.weightDish}>{weight}</p>
            </div>
          </div>
          <div className={css.boxDishFooter}>
            <p className={css.priceDish}>{price}</p>
            <Link className={css.btnDishOrder}>to order</Link>
          </div>
        </div> */}
      </SwiperSlide>
    );
  });

    return (
      <section className={`${css.section}  ${!isCenterMode && "container"}`}>
        <h2 className={css.titlePopularDish}>SEASONal MENU</h2>
        <div className={css.wrapperDescriptionSectionLink}>
          <p className={css.descriptionSection}>
            try dishes from our seasonal menu
          </p>
          {!isCenterMode && (
            <SectionLink>
              <p>see ALL SALADS</p>
            </SectionLink>
          )}
        </div>
        {/* <PopularDishesCategorySlider item={elementCategory} /> */}
        {/* <PopularDishesSlider item={element} /> */}
        <SeasonalDishesSlider item={element} />
        {isCenterMode && (
          <SectionLink>
            <p>see ALL SALADS</p>
          </SectionLink>
        )}
      </section>
    );
 
};
export default SeasonalDishes;
