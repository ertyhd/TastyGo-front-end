import { Link } from "react-router-dom";
import styles from "./payment.module.scss";
import { DeliverySvgSelector } from "../../../shared/components/SvgSelector/DeliverySvgSelector";
import items from "./paymentServiceList";

const Payment = () => {
  const elements = items.map((item) => (
    <li key={item.id}>
      <Link className={styles.paymentLinks_link}>
        <div className={styles.paymentLinks_link_svg}>
          <DeliverySvgSelector id={item.svgId} />
        </div>
        <div className={styles.paymentLinks_link_text}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </Link>
    </li>
  ));
  return (
    <section className={`${styles.paymentContainer} container`}>
      <h1>Order payment</h1>
      <ul className={styles.paymentLinks}>{elements}</ul>
    </section>
  );
};

export default Payment;
