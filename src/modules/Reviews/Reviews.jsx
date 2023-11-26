import { Link } from "react-router-dom";
import styles from "./reviewsDesk.module.scss";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItemsReviews } from "../../redux/reviews/reviews-selector";
import { getReviews } from "../../redux/reviews/reviews-operation";
import usersRevJ from "./usersReviews.json";
import deskPaginPNG from "../../assete/png/pagination.png";
import SwiperDesktopTab from "./SwiperDesktopTab/SwiperDesktopTab";
import SingleRevieweCard from "../../shared/components/SingleRevieweCard/SingleRevieweCard";

const Reviews = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const items = useSelector(getItemsReviews);

  console.log("items", items);
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
          <button>Add review</button>
          <div>
            <img width={166} alt="" src={deskPaginPNG} />
          </div>
        </div>
        <div className={styles.reviews_sliderBlock__slider}>
          <SwiperDesktopTab items={items} />
          {/* <SingleRevieweCard item={items[0]} /> */}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
