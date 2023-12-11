import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import styles from "./reviewesSwiper.module.scss";
import "../../../styles/common/swiperSlider.scss";

import SingleRevieweCard from "../../../shared/components/SingleRevieweCard/SingleRevieweCard";

const SwiperDesktopTab = ({ items, refference }) => {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    setMobile(mediaQuery.matches);
    const handleMediaChange = (event) => {
      setMobile(event.matches);
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addListener(handleMediaChange);
    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, [isMobile]);
  const elements = items.map((item) => (
    <SwiperSlide key={item._id}>
      <SingleRevieweCard item={item} />
    </SwiperSlide>
  ));

  return (
    <div className={styles.swiperDeskWrapper}>
      <Swiper
        // style={{ width: "100%" }}
        ref={refference}
        slidesPerView={isMobile ? 1.2 : 2}
        spaceBetween={isMobile ? 8 : 29}
        freeMode={true}
        centeredSlides={isMobile ? true : false}
        loop={true}
        // className="swaprWrap"
        // autoplay={{
        //   delay: 5000,
        //   // disableOnInteraction: false,
        // }}
        pagination={{
          el: ".swiperPaginationCustom",
          dynamicBullets: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
      >
        {elements}
      </Swiper>
    </div>
  );
};
// const SwiperDesktopTabWrapper = React.memo(SwiperDesktopTab);

// export default SwiperDesktopTabWrapper;
export default SwiperDesktopTab;
