import styles from "./userNavBar.module.scss";
import { NavLink } from "react-router-dom";

import items from "./items";

const UserNavBar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));

  return (
    <div className={styles.userPage_navContainer}>
      <nav>
        <ul>{elements}</ul>
      </nav>
    </div>
  );
};

export default UserNavBar;
