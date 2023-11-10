import styles from "./modalCongrats.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/auth/auth-selector";
import { setCongrats } from "../../redux/auth/auth-slice";

import Modal from "../../shared/components/Modal/Modal";
import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";

const ModalCongrats = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(setCongrats(false));
  };
  return (
    <Modal close={closeModal}>
      <div className={styles.modalContainer}>
        <button onClick={closeModal} className={styles.modalContainer_svg}>
          <SvgSelector id="ModalButtonClose" />
        </button>
        <span>{`Hello ${user.firstName}!`}</span>
        <div className={styles.modalContainer_p}>
          <p>
            You have successfully registered. You can go to your personal
            account to fill in additional information
          </p>
        </div>
        <div className={styles.modalContainer_linksWrapper}>
          <Link
            to="/user/personal-info"
            onClick={closeModal}
            className={styles.modalContainer_linksWrapper_accaunt}
          >
            My account
          </Link>
          <Link
            to="/"
            onClick={closeModal}
            className={styles.modalContainer_linksWrapper_home}
          >
            Go homepage
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default ModalCongrats;
