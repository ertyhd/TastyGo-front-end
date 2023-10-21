import { Field, Formik, Form } from "formik";
import styles from "./loginForm.module.scss";
import { SvgSelector } from "../../../SvgSelector/SvgSelector";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../../../redux/auth/auth-operations";

const LoginForm = ({ chngForm, closeReg }) => {
  const [isFormSubmitting, setIsFormSubmitting] = useState(true);
  const [isError, setIsError] = useState(false);

  const changeForm = () => {
    return chngForm("reg");
  };

  const dispatch = useDispatch();

  const fieldCheck = (values) => {
    const errors = {};
    switch (true) {
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
      console.log("data", data);
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
    <div className={styles.container}>
      <div className={styles.closeButtonContainer}>
        <button onClick={closeReg}>
          <SvgSelector id="ModalButtonClose" />
        </button>
      </div>
      <h2 className={styles.header}>LOG IN</h2>
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
          <Form className={styles.formikContainer}>
            <div className={styles.formikContainer_elements}>
              <div className={styles.formikContainer_fields}>
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
                  {errors.email && touched.email && errors.email}
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
                  {errors.password && touched.password && errors.password}
                </label>
              </div>

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
                    Continue with Apple
                  </button>
                  <button>
                    <SvgSelector id="googleLogo" />
                    Continue with Google
                  </button>
                </div>
              </div>
              <div className={styles.formikContainer_chAuthForm}>
                <p>Don't have an account?</p>
                <button type="button" onClick={changeForm}>
                  SIGN UP
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
