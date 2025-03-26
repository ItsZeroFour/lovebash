import React, { useState } from "react";
import style from "./style.module.scss";
import deleteIcon from "../../assets/icons/users/delete.svg";
import paper from "../../assets/icons/modules/list.svg";
import paper2 from "../../assets/icons/user_main/list.svg";
import { useNavigate, Link } from "react-router-dom";

const Modules = () => {
  const [openModalSuccess, setOpenModalSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [hoveredTitle, setHoveredTitle] = useState(null);

  const navigate = useNavigate();

  const modulesData = [
    {
      id: 1,
      title: "Очень длинное наименование модуля 1, которое нужно сократить",
      date: "2023-01-01",
      status: "Доступен",
      tasks: 5,
    },
    {
      id: 2,
      title: "Наименование модуля 2",
      date: "2023-02-01",
      status: "Не доступен",
      tasks: 3,
    },
  ];

  const filteredModules = modulesData.filter((module) => {
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
    <aside className={style.modules}>
      {openModalSuccess && (
        <div className={style.modules__modal}>
          <div className={style.modules__modal__container}>
            <div className={style.modules__modal__top}>
              <img src={paper2} alt="paper" />
              <h4>Подтверждение удаления</h4>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              sequi ullam necessitatibus
            </p>

            <div className={style.modules__modal__buttons}>
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
        <div className={style.modules__wrapper}>
          <div className={style.modules__top}>
            <h1>Модули</h1>
            <Link to="/modules/create">Создать новый модуль</Link>
          </div>

          <div className={style.modules__filter}>
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
              <th>Модуль</th>
              <th>Дата создания</th>
              <th>Статус</th>
              <th>Кол-во заданий</th>
              <th></th>
            </tr>
            {filteredModules.map((module) => (
              <tr
                key={module.id}
                onClick={() =>
                  navigate(`/modules/create`, { state: { id: module.id } })
                }
              >
                <td>
                  <img src={paper} alt="paper" />
                </td>
                <td>{module.id}</td>
                <td
                  onMouseEnter={() => setHoveredTitle(module.id)}
                  onMouseLeave={() => setHoveredTitle(null)}
                  className={style.module__title_wrapper}
                >
                  {module.title.length > 25
                    ? module.title.substring(0, 25) + "..."
                    : module.title}

                  {hoveredTitle === module.id && (
                    <div className={style.module__full_title}>
                      {module.title}
                    </div>
                  )}
                </td>
                <td>{module.date}</td>
                <td>{module.status}</td>
                <td>{module.tasks}</td>
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

export default Modules;
