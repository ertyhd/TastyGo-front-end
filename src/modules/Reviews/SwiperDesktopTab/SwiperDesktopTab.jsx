import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import styles from "./swiperDesktopTab.module.scss";
import "./swiperSlider.scss";

import SingleRevieweCard from "../../../shared/components/SingleRevieweCard/SingleRevieweCard";

const SwiperDesktopTab = ({ items }) => {
  // const [isDisplay, setDisplay] = useState(1);
  // useEffect(() => {
  //   let displayWidth = window.innerWidth;
  //   let k = 1.1 + ((1.9 - 1.1) * (displayWidth - 360)) / 440;
  //   setDisplay(k);
  // }, [isDisplay]);
  console.log("wwww", items);
  const elements = items.map((item) => (
    <SwiperSlide key={item._id}>
      <div style={{ width: "409px" }}>
        <SingleRevieweCard item={item} />
      </div>
    </SwiperSlide>
  ));

  return (
    <div className={styles.swiperDeskWrapper}>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={false}
        loop={true}
        className="swaprWrap"
        // autoplay={{
        //   delay: 5000,
        //   // disableOnInteraction: false,
        // }}
        pagination={{
          dynamicBullets: true,
        }}
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
