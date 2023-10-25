import styles from "./userModalMenu.module.scss";

import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import items from "../../../pages/UserPage/items";

import { logout } from "../../../redux/auth/auth-operations";
import { getUser } from "../../../redux/auth/auth-selector";

const UserModalMenu = (linkClick) => {
  const { name } = useSelector(getUser);
  const disputch = useDispatch();

  const onLogout = () => {
    disputch(logout());
  };
  console.log(name);
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink
        onClick={() => {
          linkClick();
        }}
        to={link}
      >
        {text}
      </NavLink>
    </li>
  ));
  return (
    <div className={styles.userModalMenuContainer}>
      <div className={styles.userModalMenuContainer_meta}>
        <p>Hello {name} </p>
        <button onClick={onLogout}>Sign Out</button>
      </div>
      <ul className={styles.userModalMenuContainer_links}>{elements}</ul>
    </div>
  );
};

export default UserModalMenu;
