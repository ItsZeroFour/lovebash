import React from "react";
import style from "./style.module.scss";
import user from "../../assets/icons/user_account/user.svg";
import { Link } from "react-router-dom";

const UserTop = ({ setOpenMenu, openMenu }) => {
  return (
    <header className={style.user_top}>
      <div className="container__inner">
        <div className={style.user_top__wrapper}>
          <div className={style.user_top__user}>
            <button onClick={() => setOpenMenu(!openMenu)}>
              <div></div>
            </button>

            <Link to="/">
              <div className={style.user_top__user__name}>
                <p>Имя пользователя</p>
                <p>Администратор</p>
              </div>

              <div className={style.user_top__user__avatar}>
                <img src={user} alt="user" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserTop;
