import styles from "./accountForm.module.scss";
import { Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import {
  deleteUserAvatar,
  updateUser,
  updateUserAvatar,
} from "../../../../redux/auth/auth-operations";

import * as imageConversion from "image-conversion";

import {
  // isUserLogin,
  getUser,
  isAvatarLoading,
} from "../../../../redux/auth/auth-selector";
import { SvgSelector } from "../../SvgSelector/SvgSelector";

const AccountForm = () => {
  const user = useSelector(getUser);
  const loading = useSelector(isAvatarLoading);

  const dispatch = useDispatch();
  const inputRef = useRef(null);

  // const [isUserDate, setUserDate] = useState(user);
  const [isAddPhone, setAddPhone] = useState(false);
  // const [isAvatarUrl, setAvatarUrl] = useState("");
  // const [isAvatarFile, setAvatarFile] = useState(null);
  const [isAvLiading, setAvLoading] = useState(false);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = Array.from({ length: 31 }, (_, index) => index + 1);
  const startYear = 1923;
  const endYear = 2023;
  const year = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  // const fieldCheck = (values) => {
  //   const errors = {};
  //   switch (true) {
  //     case !values.phone:
  //       errors.phone = "phone is required";
  //       break;
  //     //   case (values.email = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
  //     //     values.email
  //     //   )):
  //     //     errors.email = "Invalid email address";
  //     //     break;
  //     case !values.name:
  //       errors.name = "name is required";
  //       break;
  //     default:
  //       break;
  //   }
  //   return errors;
  // };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const data = {
        email: values.email,

        firstName: values.firstName,
        lastName: values.lastName,
        phoneFirst: values.phoneFirst,
        phoneSecond: values.phoneSecond,

        birth: `${values.day} - ${values.month} - ${values.year}`,
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

  const handleAvatarChange = async (e) => {
    setAvLoading(true);
    try {
      const file = e.target.files[0];
      if (file) {
        try {
          const options = {
            // quality: 0.6,
            // width: 250,
            // height: 250,
            // accuracy: 0.9,
          };
          const result = await imageConversion.compress(file, options);
          updateAvatar(result);
        } catch (error) {
          console.error(error);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
    setAvLoading(false);
  };

  const updateAvatar = async (file) => {
    try {
      const formData = new FormData();
      if (file) {
        formData.append("avatar", file);
      }
      dispatch(updateUserAvatar(formData));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAvatarDelete = () => {
    try {
      dispatch(deleteUserAvatar());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.formikContainer}>
      <div className={styles.formikSwitcherButtons}>
        <button type="button">My personal information</button>
        <button type="button">Password</button>
      </div>
      <div className={styles.formikMetaBlock}>
        <Formik
          initialValues={{
            ...user,
          }}
          // validate={fieldCheck}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            // handleSubmit,
            //   isSubmitting,
            // setFieldValue,
            resetForm,
          }) => (
            <Form className={styles.formikContainer_form}>
              <div className={styles.formikContainer_fieldsBloks}>
                <label className={styles.formikContainer_nameLabel}>
                  <span>Name</span>
                  <div className={styles.formikContainer_nameLabel_forms}>
                    <Field
                      className={styles.formikContainer_field}
                      type="firstName"
                      name="firstName"
                      id="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      placeholder="First Name"
                    />
                    {errors.firstName && touched.firstName && errors.firstName}
                    <Field
                      className={styles.formikContainer_field}
                      type="lastName"
                      name="lastName"
                      id="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      placeholder="Last Name"
                    />
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                </label>

                <label>
                  <span>Phone</span>
                  <div className={styles.formikContainer_nameLabel_forms}>
                    <Field
                      className={styles.formikContainer_field}
                      type="phoneFirst"
                      name="phoneFirst"
                      id="phoneFirst"
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      value={values.phoneFirst}
                      // placeholder="Phone"
                    />
                    {errors.phoneFirst &&
                      touched.phoneFirst &&
                      errors.phoneFirst}
                    {isAddPhone === true && (
                      <>
                        <Field
                          className={styles.formikContainer_field}
                          type="phoneSecond"
                          name="phoneSecond"
                          id="phoneSecond"
                          // onChange={handleChange}
                          // onBlur={handleBlur}
                          value={values.phoneSecond}
                          placeholder="Second phone"
                        />
                        {errors.phoneSecond &&
                          touched.phoneSecond &&
                          errors.phoneSecond}
                      </>
                    )}
                  </div>
                  {isAddPhone === false && (
                    <button
                      onClick={() => {
                        setAddPhone(true);
                      }}
                      className={styles.phoneButton}
                      type="button"
                    >
                      Add another phone
                    </button>
                  )}
                </label>
                <label>
                  <span>Email</span>
                  <Field
                    className={styles.formikContainer_field}
                    type="email"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Address"
                  />
                  {errors.email && touched.email && errors.email}
                </label>
                <label>
                  <span>Date of birth</span>

                  <div className={styles.formikContainer_dateBlock}>
                    <Field
                      // style={{ display: "none" }}
                      className={styles.formikContainer_day}
                      as="select"
                      id="day"
                      name="day"
                    >
                      {day.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </Field>
                    {/* <div className={styles.formikContainer_day} htmlFor="day">
                      <SvgSelector id="arrowDown" />
                    </div> */}
                    {errors.birth && touched.birth && errors.birth}
                    <Field
                      className={styles.formikContainer_month}
                      as="select"
                      id="month"
                      name="month"
                    >
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
                        </option>
                      ))}
                    </Field>
                    {errors.birth && touched.birth && errors.birth}
                    <Field
                      className={styles.formikContainer_year}
                      as="select"
                      id="year"
                      name="year"
                    >
                      {year.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Field>
                    {errors.birth && touched.birth && errors.birth}
                  </div>
                </label>
              </div>
              <div className={styles.formikContainer_buttonsBloks}>
                <button
                  className={styles.formikContainer_buttonSave}
                  type="submit"
                  // disabled={isSubmitting}
                >
                  Save changes
                </button>
                <button
                  className={styles.formikContainer_buttonCancel}
                  type="button"
                  // disabled={isSubmitting}
                  onClick={() => resetForm({ ...user })}
                >
                  Cancel
                </button>
              </div>
            </Form>
          )}
        </Formik>

        <div className={styles.formikMetaBlockAvatar}>
          <Formik
            initialValues={{
              avatarURL: user.avatarURL,
            }}
          >
            {({ values, errors, touched }) => (
              <Form>
                <label
                  htmlFor="avatar"
                  className={styles.formikMetaBlockAvatarWrapper_label}
                >
                  <span>Photo</span>
                  <div
                    style={{
                      filter: loading || isAvLiading ? "blur(3px)" : "",
                    }}
                    className={styles.formikMetaBlockAvatarWrapper_imgWrapper}
                  >
                    <img
                      className={styles.formikMetaBlockAvatarWrapper_img}
                      src={user.avatarURL}
                      alt="avatar"
                    />
                  </div>
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: "none" }}
                  ref={inputRef}
                />
                <div
                  style={{ padding: 0, textAlign: "center" }}
                  className={styles.error}
                >
                  {/* {isBtnSubmit && errors.avatar && <div>{errors.avatar}</div>} */}
                </div>
                <div className={styles.formikMetaBlockAvatarButtons}>
                  <button
                    type="button"
                    onClick={() => inputRef.current.click()}
                  >
                    <SvgSelector id="editAvatar" />
                  </button>
                  <button type="button" onClick={handleAvatarDelete}>
                    <SvgSelector id="deleteAvatar" />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
