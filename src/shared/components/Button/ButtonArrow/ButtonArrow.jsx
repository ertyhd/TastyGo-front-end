import { SvgSelector } from "../../SvgSelector/SvgSelector";
import styles from "./buttonArrow.module.scss";

const ButtonArrow = ({ prev, next, el }) => {
  return (
    <div className={styles.swiperBtnWrapper}>
      <button type="button" className={styles.btn} onClick={prev}>
        <SvgSelector id="paginationArrowL" styles={styles.arrowSwiper_style} />
      </button>
      <div className={`${styles.swiperBtnWrapper_points} ${el}`}></div>
      <button type="button" onClick={next} className={styles.btn}>
        <SvgSelector id="paginationArrowR" styles={styles.arrowSwiper_style} />
      </button>
    </div>
  );
};
export default ButtonArrow;
