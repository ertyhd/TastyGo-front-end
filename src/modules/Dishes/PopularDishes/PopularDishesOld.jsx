import { useState } from "react";
import { useEffect } from "react";
import items from "./items";
import itemsCategory from "./itemsCategory";
import { SwiperSlide } from "swiper/react";

// import PopularDishesSlider from "./PopularDishesSlider/PopularDishesSlider";
// import PopularDishesCategorySlider from "./PopularDishesSlider/PopularDishesCategorySlider copy";
import SwiperPopularDishesCategorySlider from "./PopularDishesSlider/SwiperPopularDishesCategorySlider";
import SwiperPopularDishesSlider from "./PopularDishesSlider/SwiperPopularDishesSlider";
import SectionLink from "../../../shared/components/SectionLink/SectionLink";
import css from "./popularDishes.module.scss";
import SingleCard from "../../../shared/components/SingleCard/SingleCard";
// import { Link } from "react-router-dom";

const PopularDishes = ({ windowWidth }) => {
  const [isCenterMode, setIsCenterMode] = useState(false);

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
  const elementCategory = itemsCategory.map(({ id, name }) => {
    return (
      <li key={id}>
        {windowWidth > 1440 && (
          <SwiperSlide className={css.categorySlideItem} key={id}>
            <div className={css.wrapperCategoryItem}>
              <p className={css.categorySlideItem}>
                {name}
                <span className={css.countCategoryDish}>10</span>
              </p>
            </div>
          </SwiperSlide>
        )}
        {windowWidth < 768 && (
          <div className={css.wrapperCategoryItem} key={id}>
            <p className={css.categorySlideItem}>
              {name}
              {/* <span className={css.countCategoryDish}>10</span> */}
            </p>
          </div>
        )}
      </li>
    );
  });
  // console.log("elementCategory", elementCategory);
  return (
    <section className={`${css.section}  ${!isCenterMode && "container"}`}>
      <div>
        {windowWidth > 1440 && (
          <div className={css.wrapperCategoryList}>
            <h2 className={css.titlePopularDish}>popular dishes</h2>
            <ul className={css.categoryList}>{elementCategory}</ul>
          </div>
        )}
      </div>
      {windowWidth > 1440 && (
        <div className={css.wrapperNameCategoryDesktop}>
          <p className={css.nameCounterCategory}>
            тут буде бек
            <span className={css.counterCategoryDesktop}>10</span>
          </p>
          <SectionLink>
            <p>see ALL SALADS</p>
          </SectionLink>
        </div>
      )}
      {windowWidth < 768 && (
        <SwiperPopularDishesCategorySlider elementCategory={elementCategory} />
      )}
      {/* <PopularDishesCategorySlider item={elementCategory} /> */}
      {/* <PopularDishesSlider item={element} /> */}
      <SwiperPopularDishesSlider item={element} sizeWindow={windowWidth} />
      {windowWidth < 768 && (
        <SectionLink>
          <p>see ALL SALADS</p>
        </SectionLink>
      )}
    </section>
  );
};
export default PopularDishes;
