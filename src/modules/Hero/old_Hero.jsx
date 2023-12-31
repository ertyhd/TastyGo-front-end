import styles from "./hero.module.scss";

import { useState } from "react";

import image512h from "../../assete/jpg/2young-woman-eating-pasta-in-a-cafe-512h.jpg";
import image4x from "../../assete/jpg/2young-woman-eating-pasta-in-a-cafe-2x.jpg";
import image2x from "../../assete/jpg/2young-woman-eating-pasta-in-a-cafe-1x.jpg";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
import { Link } from "react-router-dom";

const Hero = () => {
  const [isBtnClicked, setBtnClicked] = useState(false);

  const handleClick = () => {
    if (isBtnClicked === false) {
      setBtnClicked(true);
    } else {
      setBtnClicked(false);
    }
  };
  return (
    <section className={styles.hero_container}>
      <div className={styles.hero_container__backgroundBlock}>
        <div className={styles.hero_container__backgroundBlockLeft}>
          <svg width="200vw" />
        </div>
        <div className={styles.hero_container__backgroundRight}>
          <svg width="200vw" />
        </div>
        <div
          style={{ marginLeft: "187px" }}
          className={styles.hero_container__backgroundBlockLeft}
        >
          <svg width="200vw" />
        </div>
        <div
          style={{ marginLeft: "187px" }}
          className={styles.hero_container__backgroundRight}
        >
          <svg width="200vw" />
        </div>
        <div
          style={{ marginLeft: "374px" }}
          className={styles.hero_container__backgroundBlockLeft}
        >
          <svg width="200vw" />
        </div>
      </div>
      <div className={styles.hero_container__content}>
        <img
          className={styles.hero_container__img}
          alt="several dishes are on the table"
          src={image2x}
          srcSet={`${image2x} 480w, ${image4x} 800w, ${image512h} 1200w`}
        />
        <Link
          onClick={handleClick}
          className={`${styles.hero_container__btn} ${
            isBtnClicked ? styles.hero_container__btn_pressed : ""
          }`}
        >
          <span className={styles.hero_container__btn_text}>see our menu</span>
          <SvgSelector
            id="arrowTopRight"
            styles={styles.arrowBtnSvg}
            viewBox={"0 0 46 46"}
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
