import { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import itemsCategory from './itemsCategory';
import css from './menuCategoriSlider.module.scss';
import "../../PopularDishes/PopularDishesSlider/swiperSlider.scss";



const MenuCategorySlider = () => {
    const [isCenterMode, setIsCenterMode] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsCenterMode(window.innerWidth <= 1440);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const elementCategory = itemsCategory.map(({ id, name }) => {
      return (
        <li className={css.wrapperCategoryItem} key={id}>
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
            // <div key={id}>
              <p className={css.categorySlideItem}>
                {name}
                {/* <span className={css.countCategoryDish}>10</span> */}
              </p>
            // </div>
          )}
        </li>
      );
    });
    return (
      <div className={css.wrapperCategory}>
        {isCenterMode && (
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
        {!isCenterMode && (
          <ul className={css.wrapperCategoryItem}>{elementCategory}</ul>
        )}
        {!isCenterMode && (
          <p className={css.nameCounterCategory}>
            тут буде бек
            <span className={css.counterCategoryDesktop}>10</span>
          </p>
        )}
      </div>
    );
}
export default MenuCategorySlider