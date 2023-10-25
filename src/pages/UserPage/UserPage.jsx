import styles from "./userPage.module.scss";

import { NavLink, useParams } from "react-router-dom";

// import UserNavBar from "../../modules/User/UserNavBar/UserNavBar";
import Breadcrumbs from "../../shared/components/Breadcrumbs/Breadcrumbs";

import PersonalInformation from "../../modules/User/PersonalInformation/PersonalInformation";
import Bonuses from "../../modules/User/Bonuses/Bonuses";
import Favorite from "../../modules/User/Favorite/Favorite";
import OrderHistory from "../../modules/User/OrderHistory/OrderHistory";
import SavedAddresses from "../../modules/User/SavedAddresses/SavedAddresses";
import RatingAndReviews from "../../modules/User/RatingAndReviews/RatingAndReviews";

import items from "./items";

const UserPage = () => {
  const { id } = useParams();

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));
  return (
    <section className={styles.userPage_container}>
      <div className={styles.userPage_navPath}>
        <Breadcrumbs />
      </div>
      <h1>My account</h1>
      <div className={styles.userPage_navAndContentWrapper}>
        <div className={styles.userPage_navContainer}>
          <nav>
            <ul>{elements}</ul>
          </nav>
        </div>
        <div>
          <div>{id === "personal-info" && <PersonalInformation />}</div>
          <div>{id === "bonuses" && <Bonuses />}</div>
          <div>{id === "favorite" && <Favorite />}</div>
          <div>{id === "history" && <OrderHistory />}</div>
          <div>{id === "addresses" && <SavedAddresses />}</div>
          <div>{id === "ratings-reviews" && <RatingAndReviews />}</div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
