import { Field, Formik, Form } from "formik";
import styles from "./registrationForm.module.scss";
import { SvgSelector } from "../../../SvgSelector/SvgSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { singup } from "../../../../../redux/auth/auth-operations";

const RegistrationForm = ({ chngForm, closeReg }) => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isCheckbox, setCheckbox] = useState(false);

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
        errors.name = "Name is required";
        break;
      case values.name.length > 26:
        errors.name = "Please, enter a shorter name";
        break;
      case !values.email:
        errors.email = "Email is required";
        break;
      //   case (values.email = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      //     values.email
      //   )):
      //     errors.email = "Invalid email address";
      //     break;
      case !values.password:
        errors.password = "Password is required";
        break;
      case !values.phone:
        errors.phone = "Phone is required";
        break;
      default:
        break;
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setIsFormSubmitting(false);
    try {
      const data = {
        name: values.name,
        email: values.email,
        password: values.password,
        phone: values.phone,
        subscribtion: values.subscribtion,
      };
      console.log("data", data);
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
    <div className={styles.container}>
      <div className={styles.closeButtonContainer}>
        <button onClick={closeReg}>
          <SvgSelector id="ModalButtonClose" />
        </button>
      </div>
      <h2 className={styles.header}>Sign UP</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          phone: "",
          subscribtion: false,
        }}
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
          <Form className={styles.formikContainer}>
            <div className={styles.formikContainer_elements}>
              <div className={styles.formikContainer_fields}>
                <label>
                  <Field
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
                    <div className={styles.error}>
                      <SvgSelector id="error" />
                      {errors.name}
                    </div>
                  )}
                </label>
                <label>
                  <Field
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
                    <div className={styles.error}>
                      <SvgSelector id="error" />
                      {errors.email}
                    </div>
                  )}
                </label>
                <label>
                  <Field
                    className={styles.formikContainer_field}
                    type="password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                  />
                  {errors.password && touched.password && (
                    <div className={styles.error}>
                      <SvgSelector id="error" />
                      {errors.password}
                    </div>
                  )}
                </label>
                <label>
                  <Field
                    className={styles.formikContainer_field}
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="Phone"
                  />
                  {errors.phone && touched.phone && (
                    <div className={styles.error}>
                      <SvgSelector id="error" />
                      {errors.phone}
                    </div>
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
              <button
                className={styles.formikContainer_button}
                type="submit"
                // disabled={isSubmitting}
              >
                SIGN UP
              </button>
              <div className={styles.formikContainer_GAbuttonWrapper}>
                <p className={styles.formikContainer_p}>or Join In via</p>
                <div className={styles.formikContainer_GAbuttonFlex}>
                  <button>
                    <SvgSelector id="appleLogo" />
                    Continue with Apple
                  </button>
                  <button>
                    <SvgSelector id="googleLogo" />
                    Continue with Google
                  </button>
                </div>
              </div>
              <div className={styles.formikContainer_chAuthForm}>
                <p>Already have an account?</p>
                <button type="button" onClick={changeForm}>
                  LoG IN
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
