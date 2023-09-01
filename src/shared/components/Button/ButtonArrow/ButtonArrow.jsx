import { SvgSelector } from "../../SvgSelector/SvgSelector";
import css from "./buttonArrow.module.scss";

const ButtonArrow = ({ children, prev, next }) => {
  return (
    <div className={css.swiperBtnWrapper}>
      <button className={css.btn} onClick={prev}>
        <SvgSelector id="arrowLeftSwiper" styles={css.arrowSwiper_style} />
      </button>
      {children}
      <button onClick={next} className={css.btn}>
        <SvgSelector id="arrowRightSwiper" styles={css.arrowSwiper_style} />
      </button>
    </div>
  );
};
export default ButtonArrow;
