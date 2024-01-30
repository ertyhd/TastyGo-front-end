import { NavLink, Link } from "react-router-dom";
import { SvgSelector } from "../../../shared/components/SvgSelector/SvgSelector";
import { HederBurgerMenuSvgSelector } from "../../../shared/components/SvgSelector/HederBurgerMenuSvgSelector";
import contactsItemsData from "../../../assete/data/contactsItemsData";
import items from "../items";
import logo from "../../../assete/svg/Logo_TastyGo_Black_Desktop.svg";
import css from './BurgerMenu.module.scss'

const BurgerMenu = ({ handleBurgerMenu }) => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.menuListLink} to={link}>
        {text}
      </NavLink>
    </li>
  ));
    const elementsContacts = contactsItemsData.map(
      ({ id, svgId, contactData }) => (
        <li className={css.burgerMenuContactItem} key={id}>
          <div className={css.wrapperSvgSelector}>
            <SvgSelector id={svgId} />
          </div>
          <p className={css.burgerMenuContactItemText}>{contactData}</p>
        </li>
      )
    );
  return (
    <div
      className={css.burgerMenu}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <Link className={css.logoLink} to="/">
        <img
          src={logo}
          // src={require("../../assete/svg/Logo_TastyGo_Black_Desktop.svg")}
          alt="Logo"
        />
      </Link>
          <form className={css.burgerForm}>
              {/* <SvgSelector id="search"/> */}
        <input className={css.burgerInputSearch} placeholder="Search"></input>
      </form>
      <ul className={css.menuList}>{elements}</ul>
      <div className={css.burgerSingIn}>
        <HederBurgerMenuSvgSelector id="burgerUser" />
        <p>Sign in</p>
      </div>
      <ul className={css.burgerMenuContactList}>{elementsContacts}</ul>
      <button
        className={css.buttonClose}
        onClick={() => handleBurgerMenu(false)}
      >
        <SvgSelector id="buttonClose" />
      </button>
    </div>
  );
};
export default BurgerMenu;
