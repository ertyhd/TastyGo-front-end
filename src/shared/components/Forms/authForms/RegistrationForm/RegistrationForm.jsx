import { Field, Formik, Form } from "formik";
import styles from "./registrationForm.module.scss";
import { SvgSelector } from "../../../SvgSelector/SvgSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { singup } from "../../../../../redux/auth/auth-operations";

import PhoneInput from "react-phone-input-2";

import * as yup from "yup";

import ButtonDark from "../../../Button/ButtonDark/ButtonDark";
import PhoneField from "../../PhoneField/PhoneField";

const RegistrationForm = ({ chngForm, closeReg }) => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isCheckbox, setCheckbox] = useState(false);
  const [isPasswordShow, setPasswordShow] = useState(false);
  // const [isFocused, setIsFocused] = useState(false);
  // const [isPhoneInput, setPhoneInput] = useState(true);

  const changeForm = () => {
    return chngForm("log");
  };

  const checkboxToggle = (setFieldValue) => {
    setCheckbox(!isCheckbox);
    return setFieldValue("subscribtion", !isCheckbox);
  };

  const dispatch = useDispatch();

  const fieldCheck = (values) => {
    const errors = {};
    switch (true) {
      case !values.name:
        errors.name = "This field is mandatory";
        break;
      case values.name.length > 26:
        errors.name = "Please, enter a shorter name";
        break;
      case !values.email:
        errors.email = "This field is mandatory";
        break;
      case !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email):
        errors.email = "Invalid email address";
        break;
      case !values.password:
        errors.password = "This field is mandatory";
        break;

      case !values.phone:
        errors.phone = "This field is mandatory";
        break;
      case !/^380\d{9}/.test(values.phone):
        errors.phone = "Invalid phone number";
        break;
      case values.phone.length < 12:
        errors.phone = "Invalid phone number";
        break;
      default:
        break;
    }
    return errors;
  };

  const passwordSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    // confirm: yup
    //   .string()
    //   .oneOf([yup.ref("pass"), null], 'Must match "password" field value'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsFormSubmitting(false);

    try {
      const data = {
        firstName: values.name,
        email: values.email,
        password: values.password,
        // phoneFirst: "+" + values.phone,
        phoneFirst: values.phone,
        subscribtion: values.subscribtion,
      };
      console.log(values.phone);
      dispatch(singup(data)).then((response) => {
        if (!response.error) {
        } else {
          setIsFormSubmitting(true);
          setIsError(true);
        }
      });
      setSubmitting(false);
      // setIsFetchOk(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.formikContainer}>
      <div className={styles.closeButtonContainer}>
        <button onClick={closeReg}>
          <SvgSelector id="ModalButtonClose" />
        </button>
      </div>
      <h2 className={styles.headerH2}>Sign UP</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phone: "",
          subscribtion: false,
        }}
        // validationSchema={passwordSchema}
        validate={fieldCheck}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,

          //   handleSubmit,
          //   isSubmitting,
          setFieldValue,
        }) => (
          <Form>
            <div className={styles.formikContainer_elements}>
              <div className={styles.formikContainer_fields}>
                <label>
                  <Field
                    style={{ borderColor: errors.name ? "#ff2e00" : "" }}
                    className={styles.formikContainer_field}
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="First Name"
                  />
                  {errors.name && touched.name && (
                    <div className={styles.error}>{errors.name}</div>
                  )}
                </label>
                <label>
                  <Field
                    style={{ borderColor: errors.email ? "#ff2e00" : "" }}
                    className={styles.formikContainer_field}
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Your Email"
                  />
                  {errors.email && touched.email && (
                    <div className={styles.error}>{errors.email}</div>
                  )}
                </label>
                <label>
                  <div className={styles.formikContainer_field_relative}>
                    <Field
                      style={{ borderColor: errors.password ? "#ff2e00" : "" }}
                      className={`${styles.formikContainer_field} ${styles.formikContainer_fieldPass}`}
                      type={isPasswordShow ? "text" : "password"}
                      name="password"
                      id="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      placeholder="Password"
                    />
                    <button
                      onClick={() => setPasswordShow(!isPasswordShow)}
                      type="button"
                      className={styles.formikContainer_fieldSvgPass}
                    >
                      <SvgSelector id="eye" />
                    </button>
                  </div>

                  {errors.password && touched.password && (
                    <div className={styles.error}>{errors.password}</div>
                  )}
                </label>
                <label>
                  {/* <div className={styles.formikContainer_field_relative}> */}
                  <PhoneField
                    errors={errors}
                    values={values.phone}
                    setFieldValue={setFieldValue}
                    fieldName="phone"
                    autoFocus={false}
                    countryCodeEditable={false}
                  />
                  {/* {isPhoneInput && (
                      <PhoneInput
                        className={styles.phoneInput}
                        country="ua"
                        placeholder="+380 00 000 00 00"
                        specialLabel=""
                        onFocus={() => setPhoneInput(false)}
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
                        value={values.phone}
                        onChange={(phone) => setFieldValue("phone", phone)}
                        defaultMask=".. ... .. .."
                        alwaysDefaultMask={true}
                        placeholder="+380 00 000 00 00"
                        specialLabel=""
                        countryCodeEditable={false}
                        onFocus={() => setPhoneInput(false)}
                        // onBlur={() => setPhoneInput(true)}
                        disableCountryCode={false}
                        inputProps={{
                          autoFocus: true,
                        }}
                      />
                    )} */}

                  {/* <div className={styles.formikContainer_fieldSvgFlag}>
                      <SvgSelector id="flag" />
                    </div> */}
                  {/* </div> */}

                  {errors.phone && touched.phone && (
                    <div className={styles.error}>{errors.phone}</div>
                  )}
                </label>
              </div>
              <label className={styles.formikContainer_checkbox}>
                <Field
                  type="hidden"
                  name="subscribtion"
                  id="subscribtion"
                  value={values.subscribtion}
                />
                <div
                  style={{ cursor: "pointer" }}
                  // type="button"
                  onClick={() => {
                    checkboxToggle(setFieldValue);
                  }}
                >
                  {isCheckbox && <SvgSelector id="checkboxPresed" />}
                  {!isCheckbox && <SvgSelector id="checkboxEmpty" />}
                </div>
                <p>
                  Subscribe to the newsletter and get the latest updates on
                  promos
                </p>
              </label>
              <ButtonDark type="submit">SIGN UP</ButtonDark>
              <div className={styles.formikContainer_GAbuttonWrapper}>
                <p className={styles.formikContainer_p}>or Sign Up via</p>
                <div className={styles.formikContainer_GAbuttonFlex}>
                  <button>
                    <SvgSelector id="appleLogo" />
                    Apple
                  </button>
                  <button>
                    <SvgSelector id="googleLogo" />
                    Google
                  </button>
                </div>
              </div>
              <div className={styles.formikContainer_chAuthForm}>
                <p>Already have an account?</p>
                <button type="button" onClick={changeForm}>
                  Sign In.
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default RegistrationForm;
