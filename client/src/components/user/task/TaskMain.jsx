import React from "react";
import style from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";

const TaskMain = () => {
  const navigate = useNavigate();

  return (
    <aside className={style.task}>
      <div className="container__inner">
        <div className={style.task__wrapper}>
          <div className={style.task__top}>
            <button onClick={() => navigate(-1)}>
              вернуться к заданиям модуля
            </button>

            <Link to="/user/task/2">перейти к следующему заданию</Link>
          </div>

          <h1>Модуль “Название модуля”</h1>

          <div className={style.task__info}>
            <h2>N.Тема задания</h2>
            <p>
              <span style={{ color: "#13bd32" }}>пройдено</span>/не пройдено
            </p>
          </div>

          <div className={style.task__main}>
            <div className={style.task__main__item}>
              <h4>Текст задания</h4>

              <div className={style.task__main__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  eum tempora unde nihil, natus nostrum quo obcaecati nisi
                  beatae deserunt. Temporibus iste nam nulla odit repellat
                  itaque, maiores adipisci ipsa molestias, vero veritatis?
                  Tempora odio asperiores quia repudiandae impedit, qui
                  reprehenderit nesciunt, voluptates at illum modi ipsum, fuga
                  fugit enim!
                </p>
              </div>
            </div>

            <p>Возможность использования терминала: присутствует/отсутствует</p>

            <div className={style.task__main__item}>
              <h4>Ответ пользователя</h4>

              <div className={style.task__main__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  eum tempora unde nihil, natus nostrum quo obcaecati nisi
                  beatae deserunt. Temporibus iste nam nulla odit repellat
                  itaque, maiores adipisci ipsa molestias, vero veritatis?
                  Tempora odio asperiores quia repudiandae impedit, qui
                  reprehenderit nesciunt, voluptates at illum modi ipsum, fuga
                  fugit enim!
                </p>
              </div>
            </div>

            <p>
              <span>Дата выполнения:</span> ггг-мм-дд чч-мм-сс
            </p>
          </div>

          <div className={style.task__button}>
            {/* 🐱
              Я так понял тут кнопка будет взаимодействовать с сервером,
              поэтому я решил не выполнять это в виде ссылки.
              Для перенаправления на страницу используйте функцию navigate
              Пример использования: navigate("/some")
            */}
            <button onClick={() => navigate("/user/task/complete/123")}>
              Начать задание
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TaskMain;
