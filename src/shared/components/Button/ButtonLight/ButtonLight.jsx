import styles from "./buttonLight.module.scss";

const ButtonLight = ({ children, type = "button" }) => {
  return (
    <button type={type} className={styles.btn}>
      {children}
    </button>
  );
};

export default ButtonLight;
