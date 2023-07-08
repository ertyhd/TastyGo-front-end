import image from "../../assete/png/young-woman-eating-pasta-in-a-cafe1.png";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_container__backgroundBlock}>
        <div className={styles.hero_container__backgroundRight}>
          <svg width="100vw" height="115px" />
        </div>
        <div className={styles.hero_container__backgroundBlockLeft}>
          <svg width="100vw" height="115px" />
        </div>
        <div className={styles.hero_container__backgroundRight}>
          <svg width="110vw" height="115px" />
        </div>
        <div className={styles.hero_container__backgroundBlockLeft}>
          <svg width="100vw" height="115px" />
        </div>
      </div>

      <img
        className={styles.hero_container__img}
        alt="young woman eating pasta in a cafe "
        src={image}
      />
      <button className={styles.hero_container__btn}>
        <span className={styles.hero_container__btn_text}>VIEW MENU</span>
        <SvgSelector id="arrowTopRight" />
      </button>
    </div>
  );
};

export default Hero;
