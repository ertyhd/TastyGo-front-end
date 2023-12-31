import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SwiperSlide } from "swiper/react";
// import SingleCard from "../../../shared/components/SingleCard/SingleCard";
import SectionLink from "../../../shared/components/SectionLink/SectionLink";

import { fetchFoodsSeasonal } from "../../../redux/foods/foods-operations";
import { getItemsSeason } from "../../../redux/foods/foods-selector";
import SwiperPopularDishesSlider from "./PopularDishesSlider/SwiperPopularDishesSlider";
import ImageMainPopularSection from "./ImageMainPopularSection/ImageMainPopularSection";
import { SvgSelector } from "../../../shared/components/SvgSelector/SvgSelector";
import css from './popularDishes.module.scss'

const PopularDishes = ({ windowWidth }) => {
  
  const ItemsSeasonFoods = useSelector(getItemsSeason);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFoodsSeasonal({ page: 1 }));
  }, [dispatch]);

  const element = ItemsSeasonFoods.map(
    ({ _id, title, imgUrl, weight, price }) => {
      return (
        <SwiperSlide key={_id}>
          {/* <SingleCard
            name={title}
            imgUrl={imgUrl}
            // description={description}
            weight={weight}
            price={price}
          /> */}
          <div className={css.wrapperSlideItem}>
            <div className={css.wrapperContentDish}>
              <button className={css.btnHeart} type="button">
                <SvgSelector styles={css.iconHeart} id="iconHeart" />
              </button>

              <div className={css.wrapperImgDish}>
                <img className={css.imgDish} alt="dish" src={`${imgUrl}`} />
              </div>
              <div className={css.wrapperDescriptionDish}>
                <p className={css.nameDish}>{title}</p>
                {/* <p className={css.descriptionDish}>{description}</p> */}
                <p className={css.weightDish}>{weight}g.</p>
                <p className={css.priceDish}>${price}</p>
              </div>
              <div className={css.boxDishFooter}>
                <Link className={css.btnDishOrder}>To Order</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    }
  );
    return (
      <section className={css.section}>
        <div className={css.wrapperTitleImage}>
          <ImageMainPopularSection />
          <h2 className={css.titlePopularSection}>
            Enjoy popular dishes at home
          </h2>
        </div>
        <div className={css.wrapperSlider}>
          <div className={css.sectionLinkContainer}>
            <div className={css.sectionLink}>
              <SectionLink>
                <p className={css.linkAllCategory}>View menu</p>
              </SectionLink>
            </div>
          </div>
          <SwiperPopularDishesSlider item={element} sizeWindow={windowWidth} />
        </div>
      </section>
    );
};

export default PopularDishes;
