import styles from "../reviews.module.scss";

const UserReviewesCards = ({ items, cardBtnClick, active }) => {
  const cardClick = (id) => {
    return cardBtnClick(id);
  };

  const elements = items.map(({ id, name, avatar, date }) => (
    <li key={id}>
      <button
        id={id === active ? styles.buttonActive : ""}
        onClick={() => cardClick(id)}
      >
        <div className={styles.reviews_container__cardList__avatarWrapper}>
          <img
            alt="avatar"
            className={styles.reviews_container__cardList__avatar}
            src={require(`../../../assete/jpg/${avatar}`)}
          />
        </div>

        <div className={styles.reviews_container__cardList__reviewsData}>
          <p className={styles.reviews_container__cardList__reviewsData__name}>
            {name}
          </p>
          <p className={styles.reviews_container__cardList__reviewsData__date}>
            {date}
          </p>
        </div>
      </button>
    </li>
  ));
  return <ul>{elements}</ul>;
};
export default UserReviewesCards;
