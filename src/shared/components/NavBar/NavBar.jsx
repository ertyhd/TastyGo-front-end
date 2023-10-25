// import styles from "./navBar.module.scss";

import { useSelector } from "react-redux";
import { isUserLogin } from "../../../redux/auth/auth-selector";

import NavBarAuth from "./NavBarAuth/NavBarAuth";
import NavBarUser from "./NavBarUser/NavBarUser";

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div>
      {!isLogin && <NavBarAuth />}
      {isLogin && <NavBarUser />}
    </div>
  );
};

export default Navbar;
