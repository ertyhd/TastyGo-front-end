import styles from "./deliveryPage.module.scss";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";
import Delivery from "../../modules/delivery/Delivery/Delivery";
import Payment from "../../modules/delivery/Payment/Payment";
import Faq from "../../modules/delivery/Faq/Faq";

const DeliveryPage = () => {
  return (
    <section>
      <div className={styles.breadcrumbsWrapp}>
        <Breadcrumbs />
      </div>
      <Delivery />
      <Payment />
      <Faq />
    </section>
  );
};

export default DeliveryPage;
