import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./swiperDesktop.module.scss";

import { dateFormater } from "../../../utils/dateFormater";

import RatingStars from "../../../shared/components/RatingStars/RatingStars";
import { Autoplay } from "swiper/modules";

const SwiperMobile = ({ items }) => {
  const [isDisplay, setDisplay] = useState(1);
  useEffect(() => {
    let displayWidth = window.innerWidth;
    let k = 1.1 + ((1.9 - 1.1) * (displayWidth - 360)) / 440;
    setDisplay(k);
  }, [isDisplay]);

  const elements = items.map(
    ({ id, name, avatar, date, rating, header, text }) => (
      <SwiperSlide key={id}>
        <div className={styles.swipMobileCard}>
          <div className={styles.swipMobileCard_textPsition}>
            <p className={styles.swipMobileCard_header}>{header}</p>
            <p className={styles.swipMobileCard_text}>{text}</p>
          </div>
          <div className={styles.swipMobileCard_userDatePsition}>
            <div className={styles.swipMobileCard_userInfo__starsWraper}>
              <RatingStars
                styles={styles.swipMobileCard_userInfo__stars}
                rating={rating}
              />
            </div>
            <div className={styles.swipMobileCard_userInfo}>
              <div className={styles.swipMobileCard_userInfo__avatarWrapper}>
                <img
                  alt="avatar"
                  className={styles.swipMobileCard_userInfo__avatar}
                  src={require(`../../../assete/jpg/${avatar}`)}
                />
              </div>
              <div className={styles.swipMobileCard_userInfo__nameRaitDate}>
                <p
                  className={styles.swipMobileCard_userInfo__nameRaitDate__name}
                >
                  {name}
                </p>

                <p
                  className={styles.swipMobileCard_userInfo__nameRaitDate__date}
                >
                  {dateFormater(date)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    )
  );

  return (
    <>
      <Swiper
        slidesPerView={isDisplay}
        spaceBetween={-75}
        centeredSlides={true}
        loop={true}
        className="swaprWrap"
        autoplay={{
          delay: 5000,
          // disableOnInteraction: false,
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
