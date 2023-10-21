import styles from "./personalInformation.module.scss";

const PersonalInformation = () => {
  return (
    <section className={styles.personalInformation_container}>
      <div>
        <p>Home</p>
        <p>/</p>
        <p>Account</p>
        <p>/</p>
        <p>Bag</p>
      </div>
      <h1>My account</h1>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default PersonalInformation;
