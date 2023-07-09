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
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      <lottie-player
        src="https://lottie.host/4e9ea6df-7a7d-4a69-9870-447a11d50626/RyxuAyIadb.json"
        background="transparent"
        speed=".5"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></lottie-player>
    </div>
  );
};

export default Hero;
