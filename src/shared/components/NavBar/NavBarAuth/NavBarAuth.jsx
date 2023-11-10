import styles from "./navBarAuth.module.scss";

import { useState } from "react";

import { SvgSelector } from "../../SvgSelector/SvgSelector";

import Modal from "../../Modal/Modal";
import RegistrationForm from "../../Forms/authForms/RegistrationForm/RegistrationForm";
import LoginForm from "../../Forms/authForms/LoginForm/LoginForm";
// import ModalCongrats from "../../../../modules/ModalCongrats/ModalCongrats";

const NavBarAuth = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthModal, setAuthModal] = useState("reg");

  const openModal = () => {
    setIsAuthModalOpen(true);
  };

  const closeModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className={styles.iconUser}>
        <SvgSelector styles={styles.user} id="user" />
      </button>
      {isAuthModalOpen && (
        <Modal close={closeModal}>
          {isAuthModal === "reg" && (
            <RegistrationForm chngForm={setAuthModal} closeReg={closeModal} />
          )}
          {isAuthModal === "log" && (
            <LoginForm chngForm={setAuthModal} closeReg={closeModal} />
          )}
        </Modal>
      )}
    </div>
  );
};

export default NavBarAuth;
