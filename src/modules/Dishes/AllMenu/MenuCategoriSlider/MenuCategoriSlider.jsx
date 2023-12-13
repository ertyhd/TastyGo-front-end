import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { getItemsCategory } from "../../../../redux/category/category-selector";
import { fetchCategory } from "../../../../redux/category/category-operations";
import { getItemsLenght } from "../../../../redux/foods/foods-selector";

// import itemsCategory from "./itemsCategory";
import css from "./menuCategoriSlider.module.scss";
import "../../PopularDishes/PopularDishesSlider/swiperSlider.scss";

const MenuCategorySlider = ({
  handleNameCategory,
  nameCategory,
  sizeWindow,
}) => {
  

  const dispatch = useDispatch();
  const ItemsFoodsByCategory = useSelector(getItemsCategory);
  const itemsLenght = useSelector(getItemsLenght);

  const sortedItems = [...ItemsFoodsByCategory].sort(
    (a, b) => a.sequenceNumber - b.sequenceNumber
  );

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);


  const [isDisplay, setDisplay] = useState(1);
  console.log("isDisplay", isDisplay);
  useEffect(() => {
//     let displayWidth = window.innerWidth;

//     {
//       sizeWindow > 768 && let k = sizeWindow - (sizeWindow + (215 + (displayWidth - 360 + 1)));
//     };
//      {
//       sizeWindow <768 && let k = sizeWindow - (sizeWindow + (215 + (displayWidth - 768 + 1)));
// };
//     setDisplay(k);

    setDisplay(
      sizeWindow > 768
        ? sizeWindow - (sizeWindow + (560 + (sizeWindow - 768 + 1)))
          // ? -570
          : sizeWindow < 768
            ? sizeWindow - (sizeWindow + (215 + (sizeWindow - 360 + 1)))
            : 1
     );
  }, [sizeWindow]);
  const elementCategory = sortedItems.map(({ _id, title }) => {
    return (
      <li
        // className={css.categoryList}
        key={_id}
        onClick={() => handleNameCategory(title)}
      >
        {sizeWindow < 1440 && (
          <SwiperSlide
            className={css.categorySlideItem}
            key={_id}
            onClick={() => handleNameCategory(title)}
          >
            {/* <div className={css.categoryList}> */}
            <NavLink to={`/menu/${title}`} className={css.categoryList}>
              {/* <p className={(css.categorySlideItem)}> */}
              {title}
              {/* <span className={css.countCategoryDish}>{itemsLenght}</span> */}
              {/* </p> */}
            </NavLink>
            {/* </div> */}
          </SwiperSlide>
        )}
        {sizeWindow > 1440 && (
          // <div key={id}>
          <NavLink to={`/menu/${title}`} className={css.categoryList}>
            {/* <button className={css.categorySlideItem}> */}
            {title}
            {/* <span className={css.countCategoryDish}>10</span> */}
            {/* </button> */}
          </NavLink>
          // </div>
        )}
      </li>
    );
  });
  return (
    <div className={css.wrapperCategory}>
      <div className={css.wrapperSlider}>
        {sizeWindow < 1440 && (
          <Swiper
            // slidesPerView={isDisplay}
            slidesPerView={"auto"}
            spaceBetween={isDisplay}
            loop={true}
            className="myMenuSwiperCategory"
            // className={styles.swaprWrap}
            //
          >
            {elementCategory}
          </Swiper>
        )}
      </div>
      {sizeWindow > 1440 && (
        <ul className={css.wrapperCategoryItem}>{elementCategory}</ul>
      )}

      <div className={css.wrapperCounter}>
        <p className={css.nameCounterCategory}>
          {nameCategory}
          <span className={css.counterCategoryDesktop}>{itemsLenght}</span>
        </p>
        <p className={css.items}>
          
          <span className={css.counterItems}>{itemsLenght}</span>
          items
        </p>
      </div>
    </div>
  );
};
export default MenuCategorySlider;
