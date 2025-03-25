import React from "react";
import style from "./style.module.scss";
import { useParams, useNavigate } from "react-router-dom";

const UserTask = () => {
  /* 🫨 Тут мы получаем id из параметра в url */
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <aside className={style.user_task}>
      <div className="container__inner">
        <div className={style.user_task__wrapper}>
          <button onClick={() => navigate(-1)}>
            вернуться к странице пользователя
          </button>

          <h3>Пользователь xxxxxxx</h3>

          <div className={style.user_task__info}>
            <h3>Основная информация по модулю</h3>

            <div className={style.user_task__info__item}>
              <p>
                <span>ID модуля</span>: xxx
              </p>
              <p>
                <span>Наименование модуля</span>: наименование модуля
              </p>
            </div>
          </div>

          <div className={style.user_task__info__main}>
            <div className={style.user_task__info__main__top}>
              <h3>Основная информация по заданию</h3>
              <p>пройдено/не пройдено</p>
            </div>

            <ul>
              <li>
                <p>
                  <span>ID задания</span>: xxx
                </p>
              </li>

              <li>
                <p>
                  <span>Тип проверки</span>: тип проверки
                </p>
              </li>
              <li>
                <p>
                  <span>Тема задания</span>: тема задания
                </p>
              </li>
              <li>
                <p>
                  <span>Тип задания</span>: тип задания
                </p>
              </li>
              <li>
                <p>
                  <span>Дата выполнения</span>: ггг-мм-дд чч-мм-сс
                </p>
              </li>
            </ul>
          </div>

          <div className={style.user_task__answers}>
            <div className={style.user_task__answers__item}>
              <h2>Текст задания</h2>

              <div className={style.user_task__answers__item__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit modi aliquid repudiandae provident error ducimus ipsa
                  quis officia blanditiis. Eum dolores et impedit in enim
                  suscipit necessitatibus tenetur voluptates facere? Amet harum
                  sint consectetur quasi est laudantium, similique reiciendis,
                  soluta et error vero fuga, labore illo aliquid magni
                  reprehenderit iste.
                </p>
              </div>

              <p>
                <span>Используемые файлы задания</span>: отсутствуют/список
                названий файлов через запятую
              </p>
            </div>

            <div className={style.user_task__answers__item}>
              <h3>Ответ администратора (скрипт):</h3>

              <div className={style.user_task__answers__item__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit modi aliquid repudiandae provident error ducimus ipsa
                  quis officia blanditiis. Eum dolores et impedit in enim
                  suscipit necessitatibus tenetur voluptates facere? Amet harum
                  sint consectetur quasi est laudantium, similique reiciendis,
                  soluta et error vero fuga, labore illo aliquid magni
                  reprehenderit iste.
                </p>
              </div>
            </div>

            <div className={style.user_task__answers__item}>
              <h3>Ответ пользователя (скрипт):</h3>

              <div className={style.user_task__answers__item__text}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit modi aliquid repudiandae provident error ducimus ipsa
                  quis officia blanditiis. Eum dolores et impedit in enim
                  suscipit necessitatibus tenetur voluptates facere? Amet harum
                  sint consectetur quasi est laudantium, similique reiciendis,
                  soluta et error vero fuga, labore illo aliquid magni
                  reprehenderit iste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default UserTask;
