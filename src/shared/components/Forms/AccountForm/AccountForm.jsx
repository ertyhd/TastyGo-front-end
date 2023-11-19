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
import ButtonDark from "../../Button/ButtonDark/ButtonDark";
import ButtonLight from "../../Button/ButtonLight/ButtonLight";

import PhoneField from "../PhoneField/PhoneField";

import DateFields from "../DateFields/DateFields";

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
  const [isGetDate, setGetDate] = useState("");

  const fieldCheck = (values) => {
    const errors = {};
    switch (true) {
      case !values.firstName:
        errors.firstName = "This field is mandatory";
        break;
      case values.firstName.length > 26:
        errors.firstName = "Please, enter a shorter name";
        break;
      case !values.email:
        errors.email = "This field is mandatory";
        break;
      case !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email):
        errors.email = "Invalid email address";
        break;

      case !values.phoneFirst:
        errors.phoneFirst = "This field is mandatory";
        break;
      case !/^380\d{9}/.test(values.phoneFirst):
        errors.phoneFirst = "Invalid phone number";
        break;
      case values.phoneFirst.length < 12:
        errors.phoneFirst = "Invalid phone number";
        break;
      case values.phoneSecond.length > 0 && values.phoneSecond.length < 12:
        errors.phoneSecond = "Invalid phone number";
        break;
      case !/^(380\d{9})?$/.test(values.phoneSecond):
        errors.phoneSecond = "Invalid phone number";
        break;
      default:
        break;
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log(user);
    try {
      const data = {
        email: values.email,

        firstName: values.firstName,
        lastName: values.lastName,
        phoneFirst: values.phoneFirst,
        phoneSecond: values.phoneSecond,
        birth: isGetDate,
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

  const handleGetDate = (date) => {
    setGetDate(date);
    // console.log(date);
  };

  return (
    <div className={styles.formikMetaBlock}>
      <Formik
        initialValues={{
          ...user,
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
          // handleSubmit,
          //   isSubmitting,
          setFieldValue,
          resetForm,
        }) => (
          <Form className={styles.formikContainer_form}>
            <div className={styles.formikContainer_fieldsBloks}>
              <label className={styles.formikContainer_nameLabel}>
                <span>Name</span>
                <div className={styles.formikContainer_nameLabel_forms}>
                  <Field
                    style={{ borderColor: errors.firstName ? "#ff2e00" : "" }}
                    className={styles.formikContainer_field}
                    type="firstName"
                    name="firstName"
                    id="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                    placeholder="First Name"
                  />
                  {errors.firstName && touched.firstName && (
                    <div className={styles.error}>{errors.firstName}</div>
                  )}
                  <Field
                    className={styles.formikContainer_field__lastName}
                    type="lastName"
                    name="lastName"
                    id="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    placeholder="Last Name"
                  />
                  {errors.lastName && touched.lastName && (
                    <div className={styles.error}>{errors.lastName}</div>
                  )}
                </div>
              </label>

              <div>
                <label>
                  <span>Phone</span>
                </label>

                <div className={styles.formikContainer_nameLabel_forms}>
                  <PhoneField
                    style={{ borderColor: errors.firstName ? "#ff2e00" : "" }}
                    errors={errors}
                    values={values.phoneFirst}
                    setFieldValue={setFieldValue}
                    fieldName="phoneFirst"
                  />
                  {/* <Field
                    className={styles.formikContainer_field}
                    type="phoneFirst"
                    name="phoneFirst"
                    id="phoneFirst"
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.phoneFirst}
                    // placeholder="Phone"
                  /> */}
                  {errors.phoneFirst && touched.phoneFirst && (
                    <div className={styles.error}>{errors.phoneFirst}</div>
                  )}
                  {isAddPhone === true && (
                    <div className={styles.formikContainer_phoneSecond}>
                      <PhoneField
                        errors={errors}
                        values={values.phoneSecond}
                        setFieldValue={setFieldValue}
                        fieldName="phoneSecond"
                        countryCodeEditable={true}
                      />
                      {/* <Field
                        className={styles.formikContainer_field}
                        type="phoneSecond"
                        name="phoneSecond"
                        id="phoneSecond"
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        value={values.phoneSecond}
                        placeholder="Second phone"
                      /> */}
                      {errors.phoneSecond && touched.phoneSecond && (
                        <div className={styles.error}>{errors.phoneSecond}</div>
                      )}
                    </div>
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
              </div>
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
                  placeholder="Email"
                />
                {errors.email && touched.email && errors.email}
              </label>
              {/* <DateFields /> */}
              <label>
                <span>Date of birth</span>

                <div className={styles.formikContainer_dateBlock}>
                  <DateFields onDateChange={handleGetDate} />
                  {errors.birth && touched.birth && errors.birth}
                </div>
              </label>
            </div>
            <div className={styles.formikContainer_buttonsBloks}>
              <ButtonDark
                type="submit"
                // disabled={isSubmitting}
              >
                Save changes
              </ButtonDark>
              <ButtonLight type="button" onClick={() => resetForm({ ...user })}>
                Cancel
              </ButtonLight>
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
                  {!user.avatarURL && (
                    <div className={styles.formikMetaBlockAvatarWrapper_defImg}>
                      {user.firstName ? user.firstName[0] : ""}
                    </div>
                  )}
                  {user.avatarURL && (
                    <img
                      className={styles.formikMetaBlockAvatarWrapper_img}
                      src={user.avatarURL}
                      alt=""
                    />
                  )}
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
                <button type="button" onClick={() => inputRef.current.click()}>
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
    // </div>
  );
};

export default AccountForm;
