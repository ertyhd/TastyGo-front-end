import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "./swiperSlider.scss";
import styles from "./swiperMobile.module.scss";

import RatingStars from "./RatingStars";
import { Autoplay } from "swiper/modules";

const SwiperMobile = ({ items }) => {
  const elements = items.map(
    ({ id, name, avatar, date, rating, header, text }) => (
      <SwiperSlide key={id}>
        <div className={styles.swipMobileCard}>
          <div className={styles.swipMobileCard_userInfo}>
            <div className={styles.swipMobileCard_userInfo__avatarWrapper}>
              <img
                alt="avatar"
                className={styles.swipMobileCard_userInfo__avatar}
                src={require(`../../assete/jpg/${avatar}`)}
              />
            </div>
            <div className={styles.swipMobileCard_userInfo__nameRaitDate}>
              <p className={styles.swipMobileCard_userInfo__nameRaitDate__name}>
                {name}
              </p>
              <div className={styles.swipMobileCard_userInfo__starsWraper}>
                <RatingStars
                  styles={styles.swipMobileCard_userInfo__stars}
                  rating={rating}
                />
              </div>
              <p className={styles.swipMobileCard_userInfo__nameRaitDate__date}>
                {date}
              </p>
            </div>
          </div>
          <p className={styles.swipMobileCard_header}>{header}</p>
          <p className={styles.swipMobileCard_text}>{text}</p>
        </div>
      </SwiperSlide>
    )
  );

  return (
    <>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={-75}
        centeredSlides={true}
        loop={true}
        className={styles.swaprWrap}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {elements}
      </Swiper>
    </>
  );
};
const SwiperMobileWrapper = React.memo(SwiperMobile);

export default SwiperMobileWrapper;
