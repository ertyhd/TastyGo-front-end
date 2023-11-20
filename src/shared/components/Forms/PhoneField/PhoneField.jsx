import styles from "./phoneField.module.scss";

import { useState } from "react";
import { SvgSelector } from "../../SvgSelector/SvgSelector";
import PhoneInput from "react-phone-input-2";

const PhoneField = ({
  errors,
  values,
  setFieldValue,
  fieldName,
  countryCodeEditable,
}) => {
  const [isPhoneInput, setPhoneInput] = useState(values ? false : true);
  const [isPhoneClick, setPhoneClick] = useState(false);
  // const [isCCode, setCCode] = useState(false);
  // setCCode(countryCodeEditable);
  // const f = () => {
  //   return setCCode(countryCodeEditable);
  // };
  // console.log("phone", values);
  return (
    <div className={styles.formikContainer_field_relative}>
      {isPhoneInput && (
        <PhoneInput
          className={styles.phoneInput}
          country="ua"
          placeholder="+380 00 000 00 00"
          specialLabel=""
          onFocus={() => {
            setPhoneInput(false);
            setPhoneClick(true);
          }}
          disableCountryCode={true}
        />
      )}
      {!isPhoneInput && (
        <PhoneInput
          inputStyle={{
            borderColor: errors.phone ? "#ff2e00" : "",
          }}
          className={styles.phoneInput}
          country="ua"
          value={values}
          onChange={(phone) => setFieldValue(fieldName, phone)}
          defaultMask=".. ... .. .."
          alwaysDefaultMask={true}
          placeholder="+380 00 000 00 00"
          specialLabel=""
          countryCodeEditable={countryCodeEditable}
          onFocus={() => setPhoneInput(false)}
          // onBlur={() => setPhoneInput(true)}
          disableCountryCode={false}
          inputProps={
            isPhoneClick
              ? {
                  autoFocus: true,
                }
              : ""
          }
        />
      )}
      <div className={styles.formikContainer_fieldSvgFlag}>
        <SvgSelector id="flag" />
      </div>
    </div>
  );
};

export default PhoneField;
