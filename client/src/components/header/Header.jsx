import React from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <Link className={style.header__link__signin} to="/signin">
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
