import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <aside className={style.user}>
      <div className="container__inner">
        <div className={style.user__wrapper}>
          <div className={style.user__top}>
            <h3>Пользователь xxxxxxx</h3>
            <button>Удалить</button>
          </div>

          <div className={style.user__info}>
            <h2>Общая информация</h2>

            <ul>
              <li>
                <p>
                  <span>Имя пользователя</span>: имя пользователя
                </p>
              </li>

              <li>
                <p>
                  <span>Дата регистрации</span>: активен/не активен
                </p>
              </li>

              <li>
                <p>
                  <span>Электронная почта</span>: email
                </p>
              </li>

              <li>
                <p>
                  <span>Последний вход</span>: гггг-мм-дд чч-мм-сс
                </p>
              </li>
            </ul>
          </div>

          <div className={style.user__stats}>
            <h2>Статистика по пройденным модулям/заданиям </h2>

            <ul>
              <li>
                <p>
                  <span>Количество пройденных заданий</span>: xxx
                </p>
              </li>

              <li>
                <p>
                  <span>Количество пройденных модулей</span>: xxx
                </p>
              </li>
            </ul>
          </div>

          <div className={style.user__tasks}>
            <div className={style.user__tasks__main__info}>
              <div className={style.user__tasks__top}>
                <h2>№ Название модуля</h2>
                <p>новый/в процессе/завершен</p>
              </div>

              <div className={style.user__tasks__info}>
                <p>Количество заданий: x</p>
                <p>Выполненное количество заданий: x</p>
              </div>
            </div>

            <div className={style.user__tasks__tasks}>
              <h3>Задания модуля</h3>

              <ol>
                <li>
                  <Link to="/user/task/123">
                    <p>Тема задания</p>
                    <p
                      style={true ? { color: "#13bd32" } : { color: "#0b3145" }}
                    >
                      Пройдено
                    </p>
                  </Link>
                </li>

                <li>
                  <Link to="/user/task/123">
                    <p>Тема задания</p>
                    <p>Не Пройдено</p>
                  </Link>
                </li>

                <li>
                  <Link to="/user/task/123">
                    <p>Тема задания</p>
                    <p>Не Пройдено</p>
                  </Link>
                </li>
              </ol>
            </div>
          </div>

          <div className={style.user__tasks__main__info}>
            <div className={style.user__tasks__top}>
              <h2>№ Название модуля</h2>
              <p>новый/в процессе/завершен</p>
            </div>

            <div className={style.user__tasks__info}>
              <p>Количество заданий: x</p>
              <p>Выполненное количество заданий: x</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default User;
