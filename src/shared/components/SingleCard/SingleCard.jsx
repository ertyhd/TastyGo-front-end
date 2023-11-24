import { Link } from "react-router-dom";

import css from "./singleCard.module.scss";
import { SvgSelector } from "../SvgSelector/SvgSelector";

const SingleCard = ({ name, imgUrl, description, weight, price }) => {
  
  return (
    <div className={css.wrapperSlideItem}>
      <div className={css.wrapperContentDish}>
        <button className={css.btnHeart} type="button">
          <SvgSelector styles={css.iconHeart} id="iconHeart" />
        </button>

        <div className={css.wrapperImgDish}>
          <img className={css.imgDish} alt="dish" src={`${imgUrl}`} />
        </div>
        <div className={css.wrapperDescriptionDish}>
          <p className={css.nameDish}>{name}</p>
          <p className={css.descriptionDish}>{description}</p>
          <p className={css.weightDish}>{weight}g.</p>
          <p className={css.priceDish}>${price}</p>
        </div>
        <div className={css.boxDishFooter}>
          <Link className={css.btnDishOrder}>To Order</Link>
        </div>
      </div>
    </div>
  );
};
export default SingleCard;
