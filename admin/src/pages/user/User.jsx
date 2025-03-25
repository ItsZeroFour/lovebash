import React, { useState } from "react";
import style from "./style.module.scss";
import { Link } from "react-router-dom";
import paper from "../../assets/icons/user_main/user-check.svg";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [openModuleTasks, setOpenModuleTasks] = useState(null);

  const username = "длинное имя пользователя13276432876432876243873246872346"; // Пример длинного имени пользователя
  const truncatedUsername =
    username.length > 10 ? username.slice(0, 10) + "..." : username;

  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Название модуля 1",
      status: "новый",
      totalTasks: 5,
      completedTasks: 3,
      tasks: [
        {
          id: 1,
          title: "Тема задания 1",
          status: true,
        },
        {
          id: 2,
          title: "Тема задания 2",
          status: false,
        },
        {
          id: 3,
          title: "Тема задания 3",
          status: false,
        },
      ],
    },
    {
      id: 2,
      title: "Название модуля 2",
      status: "в процессе",
      totalTasks: 4,
      completedTasks: 2,
      tasks: [
        {
          id: 4,
          title: "Тема задания 4",
          status: true,
        },
        {
          id: 5,
          title: "Тема задания 5",
          status: false,
        },
      ],
    },
  ];

  return (
    <aside className={style.user}>
      {openModalSuccess && (
        <div className={style.user__modal}>
          <div className={style.user__modal__container}>
            <div className={style.user__modal__top}>
              <img src={paper} alt="paper" />
              <h4>Подтверждение удаления</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sequi ullam necessitatibus
            </p>

            <div className={style.user__modal__buttons}>
              <button
                onClick={() => {
                  setOpenModalSuccess(false);
                }}
              >
                Отмена
              </button>
              <button
                onClick={() => {
                  setOpenModalSuccess(false);
                  navigate("/users");
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container__inner">
        <div className={style.user__wrapper}>
          <div className={style.user__top}>
            <h3>Пользователь xxxxxxx</h3>
            <button onClick={() => setOpenModalSuccess(true)}>Удалить</button>
          </div>

          <div className={style.user__info}>
            <h2>Общая информация</h2>

            <ul>
              <li>
                <p>
                  <span>Имя пользователя</span>:
                  <div
                    title={username}
                    style={{
                      cursor: "pointer",
                      background: openModalSuccess ? "#dbdfe2" : "transparent",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.innerText = username;
                      e.currentTarget.style.background = "#dbdfe2";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.innerText = truncatedUsername;
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {truncatedUsername}
                  </div>
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
            {modules.map((module) => (
              <Link to={`/module/edit/${module.id}`}>
                <div key={module.id} className={style.user__tasks__main__info}>
                  <div className={style.user__tasks__top}>
                    <h2>{module.title}</h2>
                    <p>{module.status}</p>
                  </div>

                  <div className={style.user__tasks__info}>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setOpenModuleTasks(module.id);
                      }}
                    >
                      Количество заданий: {module.totalTasks}
                    </button>
                    <p>
                      Выполненное количество заданий: {module.completedTasks}
                    </p>
                  </div>
                </div>

                {openModuleTasks === module.id && (
                  <div className={style.user__tasks__tasks}>
                    <h3>Задания модуля</h3>
                    <ol>
                      {module.tasks.map((task) => (
                        <li key={task.id}>
                          <Link to={`/user/task/${task.id}`}>
                            <p>{task.title}</p>
                            <p
                              style={
                                task.status
                                  ? { color: "#13bd32" }
                                  : { color: "#0b3145" }
                              }
                            >
                              {task.status ? "Пройдено" : "Не Пройдено"}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default User;
