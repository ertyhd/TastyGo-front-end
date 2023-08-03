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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                stroke="#1E1E2D"
                strokeLinecap="round"
                strokeLinejoin="round"
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
              strokeLinecap="round"
            />
            <path
              id="Rectangle 4160"
              d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z"
              stroke="#1E1E2D"
              strokeLinecap="round"
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

    default:
      return <svg></svg>;
  }
};
