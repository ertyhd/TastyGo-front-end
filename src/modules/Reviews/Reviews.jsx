import styles from "./reviews.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";

import RatingStars from "../../shared/components/RatingStars/RatingStars";
import UserReviewesCards from "./UserReviewesCards/UserReviewesCards";
import SwiperMobileWrapper from "./SwiperMobile/SwiperMobile";

import usersRevJ from "./usersReviews.json";

const Reviews = () => {
  const userRevRandom = usersRevJ.sort(() => Math.random() - 0.5);
  const userRevThree = userRevRandom.slice(0, 3);

  const [isUserRev] = useState(userRevThree);
  const [isUserSingleRev, setUserSingleRev] = useState(isUserRev[0]);
  const [counter, setCounter] = useState(0);
  const [isCardChanged, setCardChanged] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Don`t forget. If need to checking media query in real time then switch addListaner

    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };

    handleMediaChange(mediaQuery);

    mediaQuery.addListener(handleMediaChange);
    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  const handleButtonClick = (cardId) => {
    setCardChanged(true);
    const selectedReview = isUserRev.find((item) => item.id === cardId);
    if (selectedReview) {
      setUserSingleRev(selectedReview);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 3);
    }, 5000);

    if (!isCardChanged) {
      setUserSingleRev(isUserRev[counter]);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [counter, isUserRev, isCardChanged]);

  return (
    <section
      className={`${styles.reviews_container} ${isMobile ? "" : "container"}`}
    >
      <div className={styles.reviews_container__header}>
        <div className={styles.reviews_container__headerWrapper}>
          <p className={styles.reviews_container__headerWrapper__p}>reviews</p>
          <h2>over 1000+ people trust us</h2>
        </div>
        {isMobile && (
          <div className={styles.swiperComponent}>
            <SwiperMobileWrapper items={usersRevJ} />
          </div>
        )}
        <Link className={styles.reviews_container__header__link}>
          <div className={styles.reviews_container__header__linkCont}>
            <p>VIew all reviews</p>
            <SvgSelector
              styles={styles.arrowBtnSvg}
              id="arrowTopRight"
              viewBox={isMobile ? "8 8 32 32" : "7 7 32 32"}
            />
          </div>
        </Link>
      </div>

      {!isMobile && (
        <div className={styles.reviews_container__cardList}>
          <UserReviewesCards
            items={isUserRev}
            cardBtnClick={handleButtonClick}
            active={isUserSingleRev.id}
          />
          <div className={styles.reviews_container__cardList__singleReview}>
            <div
              className={
                styles.reviews_container__cardList__singleReview__HeadStars
              }
            >
              <div
                className={
                  styles.reviews_container__cardList__singleReview__HeadStarsBlock
                }
              >
                <p>{isUserSingleRev.header}</p>
                <div
                  className={
                    styles.reviews_container__cardList__singleReview__starsWraper
                  }
                >
                  <RatingStars
                    rating={isUserSingleRev.rating}
                    styles={
                      styles.reviews_container__cardList__singleReview__stars
                    }
                  />
                </div>
              </div>
              <div
                className={
                  styles.reviews_container__cardList__singleReview__rating
                }
              >
                <h3
                  className={
                    styles.reviews_container__cardList__singleReview__ratingIs
                  }
                >
                  {isUserSingleRev.rating}
                </h3>
                <h3
                  className={
                    styles.reviews_container__cardList__singleReview__ratingOf
                  }
                >
                  /5
                </h3>
              </div>
            </div>

            <p
              className={styles.reviews_container__cardList__singleReview__text}
            >
              {isUserSingleRev.text}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
