import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getItemsCategory } from "../../../../redux/category/category-selector";
import { useState } from "react";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { nanoid } from "nanoid";

import css from "./menuBoardSlider.module.scss";

const MenuBoardSlider = ({ nameCategory }) => {
  const [filterCategory, setFilterCategory] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // console.log("filterCategory", filterCategory);
  const ItemsFoodsByCategory = useSelector(getItemsCategory);
  // console.log("ItemsFoodsByCategory", ItemsFoodsByCategory);

  useEffect(() => {
    const foundItem = ItemsFoodsByCategory.find(
      (item) => item.title === nameCategory
    );
    setFilterCategory(foundItem && foundItem.images ? foundItem.images : {});
  }, [ItemsFoodsByCategory, nameCategory]);

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

  const currentSizeItem = () => {
    switch (true) {
      //   case windowWidth > 1440:
      //     return filterCategory.desktop;
      case windowWidth < 768:
        return filterCategory.mobil;
      case windowWidth < 1440:
        return filterCategory.tablet;
      default:
        return filterCategory.desktop;
    }
  };
  const ttttt = currentSizeItem();
  // {ttttt && (const imageItem = ttttt.map((item, index) => (
  //    <li>
  //         <SwiperSlide key={index}>
  //           <div className={css.wrapperCategoryItem}>{item}</div>
  //         </SwiperSlide>
  //       </li>

  // )))
  // }
  let imageItems;

  if (ttttt) {
    imageItems = ttttt.map((item) => (
      <li key={nanoid()}>
        <SwiperSlide key={nanoid()}>
          <div className={css.wrapperCategoryItem}>
            <img alt="foto" src={item} />
          </div>
        </SwiperSlide>
      </li>
    ));
  }
  return (
    <section className={css.wrapperBoard}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        className="mySwiperCategory"
        // className={styles.swaprWrap}
        //
      >
        {imageItems}
      </Swiper>
    </section>
  );
};
export default MenuBoardSlider;
