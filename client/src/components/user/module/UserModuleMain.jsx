import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const UserModuleMain = () => {
  return (
    <aside className={style.user_module}>
      <div className="container__inner">
        <div className={style.user_module__wrapper}>
          <h1>Модуль курса “Изучение командной оболочки Bash”</h1>

          <div className={style.user_module__item}>
            <div className={style.user_module__item__main}>
              <Link to="#" className={style.user_module__item__content}>
                <div className={style.user_module__item__top}>
                  <h3>Название модуля</h3>
                  <p>новый/в процессе/завершен</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Reiciendis voluptate numquam, soluta harum laborum tempora
                  necessitatibus, debitis blanditiis commodi non iste quam
                  facilis, sunt repellat maxime vero aperiam sint! Odit impedit
                  quibusdam architecto voluptatibus maiores aspernatur
                  obcaecati! Ipsum itaque ipsam pariatur aspernatur, quaerat
                  eligendi fugiat ea assumenda adipisci molestiae a.
                </p>
              </Link>

              <div className={style.user_module__item__buttons}>
                <span>
                  <button>3 задания</button>

                  <button onClick={(e) => e.stopPropagation()}>
                    N выполненных заданий
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className={style.user_module__buttons}>
            <Link to="/">Теория</Link>
            <button>Список заданий</button>
          </div>

          <div className={style.user_module__tasks}>
            <h3>Задания модуля</h3>

            <ol>
              <li>
                <Link to="/user/task/1">
                  <h4>Задание 1</h4>
                  <p style={{ color: "#13bd32" }}>Пройдено</p>
                </Link>
              </li>

              <li>
                <Link to="/user/task/2">
                  <h4>Задание 2</h4>
                  <p style={{ color: "#13bd32" }}>Пройдено</p>
                </Link>
              </li>

              <li>
                <Link to="/user/task/3">
                  <h4>Задание 3</h4>
                  <p style={{ color: "#13bd32" }}>Пройдено</p>
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default UserModuleMain;
