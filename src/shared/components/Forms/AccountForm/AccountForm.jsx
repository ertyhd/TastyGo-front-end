import styles from "./accountForm.module.scss";
import { Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../../../redux/auth/auth-operations";
import { current } from "../../../../redux/auth/auth-operations";
import { getUser } from "../../../../redux/auth/auth-selector";

const AccountForm = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const [isUserDate, setUserDate] = useState(user);

  // const req = () => {
  //   return dispatch(current({}));
  // };
  // console.log(isUserDate);
  const fieldCheck = (values) => {
    const errors = {};
    switch (true) {
      case !values.phone:
        errors.phone = "phone is required";
        break;
      //   case (values.email = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
      //     values.email
      //   )):
      //     errors.email = "Invalid email address";
      //     break;
      case !values.name:
        errors.name = "name is required";
        break;
      default:
        break;
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = {
        email: values.email,
        password: values.password,
      };

      dispatch(updateUser(data)).then((response) => {
        if (!response.error) {
        } else {
        }
      });
      setSubmitting(false);
      // setIsFetchOk(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
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
                    type="phone"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    placeholder="Phone"
                  />
                  {errors.phone && touched.phone && errors.phone}
                </label>
                <label>
                  <Field
                    className={styles.formikContainer_field}
                    type="name"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Name"
                  />
                  {errors.name && touched.name && errors.name}
                </label>
                <label>
                  <Field
                    className={styles.formikContainer_field}
                    type="address"
                    name="address"
                    id="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    placeholder="Address"
                  />
                  {errors.address && touched.address && errors.address}
                </label>
                <label>
                  <Field
                    className={styles.formikContainer_field}
                    type="birth"
                    name="birth"
                    id="birth"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.birth}
                    placeholder="Date of birth"
                  />
                  {errors.birth && touched.birth && errors.birth}
                </label>
              </div>

              <button
                className={styles.formikContainer_button}
                type="submit"
                // disabled={isSubmitting}
              >
                Save changes
              </button>
              <button
                className={styles.formikContainer_button}
                type="button"
                // disabled={isSubmitting}
              >
                Cancel
              </button>
              <div className={styles.formikContainer_GAbuttonWrapper}></div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AccountForm;
