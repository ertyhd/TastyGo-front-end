import { NavLink } from "react-router-dom";
import styles from "./userPage.module.scss";

import PersonalInformation from "../../modules/User/PersonalInformation/PersonalInformation";

import items from "./items";

const UserPage = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));

  return (
    <section className={styles.userPage_container}>
      <div className={styles.userPage_navPath}>
        <p>Home</p>
        <p>/</p>
        <p>Account</p>
        <p>/</p>
        <p>Bag</p>
      </div>
      <h1>My account</h1>
      <div className={styles.userPage_navAndContentWrapper}>
        <div className={styles.userPage_navContainer}>
          <nav>
            <ul>{elements}</ul>
          </nav>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default UserPage;
