import styles from "./buttonDark.module.scss";

const ButtonDark = ({ children, type = "button" }) => {
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default ButtonDark;
