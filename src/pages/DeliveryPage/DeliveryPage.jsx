import styles from "./deliveryPage.module.scss";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import Delivery from "../../modules/delivery/Delivery/Delivery";
import Payment from "../../modules/delivery/Payment/Payment";
import Faq from "../../modules/delivery/Faq/Faq";
import Question from "../../modules/delivery/Question/Question";

const DeliveryPage = () => {
  return (
    <section>
      <div className={styles.breadcrumbsWrapp}>
        <Breadcrumbs />
      </div>
      <Delivery />
      <Payment />
      <Faq />
      <Question />
    </section>
  );
};

export default DeliveryPage;
