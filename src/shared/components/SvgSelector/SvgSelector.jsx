import React from "react";
import styles from "../../../modules/Hero/hero.module.scss";

export const SvgSelector = ({ color, id }) => {
  switch (id) {
    case "arrowTopRight":
      return (
        <svg
          className={styles.arrowBtnSvg}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 46 46"
          fill="none"
        >
          <path
            d="M31.4853 14.5147H17.3431V16.5088L28.0699 16.5158L13.8076 30.7782L15.2218 32.1924L29.4841 17.9301L29.4912 28.6569H31.4853V14.5147Z"
            fill="#fffdfa"
          />
        </svg>
      );
    case "point":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <circle cx="8" cy="8.5" r="8" fill="#1E1E2D" />
        </svg>
      );

    default:
      return <svg></svg>;
  }
};
