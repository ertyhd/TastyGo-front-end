import { Link } from "react-router-dom";
import styles from "./reviewsDesk.module.scss";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsReviews } from "../../redux/reviews/reviews-selector";
import { getReviews } from "../../redux/reviews/reviews-operation";

import SwiperDesktopTab from "./SwiperDesktopTab/SwiperDesktopTab";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
import ButtonArrow from "../../shared/components/Button/ButtonArrow/ButtonArrow";

// import SingleRevieweCard from "../../shared/components/SingleRevieweCard/SingleRevieweCard";

const Reviews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const items = useSelector(getItemsReviews);

  const reviewsSwiperRef = useRef(null);

  const handleClickPrev = () => reviewsSwiperRef.current.swiper.slidePrev();
  const handleClickNext = () => reviewsSwiperRef.current.swiper.slideNext();

  return (
    <section className={styles.reviewsContainer}>
      <div className={styles.reviews_headerBlock}>
        <span className={styles.reviews_headerBlock__title}>reviews</span>
        <Link className={styles.reviews_headerBlock__link} to="/reviews">
          View all reviews
        </Link>
      </div>
      <div className={styles.reviews_sliderBlock}>
        <div className={styles.reviews_sliderBlock__description}>
          <h1>Our clients have a ton to say</h1>
          <p>*Only registered users can leave reviews</p>
          <button className={styles.reviews_sliderBlock__button} type="button">
            Add review
          </button>
          <div>
            <ButtonArrow prev={handleClickPrev} next={handleClickNext} />
            {/* <button className={styles.swiperPagination_button} type="button">
              <SvgSelector id="paginationArrowL" />
            </button>
            <button className={styles.swiperPagination_button} type="button">
              <SvgSelector id="paginationArrowR" />
            </button> */}
          </div>
        </div>
        <div className={styles.reviews_sliderBlock__slider}>
          <SwiperDesktopTab items={items} refference={reviewsSwiperRef} />
          {/* <SingleRevieweCard item={items[0]} /> */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
