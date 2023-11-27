import { SvgSelector } from "../../SvgSelector/SvgSelector";
import css from "./buttonArrow.module.scss";

const ButtonArrow = ({ children, prev, next }) => {
  return (
    <div className={css.swiperBtnWrapper}>
      <button type="button" className={css.btn} onClick={prev}>
        <SvgSelector id="paginationArrowL" styles={css.arrowSwiper_style} />
      </button>
      {/* {children} */}
      <div className="swiperPaginationCustom"></div>
      <button type="button" onClick={next} className={css.btn}>
        <SvgSelector id="paginationArrowR" styles={css.arrowSwiper_style} />
      </button>
    </div>
  );
};
export default ButtonArrow;

{
  /* <SvgSelector id="arrowLeftSwiper" styles={css.arrowSwiper_style} /> */
}
