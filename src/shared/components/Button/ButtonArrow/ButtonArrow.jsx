import { SvgSelector } from "../../SvgSelector/SvgSelector";
import css from './buttonArrow.module.scss'

const ButtonArrow = ({children, prev, next}) => {
    return (
      <div className={css.swiperBtnWrapper}>
        <button className={css.btn} onClick={prev}>
          <SvgSelector id="arrowLeftPopularDishDesc" />
        </button>
        {children}
        <button onClick={next} className={css.btn}>
          <SvgSelector id="arrowRightPopularDishDesc" />
        </button>
      </div>
    );
}
export default ButtonArrow;