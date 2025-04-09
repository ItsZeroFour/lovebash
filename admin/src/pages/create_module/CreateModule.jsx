import React, { useState } from "react";
import style from "./style.module.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import arrowUp from "../../assets/icons/create_module/arrow-up.svg";
import arrowDown from "../../assets/icons/create_module/arrow-down.svg";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const allTasks = [
  { id: 1, name: "Задание 1" },
  { id: 2, name: "Задание 2" },
  { id: 3, name: "Задание 3" },
  { id: 4, name: "Задание 4" },
];

const CreateModule = () => {
  const [description, setDescription] = useState("");
  const [theory, setTheory] = useState("");
  const [title, setTitle] = useState("");
  const [isEditingMode, setIsEditingMode] = useState(true);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [openTheory, setOpenTheory] = useState(false);
  const [status, setStatus] = useState("active");
  const [errors, setErrors] = useState({});

  console.log(selectedTasks);

  const navigate = useNavigate();

  /* 🤩 Тут мы получаем id модуля. От этого можно понимать, создаем ли мы новый модуль или редактируем уже существующий */
  const { state } = useLocation();

  console.log(state);

  const handleTaskChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedIds = selectedOptions.map((option) => Number(option.value));
    const selectedObjects = allTasks.filter((task) =>
      selectedIds.includes(task.id)
    );
    setSelectedTasks(selectedObjects);
  };

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  const moveTask = (index, direction) => {
    const newTasks = [...selectedTasks];
    const targetIndex = index + direction;

    if (targetIndex >= 0 && targetIndex < newTasks.length) {
      const [movedTask] = newTasks.splice(index, 1);
      newTasks.splice(targetIndex, 0, movedTask);
      setSelectedTasks(newTasks);
    }
  };

  const validate = () => {
    let newErrors = {};
    if (!title.trim()) newErrors.title = "Название модуля обязательно";
    if (!description.trim()) newErrors.description = "Описание обязательно";
    if (!theory.trim()) newErrors.theory = "Теория обязательна";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      navigate("/modules");
    }
  };

  return (
    <aside className={style.create_module}>
      <div className="container__inner">
        <div className={style.create_module__wrapper}>
          <div className={style.create_module__top}>
            <h2>
              {state ? `Редактирование модуля ${state?.id}` : "Создание модуля"}
            </h2>

            <div className={style.create_module__top__buttons}>
              <button
                onClick={handleSave}
                // disabled={!title || !description || !theory}
              >
                Сохранить
              </button>
              <button onClick={() => navigate("/modules")}>Отмена</button>
            </div>
          </div>

          <div className={style.create_module__states}>
            <button
              style={
                isEditingMode
                  ? { background: "#0b3145", color: "#fff" }
                  : { background: "#dbdfe2", color: "#0b3145" }
              }
              onClick={() => setIsEditingMode(true)}
            >
              Режим редактирования
            </button>
            <button
              style={
                !isEditingMode
                  ? { background: "#0b3145", color: "#fff" }
                  : { background: "#dbdfe2", color: "#0b3145" }
              }
              onClick={() => setIsEditingMode(false)}
            >
              Глазами пользователя
            </button>
          </div>

          {isEditingMode ? (
            <div className={style.create_module__main}>
              <aside className={style.create_module__main__left}>
                <div className={style.create_module__title}>
                  <label htmlFor="title">Название модуля</label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Введите название модуля..."
                  />

                  {errors.title && (
                    <span className={style.error}>{errors.title}</span>
                  )}
                </div>

                <div
                  className={style.create_module__text}
                  data-color-mode="light"
                >
                  <p>Краткое описание модуля</p>
                  <MDEditor value={description} onChange={setDescription} />
                  {errors.description && (
                    <span className={style.error}>{errors.description}</span>
                  )}
                </div>

                <div
                  className={style.create_module__text}
                  data-color-mode="light"
                >
                  <p>Теория к модулю</p>
                  <MDEditor value={theory} onChange={setTheory} theme="light" />
                  {errors.theory && (
                    <span className={style.error}>{errors.theory}</span>
                  )}
                </div>
              </aside>
              <aside className={style.create_module__main__right}>
                <div className={style.create_module__status}>
                  <p>Статус модуля</p>

                  <div className={style.create_module__status__inputs}>
                    <div>
                      <input
                        type="radio"
                        id="active"
                        name="status"
                        checked={status === "active"}
                        onChange={() => setStatus("active")}
                      />
                      <label htmlFor="active">доступен</label>
                    </div>

                    <div>
                      <input
                        type="radio"
                        id="notactive"
                        name="status"
                        checked={status === "notactive"}
                        onChange={() => setStatus("notactive")}
                      />
                      <label htmlFor="notactive">не доступен</label>
                    </div>
                  </div>

                  <div className={style.create_module__tasks}>
                    <p>Задания</p>
                    <button onClick={toggleSelect}>
                      {isSelectOpen
                        ? "Скрыть задания"
                        : "Выберите задания из списка"}
                    </button>
                    {isSelectOpen && (
                      <select
                        multiple
                        value={selectedTasks.map((task) => String(task.id))}
                        onChange={handleTaskChange}
                      >
                        {allTasks.map((task) => (
                          <option key={task.id} value={task.id}>
                            {task.name}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>

                  <div className={style.create_module__tasks__selected}>
                    <p>Сформированный список заданий</p>

                    <ol>
                      {selectedTasks.map((item, index) => (
                        <li key={item.id}>
                          <p>{index + 1}.</p>

                          <div
                            onClick={() =>
                              navigate(`/tasks/create`, {
                                state: { id: item.id },
                              })
                            }
                            className={
                              style.create_module__tasks__selected__item
                            }
                          >
                            <p>{item.name}</p>
                          </div>

                          <div
                            className={
                              style.create_module__tasks__selected__buttons
                            }
                          >
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                moveTask(index, -1);
                              }}
                            >
                              <img src={arrowUp} alt="up" />
                            </button>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                moveTask(index, 1);
                              }}
                            >
                              <img src={arrowDown} alt="down" />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </aside>
            </div>
          ) : (
            <div className={style.create_module__preview}>
              <div className={style.create_module__preview__module}>
                <h3>{title}</h3>
                {/* 🧐 Эта конструкция служит для отображения текста, который мы ввели в редактор */}
                <MDEditor.Markdown
                  source={description}
                  style={{
                    backgroundColor: "transparent",
                    color: "#000",
                    fontFamily: "Kalnia",
                    lineHeight: 1,
                    marginBottom: "5px",
                  }}
                />

                <div className={style.create_module__preview__module__buttons}>
                  <button>{selectedTasks.length} заданий</button>
                  <button>N выполненных заданий</button>
                </div>
              </div>

              <div className={style.create_module__preview__buttons}>
                <button
                  style={
                    openTheory
                      ? { background: "#0b3145", color: "#fff" }
                      : { background: "#dbdfe2", color: "#0b3145" }
                  }
                  onClick={() => setOpenTheory(true)}
                >
                  Теория
                </button>
                <button
                  style={
                    !openTheory
                      ? { background: "#0b3145", color: "#fff" }
                      : { background: "#dbdfe2", color: "#0b3145" }
                  }
                  onClick={() => setOpenTheory(false)}
                >
                  Список заданий
                </button>
              </div>

              {!openTheory ? (
                <div className={style.create_module__preview__tasks}>
                  <h3>Задания модуля</h3>

                  <ol>
                    {selectedTasks.map((item, index) => (
                      <li key={item.id}>
                        <Link
                          to="/tasks/create"
                          /* Тут скорее всего надо будет отредактировать передачу id */
                          state={{ id: item.id || index }}
                        >
                          <p>
                            {index + 1}. {item.name}
                          </p>
                          <p>Не пройдено</p>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : (
                <div className={style.create_module__preview__theory}>
                  <h3>Теория</h3>

                  {/* 🧐 Эта конструкция служит для отображения текста, который мы ввели в редактор */}
                  <MDEditor.Markdown
                    source={theory}
                    style={{
                      backgroundColor: "transparent",
                      color: "#000",
                      fontFamily: "Kalnia",
                      lineHeight: 1,
                      marginBottom: "5px",
                    }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default CreateModule;
