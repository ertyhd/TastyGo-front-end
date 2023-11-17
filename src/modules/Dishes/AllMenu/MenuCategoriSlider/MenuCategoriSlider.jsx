import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { getItemsCategory } from "../../../../redux/category/category-selector";
import { fetchCategory } from "../../../../redux/category/category-operations";
import { getItemsLenght } from "../../../../redux/foods/foods-selector";

import itemsCategory from "./itemsCategory";
import css from "./menuCategoriSlider.module.scss";
import "../../PopularDishes/PopularDishesSlider/swiperSlider.scss";

const MenuCategorySlider = ({ handleNameCategory, nameCategory }) => {
  // const [isCenterMode, setIsCenterMode] = useState(false);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  const ItemsFoodsByCategory = useSelector(getItemsCategory);
  const itemsLenght = useSelector(getItemsLenght);

   const sortedItems = [...ItemsFoodsByCategory].sort(
     (a, b) => a.sequenceNumber - b.sequenceNumber
   );

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsCenterMode(window.innerWidth <= 1440);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [handleNameCategory]);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
      // Додаємо слухача подій resize при монтажі компонента
      window.addEventListener("resize", handleResize);

      // Викликаємо handleResize при завантаженні компонента
      handleResize();

      // Прибираємо слухача подій при розмонтажі компонента
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  const elementCategory = sortedItems.map(({ _id, title }) => {
    return (
      <li
        className={css.wrapperCategoryItem}
        key={_id}
        onClick={() => handleNameCategory(title)}
      >
        {windowWidth < 1440 && (
          <SwiperSlide className={css.categorySlideItem} key={_id}>
            <div className={css.wrapperCategoryItem}>
              <p className={css.categorySlideItem}>
                {title}
                <span className={css.countCategoryDish}>{itemsLenght}</span>
              </p>
            </div>
          </SwiperSlide>
        )}
        {windowWidth > 1440 && (
          // <div key={id}>
          <NavLink to={`/menu/${title}`} className={css.categorySlideItem}>
            {title}
            {/* <span className={css.countCategoryDish}>10</span> */}
          </NavLink>
          // </div>
        )}
      </li>
    );
  });
  return (
    <div className={css.wrapperCategory}>
      {windowWidth < 1440 && (
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
      )}
      {windowWidth > 1440 && (
        <ul className={css.wrapperCategoryItem}>{elementCategory}</ul>
      )}
      {windowWidth > 1440 && (
        <p className={css.nameCounterCategory}>
          {nameCategory}
          <span className={css.counterCategoryDesktop}>{itemsLenght}</span>
        </p>
      )}
    </div>
  );
};
export default MenuCategorySlider;
