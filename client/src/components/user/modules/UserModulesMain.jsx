import React, { useState } from "react";
import style from "./style.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import polygon from "../../../assets/icons/user_modules/polygon.svg";

const UserModulesMain = () => {
  const [taskIndex, setTaskIndex] = useState(null);
  const modules = [
    {
      _id: uuidv4(),
      name: "Название модуля",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo officia est facere incidunt! Optio iusto esse quae nisi ad ratione aut dicta aperiam facere. Cum amet eaque neque, ut totam exercitationem, magni cupiditate natus labore blanditiis, odio quia minima maxime veritatis omnis? Sed, reprehenderit! Reprehenderit odio atque voluptate accusamus!",
      tasks: [
        {
          name: "Тема задания",
          id: 1,
          isCompleted: true,
        },

        {
          name: "Тема задания",
          id: 2,
          isCompleted: false,
        },

        {
          name: "Тема задания",
          id: 3,
          isCompleted: false,
        },
      ],
    },

    {
      _id: uuidv4(),
      name: "Название модуля",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo officia est facere incidunt! Optio iusto esse quae nisi ad ratione aut dicta aperiam facere. Cum amet eaque neque, ut totam exercitationem, magni cupiditate natus labore blanditiis, odio quia minima maxime veritatis omnis? Sed, reprehenderit! Reprehenderit odio atque voluptate accusamus!",
      tasks: [
        {
          name: "Тема задания",
          id: 1,
          isCompleted: false,
        },

        {
          name: "Тема задания",
          id: 2,
          isCompleted: true,
        },

        {
          name: "Тема задания",
          id: 3,
          isCompleted: true,
        },
      ],
    },
  ];

  return (
    <aside className={style.user_modules}>
      <div className="container__inner">
        <div className={style.user_modules__wrapper}>
          <h1>Модули курса “Изучение командной оболочки Bash”</h1>

          <ul>
            {modules.map((item, index) => (
              <li key={item._id}>
                <div className={style.user_modules__item__main}>
                  <Link
                    to={`/user/module/${item._id}`}
                    className={style.user_modules__item__content}
                  >
                    <div className={style.user_modules__item__top}>
                      <h3>{item.name}</h3>
                      <p>новый/в процессе/завершен</p>
                    </div>
                    <p>{item.description}</p>
                  </Link>

                  <div className={style.user_modules__item__buttons}>
                    <span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // Останавливаем всплытие
                          taskIndex === index
                            ? setTaskIndex(null)
                            : setTaskIndex(index);
                        }}
                      >
                        {item.tasks.length}{" "}
                        {item.tasks.length === 1
                          ? "задание"
                          : item.tasks.length > 1 && item.tasks.length < 5
                          ? "задания"
                          : "заданий"}
                      </button>

                      <button onClick={(e) => e.stopPropagation()}>
                        N выполненных заданий
                      </button>
                    </span>
                  </div>

                  <Link to={`/user/module/${item._id}`}>
                    <img src={polygon} alt="polygon" />
                  </Link>
                </div>
                {taskIndex === index && (
                  <div className={style.user_modules__tasks}>
                    <h3>Задания модуля</h3>

                    <ol>
                      {item.tasks.map((item) => (
                        <li key={item.id}>
                          <Link to={`/user/task/${item._id}`}>
                            <h4>{item.name}</h4>
                            <p
                              style={
                                item.isCompleted
                                  ? { color: "#13bd32" }
                                  : { color: "#0b3145" }
                              }
                            >
                              {item.isCompleted ? "Пройдено" : "Не пройдено"}
                            </p>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default UserModulesMain;
