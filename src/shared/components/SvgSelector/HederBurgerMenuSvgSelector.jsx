import React from "react";

export const HederBurgerMenuSvgSelector = ({ id }) => {
    switch (id) {
      case "search-bg":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="9.16797" cy="9.16602" r="5" stroke="#1E1E2D" />
            <path
              d="M16.668 16.666L14.168 14.166"
              stroke="#1E1E2D"
              strokeLinecap="round"
            />
          </svg>
        );
      case "burgerUser":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M12.8346 6.66732C12.8346 8.23212 11.5661 9.50065 10.0013 9.50065C8.4365 9.50065 7.16797 8.23212 7.16797 6.66732C7.16797 5.10251 8.4365 3.83398 10.0013 3.83398C11.5661 3.83398 12.8346 5.10251 12.8346 6.66732Z"
              stroke="#1E1E2D"
              strokeLinecap="round"
            />
            <path
              d="M3.89557 14.7476C4.35607 12.3614 6.8314 11.25 9.26167 11.25H10.7383C13.1686 11.25 15.6439 12.3614 16.1044 14.7476C16.1361 14.9116 16.1634 15.08 16.1856 15.2523C16.256 15.8001 15.8023 16.25 15.25 16.25H4.75C4.19771 16.25 3.74395 15.8001 3.81441 15.2523C3.83657 15.08 3.86392 14.9116 3.89557 14.7476Z"
              stroke="#1E1E2D"
              strokeLinecap="round"
            />
          </svg>
        );
      default:
        return <svg></svg>;
    }
 };

