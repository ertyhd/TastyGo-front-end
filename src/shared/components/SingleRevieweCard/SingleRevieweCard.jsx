import styles from "./singleRevieweCard.module.scss";
import RatingStars from "../RatingStars/RatingStars";
import { dateFormater } from "../../../utils/dateFormater";

const SingleRevieweCard = ({ item }) => {
  const { name, avatarURL, date, rating, text } = item;

  return (
    <div className={styles.cardContainer}>
      <p className={styles.cardContainer_revieweText}>{text}</p>
      <div className={styles.cardContainer_revieweData}>
        <div className={styles.cardContainer_starsWrapper}>
          <RatingStars
            styles={styles.cardContainer_starsBlock}
            rating={rating}
          />
        </div>

        <div className={styles.cardContainer_avNameBlock}>
          <div className={styles.cardContainer_avNameBlock__img}>
            <img alt="avatar" src={avatarURL} />
          </div>
          <div className={styles.cardContainer_avNameBlock__name}>
            <h2>{name}</h2>
            <p>{dateFormater(date)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRevieweCard;
