import { Link } from "react-router-dom";

import css from "./singleCard.module.scss";
import { SvgSelector } from "../SvgSelector/SvgSelector";

const SingleCard = ({ name, description, weight, price }) => {
  return (
    <div className={css.wrapperSlideItem}>
      <div className={css.wrapperContentDish}>
        <button className={css.btnHeart} type="button">
          <SvgSelector styles={css.iconHeart} id="iconHeart" />
        </button>

        <div className={css.wrapperImgDish}>
          <img
            className={css.imgDish}
            alt="dish"
            src={require("../../../assete/jpg/salad-with-salmon-parmesan-cheese-tomatoes-salad-mix-banner 1.jpg")}
          />
        </div>
        <div className={css.wrapperDescriptionDish}>
          <p className={css.nameDish}>{name}</p>
          <p className={css.descriptionDish}>{description}</p>
          <p className={css.weightDish}>{weight}g.</p>
        </div>
      </div>
      <div className={css.boxDishFooter}>
        <p className={css.priceDish}>${price}</p>
        <Link className={css.btnDishOrder}>to order</Link>
      </div>
    </div>
  );
};
export default SingleCard;
