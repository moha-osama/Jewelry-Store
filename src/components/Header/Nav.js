import classes from "./Nav.module.css";

import { NavLink, Link } from "react-router-dom";

import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Nav = () => {
  const dispatch = useDispatch();

  let ActiveclassName = ({ isActive }) => (isActive ? classes.isActive : "");

  const toggleCartHadnler = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link to="/">
          <h1>JewelryStore</h1>
        </Link>
      </div>
      <input id={classes.check} type="checkbox" />
      <label htmlFor={classes.check} className={classes["check-btn"]}>
        <svg
          viewBox="0 0 1024 1024"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
        </svg>
      </label>
      <div className={classes["nav-section"]}>
        <nav className={classes["pages-nav"]}>
          <ul>
            <li>
              <NavLink to="/" className={ActiveclassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={ActiveclassName}>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink>Contact</NavLink>
            </li>
          </ul>
        </nav>
        <nav className={classes["actions-nav"]}>
          <ul>
            <li>
              <AiOutlineHeart />
            </li>
            <li onClick={toggleCartHadnler}>
              <AiOutlineShopping />
            </li>
            <li>
              <Link to="/auth?mode=login">
                <AiOutlineUser />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
