import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import logo from "../../assets/logo.svg";
import exit from "../../assets/icons/left_panel/exit.svg";
import { v4 as uuidv4 } from "uuid";
import { Link, useLocation } from "react-router-dom";

const LeftPanel = ({ setOpenMenu, openMenu }) => {
  const location = useLocation();
  /* Modules */
  const [showModules, setShowModules] = useState(false);
  const [hoveredModule, setHoveredModule] = useState(null);
  const [taskPosition, setTaskPosition] = useState({ top: 0, left: 0 });

  /* Mobile adaptation modules */
  const [openModulesMobile, setOpenModulesMobile] = useState(false);
  const [openModuleTasksId, setOpenModuleTasksId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = [
    { name: "Главная", url: "/user/main", _id: uuidv4() },
    { name: "Модули", url: "/user/modules", _id: uuidv4() },
    { name: "Эмулятор Терминала", url: "/user/terminal", _id: uuidv4() },
    { name: "Настройки", url: "/user/settings", _id: uuidv4() },
  ];

  const modules = [
    {
      title: "Модуль 1",
      _id: "module-1",
      tasks: [
        { title: "Задание 1", _id: uuidv4() },
        { title: "Задание 2", _id: uuidv4() },
      ],
    },
    {
      title: "Модуль 2",
      _id: "module-2",
      tasks: [
        { title: "Задание 1", _id: uuidv4() },
        { title: "Задание 2", _id: uuidv4() },
      ],
    },

    {
      title: "Модуль 3",
      _id: "module-3",
      tasks: [
        { title: "Задание 1", _id: uuidv4() },
        { title: "Задание 2", _id: uuidv4() },
        { title: "Задание 3", _id: uuidv4() },
        { title: "Задание 4", _id: uuidv4() },
      ],
    },

    {
      title: "Модуль 4",
      _id: "module-4",
      tasks: [
        { title: "Задание 1", _id: uuidv4() },
        { title: "Задание 2", _id: uuidv4() },
        { title: "Задание 3", _id: uuidv4() },
      ],
    },
  ];

  /* 🙀 Функции для отображения списка задачь в позиции напротив модуля */
  const handleMouseEnterModule = (event, moduleId) => {
    if (!hoveredModule) {
      const rect = event.target.getBoundingClientRect();
      setHoveredModule(moduleId);
      setTaskPosition({
        top: rect.top + window.scrollY,
        left: rect.right + 10,
      });
    }
  };

  const handleMouseLeaveModule = () => {
    setTimeout(() => {
      setHoveredModule(null);
    }, 200);
  };

  const handleMouseEnterTasks = () => {
    setHoveredModule((prev) => prev);
  };

  return (
    <React.Fragment>
      {windowWidth > 1320 ? (
        <aside
          className={`${style.left_panel} ${
            location.pathname.startsWith("/user/task/complete") &&
            style.left_panel__special
          }`}
        >
          <div className={style.left_panel__wrapper}>
            <div className={style.left_panel__top}>
              <Link to="/">
                <img src={logo} alt="logo" />
                <img src={exit} alt="exit" />
              </Link>
            </div>

            <div className={style.left_panel__menu}>
              <h4>Меню</h4>
              <ul>
                {menu.map((item) => {
                  const isActive =
                    item.name === "Модули"
                      ? location.pathname.startsWith(`${item.url}`) ||
                        location.pathname.startsWith("/user/task")
                      : item.url === "/"
                      ? location.pathname === "/user"
                      : location.pathname.startsWith(`${item.url}`);

                  return (
                    <li
                      key={item._id}
                      onClick={() => setOpenMenu(false)}
                      /*
                      📟 Добавляем выподающий список только если у нас стоит категория "Модули"
                    */
                      onMouseEnter={() =>
                        item.name === "Модули" && setShowModules(true)
                      }
                      onMouseLeave={() =>
                        item.name === "Модули" && setShowModules(false)
                      }
                      style={
                        isActive
                          ? { background: "#fff", color: "#000" }
                          : { background: "none" }
                      }
                    >
                      <Link to={item.url}>{item.name}</Link>
                      {/* 
                      👾 Отображаем все модули из массива, а так же их задания из каждого модуля,
                      на который попал курсор пользователя
                    */}
                      {item.name === "Модули" && showModules && (
                        <ul className={style.left_panel__modules}>
                          {modules.map((module) => (
                            <li
                              key={module._id}
                              onMouseEnter={(e) =>
                                handleMouseEnterModule(e, module._id)
                              }
                              onMouseLeave={handleMouseLeaveModule}
                            >
                              <Link to={`/user/modules/${module._id}`}>
                                {module.title}
                              </Link>
                              {hoveredModule === module._id && (
                                <ul
                                  className={style.left_panel__modules__items}
                                  style={{
                                    top: taskPosition.top - 240,
                                    left: taskPosition.left,
                                  }}
                                  onMouseEnter={handleMouseEnterTasks}
                                  onMouseLeave={handleMouseLeaveModule}
                                >
                                  {modules
                                    .find((m) => m._id === hoveredModule)
                                    ?.tasks.map((task) => (
                                      <li key={task._id}>
                                        <Link
                                          to={`/user/task/${task._id}`}
                                          state={{ id: module._id }}
                                        >
                                          {task.title}
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </aside>
      ) : (
        /* 🙊 Версия для мобильных устройств */
        openMenu && (
          <aside className={style.left_panel}>
            <div className={style.left_panel__wrapper}>
              <div className={style.left_panel__top}>
                <Link to="/">
                  <img src={logo} alt="logo" />
                  <img src={exit} alt="exit" />
                </Link>
                <button onClick={() => setOpenMenu(false)}>
                  <div></div>
                </button>
              </div>

              <div className={style.left_panel__menu}>
                <h4>Меню</h4>
                <ul>
                  {menu.map((item) => (
                    <li
                      key={item._id}
                      style={
                        location.pathname === item.url
                          ? { background: "#fff", color: "#000" }
                          : { background: "none" }
                      }
                    >
                      {item.name === "Модули" ? (
                        <button
                          onClick={() =>
                            setOpenModulesMobile(!openModulesMobile)
                          }
                        >
                          Модули
                        </button>
                      ) : (
                        <Link
                          onClick={() => {
                            setOpenMenu(false);
                            setOpenModulesMobile(false);
                            setOpenModuleTasksId(null);
                          }}
                          to={item.url}
                        >
                          {item.name}
                        </Link>
                      )}

                      {openModulesMobile && item.name === "Модули" && (
                        <ul className={style.left_panel__modules__mobile}>
                          {modules.map((item) => (
                            <li key={item._id}>
                              <button
                                onClick={() => setOpenModuleTasksId(item._id)}
                              >
                                {item.title}
                              </button>

                              {openModuleTasksId === item._id && (
                                <ol>
                                  {item.tasks.map((task) => (
                                    <li key={task._id}>
                                      <Link to={`/task/${task._id}`}>
                                        {task.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ol>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        )
      )}
    </React.Fragment>
  );
};

export default LeftPanel;
