import image from "../../assete/jpg/young-woman-eating-pasta-in-a-cafe 1.jpg";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_container__backgroundBlock}>
        <div className={styles.hero_container__backgroundBlockLeft}>
          <svg width="100vw" height="115px" />
        </div>
        <div className={styles.hero_container__backgroundRight}>
          <svg width="100vw" height="115px" />
        </div>
        <div className={styles.hero_container__backgroundBlockLeft}>
          <svg width="100vw" height="115px" />
        </div>
        <div className={styles.hero_container__backgroundRight}>
          <svg width="100vw" height="115px" />
        </div>
        <div className={styles.hero_container__backgroundBlockLeft}>
          <svg width="100vw" height="115px" />
        </div>
      </div>
      <div className={styles.hero_container__content}>
        <img
          className={styles.hero_container__img}
          alt="young woman eating pasta in a cafe "
          src={image}
        />
        <button className={styles.hero_container__btn}>
          <span className={styles.hero_container__btn_text}>Make an order</span>
          <SvgSelector id="arrowTopRight" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
