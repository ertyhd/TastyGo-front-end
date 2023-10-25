import styles from "./breadcrumbs.module.scss";

import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <li key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </li>
      );
    });

  return (
    <ul className={styles.crambsContainer}>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {crumbs}
    </ul>
  );
};

export default Breadcrumbs;
