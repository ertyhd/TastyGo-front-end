import styles from "./starsComponent.module.scss";
import { SvgSelector } from "../../SvgSelector/SvgSelector";
import { useState } from "react";

const StarsComponent = ({ data }) => {
  const [isStarHover, setStarHover] = useState(0);
  const [isRating, setRating] = useState(0);

  const handleClick = (i) => {
    setRating(i);
    data(i);
  };

  const elements = () => {
    const stars = [];
    for (let i = 1; i <= 5; i += 1) {
      stars.push(
        <button
          type="button"
          onClick={() => {
            handleClick(i);
          }}
          key={i}
          onMouseEnter={() => {
            setStarHover(i);
          }}
        >
          <SvgSelector
            styles={
              isStarHover >= i || isRating >= i
                ? styles.chngStar
                : styles.defStar
            }
            id="star"
          />
        </button>
      );
    }
    return stars;
  };
  return (
    <div
      onMouseLeave={() => {
        setStarHover(0);
      }}
      className={styles.addReviewForm_ratingStars}
    >
      {elements()}
    </div>
  );
};

export default StarsComponent;
