import { Link } from "react-router-dom";
import styles from "./reviews.module.scss";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsReviews } from "../../redux/reviews/reviews-selector";
import { getReviews } from "../../redux/reviews/reviews-operation";

import ReviewesSwiper from "./ReviewesSwiper/ReviewesSwiper";
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
    <section className={`${styles.reviewsContainer} container`}>
      <div className={styles.reviewsLeftBlockTop}>
        <span className={styles.reviewsLeftBlock_title}>reviews</span>
        <h2>Our clients have a ton to say</h2>
      </div>

      <div className={styles.reviewsLeftBlockBottom}>
        <p>*Only registered users can leave reviews</p>
        <button className={styles.reviewsLeftBlock_button} type="button">
          Add review
        </button>
        <div className={styles.reviewsLeftBlock_arrows}>
          <ButtonArrow
            prev={handleClickPrev}
            next={handleClickNext}
            el={"swiperPaginationCustom"}
          />
        </div>
      </div>

      <div className={styles.reviewsRightBlock}>
        <Link className={styles.reviewsRightBlock_link} to="/reviews">
          View all reviews
        </Link>
        <div className={styles.reviewsRightBlock_slider}>
          <ReviewesSwiper items={items} refference={reviewsSwiperRef} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
