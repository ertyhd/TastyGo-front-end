import React from "react";

import styles from "./reviews.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
import ButtonArrow from "../../shared/components/Button/ButtonArrow/ButtonArrow";

import SwiperMobileWrapper from "./SwiperMobile/SwiperMobile";

import usersRevJ from "./usersReviews.json";

const Reviews = () => {
  const userRevRandom = usersRevJ.sort(() => Math.random() - 0.5);
  const userRevThree = userRevRandom.slice(0, 3);

  const [isUserRev] = useState(userRevThree);
  const [counter, setCounter] = useState(0);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [counter, isUserRev]);

  const reviewsSwiperRef = React.useRef(null);

  const handleClickPrev = () => reviewsSwiperRef.current.swiper.slidePrev();
  const handleClickNext = () => reviewsSwiperRef.current.swiper.slideNext();

  return (
    <section
      className={`${styles.reviews_container} ${isMobile ? "" : "container"}`}
    >
      <div className={styles.reviews_container__header}>
        <div className={styles.reviews_container__headerWrapper}>
          <p className={styles.reviews_container__headerWrapper__p}>reviews</p>
        </div>

        {isMobile && (
          <div className={styles.swiperComponent}>
            <h2>Our clients have a ton to say</h2>
            <SwiperMobileWrapper items={usersRevJ} viewPort={isMobile} />
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
          <div className={styles.reviews_container__cardList__headerBlock}>
            <div>
              <h2>Our clients have a ton to say</h2>
              <Link>Leave a Review</Link>
            </div>
            <div className={styles.arrowWrapper}>
              <ButtonArrow prev={handleClickPrev} next={handleClickNext} />
            </div>
          </div>
          <div className={styles.reviews_container__cardList__swiper}>
            <SwiperMobileWrapper
              items={usersRevJ}
              viewPort={isMobile}
              refference={reviewsSwiperRef}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
