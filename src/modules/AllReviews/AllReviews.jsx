import styles from "./allReviews.module.scss";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import AddReview from "../../shared/components/AddReview/AddReview";

const AllReviews = () => {
  return (
    <section className={`${styles.wrapperHeder} container`}>
      <div className={styles.breadcrumbsWrapper}>
        <Breadcrumbs />
      </div>
      <div className={styles.cardsSection}>
        <h1 className={styles.reviewsH1}>Reviews</h1>
      </div>
      <div className={styles.fieldsSection}>
        <div className={styles.fieldsSection_titleBlock}>
          <h1>We value your feedback: rate and review</h1>
          <p>*Only registered users can leave reviews</p>
        </div>
        <div className={styles.fieldsSection_fieldBlock}>
          <AddReview />
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
