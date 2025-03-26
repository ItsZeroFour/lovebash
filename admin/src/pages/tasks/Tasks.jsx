import React, { useState } from "react";
import style from "./style.module.scss";
import deleteIcon from "../../assets/icons/users/delete.svg";
import paper from "../../assets/icons/modules/list.svg";
import paper2 from "../../assets/icons/user_main/list.svg";
import { useNavigate, Link } from "react-router-dom";

const Tasks = () => {
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [hoveredTaskId, setHoveredTaskId] = useState(null);

  const navigate = useNavigate();

  const tasksData = [
    {
      id: 1,
      title: "Наименование задания 1",
      date: "2023-01-01",
      status: "Доступен",
      module: "отсутствует",
      isValid: true,
      tasks: 5,
    },

    {
      id: 2,
      title: "Наименование задания 2",
      date: "2023-01-01",
      status: "Доступен",
      module: "отсутствует",
      isValid: true,
      tasks: 5,
    },
  ];

  const filteredTasks = tasksData.filter((module) => {
    const matchesSearch = module.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus && selectedStatus !== ""
        ? module.status === selectedStatus
        : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <aside className={style.tasks}>
      {openModalSuccess && (
        <div className={style.tasks__modal}>
          <div className={style.tasks__modal__container}>
            <div className={style.tasks__modal__top}>
              <img src={paper2} alt="paper" />
              <h4>Подтверждение удаления</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sequi ullam necessitatibus
            </p>

            <div className={style.tasks__modal__buttons}>
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
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container__inner">
        <div className={style.tasks__wrapper}>
          <div className={style.tasks__top}>
            <h1>Задания</h1>
            <Link to="/tasks/create">Создать новое задание</Link>
          </div>

          <div className={style.tasks__filter}>
            <input
              type="text"
              placeholder="Поиск по названию..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option value="">Статусы</option>
              <option value="Доступен">Доступен</option>
              <option value="Не доступен">Не доступен</option>
            </select>
          </div>

          <table>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Задание</th>
              <th>Дата создания</th>
              <th>Статус</th>
              <th>Модуль</th>
              <th>Валидность</th>
              <th></th>
            </tr>
            {filteredTasks.map((task) => (
              <tr
                key={task.id}
                onClick={() =>
                  navigate(`/tasks/create`, { state: { id: task.id } })
                }
              >
                <td>
                  <img src={paper} alt="paper" />
                </td>
                <td>{task.id}</td>
                <td
                  title={task.title}
                  onMouseEnter={() => setHoveredTaskId(task.id)}
                  onMouseLeave={() => setHoveredTaskId(null)}
                >
                  {task.title.length > 20
                    ? task.title.substring(0, 20) + "..."
                    : task.title}

                  {hoveredTaskId === task.id && (
                    <div className={style.task__full_title}>{task.title}</div>
                  )}
                </td>
                <td>{task.date}</td>
                <td>{task.status}</td>
                <td>{task.module}</td>
                <td>{task.isValid ? "true" : "false"}</td>
                <td>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenModalSuccess(true);
                    }}
                  >
                    <img src={deleteIcon} alt="delete" />
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </aside>
  );
};

export default Tasks;
