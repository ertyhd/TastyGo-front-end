import styles from "./buttonCommon.module.scss";

const ButtonCommon = ({ children, type = "button" }) => {
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default ButtonCommon;
