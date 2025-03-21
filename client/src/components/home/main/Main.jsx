import React from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <section className={style.main}>
      <div className="container__inner">
        <div className={style.main__wrapper}>
          <h2>Проходи модули, накапливай опыт, становись увереннее!</h2>

          <div className={style.main__text}>
            <aside>
              <p>
                LoveBash — это интерактивная обучающая система, созданная
                специально для обычных пользователей и начинающих системных
                администраторов, которым важно не просто запомнить минимальное
                количество команд, а глубого погрузиться в мир Linux и освоить
                фундаментальные принципы работы в командной оболочке Bash.
              </p>
            </aside>
            <aside>
              <p>
                Система предлагает пошаговые тематические модули и практическое
                изучение Bash через эмулятор терминала, посредством которого
                пользователь будет выполнять не просто строго заданные
                инструкции и bash скрипты, а получит возможность
                экспериментировать, осваивать команды и находить собственные
                решения, формируя прочную основу для работы и администрирования
                Linux-систем.
              </p>
            </aside>
          </div>

          <Link to="/">Начни свой путь в мире Bash уже сегодня {">"}</Link>

          <ul className={style.main__list}>
            <li className={`${style.main__list} ${style.main__item__1}`}>
              <div className={style.main__item__con}>
                <div className={style.main__item__top}>
                  <div className={style.main__item__round}></div>
                  <div className={style.main__item__squere}></div>
                </div>

                <p>Основы написания shell скриптов</p>
              </div>
            </li>

            <li className={`${style.main__list} ${style.main__item__2}`}>
              <div className={style.main__item__con}>
                <div className={style.main__item__top}>
                  <div className={style.main__item__round}></div>
                  <div className={style.main__item__squere}></div>
                </div>

                <p>Обработка строк командным интерпретатором</p>
              </div>
            </li>

            <li className={`${style.main__list} ${style.main__item__3}`}>
              <div className={style.main__item__con}>
                <div className={style.main__item__top}>
                  <div className={style.main__item__round}></div>
                  <div className={style.main__item__squere}></div>
                </div>

                <p>Потоковое редактирование текста</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Main;
