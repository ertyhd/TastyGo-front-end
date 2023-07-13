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

    case "burgerDesktop":
      return (
        <svg
          width="64"
          height="17"
          viewBox="0 0 64 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="burger menu">
            <path
              id="menu"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 1H64V0H0V1ZM0 17H64V16H0V17Z"
              fill="#1E1E2D"
            />
          </g>
        </svg>
      );
    case "shoppingBag":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="lucide:shopping-bag">
            <g id="Group">
              <path
                id="Vector"
                d="M3 6L6 2H18L21 6M3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6M3 6H21"
                stroke="#1E1E2D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                stroke="#1E1E2D"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      );
    case "user":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="User_alt_light">
            <circle
              id="Ellipse 46"
              cx="12"
              cy="8"
              r="3.5"
              stroke="#1E1E2D"
              stroke-linecap="round"
            />
            <path
              id="Rectangle 4160"
              d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z"
              stroke="#1E1E2D"
              stroke-linecap="round"
            />
          </g>
        </svg>
      );
    case "search":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Search_light">
            <circle id="Ellipse 65" cx="11" cy="11" r="6" stroke="#1E1E2D" />
            <path
              id="Vector 109"
              d="M20 20L17 17"
              stroke="#1E1E2D"
              stroke-linecap="round"
            />
          </g>
        </svg>
      );


    default:
      return <svg></svg>;
  }
};
