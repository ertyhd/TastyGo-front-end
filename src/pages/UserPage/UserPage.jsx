import styles from "./userPage.module.scss";

import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/auth/auth-selector";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";

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
  const user = useSelector(getUser);
  // console.log(user);
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));
  return (
    <section className={`${styles.userPageContainer} container`}>
      <div className={styles.userPage_navPath}>
        <Breadcrumbs />
      </div>
      <div className={styles.userPageBlock}>
        <div>
          <div className={styles.userPageBlock_userInfo}>
            <div className={styles.userPageBlock_avatar}>
              {/* <SvgSelector id="blackCircle" /> */}
              <img src={user.avatarURL} alt="User avatar" />
            </div>
            <div className={styles.userPageBlock_user}>
              <span className={styles.userPageBlock_name}>
                {user.firstName}
              </span>
              <span className={styles.userPageBlock__email}>{user.email}</span>
            </div>
          </div>
          <nav>
            <ul className={styles.userPageBlock_navContainer}>{elements}</ul>
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
