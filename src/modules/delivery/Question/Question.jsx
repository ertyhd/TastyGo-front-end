import styles from "./question.module.scss";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getUser, isUserLogin } from "../../../redux/auth/auth-selector";

import { postNewQuestion } from "../../../redux/delivery/delivery-operation";

const Question = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const logined = useSelector(isUserLogin);
  console.log(user);
  const fieldCheck = (values) => {
    const errors = {};
    switch (true) {
      //   case !values.email:
      //     errors.email = "This field is mandatory";
      //     break;
      //   case !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email):
      //     errors.email = "Invalid email address";
      //     break;
      //   case !values.password:
      //     errors.password = "This field is mandatory";
      //     break;

      default:
        break;
    }
    return errors;
  };

  const handleSubmit = async (values) => {
    try {
      const data = {
        name: values.name,
        email: values.email,
        message: values.text,
      };
      dispatch(postNewQuestion(data));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className={`${styles.questionContainer} container`}>
      <h1>Have questions? Ask us!</h1>
      <div className={styles.questionContainer_formWrapp}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            text: "",
          }}
          validate={fieldCheck}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,

            //   handleSubmit,
            //   isSubmitting,
            resetForm,
          }) => (
            <Form className={styles.questionForm}>
              <label className={styles.questionForm_label}>
                <Field
                  style={{
                    borderColor: errors.name && touched.name ? "#ff2e00" : "",
                    resize: "none",
                  }}
                  className={styles.questionForm_firstName}
                  name="name"
                  id="name"
                  type="text"
                  value={values.name}
                  placeholder="First name"
                  maxLength={40}
                />
              </label>
              {errors.name && touched.name && (
                <div className={styles.error}>{errors.name}</div>
              )}
              <label className={styles.questionForm_label}>
                <Field
                  style={{
                    borderColor: errors.email && touched.email ? "#ff2e00" : "",
                    resize: "none",
                  }}
                  className={styles.questionForm_email}
                  name="email"
                  id="email"
                  type="text"
                  value={values.email}
                  placeholder="Your email"
                />
              </label>
              {errors.email && touched.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
              <label className={styles.questionForm_textLabel}>
                <Field
                  style={{
                    borderColor: errors.text ? "#ff2e00" : "",
                    resize: "none",
                  }}
                  className={styles.questionForm_text}
                  as="textarea"
                  rows="3"
                  name="text"
                  id="text"
                  onChange={handleChange}
                  value={values.text}
                  placeholder="Your message"
                  maxLength={300}
                />
                <span className={styles.questionForm_textCounter}>
                  {values.text.length}/500
                </span>
              </label>
              {errors.text && touched.text && (
                <div className={styles.error}>{errors.text}</div>
              )}
              <div className={styles.questionForm_buttonWrapper}>
                <button
                  className={styles.ButtonLight}
                  type="button"
                  onClick={() => resetForm()}
                >
                  Cancel
                </button>
                <button
                  className={styles.ButtonDark}
                  disabled={""}
                  type="submit"
                >
                  Send
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Question;
