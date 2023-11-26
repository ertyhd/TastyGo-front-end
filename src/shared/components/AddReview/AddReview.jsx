import styles from "./addReview.module.scss";

import { Field, Formik, Form } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getItemsReviews } from "../../../redux/reviews/reviews-selector";
import { getUser, isUserLogin } from "../../../redux/auth/auth-selector";

import { postNewReview } from "../../../redux/reviews/reviews-operation";

// import ButtonDark from "../Button/ButtonDark/ButtonDark";
// import ButtonLight from "../Button/ButtonLight/ButtonLight";
import StarsComponent from "./StarsComponent/StarsComponent";

const AddReview = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const logined = useSelector(isUserLogin);

  const [isRating, setRating] = useState(0);

  const handleSetRating = (data) => {
    setRating(data);
  };

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

  const currentDate = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    return formattedDate;
  };
  currentDate();
  const handleSubmit = async (values) => {
    try {
      const data = {
        title: values.title,
        text: values.text,
        rating: isRating,
        // date: currentDate(),
        // name: user.firstName,
        // avatarURL: user.avatarURL,
      };

      dispatch(postNewReview(data));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.addReviewContainer}>
      <Formik
        initialValues={{
          title: user.firstName,
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
          <Form className={styles.addReviewForm}>
            <label className={styles.addReviewForm_label}>
              <Field
                style={{
                  borderColor: errors.text ? "#ff2e00" : "",
                  resize: "none",
                }}
                className={styles.addReviewForm_field}
                as="textarea"
                rows="3"
                name="text"
                id="text"
                onChange={handleChange}
                value={values.text}
                placeholder="Your message"
                maxLength={500}
              />
              <span className={styles.addReviewForm_textCounter}>
                {values.text.length}/500
              </span>
            </label>
            {errors.text && touched.text && (
              <div className={styles.error}>{errors.text}</div>
            )}
            <p>How would you rate your experience with Tasty Go?</p>
            <StarsComponent id="rating" name="rating" data={handleSetRating} />
            <div className={styles.addReviewContainer_buttonWrapper}>
              <button
                className={styles.ButtonLight}
                type="button"
                onClick={() => resetForm()}
              >
                Cancel
              </button>
              <button
                className={styles.ButtonDark}
                disabled={!logined}
                type="submit"
              >
                Send
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddReview;
