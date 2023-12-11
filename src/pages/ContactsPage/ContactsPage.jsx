import styles from "./contactsPage.module.scss";
import InfoContacts from "../../modules/InfoContacts/InfoContacts";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";

const ContactsPage = () => {
  return (
    <section className={styles.contactsPageContainer}>
      <div className={styles.contactsPageContainerHeader}>
        <Breadcrumbs />
        <h1>Contacts</h1>
      </div>
      <InfoContacts />
    </section>
  );
};

export default ContactsPage;
