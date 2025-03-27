import React from "react";
import style from "./style.module.scss";
import head_img from "../../../assets/images/home/head__image.png";
import { Link } from "react-router-dom";

const Head = () => {
  return (
    <section className={style.head}>
      <div className="container">
        <div className={style.head__wrapper}>
          <img src={head_img} alt="macbook air 15" />

          <div className={style.head__main}>
            <h1>
              Погрузись в увлекательный мир <span>Bash!</span>
            </h1>
            <p>
              LoveBash — это лучшая интерактивная платформа для изучения
              командной оболочки Bash. Освой новые команды, прокачай навыки
              и стань уверенным администратором Linux-систем и опытным
              пользователем терминала!
            </p>
            <Link to="/register">Зарегистрироваться</Link>

            <ul>
              <li>
                <p>
                  <span>🔹</span> Изучай
                </p>
              </li>

              <li>
                <p>
                  <span>🔹</span> Пробуй
                </p>
              </li>

              <li>
                <p>
                  <span>🔹</span> Совершенствуйся
                </p>
              </li>
            </ul>

            <p>Присоединяйся и открой для себя мир Bash с LoveBash! 🚀</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Head;
