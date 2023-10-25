import styles from "./navBarUser.module.scss";

import { useState } from "react";

import { SvgSelector } from "../../SvgSelector/SvgSelector";
import UserModalMenu from "../../UserModalMenu/UserModalMenu";

const NavBarUser = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openModal = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  return (
    <div>
      <button onClick={openModal} className={styles.iconUser}>
        <SvgSelector styles={styles.user} id="user" />
      </button>
      {isAuthModalOpen && (
        <div className={styles.modalPosition}>
          <UserModalMenu linkClick={openModal} />
        </div>
      )}
    </div>
  );
};

export default NavBarUser;
