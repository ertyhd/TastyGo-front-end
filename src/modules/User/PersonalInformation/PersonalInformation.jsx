import styles from "./personalInformation.module.scss";
import { useState } from "react";

import AccountForm from "../../../shared/components/Forms/AccountForm/AccountForm";

const PersonalInformation = () => {
  const [isPersPassSwitch, setPersPassSwitch] = useState("pers");

  return (
    <div className={styles.formikContainer}>
      <div className={styles.formikSwitcherButtons}>
        <button type="button">My personal information</button>
        <button type="button">Password</button>
      </div>
      {isPersPassSwitch === "pers" && <AccountForm />}
    </div>
  );
};

export default PersonalInformation;
