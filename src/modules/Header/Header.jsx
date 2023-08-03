import { Link, NavLink } from 'react-router-dom';

import { SvgSelector } from '../../shared/components/SvgSelector/SvgSelector';

import css from './heder.module.scss'
import items from "./items";
const Header = () => {

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.menuListLink} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <div className={`${css.wrapperHeder} container`}>
      <ul className={css.menuList}>{elements}</ul>
      <div className={css.wrapperIcon}>
        <div className={css.iconSearch}>
          <SvgSelector styles={css.search} id="search" />
        </div>
        <div className={css.iconUser}>
          <SvgSelector styles={css.user} id="user" />
        </div>
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
        <Link>
          <SvgSelector styles={css.burgerMobil} id="burgerMobil" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
