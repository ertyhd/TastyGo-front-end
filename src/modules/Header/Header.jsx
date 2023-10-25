import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { SvgSelector } from "../../shared/components/SvgSelector/SvgSelector";
// import Modal from "../../shared/components/Modal/Modal";
// import RegistrationForm from "../../shared/components/Forms/authForms/RegistrationForm/RegistrationForm";
// import LoginForm from "../../shared/components/Forms/authForms/LoginForm/LoginForm";
import Navbar from "../../shared/components/NavBar/NavBar";

import css from "./heder.module.scss";
import items from "./items";
import logo from "../../assete/svg/Logo_TastyGo_Black_Desktop.svg";

const Header = () => {
  const [isCenterMode, setIsCenterMode] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  // const [isAuthModal, setAuthModal] = useState("reg");

  useEffect(() => {
    const handleResize = () => {
      setIsCenterMode(window.innerWidth <= 1439);
    };

    const handleClickOutside = (event) => {
      if (burgerMenuOpen && !event.target.closest(".burgerMenu")) {
        setBurgerMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [burgerMenuOpen]);

  const handleBurgerMenu = (bool) => {
    setBurgerMenuOpen(bool);
  };

  // const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsAuthModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsAuthModalOpen(false);
  // };

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.menuListLink} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <div className={`${css.wrapperHeder} container`}>
      <Link className={css.logoLink} to="/">
        <img
          src={logo}
          // src={require("../../assete/svg/Logo_TastyGo_Black_Desktop.svg")}
          alt="Logo"
        />

        <p className={css.logoText}>Tasty Go</p>
      </Link>
      {!isCenterMode && <ul className={css.menuList}>{elements}</ul>}
      <div className={css.wrapperIcon}>
        <div className={css.iconSearch}>
          <SvgSelector styles={css.search} id="search" />
        </div>
        {/* <button onClick={openModal} className={css.iconUser}>
          <SvgSelector styles={css.user} id="user" />
        </button> */}
        <Navbar />
        <div className={css.wrapperBasket}>
          <SvgSelector styles={css.bas} id="shoppingBasket" />
          <span className={css.countBasket}>0</span>
        </div>
      </div>
      {/* <div>
        <Link>
          <SvgSelector id="burgerDesktop" />
        </Link>
      </div> */}
      <div className={css.wrapperBurgerMobil}>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleBurgerMenu(true);
          }}
        >
          <SvgSelector styles={css.burgerMobil} id="burgerMobil" />
        </button>
      </div>
      {burgerMenuOpen && (
        <div
          className={css.burgerMenu}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ul className={css.menuList}>{elements}</ul>
          <button
            className={css.buttonClose}
            onClick={() => handleBurgerMenu(false)}
          >
            <SvgSelector id="buttonClose" />
          </button>
        </div>
      )}
      {/* {isAuthModalOpen && (
        <Modal close={closeModal}>
          {isAuthModal === "reg" && (
            <RegistrationForm chngForm={setAuthModal} closeReg={closeModal} />
          )}
          {isAuthModal === "log" && (
            <LoginForm chngForm={setAuthModal} closeReg={closeModal} />
          )}
        </Modal>
      )} */}
    </div>
  );
};
export default Header;
