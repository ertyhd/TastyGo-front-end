import React from "react";
// import styles from "../../../modules/Hero/hero.module.scss";

export const SvgSelector = ({ color, id, styles, viewBox }) => {
  switch (id) {
    case "facebook":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 12.8936C22 7.37355 17.52 2.89355 12 2.89355C6.48 2.89355 2 7.37355 2 12.8936C2 17.7336 5.44 21.7636 10 22.6936V15.8936H8V12.8936H10V10.3936C10 8.46355 11.57 6.89355 13.5 6.89355H16V9.89355H14C13.45 9.89355 13 10.3436 13 10.8936V12.8936H16V15.8936H13V22.8436C18.05 22.3436 22 18.0836 22 12.8936Z"
            fill="#FFFDFA"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6 6.71355C15.9165 5.93318 15.5397 4.93099 15.54 3.89355H12.45V16.2936C12.4262 16.9646 12.1429 17.6002 11.6598 18.0665C11.1767 18.5328 10.5315 18.7935 9.86003 18.7936C8.44003 18.7936 7.26003 17.6336 7.26003 16.1936C7.26003 14.4736 8.92003 13.1836 10.63 13.7136V10.5536C7.18003 10.0936 4.16003 12.7736 4.16003 16.1936C4.16003 19.5236 6.92003 21.8936 9.85003 21.8936C12.99 21.8936 15.54 19.3436 15.54 16.1936V9.90355C16.793 10.8034 18.2974 11.2862 19.84 11.2836V8.19355C19.84 8.19355 17.96 8.28356 16.6 6.71355Z"
            fill="#FFFDFA"
          />
        </svg>
      );
    case "mastercard":
      return (
        <svg
          width="24"
          height="20"
          viewBox="0 0 24 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.36311 19.1288V17.8941C4.36311 17.4206 4.07492 17.112 3.58095 17.112C3.33401 17.112 3.06645 17.1943 2.8812 17.4619C2.7372 17.2355 2.53142 17.112 2.2227 17.112C2.01683 17.112 1.81114 17.1737 1.64642 17.4001V17.1532H1.21423V19.1288H1.64642V18.0381C1.64642 17.6883 1.83167 17.5236 2.11986 17.5236C2.40786 17.5236 2.55205 17.7088 2.55205 18.0381V19.1288H2.98423V18.0381C2.98423 17.6883 3.18992 17.5236 3.45748 17.5236C3.74567 17.5236 3.88967 17.7088 3.88967 18.0381V19.1288H4.36311ZM10.7635 17.1532H10.0639V16.5563H9.63167V17.1532H9.24064V17.5441H9.63158V18.4497C9.63158 18.9025 9.81683 19.17 10.3108 19.17C10.496 19.17 10.7017 19.1083 10.8459 19.026L10.7224 18.6555C10.5989 18.7378 10.4549 18.7584 10.352 18.7584C10.1462 18.7584 10.0639 18.635 10.0639 18.4291V17.5441H10.7635V17.1532ZM14.4269 17.1119C14.18 17.1119 14.0153 17.2355 13.9124 17.4001V17.1532H13.4802V19.1288H13.9124V18.0175C13.9124 17.6883 14.0564 17.503 14.324 17.503C14.4063 17.503 14.5092 17.5237 14.5915 17.5442L14.715 17.1326C14.6327 17.112 14.5092 17.112 14.4269 17.112V17.1119ZM8.89076 17.3178C8.68489 17.1737 8.3968 17.112 8.08808 17.112C7.5942 17.112 7.26495 17.3589 7.26495 17.75C7.26495 18.0793 7.51189 18.2645 7.94408 18.3262L8.14986 18.3469C8.37627 18.3879 8.49973 18.4497 8.49973 18.5527C8.49973 18.6967 8.33511 18.7996 8.04692 18.7996C7.75883 18.7996 7.53242 18.6967 7.38833 18.5938L7.18255 18.9231C7.40895 19.0877 7.71767 19.17 8.0263 19.17C8.60258 19.17 8.93192 18.9025 8.93192 18.532C8.93192 18.1822 8.66436 17.9969 8.2527 17.9352L8.04692 17.9146C7.86167 17.894 7.71767 17.8529 7.71767 17.7294C7.71767 17.5853 7.86167 17.503 8.08808 17.503C8.33511 17.503 8.58205 17.6059 8.70551 17.6677L8.89076 17.3178ZM20.3747 17.112C20.1276 17.112 19.963 17.2355 19.8601 17.4001V17.1532H19.4279V19.1288H19.8601V18.0175C19.8601 17.6883 20.0042 17.503 20.2716 17.503C20.354 17.503 20.457 17.5237 20.5393 17.5442L20.6628 17.1326C20.5805 17.112 20.457 17.112 20.3747 17.112ZM14.8591 18.141C14.8591 18.7378 15.2706 19.17 15.9087 19.17C16.1968 19.17 16.4026 19.1083 16.6084 18.9437L16.4026 18.5938C16.238 18.7173 16.0733 18.779 15.8881 18.779C15.5382 18.779 15.2913 18.532 15.2913 18.141C15.2913 17.7706 15.5382 17.5236 15.8881 17.503C16.0733 17.503 16.238 17.5647 16.4026 17.6883L16.6084 17.3384C16.4026 17.1737 16.1968 17.112 15.9087 17.112C15.2706 17.112 14.8591 17.5442 14.8591 18.141ZM18.8517 18.141V17.1532H18.4195V17.4001C18.2754 17.2149 18.0696 17.112 17.8021 17.112C17.2464 17.112 16.8142 17.5442 16.8142 18.141C16.8142 18.7378 17.2464 19.17 17.8021 19.17C18.0902 19.17 18.296 19.0672 18.4195 18.8819V19.1288H18.8517V18.141ZM17.267 18.141C17.267 17.7911 17.4934 17.503 17.8638 17.503C18.2136 17.503 18.4607 17.7706 18.4607 18.141C18.4607 18.4909 18.2136 18.779 17.8638 18.779C17.4934 18.7583 17.267 18.4909 17.267 18.141ZM12.1013 17.112C11.525 17.112 11.1134 17.5236 11.1134 18.141C11.1134 18.7584 11.525 19.17 12.1219 19.17C12.41 19.17 12.6981 19.0877 12.9245 18.9025L12.7187 18.5938C12.554 18.7173 12.3483 18.7996 12.1425 18.7996C11.8749 18.7996 11.6074 18.6761 11.5456 18.3262H13.0069V18.1616C13.0275 17.5236 12.6571 17.112 12.1013 17.112ZM12.1013 17.4824C12.3688 17.4824 12.5541 17.6471 12.5952 17.9558H11.5662C11.6074 17.6883 11.7926 17.4824 12.1013 17.4824ZM22.8237 18.141V16.3711H22.3915V17.4001C22.2474 17.2149 22.0416 17.112 21.7741 17.112C21.2184 17.112 20.7862 17.5442 20.7862 18.141C20.7862 18.7378 21.2184 19.17 21.7741 19.17C22.0623 19.17 22.268 19.0672 22.3915 18.8819V19.1288H22.8237V18.141ZM21.239 18.141C21.239 17.7911 21.4654 17.503 21.8359 17.503C22.1857 17.503 22.4327 17.7706 22.4327 18.141C22.4327 18.4909 22.1857 18.779 21.8359 18.779C21.4654 18.7583 21.239 18.4909 21.239 18.141ZM6.79152 18.141V17.1532H6.35933V17.4001C6.21523 17.2149 6.00945 17.112 5.74189 17.112C5.18623 17.112 4.75405 17.5442 4.75405 18.141C4.75405 18.7378 5.18623 19.17 5.74189 19.17C6.03008 19.17 6.23586 19.0672 6.35933 18.8819V19.1288H6.79152V18.141ZM5.18623 18.141C5.18623 17.7911 5.41264 17.503 5.78305 17.503C6.13292 17.503 6.37995 17.7706 6.37995 18.141C6.37995 18.4909 6.13292 18.779 5.78305 18.779C5.41264 18.7583 5.18623 18.4909 5.18623 18.141Z"
            fill="black"
          />
          <path
            d="M8.7467 2.1499H15.2295V13.7984H8.7467V2.1499Z"
            fill="#FF5F00"
          />
          <path
            d="M9.15834 7.9744C9.15834 5.60768 10.2697 3.50843 11.9778 2.15009C10.7225 1.16224 9.13781 0.56543 7.40906 0.56543C3.31341 0.56543 0 3.87884 0 7.9744C0 12.0699 3.31341 15.3834 7.40897 15.3834C9.13772 15.3834 10.7224 14.7866 11.9778 13.7986C10.2697 12.4609 9.15834 10.3411 9.15834 7.9744Z"
            fill="#EB001B"
          />
          <path
            d="M23.9762 7.9744C23.9762 12.0699 20.6628 15.3834 16.5672 15.3834C14.8385 15.3834 13.2538 14.7866 11.9984 13.7986C13.7272 12.4404 14.8179 10.3411 14.8179 7.9744C14.8179 5.60768 13.7065 3.50843 11.9984 2.15009C13.2537 1.16224 14.8385 0.56543 16.5672 0.56543C20.6628 0.56543 23.9762 3.89946 23.9762 7.9744Z"
            fill="#F79E1B"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.028 2.89479C13.7577 2.89198 14.4874 2.89932 15.217 2.91679L15.411 2.92379C15.635 2.93179 15.856 2.94179 16.123 2.95379C17.187 3.00379 17.913 3.17179 18.55 3.41879C19.21 3.67279 19.766 4.01679 20.322 4.57279C20.8303 5.07239 21.2238 5.67673 21.475 6.34379C21.722 6.98078 21.89 7.70778 21.94 8.77178C21.952 9.03778 21.962 9.25979 21.97 9.48379L21.976 9.67779C21.9937 10.407 22.0014 11.1364 21.999 11.8658L22 12.6118V13.9218C22.0024 14.6515 21.9948 15.3813 21.977 16.1108L21.971 16.3048C21.963 16.5288 21.953 16.7498 21.941 17.0168C21.891 18.0808 21.721 18.8068 21.475 19.4438C21.2246 20.1115 20.8311 20.7164 20.322 21.2158C19.8219 21.7241 19.2173 22.1175 18.55 22.3688C17.913 22.6158 17.187 22.7838 16.123 22.8338C15.856 22.8458 15.635 22.8558 15.411 22.8638L15.217 22.8698C14.4874 22.8876 13.7577 22.8952 13.028 22.8928L12.282 22.8938H10.973C10.2432 22.8962 9.51349 22.8886 8.78397 22.8708L8.58997 22.8648C8.35258 22.8562 8.11524 22.8462 7.87797 22.8348C6.81397 22.7848 6.08797 22.6148 5.44997 22.3688C4.78265 22.1181 4.1782 21.7246 3.67897 21.2158C3.17001 20.7161 2.77619 20.1113 2.52497 19.4438C2.27797 18.8068 2.10997 18.0808 2.05997 17.0168C2.04883 16.7795 2.03883 16.5422 2.02997 16.3048L2.02497 16.1108C2.00653 15.3813 1.9982 14.6515 1.99997 13.9218V11.8658C1.99718 11.1364 2.00451 10.407 2.02197 9.67779L2.02897 9.48379C2.03697 9.25979 2.04697 9.03778 2.05897 8.77178C2.10897 7.70678 2.27697 6.98178 2.52397 6.34379C2.77534 5.67641 3.16993 5.07223 3.67997 4.57379C4.17886 4.06454 4.78293 3.67036 5.44997 3.41879C6.08797 3.17179 6.81297 3.00379 7.87797 2.95379L8.58997 2.92379L8.78397 2.91879C9.51315 2.90036 10.2426 2.89202 10.972 2.89379L13.028 2.89479ZM12 7.89478C11.3375 7.88542 10.6797 8.00781 10.0649 8.25485C9.45016 8.5019 8.89061 8.86866 8.41881 9.33384C7.94701 9.79902 7.57237 10.3533 7.31665 10.9645C7.06094 11.5758 6.92926 12.2317 6.92926 12.8943C6.92926 13.5568 7.06094 14.2128 7.31665 14.824C7.57237 15.4352 7.94701 15.9896 8.41881 16.4547C8.89061 16.9199 9.45016 17.2867 10.0649 17.5337C10.6797 17.7808 11.3375 17.9032 12 17.8938C13.326 17.8938 14.5978 17.367 15.5355 16.4293C16.4732 15.4916 17 14.2199 17 12.8938C17 11.5677 16.4732 10.2959 15.5355 9.35825C14.5978 8.42057 13.326 7.89478 12 7.89478ZM12 9.89479C12.3985 9.88744 12.7944 9.95958 13.1648 10.107C13.5351 10.2544 13.8723 10.4741 14.1567 10.7533C14.4412 11.0325 14.6671 11.3656 14.8214 11.7331C14.9757 12.1006 15.0552 12.4952 15.0552 12.8938C15.0553 13.2924 14.9759 13.6869 14.8218 14.0545C14.6677 14.4221 14.4418 14.7552 14.1575 15.0345C13.8731 15.3138 13.536 15.5337 13.1657 15.6812C12.7954 15.8287 12.3995 15.901 12.001 15.8938C11.2053 15.8938 10.4423 15.5777 9.87965 15.0151C9.31704 14.4525 9.00097 13.6894 9.00097 12.8938C9.00097 12.0981 9.31704 11.3351 9.87965 10.7725C10.4423 10.2099 11.2053 9.89378 12.001 9.89378L12 9.89479ZM17.25 6.39479C16.9274 6.4077 16.6223 6.54494 16.3986 6.77776C16.1749 7.01058 16.05 7.32092 16.05 7.64378C16.05 7.96665 16.1749 8.27699 16.3986 8.50981C16.6223 8.74263 16.9274 8.87987 17.25 8.89279C17.5815 8.89279 17.8994 8.76109 18.1339 8.52667C18.3683 8.29225 18.5 7.97431 18.5 7.64279C18.5 7.31126 18.3683 6.99332 18.1339 6.7589C17.8994 6.52448 17.5815 6.39279 17.25 6.39279V6.39479Z"
            fill="#FFFDFA"
          />
        </svg>
      );
    case "visa":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.221 16.6617L21.997 15.5367H19.483L19.083 16.6537L17.068 16.6577C18.363 13.5447 19.325 11.2397 19.952 9.74067C20.116 9.34867 20.407 9.14867 20.836 9.15167C21.164 9.15467 21.699 9.15467 22.442 9.15267L24 16.6587L22.221 16.6617ZM20.049 13.9957H21.669L21.064 11.1757L20.049 13.9957ZM7.06 9.15067L9.086 9.15267L5.954 16.6627L3.903 16.6607C3.38725 14.677 2.87792 12.6916 2.375 10.7047C2.275 10.3087 2.077 10.0317 1.696 9.90067C1.13333 9.71208 0.56794 9.53173 0 9.35967L0 9.15267H3.237C3.797 9.15267 4.124 9.42367 4.229 9.97967C4.335 10.5367 4.601 11.9557 5.029 14.2337L7.06 9.15067ZM11.87 9.15267L10.269 16.6617L8.34 16.6587L9.94 9.15067L11.87 9.15267ZM15.78 9.01367C16.357 9.01367 17.084 9.19367 17.502 9.35967L17.164 10.9157C16.786 10.7637 16.164 10.5587 15.641 10.5657C14.881 10.5787 14.411 10.8977 14.411 11.2037C14.411 11.7017 15.227 11.9527 16.067 12.4967C17.025 13.1167 17.152 13.6737 17.14 14.2797C17.127 15.5347 16.067 16.7737 13.831 16.7737C12.811 16.7587 12.443 16.6737 11.611 16.3777L11.963 14.7537C12.81 15.1077 13.169 15.2207 13.893 15.2207C14.556 15.2207 15.125 14.9527 15.13 14.4857C15.134 14.1537 14.93 13.9887 14.186 13.5787C13.442 13.1677 12.398 12.5997 12.412 11.4567C12.429 9.99467 13.814 9.01367 15.78 9.01367Z"
            fill="#FFFDFA"
          />
        </svg>
      );
    case "arrowTopRight":
      return (
        <svg
          className={styles}
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          fill="none"
        >
          <path
            d="M31.4853 14.5147H17.3431V16.5088L28.0699 16.5158L13.8076 30.7782L15.2218 32.1924L29.4841 17.9301L29.4912 28.6569H31.4853V14.5147Z"
            fill="currentColor"
          />
        </svg>
      );
    case "location":
      return (
        <svg
          className={styles}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 21.2934L11.616 20.8614C11.376 20.6214 5.76001 13.9974 5.76001 10.0134C5.76001 6.55744 8.54401 3.77344 12 3.77344C15.456 3.77344 18.24 6.55744 18.24 10.0134C18.24 13.9974 12.624 20.6214 12.384 20.9094L12 21.2934ZM12 4.73344C9.07201 4.73344 6.72001 7.08544 6.72001 10.0134C6.72001 13.0854 10.752 18.2694 12 19.8054C13.248 18.2694 17.28 13.0854 17.28 10.0134C17.28 7.08544 14.928 4.73344 12 4.73344Z"
            fill="#1E1E2D"
          />
          <path
            d="M12 12.4138C10.656 12.4138 9.59998 11.3578 9.59998 10.0138C9.59998 8.66977 10.656 7.61377 12 7.61377C13.344 7.61377 14.4 8.66977 14.4 10.0138C14.4 11.3578 13.344 12.4138 12 12.4138ZM12 8.57377C11.184 8.57377 10.56 9.19777 10.56 10.0138C10.56 10.8298 11.184 11.4538 12 11.4538C12.816 11.4538 13.44 10.8298 13.44 10.0138C13.44 9.19777 12.816 8.57377 12 8.57377Z"
            fill="#1E1E2D"
          />
        </svg>
      );
    case "telephone":
      return (
        <svg
          className={styles}
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.6981 16.093L16.2713 14.1121C16.0996 14.0378 15.9122 14.0075 15.726 14.0239C15.5397 14.0402 15.3604 14.1028 15.2044 14.2058C15.1919 14.2137 15.18 14.2225 15.1688 14.2321L12.8438 16.214C12.792 16.2455 12.7333 16.2638 12.6728 16.2673C12.6123 16.2707 12.5519 16.2592 12.4969 16.2337C10.9744 15.4987 9.39845 13.9349 8.66345 12.4302C8.63745 12.3757 8.62538 12.3155 8.62832 12.2551C8.63127 12.1948 8.64914 12.1361 8.68032 12.0843L10.6678 9.72084C10.6772 9.70959 10.6856 9.6974 10.6941 9.68522C10.7968 9.52941 10.8592 9.35048 10.8755 9.16457C10.8919 8.97865 10.8618 8.79158 10.7878 8.62022L8.80314 4.20084C8.70732 3.97701 8.54148 3.7903 8.33051 3.66876C8.11954 3.54722 7.87483 3.49739 7.63314 3.52678C6.45336 3.68233 5.37054 4.26203 4.58694 5.15759C3.80334 6.05316 3.37254 7.20336 3.37501 8.39334C3.37501 15.6308 9.26251 21.5183 16.5 21.5183C17.69 21.5208 18.8402 21.09 19.7358 20.3064C20.6313 19.5228 21.211 18.44 21.3666 17.2602C21.3957 17.0196 21.3464 16.776 21.226 16.5657C21.1056 16.3554 20.9204 16.1896 20.6981 16.093ZM20.625 17.1665C20.4926 18.1656 20.0009 19.0823 19.2417 19.7452C18.4825 20.4081 17.5079 20.7718 16.5 20.7683C9.67689 20.7683 4.12501 15.2165 4.12501 8.39334C4.12152 7.38548 4.48523 6.41085 5.14813 5.65166C5.81103 4.89248 6.72775 4.40073 7.72689 4.26834C7.74187 4.26741 7.7569 4.26741 7.77189 4.26834C7.84587 4.26897 7.91801 4.29147 7.97923 4.33301C8.04045 4.37455 8.08802 4.43327 8.11595 4.50178L10.095 8.92115C10.1181 8.97517 10.1282 9.03385 10.1244 9.09247C10.1207 9.1511 10.1032 9.20802 10.0734 9.25865L8.08689 11.6212C8.07751 11.6333 8.06814 11.6446 8.0597 11.6577C7.95386 11.8196 7.89153 12.006 7.87872 12.1989C7.86591 12.3919 7.90306 12.5849 7.98657 12.7593C8.80126 14.4271 10.4813 16.0949 12.1678 16.9096C12.3434 16.9926 12.5375 17.0287 12.7312 17.0144C12.9249 17.0001 13.1116 16.9359 13.2731 16.828L13.3078 16.8018L15.6356 14.8218C15.6854 14.7914 15.7417 14.7732 15.7999 14.7688C15.8581 14.7644 15.9165 14.7739 15.9703 14.7965L20.3963 16.7802C20.471 16.8113 20.5336 16.8657 20.5748 16.9353C20.616 17.0049 20.6336 17.086 20.625 17.1665Z"
            fill="#1E1E2D"
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
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 1H64V0H0V1ZM0 17H64V16H0V17Z"
              fill="#1E1E2D"
            />
          </g>
        </svg>
      );
    case "shoppingBasket":
      return (
        <svg
          className={styles}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
        >
          <path
            d="M0.5 4.50008L3 1.16675H13L15.5 4.50008M0.5 4.50008V16.1667C0.5 16.6088 0.675595 17.0327 0.988155 17.3453C1.30072 17.6578 1.72464 17.8334 2.16667 17.8334H13.8333C14.2754 17.8334 14.6993 17.6578 15.0118 17.3453C15.3244 17.0327 15.5 16.6088 15.5 16.1667V4.50008M0.5 4.50008H15.5"
            stroke="#1E1E2D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.3327 7.8335C11.3327 8.71755 10.9815 9.5654 10.3564 10.1905C9.73125 10.8156 8.8834 11.1668 7.99935 11.1668C7.11529 11.1668 6.26745 10.8156 5.64233 10.1905C5.0172 9.5654 4.66602 8.71755 4.66602 7.8335"
            stroke="#1E1E2D"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "user":
      return (
        <svg
          className={styles}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12"
            cy="8"
            r="3.5"
            stroke="#1E1E2D"
            strokeLinecap="round"
          />
          <path
            d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z"
            stroke="#1E1E2D"
            strokeLinecap="round"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          className={styles}
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
              strokeLinecap="round"
            />
          </g>
        </svg>
      );
    case "star":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles}
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M21.9843 11.6165L17.7562 15.3065L19.0228 20.8002C19.0898 21.0874 19.0707 21.388 18.9678 21.6644C18.8649 21.9408 18.6828 22.1807 18.4443 22.3542C18.2058 22.5277 17.9215 22.627 17.6268 22.6397C17.3322 22.6525 17.0404 22.5781 16.7878 22.4259L11.9962 19.5196L7.21495 22.4259C6.96236 22.5781 6.6705 22.6525 6.37586 22.6397C6.08122 22.627 5.79688 22.5277 5.55838 22.3542C5.31988 22.1807 5.13781 21.9408 5.03493 21.6644C4.93205 21.388 4.91293 21.0874 4.97995 20.8002L6.24464 15.3121L2.01557 11.6165C1.79189 11.4236 1.63015 11.1689 1.55063 10.8844C1.4711 10.6 1.47733 10.2984 1.56855 10.0174C1.65976 9.73646 1.83189 9.4887 2.06335 9.3052C2.29481 9.12169 2.57529 9.0106 2.86964 8.98587L8.44401 8.50305L10.6199 3.31306C10.7336 3.04073 10.9252 2.80811 11.1708 2.64448C11.4164 2.48086 11.7049 2.39355 11.9999 2.39355C12.295 2.39355 12.5835 2.48086 12.8291 2.64448C13.0747 2.80811 13.2663 3.04073 13.3799 3.31306L15.5624 8.50305L21.1349 8.98587C21.4293 9.0106 21.7098 9.12169 21.9412 9.3052C22.1727 9.4887 22.3448 9.73646 22.436 10.0174C22.5272 10.2984 22.5335 10.6 22.454 10.8844C22.3744 11.1689 22.2127 11.4236 21.989 11.6165H21.9843Z"
            fill="#F9854E"
          />
        </svg>
      );
    case "burgerMobil":
      return (
        <svg
          className={styles}
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="10"
          viewBox="0 0 33 10"
          fill="none"
        >
          <path d="M0 1H32" stroke="#1E1E2D" />
          <path d="M0.5 9H32.5" stroke="#1E1E2D" />
        </svg>
      );
    case "arrowRightPopularDishDesc":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            d="M28.5 16.074L18.5 6.07397L17.09 7.48397L24.67 15.074L4.5 15.074V17.074H24.67L17.09 24.664L18.5 26.074L28.5 16.074Z"
            fill="#1E1E2D"
          />
        </svg>
      );
    case "arrowLeftPopularDishDesc":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
        >
          <path
            d="M4.5 16.074L14.5 26.074L15.91 24.664L8.33 17.074H28.5V15.074L8.33 15.074L15.91 7.48397L14.5 6.07397L4.5 16.074Z"
            fill="#1E1E2D"
          />
        </svg>
      );
    case "arrowLeftSwiper":
      return (
        <svg
          className={styles}
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 18L18 28L19.41 26.59L11.83 19H28V17H11.83L19.41 9.41L18 8L8 18Z"
            fill="currentColor"
          />
          <rect
            x="0.5"
            y="0.5"
            width="35"
            height="35"
            rx="17.5"
            stroke="currentColor"
          />
        </svg>
      );
    case "arrowRightSwiper":
      return (
        <svg
          className={styles}
          width="36"
          height="37"
          viewBox="0 0 36 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 18.2549L18 28.2549L16.59 26.8449L24.17 19.2549H8V17.2549H24.17L16.59 9.66488L18 8.25488L28 18.2549Z"
            fill="currentColor"
          />
          <rect
            x="0.5"
            y="0.754883"
            width="35"
            height="35"
            rx="17.5"
            stroke="currentColor"
          />
        </svg>
      );
    case "workingHours":
      return (
        <svg
          className={styles}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8141 10.2549L11.1841 14.8849L9.00012 12.7014"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.1081 20.4709C16.586 20.4709 20.2161 16.8408 20.2161 12.3629C20.2161 7.88496 16.586 4.25488 12.1081 4.25488C7.63014 4.25488 4.00006 7.88496 4.00006 12.3629C4.00006 16.8408 7.63014 20.4709 12.1081 20.4709Z"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "logoBlack":
      return (
        <svg
          className={styles}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8141 10.2549L11.1841 14.8849L9.00012 12.7014"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.1081 20.4709C16.586 20.4709 20.2161 16.8408 20.2161 12.3629C20.2161 7.88496 16.586 4.25488 12.1081 4.25488C7.63014 4.25488 4.00006 7.88496 4.00006 12.3629C4.00006 16.8408 7.63014 20.4709 12.1081 20.4709Z"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    case "buttonClose":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
            fill="black"
          />
        </svg>
      );
    case "ModalButtonClose":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
            fill="#1E1E2D"
          />
        </svg>
      );

    case "checkboxEmpty":
      return (
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1.0293"
            width="21"
            height="21"
            rx="1.5"
            stroke="#F9854E"
          />
        </svg>
      );
    case "checkboxPresed":
      return (
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="1.0293"
            width="21"
            height="21"
            rx="1.5"
            fill="#F9854E"
            stroke="#F9854E"
          />
          <path d="M5 10.9376L9.38913 16.5293L18 6.5293" stroke="#FFFDFA" />
          <rect
            x="0.5"
            y="1.0293"
            width="21"
            height="21"
            rx="1.5"
            stroke="#F9854E"
          />
        </svg>
      );
    case "googleLogo":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.04 12.2624C23.04 11.447 22.9668 10.6629 22.8309 9.91016H12V14.3586H18.1891C17.9225 15.7961 17.1123 17.014 15.8943 17.8295V20.7149H19.6109C21.7855 18.7129 23.04 15.7647 23.04 12.2624Z"
            fill="#4285F4"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9995 23.4986C15.1045 23.4986 17.7077 22.4688 19.6104 20.7125L15.8938 17.827C14.864 18.517 13.5467 18.9247 11.9995 18.9247C9.00425 18.9247 6.46902 16.9018 5.5647 14.1836H1.72266V17.1631C3.61493 20.9215 7.50402 23.4986 11.9995 23.4986Z"
            fill="#34A853"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.56523 14.1855C5.33523 13.4955 5.20455 12.7584 5.20455 12.0005C5.20455 11.2425 5.33523 10.5055 5.56523 9.81548V6.83594H1.72318C0.944318 8.38844 0.5 10.1448 0.5 12.0005C0.5 13.8562 0.944318 15.6125 1.72318 17.165L5.56523 14.1855Z"
            fill="#FBBC05"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9995 5.07386C13.6879 5.07386 15.2038 5.65409 16.3956 6.79364L19.694 3.49523C17.7024 1.63955 15.0992 0.5 11.9995 0.5C7.50402 0.5 3.61493 3.07705 1.72266 6.83545L5.5647 9.815C6.46902 7.09682 9.00425 5.07386 11.9995 5.07386Z"
            fill="#EA4335"
          />
        </svg>
      );
    case "appleLogo":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.7798 18.424C21.432 19.2275 21.0203 19.9672 20.5433 20.6472C19.893 21.5743 19.3606 22.216 18.9503 22.5724C18.3143 23.1573 17.6329 23.4568 16.9031 23.4739C16.3792 23.4739 15.7475 23.3248 15.0121 23.0224C14.2742 22.7214 13.5962 22.5724 12.9762 22.5724C12.326 22.5724 11.6286 22.7214 10.8827 23.0224C10.1356 23.3248 9.53383 23.4824 9.0737 23.498C8.37393 23.5278 7.67643 23.2197 6.9802 22.5724C6.53583 22.1848 5.98002 21.5204 5.31417 20.5791C4.59977 19.5739 4.01244 18.4084 3.55231 17.0795C3.05953 15.6442 2.8125 14.2543 2.8125 12.9087C2.8125 11.3673 3.14556 10.0379 3.81269 8.92385C4.33698 8.029 5.03449 7.32312 5.90747 6.80493C6.78045 6.28674 7.7237 6.02267 8.73951 6.00578C9.29532 6.00578 10.0242 6.1777 10.93 6.51559C11.8332 6.85462 12.4131 7.02655 12.6674 7.02655C12.8575 7.02655 13.5018 6.82552 14.594 6.42473C15.6268 6.05305 16.4985 5.89916 17.2126 5.95978C19.1477 6.11595 20.6015 6.87876 21.5683 8.25303C19.8377 9.30163 18.9816 10.7703 18.9986 12.6544C19.0142 14.122 19.5466 15.3432 20.5929 16.3129C21.0671 16.7629 21.5967 17.1107 22.1859 17.3578C22.0581 17.7283 21.9232 18.0832 21.7798 18.424ZM17.3418 0.960131C17.3418 2.11039 16.9216 3.18439 16.0839 4.17847C15.0731 5.36023 13.8505 6.04311 12.5246 5.93536C12.5077 5.79736 12.4979 5.65213 12.4979 5.49951C12.4979 4.39526 12.9786 3.21349 13.8323 2.24724C14.2585 1.75801 14.8005 1.35122 15.4579 1.02671C16.1138 0.707053 16.7342 0.530273 17.3177 0.5C17.3347 0.653772 17.3418 0.807554 17.3418 0.960116V0.960131Z"
            fill="#1E1E2D"
          />
        </svg>
      );

    case "error":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12.0471L11.6464 11.6935L9.4121 9.4592C9.41208 9.45918 9.41206 9.45916 9.41205 9.45915C9.35579 9.40294 9.27952 9.37136 9.2 9.37136C9.1205 9.37136 9.04425 9.40292 8.98801 9.45909C8.98797 9.45913 8.98794 9.45916 8.9879 9.4592M12 12.0471L8.6344 10.2368C8.48442 10.0868 8.40017 9.88332 8.40017 9.67119C8.40017 9.45906 8.48442 9.25561 8.6344 9.10559L8.9879 9.4592M12 12.0471L12.3536 11.6935L14.588 9.45915L14.588 9.4592L14.594 9.45295C14.6217 9.42429 14.6548 9.40144 14.6914 9.38572L14.4941 8.92631L14.6914 9.38572C14.728 9.36999 14.7674 9.36172 14.8072 9.36137C14.8471 9.36103 14.8866 9.36862 14.9234 9.3837L15.1128 8.92093L14.9234 9.3837C14.9603 9.39879 14.9938 9.42106 15.022 9.44923C15.0501 9.4774 15.0724 9.51089 15.0875 9.54776L15.5503 9.35843L15.0875 9.54776C15.1026 9.58463 15.1102 9.62413 15.1098 9.66397C15.1095 9.7038 15.1012 9.74316 15.0855 9.77977C15.0698 9.81637 15.0469 9.84947 15.0182 9.87715L15.0182 9.87709L15.012 9.88324L12.7776 12.1176L12.4241 12.4712L12.7776 12.8247L15.0082 15.0553C15.0614 15.1117 15.0908 15.1864 15.0902 15.264C15.0895 15.3426 15.0579 15.4179 15.0023 15.4735C14.9467 15.5291 14.8714 15.5607 14.7928 15.5614C14.7152 15.562 14.6405 15.5326 14.5841 15.4794L12.3536 13.2488L12 12.8953L11.6464 13.2488L9.41586 15.4794C9.35954 15.5326 9.28478 15.562 9.20722 15.5614C9.12857 15.5607 9.05332 15.5291 8.9977 15.4735C8.94208 15.4179 8.91053 15.3426 8.90984 15.264C8.90917 15.1864 8.93855 15.1117 8.99176 15.0553L11.2224 12.8247L11.5759 12.4712L11.2224 12.1176L8.98801 9.88329M12 12.0471L8.98801 9.88329M8.9879 9.4592C8.93173 9.51545 8.90017 9.59169 8.90017 9.67119C8.90017 9.75072 8.93175 9.82698 8.98795 9.88324M8.9879 9.4592L8.98795 9.88324M8.98801 9.88329C8.98799 9.88327 8.98797 9.88326 8.98795 9.88324M8.98801 9.88329L8.98795 9.88324M12 5.57119C10.17 5.57119 8.41496 6.29815 7.12096 7.59215C5.82696 8.88616 5.1 10.6412 5.1 12.4712C5.1 14.3012 5.82696 16.0562 7.12096 17.3502C8.41496 18.6442 10.17 19.3712 12 19.3712C13.83 19.3712 15.585 18.6442 16.879 17.3502C18.173 16.0562 18.9 14.3012 18.9 12.4712C18.9 10.6412 18.173 8.88616 16.879 7.59215C15.585 6.29815 13.83 5.57119 12 5.57119ZM4.5 12.4712C4.5 8.32893 7.85774 4.97119 12 4.97119C16.1423 4.97119 19.5 8.32893 19.5 12.4712C19.5 16.6134 16.1423 19.9712 12 19.9712C7.85774 19.9712 4.5 16.6134 4.5 12.4712Z"
            fill="#FF2E00"
            stroke="#FF2E00"
          />
        </svg>
      );
    case "blackCircle":
      return (
        <svg
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle id="Ellipse 95" cx="45" cy="45" r="45" fill="#152F23" />
        </svg>
      );
    case "editAvatar":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 12C19.5 11.8011 19.579 11.6103 19.7197 11.4697C19.8603 11.329 20.0511 11.25 20.25 11.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12V20.25C21 20.4489 20.921 20.6397 20.7803 20.7803C20.6397 20.921 20.4489 21 20.25 21H3.75C3.55109 21 3.36032 20.921 3.21967 20.7803C3.07902 20.6397 3 20.4489 3 20.25V3.75C3 3.55109 3.07902 3.36032 3.21967 3.21967C3.36032 3.07902 3.55109 3 3.75 3H12C12.1989 3 12.3897 3.07902 12.5303 3.21967C12.671 3.36032 12.75 3.55109 12.75 3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5H4.5V19.5H19.5V12Z"
            fill="#8B8B8B"
          />
          <path
            d="M11.0145 12.9909L12.252 12.8139L19.854 5.21336C19.9256 5.14418 19.9827 5.06142 20.0221 4.96992C20.0614 4.87841 20.082 4.78 20.0829 4.68041C20.0838 4.58083 20.0648 4.48207 20.0271 4.3899C19.9894 4.29773 19.9337 4.21399 19.8633 4.14357C19.7929 4.07315 19.7091 4.01746 19.6169 3.97975C19.5248 3.94204 19.426 3.92306 19.3264 3.92393C19.2268 3.92479 19.1284 3.94548 19.0369 3.98479C18.9454 4.02409 18.8627 4.08123 18.7935 4.15286L11.19 11.7534L11.013 12.9909H11.0145ZM20.9145 3.09086C21.1236 3.29981 21.2894 3.54792 21.4026 3.82099C21.5158 4.09407 21.574 4.38677 21.574 4.68236C21.574 4.97796 21.5158 5.27066 21.4026 5.54373C21.2894 5.81681 21.1236 6.06491 20.9145 6.27386L13.137 14.0514C13.0223 14.1665 12.8733 14.2412 12.7125 14.2644L10.2375 14.6184C10.1221 14.6349 10.0045 14.6244 9.89395 14.5876C9.78339 14.5508 9.68293 14.4887 9.60053 14.4063C9.51813 14.3239 9.45607 14.2234 9.41926 14.1129C9.38245 14.0023 9.37191 13.8847 9.38848 13.7694L9.74248 11.2944C9.7652 11.1337 9.83942 10.9848 9.95398 10.8699L17.733 3.09236C18.1549 2.67055 18.7271 2.43359 19.3237 2.43359C19.9203 2.43359 20.4925 2.67055 20.9145 3.09236V3.09086Z"
            fill="#8B8B8B"
          />
        </svg>
      );
    case "deleteAvatar":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5H14C14 4.46957 13.7893 3.96086 13.4142 3.58579C13.0391 3.21071 12.5304 3 12 3C11.4696 3 10.9609 3.21071 10.5858 3.58579C10.2107 3.96086 10 4.46957 10 5ZM8.5 5C8.5 4.54037 8.59053 4.08525 8.76642 3.66061C8.94231 3.23597 9.20012 2.85013 9.52513 2.52513C9.85013 2.20012 10.236 1.94231 10.6606 1.76642C11.0852 1.59053 11.5404 1.5 12 1.5C12.4596 1.5 12.9148 1.59053 13.3394 1.76642C13.764 1.94231 14.1499 2.20012 14.4749 2.52513C14.7999 2.85013 15.0577 3.23597 15.2336 3.66061C15.4095 4.08525 15.5 4.54037 15.5 5H21.25C21.4489 5 21.6397 5.07902 21.7803 5.21967C21.921 5.36032 22 5.55109 22 5.75C22 5.94891 21.921 6.13968 21.7803 6.28033C21.6397 6.42098 21.4489 6.5 21.25 6.5H19.93L18.76 18.611C18.6702 19.539 18.238 20.4002 17.5477 21.0268C16.8573 21.6534 15.9583 22.0004 15.026 22H8.974C8.04186 22.0001 7.1431 21.653 6.45295 21.0265C5.7628 20.3999 5.33073 19.5388 5.241 18.611L4.07 6.5H2.75C2.55109 6.5 2.36032 6.42098 2.21967 6.28033C2.07902 6.13968 2 5.94891 2 5.75C2 5.55109 2.07902 5.36032 2.21967 5.21967C2.36032 5.07902 2.55109 5 2.75 5H8.5ZM10.5 9.75C10.5 9.55109 10.421 9.36032 10.2803 9.21967C10.1397 9.07902 9.94891 9 9.75 9C9.55109 9 9.36032 9.07902 9.21967 9.21967C9.07902 9.36032 9 9.55109 9 9.75V17.25C9 17.4489 9.07902 17.6397 9.21967 17.7803C9.36032 17.921 9.55109 18 9.75 18C9.94891 18 10.1397 17.921 10.2803 17.7803C10.421 17.6397 10.5 17.4489 10.5 17.25V9.75ZM14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V17.25C15 17.4489 14.921 17.6397 14.7803 17.7803C14.6397 17.921 14.4489 18 14.25 18C14.0511 18 13.8603 17.921 13.7197 17.7803C13.579 17.6397 13.5 17.4489 13.5 17.25V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9ZM6.734 18.467C6.78794 19.0236 7.04724 19.5403 7.46137 19.9161C7.87549 20.292 8.41475 20.5001 8.974 20.5H15.026C15.5853 20.5001 16.1245 20.292 16.5386 19.9161C16.9528 19.5403 17.2121 19.0236 17.266 18.467L18.424 6.5H5.576L6.734 18.467Z"
            fill="#9E9E9E"
          />
        </svg>
      );

    case "arrowDown":
      return (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 10.5L12 15.5L7 10.5"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};
