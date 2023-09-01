import { Link } from "react-router-dom";
import styles from "./services.module.scss";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";

const Services = () => {
  return (
    <section className="container">
      <p className={styles.services_p}>OUR SERVICES</p>
      <h2 className={styles.services_h2}>
        we will take care of your nutrition
      </h2>
      <div className={styles.services_cardsContainer}>
        <Link className={styles.services_cardsContainer__card}>
          <h3 className={styles.services_cardsContainer__cardH3}>
            All-day dining
          </h3>
          <span className={styles.services_cardsContainer__cardTextWrapper}>
            <p className={styles.services_cardsContainer__cardText}>
              Variety of delightful dishes for every meal
            </p>
            <div className={styles.services_cardsContainer__cardSvgWrapper}>
              <SvgSelector
                styles={styles.services_cardsContainer__cardSvg}
                id="arrowTopRight"
                viewBox={"0 0 46 46"}
              />
            </div>
          </span>
        </Link>
        <Link className={styles.services_cardsContainer__card}>
          <h3 className={styles.services_cardsContainer__cardH3}>Catering</h3>
          <span className={styles.services_cardsContainer__cardTextWrapper}>
            <p className={styles.services_cardsContainer__cardText}>
              Elevate your events with our Catering services
            </p>
            <div className={styles.services_cardsContainer__cardSvgWrapper}>
              <SvgSelector
                styles={styles.services_cardsContainer__cardSvg}
                id="arrowTopRight"
                viewBox={"0 0 46 46"}
              />
            </div>
          </span>
        </Link>
        <Link className={styles.services_cardsContainer__card}>
          <h3 className={styles.services_cardsContainer__cardH3}>
            Nutritional Balance
          </h3>
          <span className={styles.services_cardsContainer__cardTextWrapper}>
            <p className={styles.services_cardsContainer__cardText}>
              Wholesome meals designed to support your daily nutritional
            </p>
            <div className={styles.services_cardsContainer__cardSvgWrapper}>
              <SvgSelector
                styles={styles.services_cardsContainer__cardSvg}
                id="arrowTopRight"
                viewBox={"0 0 46 46"}
              />
            </div>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Services;
