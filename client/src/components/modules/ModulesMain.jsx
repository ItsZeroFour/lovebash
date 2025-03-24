import React, { useState } from "react";
import style from "./style.module.scss";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const ModulesMain = () => {
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
        },

        {
          name: "Тема задания",
          id: 2,
        },

        {
          name: "Тема задания",
          id: 3,
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
        },

        {
          name: "Тема задания",
          id: 2,
        },

        {
          name: "Тема задания",
          id: 3,
        },
      ],
    },
  ];

  return (
    <section className={style.modules}>
      <div className="container__inner">
        <div className={style.modules__wrapper}>
          <h1>Модули курса “Изучение командной оболочки Bash”</h1>

          <ul>
            {modules.map((item, index) => (
              <li key={item._id}>
                <div className={style.modules__item__main}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <button
                    onClick={() =>
                      taskIndex === index
                        ? setTaskIndex(null)
                        : setTaskIndex(index)
                    }
                  >
                    {item.tasks.length}{" "}
                    {item.tasks.length === 1
                      ? "задание"
                      : item.tasks.length > 1 && item.tasks.length < 5
                      ? "задания"
                      : "заданий"}
                  </button>
                </div>
                {taskIndex === index && (
                  <div className={style.modules__tasks}>
                    <h3>Задания модуля</h3>

                    <ol>
                      {item.tasks.map((item) => (
                        <li key={item.id}>
                          {/* <Link to={`/user/task/${item.id}`}>
                            <h4>{item.name}</h4>
                          </Link> */}

                          <Link to={``}>
                            <h4>{item.name}</h4>
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
    </section>
  );
};

export default ModulesMain;
