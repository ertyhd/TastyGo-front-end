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
    <div className={`${css.wrapperHeder} ${css.container}`}>
      <ul className={css.menuList}>{elements}</ul>
      <div className={css.wrapperIcon}>
        <SvgSelector id="search" />
        <SvgSelector id="user" />
        <SvgSelector id="shoppingBag" />
      </div>
      <div>
        <Link>
          <SvgSelector id="burgerDesktop" />
        </Link>
      </div>
    </div>
  );
};
export default Header;
