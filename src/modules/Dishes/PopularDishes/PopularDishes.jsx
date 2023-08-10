import { useState } from "react";
import { useEffect } from "react";
import items from "./items";
import itemsCategory from "./itemsCategory";
import { SwiperSlide } from "swiper/react";

import PopularDishesSlider from "./PopularDishesSlider/PopularDishesSlider";
import PopularDishesCategorySlider from "./PopularDishesSlider/PopularDishesCategorySlider copy";
import SwiperPopularDishesCategorySlider from "./PopularDishesSlider/SwiperPopularDishesCategorySlider";
import SwiperPopularDishesSlider from "./PopularDishesSlider/SwiperPopularDishesSlider";
import SectionLink from "../../../shared/components/SectionLink/SectionLink";
import css from "./popularDishes.module.scss";

const PopularDishes = () => {
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
        <div className={css.wrapperSlideItem}>
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
            <a className={css.btnDishOrder}>to order</a>
          </div>
        </div>
      </SwiperSlide>
    );
  });
  const elementCategory = itemsCategory.map(({ id, name }) => {
    return (
      <li key={id}>
        {isCenterMode && (
          <SwiperSlide className={css.categorySlideItem} key={id}>
            <div className={css.wrapperCategoryItem}>
              <p className={css.categorySlideItem}>
                {name}
                <span className={css.countCategoryDish}>10</span>
              </p>
            </div>
          </SwiperSlide>
        )}
        {!isCenterMode && (
          <div className={css.categorySlideItem} key={id}>
            <div className={css.wrapperCategoryItem}>
              <p className={css.categorySlideItem}>
                {name}
                <span className={css.countCategoryDish}>10</span>
              </p>
            </div>
          </div>
        )}
      </li>
    );
  });
  console.log("elementCategory", elementCategory);
  return (
    <section className={`${css.section}  ${!isCenterMode && "container"}`}>
      <h2 className={css.titlePopularDish}>popular dishes</h2>
      <div>
        {!isCenterMode && (
          <div className={css.wrapperCategoryListLink}>
            <ul className={css.categoryList}>{elementCategory}</ul>
            <SectionLink>
              <p>see ALL SALADS</p>
            </SectionLink>
          </div>
        )}
      </div>
      {isCenterMode && (
        <SwiperPopularDishesCategorySlider elementCategory={elementCategory} />
      )}
      {/* <PopularDishesCategorySlider item={elementCategory} /> */}
      {/* <PopularDishesSlider item={element} /> */}
      <SwiperPopularDishesSlider item={element} />
      {isCenterMode && (
        <SectionLink>
          <p>see ALL SALADS</p>
        </SectionLink>
      )}
    </section>
  );
};
export default PopularDishes;
