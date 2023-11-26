import styles from "./hero.module.scss";

import { useState } from "react";

import image512h from "../../assete/jpg/hero512h.jpg";
import image4x from "../../assete/jpg/2young-woman-eating-pasta-in-a-cafe-2x.jpg";
import image2x from "../../assete/jpg/2young-woman-eating-pasta-in-a-cafe-1x.jpg";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
import { Link } from "react-router-dom";
import ButtonLight from "../../shared/components/Button/ButtonLight/ButtonLight";

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
      <img
        alt="Young woman eating pasta in a cafe"
        className={styles.hero_container__img}
        src={image512h}
      />
      <div className={styles.hero_container__absoluetBlock}>
        <h1>Fast & Convenient Delivery Service</h1>
        <Link to="/menu" className={styles.hero_container__button}>
          View menu
        </Link>
      </div>
    </section>
  );
};

export default Hero;
