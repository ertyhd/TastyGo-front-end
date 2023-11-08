import { Field, Formik, Form } from "formik";
import styles from "./loginForm.module.scss";
import { SvgSelector } from "../../../SvgSelector/SvgSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../../../redux/auth/auth-operations";
import { Link } from "react-router-dom";

const LoginForm = ({ chngForm, closeReg }) => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isFieldError, setFieldError] = useState(false);
  const [isPasswordShow, setPasswordShow] = useState(false);

  const changeForm = () => {
    return chngForm("reg");
  };

  const dispatch = useDispatch();

  const fieldCheck = (values) => {
    const errors = {};
    switch (true) {
      case !values.email:
        errors.email = "This field is mandatory";
        break;
      case (values.email = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        values.email
      )):
        errors.email = "Invalid email address";
        break;
      case !values.password:
        errors.password = "This field is mandatory";
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
        email: values.email,
        password: values.password,
      };

      dispatch(login(data)).then((response) => {
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
      <h2 className={styles.headerH2}>Log in</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
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
          <Form>
            <div className={styles.formikContainer_elements}>
              <div className={styles.formikContainer_fields}>
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
              </div>
              <Link className={styles.formikContainer_link} to="/">
                Forgot Password?
              </Link>
              <button
                className={styles.formikContainer_button}
                type="submit"
                // disabled={isSubmitting}
              >
                Log in
              </button>
              <div className={styles.formikContainer_GAbuttonWrapper}>
                <p className={styles.formikContainer_p}>or Sign In via</p>
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
                <p>Don't have an account?</p>
                <button type="button" onClick={changeForm}>
                  Sign Up.
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
